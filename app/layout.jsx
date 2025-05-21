import { Poppins } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./componets/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hetch",
  description: "web development",
  keywrods: "reac, angular, html, css, web design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${(geistSans.variable, poppins.className)} ${
          geistMono.variable
        } antialiased`}
      >
        <Header></Header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
