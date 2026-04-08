"use client";

import React, { useState } from 'react';
import styles from './ContactFooter.module.css';

export function ContactFooter() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <footer className={styles.section}>
            {/* Stylized Map Background Overlay */}
            <div className={styles.mapBackground}></div>

            {/* Top Navigation Suggestion */}
            <div className={styles.topNav}>
                <span>look at google maps</span>
                <div className={styles.topNavLine}></div>
            </div>

            {/* Left Side: Large Header */}
            <h2 className={styles.heading}>Contact us</h2>

            {/* Right Side: Floating Form Card */}
            <div className={styles.formCardWrapper}>
                <div className={styles.formCard}>
                    <div className={styles.feedbackLabel}>Feedback form</div>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                name="name"
                                className={styles.formInput}
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                name="email"
                                className={styles.formInput}
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <input
                                type="tel"
                                name="phone"
                                className={styles.formInput}
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <textarea
                                name="message"
                                className={styles.formInput}
                                placeholder="Message"
                                rows={1}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Upload File Row */}
                        <div className={styles.uploadRow}>
                            <span style={{ fontSize: '1.2rem' }}>☁️</span>
                            <span>Upload file</span>
                        </div>

                        {/* Overlapping Submit Button */}
                        <button type="submit" className={styles.submitBtn}>
                            Send message
                            <span style={{ fontSize: '1.2rem' }}>—</span>
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Info Area: Multi-column Footer */}
            <div className={styles.bottomArea}>
                {/* Branding Column */}
                <div className={styles.brandingCol}>
                    <div className={styles.brandLabel}>
                        BizoraEdge<span className={styles.brandExt}>.com</span>
                    </div>
                    <p className={styles.brandDesc}>
                        Building scalable digital solutions for modern businesses globally.
                        Delivering high-performance software engineering via modern frameworks.
                    </p>
                </div>

                {/* Company Column */}
                <div className={styles.footerCol}>
                    <h4 className={styles.columnTitle}>Company</h4>
                    <ul className={styles.footerList}>
                        <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>About Us</a></li>
                        <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Careers</a></li>
                        <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Contact</a></li>
                    </ul>
                </div>

                {/* Services Column */}
                <div className={styles.footerCol}>
                    <h4 className={styles.columnTitle}>Services</h4>
                    <ul className={styles.footerList}>
                        <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Fintech Solutions</a></li>
                        <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>ERP Systems</a></li>
                        <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Enterprise Apps</a></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div className={styles.footerCol}>
                    <h4 className={styles.columnTitle}>Legal</h4>
                    <ul className={styles.footerList}>
                        <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Privacy Policy</a></li>
                        <li className={styles.footerListItem}><a href="#" className={styles.footerLink}>Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Copyright Bar (Absolute Bottom) */}
            <div className={styles.footerBar}>
                <span className={styles.footerCopy}>© 2026 BizoraEdge. All rights reserved.</span>
            </div>
        </footer>
    );
}
