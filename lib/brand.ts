export const brand = {
  name: "Carol en Verde",
  whatsapp: "56954263765",
  location: "Ejido, Estado Mérida, Venezuela",
  instagram: "https://www.instagram.com/carolenverde/",
  tiktok: "https://www.tiktok.com/@carolenverde",
  whatsappLink(message: string) {
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(message)}`;
  },
};

export type Service = {
  slug: string; name: string; eyebrow: string; summary: string; description: string;
  image: string; imageAlt: string; duration: string; mode: string; location: string;
  topics: string[]; cta: string; message: string;
};

export const services: Service[] = [
  {
    slug: "mantenimiento-jardines-huertos", name: "Mantenimiento de jardines y huertos", eyebrow: "Cuidado en el tiempo",
    summary: "Un acompañamiento atento a las necesidades reales de tu espacio y de cada estación.",
    description: "Cada jardín o huerto tiene sus propias características, tiempos y necesidades. El trabajo se adapta a las condiciones de tu espacio y a la época del año, acompañando el proceso natural de cada planta.",
    image: "/images/huerto-real.webp", imageAlt: "Huerto real en Mérida con bancales de cultivo", duration: "Bloques de 2 a 4 horas",
    mode: "Visitas presenciales programadas. Frecuencia semanal, quincenal o mensual, a convenir.", location: "Ejido y zonas cercanas del Estado Mérida",
    topics: ["Poda y cuidado general", "Deshierbe selectivo manual", "Abonado ecológico y mejora del suelo", "Revisión y ajuste del riego", "Prevención natural de plagas y enfermedades", "Limpieza de bancales o canteros", "Otras tareas según las necesidades del espacio"],
    cta: "Consultar mantenimiento", message: "Hola, Carol. Me interesa el servicio de mantenimiento de jardines y huertos. ¿Podrías contarme sobre disponibilidad?",
  },
  {
    slug: "huerto-desde-cero", name: "Huerto desde cero para principiantes", eyebrow: "Cultiva tus alimentos",
    summary: "Una asesoría personalizada para dar el primer paso, incluso si nunca has cultivado.",
    description: "Analizamos tu espacio y buscamos soluciones prácticas para que inicies tu huerto ecológico desde cero. Antes del encuentro, Carol puede pedirte algunas fotos e información sobre la luz, el agua y el espacio disponible.",
    image: "/images/carol-cosecha.webp", imageAlt: "Carol con alimentos cosechados en su huerto", duration: "1 hora",
    mode: "Presencial o por videollamada", location: "Presencial en Mérida o a distancia por videollamada",
    topics: ["Ubicación ideal y horas de sol", "Riego y preparación del suelo o sustrato", "Elección de semillas o plántulas para empezar", "Prevención natural de plagas", "Cultivo en macetas para espacios pequeños"],
    cta: "Quiero crear mi huerto", message: "Hola, Carol. Me interesa la asesoría de huerto desde cero y quisiera conocer la disponibilidad.",
  },
  {
    slug: "jardin-natural", name: "Jardín natural para principiantes", eyebrow: "Un jardín que se adapta",
    summary: "Ideas prácticas para crear un jardín bonito, resistente y en sintonía con su entorno.",
    description: "Un jardín natural se adapta a su entorno. En esta asesoría puedes explorar plantas nativas y resistentes, y organizar un espacio verde que puedas cuidar con confianza.",
    image: "/images/carol-flores.webp", imageAlt: "Carol entre plantas y flores de su jardín", duration: "1 hora",
    mode: "Presencial o por videollamada", location: "Presencial en Mérida o a distancia por videollamada",
    topics: ["Plantas nativas y especies resistentes al clima", "Diseño y organización de canteros o jardineras", "Jardines de bajo mantenimiento", "Requerimientos de luz y riego eficiente", "Sustratos y abonos naturales", "Problemas específicos de tus plantas"],
    cta: "Quiero mejorar mi jardín", message: "Hola, Carol. Me interesa la asesoría de jardín natural para principiantes. ¿Podrías contarme sobre disponibilidad?",
  },
  {
    slug: "cuidado-suculentas", name: "Cuidado de suculentas para principiantes", eyebrow: "Aprende a entenderlas",
    summary: "Luz, agua y sustrato según las condiciones reales de tus plantas y tu casa.",
    description: "Una sesión práctica para aprender a cuidar tus suculentas desde cero y entender qué necesitan según el clima de tu zona, la luz y el tipo de maceta.",
    image: "/images/asesoria-suculentas.webp", imageAlt: "Carol comparte consejos para cuidar suculentas", duration: "1 hora",
    mode: "Presencial o por videollamada", location: "Presencial en Mérida o a distancia por videollamada",
    topics: ["Sustratos y drenaje según el clima", "Iluminación y cómo evitar la etiolación", "Riego según la temperatura y la maceta", "Multiplicación por hojas, esquejes e hijuelos", "Prevención de plagas y recuperación de plantas"],
    cta: "Quiero cuidar mis suculentas", message: "Hola, Carol. Me interesa la asesoría de cuidado de suculentas para principiantes. ¿Podrías contarme sobre disponibilidad?",
  },
];

export type Product = {
  id: string; slug: string; name: string; description: string; category: string;
  image: string; price?: number; currency?: string; variants?: string[];
  availability: "consultar" | "por-encargo"; published: boolean; tags: string[];
};

// Líneas de catálogo; las variedades y disponibilidad actuales se confirman por WhatsApp.
export const products: Product[] = [
  { id: "semillas-hortalizas", slug: "semillas-hortalizas", name: "Semillas de hortalizas", description: "Semillas locales cultivadas bajo principios agroecológicos, adaptadas a las condiciones de la zona.", category: "Semillas de hortalizas", image: "/images/semillas.webp", availability: "consultar", published: true, tags: ["semillas", "hortalizas", "Mérida"] },
  { id: "aromaticas-medicinales", slug: "aromaticas-medicinales", name: "Aromáticas y medicinales", description: "Plantas para bancales aromáticos o para cultivar en macetas. Consulta las opciones de temporada.", category: "Aromáticas y medicinales", image: "/images/huerto-cultivo.webp", availability: "consultar", published: true, tags: ["aromáticas", "medicinales", "temporada"] },
  { id: "flores-polinizadores", slug: "flores-polinizadores", name: "Flores para polinizadores", description: "Flores amigas de los polinizadores que pueden acompañar y aportar vida a tu huerto.", category: "Flores amigables para polinizadores", image: "/images/girasol.webp", availability: "consultar", published: true, tags: ["flores", "polinizadores", "huerto"] },
  { id: "plantulas-trasplante", slug: "plantulas-trasplante", name: "Plántulas para trasplantar", description: "Plantas listas para el trasplante, trabajadas bajo previo encargo.", category: "Plántulas listas para trasplantar", image: "/images/plantulas-tomate.webp", availability: "por-encargo", published: true, tags: ["plántulas", "encargo", "trasplante"] },
];

export const photos = [
  { src: "/images/huerto-asesoria.webp", alt: "Bancales cultivados en un huerto ecológico" },
  { src: "/images/jardin-flores.webp", alt: "Carol cuida las plantas de su jardín" },
  { src: "/images/suculentas-detalle.webp", alt: "Suculentas cuidadas en casa" },
  { src: "/images/plantulas-tomate.webp", alt: "Plántulas jóvenes listas para crecer" },
];
