"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './ProductPortfolio.module.css';

const portfolioItems = [
    {
        title: "Custom Software Development",
        description: "Build tailored software around your business processes, workflows and operational requirements. Our custom software projects focus on usability, scalability and the specific needs of each business."
    },
    {
        title: "Booking Application Development",
        description: "Create convenient booking platforms that connect businesses with their customers through streamlined scheduling, availability management, booking workflows and user-friendly experiences."
    },
    {
        title: "CRM Development",
        description: "Manage customer relationships more effectively with customized CRM platforms designed around lead management, customer data, sales workflows, communication and business operations."
    },
    {
        title: "IoT Solutions",
        description: "Connect devices, collect valuable data and build intelligent IoT solutions that support monitoring, automation and real-time business operations."
    },
    {
        title: "Mobile Application Development",
        description: "Develop intuitive mobile applications designed for modern customers and businesses, with scalable architecture, engaging interfaces and functionality built around specific business objectives."
    },
    {
        title: "FinTech Solutions",
        description: "Build secure and scalable FinTech applications for digital transactions, payment workflows, financial services and modern financial experiences."
    },
    {
        title: "AI-Powered Applications",
        description: "Create intelligent applications that use AI to automate tasks, analyze information, improve workflows and deliver smarter digital experiences."
    },
    {
        title: "Blockchain Solutions",
        description: "Develop blockchain-based applications focused on transparency, security, digital transactions and decentralized business use cases."
    },
    {
        title: "SaaS Development",
        description: "Build scalable SaaS platforms that help businesses deliver software through the cloud, manage users, streamline operations and support long-term product growth."
    },
    {
        title: "Digital Marketing Solutions",
        description: "Develop digital solutions that help businesses strengthen their online presence, reach relevant audiences and support customer acquisition and engagement."
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
                                <h2 className={styles.sectionTitle} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Technology Projects & Case Studies</h2>
                                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '650px', lineHeight: '1.6' }}>
                                    Explore selected digital solutions developed across software, SaaS, mobile applications, booking platforms, CRM, AI, FinTech, blockchain and IoT. Our portfolio highlights how technology can be designed around different business requirements, workflows and customer experiences.
                                </p>

                                <div className={styles.contentArea} >
                                    {portfolioItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.carouselItem} ${index === activeIndex ? styles.animateSlideIn : 'd-none'}`}
                                            style={{ display: index === activeIndex ? 'flex' : 'none' }}
                                        >
                                            <h3 className={styles.itemHeading}>{item.title}</h3>
                                            <p className={styles.itemDescription}>{item.description}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="d-flex align-items-center gap-3 mt-5">
                                    <Link href="/contact" className={styles.btnWhite} style={{ textDecoration: 'none' }}>Get a Free Quote</Link>
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


            </div>
        </section>
    );
}
