import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/mobile-app-development' },
    title: 'Mobile App Development Company | iOS & Android | BizoraEdge',
    description: 'Your customers expect digital experiences that work wherever they are. BizoraEdge develops mobile applications designed around usability, performance and integration with the systems behind the experience.',
};

export default function MobileAppDevelopmentPage() {
    return (
        <ServiceTemplate 
            title="Mobile Apps Built Around Your Users"
            subtitle="Mobile Application Development"
            description="Your customers expect digital experiences that work wherever they are. BizoraEdge develops mobile applications designed around usability, performance and integration with the systems behind the experience."
            benefits={[
                "Native iOS applications",
                "Native Android applications",
                "Cross-platform development (React Native / Flutter)",
                "Enterprise mobility solutions",
                "App UI/UX design",
                "API and backend development",
                "App store deployment"
            ]}
            faq={[
                { q: 'Do you build for iOS or Android?', a: 'We build for both. Depending on your business needs, we can develop separate native applications or a unified cross-platform application.' },
                { q: 'Should I choose native or cross-platform?', a: 'Cross-platform is often best for getting to market quickly on both platforms with a single codebase. Native is best if your app requires heavy hardware access or complex animations.' },
                { q: 'Can you build the backend for the app?', a: 'Yes. We develop the full technology stack, including the databases, APIs, and administrative dashboards required to run the application.' },
                { q: 'How do you ensure app security?', a: 'We implement secure authentication, encrypted local storage, and secure API communication to protect user data.' },
                { q: 'Will you help publish the app?', a: 'Yes, we handle the entire submission process for both the Apple App Store and Google Play Store.' }
            ]}
            slug="Mobile Application Development"
        />
    );
}
