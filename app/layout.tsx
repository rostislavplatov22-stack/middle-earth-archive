import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://palantir-archive.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Архив Средиземья — Премиум коллекция знаний",
    template: "%s | Архив Средиземья",
  },
  description:
    "Премиальный fantasy-архив персонажей, миров, артефактов, карт, эпох и хроник Средиземья.",
  applicationName: "Архив Средиземья",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Архив Средиземья",
    title: "Архив Средиземья — Премиум коллекция знаний",
    description:
      "Кинематографичный премиальный архив персонажей, миров, артефактов, карт, эпох и хроник.",
    images: [
      {
        url: "/og-middle-earth-archive.jpg",
        width: 1200,
        height: 630,
        alt: "Архив Средиземья",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050403",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" translate="no" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
