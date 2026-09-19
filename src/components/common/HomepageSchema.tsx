
export default function HomepageSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BizoraEdge",
    url: "https://bizoraedge.com/",
    logo: "https://bizoraedge.com/og-image.png",
    description:
      "BizoraEdge builds custom software, SaaS platforms, mobile apps, AI, FinTech, blockchain, CRM and IoT solutions to help businesses grow.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 93446 97948",
      contactType: "customer support",
      email: "business@bizoraedge.com",
      availableLanguage: ["English"]
    },
    sameAs: [
      "https://www.linkedin.com/company/bizoraedge",
      "https://www.facebook.com/company.bizoraedge",
      "https://x.com/bizoraedge",
      "https://www.instagram.com/bizora_edge/"
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does BizoraEdge provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BizoraEdge provides custom software development and digital technology solutions for businesses. Our services include custom software development, booking application development, CRM systems, IoT solutions, mobile application development, FinTech solutions, digital marketing solutions, AI-powered applications, blockchain solutions, and SaaS development.",
        },
      },
      {
        "@type": "Question",
        name: "Does BizoraEdge build custom software for specific business requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BizoraEdge develops custom software solutions based on your business requirements, workflows, processes, users, and objectives. The solution can be designed around your specific operational and technology needs rather than relying only on a standard off-the-shelf product.",
        },
      },
      {
        "@type": "Question",
        name: "Can BizoraEdge develop a software product from an idea?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If you have a software or application idea, BizoraEdge can help transform the concept into a structured digital product. Depending on the requirement, this may include planning, UI/UX design, development, testing, deployment, and ongoing improvements.",
        },
      },
      {
        "@type": "Question",
        name: "Does BizoraEdge develop SaaS applications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BizoraEdge develops cloud-based SaaS applications with functionality such as user management, dashboards, subscriptions, integrations, and scalable architecture. SaaS products can be customized according to the business model and target users.",
        },
      },
      {
        "@type": "Question",
        name: "Can you develop mobile applications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BizoraEdge can develop custom mobile applications for businesses, customers, employees, and digital products. Mobile applications can be planned around the required features, user experience, business model, and platform requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can BizoraEdge integrate APIs and third-party services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. API and third-party integrations can be incorporated into software applications based on project requirements. These may include payment services, communication platforms, business tools, authentication systems, maps, analytics, and other external services.",
        },
      },
      {
        "@type": "Question",
        name: "Can you develop CRM software for a business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BizoraEdge can develop customized CRM systems for managing leads, customers, sales activities, communication, follow-ups, and business relationships. CRM functionality can be designed around the company's specific sales and customer-management processes.",
        },
      },
      {
        "@type": "Question",
        name: "Does BizoraEdge develop AI-powered applications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BizoraEdge can develop AI-powered applications for use cases such as automation, data analysis, intelligent workflows, personalization, decision support, and other business requirements where AI can provide practical value.",
        },
      },
      {
        "@type": "Question",
        name: "Can BizoraEdge develop FinTech and payment-related solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BizoraEdge provides FinTech development solutions for suitable financial technology use cases, including digital transaction workflows, financial applications, payment-related systems, and integrations. Project requirements, regulatory considerations, and third-party services are evaluated according to the specific use case.",
        },
      },
      {
        "@type": "Question",
        name: "Does BizoraEdge provide blockchain development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BizoraEdge can develop blockchain-based applications and solutions for suitable use cases involving decentralized systems, smart contracts, transparent transactions, Web3 applications, and blockchain-enabled business processes.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to develop a software application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Development time depends on the project's scope, features, complexity, integrations, design requirements, testing requirements, and deployment environment. After understanding your requirements, BizoraEdge can provide a more appropriate project timeline.",
        },
      },
      {
        "@type": "Question",
        name: "How much does custom software development cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost depends on factors such as functionality, application type, design complexity, integrations, technology requirements, user roles, security requirements, and development scope. BizoraEdge can review your requirements and provide a project-specific quotation.",
        },
      },
      {
        "@type": "Question",
        name: "Does BizoraEdge provide post-launch support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Support and maintenance can be provided based on the requirements and scope of the project. This may include troubleshooting, updates, improvements, monitoring, maintenance, and additional development.",
        },
      },
      {
        "@type": "Question",
        name: "Can startups and small businesses work with BizoraEdge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. BizoraEdge can work on technology requirements for startups, small businesses, and growing organizations. Solutions can be planned according to the business requirements, available resources, product goals, and expected growth.",
        },
      },
      {
        "@type": "Question",
        name: "How can I start a project with BizoraEdge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can start by contacting BizoraEdge and sharing your project idea, business requirements, or technology challenge. Our team can review the requirement and discuss the appropriate solution, scope, development approach, and next steps.",
        },
      },
    ],
  };

  return (
    <>
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
