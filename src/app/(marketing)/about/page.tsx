import { Metadata } from 'next';
import React from 'react';
import { ContactFooter } from '@/components/sections/ContactFooter';
import styles from './about.module.css';

export const metadata: Metadata = {
    title: 'About BizoraEdge | Software & Digital Solutions Company',
    description: 'Learn about BizoraEdge, a technology company building custom software, SaaS, mobile apps, AI, CRM, FinTech, blockchain, IoT and digital solutions.',
    keywords: [
        "About BizoraEdge",
        "Software Development Company",
        "Custom Software Development",
        "Software Solutions Company",
        "Digital Solutions",
        "Custom Software Solutions",
        "SaaS Development",
        "Mobile App Development",
        "AI Application Development",
        "Business Technology Solutions"
    ],
    alternates: {
        canonical: 'https://bizoraedge.com/about',
    },
    openGraph: {
        title: "About BizoraEdge | Build Better. Grow Smarter.",
        description: "Discover BizoraEdge and our approach to building custom software, SaaS, mobile apps, AI, CRM, FinTech, blockchain, IoT and business-focused digital solutions.",
        url: "https://bizoraedge.com/about",
    },
    twitter: {
        card: "summary_large_image",
        title: "About BizoraEdge | Build Better. Grow Smarter.",
        description: "Learn how BizoraEdge transforms business ideas and requirements into practical, scalable digital solutions.",
    },
};

