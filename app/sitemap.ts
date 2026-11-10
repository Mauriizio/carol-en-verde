import type { MetadataRoute } from "next";
import { services } from "@/lib/brand";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://carol-en-verde.vercel.app"; const paths = ["", "/sobre-carol", "/servicios", ...services.map((s) => `/servicios/${s.slug}`), "/tienda", "/contacto"]; return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? 0.7 : 1 })); }
