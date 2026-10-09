import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle } from "lucide-react";
import { articles, images } from "@/data/articles";
import { curiosities, indicators, timeline, zones } from "@/data/learning";
import { ArticleCard } from "@/components/ArticleCard";
import { articleBySlug } from "@/data/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chile 360 — Descubrí Chile más allá del mapa" },
      { name: "description", content: "Enciclopedia interactiva de Chile: geografía, historia, datos y desafíos para aprender." },
      { property: "og:title", content: "Chile 360 — Descubrí Chile más allá del mapa" },
      { property: "og:description", content: "Explorá zonas, historia, datos y cuestionarios sobre Chile." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative -mt-16 flex min-h-[92vh] items-end overflow-hidden">
        <img src={chile1}
  alt="Cuernos del Paine reflejados en un lago al amanecer"
  className="absolute inset-0 h-full w-full object-cover"
  fetchPriority="high"
/>
        <div className="hero-overlay absolute inset-0" />
        <div className="container-site relative pb-20 pt-40 text-petrol-foreground">
          <p className="eyebrow fade-up">Enciclopedia interactiva</p>
          <h1 className="fade-up mt-4 max-w-3xl text-5xl font-semibold leading-[1.02] md:text-7xl">Descubrí Chile más allá del mapa</h1>
          <p className="fade-up mt-6 max-w-xl text-lg opacity-90">Del desierto más árido del mundo a los hielos patagónicos: geografía, historia y cultura contadas con rigor.</p>
          <Link to="/explorar" className="fade-up mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-transform hover:scale-105">
            Empezar a explorar <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container-site py-20">
        <p className="eyebrow">Preguntas curiosas</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Empezá por una pregunta</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {curiosities.map((c) => (
            <Link key={c.q} to="/articulo/$slug" params={{ slug: c.article }} className="group rounded-2xl border bg-card p-6 shadow-card transition-colors hover:border-accent">
              <HelpCircle className="h-6 w-6 text-terra" aria-hidden />
              <p className="mt-4 font-display text-lg leading-snug">{c.q}</p>
              <p className="mt-4 text-sm text-muted-foreground group-hover:text-terra">Leer respuesta →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-petrol py-20 text-petrol-foreground">
        <div className="container-site">
          <p className="eyebrow">Grandes zonas</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Un país, cinco paisajes</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {zones.map((z) => (
              <Link key={z.id} to="/explorar" search={{ zona: z.id }} className="rounded-xl border border-petrol-foreground/15 p-5 transition-colors hover:bg-petrol-foreground/10">
                <p className="font-display text-xl">{z.name}</p>
                <p className="mt-2 text-sm opacity-70">{z.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20">
        <div className="flex items-end justify-between gap-4">
          <div><p className="eyebrow">Línea de tiempo</p><h2 className="mt-2 text-3xl font-semibold md:text-4xl">Momentos que definieron a Chile</h2></div>
          <Link to="/explorar" hash="cronologia" className="hidden text-sm font-semibold text-terra sm:block">Ver cronología completa →</Link>
        </div>
        <ol className="mt-10 grid gap-6 border-t pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.filter((_, i) => [1, 3, 7, 8].includes(i)).map((e) => (
            <li key={e.year}><p className="font-display text-3xl text-terra">{e.year}</p><p className="mt-2 font-semibold">{e.title}</p><p className="mt-1 text-sm text-muted-foreground">{e.context}</p></li>
          ))}
        </ol>
      </section>

      <section className="container-site">
        <div className="grid gap-4 rounded-3xl border bg-card p-8 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((i) => (
            <div key={i.label}><p className="text-sm text-muted-foreground">{i.label}</p><p className="mt-1 font-display text-4xl">{i.value}</p><p className="text-xs text-muted-foreground">{i.unit}</p></div>
          ))}
        </div>
        <Link to="/datos" className="mt-4 inline-block text-sm font-semibold text-terra">Explorar Chile en datos →</Link>
      </section>

      <section className="container-site py-20">
        <p className="eyebrow">Historias, personajes y lugares</p>
        <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Artículos destacados</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => <ArticleCard key={a.slug} a={a} />)}
        </div>
      </section>

      <section className="container-site">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={images.atacama} alt="Valle de la Luna en el desierto de Atacama" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
          <div className="relative p-10 text-petrol-foreground md:p-16">
            <p className="eyebrow">Aprender y jugar</p>
            <h2 className="mt-2 max-w-lg text-3xl font-semibold md:text-4xl">¿Cuánto sabés de Chile?</h2>
            <p className="mt-3 max-w-md opacity-90">{articleBySlug("desierto-de-atacama") && "Ocho preguntas en tres niveles de dificultad, con explicación de cada respuesta."}</p>
            <Link to="/aprender" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Hacer el desafío <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
