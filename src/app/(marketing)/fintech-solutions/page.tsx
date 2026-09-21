import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/fintech-solutions' },
    title: 'FinTech Software Development Company | BizoraEdge',
    description: 'Financial technology requires careful thinking around usability, reliability, integrations and data. BizoraEdge develops FinTech applications and supporting digital systems around specific financial workflows and business requirements.',
};

export default function FinTechSolutionsPage() {
    return (
        <ServiceTemplate 
            title="Technology for the Digital Financial Ecosystem"
            subtitle="FinTech Solutions"
            description="Financial technology requires careful thinking around usability, reliability, integrations and data. BizoraEdge develops FinTech applications and supporting digital systems around specific financial workflows and business requirements."
            benefits={[
                "Payment gateway integration",
                "Digital wallet applications",
                "Peer-to-peer lending platforms",
                "Trading and wealth management software",
                "Banking APIs and middleware",
                "Anti-Money Laundering (AML) integrations",
                "Know Your Customer (KYC) onboarding flows"
            ]}
            faq={[
                { q: 'How do you ensure FinTech applications are secure?', a: 'We employ bank-grade encryption for data at rest and in transit, implement multi-factor authentication (MFA), and follow OWASP top 10 security protocols during development.' },
                { q: 'Do you build compliance directly into the software?', a: 'Yes. We can integrate automated KYC/AML verification tools and ensure the architecture supports your local regulatory requirements (like GDPR or PCI DSS).' },
                { q: 'Can you integrate third-party banking APIs?', a: 'Absolutely. We frequently work with APIs from Plaid, Stripe, open banking protocols, and legacy banking core systems.' },
                { q: 'Do you build algorithmic trading platforms?', a: 'Yes, we can build high-performance systems capable of real-time data processing for algorithmic trading and portfolio management.' },
                { q: 'Can you develop cryptocurrency solutions?', a: 'Yes. Our FinTech and Web3 teams often collaborate to build cryptocurrency exchanges, custody solutions, and payment gateways.' }
            ]}
            slug="FinTech Solutions"
        />
    );
}
