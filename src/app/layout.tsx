import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsAppButton } from "@/components/shared/StickyWhatsAppButton";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Luxury Rajasthan & India Tours`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Luxury, tailor-made Rajasthan and India tour packages for international travellers. Private guides, heritage hotels and custom itineraries since 2008.",
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "SR3ulTyWL7s-wRaqG7Ny4RA6dMDqObPVwTX1GaWntM0",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink font-sans">
        <Navbar />
        {children}
        <Footer />
        <StickyWhatsAppButton />
      </body>
    </html>
  );
}
