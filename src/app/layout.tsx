import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";

const alpino = localFont({
  src: "../../public/fonts/TanklagerVF.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-tank",
});

export const metadata: Metadata = {
  title: "Monster Energy",
  description: "A 3D monster energy commercial by Aryan Bola",
  openGraph: {
    title: "Monster Energy",
    description: "A 3D monster energy commercial by Aryan Bola",
    url: "https://monster-energy-3d.vercel.app",
    siteName: "Monster Energy",
    images: [
      {
        url: "https://monster-energy-3d.vercel.app/OgImg.png",
        width: 1200,
        height: 630,
        alt: "Monster Energy 3D Commercial Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Monster Energy",
    description: "A 3D monster energy commercial by Aryan Bola",
    images: ["https://monster-energy-3d.vercel.app/OgImg.png"],
  },

  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body
        className={`overflow-x-hidden bg-black`}
        >
        <Header/>
        <main>
          {children}
          <ViewCanvas />
        </main>
        <Footer/>
      </body>
    </html>
  );
}
