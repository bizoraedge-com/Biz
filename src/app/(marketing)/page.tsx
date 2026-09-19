import styles from './page.module.css';
import { Hero } from '@/components/home/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { CoreSolutions } from '@/components/sections/CoreSolutions';
import { ProductPortfolio } from '@/components/sections/ProductPortfolio';
import { WhyPartner } from '@/components/sections/WhyPartner';
import { TechnologyStack } from '@/components/sections/TechnologyStack';
import { ContactFooter } from '@/components/sections/ContactFooter';
import { FAQ } from '@/components/sections/FAQ';
import HomepageSchema from '@/components/common/HomepageSchema';

export default function Home() {
    return (
        <main className={styles.main}>
            <HomepageSchema />
            <Hero />
            <AboutUs />
            <CoreSolutions />
            <ProductPortfolio />
            <WhyPartner />
            <TechnologyStack />
            <FAQ />
            <ContactFooter />
        </main>
    );
}
