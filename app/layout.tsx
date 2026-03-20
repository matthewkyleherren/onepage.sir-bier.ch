import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIR BIER - Brewed, differently.",
  description: "Swiss premium brew made with the best process.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body>{children}</body>
    </html>
  );
}
