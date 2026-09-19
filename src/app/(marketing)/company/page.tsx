import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
    alternates: { canonical: '/company' },
  title: 'Company | BizoraEdge - Leading Digital Innovation',
  description: 'Learn about BizoraEdge\'s mission, vision, and core values. We are a premier digital solutions provider specializing in custom software, enterprise platforms, and scalable technology.',
  openGraph: {
    title: 'Company | BizoraEdge - Leading Digital Innovation',
    description: 'Premier digital solutions provider specializing in custom software and enterprise platforms.',
    url: 'https://bizoraedge.com/company',
    siteName: 'BizoraEdge',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Company | BizoraEdge - Leading Digital Innovation',
    description: 'Premier digital solutions provider specializing in custom software and enterprise platforms.',
  }
};

export default function CompanyPage() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.title}>Driving Digital Excellence</h1>
        <p className={styles.subtitle}>
          At BizoraEdge, we believe in transforming complex business challenges into elegant, scalable digital solutions. With over a decade of enterprise software experience, our team specializes in crafting resilient architectures that drive tangible growth globally.
        </p>
      </section>

      {/* Mission & Vision Grid */}
      <section className={styles.gridSection}>
        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Our Mission</h2>
          <p className={styles.cardText}>
            Our mission is simply to engineer the future using pure, native performance and clean standard architectures without bloated abstractions. We empower businesses to thrive in the digital age through innovative and reliable technology solutions.
          </p>
        </article>

        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Our Vision</h2>
          <p className={styles.cardText}>
            To be the globally recognized partner of choice for digital transformation, setting new standards for engineering excellence, user experience, and sustainable business growth. We envision a world where technology seamlessly accelerates human potential.
          </p>
        </article>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2 className={styles.title} style={{ fontSize: '2.5rem' }}>Our Core Values</h2>
          <p className={styles.subtitle}>The principles that guide everything we do.</p>
        </div>
        
        <div className={styles.valuesGrid}>
          <div className={styles.valueItem}>
            <div className={styles.valueNumber}>01</div>
            <h3 className={styles.valueTitle}>Innovation</h3>
            <p className={styles.cardText}>We constantly push boundaries to find better, faster, and more efficient ways to solve problems.</p>
          </div>
          <div className={styles.valueItem}>
            <div className={styles.valueNumber}>02</div>
            <h3 className={styles.valueTitle}>Integrity</h3>
            <p className={styles.cardText}>We believe in transparent communication, honest estimates, and delivering exactly what we promise.</p>
          </div>
          <div className={styles.valueItem}>
            <div className={styles.valueNumber}>03</div>
            <h3 className={styles.valueTitle}>Excellence</h3>
            <p className={styles.cardText}>We don't settle for "good enough". We strive for architectural perfection and uncompromised quality.</p>
          </div>
          <div className={styles.valueItem}>
            <div className={styles.valueNumber}>04</div>
            <h3 className={styles.valueTitle}>Collaboration</h3>
            <p className={styles.cardText}>We work as an extension of your team, fostering a culture of mutual respect and shared success.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2 className={styles.title} style={{ fontSize: '2.5rem' }}>Ready to Transform Your Business?</h2>
        <p className={styles.subtitle} style={{ marginBottom: '2rem' }}>
          Let's discuss how our engineering expertise can accelerate your growth.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
