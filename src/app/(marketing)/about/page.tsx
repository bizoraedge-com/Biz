export default function AboutPage() {
    return (
        <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '6rem 4rem', width: '100%' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '2rem', letterSpacing: '-0.02em' }}>Pioneering Digital Excellence</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        At BizoraEdge, we believe in transforming complex business challenges into elegant, scalable digital solutions. With over a decade of enterprise software experience, our team specializes in crafting resilient architectures that drive tangible growth globally.
                    </p>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                        Whether it is an ambitious Fintech platform, high-frequency data pipelines, or a massive ERP system integration, we bring unparalleled engineering rigor and modern UX/UI logic to every commit we ship.
                    </p>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-main)', lineHeight: 1.6 }}>
                        Our mission is simply to engineer the future using pure, native performance and clean standard architectures without bloated abstractions.
                    </p>
                </div>
                <div style={{ backgroundColor: 'var(--brand-light)', borderRadius: '24px', aspectRatio: '4/3', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 40px rgba(0,51,102,0.05)' }}>
                    <span style={{ color: 'var(--brand-primary)', fontWeight: 600, opacity: 0.5, letterSpacing: '2px', textTransform: 'uppercase' }}>[ Office Imagery ]</span>
                </div>
            </div>
        </main>
    );
}
