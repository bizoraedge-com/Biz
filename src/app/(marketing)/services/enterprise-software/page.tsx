import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/services/enterprise-software' },
    title: 'Enterprise Software Development Company | BizoraEdge',
    description: 'Large organizations often work across multiple teams, systems and workflows. Custom enterprise software can bring those processes together and create better visibility across the organization.',
};

export default function EnterpriseSoftwarePage() {
    return (
        <ServiceTemplate 
            title="Enterprise Software That Connects Your Business"
            subtitle="Enterprise Software Development"
            description="Large organizations often work across multiple teams, systems and workflows. Custom enterprise software can bring those processes together and create better visibility across the organization."
            benefits={[
                "Custom business process automation",
                "Internal communication and management tools",
                "Legacy system modernization",
                "Data warehousing and analytics dashboards",
                "Cloud infrastructure development",
                "API and microservices architecture",
                "High-level security implementation"
            ]}
            faq={[
                { q: 'Can you integrate new software with our legacy systems?', a: 'Yes. We specialize in building APIs and middleware that allow new modern applications to communicate securely with existing legacy databases and software.' },
                { q: 'How do you handle software scalability?', a: 'We design enterprise architecture using cloud-native services and microservices, ensuring the application can scale resources automatically based on demand.' },
                { q: 'What is your approach to security?', a: 'Security is integrated into our development lifecycle from day one. We follow enterprise security best practices, implement role-based access control, and ensure data is encrypted at rest and in transit.' },
                { q: 'Do you provide ongoing support after deployment?', a: 'Yes. We offer service level agreements (SLAs) for ongoing maintenance, security patching, and future feature development.' },
                { q: 'How do we migrate our existing data?', a: 'We handle the entire data migration process, including data cleansing, schema mapping, and secure transfer to the new system.' }
            ]}
            slug="Enterprise Software Development"
        />
    );
}
