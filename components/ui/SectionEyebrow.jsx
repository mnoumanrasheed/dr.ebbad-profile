export default function SectionEyebrow({
  number,
  label,
  variant = "silver",
  className = "",
}) {
  const isDarkOnLight = variant === "dark";

  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.25em] uppercase ${
        isDarkOnLight ? "text-ink/70" : "text-metallic"
      } ${className}`}
    >
      {number && (
        <span
          className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
            isDarkOnLight
              ? "bg-black/5 text-ink/80 border border-black/10"
              : "bg-white/5 text-foreground/80 border border-white/10"
          }`}
        >
          {number}
        </span>
      )}
      <span className="inline-block w-4 h-px bg-current opacity-40" />
      <span>{label}</span>
    </div>
  );
}
