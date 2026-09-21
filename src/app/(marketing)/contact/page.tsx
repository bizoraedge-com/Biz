'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { PhoneInput } from '@/components/ui/PhoneInput';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const numericValue = value.replace(/[^0-9]/g, '');
            if (numericValue.length <= 10) {
                setFormData({ ...formData, phone: numericValue });
                setErrors({ ...errors, phone: '' });
            }
            return;
        }

        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = { name: '', companyName: '', email: '', phone: '', subject: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid Email';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (formData.phone.replace(/[^0-9]/g, '').length !== 10) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    description: formData.message,
                    companyName: formData.companyName,
                    subject: formData.subject
                }),
            });

            const data = (await response.json()) as any;

            if (response.ok && data.success) {
                setStatus('success');
                setFormData({ name: '', companyName: '', email: '', phone: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setStatus('error');
            setErrorMessage('Network error. Please try again later.');
        }
    };

    return (
        <>

            <main style={{ width: '100%', backgroundColor: '#f8fafc', paddingTop: '140px', paddingBottom: '80px' }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 4rem)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                            Let's Talk About Your Project
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '800px', margin: '0 auto' }}>
                            Have an idea, project requirement or technology challenge? Share the details with us.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>

                        {/* Left Side: Contact Info & Map */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 5vw, 3rem)' }}>
                            <div style={{ backgroundColor: '#ffffff', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,51,102,0.05)' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '2rem' }}>Get in Touch</h2>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-main)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>Email</p>
                                            <a href="mailto:business@bizoraedge.com" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-main)', textDecoration: 'none' }}>business@bizoraedge.com</a>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>Phone / WhatsApp</p>
                                            <a href="tel:+919344697948" style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-main)', textDecoration: 'none' }}>+91 93446 97948</a>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>Address</p>
                                            <p style={{ margin: 0, fontSize: '1.1rem', fontWeight: 500 }}>India - USA</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)' }}>Follow Us</h3>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <a href="https://www.instagram.com/bizora_edge/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#f8fafc', color: '#1e293b', transition: 'all 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#eff6ff'; e.currentTarget.style.color = '#3b82f6'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.color = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }} aria-label="Instagram">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                        </a>
                                        <a href="https://x.com/Bizoraedge" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#f8fafc', color: '#1e293b', transition: 'all 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#eff6ff'; e.currentTarget.style.color = '#3b82f6'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.color = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }} aria-label="X">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16z" /><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" /></svg>
                                        </a>
                                        <a href="https://www.linkedin.com/company/bizoraedge/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#f8fafc', color: '#1e293b', transition: 'all 0.3s ease', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#eff6ff'; e.currentTarget.style.color = '#3b82f6'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.color = '#1e293b'; e.currentTarget.style.transform = 'translateY(0)'; }} aria-label="LinkedIn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#ffffff', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,51,102,0.05)' }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '1.5rem' }}>Find Us</h2>
                                <div style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        frameBorder="0" style={{ border: 0 }}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d78.118!3d9.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b118c533%3A0x7ae597aa0e083523!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                        allowFullScreen={false}
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div style={{ backgroundColor: '#ffffff', padding: 'clamp(1.5rem, 5vw, 3rem)', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,51,102,0.08)', border: '1px solid var(--surface-border)' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '2rem' }}>Send Us an Enquiry</h2>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} noValidate suppressHydrationWarning>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                        <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Name *</label>
                                        <Input id="name" name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" style={{ borderColor: errors.name ? '#dc3545' : '' }} suppressHydrationWarning />
                                        {errors.name && <span style={{ color: '#dc3545', fontSize: '0.8rem', fontWeight: 500 }}>{errors.name}</span>}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                        <label htmlFor="companyName" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Company Name</label>
                                        <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} type="text" placeholder="Acme Inc." suppressHydrationWarning />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                        <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Email *</label>
                                        <Input id="email" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@company.com" style={{ borderColor: errors.email ? '#dc3545' : '' }} suppressHydrationWarning />
                                        {errors.email && <span style={{ color: '#dc3545', fontSize: '0.8rem', fontWeight: 500 }}>{errors.email}</span>}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                        <label htmlFor="phone" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Phone *</label>
                                        <PhoneInput id="phone" name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="9876543210" style={{ borderColor: errors.phone ? '#dc3545' : '' }} suppressHydrationWarning />
                                        {errors.phone && <span style={{ color: '#dc3545', fontSize: '0.8rem', fontWeight: 500 }}>{errors.phone}</span>}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                    <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Subject</label>
                                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="How can we help you?" suppressHydrationWarning />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                    <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Message *</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your project..." style={{ padding: '0.75rem 1rem', borderRadius: '6px', border: errors.message ? '1px solid #dc3545' : '1px solid var(--surface-border)', fontSize: '1rem', width: '100%', fontFamily: 'inherit', resize: 'vertical' }} suppressHydrationWarning></textarea>
                                    {errors.message && <span style={{ color: '#dc3545', fontSize: '0.8rem', fontWeight: 500 }}>{errors.message}</span>}
                                </div>

                                {status === 'error' && (
                                    <div style={{ backgroundColor: '#fff3f3', border: '1px solid #dc3545', color: '#dc3545', padding: '0.8rem', borderRadius: '6px', fontSize: '0.9rem' }}>
                                        {errorMessage}
                                    </div>
                                )}

                                <Button type="submit" disabled={status === 'loading'} suppressHydrationWarning style={{ marginTop: '0.5rem', backgroundColor: '#0d47a1', color: 'white', padding: '16px', borderRadius: '8px', fontSize: '1.15rem', fontWeight: 700, border: '1px solid #0d47a1', cursor: status === 'loading' ? 'not-allowed' : 'pointer', opacity: status === 'loading' ? 0.7 : 1, transition: 'all 0.3s ease', boxShadow: '0 4px 14px rgba(13,71,161,0.3)' }}>
                                    {status === 'loading' ? 'Submitting...' : 'Send Enquiry'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Success Modal Popup */}
                {status === 'success' && (
                    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, animation: 'fadeIn 0.3s forwards' }}>
                        <div style={{ backgroundColor: '#ffffff', padding: '3.5rem 3rem', borderRadius: '24px', maxWidth: '480px', width: '90%', textAlign: 'center', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', animation: 'scaleUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem auto', color: '#2563eb', boxShadow: '0 0 0 10px rgba(37, 99, 235, 0.1)' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.025em' }}>Message Sent!</h2>
                            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                                Thank you for reaching out. Our team will review your enquiry and respond to you <strong>within 24 hours</strong>.
                            </p>
                            <Button onClick={() => setStatus('idle')} style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)', color: 'white', padding: '1rem 2rem', borderRadius: '12px', fontSize: '1.05rem', fontWeight: 700, border: 'none', cursor: 'pointer', width: '100%', transition: 'all 0.3s ease', boxShadow: '0 4px 14px rgba(29, 78, 216, 0.3)' }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(29, 78, 216, 0.4)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(29, 78, 216, 0.3)'; }}
                            >
                                Back to Website
                            </Button>
                        </div>
                        <style dangerouslySetInnerHTML={{__html: `
                            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                            @keyframes scaleUp { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
                        `}} />
                    </div>
                )}
            </main>
        </>
    );
}
