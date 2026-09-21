"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { GetQuoteModal } from './GetQuoteModal';
import { GetTrialModal } from './GetTrialModal';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [forceCloseDesktop, setForceCloseDesktop] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    const handleMenuLinkClick = () => {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
        setForceCloseDesktop(true);
        setTimeout(() => setForceCloseDesktop(false), 300);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Fire initially strictly in case is loaded already scrolled
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/images/IMG-20260920-WA0012.jpg" alt="BizoraEdge Logo" style={{ height: '64px', width: 'auto' }} />
                </Link>
            </div>

            <div className={styles.rightContainer}>
                {/* Desktop Nav */}
                <nav className={`${styles.nav} ${styles.desktopNav}`}>
                    <Link href="/" className={styles.navLink}>Home</Link>
                    <Link href="/about" className={styles.navLink} onClick={handleMenuLinkClick}>About</Link>

                    <div className={`${styles.navLinkWrapper} ${forceCloseDesktop ? styles.forceClose : ''}`}>
                        <div className={styles.navLink}>
                            Services
                            <svg className={styles.chevronDown} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Mega Menu Dropdown */}
                        <div className={styles.megaMenu}>
                            <div className={styles.megaMenuBody}>
                                <div className={styles.featuresArea}>
                                    <div className={styles.megaSectionTitle}>Our Services</div>
                                    <div className={styles.featuresGrid}>
                                        <Link href="/web-development" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Web Development</div>
                                                <div className={styles.featureDesc}>Scalable and responsive web solutions</div>
                                            </div>
                                        </Link>
                                        <Link href="/mobile-app-development" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Mobile App Development</div>
                                                <div className={styles.featureDesc}>Native and cross-platform mobile apps</div>
                                            </div>
                                        </Link>
                                        <Link href="/crm-development" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>CRM Development</div>
                                                <div className={styles.featureDesc}>Customer relationship management tools</div>
                                            </div>
                                        </Link>
                                        <Link href="/iot-solutions" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>IoT Solutions</div>
                                                <div className={styles.featureDesc}>Connected devices and smart platforms</div>
                                            </div>
                                        </Link>
                                        <Link href="/blockchain-development" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Blockchain Development</div>
                                                <div className={styles.featureDesc}>Decentralized networks and smart contracts</div>
                                            </div>
                                        </Link>
                                        <Link href="/fintech-solutions" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>FinTech Solutions</div>
                                                <div className={styles.featureDesc}>Secure financial architectures and platforms</div>
                                            </div>
                                        </Link>
                                        <Link href="/enterprise-software" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Enterprise Software</div>
                                                <div className={styles.featureDesc}>Custom software for large organizations</div>
                                            </div>
                                        </Link>
                                        <Link href="/digital-marketing" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Digital Marketing</div>
                                                <div className={styles.featureDesc}>Data-driven growth and marketing strategies</div>
                                            </div>
                                        </Link>
                                        <Link href="/custom-solutions" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Custom Solutions</div>
                                                <div className={styles.featureDesc}>Tailored software crafted for your unique needs</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.exploreArea}>
                                    <div className={styles.megaSectionTitle}>Explore</div>
                                    <div className={styles.exploreCard}>
                                        <div className={styles.exploreImageWrapper}>
                                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="BizoraEdge Solutions" className={styles.exploreImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.exploreContent}>
                                            <div className={styles.exploreTitle}>Platform Overview</div>
                                            <div className={styles.exploreDesc}>Take a free tour of our platform features</div>
                                            <button onClick={() => setIsDemoModalOpen(true)} className={styles.exploreLink} style={{ border: 'none', background: 'transparent', textAlign: 'left', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
                                                Book a Demo
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.megaMenuFooter}>
                                <div className={styles.footerInfo}>
                                    <div className={styles.footerIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                    </div>
                                    <span>What is custom software?</span>
                                    <span className={styles.footerSecondary}>lets connect</span>
                                </div>
                                <button className={styles.footerBtn} onClick={() => { setIsDemoModalOpen(true); handleMenuLinkClick(); }}>Get Started</button>
                            </div>
                        </div>
                    </div>

                    {/* <Link href="/portfolio" className={styles.navLink} onClick={handleMenuLinkClick}>Portfolio</Link> */}
                    <Link href="/blog" className={styles.navLink} onClick={handleMenuLinkClick}>Blog</Link>
                    <Link href="/contact" className={styles.navLink} onClick={handleMenuLinkClick}>Contact</Link>
                </nav>

                <div className={styles.headerActions}>
                    <button className={styles.primaryBtn} onClick={() => setIsQuoteModalOpen(true)}>Get a Quote</button>
                    <a href="tel:+919344697948" aria-label="Call Us" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'var(--color-primary, #0052cc)', marginLeft: '12px', transition: 'color 0.2s', padding: '8px', border: '2px solid var(--color-primary, #0052cc)', borderRadius: '50%' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </a>
                </div>

                {/* Mobile Hamburger Toggle */}
                <button className={styles.hamburgerBtn} onClick={() => setIsMenuOpen(true)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
            </div>

            {/* Mobile Off-Canvas Menu Backdrop */}
            {isMenuOpen && (
                <div className={styles.offcanvasOverlay} onClick={() => setIsMenuOpen(false)}></div>
            )}

            {/* Mobile Off-Canvas Sidebar */}
            <div className={`${styles.offcanvasSidebar} ${isMenuOpen ? styles.offcanvasOpen : ''}`}>
                <div className={styles.offcanvasHeader}>
                    <Link href="/">
                        <img src="/images/IMG-20260920-WA0012.jpg" alt="BizoraEdge Logo" style={{ height: '56px', width: 'auto' }} />
                    </Link>
                    <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div className={styles.offcanvasBody}>
                    <Link href="/" className={styles.offcanvasLink} onClick={handleMenuLinkClick}>Home</Link>
                    <Link href="/about" className={styles.offcanvasLink} onClick={handleMenuLinkClick}>About</Link>

                    <div
                        className={`${styles.offcanvasLink} ${styles.mobileDropdownToggle}`}
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                        Services
                        <svg className={styles.chevronDown} style={{ transform: isMobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {isMobileServicesOpen && (
                        <div className={styles.mobileDropdown}>
                            <div className={styles.megaMenuBody} style={{ padding: '0', flexDirection: 'column' }}>
                                <div className={styles.featuresArea}>
                                    <div className={styles.featuresGrid}>
                                        <Link href="/web-development" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Web Development</div>
                                            </div>
                                        </Link>
                                        <Link href="/mobile-app-development" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Mobile App Development</div>
                                            </div>
                                        </Link>
                                        <Link href="/crm-development" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>CRM Development</div>
                                            </div>
                                        </Link>
                                        <Link href="/iot-solutions" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>IoT Solutions</div>
                                            </div>
                                        </Link>
                                        <Link href="/blockchain-development" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Blockchain Development</div>
                                            </div>
                                        </Link>
                                        <Link href="/fintech-solutions" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>FinTech Solutions</div>
                                            </div>
                                        </Link>
                                        <Link href="/enterprise-software" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Enterprise Software</div>
                                            </div>
                                        </Link>
                                        <Link href="/digital-marketing" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Digital Marketing</div>
                                            </div>
                                        </Link>
                                        <Link href="/custom-solutions" className={styles.featureItem} style={{ textDecoration: 'none' }} onClick={handleMenuLinkClick}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Custom Solutions</div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.exploreArea} style={{ marginTop: '24px' }}>
                                    <div className={styles.megaSectionTitle}>Explore</div>
                                    <div className={styles.exploreCard}>
                                        <div className={styles.exploreImageWrapper}>
                                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="BizoraEdge Solutions" className={styles.exploreImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.exploreContent}>
                                            <div className={styles.exploreTitle}>Platform Overview</div>
                                            <div className={styles.exploreDesc}>Take a free tour of our platform features</div>
                                            <button onClick={() => setIsDemoModalOpen(true)} className={styles.exploreLink} style={{ border: 'none', background: 'transparent', textAlign: 'left', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
                                                Book a Demo
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* <Link href="/portfolio" className={styles.offcanvasLink} onClick={handleMenuLinkClick}>Portfolio</Link> */}
                    <Link href="/blog" className={styles.offcanvasLink} onClick={handleMenuLinkClick}>Blog</Link>
                    <Link href="/contact" className={styles.offcanvasLink} onClick={handleMenuLinkClick}>Contact</Link>

                    <div className={styles.offcanvasActions}>
                        <button className={styles.primaryBtn} style={{ width: '100%' }} onClick={() => setIsQuoteModalOpen(true)}>Get a Quote</button>
                    </div>
                </div>
            </div>
            {/* Get Quote Modal */}
            <GetQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
            
            {/* Demo Modal */}
            <GetTrialModal 
                isOpen={isDemoModalOpen} 
                onClose={() => setIsDemoModalOpen(false)} 
                title="Book a Demo"
                buttonText="Request Demo"
                successTitle="Demo Request Sent!"
                apiEndpoint="/api/trial"
            />
        </header>
    );
}
