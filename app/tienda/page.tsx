import type { Metadata } from "next";
import { ShopPage } from "@/components/Site";
export const metadata: Metadata = { title: "Tienda Verde | Semillas y plántulas locales", description: "Semillas y plántulas de cultivo local en Mérida, Venezuela. Consulta por WhatsApp variedades y disponibilidad de temporada." };
export default function Page() { return <ShopPage/>; }
