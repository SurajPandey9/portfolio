import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suraj Pandey | Full Stack Developer & AI Engineer",
  description: "Professional portfolio of Suraj Pandey - Full Stack Developer specializing in Django with AI implementation in Real Time Web Applications.",
  keywords: [
    "Full Stack Developer",
    "Python  Developer",
    "Django",
    "Web Development",
    "Linux",
    "Node.js",
    "Web Developer",
    "Portfolio",
    "Suraj Pandey"
  ],
  authors: [{ name: "Suraj Pandey" }],
  creator: "Suraj Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Suraj Pandey| Full Stack Developer & Python Developer",
    description: "Professional portfolio showcasing innovative web development projects.",
    siteName: "Suraj Pandey Portfolio",
    images: [
      {
        url: "https://alexmorgan.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suraj Pandey Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Pandey | Full Stack Developer",
    description: "Professional portfolio showcasing innovative web development projects.",
    creator: "@surajpandey",
    images: ["https://alexmorgan.dev/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
