import { createFileRoute, Link } from "@tanstack/react-router";
import { useSaved } from "@/lib/saved";
import { articleBySlug } from "@/data/articles";
import { ArticleCard } from "@/components/ArticleCard";

export const Route = createFileRoute("/guardados")({
  head: () => ({ meta: [
    { title: "Mis artículos guardados | Chile 360" },
    { name: "description", content: "Artículos que guardaste para estudiar más tarde." },
    { property: "og:title", content: "Guardados | Chile 360" },
    { property: "og:description", content: "Tu lista de lectura sobre Chile." },
  ] }),
  component: Guardados,
});

function Guardados() {
  const { saved } = useSaved();
  const list = saved.map(articleBySlug).filter((a) => !!a);
  return (
    <div className="container-site py-14">
      <h1 className="text-4xl font-semibold">Guardados</h1>
      <p className="mt-2 text-muted-foreground">Se guardan en este navegador, sin necesidad de cuenta.</p>
      {list.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed p-10 text-center"><p>Todavía no guardaste artículos.</p><Link to="/enciclopedia" className="mt-3 inline-block font-semibold text-terra">Explorar la enciclopedia</Link></div>
      )}
    </div>
  );
}
