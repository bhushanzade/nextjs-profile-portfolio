import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@components/navbar";
import Footer from "@components/footer";
import SocialFixedBar from "@components/SocialFixedBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Open Source Next.js Profile Portfolio - Reusable and Customizable";
const description =
  "A fully-featured, open-source profile portfolio built with Next.js. Download, customize, and deploy your own profile portfolio with ease. Perfect for developers, engineers, and tech enthusiasts.";

export const viewport: Viewport = {
  themeColor: "#000000", // Color of the browser toolbar, used in mobile apps and browsers
  width: "device-width, initial-scale=1.0",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://bhushanz.netlify.app/"),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://bhushanz.netlify.app/", // URL of your website
    images: [
      {
        url: "/images/myimg.png",
        width: 800,
        height: 600,
        alt: "Bhushan Zade Profile Picture", // Alt text for the image
      },
    ],
    siteName: "Open Source Next.js Profile Portfolio",
    locale: "en_US", // Set to your locale (e.g., en_US)
    type: "website", // Type of content for Open Graph
  },
  twitter: {
    card: "summary_large_image", // Type of Twitter card (summary or summary_large_image)
    creator: "@ZadeBhushan", // Replace with your actual Twitter handle (e.g., @bhushanzade)
    title: title,
    description: description,
    images: [
      {
        url: "/images/myimg.png",
        width: 800,
        height: 600,
        alt: "Bhushan Zade Profile Picture", // Alt text for the image
      },
    ],
    site: "@ZadeBhushan", // Replace with your actual Twitter handle (e.g., @bhushanzade),
  },
  // Basic meta tags for SEO
  robots: {
    index: true, // Allows search engines to index the page
    follow: true, // Allows search engines to follow links on the page
  },

  applicationName: "Portfolio using Next Js", // Name of your application
  creator: "Bhushan Zade", // Name of the creator of the website
  publisher: "Bhushan Zade", // Name of the publisher of the website
  "authors": [{
    name: "Bhushan Zade",
    "url": "https://bhushanz.netlify.app/",
  }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <SocialFixedBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
