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
            
            {/* Global style block for hover effects on this specific page */}
            <style dangerouslySetInnerHTML={{__html: `
                .blog-card {
                    height: 100%;
                    background-color: #ffffff;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }
                .blog-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
                    border-color: #cbd5e1;
                }
                .blog-card-image {
                    height: 200px;
                    background: linear-gradient(135deg, #0f172a 0%, #3b82f6 100%);
                    position: relative;
                }
                .blog-card-image::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0; right: 0;
                    height: 50%;
                    background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%);
                }
                .blog-card-content {
                    padding: 2.5rem 2rem;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }
                .blog-read-more {
                    margin-top: 2rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #2563eb;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: gap 0.2s;
                }
                .blog-card:hover .blog-read-more {
                    gap: 0.8rem;
                }
            `}} />

            <section style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: 'clamp(6rem, 15vw, 12rem) clamp(1rem, 5vw, 2rem) clamp(4rem, 10vw, 8rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#0f172a' }}>
                        Insights for Businesses Building With Technology
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.8 }}>
                        Technology moves quickly.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6, marginTop: '1rem' }}>
                        Our blog provides insights on software development, digital platforms, operations, and the role of technology in business today.
                    </p>
                </div>
            </section>

            <section style={{ maxWidth: '1200px', margin: '-4rem auto 4rem', padding: '0 clamp(1rem, 5vw, 2rem)', position: 'relative' }}>
                <div style={{ padding: '0', borderRadius: '24px' }}>
                    
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '3rem', textAlign: 'center' }}>Featured Articles</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {ARTICLES.map((article, i) => (
                            <a href={`/blog/${article.id}`} key={i} style={{ textDecoration: 'none' }}>
                                <div className="blog-card">
                                    <div className="blog-card-image" style={{ 
                                        background: i === 0 ? 'linear-gradient(135deg, #0f172a 0%, #2563eb 100%)' : 
                                                    i === 1 ? 'linear-gradient(135deg, #0f172a 0%, #10b981 100%)' :
                                                              'linear-gradient(135deg, #0f172a 0%, #8b5cf6 100%)'
                                    }}>
                                        <div style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                                            {article.readTime}
                                        </div>
                                    </div>
                                    <div className="blog-card-content">
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                            <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>{article.date}</span>
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.4 }}>{article.title}</h3>
                                        <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, flexGrow: 1, margin: 0 }}>{article.desc}</p>
                                        
                                        <div className="blog-read-more">
                                            Read Article <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <ContactFooter />
        </main>
    );
}
