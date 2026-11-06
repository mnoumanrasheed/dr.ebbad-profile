import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MedicalLoader from "@/components/ui/MedicalLoader";
import PortfolioAssistant from "@/components/ui/PortfolioAssistant";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dr-ebbad-profile.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ebbad Nazir | MBBS Student & Aspiring Surgeon",
  description:
    "Explore the professional medical portfolio of Ebbad Nazir, a fourth-year MBBS student at Rai Medical College, Sargodha (2022–2027), with surgical department internship experience at FGPC Islamabad.",
  keywords: [
    "Ebbad Nazir",
    "MBBS Student",
    "Medical Student",
    "Aspiring Surgeon",
    "Rai Medical College Sargodha",
    "FGPC Hospital Islamabad",
    "Surgery Department Intern",
    "Medical Portfolio",
  ],
  authors: [{ name: "Ebbad Nazir" }],
  creator: "Ebbad Nazir",
  icons: {
    icon: [
      { url: "/brand/ebbad-nazir-mark-transparent.png", type: "image/png" },
    ],
    shortcut: "/brand/ebbad-nazir-mark-transparent.png",
    apple: "/brand/ebbad-nazir-mark-transparent.png",
  },
  openGraph: {
    title: "Ebbad Nazir | MBBS Student & Aspiring Surgeon",
    description:
      "Fourth-year MBBS student at Rai Medical College, Sargodha. Surgical department internship at FGPC Islamabad and an aspiring career interest in surgery.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ebbad Nazir — MBBS Student and Aspiring Surgeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebbad Nazir | MBBS Student & Aspiring Surgeon",
    description:
      "Fourth-year MBBS student at Rai Medical College, Sargodha. The Art of Precision.",
    images: ["/opengraph-image"],
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