export default function AboutPage() {
    const whatWeDo = [
        'Custom Software Development',
        'Booking Application Development',
        'CRM Development',
        'IoT Solutions',
        'Mobile Application Development',
        'FinTech Solutions',
        'Digital Marketing Solutions',
        'AI-Powered Application Development',
        'Blockchain Solutions',
        'SaaS Development'
    ];

    const ourApproach = [
        { 
            title: 'Start With the Business Problem', 
            desc: 'Every business has different processes, customers, challenges, and goals. We begin by understanding the problem that technology needs to solve rather than simply building software for the sake of building software.',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            )
        },
        { 
            title: 'Plan the Right Solution', 
            desc: 'Once requirements are understood, we help define the appropriate features, user experience, technology approach, and development scope.',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
            )
        },
        { 
            title: 'Build With Purpose', 
            desc: 'We develop solutions with attention to usability, scalability, security, maintainability, and the specific needs of the business.',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            )
        },
        { 
            title: 'Grow With Technology', 
            desc: 'Technology needs can evolve as a business grows. Our approach focuses on building solutions that can be improved, expanded, and adapted as requirements change.',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
            )
        }
    ];

    const whyBizoraEdge = [
        { title: 'Business-Focused Solutions', desc: 'We focus on understanding business objectives and developing technology around those objectives.' },
        { title: 'Custom-Built Technology', desc: 'Every business is different. We create solutions based on specific requirements rather than relying only on one-size-fits-all approaches.' },
        { title: 'Scalable Architecture', desc: 'We consider future growth and changing requirements when planning and developing digital solutions.' },
        { title: 'Clear Communication', desc: 'Clear requirements, expectations, progress, and feedback are important throughout the development process.' },
        { title: 'Technology With Purpose', desc: 'We focus on selecting and applying technology where it can provide practical value to the business.' },
        { title: 'Long-Term Perspective', desc: 'Software development does not always end at launch. We aim to build solutions that can evolve with changing business needs.' }
    ];

    const processSteps = [
        { num: '01', title: 'Idea', desc: 'Identify the initial concept and business goal.' },
        { num: '02', title: 'Requirements', desc: 'Understand the business, users, and challenges.' },
        { num: '03', title: 'Planning', desc: 'Define scope, priorities, architecture and development direction.' },
        { num: '04', title: 'Design', desc: 'Create experiences and interfaces around user needs.' },
        { num: '05', title: 'Development', desc: 'Build the product using an appropriate technology stack.' },
        { num: '06', title: 'Testing', desc: 'Validate functionality, usability, performance and integrations.' },
        { num: '07', title: 'Deployment', desc: 'Prepare and deploy the product.' },
        { num: '08', title: 'Support', desc: 'Continue with maintenance, enhancements and scaling when required.' }
    ];

    return (
        <main style={{ width: '100%', backgroundColor: '#f8fafc', paddingTop: '80px', paddingBottom: '80px' }}>
            {/* Hero Section */}
            <section style={{ backgroundColor: '#03142c', color: '#ffffff', padding: 'clamp(4rem, 10vw, 6rem) clamp(1rem, 5vw, 2rem) clamp(5rem, 12vw, 8rem)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: '#fff' }}>
                        Building Technology <span style={{ color: '#60a5fa' }}>Around Your Business</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', lineHeight: 1.8 }}>
                        BizoraEdge is a technology and software development company focused on creating practical digital solutions for businesses, startups, and organizations.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.6, marginTop: '1rem' }}>
                        We help transform business ideas, requirements, and challenges into modern software solutions designed around real business needs. From custom software and SaaS platforms to mobile applications, CRM systems, AI-powered applications, FinTech, blockchain, IoT, and booking solutions, we focus on building technology that supports business growth and operational efficiency.
                    </p>
                    <p style={{ fontSize: '1.5rem', color: '#fff', fontWeight: 'bold', marginTop: '2rem' }}>
                        BizoraEdge — Build Better. Grow Smarter.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section style={{ maxWidth: '1200px', margin: '-4rem auto 4rem', padding: '0 clamp(1rem, 5vw, 2rem)', position: 'relative', zIndex: 10 }}>
                <div style={{ backgroundColor: '#ffffff', padding: 'clamp(1.5rem, 5vw, 4rem)', borderRadius: '24px', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 5vw, 4rem)' }}>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(2rem, 5vw, 3rem)' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>What We Do</h2>
                            <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.7 }}>
                                At BizoraEdge, we provide custom technology and digital development solutions based on the unique requirements of each business. We focus on understanding what a business needs before determining the right technology, features, architecture, and development approach.
                            </p>
                            <ul style={{ color: '#475569', fontSize: '1.125rem', lineHeight: 1.7, marginTop: '1rem', paddingLeft: '1.5rem' }}>
                                {whatWeDo.map((item, index) => (
                                    <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ backgroundColor: '#f1f5f9', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Our Mission</h3>
                                <p style={{ color: '#475569', margin: 0 }}>Our mission is to make modern technology more practical and accessible for businesses by transforming ideas and business requirements into useful, scalable digital solutions. We aim to help businesses use technology to improve processes, create better customer experiences, automate operations, and build new digital opportunities.</p>
                            </div>
                            <div style={{ backgroundColor: '#f1f5f9', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #3b82f6' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>Our Vision</h3>
                                <p style={{ color: '#475569', margin: 0 }}>Our vision is to build a technology company that helps businesses move forward through innovative, reliable, and business-focused digital solutions. We believe technology should not simply exist as a feature of a business. It should help businesses operate better, serve customers better, and grow smarter.</p>
                            </div>
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0' }} />

                    {/* Our Approach */}
                    <div className={styles.approachSection}>
                        <h2 className={styles.approachTitle}>Our Approach</h2>
                        <div className={styles.approachGrid}>
                            {ourApproach.map((v, i) => (
                                <div key={i} className={styles.approachCard}>
                                    <div className={styles.stepNumber}>0{i + 1}</div>
                                    <div className={styles.iconWrapper}>
                                        {v.icon}
                                    </div>
                                    <h4 className={styles.cardTitle}>{v.title}</h4>
                                    <p className={styles.cardDesc}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0' }} />

                    {/* Why BizoraEdge */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>Why BizoraEdge?</h2>
                            <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                                We work toward understanding your requirements first and then identifying a practical development approach based on your business goals, users, features, and future needs.
                            </p>
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                                alt="BizoraEdge Team Collaborating" 
                                style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }} 
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {whyBizoraEdge.map((r, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                    <div style={{ color: '#3b82f6', marginTop: '0.25rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.25rem 0' }}>{r.title}</h4>
                                        <p style={{ color: '#64748b', margin: 0 }}>{r.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0' }} />

                    {/* Process */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>From Idea to Digital Solution</h2>
                        <p style={{ color: '#475569', fontSize: '1.125rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                            A software idea is only the beginning. At BizoraEdge, we help turn ideas and business requirements into structured digital solutions through a clear process.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
                            {processSteps.map((s, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', backgroundColor: '#f8fafc', padding: 'clamp(1rem, 5vw, 1.5rem) clamp(1rem, 5vw, 2rem)', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#cbd5e1', marginRight: '2rem', width: '50px' }}>{s.num}</div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem 0' }}>{s.title}</h4>
                                        <p style={{ color: '#64748b', margin: 0 }}>{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <ContactFooter />
        </main>
    );
}
