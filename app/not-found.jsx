import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export const metadata = {
  title: "404 — Clinical Route Not Found | Ebbad Nazir",
  description: "The requested route does not exist in Ebbad Nazir's medical portfolio.",
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center bg-background text-foreground relative overflow-hidden">
      {/* Background medical grid */}
      <div className="absolute inset-0 medical-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-md space-y-6">
        <SectionEyebrow number="ERR.404" label="DIAGNOSTIC NOTICE" className="justify-center" />
        
        <div className="space-y-2">
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-foreground">
            404
          </h1>
          <p className="text-xl font-bold text-metallic">
            Route Not Found in Clinical Index
          </p>
        </div>

        <p className="text-sm text-muted leading-relaxed">
          The page you are looking for has been moved or does not exist in this portfolio. Please return to the homepage to explore verified sections.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider bg-foreground text-background hover:bg-white transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
