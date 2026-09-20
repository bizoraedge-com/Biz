import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/services/custom-software-development' },
    title: 'Custom Software Development | BizoraEdge',
    description: 'Bespoke software solutions built exactly to your business requirements.',
};

export default function CustomSoftwareDevelopmentPage() {
    return (
        <ServiceTemplate 
            title="Custom Software Built for Your Business"
            subtitle="Custom Software Development"
            description="We design and build bespoke software solutions that align perfectly with your unique business processes, helping you operate more efficiently."
            benefits={[
                "Tailored workflows",
                "Legacy system modernization",
                "Custom API development",
                "Scalable architecture",
                "Ongoing support"
            ]}
        />
    );
}
