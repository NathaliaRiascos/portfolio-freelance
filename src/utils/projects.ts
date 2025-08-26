import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    title: "Landing Page de Asesoría Legal y Coaching Personal para Mujeres",
    description:
      "Legal Coach, un servicio de asesoría legal con enfoque humano, especializado en acompañar a mujeres que enfrentan procesos legales, personales o laborales importantes.",
    image: "/src/assets/landing-coach.webp",
    tech: ["Astro.js", "Tailwind CSS", "Sanity"],
    liveUrl: "https://landing-coach.pages.dev",
    githubUrl: "https://github.com/NathaliaRiascos/landing-coach",
  },
  {
    title: "Landing Page de Lipstick's Shop",
    description:
      "Descubre Lipstick's Shop, tu tienda online de labiales de alta calidad. Colores vibrantes, texturas únicas y acabados perfectos para cada estilo.",
    image: "/src/assets/lipsticks-shop.webp",
    tech: ["Astro.js", "Preact","Tailwind CSS", "Sanity"],
    liveUrl: "https://lipsticks-shop.pages.dev",
    githubUrl: "https://github.com/NathaliaRiascos/lipstick-s-shop",
  },
  {
    title: "Landing Page de Fotógrafo Profesional",
    description:
      "Portafolio de Alejandro Ruiz, fotógrafo especializado en bodas, retratos y moda. Descubre mis trabajos y contáctame para tu próximo proyecto.",
    image: "/src/assets/landing-photographer.webp",
    tech: ["Astro.js", "Tailwind CSS"],
    liveUrl: "https://landing-photographer.pages.dev/preview.png",
    githubUrl: "https://github.com/NathaliaRiascos/landing-photographer",
  },
];
