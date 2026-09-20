import ServicePageClient from './ServicePageClient';

export const runtime = 'edge';

export default function ServicePage({ params }: { params: { slug: string } }) {
    return <ServicePageClient params={params} />;
}
