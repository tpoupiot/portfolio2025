import type { Metadata, Viewport } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import localFont from "next/font/local";
import "./globals.css";
import AOS from "./components/AOS";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Timéo Poupiot - Portfolio",
    description: "Etudiant en BUT informatique et développeur web",
    keywords: "développeur web, portfolio, projets, contact",
    robots: "index, follow",
};

export const viewports: Viewport = {
    width: "device-width",
    initialScale: 1.0,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <SpeedInsights/>
			    <AOS />
				<Header />
                {children}
                <Footer />
                <Cursor />
            </body>
        </html>	
    );
}
