import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    alternates: { canonical: '/services/custom-solutions' },
    title: 'Custom Business Software Solutions | BizoraEdge',
    description: 'BizoraEdge can work with you to design custom applications, automation tools, dashboards, portals and integrations around specialized business requirements.',
};

export default function CustomSolutionsPage() {
    return (
        <main style={{ width: '100%', backgroundColor: '#f8fafc', paddingTop: '80px', paddingBottom: '80px' }}>
            <section style={{ backgroundColor: '#03142c', color: '#ffffff', padding: 'clamp(4rem, 10vw, 6rem) clamp(1rem, 5vw, 2rem) clamp(5rem, 12vw, 8rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                        When Your Business Needs a Solution That <span style={{ color: '#60a5fa' }}>Doesn't Come in a Box</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                        Not every technology requirement fits neatly into a predefined category.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.6, marginTop: '1rem' }}>
                        BizoraEdge can work with you to design custom applications, automation tools, dashboards, portals and integrations around specialized business requirements.
                    </p>
                    <div style={{ marginTop: '2.5rem' }}>
                        <Link href="/quote" style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', display: 'inline-block' }}>
                            Tell Us What You Need
                        </Link>
                    </div>
                </div>
            </section>

            <section style={{ maxWidth: '1200px', margin: '-4rem auto 4rem', padding: '0 clamp(1rem, 5vw, 2rem)', position: 'relative', zIndex: 10 }}>
                <div style={{ backgroundColor: '#ffffff', padding: 'clamp(1.5rem, 5vw, 4rem)', borderRadius: '24px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 5vw, 4rem)' }}>
                    
                    <div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '2rem' }}>Possible Solutions</h2>
                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                            {['Business automation', 'Custom dashboards', 'Internal tools', 'Workflow applications', 'Digital portals', 'API integrations', 'Data platforms', 'Software modernization', 'Specialized business applications'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', color: '#475569' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0' }} />

                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>How We Approach Unique Requirements</h2>
                        <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.7 }}>
                            We first understand the business problem, then determine whether an existing solution, integration, customization or completely custom application makes the most sense.
                        </p>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem', padding: 'clamp(1.5rem, 5vw, 3rem)', backgroundColor: '#eff6ff', borderRadius: '16px' }}>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>Ready to Discuss Your Unique Challenge?</h2>
                        <Link href="/quote" style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '1rem clamp(1.5rem, 4vw, 2.5rem)', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', display: 'inline-block' }}>
                            Tell Us What You Need
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
