import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { timeline, zones } from "@/data/learning";
import { articleBySlug } from "@/data/articles";

export const Route = createFileRoute("/explorar")({
  validateSearch: (s: Record<string, unknown>): { zona?: string | undefined } => ({ zona: typeof s["zona"] === "string" ? s["zona"] : undefined }),
  head: () => ({
    meta: [
      { title: "Explorar Chile — Zonas y cronología | Chile 360" },
      { name: "description", content: "Recorré las grandes zonas geográficas de Chile y su cronología histórica." },
      { property: "og:title", content: "Explorar Chile | Chile 360" },
      { property: "og:description", content: "Zonas geográficas y línea de tiempo interactiva de Chile." },
    ],
  }),
  component: Explorar,
});

function Explorar() {
  const { zona } = Route.useSearch();
  const navigate = Route.useNavigate();
  const current = zones.find((z) => z.id === zona) ?? zones[0]!;
  const [openEvent, setOpenEvent] = useState<string | null>(null);
  const periods = [...new Set(timeline.map((e) => e.period))];
  const [period, setPeriod] = useState<string>("Todos");

  return (
    <div className="container-site py-14">
      <p className="eyebrow">Explorar Chile</p>
      <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Zonas geográficas</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">Chile se extiende más de 4.000 km de norte a sur en su territorio continental americano. Elegí una zona en el esquema.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-[220px_1fr]">
        <div role="tablist" aria-label="Zonas de Chile" aria-orientation="vertical" className="flex gap-1.5 md:flex-col">
          {zones.map((z, i) => (
            <button key={z.id} role="tab" aria-selected={current.id === z.id} onClick={() => navigate({ search: { zona: z.id }, replace: true })}
              className={`flex-1 rounded-lg border px-3 text-left text-sm font-semibold transition-colors md:py-0 ${current.id === z.id ? "border-accent bg-accent text-accent-foreground" : "bg-card hover:border-accent"}`}
              style={{ minHeight: `${[90, 70, 110, 90, 130][i]}px` }}>
              {z.name}
            </button>
          ))}
          <p className="hidden text-xs text-muted-foreground md:block">Esquema norte → sur, no a escala.</p>
        </div>
        <article role="tabpanel" className="rounded-2xl border bg-card p-8 shadow-card">
          <h2 className="text-3xl font-semibold">{current.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">Regiones: {current.regions}</p>
          <p className="mt-5 text-lg">{current.text}</p>
          <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-muted-foreground">Artículos de esta zona</h3>
          {current.articles.length ? (
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {current.articles.map((s) => { const a = articleBySlug(s)!; return (
                <li key={s}><Link to="/articulo/$slug" params={{ slug: s }} className="flex items-center gap-3 rounded-xl border p-3 hover:border-accent">
                  {a.image && <img src={a.image.src} alt="" className="h-14 w-14 shrink-0 rounded-lg object-cover" />}
                  <span className="font-semibold">{a.title}</span></Link></li>); })}
            </ul>
          ) : <p className="mt-3 text-sm text-muted-foreground">Aún no hay artículos publicados para esta zona.</p>}
        </article>
      </div>

      <section id="cronologia" className="mt-24 scroll-mt-24">
        <p className="eyebrow">Línea de tiempo</p>
        <h2 className="mt-2 text-4xl font-semibold">Cronología de Chile</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Todos", ...periods].map((p) => (
            <button key={p} onClick={() => setPeriod(p)} aria-pressed={period === p} className={`rounded-full border px-4 py-1.5 text-sm ${period === p ? "bg-primary text-primary-foreground" : "bg-card hover:border-accent"}`}>{p}</button>
          ))}
        </div>
        <ol className="relative mt-10 space-y-4 border-l-2 border-accent/40 pl-8">
          {timeline.filter((e) => period === "Todos" || e.period === period).map((e) => {
            const open = openEvent === e.year;
            return (
              <li key={e.year} className="relative">
                <span className="absolute -left-[41px] top-5 h-4 w-4 rounded-full border-4 border-background bg-accent" aria-hidden />
                <button onClick={() => setOpenEvent(open ? null : e.year)} aria-expanded={open} className="w-full rounded-xl border bg-card p-5 text-left hover:border-accent">
                  <span className="font-display text-2xl text-terra">{e.year}</span>
                  <span className="ml-3 font-semibold">{e.title}</span>
                  <span className="block text-xs text-muted-foreground">{e.period}</span>
                </button>
                {open && (
                  <div className="mt-2 rounded-xl bg-secondary p-5 text-sm">
                    <p><strong>Contexto:</strong> {e.context}</p>
                    <p className="mt-2"><strong>Consecuencias:</strong> {e.consequences}</p>
                    {e.article && <Link to="/articulo/$slug" params={{ slug: e.article }} className="mt-3 inline-block font-semibold text-terra">Leer artículo →</Link>}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
