"use client";

import React, { useRef, MouseEvent } from 'react';
import styles from './Hero.module.css';
import { ServiceSlider } from './ServiceSlider';

export function Hero() {
    const parallaxRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!parallaxRef.current) return;
        const rect = parallaxRef.current.getBoundingClientRect();
        // Calculate parallax offset relative to element center
        const x = (e.clientX - rect.left - rect.width / 2) / 30;
        const y = (e.clientY - rect.top - rect.height / 2) / 30;

        parallaxRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMouseLeave = () => {
        if (!parallaxRef.current) return;
        parallaxRef.current.style.transform = `translate3d(0, 0, 0)`;
    };

    return (
        <section className={`${styles.heroSection} d-flex flex-column position-relative overflow-hidden`}>
            <div className="container flex-grow-1 d-flex flex-column justify-content-center py-5">
                <div className="row align-items-center w-100 m-0">
                    {/* Left Typography Column */}
                    <div className="col-lg-7 col-md-12 mb-5 mb-lg-0 text-center text-lg-start">
                        <h1 className={`fw-bold mb-4 ${styles.heroHeading}`}>
                            <span className="textGradient">Your Digital</span> Blueprint, Engineered for Tomorrow's Scale.
                        </h1>
                        <p className={`lead text-secondary mb-5 pe-lg-5 ${styles.heroDescription}`}>
                            High-performance Web, Mobile, and Blockchain solutions tailored for ambitious startups and established enterprises.
                        </p>
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4 flex-column flex-sm-row mt-4">
                            <a href="#" className={`btn-primary btn px-4 py-2 fw-medium ${styles.primaryBtn}`}>
                                Start Your Project
                            </a>
                            <a href="#" className={`d-flex align-items-center gap-2 fw-medium text-decoration-none ${styles.contactLink}`}>
                                Explore Our Services
                                <img src="/images/contact-icon.svg" alt="Contact Icon" width="18" height="18" />
                            </a>
                        </div>
                    </div>

                    {/* Right Visual Column - Concentric ripples */}
                    <div className="col-lg-5 col-md-12">
                        <div className={styles.visualEntryContainer}>
                            <div
                                ref={parallaxRef}
                                className={styles.parallaxContainer}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={styles.visualWrapper}>
                                    {/* Outer Rings */}
                                    <div className={styles.circle1}></div>
                                    <div className={styles.circle2}></div>
                                    <div className={styles.circle3}></div>

                                    {/* Inner Circle with Logo Mark */}
                                    <div className={styles.circle4}>
                                        <img
                                            src="/images/fav-logo.png"
                                            alt="Brand Icon"
                                            className={`w-50 h-50 ${styles.brandIcon}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Slider matching 50px bottom requirement */}
            <div className="w-100" style={{ paddingBottom: '50px' }}>
                <ServiceSlider />
            </div>
        </section>
    );
}
