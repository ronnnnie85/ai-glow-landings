import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-24 pb-20 sm:px-8 md:pt-36 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/30 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-24 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          вайбкодинг · AI-разработка
        </span>

        <h1 className="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight sm:text-6xl md:text-7xl">
          Создаю <span className="text-gradient">AI-продукты</span> через вайбкодинг
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Использую мощь искусственного интеллекта для быстрой разработки стильных лендингов
          и веб-сервисов. Экономьте время и ресурсы, получая готовый продукт в кратчайшие сроки.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:bg-background sm:w-auto"
          >
            Посмотреть проекты
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-secondary/70 sm:w-auto"
          >
            Связаться
          </a>
        </div>
      </div>
    </section>
  );
}
