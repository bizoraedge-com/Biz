"use client";

import { Navbar } from '@/components/common/Navbar';
import { ContactFooter } from '@/components/sections/ContactFooter';
import { GetQuoteModal } from '@/components/common/GetQuoteModal';
import { useState } from 'react';
import styles from './ServicePage.module.css';

// Mock service data - ideally this would come from a CMS or a dedicated data file
const servicesData: Record<string, { title: string; subtitle: string; description: string; benefits: string[] }> = {
    'fintech': {
        title: 'FinTech Solutions',
        subtitle: 'Secure financial architectures and platforms',
        description: 'We build resilient, high-frequency trading ledgers, banking APIs, and scalable decentralized finance infrastructure designed for security and compliance.',
        benefits: ['Bank-grade security', 'High-frequency transaction support', 'Regulatory compliance ready', 'Seamless third-party API integration']
    },
    'erp': {
        title: 'ERP Systems',
        subtitle: 'Comprehensive enterprise resource planning',
        description: 'Optimize your business operations with our custom ERP systems tailored to manage your supply chain, HR, finance, and day-to-day processes in one unified platform.',
        benefits: ['Unified data management', 'Real-time analytics and reporting', 'Custom modules for specific workflows', 'High scalability']
    },
    'web-applications': {
        title: 'Web Applications',
        subtitle: 'Scalable and responsive web solutions',
        description: 'Deliver engaging user experiences with our custom web applications. We utilize modern frameworks to build fast, secure, and highly interactive platforms.',
        benefits: ['Responsive on all devices', 'SEO optimized architecture', 'Progressive Web App (PWA) capabilities', 'Robust backend integration']
    },
    'mobile-applications': {
        title: 'Mobile Applications',
        subtitle: 'Native and cross-platform mobile apps',
        description: 'Reach your audience anywhere with our native and cross-platform mobile apps. From concept to App Store launch, we handle the entire lifecycle.',
        benefits: ['iOS and Android support', 'Intuitive UX/UI design', 'Offline capabilities', 'Push notification integration']
    },
    'blockchain': {
        title: 'Blockchain Technology',
        subtitle: 'Decentralized networks and smart contracts',
        description: 'Harness the power of decentralization. We develop secure smart contracts, decentralized apps (dApps), and private blockchain networks.',
        benefits: ['Immutable data records', 'Smart contract automation', 'Enhanced security protocols', 'Decentralized finance (DeFi) integration']
    },
    'crm': {
        title: 'CRM Systems',
        subtitle: 'Customer relationship management tools',
        description: 'Build stronger relationships with your customers through our custom CRM solutions designed to track leads, automate marketing, and improve sales.',
        benefits: ['Lead tracking and scoring', 'Automated follow-up sequences', 'Sales pipeline visualization', 'Third-party integrations']
    },
    'enterprise-software': {
        title: 'Enterprise Software',
        subtitle: 'Custom software for large organizations',
        description: 'Solve complex organizational challenges with bespoke enterprise software designed to integrate seamlessly with your existing IT infrastructure.',
        benefits: ['Bespoke feature development', 'Legacy system integration', 'High-level data encryption', 'Dedicated ongoing support']
    }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const service = servicesData[params.slug];

    if (!service) {
        return (
            <main>
                <Navbar />
                <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh' }}>
                    <h1>Service Not Found</h1>
                    <p>The service you are looking for does not exist.</p>
                </div>
                <ContactFooter />
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{service.title}</h1>
                    <p className={styles.subtitle}>{service.subtitle}</p>
                    <p className={styles.description}>{service.description}</p>
                    
                    <button className={styles.getStartedBtn} onClick={() => setIsModalOpen(true)}>
                        Get Started
                    </button>
                </div>
            </section>

            <section className={styles.benefitsSection}>
                <div className={styles.container}>
                    <h2 className={styles.benefitsTitle}>Key Benefits</h2>
                    <div className={styles.benefitsGrid}>
                        {service.benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.checkIcon}>✓</div>
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactFooter />
            
            <GetQuoteModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                defaultService={params.slug} 
            />
        </main>
    );
}
