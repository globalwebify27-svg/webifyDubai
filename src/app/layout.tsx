import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Webify — Build · Scale · Innovate",
  description:
    "Build smarter. Grow bigger. Top-rated custom software development, web applications, and mobile apps for ambitious brands.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "cloud solutions",
    "digital transformation",
    "Global Webify",
  ],
  openGraph: {
    title: "Global Webify — Build · Scale · Innovate",
    description:
      "Build smarter. Grow bigger. Top-rated custom software development, web applications, and mobile apps for ambitious brands.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#F7F7F5] text-[#080A09]">
        {children}
      </body>
    </html>
  );
}
