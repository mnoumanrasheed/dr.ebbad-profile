export default function SectionEyebrow({
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

  return (
    <p className={`text-[10px] font-bold tracking-[0.18em] uppercase font-mono ${textColor} ${className}`}>
      {label}
    </p>
  );
}
