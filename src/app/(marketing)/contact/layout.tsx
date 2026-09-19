import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: { canonical: '/contact' },
    title: 'Contact BizoraEdge | Custom Software Development Company',
    description: 'Contact BizoraEdge to discuss your software, mobile app, CRM, SaaS, FinTech, IoT, or AI development project. Talk to our technology team.',
    keywords: ["Contact BizoraEdge", "Software Development Company Contact"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
