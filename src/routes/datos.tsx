import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { indicators, regionPopulation2017 } from "@/data/learning";

export const Route = createFileRoute("/datos")({
  head: () => ({ meta: [
    { title: "Chile en datos — Indicadores con fuentes | Chile 360" },
    { name: "description", content: "Población por región e indicadores clave de Chile con año y fuente oficial." },
    { property: "og:title", content: "Chile en datos | Chile 360" },
    { property: "og:description", content: "Indicadores de Chile con fuentes verificables." },
  ] }),
  component: Datos,
});

const fmt = (n: number) => n.toLocaleString("es-CL");

function Datos() {
  const [sort, setSort] = useState<"pob" | "norte">("pob");
  const order = ["Arica y Parinacota", "Tarapacá", "Antofagasta", "Atacama", "Coquimbo", "Valparaíso", "Metropolitana", "O'Higgins", "Maule", "Ñuble", "Biobío", "Araucanía", "Los Ríos", "Los Lagos", "Aysén", "Magallanes"];
  const rows = [...regionPopulation2017].sort((a, b) => sort === "pob" ? b.value - a.value : order.indexOf(a.region) - order.indexOf(b.region));
  const max = Math.max(...rows.map((r) => r.value));
  const total = rows.reduce((s, r) => s + r.value, 0);
  return (
    <div className="container-site py-14">
      <p className="eyebrow">Chile en datos</p>
      <h1 className="mt-2 text-4xl font-semibold md:text-5xl">Indicadores con fuente y fecha</h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {indicators.map((i) => (
          <div key={i.label} className="rounded-2xl border bg-card p-6">
            <p className="text-sm text-muted-foreground">{i.label}</p>
            <p className="mt-1 font-display text-4xl">{i.value}</p>
            <p className="text-sm">{i.unit}</p>
            <a href={i.url} target="_blank" rel="noreferrer" className="mt-3 block text-xs text-terra underline">Fuente: {i.source}</a>
          </div>
        ))}
      </div>
      <section className="mt-16 rounded-3xl border bg-card p-6 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><h2 className="text-2xl font-semibold">Población por región</h2><p className="text-sm text-muted-foreground">Habitantes, Censo 2017 · Total {fmt(total)}</p></div>
          <div className="flex gap-2" role="group" aria-label="Ordenar">
            <button aria-pressed={sort === "pob"} onClick={() => setSort("pob")} className={`rounded-full border px-3 py-1.5 text-sm ${sort === "pob" ? "bg-primary text-primary-foreground" : ""}`}>Por población</button>
            <button aria-pressed={sort === "norte"} onClick={() => setSort("norte")} className={`rounded-full border px-3 py-1.5 text-sm ${sort === "norte" ? "bg-primary text-primary-foreground" : ""}`}>De norte a sur</button>
          </div>
        </div>
        <ul className="mt-8 space-y-2.5">
          {rows.map((r) => (
            <li key={r.region} className="grid grid-cols-[130px_1fr_auto] items-center gap-3 text-sm sm:grid-cols-[170px_1fr_160px]">
              <span className="truncate">{r.region}</span>
              <span className="h-5 rounded-r-md bg-secondary"><span className="block h-full rounded-r-md bg-accent transition-all duration-500" style={{ width: `${(r.value / max) * 100}%` }} /></span>
              <span className="text-right tabular-nums text-muted-foreground">{fmt(r.value)} <span className="hidden sm:inline">({((r.value / total) * 100).toFixed(1)}%)</span></span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted-foreground">Fuente: <a className="underline" href="http://resultados.censo2017.cl/" target="_blank" rel="noreferrer">INE, Censo 2017</a>. Requiere actualización con los resultados regionales del Censo 2024.</p>
      </section>
    </div>
  );
}
