import styles from './page.module.css';
import { Hero } from '@/components/home/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { CoreSolutions } from '@/components/sections/CoreSolutions';
import { ProductPortfolio } from '@/components/sections/ProductPortfolio';
import { WhyPartner } from '@/components/sections/WhyPartner';
import { TechnologyStack } from '@/components/sections/TechnologyStack';

export default function Home() {
    return (
        <main className={styles.main}>
            <Hero />
            <AboutUs />
            <CoreSolutions />
            <ProductPortfolio />
            <WhyPartner />
            <TechnologyStack />
        </main>
    );
}
