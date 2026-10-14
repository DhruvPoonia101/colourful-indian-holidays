import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsAppButton } from "@/components/shared/StickyWhatsAppButton";
import { TawkChat } from "@/components/shared/TawkChat";
import { ConversionTracking } from "@/components/shared/ConversionTracking";
import { SITE_NAME, SITE_URL } from "@/lib/seo/business";
import "./globals.css";

// Self-hosted (latin subset, variable weight) so dev/build never depend on
// reaching fonts.gstatic.com, and production has no third-party font request.
const playfair = localFont({
  src: "./fonts/playfair-display-latin-wght-normal.woff2",
  variable: "--font-playfair",
  weight: "400 900",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Luxury Rajasthan & India Tours`,
    template: "%s",
  },
  description:
    "Luxury, tailor-made Rajasthan and India tour packages for international travellers. Private guides, heritage hotels and custom itineraries since 2007.",
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
        {/* Google's own installation instructions for GTM-NK422MVG ask for
            this <noscript> fallback immediately after the opening <body>
            tag, for the small number of visitors browsing with JavaScript
            disabled. @next/third-parties' GoogleTagManager component below
            handles the main script (loaded via Next's optimized Script
            strategy) but does not add this fallback automatically, so it's
            kept here manually to match Google's instructions exactly. */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK422MVG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ConversionTracking />
        <Navbar />
        {children}
        <Footer />
        <StickyWhatsAppButton />
        <TawkChat />
        <Analytics />
        <GoogleAnalytics gaId="G-ZT2XFEVSBW" />
        <GoogleTagManager gtmId="GTM-NK422MVG" />
      </body>
    </html>
  );
}
