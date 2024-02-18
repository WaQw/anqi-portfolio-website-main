import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";
import GoogleAnalytics from "../components/googleAnalytics";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Anqi Wang | Personal",
  authors: [
    { name: "Anqi Wang", url: "https://github.com/WaQw" },
  ],
  description: "Anqi Wang's personal portfolio website",
  // openGraph: {
  //   title: "Anqi Wang | Personal",
  //   description: "Anqi Wang's personal portfolio website",
  //   url: "",
  // },
  alternates: {
    canonical: "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        <Header />
        <main className="container lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
