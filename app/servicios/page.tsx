import type { Metadata } from "next";
import { ServicesPage } from "@/components/Site";
export const metadata: Metadata = { title: "Servicios de jardinería y huertos", description: "Asesorías de huerto desde cero, jardín natural, plantas suculentas y mantenimiento en Mérida y zonas cercanas, Venezuela." };
export default function Page() { return <ServicesPage/>; }
