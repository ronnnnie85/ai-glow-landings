const steps = [
  { num: "01", title: "Погружаюсь в задачу", text: "Изучаю ваши потребности и формирую концепт." },
  { num: "02", title: "Создаю с ИИ", text: "Быстро разрабатываю прототип и базовый функционал." },
  { num: "03", title: "Тестирую и улучшаю", text: "Проверяю работоспособность и полирую UI." },
  { num: "04", title: "Запускаю и масштабирую", text: "Публикую проект и помогаю с развитием." },
];

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-16 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Как я работаю</h2>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="bg-gradient-brand absolute top-0 bottom-0 left-[15px] w-px opacity-60 md:top-[15px] md:right-0 md:bottom-auto md:left-0 md:h-px md:w-full"
          />

          <ol className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((s) => (
              <li key={s.num} className="group relative pl-12 md:pt-12 md:pl-0">
                <span className="absolute top-1 left-0 grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-[11px] font-semibold text-muted-foreground transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-brand group-hover:text-primary-foreground md:top-0">
                  {s.num}
                </span>
                <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
