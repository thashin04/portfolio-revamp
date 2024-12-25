'use client'
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "../components/PageWrapper";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageWrapper>{children}</PageWrapper> {/* Fade logic in client component */}
        <Footer />
      </body>
    </html>
  );
}
