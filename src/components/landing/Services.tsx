import { Bot, Link2, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "MVP за неделю",
    text: "Быстро создам минимально жизнеспособный продукт.",
    benefit: "Проверьте гипотезу за считанные дни с минимальными затратами.",
  },
  {
    icon: Bot,
    title: "AI-автоматизация",
    text: "Внедрю ИИ-инструменты в ваши процессы.",
    benefit: "Освободите время от рутины и повысьте эффективность.",
  },
  {
    icon: Palette,
    title: "UI/UX с вайбкодингом",
    text: "Разработаю интуитивный интерфейс.",
    benefit: "Повысьте конверсию и вовлечённость пользователей.",
  },
  {
    icon: Link2,
    title: "Интеграции",
    text: "Подключу сторонние сервисы и API.",
    benefit: "Расширьте функциональность вашего продукта.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-16 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Что я делаю</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text, benefit }) => (
            <div key={title} className="glass-card p-6">
              <span className="bg-gradient-brand inline-flex h-11 w-11 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              <p className="mt-3 text-sm text-accent">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
