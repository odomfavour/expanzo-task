import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const rethink = Open_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Expanzo test app",
  description: "An app for a test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rethink.className}>{children}</body>
    </html>
  );
}
