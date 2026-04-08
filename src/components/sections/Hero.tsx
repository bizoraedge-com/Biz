import styles from '@/app/(marketing)/page.module.css';
import { GlassCube } from '@/components/ui/GlassCube';

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Building Scalable Digital Solutions for Modern Businesses</h1>
                <p className={styles.heroSubtitle}>We design and develop high-performance web and mobile applications tailored to your business needs.</p>
                <div className={styles.heroActions}>
                    <button className={styles.primaryBtn}>Get a Quote</button>
                    <a href="/contact" className={styles.secondaryLink}>Contact us <span>&#10140;</span></a>
                </div>
            </div>
            <div className={styles.heroGraphic}>
                <GlassCube />
            </div>
        </section>
    );
}
