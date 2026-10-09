import { createFileRoute, Link } from "@tanstack/react-router";
import { searchArticles } from "@/data/articles";
import { categories } from "@/data/categories";
import { ArticleCard } from "@/components/ArticleCard";

export const Route = createFileRoute("/buscar")({
  validateSearch: (s: Record<string, unknown>) => ({ q: typeof s.q === "string" ? s.q : "", cat: typeof s.cat === "string" ? s.cat : "" }),
  head: () => ({ meta: [
    { title: "Buscar | Chile 360" },
    { name: "description", content: "Buscá artículos sobre Chile por tema, lugar, personaje o etiqueta." },
    { property: "og:title", content: "Buscar en Chile 360" },
    { property: "og:description", content: "Búsqueda en la enciclopedia interactiva de Chile." },
  ] }),
  component: Buscar,
});

function Buscar() {
  const { q, cat } = Route.useSearch();
  const navigate = Route.useNavigate();
  const results = searchArticles(q, cat || undefined);
  return (
    <div className="container-site py-14">
      <h1 className="text-4xl font-semibold">Buscar</h1>
      <label htmlFor="q" className="sr-only">Término de búsqueda</label>
      <input id="q" autoFocus value={q} onChange={(e) => navigate({ search: { q: e.target.value, cat }, replace: true })} placeholder="Ej.: mapuche, Atacama, O'Higgins…" className="mt-6 h-14 w-full rounded-2xl border bg-card px-5 text-lg outline-none focus:border-accent" />
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
        {[{ id: "", name: "Todas" }, ...categories].map((c) => (
          <button key={c.id} aria-pressed={cat === c.id} onClick={() => navigate({ search: { q, cat: c.id }, replace: true })} className={`rounded-full border px-3 py-1.5 text-sm ${cat === c.id ? "bg-primary text-primary-foreground" : "bg-card hover:border-accent"}`}>{c.name}</button>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">{results.length} resultado{results.length === 1 ? "" : "s"}</p>
      {results.length ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{results.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed p-10 text-center">
          <p className="font-display text-xl">No encontramos artículos para «{q}»</p>
          <p className="mt-2 text-sm text-muted-foreground">Probá con otra palabra o quitá el filtro de categoría.</p>
          <Link to="/enciclopedia" className="mt-4 inline-block font-semibold text-terra">Ver todas las categorías</Link>
        </div>
      )}
    </div>
  );
}
