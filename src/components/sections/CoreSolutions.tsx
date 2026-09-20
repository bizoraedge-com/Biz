"use client";

import React from 'react';
import styles from './CoreSolutions.module.css';

const solutionGroups = [
    {
        id: 1,
        title: "Custom Software & Apps",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                title: "Custom Software Development",
                desc: "Build software tailored to your unique business requirements, workflows, and operational processes. Our custom software solutions are designed to improve efficiency, automate processes, and support business growth."
            },
            {
                title: "SaaS Development",
                desc: "Build scalable cloud-based SaaS platforms with features such as user management, subscriptions, dashboards, third-party integrations, and multi-tenant architecture."
            },
            {
                title: "Mobile Application Development",
                desc: "Build user-friendly mobile applications for businesses, customers, employees, and digital products with scalable functionality and modern user experiences."
            }
        ]
    },
    {
        id: 2,
        title: "Business Platforms",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                title: "CRM System Development",
                desc: "Create customized CRM systems to manage leads, customers, sales activities, communication, follow-ups, and business relationships from a centralized platform."
            },
            {
                title: "Booking Application Development",
                desc: "Develop modern booking and reservation platforms for appointments, transportation, restaurants, travel, sports, events, and other service-based businesses."
            }
        ]
    },
    {
        id: 3,
        title: "Emerging Tech & FinTech",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                title: "Blockchain Solutions",
                desc: "Develop blockchain-based applications focused on secure transactions, transparency, decentralized systems, smart contracts, Web3 applications, and emerging digital use cases."
            },
            {
                title: "IoT Solutions",
                desc: "Connect devices, collect data, monitor operations, and enable intelligent automation with IoT-based software solutions designed for connected business environments."
            },
            {
                title: "FinTech Solutions",
                desc: "Develop technology solutions for financial services, digital transactions, payment workflows, financial applications, and business processes."
            }
        ]
    },
    {
        id: 4,
        title: "AI & Digital Growth",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        items: [
            {
                title: "AI-Powered Applications",
                desc: "Build intelligent applications using AI to support automation, data analysis, personalization, decision-making, and smarter business workflows."
            },
            {
                title: "Digital Marketing Solutions",
                desc: "Support your digital presence with solutions focused on online visibility, customer engagement, digital communication, and business growth."
            }
        ]
    }
];

export function CoreSolutions() {
    return (
        <section id="services" className={`${styles.stickyWrapper} bg-light pt-5 pb-5`}>
            {/* Global sticky heading for the section */}
            <div
                className="w-100"
                style={{
                    pointerEvents: 'none',
                }}
            >
                <h2 className="text-center fw-bold text-dark m-0" style={{ fontSize: '2.5rem' }}>
                    Solutions We Can Build for Your Business
                </h2>
                <p className="text-center text-secondary mx-auto mt-3 mb-5" style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
                    At BizoraEdge, we build digital solutions designed around your business goals, processes, customers, and technology requirements. From custom software and SaaS platforms to mobile applications, AI, FinTech, blockchain, CRM, IoT, and booking solutions, we help turn ideas and business challenges into practical, scalable digital products.
                </p>
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

            {/* Section CTA */}
            <div className="position-relative" style={{ zIndex: 10, backgroundColor: '#f4fbfe', width: '100%', padding: '6rem 0' }}>
                <div className="container">
                    <div className="text-center mx-auto" style={{ maxWidth: '800px' }}>
                        <h2 className="fw-bold text-dark mb-4" style={{ fontSize: '2.5rem' }}>Have an Idea? Let's Build It.</h2>
                        <p className="text-secondary mb-5" style={{ fontSize: '1.1rem' }}>
                            Have a software idea or a business challenge you'd like to solve with technology? Tell BizoraEdge what you want to build, and let's explore the right digital solution for your business.
                        </p>
                        <div className="d-flex justify-content-center gap-3">
                            <a href="/quote" className="btn btn-primary px-4 py-2 fw-medium" style={{ backgroundColor: '#0d47a1', borderColor: '#0d47a1', borderRadius: '8px' }}>Get a Free Quote</a>
                            <a href="/contact" className="btn btn-outline-primary px-4 py-2 fw-medium" style={{ borderRadius: '8px' }}>Talk to Our Experts</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

