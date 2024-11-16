import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "株式会社Waalsforce",
  description: "AIで未来を創造する - 株式会社Waalsforce",
  openGraph: {
    title: "株式会社Waalsforce",
    description: "AIで未来を創造する - 株式会社Waalsforce",
    type: "website",
    url: "https://your-domain.com",
  },
  robots: {
    index: true,
    follow: true,
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
