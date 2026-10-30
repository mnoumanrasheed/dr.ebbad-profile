import Link from "next/link";
import Image from "next/image";

export default function Logo({ variant = "light", size = "default", className = "" }) {
  const isLight = variant === "light";
  const logoSrc = isLight ? "/brand/logo-light.svg" : "/brand/logo-dark.svg";

  const dimensions =
    size === "small"
      ? { width: 180, height: 34 }
      : size === "large"
      ? { width: 260, height: 49 }
      : { width: 220, height: 41 };

  return (
    <Link
      href="/"
      aria-label="Ebbad Nazir - Home"
      className={`group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 ${className}`}
    >
      <Image
        src={logoSrc}
        alt="Ebbad Nazir - MBBS & Aspiring Surgeon"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className="h-auto object-contain"
      />
    </Link>
  );
}
