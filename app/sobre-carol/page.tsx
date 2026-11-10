import type { Metadata } from "next";
import { AboutPage } from "@/components/Site";
export const metadata: Metadata = { title: "Sobre Carol", description: "Conoce a Carol, huertera y jardinera ecológica en Mérida, Venezuela. Una historia de flores, naturaleza y ganas de enseñar a principiantes." };
export default function Page() { return <AboutPage/>; }
