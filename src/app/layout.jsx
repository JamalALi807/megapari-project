import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2Tailwind from '@/components/Navbar2Tailwind';
import Navbar1Tailwind from '@/components/Navbar1';
import FooterLinks from '@/components/FooterLinks';
import FooterLinks2 from '@/components/FooterLinks2';
import AwardFooter from '@/components/AwardFooter';

// import Navbar2Bootsrap from '@/components/Navbar2Bootsrapp'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar1Tailwind />
        <Navbar2Tailwind />
        {/* <Navbar2Bootsrap /> */}
        {children}
        <FooterLinks />
        <FooterLinks2 />
        <AwardFooter />
      </body>
    </html>
  );
}
