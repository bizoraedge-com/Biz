import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ReactNode } from 'react';

export default function MarketingLayout({ children }: { children: ReactNode }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}
