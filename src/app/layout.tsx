import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "D. Pawan Kumar | Senior Graphic Designer | Brand Design · Outdoor · Print",
  description: "Senior Graphic Designer with 7+ years of experience in brand design, outdoor advertising, retail signage (50+ Indian Oil & HPCL sites), prepress, vehicle branding, and modern AI workflows (Gemini, Veo, ComfyUI). Based in Dubai, UAE and open to corporate roles across UAE & GCC.",
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
