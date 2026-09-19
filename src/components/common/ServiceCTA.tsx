"use client";

import React, { useState } from 'react';
import styles from '@/app/(marketing)/services/service.module.css';
import { GetTrialModal } from './GetTrialModal';

interface ServiceCTAProps {
    serviceName: string;
    serviceValue: string;
}

export function ServiceCTA({ serviceName, serviceValue }: ServiceCTAProps) {
    const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

    return (
        <section className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to Experience Our {serviceName}?</h2>
            <p className={styles.ctaSubtitle}>Let's discuss how our engineering rigor can solve your complex challenges, or start your free trial today.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button 
                    onClick={() => setIsTrialModalOpen(true)}
                    className={styles.ctaButtonPrimary}
                >
                    Get Free Trial
                </button>
            </div>
            
            <GetTrialModal 
                isOpen={isTrialModalOpen} 
                onClose={() => setIsTrialModalOpen(false)} 
                defaultService={serviceValue}
                isLocked={true}
                apiEndpoint="/api/trial"
            />
        </section>
    );
}
