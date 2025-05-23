import type { Metadata } from "next";
import "./globals.css";
import { sourcesSans3 } from "@/ui/fonts";
import { AuthProvider } from "@/context/authContext";

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
    <html
      lang="en"
      className={`${sourcesSans3.className} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
