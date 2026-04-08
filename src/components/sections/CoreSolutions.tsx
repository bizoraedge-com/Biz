"use client";

import React from 'react';
import styles from './CoreSolutions.module.css';

const solutionGroups = [
    {
        id: 1,
        title: "Web & Mobile Development",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                title: "Custom Web Applications",
                desc: "Building scalable, secure, and responsive web platforms using the MERN Stack (MongoDB, Express, React, Node.js) to ensure seamless user experiences."
            },
            {
                title: "Cross-Platform Mobile Apps",
                desc: "High-performance iOS and Android applications developed with React Native, providing a native feel with a single efficient codebase."
            },
            {
                title: "Progressive Web Apps (PWA)",
                desc: "Bridging the gap between web and mobile with offline-capable, lightning-fast web applications."
            }
        ]
    },
    {
        id: 2,
        title: "Blockchain & Web3 Engineering",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                title: "Smart Contract Development",
                desc: "Developing audited, secure, and self-executing contracts on Ethereum, Polygon, and Solana to automate your business logic."
            },
            {
                title: "Decentralized Applications (dApps)",
                desc: "Building transparent, tamper-proof, and decentralized platforms for the future of the internet."
            },
            {
                title: "Web3 Integration",
                desc: "Transitioning traditional businesses (Web2) into the decentralized world with crypto wallet integrations and asset tokenization."
            }
        ]
    },
    {
        id: 3,
        title: "Enterprise Software & Strategy",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                title: "Custom CRM & ERP Systems",
                desc: "Tailor-made management software designed to streamline your internal workflows, resource planning, and customer relationships."
            },
            {
                title: "UI/UX Design Systems",
                desc: "User-centric design focusing on intuitive navigation, accessibility, and high conversion rates."
            },
            {
                title: "API Development & Integration",
                desc: "Connecting disparate software systems through robust, secure, and well-documented API architectures."
            }
        ]
    },
    {
        id: 4,
        title: "Fintech Solutions",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                title: "Digital Banking & Wallets",
                desc: "Developing secure, high-availability platforms for digital banking, payments, and multi-currency crypto-wallets."
            },
            {
                title: "Regulatory Compliance (RegTech)",
                desc: "Implementing robust solutions for KYC/AML, data privacy (GDPR), and real-time transaction monitoring."
            },
            {
                title: "Payment Gateway Integration",
                desc: "Building custom and integrating existing secure payment infrastructure, including credit card processing and instant transfers."
            }
        ]
    }
];

export function CoreSolutions() {
    return (
        <section className={`${styles.stickyWrapper} bg-light pt-5 pb-5`}>
            {/* Global sticky heading for the section */}
            <div
                className="w-100"
                style={{
                    pointerEvents: 'none',
                }}
            >
                <h2 className="text-center fw-bold text-dark m-0" style={{ fontSize: '2.5rem' }}>
                    Our Core Solutions
                </h2>
            </div>

            {solutionGroups.map((group, index) => {
                const isEven = index % 2 !== 0;

                return (
                    <div
                        key={group.id}
                        className={styles.stickyGroup}
                        style={{ zIndex: index + 1 }} // Each subsequent group must have a higher zIndex to overlay the previous one
                    >
                        <div className={`container ${styles.groupContent}`}>
                            <div className="row align-items-center mb-5">
                                {/* Text Content */}
                                <div className={`col-lg-6 ${isEven ? 'order-lg-2 ms-lg-5' : 'order-lg-1 me-lg-5'} order-2 mt-5 mt-lg-0`}>
                                    <h4 className="textGradient mb-4 d-inline-block" style={{ fontSize: '30px', fontWeight: 500 }}>
                                        {group.title}
                                    </h4>

                                    <div className="d-flex flex-column gap-4">
                                        {group.items.map((item, i) => (
                                            <div key={i}>
                                                <h5 className="text-dark mb-2" style={{ fontSize: '1.25rem', fontWeight: 500 }}>{item.title}</h5>
                                                <div className="d-flex align-items-start gap-3">
                                                    <div className="text-primary fw-bold" style={{ fontSize: '1.4rem', lineHeight: '1.2' }}>
                                                        &raquo;
                                                    </div>
                                                    <p className="text-secondary mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.7', fontWeight: 300 }}>
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="btn btn-primary px-4 py-2 mt-5 fw-medium" style={{ backgroundColor: '#0d47a1', borderColor: '#0d47a1', borderRadius: '8px' }}>
                                        Get a Quote
                                    </button>
                                </div>

                                {/* Image Content */}
                                <div className={`col-lg-5 ${isEven ? 'order-lg-1' : 'order-lg-2'} order-1`}>
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={group.image}
                                            alt={group.title}
                                            className={styles.solutionImage}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

