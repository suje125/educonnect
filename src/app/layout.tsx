import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "International Education Fair in India 2025 | Study Abroad Fair & Global University Expo",
  description: "Join India's largest study abroad fair 2025. Meet top universities, get free counseling, and explore scholarships. Register now for the global university fair in India.",
  keywords: "international education fair in India, study abroad fair 2025, global university fair India, education fair organizer India, meet foreign universities India",
  openGraph: {
    title: "International Education Fair in India 2025 | Study Abroad Fair & Global University Expo",
    description: "Join India's largest study abroad fair 2025. Meet top universities, get free counseling, and explore scholarships. Register now for the global university fair in India.",
    url: 'http://localhost:3000',
    siteName: "EduConnect",
    locale: "en_US",
    type: "website",
  },
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://educonnect.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
