import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photomark",
  description: "Get your favorite photos, and keep those.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
