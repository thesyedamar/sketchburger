import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fredoka = localFont({
  src: "./fonts/Fredoka.woff2",
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = localFont({
  src: "./fonts/Nunito.woff2",
  variable: "--font-nunito",
  display: "swap",
});

const dmSans = localFont({
  src: "./fonts/DMSans.woff2",
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grill Yard Islamabad - Sizzling Steaks, Continental & Chinese Cuisines | I-8 Markaz",
  description:
    "Grill Yard is all about taste and quality! Enjoy premium sizzling steaks, gourmet burgers, artisan pastas, and Chinese cuisines in I-8 Markaz, Islamabad.",
  keywords: "Grill Yard, Grill Yard Islamabad, steaks, I-8 Markaz, beef steak, peri peri steak, pasta, burgers, continental, restaurant Islamabad",
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