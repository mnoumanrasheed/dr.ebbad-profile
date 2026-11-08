import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MedicalLoader from "@/components/ui/MedicalLoader";
import PortfolioAssistant from "@/components/ui/PortfolioAssistant";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dr-ebbad-profile.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Dr. Ebbad Nazir | Medical Portfolio",
  title: "Dr. Ebbad Nazir | Medical Portfolio",
  description:
    "Dr. Ebbad Nazir's medical portfolio - learning medicine with purpose through academic discipline, clinical experience, and a focused interest in surgery.",
  keywords: [
    "Dr. Ebbad Nazir",
    "Ebbad Nazir",
    "MBBS Student",
    "Medical Student",
    "Aspiring Surgeon",
    "Rai Medical College Sargodha",
    "FGPC Hospital Islamabad",
    "Surgery Department Intern",
    "Medical Portfolio",
  ],
  authors: [{ name: "Dr. Ebbad Nazir" }],
  creator: "Dr. Ebbad Nazir",
  icons: {
    icon: [
      { url: "/brand/ebbad-nazir-mark-transparent.png", type: "image/png" },
    ],
    shortcut: "/brand/ebbad-nazir-mark-transparent.png",
    apple: "/brand/ebbad-nazir-mark-transparent.png",
  },
  openGraph: {
    title: "Dr. Ebbad Nazir | Learning Medicine with Purpose",
    description:
      "A refined medical portfolio documenting academic discipline, clinical learning, and a focused interest in surgery.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dr. Ebbad Nazir | Medical Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dr. Ebbad Nazir | Medical Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Ebbad Nazir | Learning Medicine with Purpose",
    description:
      "A premium medical portfolio documenting a journey in medicine, clinical learning, and surgical ambition.",
    images: [{ url: "/opengraph-image", alt: "Dr. Ebbad Nazir | Medical Portfolio" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#FAF9F5] text-[#12141A] selection:bg-[#E2C98E]/40 selection:text-[#12141A]">
        <MedicalLoader />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <PortfolioAssistant />
      </body>
    </html>
  );
}
