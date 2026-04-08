import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'http://localhost:3000',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        // Future dynamic routes for real-time product pages will go here
    ];
}
