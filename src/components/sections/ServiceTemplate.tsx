"use client";

import { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { ContactFooter } from '@/components/sections/ContactFooter';
import { GetQuoteModal } from '@/components/common/GetQuoteModal';
import styles from '@/app/(marketing)/services/service.module.css';

interface FAQ {
    q: string;
    a: string;
}

interface ServiceTemplateProps {
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    slug?: string;
    faq?: FAQ[]; // Kept for backwards compatibility with service pages
}

export default function ServiceTemplate({ title, subtitle, description, benefits, slug, faq }: ServiceTemplateProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className={styles.pageWrapper}>
            <Navbar />
            
            <div className={styles.bgBlobs}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
            </div>

            <main className={styles.container}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.subtitle}>{subtitle}</div>
                    <h1 className={styles.title}>
                        <span className={styles.titleHighlight}>{title}</span>
                    </h1>
                    <p className={styles.description}>{description}</p>
                    
                    <div className={styles.ctaWrapper}>
                        <button className={styles.getStartedBtn} onClick={() => setIsModalOpen(true)}>
                            Start Your Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </section>

                {/* What We Build Section */}
                <section className={styles.benefitsSection}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>What We Build</h2>
                        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Tailored solutions powering your business goals</p>
                    </div>
                    
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.iconWrapper}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <span className={styles.benefitText}>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                {faq && faq.length > 0 && (
                    <section className={styles.faqSection}>
                        <div className={styles.sectionHeader} style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '1280px', margin: '0 auto 4rem auto' }}>
                            <h2 className={styles.sectionTitle} style={{ fontSize: '2.5rem', fontWeight: 700, color: '#ffffff', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
                        </div>
                        
                        <div className={styles.faqGrid}>
                            {faq.map((f, i) => (
                                <div key={i} className={styles.faqItem} data-active={openFaqIndex === i ? 'true' : 'false'}>
                                    <button className={styles.faqQuestion} onClick={() => toggleFaq(i)}>
                                        {f.q}
                                        <svg className={styles.faqIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </button>
                                    <div className={styles.faqAnswer}>
                                        <p>{f.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <ContactFooter />
            
            <GetQuoteModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                defaultService={subtitle}
            />
        </div>
    );
}
