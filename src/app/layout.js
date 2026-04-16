import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { TransitionOverlay } from "@/components/ui/PageTransition";
import { AppStateProvider } from "@/components/providers/AppStateProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "NgurahAp - Portfolio",
  description: "Ngurah Arya",

  openGraph: {
    title: "NgurahAp - Portfolio",
    description: "Ngurah Arya",
    siteName: "NgurahAp Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dbhx39mmm/image/upload/q_auto/f_auto/v1776268773/portofolio_m7uoaa.png",
        width: 1200,
        height: 630,
        alt: "NgurahAp Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NgurahAp - Portfolio",
    description: "Ngurah Arya",
    images: [
      "https://res.cloudinary.com/dbhx39mmm/image/upload/q_auto/f_auto/v1776268773/portofolio_m7uoaa.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <AppStateProvider>
          <TransitionOverlay />
          <Navbar />
          {children}
        </AppStateProvider>
      </body>
    </html>
  );
}
