import type { Metadata } from "next";
import "leaflet/dist/leaflet.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://stayfuengirola.com"),
  applicationName: "Stay Fuengirola",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    siteName: "Stay Fuengirola",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
