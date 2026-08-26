import "./globals.css";
import type { Metadata, Viewport } from "next";
import ServiceWorker from "@/components/ServiceWorker";

export const metadata: Metadata = {
  title: "QRFlow — Your everyday digital toolkit",
  description:
    "QRFlow combines QR tools, document scanning, PDF tools and useful everyday utilities in one installable app.",
  applicationName: "QRFlow",
  keywords: [
    "QR code",
    "QR scanner",
    "PDF maker",
    "document scanner",
    "QRFlow",
  ],
};

export const viewport: Viewport = {
  themeColor: "#07111f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ServiceWorker />
        {children}</body>
    </html>
  );
}

