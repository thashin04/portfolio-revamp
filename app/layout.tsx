import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Thashin Bhuiyan",
  description: "Thashin Bhuiyan is a Information Technology and Digital Media Undergrad at the University of Central Florida",
  keywords: [ "UX/UI",
              "Frontend Developer",
              "Developer",
              "Information Technology",
              "Thashin",
              "Thashin Bhuiyan",
              "Portfolio",
              "UCF",
              "University of Central Florida",
  ],
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
