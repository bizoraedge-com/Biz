"use client";

import React, { useState } from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = (await response.json()) as any;

            if (response.ok && data.success) {
                setStatus('success');
                setEmail('');
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again later.');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const linkColumns = [
        {
            title: "Quick Links",
            links: [
                { name: "About BizoraEdge", href: "/about" },
                { name: "Our Technology Services", href: "/services" },
                { name: "Case Studies & Portfolio", href: "/portfolio" },
                { name: "Technology Blog", href: "/blog" },
                { name: "Contact Our Team", href: "/contact" }
            ]
        },
        {
            title: "Core Solutions",
            links: [
                { name: "Custom Software Development", href: "/services/custom-software-development" },
                { name: "Booking Application Development", href: "/services/booking-application-development" },
                { name: "CRM Development", href: "/services/crm-development" },
                { name: "IoT Solutions", href: "/services/iot-solutions" },
                { name: "Mobile Application Development", href: "/services/mobile-app-development" },
                { name: "FinTech Solutions", href: "/services/fintech-solutions" },
                { name: "AI-Powered Applications", href: "/services/ai-powered-applications" },
                { name: "Blockchain Solutions", href: "/services/blockchain-development" },
                { name: "SaaS Development", href: "/services/saas-development" }
            ]
        },
        {
            title: "Legal Information",
            links: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Refund & Cancellation Policy", href: "/refund-and-cancellation" },
                { name: "Terms & Conditions", href: "/terms-and-conditions" }
            ]
        }
    ];

    return (
        <footer id="footer" className={styles.section}>
            <div className={styles.newsletterSection}>
                <div className={styles.newsletterContent}>
                    <h2 className={styles.newsletterHeading}>Technology Insights Without the Noise</h2>
                    <p className={styles.newsletterDesc}>Get useful technology insights about software development, digital products, and emerging technology.</p>
                    <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm} suppressHydrationWarning>
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.newsletterInput}
                            suppressHydrationWarning
                        />
                        <button type="submit" disabled={status === 'loading'} className={styles.newsletterSubmit} suppressHydrationWarning>
                            {status === 'loading' ? '...' : 'Subscribe'}
                        </button>
                    </form>
                    {status === 'success' && <p className={styles.successMessage}>You&apos;re subscribed. Thanks for joining the BizoraEdge community.</p>}
                    {status === 'error' && <p style={{ color: '#f87171', marginTop: '15px', fontSize: '0.95rem' }}>{errorMessage}</p>}
                </div>
            </div>

            {/* Bottom Link Grid with Contact Info as First Column */}
            <div className={styles.linkGrid}>
                {/* Contact Info Column */}
                <div className={styles.linkCol}>
                    <h5 className={styles.colTitle}>Get in Touch</h5>
                    <a href="mailto:info@bizoraedge.com" className={styles.infoLink} style={{ display: 'block', marginBottom: '8px' }}>info@bizoraedge.com</a>
                    <a href="tel:+919344697948" className={styles.infoLink} style={{ display: 'block', marginBottom: '8px' }}>+91-93446-97948</a>
                    <div className={styles.infoLink} style={{ display: 'block', marginBottom: '25px' }}>India - USA</div>
                    
                    {/* Social Icons */}
                    <div className={styles.socialIcons}>
                        <a href="https://www.instagram.com/bizora_edge/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://x.com/Bizoraedge" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16z" /><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/bizoraedge/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="https://wa.me/919344697948" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        </a>
                    </div>
                </div>

                {/* Other Link Columns */}
                {linkColumns.map((col, idx) => (
                    <div key={idx} className={styles.linkCol}>
                        <h5 className={styles.colTitle}>{col.title}</h5>
                        <ul className={styles.linkList}>
                            {col.links.map((link, lIdx) => (
                                <li key={lIdx} className={styles.linkListItem}>
                                    <Link href={link.href} className={styles.footerNavLink}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Footer Copyright Bar */}
            <div className={styles.footerBar}>
                <div className="container-fluid px-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start gap-2 gap-md-0 mb-3 mb-md-0 text-center text-md-start">
                            <Link href="/" className={styles.footerLogoLink}>
                                <img src="/images/logo-dark.png" alt="BizoraEdge Logo" style={{ height: '36px', width: 'auto' }} />
                            </Link>
                            <span style={{ color: '#666', fontSize: '0.9rem' }} className="ms-md-3 mt-2 mt-md-0">Technology Built Around Your Business.</span>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <span className={styles.footerCopy}>© {new Date().getFullYear()} BizoraEdge. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
