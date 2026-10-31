export default function SectionEyebrow({
  number,
  label,
  variant = "dark",
  className = "",
}) {
  const isDarkOnLight = variant === "dark";
  const isChampagne = variant === "champagne";

  const textColor = isDarkOnLight
    ? "text-[#BD903C]"
    : isChampagne
    ? "text-[#E2C98E]"
    : "text-[#C5C8D0]";

  const badgeStyle = isDarkOnLight
    ? "bg-[#FAF9F5] text-[#BD903C] border-[#E2DED2]"
    : isChampagne
    ? "bg-white/[0.08] text-[#E2C98E] border-white/[0.15]"
    : "bg-white/[0.05] text-[#F8F7F4] border-white/10";

  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] uppercase font-mono ${textColor} ${className}`}
    >
      {number && (
        <span
          className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border transition-colors ${badgeStyle}`}
        >
          {number}
        </span>
      )}
      <span className="inline-block w-4 h-px bg-current opacity-40" />
      <span className="font-sans font-bold tracking-[0.18em]">{label}</span>
    </div>
  );
}
