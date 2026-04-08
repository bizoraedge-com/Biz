"use client";

import React, { useState } from 'react';
import styles from './Footer.module.css';
import Script from 'next/script';

export function Footer() {
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

    const linkColumns = [
        {
            title: "Product",
            links: [
                { name: "Features", content: "Explore our cutting-edge features designed for modern teams." },
                { name: "Pricing", content: "Transparent and flexible pricing plans to suit any scale." },
                { name: "Integrations", content: "Connect your favorite tools seamlessly with BizoraEdge." }
            ]
        },
        {
            title: "Platform",
            links: [
                { name: "Web App", content: "Experience the power of BizoraEdge directly in your browser." },
                { name: "Mobile App", content: "Stay connected and productive on the go with our mobile suite." },
                { name: "API", content: "Build custom solutions with our robust and developer-friendly API." }
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", content: "Find answers and guides in our comprehensive help center." },
                { name: "Contact", content: "Our team is here to help you succeed. Get in touch today." },
                { name: "Documentation", content: "Detailed technical guides to help you master our platform." }
            ]
        }
    ];

    return (
        <>
            <footer className={styles.section}>
                {/* Map Iframe Background */}
                <div className={styles.mapWrapper}>
                    <iframe
                        className={styles.mapIframe}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d78.118!3d9.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b118c533%3A0x7ae597aa0e083523!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Top Navigation Suggestion */}
                <div className={styles.topNav}>
                    <span>Location</span>
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

                            {/* Overlapping Submit Button */}
                            <button type="submit" className={styles.submitBtn}>
                                Send message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Middle Area: Adres & Contacts Info */}
                <div className={styles.infoArea}>
                    <div className={styles.infoCol}>
                        <div className={styles.infoTitle}>Our Regions</div>
                        <div className={styles.infoLink}>India</div>
                        <div className={styles.infoLink}>USA</div>
                        {/* <div className={styles.infoLink}>India - 625001</div> */}
                    </div>
                    <div className={styles.infoCol}>
                        <div className={styles.infoTitle}>Our Contacts</div>
                        <a href="mailto:info@bizoraedge.com" className={styles.infoLink}>info@bizoraedge.com</a>
                        <a href="tel:+919344697948" className={styles.infoLink}>+91 93446 97948</a>
                    </div>

                    {/* Social Icons & Follow Us */}
                    <div className={styles.socialWrapper}>
                        <div className={styles.socialIcons}>
                            <a href="#" className={styles.socialIcon} aria-label="Facebook">
                                <i className="devicon-facebook-plain fs-5"></i>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="Instagram">
                                <i className="devicon-twitter-original fs-5"></i>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                                <i className="devicon-linkedin-plain fs-5"></i>
                            </a>
                            <a href="#" className={styles.socialIcon} aria-label="GitHub">
                                <i className="devicon-github-original fs-5"></i>
                            </a>
                        </div>
                        <div className={styles.followText}>— follow us</div>
                    </div>
                </div>

                {/* Bottom Link Grid */}
                <div className={styles.linkGrid}>
                    {linkColumns.map((col, idx) => (
                        <div key={idx} className={styles.linkCol}>
                            <h5 className={styles.colTitle}>{col.title}</h5>
                            <ul className={styles.linkList}>
                                {col.links.map((link, lIdx) => (
                                    <li key={lIdx} className={styles.linkListItem}>
                                        <a
                                            href="#"
                                            className={styles.footerNavLink}
                                            data-bs-toggle="modal"
                                            data-bs-target="#commonModal"
                                            data-bs-title={link.name}
                                            data-bs-content={link.content}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Copyright Bar (Two Column Fluid) */}
                <div className={styles.footerBar}>
                    <div className="container-fluid px-5">
                        <div className="row align-items-center">
                            <div className="col-md-6 d-flex align-items-center">
                                <a href="/" className={styles.footerLogoLink}>
                                    <img src="/images/logo-light.png" alt="BizoraEdge Logo" className={styles.footerLogoImg} />
                                </a>
                            </div>
                            <div className="col-md-6 text-md-end">
                                <span className={styles.footerCopy}>© 2026 BizoraEdge. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Script src="/tawkto.js" />
        </>

    );
}
