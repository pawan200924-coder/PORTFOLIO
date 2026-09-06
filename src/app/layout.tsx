import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Pawan Kumar | Graphic Designer & AI English Voice Coach",
  description: "Graphic Designer and Print Production Specialist with 8+ years of experience in signage, prepress, large-format printing, vehicle graphics, and AI English Voice Coach.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-ink text-paper" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
