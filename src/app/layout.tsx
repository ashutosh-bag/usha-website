import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import NavBar from "@/layouts/NavBar";
import ResponsiveNavbar from "@/layouts/ResponsiveNavBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "USHA PROJECTS (INDIA) PRIVATE LIMITED",
  description:
    "Learn about our mission to maintain tradition and provide quality services, and our vision to become India's leader in EPC projects.",
  keywords: ["mission", "vision", "EPC projects", "India", "quality services"],
  icons: {
    icon: "/logoo.png",
    shortcut: "/logoo.png",
    apple: "/logoo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header Section */}
        <Header />
<NavBar/>
<ResponsiveNavbar/>
        {/* Main Content */}
        <main>{children}</main>

        {/* Footer Section */}
        <Footer/>
      </body>
    </html>
  );
}
