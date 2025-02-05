import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export const metadata: Metadata = {
  title: "Thashin Bhuiyan",
  description: "Welcome to my portfolio website, showcasing various creative and technical projects.",
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
        <PageTransition>{children}</PageTransition> {/* Now inside the Client Component */}
        <Footer />
      </body>
    </html>
  );
}
