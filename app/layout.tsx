import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"


export const metadata: Metadata = {
  title: "Thashin's Portfolio",
  description: "Portfolio that showcases my projects and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      <Footer />
      {children}
      </body>
    </html>
  );
}
