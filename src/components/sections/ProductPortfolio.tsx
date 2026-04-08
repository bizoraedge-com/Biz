"use client";

import React, { useState, useEffect } from 'react';
import styles from './ProductPortfolio.module.css';

const portfolioItems = [
    {
        title: "Bizora Commerce",
        description: "A specialized e-commerce engine with integrated inventory management and secure multi-currency payment gateways."
    },
    {
        title: "TokenLaunch Platform",
        description: "A streamlined solution for launching and managing NFT collections or utility tokens."
    },
    {
        title: "TechAudit",
        description: "A specialized service for auditing existing codebases for performance bottlenecks and security vulnerabilities."
    }
];

export function ProductPortfolio() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % portfolioItems.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-light py-4">
            <div className={`container`}>
                <div className={styles.banner}>
                    {/* Abstract decorative shapes from image */}
                    <div className={styles.shapeCircle}></div>
                    <div className={styles.shapeRect}></div>
                    <div className={styles.shapeArrow}></div>

                    <div className="container h-100 d-flex px-5 flex-column justify-content-center">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 position-relative z-1">
                                <h3 className={styles.sectionTitle}>Product Portfolio</h3>

                                <div className={styles.contentArea} >
                                    {portfolioItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.carouselItem} ${index === activeIndex ? styles.animateSlideIn : 'd-none'}`}
                                            style={{ display: index === activeIndex ? 'flex' : 'none' }}
                                        >
                                            <h2 className={styles.itemHeading}>{item.title}</h2>
                                            <p className={styles.itemDescription}>{item.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="d-flex align-items-center gap-3 mt-5">
                                    <button className={styles.btnWhite}>Get started</button>
                                    <button className={styles.btnOutline}>Talk to sales</button>
                                </div>

                                {/* Indicators */}
                                <div className="d-flex gap-2 mt-5">
                                    {portfolioItems.map((_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                            style={{
                                                width: index === activeIndex ? '30px' : '10px',
                                                height: '10px',
                                                background: index === activeIndex ? '#fff' : 'rgba(255, 255, 255, 0.3)',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease'
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                }
            `}</style>
            </div>
        </section>
    );
}
