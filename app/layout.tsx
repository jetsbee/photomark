import type { Metadata } from "next";
import { GlobalLayout } from "./(components)/(GlobalLayout)/GlobalLayout";
import { Providers } from "./(providers)";
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
      <body className={inter.className}>
        <Providers>
          <GlobalLayout>{children}</GlobalLayout>
        </Providers>
      </body>
    </html>
  );
}
