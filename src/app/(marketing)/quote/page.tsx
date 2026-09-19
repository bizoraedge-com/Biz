'use client';
import { useState } from 'react';
import styles from './quote.module.css';
import Link from 'next/link';

export default function QuotePage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState({ phone: '', email: '' });

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
        setFormData({ ...formData, [name]: value });
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

        setStatus('loading');

        try {
            const response = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting quote:', error);
            setStatus('error');
        }
    };

    return (
        <main className={styles.pageContainer}>
            {status === 'success' ? (
                <div className={styles.successContainer}>
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
                    <Link href="/">
                        <button className={styles.doneBtn}>Return Home</button>
                    </Link>
                </div>
            ) : (
                <div className={styles.contentWrapper}>
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
                            <a href="#" className={styles.socialIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a href="#" className={styles.socialIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                            <a href="#" className={styles.socialIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
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
                            {status === 'error' && (
                                <div style={{ color: '#ef4444', fontSize: '14px', marginBottom: '8px' }}>
                                    Something went wrong. Please try again.
                                </div>
                            )}
                            <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                                {status === 'loading' ? 'SUBMITTING...' : 'SUBMIT'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}
