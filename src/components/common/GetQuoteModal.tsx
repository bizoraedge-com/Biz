"use client";

import React, { useState, useEffect } from 'react';
import styles from './GetQuoteModal.module.css';

interface GetQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function GetQuoteModal({ isOpen, onClose }: GetQuoteModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
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
                name: '', email: '', projectType: '', message: ''
            });
            setEmailError('');
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

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

            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("Email sent successfully");
                setIsSuccess(true);
            } else {
                console.error("Failed to send quote request");
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
                        <h2 className={styles.successTitle}>Quote Request Sent!</h2>
                        <p className={styles.successText}>
                            Thank you, {formData.name || 'there'}! We have received your project details and will be in touch shortly.
                        </p>
                        <button className={styles.doneBtn} onClick={onClose}>
                            Done
                        </button>
                    </div>
                ) : (
                    <>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}>Get a Quote</h2>
                            <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className={styles.modalBody}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Name</label>
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
                                    <label className={styles.label}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className={`${styles.input} ${emailError ? styles.inputError : ''}`}
                                        style={emailError ? { borderColor: '#e53e3e', boxShadow: '0 0 0 3px rgba(229, 62, 62, 0.1)' } : {}}
                                        placeholder="you@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {emailError && <div style={{ color: '#e53e3e', fontSize: '13px', marginTop: '6px', fontWeight: 500 }}>{emailError}</div>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Project Type (Optional)</label>
                                    <select
                                        name="projectType"
                                        className={styles.select}
                                        value={formData.projectType}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Select Type</option>
                                        <option value="web">Web Application</option>
                                        <option value="mobile">Mobile Application</option>
                                        <option value="erp">ERP System</option>
                                        <option value="fintech">Fintech Solution</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label className={styles.label}>Project Details</label>
                                    <textarea
                                        name="message"
                                        className={styles.textarea}
                                        placeholder="Tell us a little bit about what you need..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <div className={styles.spinner}></div>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Request Quote
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
