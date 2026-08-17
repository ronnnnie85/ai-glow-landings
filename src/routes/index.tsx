import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/landing/Hero";
import { Projects } from "@/components/landing/Projects";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { CTA } from "@/components/landing/CTA";
import { Reveal } from "@/components/landing/Reveal";
import { SectionTransition } from "@/components/landing/SectionTransition";

const title = "Вайбкодер — AI-продукты, лендинги и MVP под ключ";
const description =
  "Создаю AI-продукты через вайбкодинг: MVP за неделю, AI-автоматизация, UI/UX и интеграции. Быстрая разработка стильных лендингов и веб-сервисов.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      <Projects />
      <Services />
      <Process />
      <CTA />
      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} — сделано через вайбкодинг
      </footer>
    </main>
  );
}
