import type { Metadata } from "next";
import { Inter, Archivo_Black, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawan Kumar D — Senior Branding, Signage & Fabrication Designer",
  description: "Senior Graphic & Signage Designer with 8+ years of experience in retail branding, brand SOP compliance, panel arrangement planning, fabrication artwork, and large-format visual communication. Available immediately in the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivoBlack.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-ink text-paper" suppressHydrationWarning>{children}</body>
    </html>
  );
}

