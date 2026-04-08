export default function PortfolioPage() {
    return (
        <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '6rem 4rem', width: '100%' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--brand-primary)', textAlign: 'center', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Our Featured Work</h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>Explore a selection of enterprise applications and platforms engineered by BizoraEdge.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,51,102,0.06)', border: '1px solid var(--surface-border)', backgroundColor: 'var(--surface)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                        <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: 'var(--brand-light)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ color: 'var(--brand-primary)', fontWeight: 600, opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase' }}>[ Project Visual {i} ]</span>
                        </div>
                        <div style={{ padding: '2rem' }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Case Study {i}</div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--brand-primary)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.01em' }}>Enterprise Platform Concept</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>A comprehensive overview of how we architected resilient microservices and mapped user flows for this high-scale deployment.</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
