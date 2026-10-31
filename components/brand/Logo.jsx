import Link from "next/link";
import Image from "next/image";

export default function Logo({ variant = "light", size = "default", className = "" }) {
  const isLight = variant === "light";
  const sizeClass =
    size === "small"
      ? "h-8 w-8"
      : size === "large"
      ? "h-14 w-14"
      : "h-10 w-10";
  const nameClass =
    size === "small"
      ? "text-sm"
      : size === "large"
      ? "text-2xl sm:text-3xl"
      : "text-lg";
  const textColor = isLight ? "text-[#F3D98C]" : "text-[#8B651D]";
  const nameVisibility = size === "small" ? "hidden lg:block" : "";

  return (
    <Link
      href="/"
      aria-label="Ebbad Nazir - Home"
      className={`group inline-flex items-center gap-3 transition-all duration-300 select-none ${className}`}
    >
      <span className={`relative inline-flex items-center justify-center rounded-xl border border-current/25 bg-current/[0.07] ${textColor}`}>
        <Image
          src="/favicon.png"
          alt=""
          width={64}
          height={64}
          priority
          className={`${sizeClass} object-contain p-1.5 transition-transform duration-300 group-hover:scale-105`}
        />
      </span>
      <span className={`leading-none ${nameVisibility}`}>
        <span className={`block font-editorial font-semibold tracking-tight ${nameClass} ${textColor}`}>
          Ebbad <span className="italic font-normal">Nazir</span>
        </span>
        <span className={`mt-1 block font-mono text-[8px] tracking-[0.22em] uppercase ${isLight ? "text-white/50" : "text-[#5A6172]"}`}>
          Medical Portfolio
        </span>
      </span>
    </Link>
  );
}
