import type { Metadata } from "next";
import { ContactPage } from "@/components/Site";
export const metadata: Metadata = { title: "Contacto", description: "Conversa con Carol sobre tu huerto, jardín o plantas. Asesorías online y presenciales en Ejido, Mérida, Venezuela." };
export default function Page() { return <ContactPage/>; }
