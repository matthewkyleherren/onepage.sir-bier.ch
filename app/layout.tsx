import type { Metadata, Viewport } from "next";
import { ScrollProvider } from "@/components/providers/ScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIR BIER - Brewed, differently.",
  description:
    "Sir Bier is a Swiss premium brew made with the best process. An exchange of natural forces from sky to earth, bottled. Brewed to the highest standard with glacier valley water sourced beneath the Swiss Alps. The result: Ultimate purity that's pure chemistry.",
  openGraph: {
    title: "SIR BIER - Brewed, differently.",
    type: "website",
    url: "https://sir-bier.ch",
    description:
      "Sir Bier is a Swiss premium brew made with the best process. An exchange of natural forces from sky to earth, bottled.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIR BIER - Brewed, differently.",
    description:
      "Sir Bier is a Swiss premium brew made with the best process. An exchange of natural forces from sky to earth, bottled.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollProvider>
          {/* Noise Overlay */}
          <div className="noise" aria-hidden="true" />
          
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
