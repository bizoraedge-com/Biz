import type { Metadata } from "next";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL('https://bizoraedge.com'),
    title: {
        default: "Custom Software Development Company | BizoraEdge",
        template: "%s | BizoraEdge"
    },
    description: "BizoraEdge builds custom software, SaaS platforms, mobile apps, AI, FinTech, blockchain, CRM and IoT solutions to help businesses grow.",
    keywords: ["Custom Software Development", "Software Development Company", "Custom Software Development Services", "Software Development Services", "SaaS Development", "Mobile App Development", "AI Application Development", "FinTech Solutions", "Blockchain Development", "CRM Development", "IoT Solutions", "Booking Application Development", "BizoraEdge"],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Build Better. Grow Smarter. | BizoraEdge",
        description: "Transform your ideas into scalable digital solutions with BizoraEdge — custom software, SaaS, mobile apps, AI, FinTech, blockchain and more.",
        url: "/",
        siteName: "BizoraEdge",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://bizoraedge.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "BizoraEdge — Build Better. Grow Smarter.",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software & Digital Solutions | BizoraEdge",
        description: "Build smarter with BizoraEdge — custom software, SaaS, mobile apps, AI, FinTech, blockchain and scalable digital solutions.",
        images: ["https://bizoraedge.com/og-image.png"]
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

import { CustomChatWidget } from "@/components/common/CustomChatWidget";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-RXX8EG44WE" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-RXX8EG44WE'); `}
                </Script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </head>
            <body className="antialiased" style={{ fontFamily: '"Outfit", sans-serif' }}>
                {children}
                <CommonModal />
                <BootstrapClient />

                {/* Custom Chat Icon */}
                <CustomChatWidget />

                {/* Tawk.to Live Chat */}
                <Script 
                    id="tawk-to" 
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: `
                            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                            Tawk_API.onLoad = function(){
                                Tawk_API.hideWidget();
                            };
                            Tawk_API.onChatMinimized = function(){
                                Tawk_API.hideWidget();
                            };
                            (function(){
                            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                            s1.async=true;
                            s1.src='https://embed.tawk.to/6a684b0eba82601d4104627c/1jujmacjg';
                            s1.charset='UTF-8';
                            s1.setAttribute('crossorigin','*');
                            s0.parentNode.insertBefore(s1,s0);
                            })();
                        `
                    }}
                />

                {/* Statcounter Analytics Script */}
                <Script id="statcounter" strategy="afterInteractive">
                  {`
                    var sc_project=13355576; 
                    var sc_invisible=1; 
                    var sc_security="5310f7bb"; 
                  `}
                </Script>
                <Script
                  src="https://www.statcounter.com/counter/counter.js"
                  strategy="afterInteractive"
                />
                <noscript>
                  <div className="statcounter">
                    <a title="Web Analytics" href="https://statcounter.com/" target="_blank" rel="noreferrer">
                      <img
                        className="statcounter"
                        src="https://c.statcounter.com/13355576/0/5310f7bb/1/"
                        alt="Web Analytics"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </a>
                  </div>
                </noscript>
            </body>
        </html>
    );
}
