import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/web-development' },
    title: 'Web Development Company | Custom Web Applications | BizoraEdge',
    description: 'A good website should do more than look professional. It should communicate clearly, work smoothly across devices and support the action you want visitors to take. BizoraEdge develops websites and web applications around user experience, performance and business requirements.',
};

export default function WebDevelopmentPage() {
    return (
        <ServiceTemplate 
            title="Web Development Designed for Real Users and Real Business Goals"
            subtitle="Web Development"
            description="A good website should do more than look professional. It should communicate clearly, work smoothly across devices and support the action you want visitors to take. BizoraEdge develops websites and web applications around user experience, performance and business requirements."
            benefits={[
                "Corporate websites", 
                "Business portals", 
                "Web applications", 
                "Customer portals", 
                "Dashboards", 
                "E-commerce platforms", 
                "API-connected applications"
            ]}
            faq={[
                { q: 'What types of websites do you develop?', a: 'We build everything from fast marketing sites and complex corporate portals to full-scale interactive web applications.' },
                { q: 'Can you build custom web applications?', a: 'Yes, we specialize in building bespoke web applications with custom business logic and scalable backend infrastructure.' },
                { q: 'Can you integrate third-party APIs?', a: 'Absolutely. We regularly integrate payment gateways, CRMs, marketing tools, and other third-party software via APIs.' },
                { q: 'Will the website be mobile responsive?', a: 'Yes, every web project we develop is designed and tested to be fully responsive across mobile, tablet, and desktop devices.' },
                { q: 'Can you improve an existing website?', a: 'We can perform audits, code refactoring, performance optimization, and feature enhancements for existing applications.' }
            ]}
            slug="Web Development"
        />
    );
}
