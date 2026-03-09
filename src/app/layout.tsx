import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "portfolio | Frontend Engineer",
  description: "Frontend Engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        suppressHydrationWarning
        className="min-h-dvh bg-slate-50 text-slate-900 antialiased"
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
