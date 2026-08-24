import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QRFlow — Create, manage and track QR codes",
  description: "A modern dynamic QR code platform with analytics and smart campaigns."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}