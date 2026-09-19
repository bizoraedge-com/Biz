import React from 'react';
import styles from './ServiceSlider.module.css';

const services = [
    "FinTech",
    "ERP",
    "Web Applications",
    "Mobile Applications",
    "Blockchain",
    "CRM",
    "Enterprise Software"
];

export function ServiceSlider() {
    return (
        <div className={styles.sliderContainer}>
            {/* Gradient Mask for fading edges */}
            <div className={styles.sliderMask}></div>
            
            <div className={styles.sliderTrack}>
                {/* Two identical sets of items for a seamless infinite loop */}
                {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className={styles.sliderGroup}>
                        {services.map((service, idx) => {
                            const slug = service.toLowerCase().replace(/\s+/g, '-');
                            return (
                                <a href={`/services/${slug}`} key={`${setIndex}-${idx}`} className={styles.sliderItem}>
                                    <span className={styles.dot}></span>
                                    {service}
                                </a>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}
