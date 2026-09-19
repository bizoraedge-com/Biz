import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Projects & Case Studies | BizoraEdge",
  description:
    "Explore BizoraEdge projects and case studies across custom software, SaaS, mobile apps, CRM, AI, FinTech, blockchain, IoT and booking solutions.",
  keywords: [
    "Custom Software Projects",
    "Software Development Case Studies",
    "Software Development Portfolio",
    "Custom Software Portfolio",
    "SaaS Projects",
    "Mobile App Projects",
    "CRM Projects",
    "AI Projects",
    "FinTech Projects",
    "Blockchain Projects",
    "IoT Projects",
    "Booking App Projects",
    "BizoraEdge",
  ],
  alternates: {
    canonical: "https://bizoraedge.com/portfolio",
  },
  openGraph: {
    url: "https://bizoraedge.com/portfolio",
    type: "website",
    title: "Our Technology Projects & Case Studies | BizoraEdge",
    description:
      "Explore BizoraEdge's technology portfolio featuring custom software, SaaS, mobile apps, CRM, AI, FinTech, blockchain, IoT and booking solutions.",
    siteName: "BizoraEdge",
    locale: "en_US",
    images: [
      {
        url: "https://bizoraedge.com/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "BizoraEdge Technology Projects & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Projects & Case Studies | BizoraEdge",
    description:
      "Explore BizoraEdge projects across custom software, SaaS, mobile apps, AI, CRM, FinTech, blockchain, IoT and booking solutions.",
    images: ["https://bizoraedge.com/og-image.png"],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
