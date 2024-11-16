import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "株式会社Waalsforce | AIソリューション・コンサルティング",
  description: "AIで未来を創造する - 最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます。株式会社Waalsforceは、AIソリューションの提供からコンサルティングまで、包括的なサービスを提供します。",
  openGraph: {
    title: "株式会社Waalsforce | AIソリューション・コンサルティング",
    description: "AIで未来を創造する - 最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます。",
    type: "website",
    url: "https://waalsforce.co.jp",
    siteName: "株式会社Waalsforce",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Waalsforce | AIソリューション・コンサルティング",
    description: "AIで未来を創造する - 最先端の生成AI技術とコンサルティングで、ビジネスの可能性を広げます。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
