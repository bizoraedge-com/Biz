import React from 'react';
import styles from '../privacy-policy/page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: { canonical: '/terms-and-conditions' },
    title: 'Terms and Conditions | BizoraEdge',
    description: 'Terms and Conditions for BizoraEdge technology services, software development, and website use.',
    keywords: ["BizoraEdge Terms and Conditions", "Software Development Terms", "Technology Services Terms"],
};

export default function TermsAndConditionsPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Terms and Conditions</h1>
                <p className={styles.lastUpdated}>Last Updated: August 30, 2026</p>

                <div className={styles.content}>
                    <p>Welcome to BizoraEdge.</p>
                    <p>
                        These Terms & Conditions govern your use of the BizoraEdge website and provide the general terms applicable to interactions with our website and services.
                        By accessing or using this website, you agree to comply with these Terms.
                    </p>

                    <h2>1. About These Terms</h2>
                    <p>
                        BizoraEdge provides technology and digital solutions, which may include software development, web development, mobile application development, CRM, IoT, blockchain, FinTech, enterprise software and digital marketing services.
                        Specific projects may be governed by separate proposals, statements of work, service agreements or contracts.
                        Where a signed project agreement contains terms that differ from these website Terms, the project agreement will generally govern that particular engagement.
                    </p>

                    <h2>2. Website Use</h2>
                    <p>You agree to use this website only for lawful purposes. You must not:</p>
                    <ul>
                        <li>Attempt to gain unauthorized access to the website</li>
                        <li>Interfere with website functionality</li>
                        <li>Introduce malicious code</li>
                        <li>Copy or misuse website content</li>
                        <li>Use the website for fraudulent activities</li>
                        <li>Attempt to access restricted systems or information</li>
                        <li>Use the website in a way that could damage BizoraEdge or its users</li>
                    </ul>

                    <h2>3. Website Content</h2>
                    <p>
                        We make reasonable efforts to keep website information accurate and useful. However, website content may change over time and should not automatically be interpreted as a binding quotation, guarantee or contractual commitment.
                    </p>
                    <p>
                        Service descriptions are provided for general information. Specific project scope, features, timelines and pricing will be confirmed through an appropriate proposal or agreement.
                    </p>

                    <h2>4. Project Enquiries</h2>
                    <p>
                        Submitting an enquiry or project estimator form does not automatically create a contract between you and BizoraEdge.
                        After reviewing your requirements, we may contact you to discuss:
                    </p>
                    <ul>
                        <li>Scope</li>
                        <li>Requirements</li>
                        <li>Technology</li>
                        <li>Timeline</li>
                        <li>Pricing</li>
                        <li>Deliverables</li>
                        <li>Support</li>
                        <li>Payment terms</li>
                    </ul>
                    <p>A project begins only after the required commercial and contractual arrangements have been completed.</p>

                    <h2>5. Quotes and Proposals</h2>
                    <p>Any quotation or proposal provided by BizoraEdge may be subject to:</p>
                    <ul>
                        <li>Project scope</li>
                        <li>Technical requirements</li>
                        <li>Third-party services</li>
                        <li>Integration requirements</li>
                        <li>Resource availability</li>
                        <li>Changes requested by the client</li>
                    </ul>
                    <p>Unless otherwise stated in writing, a website enquiry or indicative estimate should not be treated as a final project price.</p>

                    <h2>6. Project Scope</h2>
                    <p>
                        The deliverables for a project will be determined by the applicable proposal, Statement of Work or service agreement. Requests outside the agreed scope may require additional time, cost or a separate agreement.
                    </p>

                    <h2>7. Client Responsibilities</h2>
                    <p>Clients are responsible for providing accurate and timely information required for their project. This may include:</p>
                    <ul>
                        <li>Business requirements</li>
                        <li>Content</li>
                        <li>Brand assets</li>
                        <li>Access credentials where necessary</li>
                        <li>Technical information</li>
                        <li>Feedback</li>
                        <li>Approvals</li>
                        <li>Third-party account access</li>
                    </ul>
                    <p>Delays in receiving required information or approvals may affect project timelines.</p>

                    <h2>8. Intellectual Property</h2>
                    <p>Ownership of project deliverables will be determined by the applicable project agreement.</p>
                    <p>Unless otherwise agreed, BizoraEdge retains ownership of its pre-existing:</p>
                    <ul>
                        <li>Frameworks</li>
                        <li>Libraries</li>
                        <li>Reusable components</li>
                        <li>Development tools</li>
                        <li>Templates</li>
                        <li>General methodologies</li>
                        <li>Know-how</li>
                    </ul>
                    <p>Client-specific intellectual property and third-party components will be handled according to the relevant agreement.</p>

                    <h2>9. Third-Party Services</h2>
                    <p>
                        Projects may require third-party services, platforms, APIs, hosting providers, payment gateways, software licenses or other external technologies. Third-party services may have their own pricing, availability, restrictions and terms.
                    </p>
                    <p>BizoraEdge cannot guarantee the continued availability or performance of third-party services outside its control.</p>

                    <h2>10. Timelines</h2>
                    <p>Project timelines are based on the agreed scope and the availability of required resources, information and approvals.</p>
                    <p>Timelines may change where:</p>
                    <ul>
                        <li>Requirements change</li>
                        <li>Additional features are requested</li>
                        <li>Client approvals are delayed</li>
                        <li>Third-party dependencies change</li>
                        <li>Technical issues arise</li>
                        <li>External circumstances affect development</li>
                    </ul>

                    <h2>11. Payments</h2>
                    <p>
                        Payment schedules, deposits, milestones, taxes and other commercial terms will be specified in the applicable proposal or agreement. Failure to make required payments may result in suspension or delay of project work.
                    </p>

                    <h2>12. Confidentiality</h2>
                    <p>
                        Where confidentiality is required, BizoraEdge and the client may enter into an appropriate confidentiality or non-disclosure agreement. Both parties should take reasonable steps to protect confidential business and technical information.
                    </p>

                    <h2>13. Warranties and Guarantees</h2>
                    <p>Unless specifically stated in a written agreement, BizoraEdge does not guarantee:</p>
                    <ul>
                        <li>Specific business revenue</li>
                        <li>Search engine rankings</li>
                        <li>Guaranteed lead generation</li>
                        <li>Guaranteed investment returns</li>
                        <li>Specific market performance</li>
                        <li>Uninterrupted availability of third-party services</li>
                    </ul>
                    <p>Technology services are delivered according to the agreed scope and requirements.</p>

                    <h2>14. Limitation of Liability</h2>
                    <p>
                        To the extent permitted by applicable law, BizoraEdge will not be responsible for indirect, incidental, consequential or unforeseeable losses arising from website use or services beyond the responsibilities expressly accepted under an applicable agreement.
                    </p>
                </div>
            </div>
        </main>
    );
}
