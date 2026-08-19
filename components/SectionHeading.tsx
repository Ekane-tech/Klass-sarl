type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignCls =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
            light
              ? "border-brand-400/40 bg-brand-500/10 text-brand-400"
              : "border-brand-300 bg-brand-50 text-brand-700"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            light ? "text-ink-200" : "text-ink-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
