"use client";

import React, { useState, useEffect } from 'react';
import styles from './GetQuoteModal.module.css';

interface GetQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultService?: string;
}

export function GetQuoteModal({ isOpen, onClose }: GetQuoteModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({ phone: '', email: '' });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsSubmitting(false);
            setIsSuccess(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setErrors({ phone: '', email: '' });
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'email') setErrors(prev => ({ ...prev, email: '' }));
        if (name === 'phone') {
            const numericValue = value.replace(/[^0-9]/g, '');
            if (numericValue.length <= 10) {
                setFormData(prev => ({ ...prev, phone: numericValue }));
                setErrors(prev => ({ ...prev, phone: '' }));
            }
            return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let hasError = false;
        let newErrors = { phone: '', email: '' };
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
            hasError = true;
        }
        if (formData.phone.length !== 10) {
            newErrors.phone = 'Phone number must be exactly 10 digits.';
            hasError = true;
        }
        if (hasError) {
            setErrors(newErrors);
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
                            Thank you, {formData.name || 'there'}! We have received your details and will be in touch shortly.
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
                            <h2 className={styles.leftTitle}>Every project<br/>starts with a plan</h2>
                            
                            <div className={styles.testimonial}>
                                <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop" alt="Michael Chen" className={styles.avatar} />
                                <div className={styles.authorInfo}>
                                    <h4 className={styles.authorName}>Michael Chen</h4>
                                    <p className={styles.authorRole}>Co-founder, InnovateIQ</p>
                                </div>
                                <p className={styles.quote}>
                                    "Professional, efficient, and forward-thinking. Their strategy and design for our platform were top-notch."
                                </p>
                            </div>
                            
                            <div className={styles.socialIcons}>
                                <a href="https://www.instagram.com/bizora_edge/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="https://x.com/Bizoraedge" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16z" /><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/bizoraedge/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                            </div>
                        </div>

                        <div className={styles.rightPanel}>
                            <h2 className={styles.rightTitle}>Let's start a conversation about your next big idea.</h2>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <input type="text" name="name" className={styles.input} placeholder="Name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className={styles.formGroup}>
                                    <input type="email" name="email" className={styles.input} style={errors.email ? { borderBottomColor: '#ef4444' } : {}} placeholder="E-mail" value={formData.email} onChange={handleChange} required />
                                    {errors.email && <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', fontWeight: 500 }}>{errors.email}</div>}
                                </div>
                                <div className={styles.formGroup}>
                                    <div className={styles.phoneWrapper} style={errors.phone ? { borderBottomColor: '#ef4444' } : {}}>
                                        <div style={{ display: 'flex', alignItems: 'center', paddingRight: '12px', userSelect: 'none' }}>
                                            <img src="https://flagcdn.com/w20/us.png" srcSet="https://flagcdn.com/w40/us.png 2x" width="20" alt="US" style={{ marginRight: '8px', borderRadius: '2px', display: 'block' }} />
                                            <span style={{ fontSize: '15px', fontWeight: 500, color: '#94a3b8' }}>+1</span>
                                        </div>
                                        <input type="tel" name="phone" className={styles.input} placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                                    </div>
                                    {errors.phone && <div style={{ color: '#ef4444', fontSize: '13px', marginTop: '6px', fontWeight: 500 }}>{errors.phone}</div>}
                                </div>
                                <div className={styles.formGroup}>
                                    <textarea name="message" className={styles.textarea} placeholder="Message" value={formData.message} onChange={handleChange} required />
                                </div>
                                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
