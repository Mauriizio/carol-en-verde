import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/Site";
import { services } from "@/lib/brand";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const service = services.find((item) => item.slug === slug); return service ? { title: service.name, description: service.summary, openGraph: { images: [service.image] } } : {}; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find((item) => item.slug === slug); if (!service) notFound(); return <ServiceDetail service={service}/>; }
