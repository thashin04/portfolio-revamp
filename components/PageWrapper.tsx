"use client";

import React, { useState, useEffect } from "react";

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    setFadeClass(""); // Remove fade-in after initial load

    const handleRouteChange = () => setFadeClass("fade-in");

    // Next.js router events for navigation detection
    const router = require("next/router").default;
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => setFadeClass(""));

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", () => setFadeClass(""));
    };
  }, []);

  return <main className={fadeClass}>{children}</main>;
}
