import { Geist, Yellowtail, Parkinsans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Hair Donation 555",
  description: "Gift hair, Gift hope. Donate Hair - Change lives! At Hair Donation 555, we believe everyone deserves to feel confident and beautiful, regardless of medical conditions that cause hair loss. We facilitate the process of hair donation to create high-quality wigs for those in need. HairDonations555 host hair collection drives where people can donate their hair and create high-quality wigs from the donated hair, ensuring a natural look. Contact us now, if you're a cancer patient to get a Free Wig! Wig donation is a generous way to support individuals experiencing hair loss due to medical conditions like cancer or alopecia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        {/* <link rel="icon" href="./favicon.ico" /> */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/android-chrome-512x512.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:image" content="https://www.hairdonations555.org/images/poster.jpg" />
        <meta property="og:image:alt" content="Hair Donations Poster" />
        <meta name="twitter:image" content="https://www.hairdonations555.org/images/poster.jpg" />
        <meta property="og:title" content="Hair Donation 555" />
        <meta property="og:description" content="Gift hair, Gift hope. Donate Hair - Change lives! At Hair Donation 555, we believe everyone deserves to feel confident and beautiful ..." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:alt" content="Hair Donations Poster" />
      </head>

      <body
        className={`${geistSans.variable} transition ease-in-out antialiased`}
      >
        {children}
      </body>
    </html>
  );
}