import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google'



const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Bludda Site",
  description: "Site created by some bluddas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
