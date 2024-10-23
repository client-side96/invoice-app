import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./_components/organisms/Header";

const leagueSpartan = localFont({
  variable: "--font-league-spartan",
  display: "swap",
  src: [
    {
      path: "./_fonts/LeagueSpartan-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_fonts/LeagueSpartan-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Invoices",
  description: "A tool to manage your invoices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} h-full`}>
      <body className="flex flex-col md:flex-row h-full bg-background-light">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
