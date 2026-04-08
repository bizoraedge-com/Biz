"use client";

import React from 'react';
import styles from './WhyPartner.module.css';

const features = [
    {
        icon: '🏆',
        title: '5+ Years of Industry Excellence',
        desc: 'Led by veteran Full-Stack developers with a proven track record in the IT sector.',
    },
    {
        icon: '⚡',
        title: 'Agile-First Approach',
        desc: 'Rapid iterations and transparent communication ensure your product evolves with the market.',
    },
    {
        icon: '📈',
        title: 'Scalability Guaranteed',
        desc: 'We architect systems designed to grow seamlessly alongside your expanding user base.',
    },
    {
        icon: '🔒',
        title: 'Security by Design',
        desc: 'From encryption to blockchain immutability, we bake security into every line of code.',
    },
];

const floatingCards = [
    { icon: '🏅', label: '5+ Years Experience', cls: styles.floatCard1, iconCls: styles.floatIcon1 },
    { icon: '⚙️', label: 'Agile Workflow', cls: styles.floatCard2, iconCls: styles.floatIcon2 },
    { icon: '🛡️', label: 'Secure Systems', cls: styles.floatCard3, iconCls: styles.floatIcon3 },
];

export function WhyPartner() {
    return (
        <section className={styles.section}>
            <div className="container position-relative z-1">

                {/* Heading */}
                <h1 className={styles.heading}>Why Partner with Bizora?</h1>
                <p className={styles.subtext}>
                    We don't just build software — we deliver strategic technology partnerships
                    that drive real business outcomes.
                </p>

                {/* CTA Buttons */}
                <div className={styles.ctaRow}>
                    <button className={styles.btnPrimary}>🚀 Get Started</button>
                    <button className={styles.btnSecondary}>▶ Watch Demo</button>
                </div>

                {/* Trust Line */}
                <div className={styles.trustLine}>
                    <div className={styles.trustAvatars}>
                        <span>A</span>
                        <span>B</span>
                        <span>C</span>
                        <span>D</span>
                    </div>
                    <span>Trusted by global clients worldwide</span>
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
