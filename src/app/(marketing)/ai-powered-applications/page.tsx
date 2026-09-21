import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/ai-powered-applications' },
    title: 'AI Powered Applications | BizoraEdge',
    description: 'Integrate artificial intelligence to automate processes and unlock new capabilities.',
};

export default function AiPoweredApplicationsPage() {
    return (
        <ServiceTemplate 
            slug="ai-powered-applications"
            title="AI-Powered Applications for Smart Automation"
            subtitle="AI-Powered Applications"
            description="Integrate artificial intelligence to automate processes, unlock new capabilities, and provide intelligent insights for your business operations."
            benefits={[
                "Machine learning models",
                "Natural language processing",
                "Predictive analytics",
                "Automated workflows",
                "Intelligent chatbots"
            ]}
        />
    );
}
