import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/organisms/Header";

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
    <html lang="en">
      <body className="flex flex-col md:flex-row">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
