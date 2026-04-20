import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LangProvider } from "./components/LangContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AdDReSSBANGLADESH - Serving Humanity, Building Bangladesh",
    template: "%s | AdDReSSBANGLADESH"
  },
  description: "AdDReSSBANGLADESH is a non-profit organization working to empower communities through education, health, livelihood, and environment programs across Bangladesh.",
  keywords: ["NGO Bangladesh", "charity Bangladesh", "non-profit Dhaka", "AdDReSSBANGLADESH", "community development", "humanitarian aid Bangladesh"],
  openGraph: {
    type: "website",
    siteName: "AdDReSSBANGLADESH",
    title: "AdDReSSBANGLADESH - Serving Humanity, Building Bangladesh",
    description: "Non-profit organization empowering communities across Bangladesh.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LangProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
