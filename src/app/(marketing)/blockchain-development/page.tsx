import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/blockchain-development' },
    title: 'Blockchain Development Company | Web3 Solutions | BizoraEdge',
    description: 'Blockchain technology can create new ways to manage transactions, ownership, verification and digital interactions. BizoraEdge develops blockchain and Web3 applications with a focus on practical use rather than technology for its own sake.',
};

export default function BlockchainDevelopmentPage() {
    return (
        <ServiceTemplate 
            title="Blockchain Solutions Built Around Real Business Use Cases"
            subtitle="Blockchain & Web3 Development"
            description="Blockchain technology can create new ways to manage transactions, ownership, verification and digital interactions. BizoraEdge develops blockchain and Web3 applications with a focus on practical use rather than technology for its own sake."
            benefits={[
                "Smart contract development and auditing",
                "Decentralized application (dApp) development",
                "Private and consortium blockchain networks",
                "Tokenization platforms",
                "Cryptocurrency wallet integration",
                "Web3 authentication",
                "Blockchain supply chain solutions"
            ]}
            faq={[
                { q: 'Which blockchain networks do you build on?', a: 'We develop on Ethereum, Polygon, Solana, Binance Smart Chain, and can build private networks using Hyperledger Fabric or enterprise Ethereum protocols.' },
                { q: 'What is a smart contract?', a: 'A smart contract is a self-executing program stored on a blockchain that automatically executes actions when predetermined conditions are met, eliminating the need for a middleman.' },
                { q: 'How secure are smart contracts?', a: 'Security is paramount. We write code following strict industry standards and perform comprehensive testing and code audits before deployment to prevent vulnerabilities.' },
                { q: 'Can blockchain be used outside of finance?', a: 'Absolutely. We use blockchain for supply chain tracking, verifiable identity management, intellectual property protection, and automated compliance.' },
                { q: 'Do you provide Web3 integration for existing apps?', a: 'Yes. We can integrate Web3 features like wallet authentication and token payments into traditional Web2 applications.' }
            ]}
            slug="Blockchain & Web3 Development"
        />
    );
}
