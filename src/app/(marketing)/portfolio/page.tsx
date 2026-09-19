'use client';
import { Card } from '@/components/ui/Card';
import { useState } from 'react';
import styles from './portfolio.module.css';

const PROJECTS = [
    {
        id: 'cooking-app',
        title: 'Cooking App Admin Panel',
        category: 'Web',
        industry: 'Other',
        desc: 'A comprehensive admin dashboard built to manage recipes, user engagement, and analytics for a global cooking platform.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'real-estate-crm',
        title: 'Real Estate CRM System',
        category: 'CRM',
        industry: 'Real Estate',
        desc: 'A custom customer-management solution designed for real estate agents to track leads and property workflows.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'fleet-tracking-iot',
        title: 'Fleet Tracking IoT',
        category: 'IoT',
        industry: 'Logistics',
        desc: 'A connected hardware and cloud solution for real-time monitoring and operational visibility of logistics fleets.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'crypto-payment-gateway',
        title: 'Crypto Payment Gateway',
        category: 'Blockchain',
        industry: 'E-commerce',
        desc: 'A secure, decentralized cryptocurrency payment integration built seamlessly for a major e-commerce platform.',
        image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'patient-health-app',
        title: 'Patient Health App',
        category: 'Mobile',
        industry: 'Healthcare',
        desc: 'A highly secure, HIPAA-compliant mobile experience built for patients to manage appointments and health records.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'algo-trading-platform',
        title: 'Algo Trading Platform',
        category: 'FinTech',
        industry: 'FinTech',
        desc: 'An advanced algorithmic trading dashboard built for low-latency financial transactions and market analysis.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'university-erp-system',
        title: 'University ERP System',
        category: 'Enterprise',
        industry: 'Education',
        desc: 'A large-scale enterprise application designed to support internal academic processes and organizational workflows.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80'
    }
];

const CATEGORIES = ['All', 'CRM', 'IoT', 'Blockchain', 'Web', 'Mobile', 'Enterprise', 'FinTech'];
const INDUSTRIES = ['All', 'FinTech', 'Healthcare', 'E-commerce', 'Education', 'Logistics', 'Real Estate', 'Other'];

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedIndustry, setSelectedIndustry] = useState('All');

    const filteredProjects = PROJECTS.filter(project => {
        const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
        const industryMatch = selectedIndustry === 'All' || project.industry === selectedIndustry;
        return categoryMatch && industryMatch;
    });

    return (
        <main style={{ width: '100%', backgroundColor: 'var(--brand-light, #f8f9fa)', paddingTop: '80px', paddingBottom: '80px', minHeight: '100vh', fontFamily: 'var(--font-inter), sans-serif' }}>
            
            <section className={styles.heroSection} style={{ padding: '4rem 2rem' }}>
                <div className={styles.container} style={{ padding: 0 }}>
                    <h1 className={styles.title}>
                        Our Technology Projects & Case Studies
                    </h1>
                    <p className={styles.subtitle} style={{ marginTop: '1rem' }}>
                        Explore selected digital solutions developed across software, SaaS, mobile applications, booking platforms, CRM, AI, FinTech, blockchain and IoT. Our portfolio highlights how technology can be designed around different business requirements, workflows and customer experiences.
                    </p>
                </div>
            </section>

            <section className={styles.container} style={{ paddingTop: 0 }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-primary, #003366)', marginBottom: '2rem', textAlign: 'center' }}>Explore Our Projects</h2>
                
                {/* Filters */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem', padding: '2rem', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ fontWeight: 700, color: 'var(--brand-primary, #003366)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {CATEGORIES.map(cat => (
                                <button 
                                    key={cat} 
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{ padding: '0.5rem 1rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', border: selectedCategory === cat ? '2px solid var(--brand-primary, #003366)' : '1px solid #cbd5e1', backgroundColor: selectedCategory === cat ? 'var(--brand-primary, #003366)' : '#fff', color: selectedCategory === cat ? '#fff' : '#475569', transition: 'all 0.2s' }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <span style={{ fontWeight: 700, color: 'var(--brand-primary, #003366)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Industry</span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {INDUSTRIES.map(ind => (
                                <button 
                                    key={ind} 
                                    onClick={() => setSelectedIndustry(ind)}
                                    style={{ padding: '0.5rem 1rem', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', border: selectedIndustry === ind ? '2px solid var(--brand-primary, #003366)' : '1px solid #cbd5e1', backgroundColor: selectedIndustry === ind ? 'var(--brand-primary, #003366)' : '#fff', color: selectedIndustry === ind ? '#fff' : '#475569', transition: 'all 0.2s' }}
                                >
                                    {ind}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className={styles.portfolioGrid}>
                    {filteredProjects.length > 0 ? filteredProjects.map((project, i) => (
                        <a href={`/portfolio/${project.id}`} key={i} className={styles.portfolioCard}>
                            <div className={styles.imageWrapper}>
                                <img src={project.image} alt={project.title} className={styles.projectImage} />
                            </div>
                            <div className={styles.cardContent}>
                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                                    <span className={styles.tag}>{project.category}</span>
                                    <span className={styles.tag} style={{ backgroundColor: '#e2e8f0', color: '#475569' }}>{project.industry}</span>
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.desc}</p>
                                <div className={styles.caseStudyLabel}>
                                    View Case Study <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                        </a>
                    )) : (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 2rem', color: '#64748b' }}>
                            <p style={{ fontSize: '1.1rem' }}>No projects found matching the selected filters.</p>
                            <button onClick={() => { setSelectedCategory('All'); setSelectedIndustry('All'); }} style={{ marginTop: '1rem', padding: '0.5rem 1rem', border: '1px solid #cbd5e1', backgroundColor: '#fff', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, color: '#0f172a' }}>Clear Filters</button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
