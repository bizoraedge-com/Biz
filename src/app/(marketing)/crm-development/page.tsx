import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/crm-development' },
    title: 'Custom CRM Development Company | BizoraEdge',
    description: 'Build custom CRM software for sales, customer management, workflows, reporting and business automation with BizoraEdge.',
};

export default function CRMDevelopmentPage() {
    return (
        <ServiceTemplate 
            title="CRM Software Built Around Your Customer Journey"
            subtitle="CRM Development"
            description="Your customer data should help your team work better—not make them search through disconnected tools. BizoraEdge develops custom CRM solutions that bring customer information, sales activity, communication and workflows into a more connected environment."
            benefits={[
                "Custom sales pipeline visualization",
                "Automated lead assignment and routing",
                "Email marketing integration",
                "Customer support ticketing systems",
                "Analytics and custom reporting dashboards",
                "Third-party tool integration",
                "Role-based access control"
            ]}
            faq={[
                { q: 'Why should we build a custom CRM instead of using Salesforce or HubSpot?', a: 'Custom CRMs eliminate high per-user monthly licensing fees, provide complete ownership of your data, and are built exactly around your specific sales process rather than forcing you to adapt to a generic template.' },
                { q: 'Can a custom CRM integrate with our existing email and calendar?', a: 'Yes. We can integrate with Gmail, Outlook, and other email providers via API to automatically log communications and sync calendar events.' },
                { q: 'How long does it take to develop a custom CRM?', a: 'Depending on the complexity, a custom CRM can take anywhere from 3 to 6 months to develop and deploy.' },
                { q: 'Is it possible to migrate our data from our current CRM?', a: 'Yes. We map your existing data structure to the new custom database and handle the secure migration of all customer records, notes, and historical data.' },
                { q: 'Who owns the CRM software once it is built?', a: 'You do. Once development is complete and finalized, you own the intellectual property and the codebase.' }
            ]}
            slug="CRM Development"
        />
    );
}
