import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Bookmark, Menu, Search, X } from "lucide-react";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/explorar", label: "Explorar Chile" },
  { to: "/enciclopedia", label: "Enciclopedia" },
  { to: "/datos", label: "Chile en datos" },
  { to: "/aprender", label: "Aprender y jugar" },
] as const;

export function SiteHeader() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    navigate({ to: "/buscar", search: { q, cat: "" } });
  };
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">Saltar al contenido</a>
      <div className="container-site flex h-16 items-center gap-4">
        <Link to="/" className="shrink-0 font-display text-xl font-semibold">Chile<span className="text-terra">360</span></Link>
        <nav aria-label="Principal" className="hidden flex-1 items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
        <form onSubmit={submit} role="search" className="ml-auto hidden items-center gap-2 rounded-full border bg-card px-3 md:flex">
          <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
          <label htmlFor="global-search" className="sr-only">Buscar en Chile 360</label>
          <input id="global-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar temas, lugares…" className="h-9 w-44 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </form>
        <Link to="/guardados" aria-label="Artículos guardados" className="rounded-full p-2 hover:bg-secondary"><Bookmark className="h-5 w-5" /></Link>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menú" className="rounded-full p-2 hover:bg-secondary lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t lg:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            <form onSubmit={submit} role="search" className="mb-2 flex items-center gap-2 rounded-full border bg-card px-3">
              <Search className="h-4 w-4 text-muted-foreground" aria-hidden />
              <input aria-label="Buscar" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar…" className="h-10 flex-1 bg-transparent text-sm outline-none" />
            </form>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-secondary">{n.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-petrol text-petrol-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Chile<span className="text-terra">360</span></p>
          <p className="mt-3 max-w-xs text-sm opacity-75">Enciclopedia interactiva para descubrir Chile con rigor y curiosidad.</p>
        </div>
        <div>
          <p className="eyebrow">Fuentes principales</p>
          <ul className="mt-3 space-y-2 text-sm opacity-85">
            <li><a className="hover:underline" href="https://www.ine.gob.cl/" target="_blank" rel="noreferrer">Instituto Nacional de Estadísticas</a></li>
            <li><a className="hover:underline" href="https://www.memoriachilena.gob.cl/" target="_blank" rel="noreferrer">Memoria Chilena</a></li>
            <li><a className="hover:underline" href="https://www.bcn.cl/" target="_blank" rel="noreferrer">Biblioteca del Congreso Nacional</a></li>
            <li><a className="hover:underline" href="https://www.conaf.cl/" target="_blank" rel="noreferrer">CONAF</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Créditos</p>
          <p className="mt-3 text-sm opacity-75">Fotografías: Valle de la Luna, Torres del Paine y Santiago. Cada artículo indica sus referencias y el año de los datos.</p>
        </div>
      </div>
    </footer>
  );
}
