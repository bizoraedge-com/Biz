import ServicePageClient from './ServicePageClient';

export const dynamicParams = false;

export function generateStaticParams() {
    const slugs = [
        'booking-application-development',
        'ai-powered-applications',
        'saas-development',
        'custom-software-development'
    ];
    return slugs.map((slug) => ({ slug }));
}
export default function ServicePage({ params }: { params: { slug: string } }) {
    return <ServicePageClient params={params} />;
}
