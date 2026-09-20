import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/services/saas-development' },
    title: 'SaaS Development | BizoraEdge',
    description: 'We build scalable Software as a Service (SaaS) products tailored to your business model.',
};

export default function SaasDevelopmentPage() {
    return (
        <ServiceTemplate 
            title="Scalable SaaS Platforms for Growth"
            subtitle="SaaS Development"
            description="We build scalable Software as a Service (SaaS) products tailored to your business model with robust architectures, secure multi-tenancy, and high performance."
            benefits={[
                "Multi-tenant architecture",
                "Subscription management",
                "Secure API integrations",
                "High availability",
                "Scalable infrastructure"
            ]}
        />
    );
}
