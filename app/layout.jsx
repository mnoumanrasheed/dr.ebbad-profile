import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ebbad Nazir | MBBS Student & Aspiring Surgeon",
    description:
      "Fourth-year MBBS student at Rai Medical College, Sargodha. Surgical department internship at FGPC Islamabad and an aspiring career interest in surgery.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 1200,
        alt: "Ebbad Nazir - Fourth-Year MBBS Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebbad Nazir | MBBS Student & Aspiring Surgeon",
    description:
      "Fourth-year MBBS student at Rai Medical College, Sargodha. The Art of Precision.",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[#FAF9F5] text-[#12141A] selection:bg-[#E2C98E]/40 selection:text-[#12141A]">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
