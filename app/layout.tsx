import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://palantir-archive.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Middle-earth Archive — Premium Lore Interface",
    template: "%s | Middle-earth Archive",
  },
  description:
    "A premium fantasy archive for exploring characters, realms, artifacts, maps, ages, and chronicles of Middle-earth.",
  applicationName: "Middle-earth Archive",
  keywords: [
    "Middle-earth Archive",
    "fantasy archive",
    "lore catalog",
    "characters",
    "realms",
    "artifacts",
    "Palantir search",
  ],
  authors: [{ name: "Middle-earth Archive" }],
  creator: "Middle-earth Archive",
  publisher: "Middle-earth Archive",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Middle-earth Archive",
    title: "Middle-earth Archive — Premium Lore Interface",
    description:
      "Explore a premium dark-fantasy archive of characters, realms, artifacts, maps, ages, and chronicles.",
    images: [
      {
        url: "/og-middle-earth-archive.jpg",
        width: 1200,
        height: 630,
        alt: "Middle-earth Archive premium interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Middle-earth Archive — Premium Lore Interface",
    description:
      "A cinematic premium archive for exploring characters, realms, artifacts, maps, ages, and chronicles.",
    images: ["/og-middle-earth-archive.jpg"],
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
