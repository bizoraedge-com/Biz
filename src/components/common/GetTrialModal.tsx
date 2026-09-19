"use client";

import React, { useState, useEffect } from 'react';
import styles from './GetQuoteModal.module.css'; // Reusing the same CSS

interface GetTrialModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultService?: string;
    title?: string;
    buttonText?: string;
    successTitle?: string;
    isLocked?: boolean;
    apiEndpoint?: string;
}

export function GetTrialModal({ isOpen, onClose, defaultService, title = "Get a Free Trial", buttonText = "Request Trial", successTitle = "Trial Request Sent!", isLocked = false, apiEndpoint = "/api/service-request" }: GetTrialModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        serviceType: '',
        message: ''
    });

    const [emailError, setEmailError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Reset state when re-opened
            setIsSubmitting(false);
            setIsSuccess(false);
            setFormData({
                name: '', email: '', serviceType: defaultService || '', message: ''
            });
            setEmailError('');
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, defaultService]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmailError('');
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("Request sent successfully");

                setIsSuccess(true);
            } else {
                console.error("Failed to send trial request");
            }
        } catch (error) {
            console.error("Failed to send email:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalWindow} onClick={e => e.stopPropagation()}>
                {isSuccess ? (
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h2 className={styles.successTitle}>{successTitle}</h2>
                        <p className={styles.successText}>
                            Thank you, {formData.name || 'there'}! We have received your request and will set up your trial shortly.
                        </p>
                        <button className={styles.doneBtn} onClick={onClose}>
                            Done
                        </button>
                    </div>
                ) : (
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        
                        <div className={styles.leftPanel}>
                            <h2 className={styles.leftTitle}>Experience the<br/>difference firsthand</h2>
                            
                            <div className={styles.testimonial}>
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Sarah Jenkins" className={styles.avatar} />
                                <div className={styles.authorInfo}>
                                    <h4 className={styles.authorName}>Sarah Jenkins</h4>
                                    <p className={styles.authorRole}>Product Manager, TechFlow</p>
                                </div>
                                <p className={styles.quote}>
                                    "The platform's intuitive design and powerful features completely transformed how our team operates. Highly recommended!"
                                </p>
                            </div>
                            
                            <div className={styles.socialIcons}>
                                <a href="https://www.facebook.com/company.bizoraedge" target="_blank" rel="noreferrer" className={styles.socialIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                <a href="https://x.com/bizoraedge" target="_blank" rel="noreferrer" className={styles.socialIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                                <a href="https://www.linkedin.com/company/bizoraedge" target="_blank" rel="noreferrer" className={styles.socialIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            </div>
                        </div>

                        <div className={styles.rightPanel}>
                            <h2 className={styles.rightTitle}>{title}</h2>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <input
                                        type="text"
                                        name="name"
                                        className={styles.input}
                                        placeholder="Your name or company"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input
                                        type="email"
                                        name="email"
                                        className={styles.input}
                                        style={emailError ? { borderBottomColor: '#ef4444' } : {}}
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {emailError && <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', fontWeight: 500 }}>{emailError}</div>}
                                </div>
                                <div className={styles.formGroup}>
                                    {isLocked ? (
                                        <input 
                                            type="text" 
                                            name="serviceType" 
                                            className={styles.input} 
                                            value={defaultService ? defaultService.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : ''}
                                            readOnly 
                                            style={{ color: '#9ca3af', cursor: 'not-allowed' }}
                                        />
                                    ) : (
                                        <select
                                            name="serviceType"
                                            className={styles.select}
                                            value={formData.serviceType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Select Service</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="CRM Development">CRM Development</option>
                                            <option value="IoT Solutions">IoT Solutions</option>
                                            <option value="Blockchain Development">Blockchain Development</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Enterprise Software">Enterprise Software</option>
                                            <option value="FinTech Solutions">FinTech Solutions</option>
                                            <option value="Custom Solutions">Custom Solutions</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    )}
                                </div>
                                <div className={styles.formGroup}>
                                    <textarea
                                        name="message"
                                        className={styles.textarea}
                                        placeholder="Tell us a little bit about what you need for this trial..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? 'SUBMITTING...' : (buttonText.toUpperCase() || 'REQUEST DEMO')}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
