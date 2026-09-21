import { Card } from '@/components/ui/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
    alternates: { canonical: '/services' },
    title: 'Software & Digital Solutions | BizoraEdge',
    description: 'Our services are designed to help organizations build new digital products, improve existing systems, automate processes and connect technology across their operations.',
};

const SERVICE_ITEMS = [
    { title: "Web Development", desc: "Build responsive websites and web applications that are easy to use, maintain and scale.", link: "/web-development" },
    { title: "Mobile Application Development", desc: "Create mobile experiences that put your products, services and business processes directly into users' hands.", link: "/mobile-app-development" },
    { title: "Enterprise Software Development", desc: "Connect processes, teams and data through custom enterprise applications designed around your organization.", link: "/enterprise-software" },
    { title: "CRM Development", desc: "Create a customer management system that gives your teams a clearer view of leads, customers, sales activity and relationships.", link: "/crm-development" },
    { title: "Blockchain & Web3 Development", desc: "Build practical blockchain applications, smart contracts and Web3 experiences around genuine business use cases.", link: "/blockchain-development" },
    { title: "IoT Solutions", desc: "Connect devices, data and business operations through IoT applications designed for monitoring, automation and visibility.", link: "/iot-solutions" },
    { title: "FinTech Solutions", desc: "Develop digital financial products and connected financial workflows with technology designed around reliability and usability.", link: "/fintech-solutions" },
    { title: "Digital Marketing", desc: "Build stronger online visibility with digital marketing strategies focused on reaching relevant audiences and supporting business growth.", link: "/digital-marketing" }
];

export default function ServicesPage() {
    return (
        <main style={{ maxWidth: '1440px', margin: '0 auto', padding: 'clamp(3rem, 10vw, 6rem) clamp(1.5rem, 5vw, 4rem)', width: '100%' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'var(--brand-primary)', textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Digital Solutions Built Around Real Business Needs</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>Every business has different challenges. Our services are designed to help organizations build new digital products, improve existing systems, automate processes and connect technology across their operations.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                {SERVICE_ITEMS.map((svc, i) => (
                    <a href={svc.link || "#"} key={i} style={{ textDecoration: 'none' }}>
                        <Card style={{ height: '100%', backgroundColor: 'var(--surface)', borderRadius: '16px', padding: '2.5rem', border: '1px solid var(--surface-border)', boxShadow: '0 4px 24px rgba(0,51,102,0.04)', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--brand-primary)', fontWeight: 700 }}>{svc.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>{svc.desc}</p>
                        </Card>
                    </a>
                ))}
            </div>
        </main>
    );
}
