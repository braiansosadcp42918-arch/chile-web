import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Bookmark, BookmarkCheck, Check, Copy } from "lucide-react";
import { articleBySlug } from "@/data/articles";
import { categoryById } from "@/data/categories";
import { useSaved } from "@/lib/saved";
import { ArticleCard } from "@/components/ArticleCard";
import type { Reference } from "@/data/types";

export const Route = createFileRoute("/articulo/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Artículo no encontrado | Chile 360" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    return { meta: [
      { title: `${a.title} | Chile 360` },
      { name: "description", content: a.summary },
      { property: "og:title", content: a.title },
      { property: "og:description", content: a.summary },
      { property: "og:type", content: "article" },
    ] };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return <div className="container-site py-24 text-center"><h1 className="text-3xl font-semibold">Este artículo no existe</h1><Link to="/enciclopedia" className="mt-4 inline-block text-terra">Ver la enciclopedia</Link></div>;
}

const cite = (r: Reference) => `${r.author} (${r.year}). ${r.title}. ${r.publisher}. ${r.url}`;

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const { isSaved, toggle } = useSaved();
  const [copied, setCopied] = useState<number | null>(null);
  const [deep, setDeep] = useState(false);
  const cat = categoryById(a.category);
  const saved = isSaved(a.slug);

  const copy = async (r: Reference, i: number) => {
    await navigator.clipboard.writeText(cite(r));
    setCopied(i);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <article>
      <header className={a.image ? "relative -mt-16 flex min-h-[60vh] items-end" : "bg-petrol pt-16"}>
        {a.image && <><img src={a.image.src} alt={a.image.alt} className="absolute inset-0 h-full w-full object-cover" /><div className="hero-overlay absolute inset-0" /></>}
        <div className="container-site relative pb-12 pt-32 text-petrol-foreground">
          <nav aria-label="Ruta" className="text-sm opacity-80"><Link to="/">Inicio</Link> / <Link to="/enciclopedia" hash={a.category}>{cat?.name}</Link> / {a.subcategory}</nav>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">{a.title}</h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">{a.summary}</p>
        </div>
      </header>

      <div className="container-site grid gap-12 py-14 lg:grid-cols-[1fr_300px]">
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => toggle(a.slug)} aria-pressed={saved} className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-semibold hover:border-accent">
              {saved ? <BookmarkCheck className="h-4 w-4 text-terra" /> : <Bookmark className="h-4 w-4" />}{saved ? "Guardado" : "Guardar artículo"}
            </button>
            {a.tags.map((t) => <Link key={t} to="/buscar" search={{ q: t, cat: "" }} className="rounded-full bg-secondary px-3 py-2 text-xs">#{t}</Link>)}
          </div>
          {a.dataNote && <p className="mt-6 rounded-lg border-l-4 border-accent bg-secondary p-4 text-sm">{a.dataNote}</p>}
          {a.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="text-2xl font-semibold">{s.heading}</h2>
              {s.paragraphs.map((p, i) => <p key={i} className="mt-4 text-[1.06rem] leading-8">{p}</p>)}
            </section>
          ))}
          {a.deeper && (
            <section className="mt-10 rounded-2xl border bg-card p-6">
              <button onClick={() => setDeep(!deep)} aria-expanded={deep} className="w-full text-left font-display text-xl">{a.deeper.heading} <span className="text-terra">{deep ? "−" : "+"}</span></button>
              {deep && a.deeper.paragraphs.map((p, i) => <p key={i} className="mt-4 leading-8">{p}</p>)}
            </section>
          )}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Preguntas de repaso</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6">{a.review.map((q) => <li key={q}>{q}</li>)}</ol>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">Referencias</h2>
            <ul className="mt-4 space-y-3">
              {a.references.map((r, i) => (
                <li key={r.url + i} className="flex items-start gap-3 rounded-xl border bg-card p-4 text-sm">
                  <p className="flex-1">{r.author} ({r.year}). <em>{r.title}</em>. {r.publisher}. <a href={r.url} target="_blank" rel="noreferrer" className="break-all text-terra underline">{r.url}</a></p>
                  <button onClick={() => copy(r, i)} aria-label="Copiar referencia" className="shrink-0 rounded-md p-2 hover:bg-secondary">{copied === i ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}</button>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-muted-foreground">Conceptos clave</h2>
            <dl className="mt-4 space-y-4">{a.keyConcepts.map((k) => <div key={k.term}><dt className="font-semibold">{k.term}</dt><dd className="text-sm text-muted-foreground">{k.definition}</dd></div>)}</dl>
          </div>
          {(a.places.length > 0 || a.people.length > 0) && (
            <div className="rounded-2xl border bg-card p-6 text-sm">
              {a.places.length > 0 && <p><strong>Lugares:</strong> {a.places.join(", ")}</p>}
              {a.people.length > 0 && <p className="mt-2"><strong>Personajes:</strong> {a.people.join(", ")}</p>}
            </div>
          )}
        </aside>
      </div>
      <section className="container-site">
        <h2 className="text-2xl font-semibold">Seguí leyendo</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">{a.related.map((s) => { const r = articleBySlug(s); return r ? <ArticleCard key={s} a={r} /> : null; })}</div>
      </section>
    </article>
  );
}
