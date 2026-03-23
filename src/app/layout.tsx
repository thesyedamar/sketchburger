import type { Metadata } from "next";
import { Fredoka, Nunito, DM_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "Sketch Burger Dargai — Dargai's Juiciest Burgers",
  description:
    "Handcrafted smash burgers, crispy rolls and premium street food. Order on WhatsApp for fast delivery in Dargai, Malakand KPK.",
  keywords: "Sketch Burger, Dargai, burgers, rolls, fast food, delivery, Malakand, KPK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${nunito.variable} ${dmSans.variable} font-nunito antialiased`}
      >
        {children}
      </body>
    </html>
  );
}