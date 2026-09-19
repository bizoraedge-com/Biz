import { Card } from '@/components/ui/Card';
import { Metadata } from 'next';
import { Navbar } from '@/components/common/Navbar';
import { ContactFooter } from '@/components/sections/ContactFooter';

export const metadata: Metadata = {
    alternates: { canonical: '/blog' },
    title: 'Technology & Business Insights | BizoraEdge Blog',
    description: 'Read practical articles about software development, digital products, business automation, FinTech, blockchain, mobile applications and emerging technology.',
};

const ARTICLES = [
    {
        id: 'custom-software-vs-off-the-shelf',
        title: 'Custom Software vs Off-the-Shelf Software',
        desc: 'Understand when custom development makes sense and when an existing product may be enough.',
        date: 'Oct 15, 2023',
        readTime: '5 min read'
    },
    {
        id: 'how-to-plan-saas-mvp',
        title: 'How to Plan a Successful SaaS MVP',
        desc: 'Learn how to prioritize features and validate your idea before writing code.',
        date: 'Oct 28, 2023',
        readTime: '7 min read'
    },
    {
        id: 'role-of-qa',
        title: 'The Role of QA in Software Development',
        desc: 'Why testing shouldn\'t be an afterthought and how it saves money in the long run.',
        date: 'Nov 05, 2023',
        readTime: '6 min read'
    }
];

export default function BlogPage() {
    return (
        <main style={{ width: '100%', backgroundColor: '#f8fafc' }}>
            <Navbar />
            <section style={{ backgroundColor: '#03142c', color: '#ffffff', padding: 'clamp(6rem, 15vw, 12rem) clamp(1rem, 5vw, 2rem) clamp(4rem, 10vw, 8rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                        Insights for Businesses Building With Technology
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                        Technology moves quickly.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.6, marginTop: '1rem' }}>
                        We write about what actually matters for businesses trying to build better digital products, automate their operations and understand their options.
                    </p>
                </div>
            </section>

            <section style={{ maxWidth: '1200px', margin: '-4rem auto 4rem', padding: '0 clamp(1rem, 5vw, 2rem)', position: 'relative' }}>
                <div style={{ backgroundColor: '#ffffff', padding: 'clamp(1.5rem, 5vw, 4rem)', borderRadius: '24px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)' }}>
                    
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '3rem', textAlign: 'center' }}>Featured Articles</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                        {ARTICLES.map((article, i) => (
                            <a href={`/blog/${article.id}`} key={i} style={{ textDecoration: 'none' }}>
                                <Card style={{ height: '100%', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                                    <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>{article.date}</span>
                                            <span style={{ fontSize: '0.85rem', color: '#3b82f6', fontWeight: 600, backgroundColor: '#eff6ff', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{article.readTime}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.3 }}>{article.title}</h3>
                                        <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>{article.desc}</p>
                                        <div style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#3b82f6', fontWeight: 600, fontSize: '0.95rem' }}>
                                            Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </div>
                                    </div>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <ContactFooter />
        </main>
    );
}
