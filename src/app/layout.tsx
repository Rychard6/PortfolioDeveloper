import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rychard Ryan - Desenvolvedor de Software",
  description:
    "Portfólio de Rychard Ryan, desenvolvedor de software especializado em React, Next.js, Node.js e outras tecnologias modernas.",
  keywords:
    "Rychard Ryan, desenvolvedor de software, React, Next.js, Node.js, portfólio, desenvolvimento web, Tailwind CSS, TypeScript",
  authors: [{ name: "Rychard Ryan", url: "https://rychardryan.com.br" }],
  creator: "Rychard Ryan",
  openGraph: {
    title: "Rychard Ryan - Desenvolvedor de Software",
    description:
      "Portfólio de Rychard Ryan, desenvolvedor de software especializado em tecnologias modernas.",
    url: "https://rychardryan.com.br",
    siteName: "Rychard Ryan - Portfólio",
    images: [
      {
        url: "https://rychardryan.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rychard Ryan - Desenvolvedor de Software",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rychard Ryan - Desenvolvedor de Software",
    description:
      "Portfólio de Rychard Ryan, desenvolvedor de software especializado em tecnologias modernas.",
    creator: "@rychardryan",
    images: ["https://rychardryan.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Meta Tags Adicionais */}
        <meta name="theme-color" content="#10b981" />
        <meta
          name="google-site-verification"
          content="INSIRA_SEU_CÓDIGO_DE_VERIFICAÇÃO_AQUI"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* O ThemeProvider precisa englobar toda a aplicação */}
        <ThemeProvider attribute="class" enableSystem defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}