import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Special_Elite } from "next/font/google";
import { Footer, Header, WhatsAppFloat } from "@/components/Site";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const special = Special_Elite({ subsets: ["latin"], weight: "400", variable: "--font-special", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://carol-en-verde.vercel.app"),
  title: { default: "Carol en Verde | Jardinería y huertos ecológicos en Mérida", template: "%s | Carol en Verde" },
  description: "Asesorías para crear huertos ecológicos y jardines naturales desde cero, mantenimiento y semillas locales en Ejido, Mérida, Venezuela.",
  openGraph: { type: "website", locale: "es_VE", siteName: "Carol en Verde", title: "Carol en Verde | Cultiva tu espacio verde", description: "Huertos ecológicos, jardines naturales y asesorías para principiantes en Mérida, Venezuela.", images: ["/images/carol-suculenta.webp"] },
  twitter: { card: "summary_large_image", title: "Carol en Verde", description: "Cultiva tu espacio verde, paso a paso.", images: ["/images/carol-suculenta.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body className={`${playfair.variable} ${montserrat.variable} ${special.variable}`}><Header/><main>{children}</main><Footer/><WhatsAppFloat/></body></html>; }
