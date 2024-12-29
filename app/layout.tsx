'use client'; 

import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Head from "next/head"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  return (
    <html lang="en">
      <Head>
        <title>Thashin Bhuiyan</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
