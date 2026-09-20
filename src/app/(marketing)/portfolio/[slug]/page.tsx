import { Metadata } from 'next';
import Link from 'next/link';

export const dynamicParams = false;

export function generateStaticParams() {
    const slugs = [
        'cooking-app',
        'real-estate-crm',
        'fleet-tracking-iot',
        'crypto-payment-gateway',
        'patient-health-app',
        'algo-trading-platform',
        'university-erp-system'
    ];
    return slugs.map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug || '';
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return {
        title: `${title} | Portfolio | BizoraEdge`,
        description: `Explore the ${title} project from BizoraEdge.`,
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams?.slug || '';
    const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <main style={{ width: '100%', backgroundColor: 'var(--brand-light, #f8f9fa)', paddingTop: '80px', paddingBottom: '80px', minHeight: '100vh', fontFamily: 'var(--font-inter), sans-serif' }}>
            
            <section style={{ padding: '6rem 2rem', textAlign: 'center', backgroundColor: '#ffffff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
                    <Link href="/portfolio" style={{ color: 'var(--brand-primary, #003366)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600, marginBottom: '2rem', transition: 'opacity 0.2s' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back to Portfolio
                    </Link>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0066cc', backgroundColor: '#f0f4f8', padding: '0.4rem 1rem', borderRadius: '50px' }}>
                            Category
                        </span>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#475569', backgroundColor: '#f1f5f9', padding: '0.4rem 1rem', borderRadius: '50px' }}>
                            Industry
                        </span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.03em', background: 'linear-gradient(135deg, var(--brand-primary, #003366) 0%, #0066cc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 }}>
                        {title}
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#555', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
                        A concise description of the project and the business context. Replace this placeholder with the actual verified project overview.
                    </p>
                </div>
            </section>

            <section style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 clamp(1rem, 3vw, 2rem)', position: 'relative' }}>
                <div style={{ backgroundColor: '#ffffff', padding: 'clamp(2rem, 5vw, 4rem)', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0, 51, 102, 0.05)', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 5vw, 3.5rem)' }}>
                    
                    <div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-primary, #003366)', marginBottom: '1rem', paddingBottom: '0.5rem' }}>The Challenge</h2>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}>
                            What problem did the client need to solve? Detail the business friction, technical debt, or market opportunity that initiated the project.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-primary, #003366)', marginBottom: '1rem', paddingBottom: '0.5rem' }}>Our Approach</h2>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}>
                            How was the requirement analyzed and translated into a technology strategy? Explain the planning, architecture decisions, and methodology.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-primary, #003366)', marginBottom: '1rem', paddingBottom: '0.5rem' }}>The Solution</h2>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}>
                            What did BizoraEdge design and develop? Describe the final product, its core functionality, and how it addresses the initial challenge.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-primary, #003366)', marginBottom: '1.5rem', paddingBottom: '0.5rem' }}>Key Features</h2>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'].map((feature, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0066cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    <span><strong>{feature}:</strong> Description of this key feature and its value.</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-primary, #003366)', marginBottom: '1.5rem', paddingBottom: '0.5rem' }}>Technologies Used</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                            {['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'].map((tech, i) => (
                                <span key={i} style={{ padding: '0.5rem 1.25rem', backgroundColor: '#f0f4f8', color: '#003366', borderRadius: '50px', fontWeight: 600, fontSize: '0.9rem' }}>
                                    {tech}
                                </span>
                            ))}
                            <span style={{ fontSize: '0.85rem', color: '#888', fontStyle: 'italic', marginLeft: '0.5rem' }}>* Only verified technologies</span>
                        </div>
                    </div>

                    <div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--brand-primary, #003366)', marginBottom: '1rem', paddingBottom: '0.5rem' }}>Project Outcome</h2>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.8 }}>
                            Describe measurable outcomes only where they are supported by actual project data. (e.g., "Reduced processing time by 40%", "Increased user engagement by 25%").
                        </p>
                    </div>
                    
                    <div style={{ backgroundColor: '#f8f9fa', padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-primary, #003366)', marginBottom: '1rem' }}>Related Services</h2>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Link href="/services" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>Relevant Service 1 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                            <Link href="/services" style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>Relevant Service 2 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></Link>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '1rem', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)', backgroundColor: '#f0f4f8', borderRadius: '16px' }}>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--brand-primary, #003366)', marginBottom: '1.5rem' }}>Have a Similar Challenge?</h2>
                        <Link href="/quote" style={{ background: 'linear-gradient(90deg, #0052cc 0%, #002060 50%, #0052cc 100%)', backgroundSize: '200% 100%', color: '#fff', padding: '1.2rem 3rem', borderRadius: '3px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', display: 'inline-block', transition: 'background-position 0.4s ease' }}>
                            Let's Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
