import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/digital-marketing' },
    title: 'Digital Marketing Services | SEO & Online Growth | BizoraEdge',
    description: 'Having a website is only the beginning. Your customers need to discover you, understand what you offer and have a clear reason to take the next step. BizoraEdge provides digital marketing services focused on improving online visibility, reaching relevant audiences and supporting measurable business goals.',
};

export default function DigitalMarketingPage() {
    return (
        <ServiceTemplate 
            title="Digital Marketing That Helps Your Business Get Found"
            subtitle="Digital Marketing"
            description="Having a website is only the beginning. Your customers need to discover you, understand what you offer and have a clear reason to take the next step. BizoraEdge provides digital marketing services focused on improving online visibility, reaching relevant audiences and supporting measurable business goals."
            benefits={[
                "Technical and Content SEO",
                "Conversion Rate Optimization (CRO)",
                "Performance Marketing (PPC/SEM)",
                "B2B Lead Generation",
                "Product Marketing Strategy",
                "Marketing Automation Setup",
                "Analytics and Data Tracking"
            ]}
            faq={[
                { q: 'Do you only market the software you build?', a: 'No, we provide digital marketing services for both our own development clients and businesses with existing products.' },
                { q: 'What makes your approach to SEO different?', a: 'We focus on technical SEO fundamentals combined with high-intent content strategies that drive qualified leads, rather than just chasing vanity traffic.' },
                { q: 'Can you help us launch a new software product?', a: 'Yes. We can design the complete go-to-market strategy, including landing page optimization, initial paid acquisition campaigns, and early user onboarding.' },
                { q: 'How do you measure marketing success?', a: 'We set up robust analytics tracking (GA4, Mixpanel, custom dashboards) to measure the exact Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS).' },
                { q: 'Do you handle B2B or B2C marketing?', a: 'We have experience in both, but specialize heavily in B2B SaaS, enterprise lead generation, and complex tech product marketing.' }
            ]}
            slug="Digital Marketing"
        />
    );
}
