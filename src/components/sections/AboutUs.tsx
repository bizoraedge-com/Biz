import React from 'react';
import Link from 'next/link';
import styles from './AboutUs.module.css';

export function AboutUs() {
    return (
        <section className="section bg-light">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column - Image */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className={styles.imageWrapper}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="About Us Team"
                                className={`img-fluid rounded-lg shadow-soft ${styles.aboutImg}`}
                            />
                            {/* Decorative element */}

                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="col-lg-6 ps-lg-5">

                        <h2 className="display-6 fw-bold mb-4 text-dark">
                            We Build Technology That Moves <span className="textGradient">Business Forward</span>
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="lead text-secondary mb-4">
                            Technology shouldn't create more complexity. It should help your team work smarter, your customers interact more easily and your business make better decisions.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="text-secondary mb-5 fs-6">
                            BizoraEdge works with startups, growing businesses and organizations that need technology tailored to their processes rather than another one-size-fits-all product. We combine business understanding, thoughtful design and modern development practices to create digital solutions that are useful today and ready for tomorrow.
                        </p>

                        <Link href="/about" className="btn-primary btn px-4 py-2 fw-medium undefined ">
                            Learn About BizoraEdge
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
