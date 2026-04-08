import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const ubuntu = Ubuntu({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-ubuntu",
});

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'), // Change in production
    title: {
        default: "AG Real-time Product",
        template: "%s | AG"
    },
    description: "A premium real-time product for the modern web.",
    openGraph: {
        title: "AG Real-time Product",
        description: "Experience unparalleled real-time capabilities.",
        siteName: "AG Real-time",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: "/images/fav-logo.png"
    }
};

import { CommonModal } from "@/components/common/CommonModal";
import BootstrapClient from "@/components/common/BootstrapClient";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </head>
            <body className={`${ubuntu.className} antialiased`}>
                {children}
                <CommonModal />
                <BootstrapClient />
            </body>
        </html>
    );
}
