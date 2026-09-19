import styles from '@/app/(marketing)/page.module.css';

export function Services() {
    return (
        <section className={styles.servicesContainer}>
            <div className={styles.tabsWrapper}>
                <div className={styles.tabItemActive}>Fintech</div>
                <div className={styles.tabItem}>ERP</div>
                <div className={styles.tabItem}>Web Applications</div>
                <div className={styles.tabItem}>Mobile Applications</div>
                <div className={styles.tabItem}>Blockchain</div>
                <div className={styles.tabItem}>CRM</div>
                <div className={styles.tabItem}>Enterprise Software</div>
            </div>

            <div className={styles.servicesContent}>
                <div className={styles.servicesImageWrapper}>
                    <div className={styles.silkBackground}></div>
                </div>
                <div className={styles.servicesText}>
                    <h2>Building Scalable Digital Solutions for Modern Businesses</h2>
                    <p>We design and develop high-performance web and mobile applications tailored to your business needs.</p>
                </div>
            </div>
        </section>
    );
}
