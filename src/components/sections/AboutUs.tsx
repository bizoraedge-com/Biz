import React from 'react';
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
                            Pioneering Digital <span className="textGradient">Excellence</span>
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="lead text-secondary mb-4">
                            We are a team of passionate technologists and strategists dedicated to redefining how modern businesses operate in the digital age. By seamlessly blending innovation with robust execution, we deliver solutions that create lasting impact.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="text-secondary mb-5 fs-6">
                            With extensive expertise spanning custom software development, scalable cloud infrastructure, and emerging blockchain technologies, we empower both ambitious startups and established enterprises to scale securely and efficiently in a competitive marketplace.
                        </p>

                        <a href="/about" className="btn-primary btn px-4 py-2 fw-medium undefined ">
                            Discover Our Story
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
