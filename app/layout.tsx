import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jorgeluismusico.vercel.app"),
  title: {
    default: "Jorge Luis | Malícia da Noite",
    template: "%s | Jorge Luis",
  },
  description:
    "Aprenda a tocar de ouvido com a experiência prática de Jorge Luis. O método Malícia da Noite ensina percepção, groove, acordes de passagem e segurança de palco.",
  alternates: { canonical: "/" },
  applicationName: "Jorge Luis — Malícia da Noite",
  authors: [{ name: "Jorge Luis" }],
  creator: "Jorge Luis",
  publisher: "Jorge Luis",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Jorge Luis",
    title: "Jorge Luis | Malícia da Noite",
    description:
      "Um método prático para desenvolver ouvido, groove e segurança no palco sem depender de cifras.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Luis | Malícia da Noite",
    description:
      "Aprenda a tocar de ouvido com atalhos práticos de quem vive a música nos palcos.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
