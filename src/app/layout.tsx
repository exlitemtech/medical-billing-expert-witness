import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medical Billing Expert Witness | Certified CPC Expert Testimony",
  description: "Certified medical billing and coding expert witnesses for litigation. CPC, CCS, RHIA experts provide testimony in healthcare fraud, billing disputes, and compliance cases. 24-hour response nationwide.",
  keywords: "medical billing expert witness, coding expert witness, CPC expert witness, CCS expert testimony, healthcare billing litigation, medical billing fraud expert, billing compliance expert, healthcare litigation expert, medical coding testimony, billing audit expert witness",
  authors: [{ name: "Medical Billing Expert Witnesses" }],
  robots: "index, follow",
  openGraph: {
    title: "Medical Billing Expert Witness | Certified CPC Expert Testimony",
    description: "Certified medical billing and coding expert witnesses for litigation. CPC, CCS, RHIA experts provide testimony in healthcare fraud, billing disputes, and compliance cases.",
    type: "website",
    locale: "en_US",
    siteName: "Medical Billing Expert Witness",
  },
  alternates: {
    canonical: "/",
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
