import styles from '@/app/(marketing)/page.module.css';
import { GlassCube } from '@/components/ui/GlassCube';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Your Digital Blueprint, Engineered for Tomorrow's Scale.</h1>
                <p className={styles.heroSubtitle}>High-performance Web, Mobile, and Blockchain solutions tailored for ambitious startups and established enterprises.</p>
                <div className={styles.heroActions}>
                    <a href="#services" className={styles.primaryBtn} style={{ textDecoration: 'none' }}>Explore Our Services</a>
                    <a href="#contact" className={styles.secondaryLink}>
                        Contact 
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className={styles.heroGraphic}>
                <GlassCube />
            </div>
        </section>
    );
}
