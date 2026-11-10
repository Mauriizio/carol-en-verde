import Link from "next/link";
export default function NotFound() { return <section className="not-found"><span className="eyebrow">404 · Camino equivocado</span><h1>Por aquí no<br/><em>crece nada.</em></h1><p>La página que buscas no está en este jardín. Volvamos al sendero principal.</p><Link className="button button-primary" href="/">Volver al inicio →</Link></section>; }
