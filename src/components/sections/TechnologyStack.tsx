"use client";

import React, { useState } from 'react';
import styles from './TechnologyStack.module.css';

const techData = [
    {
        id: 'frontend',
        label: 'Frontend',
        items: [
            { name: 'React.js', icon: 'devicon-react-original colored' },
            { name: 'Next.js', icon: 'devicon-nextjs-original' },
            { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        ],
    },
    {
        id: 'backend',
        label: 'Backend',
        items: [
            { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'REST APIs', icon: 'devicon-express-original' },
            { name: 'Custom Architectures', icon: 'devicon-linux-plain' },
        ],
    },
    {
        id: 'mobile',
        label: 'Mobile',
        items: [
            { name: 'React Native', icon: 'devicon-react-original colored' },
            { name: 'iOS', icon: 'devicon-apple-original' },
            { name: 'Android', icon: 'devicon-android-plain colored' },
        ],
    },
    {
        id: 'database',
        label: 'Database',
        items: [
            { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
            { name: 'SQL databases', icon: 'devicon-postgresql-plain colored' },
            { name: 'Data Management', icon: 'devicon-redis-plain colored' },
        ],
    },
    {
        id: 'cloud',
        label: 'Cloud & Infrastructure',
        items: [
            { name: 'AWS', icon: 'devicon-amazonwebservices-original colored' },
            { name: 'Docker', icon: 'devicon-docker-plain colored' },
            { name: 'Cloud Environments', icon: 'devicon-kubernetes-plain colored' },
        ],
    },
    {
        id: 'blockchain',
        label: 'Blockchain',
        items: [
            { name: 'Ethereum', icon: 'devicon-solidity-plain' },
            { name: 'Polygon', icon: 'devicon-polygon-plain' },
            { name: 'Solana', icon: 'devicon-rust-plain' },
            { name: 'Smart Contracts', icon: 'devicon-solidity-plain' },
            { name: 'Web3 Integrations', icon: 'devicon-javascript-plain colored' },
        ],
    },
];

export function TechnologyStack() {
    const [activeTab, setActiveTab] = useState('frontend');
    const activeGroup = techData.find(t => t.id === activeTab)!;

    return (
        <section className={styles.section}>
            <div className="container position-relative z-1">

                {/* Heading */}
                <h3 className={styles.heading}>Technologies We Work With</h3>
                <p className="text-center text-secondary mb-5 fs-5">Modern technology is valuable when it solves the right problem. <br/>Our development capabilities include technologies and platforms such as:</p>

                {/* Horizontal Tabs */}
                <div className={styles.tabsWrapper}>
                    {techData.map(tab => (
                        <button
                            key={tab.id}
                            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Card Grid */}
                <div key={activeTab} className={styles.tabPanel}>
                    <div className={styles.cardGrid}>
                        {activeGroup.items.map(tech => (
                            <div className={styles.techCard} key={tech.name}>
                                <i className={`${tech.icon} ${styles.techIcon}`}></i>
                                <span className={styles.techName}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
