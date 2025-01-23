import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include the desired font weights
});
export const metadata: Metadata = {
  title: "FOXPAY",
  description: "FOXPAY SOLUÇÕES FINANCEIRAS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
