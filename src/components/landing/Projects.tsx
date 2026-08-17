import studyflow from "@/assets/project-studyflow.jpg";
import neuro from "@/assets/project-neuro.jpg";
import launchpro from "@/assets/project-launchpro.jpg";

const projects = [
  {
    title: "StudyFlow",
    image: studyflow,
    alt: "Интерфейс AI-платформы StudyFlow для персонализированного обучения",
    description:
      "AI-платформа для персонализированного обучения: адаптивные программы и рекомендации под каждого студента.",
    tags: ["React", "Python", "OpenAI", "Next.js"],
  },
  {
    title: "НейроАналитик",
    image: neuro,
    alt: "Дашборд AI-сервиса НейроАналитик с графиками и отчётами",
    description:
      "AI-сервис для автоматического анализа данных и отчётов. Превращает сырые таблицы в понятные выводы.",
    tags: ["Vue", "Node.js", "AI Analytics"],
  },
  {
    title: "LaunchPro",
    image: launchpro,
    alt: "Конверсионный лендинг LaunchPro с градиентной кнопкой",
    description:
      "Конверсионный лендинг для быстрого запуска продукта. Собран за считанные дни и готов к трафику.",
    tags: ["Tailwind", "TypeScript", "UI/UX"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-16 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Избранные проекты
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass-card group flex flex-col overflow-hidden p-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                />
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
