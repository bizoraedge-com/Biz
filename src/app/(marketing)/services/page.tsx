import { Card } from '@/components/ui/Card';

const SERVICE_ITEMS = [
    { title: "Fintech Architectures", desc: "High-frequency trading ledgers, banking APIs, and scalable decentralized finance infrastructure built resiliently." },
    { title: "ERP Ecosystems", desc: "Custom business logic mapping entire supply chains, inventories, and unified human resource modules seamlessly." },
    { title: "Web Applications", desc: "Lightning fast React/Next.js single page applications hosted dynamically on the global delivery edge." },
    { title: "Mobile Engineering", desc: "Beautifully smooth iOS and Android native experiences leveraging React Native, Kotlin, and Swift." },
    { title: "Blockchain Integration", desc: "Smart contracts securely audited and deployed targeting Ethereum and modern bleeding-edge L2 chains." },
    { title: "Enterprise CRM", desc: "Customer relationship pipelines actively tracking and managing thousands of live websocket interactions easily." }
];

export default function ServicesPage() {
    return (
        <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '6rem 4rem', width: '100%' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--brand-primary)', textAlign: 'center', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Our Engineering Capabilities</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>We partner with growing global brands to meticulously design, engineer, and scale modern, high-performance web platforms.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                {SERVICE_ITEMS.map((svc, i) => (
                    <Card key={i} style={{ backgroundColor: 'var(--surface)', borderRadius: '16px', padding: '2.5rem', border: '1px solid var(--surface-border)', boxShadow: '0 4px 24px rgba(0,51,102,0.04)', display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--brand-primary)', fontWeight: 700 }}>{svc.title}</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>{svc.desc}</p>
                    </Card>
                ))}
            </div>
        </main>
    );
}
