type Props = {
  /** Направление свечения перехода */
  tone?: "primary" | "accent" | "pink";
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  primary: "bg-primary/25",
  accent: "bg-accent/20",
  pink: "bg-neon-pink/20",
};

export function SectionTransition({ tone = "primary" }: Props) {
  return (
    <div aria-hidden className="pointer-events-none relative h-24 w-full overflow-hidden sm:h-32">
      <div
        className={`absolute top-1/2 left-1/2 h-40 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] ${tones[tone]}`}
      />
      <div className="bg-gradient-brand absolute top-1/2 left-1/2 h-px w-[70%] max-w-3xl -translate-x-1/2 opacity-30 [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
    </div>
  );
}
