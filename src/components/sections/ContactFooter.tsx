"use client";

import React, { useState } from 'react';
import { PhoneInput } from '@/components/ui/PhoneInput';
import styles from './ContactFooter.module.css';

export function ContactFooter() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        // Strict phone validation (max 10 digits)
        if (name === 'phone') {
            const numericValue = value.replace(/[^0-9]/g, '');
            if (numericValue.length <= 10) {
                setFormData(prev => ({ ...prev, phone: numericValue }));
            }
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        setStatus('loading');
        setErrorMessage('');

        try {
            // Map 'message' to 'description' for the backend API
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                description: formData.message
            };

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again later.');
        }
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
            <div className={styles.headingWrapper}>
                <h2 className={styles.heading}>Let's Talk About Your Project</h2>
                <p className={styles.headingSubtext}>
                    Have a project idea, business challenge, or technology requirement? Get in touch with BizoraEdge and tell us what you want to build. Our team can help you explore the right digital solution for your business.
                </p>
            </div>

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
                            <PhoneInput
                                type="tel"
                                name="phone"
                                className={styles.formInput}
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{ padding: 0, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.1)' }}
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

                        {status === 'error' && (
                            <div style={{ color: '#ff4d4d', fontSize: '0.85rem', marginTop: '-0.5rem', marginBottom: '0.5rem' }}>
                                {errorMessage}
                            </div>
                        )}

                        {/* Overlapping Submit Button */}
                        <button type="submit" disabled={status === 'loading'} className={styles.submitBtn} style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
                            {status === 'loading' ? 'Sending...' : 'Send message'}
                            {!status && <span style={{ fontSize: '1.2rem' }}>—</span>}
                        </button>
                    </form>
                </div>
            </div>

            {/* Success Modal Popup */}
            {status === 'success' && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999 }}>
                    <div style={{ backgroundColor: '#ffffff', padding: '3rem', borderRadius: '16px', maxWidth: '450px', width: '90%', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                        <div style={{ width: '64px', height: '64px', backgroundColor: '#e6f4ea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34a853" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1a202c', marginBottom: '1rem', fontFamily: '"Inter", sans-serif' }}>Thank You!</h2>
                        <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.6, marginBottom: '2rem', fontFamily: '"Inter", sans-serif' }}>
                            Your message has been successfully sent. Our business team will review it and respond to you <strong>within 24 hours</strong>.
                        </p>
                        <button onClick={() => setStatus('idle')} style={{ backgroundColor: '#0052cc', color: 'white', padding: '0.8rem 2rem', borderRadius: '8px', fontSize: '1.05rem', fontWeight: 600, border: 'none', cursor: 'pointer', width: '100%' }}>
                            Close
                        </button>
                    </div>
                </div>
            )}

        </footer>
    );
}
