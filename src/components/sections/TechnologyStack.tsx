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
            { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
            { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        ],
    },
    {
        id: 'backend',
        label: 'Backend',
        items: [
            { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
            { name: 'Express', icon: 'devicon-express-original' },
            { name: 'Python', icon: 'devicon-python-plain colored' },
            { name: 'Go', icon: 'devicon-go-plain colored' },
        ],
    },
    {
        id: 'mobile',
        label: 'Mobile',
        items: [
            { name: 'React Native', icon: 'devicon-react-original colored' },
            { name: 'Expo', icon: 'devicon-react-original' },
            { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
        ],
    },
    {
        id: 'database',
        label: 'Database',
        items: [
            { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
            { name: 'Redis', icon: 'devicon-redis-plain colored' },
            { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
        ],
    },
    {
        id: 'blockchain',
        label: 'Blockchain',
        items: [
            { name: 'Solidity', icon: 'devicon-solidity-plain' },
            { name: 'Rust', icon: 'devicon-rust-plain' },
            { name: 'Web3.js', icon: 'devicon-javascript-plain colored' },
            { name: 'Ethers.js', icon: 'devicon-javascript-plain colored' },
            { name: 'Hardhat', icon: 'devicon-nodejs-plain' },
        ],
    },
    {
        id: 'cloud',
        label: 'Cloud / DevOps',
        items: [
            { name: 'AWS', icon: 'devicon-amazonwebservices-original colored' },
            { name: 'Docker', icon: 'devicon-docker-plain colored' },
            { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
            { name: 'CI/CD Pipelines', icon: 'devicon-github-original' },
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
                <h3 className={styles.heading}>Our Technology Stack</h3>

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
