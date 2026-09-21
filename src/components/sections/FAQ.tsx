"use client";

import { useState } from 'react';
import styles from './faq.module.css';

interface FAQItem {
    q: string;
    a: string;
}

const faqs: FAQItem[] = [
    {
        q: 'What services does BizoraEdge provide?',
        a: 'BizoraEdge provides custom software development and digital technology solutions for businesses. Our services include custom software development, booking application development, CRM systems, IoT solutions, mobile application development, FinTech solutions, digital marketing solutions, AI-powered applications, blockchain solutions, and SaaS development.'
    },
    {
        q: 'Does BizoraEdge build custom software for specific business requirements?',
        a: 'Yes. BizoraEdge develops custom software solutions based on your business requirements, workflows, processes, users, and objectives. The solution can be designed around your specific operational and technology needs rather than relying only on a standard off-the-shelf product.'
    },
    {
        q: 'Can BizoraEdge develop a software product from an idea?',
        a: 'Yes. If you have a software or application idea, BizoraEdge can help transform the concept into a structured digital product. Depending on the requirement, this may include planning, UI/UX design, development, testing, deployment, and ongoing improvements.'
    },
    {
        q: 'Does BizoraEdge develop SaaS applications?',
        a: 'Yes. BizoraEdge develops cloud-based SaaS applications with functionality such as user management, dashboards, subscriptions, integrations, and scalable architecture. SaaS products can be customized according to the business model and target users.'
    },
    {
        q: 'Can you develop mobile applications?',
        a: 'Yes. BizoraEdge can develop custom mobile applications for businesses, customers, employees, and digital products. Mobile applications can be planned around the required features, user experience, business model, and platform requirements.'
    },
    {
        q: 'Can BizoraEdge integrate APIs and third-party services?',
        a: 'Yes. API and third-party integrations can be incorporated into software applications based on project requirements. These may include payment services, communication platforms, business tools, authentication systems, maps, analytics, and other external services.'
    },
    {
        q: 'Can you develop CRM software for a business?',
        a: 'Yes. BizoraEdge can develop customized CRM systems for managing leads, customers, sales activities, communication, follow-ups, and business relationships. CRM functionality can be designed around the company\'s specific sales and customer-management processes.'
    },
    {
        q: 'Does BizoraEdge develop AI-powered applications?',
        a: 'Yes. BizoraEdge can develop AI-powered applications for use cases such as automation, data analysis, intelligent workflows, personalization, decision support, and other business requirements where AI can provide practical value.'
    },
    {
        q: 'Can BizoraEdge develop FinTech and payment-related solutions?',
        a: 'Yes. BizoraEdge provides FinTech development solutions for suitable financial technology use cases, including digital transaction workflows, financial applications, payment-related systems, and integrations. Project requirements, regulatory considerations, and third-party services are evaluated according to the specific use case.'
    },
    {
        q: 'Does BizoraEdge provide blockchain development?',
        a: 'Yes. BizoraEdge can develop blockchain-based applications and solutions for suitable use cases involving decentralized systems, smart contracts, transparent transactions, Web3 applications, and blockchain-enabled business processes.'
    },
    {
        q: 'How long does it take to develop a software application?',
        a: 'Development time depends on the project\'s scope, features, complexity, integrations, design requirements, testing requirements, and deployment environment. After understanding your requirements, BizoraEdge can provide a more appropriate project timeline.'
    },
    {
        q: 'How much does custom software development cost?',
        a: 'The cost depends on factors such as functionality, application type, design complexity, integrations, technology requirements, user roles, security requirements, and development scope. BizoraEdge can review your requirements and provide a project-specific quotation.'
    },
    {
        q: 'Does BizoraEdge provide post-launch support?',
        a: 'Support and maintenance can be provided based on the requirements and scope of the project. This may include troubleshooting, updates, improvements, monitoring, maintenance, and additional development.'
    },
    {
        q: 'Can startups and small businesses work with BizoraEdge?',
        a: 'Yes. BizoraEdge can work on technology requirements for startups, small businesses, and growing organizations. Solutions can be planned according to the business requirements, available resources, product goals, and expected growth.'
    },
    {
        q: 'How can I start a project with BizoraEdge?',
        a: 'You can start by contacting BizoraEdge and sharing your project idea, business requirements, or technology challenge. Our team can review the requirement and discuss the appropriate solution, scope, development approach, and next steps.'
    }
];

export function FAQ() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                    Have questions about software development, SaaS, mobile applications, AI, CRM, FinTech, or other digital solutions? Find answers to some of the common questions businesses ask before starting a technology project with BizoraEdge.
                </p>
            </div>
            
            <div className={styles.faqGrid}>
                {faqs.map((f, i) => (
                    <div key={i} className={styles.faqItem} data-active={openFaqIndex === i ? 'true' : 'false'}>
                        <button className={styles.faqQuestion} onClick={() => toggleFaq(i)}>
                            {f.q}
                            <svg className={styles.faqIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <div className={styles.faqAnswer}>
                            <div className={styles.faqAnswerInner}>
                                <p>{f.a}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Final CTA */}
            <div className="container mt-5 pt-4 text-center">
                <h3 className="h3 fw-bold text-dark mb-3">Have More Questions?</h3>
                <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
                    Tell us about your project and let BizoraEdge help you find the right technology solution for your business.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <a href="/quote" className="btn btn-primary px-4 py-2 fw-medium" style={{ borderRadius: '8px' }}>Get a Free Quote</a>
                    <a href="/contact" className="btn btn-outline-primary px-4 py-2 fw-medium" style={{ borderRadius: '8px' }}>Contact BizoraEdge</a>
                </div>
            </div>
        </section>
    );
}
