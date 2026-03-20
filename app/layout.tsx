import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ScrollProvider } from "@/components/providers/ScrollProvider";

export const metadata: Metadata = {
  title: "SIR BIER - Brewed, differently.",
  description: "Swiss premium brew made with the finest ingredients and traditional craftsmanship.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
