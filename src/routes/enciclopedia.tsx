import { createFileRoute, Link } from "@tanstack/react-router";
import { categories } from "@/data/categories";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/enciclopedia")({
  head: () => ({
    meta: [
      { title: "Enciclopedia — Categorías y artículos | Chile 360" },
      { name: "description", content: "Siete categorías para estudiar Chile: geografía, historia, Estado, economía, cultura, ciencia y Chile en el mundo." },
      { property: "og:title", content: "Enciclopedia | Chile 360" },
      { property: "og:description", content: "Artículos sobre Chile organizados por categoría." },
    ],
  }),
  component: Enciclopedia,
});

function Enciclopedia() {
  return (
    <div className="container-site py-14">
      <nav aria-label="Ruta" className="text-sm text-muted-foreground"><Link to="/">Inicio</Link> / Enciclopedia</nav>
      <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Enciclopedia</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{articles.length} artículos publicados. La enciclopedia crece por etapas; las subcategorías sin artículos se indican como pendientes.</p>
      <div className="mt-12 space-y-14">
        {categories.map((c) => {
          const list = articles.filter((a) => a.category === c.id);
          return (
            <section key={c.id} id={c.id} className="grid gap-6 border-t pt-8 md:grid-cols-[1fr_2fr]">
              <div>
                <h2 className="text-2xl font-semibold">{c.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {c.subcategories.map((s) => {
                  const items = list.filter((a) => a.subcategory === s);
                  return (
                    <div key={s} className="rounded-xl border bg-card p-5">
                      <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-muted-foreground">{s}</h3>
                      {items.length ? (
                        <ul className="mt-3 space-y-2">{items.map((a) => <li key={a.slug}><Link to="/articulo/$slug" params={{ slug: a.slug }} className="font-display text-lg hover:text-terra">{a.title}</Link></li>)}</ul>
                      ) : <p className="mt-3 text-sm italic text-muted-foreground">Artículos en preparación</p>}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
