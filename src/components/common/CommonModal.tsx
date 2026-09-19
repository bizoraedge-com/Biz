"use client";

import React, { useEffect, useState } from 'react';
import { PhoneInput } from '@/components/ui/PhoneInput';

export function CommonModal() {
    const [modalData, setModalData] = useState({
        title: 'Information',
        content: 'More details coming soon.'
    });

    // Form state
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
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
                setTimeout(() => setStatus('idle'), 4000); // Reset success after 4s
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again later.');
        }
    };

    useEffect(() => {
        const handleShowModal = (event: any) => {
            const button = event.relatedTarget;
            if (button) {
                const title = button.getAttribute('data-bs-title');
                const content = button.getAttribute('data-bs-content');
                setModalData({
                    title: title || 'Information',
                    content: content || 'More details coming soon.'
                });
            }
        };

        const modalElement = document.getElementById('commonModal');
        if (modalElement) {
            modalElement.addEventListener('show.bs.modal', handleShowModal);
            return () => {
                modalElement.removeEventListener('show.bs.modal', handleShowModal);
            };
        }
    }, []);

    return (
        <>
            <style jsx global>{`
                .modal-backdrop.show {
                    backdrop-filter: blur(12px);
                    background-color: rgba(0, 0, 0, 0.75);
                }
                #commonModal .modal-dialog {
                    max-width: 1000px;
                    margin: 1.75rem auto;
                }
                #commonModal .modal-content {
                    border-radius: 12px;
                    border: none;
                    overflow: hidden;
                    background: #121212;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
                .modal-split-container {
                    display: flex;
                    min-height: 620px;
                }
                .modal-left-panel {
                    flex: 1;
                    background: linear-gradient(135deg, #0f56b5 0%, #e0e0e0 100%);
                    padding: 40px 50px;
                    display: flex;
                    flex-direction: column;
                    color: #000;
                    position: relative;
                }
                .modal-right-panel {
                    flex: 1.2;
                    background: #03142b;
                    padding: 60px 50px;
                    color: #fff;
                }
                .profile-circle {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 3px solid #fff;
                    margin-bottom: 20px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                }
                .profile-name {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin-bottom: 0;
                }
                .profile-circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .left-panel-title {
                    font-size: 2.8rem;
                    font-weight: 900;
                    line-height: 1.1;
                    margin-bottom: 40px;
                    letter-spacing: -1px;
                }
                .social-row {
                    display: flex;
                    gap: 15px;
                }
                .social-icon-btn {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(0,0,0,0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #000;
                    text-decoration: none;
                    transition: 0.3s;
                }
                .social-icon-btn:hover {
                    background: rgba(0,0,0,0.15);
                    transform: translateY(-2px);
                }
                .form-header-title {
                    font-size: 1.8rem;
                    font-weight: 400;
                    margin-bottom: 30px;
                    line-height: 1.2;
                    color: #fff;
                }
                .testimonial-quote {
                    font-size: 0.95rem;
                    font-style: italic;
                    margin: 15px 0;
                    opacity: 0.8;
                    line-height: 1.6;
                }
                .input-field-dark {
                    background: transparent;
                    border: none;
                    border-bottom: 1px solid rgba(255,255,255,0.15);
                    border-radius: 0;
                    color: #fff;
                    padding: 12px 0;
                    margin-bottom: 25px;
                    font-size: 0.95rem;
                }
                .input-field-dark:focus {
                    background: transparent;
                    box-shadow: none;
                    border-bottom-color: #1a73e8;
                    color: #fff;
                }
                .input-field-dark::placeholder {
                    color: rgba(255,255,255,0.4);
                }
                .submit-btn-premium {
                    background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
                    color: #fff;
                    border: none;
                    width: 100%;
                    padding: 16px;
                    font-weight: 800;
                    text-transform: uppercase;
                    border-radius: 6px;
                    letter-spacing: 1px;
                    margin-top: 20px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 10px 20px rgba(13, 71, 161, 0.3);
                }
                .submit-btn-premium:hover {
                    transform: scale(1.02);
                    box-shadow: 0 15px 30px rgba(13, 71, 161, 0.4);
                    background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%);
                }
                .modal-close-x {
                    position: absolute;
                    top: 25px;
                    right: 25px;
                    background: transparent;
                    border: none;
                    color: #fff;
                    font-size: 1.2rem;
                    z-index: 100;
                    opacity: 0.5;
                    transition: 0.3s;
                }
                .modal-close-x:hover {
                    opacity: 1;
                    transform: rotate(90deg);
                }
                @media (max-width: 991px) {
                    .modal-split-container { flex-direction: column; }
                    #commonModal .modal-dialog { max-width: 95%; }
                    .modal-left-panel, .modal-right-panel { padding: 40px 30px; }
                    .left-panel-title { font-size: 2.2rem; }
                }
            `}</style>

            <div className="modal fade" id="commonModal" tabIndex={-1} aria-labelledby="commonModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="modal-close-x" data-bs-dismiss="modal" aria-label="Close">✕</button>
                        <div className="modal-split-container">
                            <div className="modal-left-panel">
                                <h2 className="left-panel-title">Every project starts with a plan</h2>

                                <div id="testimonialCarousel" className="carousel slide testimonial-carousel" data-bs-ride="carousel" data-bs-interval="4000">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="profile-circle">
                                                <img src="/images/profile-andrew.png" alt="Andrew Hughes" />
                                            </div>
                                            <h4 className="profile-name">Andrew Hughes</h4>
                                            <p className="opacity-60 small">Creative Director</p>
                                            <p className="testimonial-quote">"BizoraEdge transformed our operations with their innovative planning tools. Every project now starts with precision."</p>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="profile-circle">
                                                <img src="/images/profile-andrew.png" alt="Sarah Jenkins" style={{ filter: 'grayscale(1)' }} />
                                            </div>
                                            <h4 className="profile-name">Sarah Jenkins</h4>
                                            <p className="opacity-60 small">CEO, TechFlow</p>
                                            <p className="testimonial-quote">"The best decision we made for our agency. The team truly understands modern digital architecture."</p>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="profile-circle">
                                                <img src="/images/profile-andrew.png" alt="Michael Chen" style={{ filter: 'sepia(0.5)' }} />
                                            </div>
                                            <h4 className="profile-name">Michael Chen</h4>
                                            <p className="opacity-60 small">Co-founder, InnovateIQ</p>
                                            <p className="testimonial-quote">"Professional, efficient, and forward-thinking. Their strategy and design for our platform were top-notch."</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-row mt-auto pt-5 text-end">
                                    <div className="d-flex gap-3 justify-content-end">
                                        <a href="#" className="social-icon-btn"><i className="devicon-facebook-plain"></i></a>
                                        <a href="#" className="social-icon-btn"><i className="devicon-twitter-original"></i></a>
                                        <a href="#" className="social-icon-btn"><i className="devicon-linkedin-plain"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-right-panel">
                                <h3 className="form-header-title">Let's start a conversation about your next big idea.</h3>
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control input-field-dark" placeholder="Name" required />
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control input-field-dark" placeholder="E-mail" required />
                                    <PhoneInput type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-control input-field-dark" placeholder="Phone" required style={{ padding: 0, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                                    <textarea name="message" value={formData.message} onChange={handleChange} className="form-control input-field-dark" placeholder="Message" rows={2} required></textarea>
                                    
                                    {status === 'error' && (
                                        <div style={{ color: '#ff4d4d', fontSize: '0.85rem', marginBottom: '10px' }}>
                                            {errorMessage}
                                        </div>
                                    )}
                                    
                                    {status === 'success' ? (
                                        <div style={{ color: '#4CAF50', fontSize: '0.95rem', fontWeight: 600, padding: '16px 0', textAlign: 'center' }}>
                                            Message sent successfully!
                                        </div>
                                    ) : (
                                        <button type="submit" className="submit-btn-premium" disabled={status === 'loading'} style={{ opacity: status === 'loading' ? 0.7 : 1 }}>
                                            {status === 'loading' ? 'Submitting...' : 'Submit'}
                                        </button>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
