import type { Metadata } from "next";
import "./globals.css";
import { sourcesSans3 } from "@/style/icons/fonts";


export const metadata: Metadata = {
  title: "Noted",
  description: "take notes in a simple way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourcesSans3.className} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
