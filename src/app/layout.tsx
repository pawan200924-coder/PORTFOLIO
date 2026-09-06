import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pawan Kumar | Graphic Designer | Print, Prepress & Signage Production",
  description: "Graphic Designer and Print Production Specialist with 8+ years of experience in signage, prepress, large-format printing, vehicle graphics and production artwork. Based in Dubai and open to New Zealand opportunities.",
  icons: {
    icon: "/favicon.ico",
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
