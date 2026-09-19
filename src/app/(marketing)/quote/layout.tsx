import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: { canonical: '/quote' },
    title: 'Get a Free Quote | Custom Software Development | BizoraEdge',
    description: 'Request a free quotation from BizoraEdge for custom software development, mobile apps, CRM, SaaS, FinTech, IoT, or AI solutions.',
    keywords: ["Get a Free Quote", "Software Development Quotation", "Custom Software Pricing"],
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
