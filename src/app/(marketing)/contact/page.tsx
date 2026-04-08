import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <main style={{ maxWidth: '1440px', margin: '0 auto', padding: '6rem 4rem', width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '6rem', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Let's build the future together.</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                        Reach out to our global sales team and expert engineers for a technical scoping consultation for your next enterprise application.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--brand-primary)' }}>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>&#9993; hello@bizoraedge.com</span>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>&#9742; +1 (800) 123-4567</span>
                    </div>
                </div>

                <div style={{ backgroundColor: 'var(--surface)', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,51,102,0.08)', border: '1px solid var(--surface-border)' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>First Name</label>
                                <Input type="text" placeholder="John" />
                            </div>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Last Name</label>
                                <Input type="text" placeholder="Doe" />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Corporate Email</label>
                            <Input type="email" placeholder="john@company.com" />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)' }}>Project Scope</label>
                            <textarea rows={4} placeholder="Briefly describe your requirements..." style={{ padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid var(--surface-border)', fontSize: '1rem', width: '100%', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                        </div>

                        <Button type="button" style={{ marginTop: '1rem', backgroundColor: 'var(--brand-primary)', color: 'white', padding: '1rem', borderRadius: '6px', fontSize: '1.1rem', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Submit Request</Button>
                    </form>
                </div>
            </div>
        </main>
    );
}
