"use client";

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { GetQuoteModal } from './GetQuoteModal';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
                <img src="/images/logo-dark.png" alt="BizoraEdge Logo" style={{ height: '36px', width: 'auto' }} />
            </div>

            <div className={styles.rightContainer}>
                {/* Desktop Nav */}
                <nav className={`${styles.nav} ${styles.desktopNav}`}>
                    <a href="/" className={styles.navLink}>Home</a>
                    <a href="/about" className={styles.navLink}>About us</a>
                    <a href="/company" className={styles.navLink}>Company</a>

                    <div className={styles.navLinkWrapper}>
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
                                    <div className={styles.megaSectionTitle}>Features</div>
                                    <div className={styles.featuresGrid}>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Call Tracking</div>
                                                <div className={styles.featureDesc}>Use insight to improve marketing strategy</div>
                                            </div>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Call Routing</div>
                                                <div className={styles.featureDesc}>Never miss calls with relevant routing</div>
                                            </div>
                                        </div>
                                        <div className={`${styles.featureItem} ${styles.active}`}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Phone Number</div>
                                                <div className={styles.featureDesc}>Combine virtual number types for various ads</div>
                                            </div>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Call Reporting</div>
                                                <div className={styles.featureDesc}>Analyze call data to boost conversion</div>
                                            </div>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 6 4 18 20 18 21 6 3 6" /><path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /><path d="M12 11v4 M10 13h4" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Call Attribution</div>
                                                <div className={styles.featureDesc}>Determine productive channels</div>
                                            </div>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Pay Per Call</div>
                                                <div className={styles.featureDesc}>Launch pay-per-call campaigns and monitor commission</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.exploreArea}>
                                    <div className={styles.megaSectionTitle}>Explore</div>
                                    <div className={styles.exploreCard}>
                                        <div className={styles.exploreImageWrapper}>
                                            {/* Use a placeholder image that aligns with the user's design */}
                                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Customer Service" className={styles.exploreImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.exploreContent}>
                                            <div className={styles.exploreTitle}>Platform Overview</div>
                                            <div className={styles.exploreDesc}>Take a free tour of our platform features</div>
                                            <a href="/demo" className={styles.exploreLink}>
                                                Book a Demo
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.megaMenuFooter}>
                                <div className={styles.footerInfo}>
                                    <div className={styles.footerIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                    </div>
                                    <span>What is call routing software?</span>
                                    <span className={styles.footerSecondary}>lets connect</span>
                                </div>
                                <button className={styles.footerBtn}>Get Started</button>
                            </div>
                        </div>
                    </div>

                    <a href="/portfolio" className={styles.navLink}>Portfolio</a>
                </nav>

                <div className={styles.headerActions}>
                    <button className={styles.primaryBtn} onClick={() => setIsQuoteModalOpen(true)}>Get a Quote</button>
                    <a href="tel:+919344697948" className={styles.phoneIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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
                    <img src="/images/logo-dark.png" alt="BizoraEdge Logo" style={{ height: '36px', width: 'auto' }} />
                    <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div className={styles.offcanvasBody}>
                    <a href="/" className={styles.offcanvasLink}>Home</a>
                    <a href="/about" className={styles.offcanvasLink}>About us</a>
                    <a href="/company" className={styles.offcanvasLink}>Company</a>

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
                                    <div className={styles.megaSectionTitle}>Features</div>
                                    <div className={styles.featuresGrid}>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Call Tracking</div>
                                                <div className={styles.featureDesc}>Use insight to improve marketing strategy</div>
                                            </div>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Call Routing</div>
                                                <div className={styles.featureDesc}>Never miss calls with relevant routing</div>
                                            </div>
                                        </div>
                                        <div className={`${styles.featureItem} ${styles.active}`}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Phone Number</div>
                                                <div className={styles.featureDesc}>Combine virtual number types for various ads</div>
                                            </div>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Call Reporting</div>
                                                <div className={styles.featureDesc}>Analyze call data to boost conversion</div>
                                            </div>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 6 4 18 20 18 21 6 3 6" /><path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" /><path d="M12 11v4 M10 13h4" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Call Attribution</div>
                                                <div className={styles.featureDesc}>Determine productive channels</div>
                                            </div>
                                        </div>
                                        <div className={styles.featureItem}>
                                            <div className={styles.featureIcon}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                                            </div>
                                            <div className={styles.featureText}>
                                                <div className={styles.featureTitle}>Pay Per Call</div>
                                                <div className={styles.featureDesc}>Launch pay-per-call campaigns and monitor commission</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.exploreArea} style={{ marginTop: '24px' }}>
                                    <div className={styles.megaSectionTitle}>Explore</div>
                                    <div className={styles.exploreCard}>
                                        <div className={styles.exploreImageWrapper}>
                                            {/* Use a placeholder image that aligns with the user's design */}
                                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Customer Service" className={styles.exploreImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div className={styles.exploreContent}>
                                            <div className={styles.exploreTitle}>Platform Overview</div>
                                            <div className={styles.exploreDesc}>Take a free tour of our platform features</div>
                                            <a href="/demo" className={styles.exploreLink}>
                                                Book a Demo
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <a href="/portfolio" className={styles.offcanvasLink}>Portfolio</a>

                    <div className={styles.offcanvasActions}>
                        <button className={styles.primaryBtn} style={{ width: '100%' }} onClick={() => setIsQuoteModalOpen(true)}>Get a Quote</button>
                    </div>
                </div>
            </div>
            {/* Get Quote Modal */}
            <GetQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        </header>
    );
}
