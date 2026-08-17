import { Mail, Send } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative scroll-mt-16 px-5 pt-10 pb-24 sm:px-8 md:pb-32">
      <div className="glass-card relative mx-auto max-w-4xl overflow-hidden px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-neon-pink/25 blur-[110px]"
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Готовы создать свой следующий <span className="text-gradient">AI-продукт</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Напишите мне, и мы обсудим вашу идею уже сегодня.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://t.me/kavwabanger"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-dark px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:brightness-95 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Telegram
            </a>
            <a
              href="mailto:rovanov55@yandex.ru"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary/70 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Написать Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
