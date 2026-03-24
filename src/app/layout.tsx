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
  title: "MEAT'n CHEESE - Fast Food Restaurant Dargai",
  description:
    "Best fast food in Dargai. Order now for fast delivery near Army Forte Dargai.",
  keywords: "MEATnCHEESE, fast food, Dargai, burgers, rolls, delivery,KPK",
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