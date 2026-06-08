import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "青葉公認会計士事務所 | 中小企業の経営を支える会計・税務相談",
  description:
    "青葉公認会計士事務所は、税務申告、資金繰り、経営数字の見える化、創業支援まで伴走する架空のポートフォリオ用LPです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
