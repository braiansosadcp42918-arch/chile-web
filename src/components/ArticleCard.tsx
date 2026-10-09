import { Link } from "@tanstack/react-router";
import type { Article } from "@/data/types";
import { categoryById } from "@/data/categories";

export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link to="/articulo/$slug" params={{ slug: a.slug }} className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-card transition-transform hover:-translate-y-1">
      {a.image ? (
        <img src={a.image.src} alt={a.image.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
      ) : (
        <div className="flex aspect-[16/10] items-end bg-petrol p-5"><span className="font-display text-3xl text-petrol-foreground/90">{a.title.split(" ")[0]}</span></div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{categoryById(a.category)?.name}</p>
        <h3 className="mt-2 text-xl font-semibold group-hover:text-terra">{a.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{a.summary}</p>
      </div>
    </Link>
  );
}
