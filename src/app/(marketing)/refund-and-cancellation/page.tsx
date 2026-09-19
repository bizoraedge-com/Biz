import React from 'react';
import styles from '../privacy-policy/page.module.css'; // Reusing the same styles for consistency
import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: { canonical: 'https://bizoraedge.com/refund-policy' },
    title: 'Refund & Cancellation Policy | BizoraEdge',
    description: 'Read the BizoraEdge refund and cancellation policy regarding custom software development, SaaS projects, digital services, subscriptions, and milestones.',
    keywords: ["BizoraEdge Refund Policy", "Cancellation Policy", "Software Development Refund Terms", "Service Agreement Refund", "Project Cancellation"],
};

export default function RefundPolicyPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Refund & Cancellation Policy — BizoraEdge</h1>
                <p className={styles.lastUpdated}>Last Updated: August 30, 2026</p>

                <div className={styles.content}>
                    <p>At BizoraEdge, we strive to deliver high-quality custom software and digital solutions. Due to the customized nature of software development, digital services, and resource allocation, our refund and cancellation policies are structured to reflect the work and resources involved at each stage of a project.</p>
                    <p>By engaging BizoraEdge for a project or service, you acknowledge and agree to this policy.</p>

                    <h2>1. Custom Software & Development Projects</h2>
                    <p>Custom software development requires significant time, planning, resource allocation, and specialized effort. Therefore, refunds for custom development services are generally evaluated according to project milestones:</p>
                    <ul>
                        <li><strong>Before Project Commencement:</strong> If you cancel a project before any planning, design, or development work has commenced, you may be eligible for a full refund of any initial deposit, less any applicable payment processing or administrative fees.</li>
                        <li><strong>During Development:</strong> Once planning, design, architecture, or development work has commenced, refunds are evaluated based on the proportion of work completed. Any payments made for milestones that have already been delivered, substantially completed, or where significant resources have been utilized are non-refundable.</li>
                        <li><strong>After Delivery:</strong> Payments made for completed projects, delivered applications, or fully delivered milestones are non-refundable.</li>
                    </ul>

                    <h2>2. Subscription & Ongoing Services</h2>
                    <p>For ongoing services, SaaS subscriptions, hosting, or maintenance contracts:</p>
                    <ul>
                        <li><strong>Cancellations:</strong> You may cancel ongoing services by providing written notice according to the terms of your specific service agreement (typically requiring advance notice).</li>
                        <li><strong>Refunds:</strong> Subscriptions and ongoing service fees are generally billed in advance. We do not provide prorated refunds for partially used billing periods unless explicitly stated in a specific service agreement.</li>
                    </ul>

                    <h2>3. Digital Marketing & Consulting Services</h2>
                    <p>Payments for digital marketing, strategy consulting, and technical consulting services are generally non-refundable once the service period has commenced or the consulting session has taken place, as these services involve immediate resource utilization, time, and intellectual property transfer.</p>

                    <h2>4. Third-Party Costs</h2>
                    <p>Any costs incurred by BizoraEdge on your behalf for third-party services—such as server hosting, domain registration, software licenses, API subscriptions, or paid plugins—are strictly non-refundable once purchased.</p>

                    <h2>5. How to Request a Cancellation or Refund</h2>
                    <p>If you wish to cancel a project or request a refund review, please contact your designated project manager directly or email us at:</p>
                    <p><strong>Email:</strong> info@bizoraedge.com</p>
                    <p>Your request must include your project details, company name, and the reason for the cancellation. We will review your request and respond within a reasonable timeframe (typically 7–10 business days).</p>

                    <h2>6. Exceptional Circumstances</h2>
                    <p>BizoraEdge reserves the right to evaluate refund requests on a case-by-case basis. In the event that we are completely unable to fulfill our core obligations due to unforeseen technical or operational limitations exclusively on our end, we may offer a full or partial refund at our sole discretion.</p>

                    <h2>7. Changes to This Policy</h2>
                    <p>We may update this Refund & Cancellation Policy periodically. The most current version will be posted on this page with the effective "Last Updated" date.</p>

                    <h2>8. Contact Us</h2>
                    <p>If you have any questions regarding this Refund & Cancellation Policy, please contact us:</p>
                    <p>
                        <strong>Company:</strong> BizoraEdge<br />
                        <strong>Email:</strong> info@bizoraedge.com<br />
                        <strong>Website:</strong> bizoraedge.com<br />
                        <strong>Phone:</strong> +91 93446 97948
                    </p>
                </div>
            </div>
        </main>
    );
}
