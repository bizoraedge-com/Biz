"use client";

import React from 'react';
import Link from 'next/link';
import styles from './WhyPartner.module.css';

const features = [
    {
        icon: '🎯',
        title: 'We Start With the Problem',
        desc: 'Before building a solution, we focus on understanding your business challenge, requirements, workflows, and objectives. This helps us create technology that solves the right problem rather than simply adding features.',
    },
    {
        icon: '🗣️',
        title: 'Clear Communication',
        desc: 'We believe successful technology projects require clear and consistent communication. We keep requirements, development progress, expectations, and feedback aligned throughout the project.',
    },
    {
        icon: '💼',
        title: 'Business-Focused Approach',
        desc: 'Technology should support your business, not complicate it. We focus on creating solutions that improve processes, support efficiency, enhance customer experiences, and provide a foundation for growth.',
    },
    {
        icon: '🚀',
        title: 'Scalable & Reliable Technology',
        desc: 'We build solutions with scalability, security, maintainability, and long-term usability in mind. Our goal is to create technology that can evolve as your business requirements change.',
    },
];

const floatingCards = [
    { icon: '💼', label: 'Business-Focused Solutions', cls: styles.floatCard1, iconCls: styles.floatIcon1 },
    { icon: '⚙️', label: 'Scalable Technology', cls: styles.floatCard2, iconCls: styles.floatIcon2 },
    { icon: '🛡️', label: 'Secure Development', cls: styles.floatCard3, iconCls: styles.floatIcon3 },
];

export function WhyPartner() {
    return (
        <section className={styles.section}>
            <div className="container position-relative z-1">

                {/* Heading */}
                <h2 className={styles.heading}>Why Partner With BizoraEdge?</h2>
                <p className={styles.subtext}>
                    We don't just build software — we build technology solutions around your business goals. From understanding the problem to developing and supporting the solution, BizoraEdge focuses on practical, scalable, and business-driven technology.
                </p>

                {/* CTA Buttons */}
                <div className={styles.ctaRow} style={{flexDirection: 'column', gap: '1rem'}}>
                    <h3 className="h4 fw-bold text-dark">Let's Build the Right Solution</h3>
                    <p className="text-secondary mb-3" style={{maxWidth: '600px', margin: '0 auto'}}>
                        Have a business challenge, software idea, or digital product in mind? Talk to BizoraEdge about your requirements and explore how technology can help move your business forward.
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                        <Link href="/quote" className="btn btn-primary px-4 py-2 fw-medium">Get a Free Quote</Link>
                        <Link href="/contact" className="btn btn-outline-primary px-4 py-2 fw-medium">Talk to Our Experts</Link>
                    </div>
                </div>

                {/* Trust Line */}
                <div className={styles.trustLine}>
                    <div className={styles.trustAvatars}>
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                    </div>
                    <span>Providing Custom-Built Solutions & Long-Term Support</span>
                </div>

                {/* Hero Visual with Floating Cards */}
                <div className={styles.visualArea}>
                    {/* Circle background */}
                    <div className={styles.circleBackground}></div>

                    {/* Hero Image */}
                    <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=640&q=80"
                        alt="Bizora team member"
                        className={styles.heroImage}
                    />

                    {/* Floating Cards */}
                    {floatingCards.map(card => (
                        <div key={card.label} className={`${styles.floatCard} ${card.cls}`}>
                            <span className={`${styles.floatIcon} ${card.iconCls}`}>{card.icon}</span>
                            {card.label}
                        </div>
                    ))}
                </div>

                {/* Feature Cards 2x2 */}
                <div className={styles.featureGrid}>
                    {features.map(f => (
                        <div key={f.title} className={styles.featureCard}>
                            <div className={styles.featureIconWrap}>{f.icon}</div>
                            <p className={styles.featureTitle}>{f.title}</p>
                            <p className={styles.featureDesc}>{f.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
