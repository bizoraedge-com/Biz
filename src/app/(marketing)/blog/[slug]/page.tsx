import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

// ── Blog post data ──────────────────────────────────────────────────────────

interface Section {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
}

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    readTime: string;
    intro: string;
    sections: Section[];
    takeaways: string[];
    conclusion: string;
}

const BLOG_POSTS: Record<string, BlogPost> = {
    'how-to-plan-saas-mvp': {
        slug: 'how-to-plan-saas-mvp',
        title: 'How to Plan a Successful SaaS MVP',
        date: 'Oct 28, 2023',
        readTime: '7 min read',
        intro: `Building a SaaS product is exciting — but launching the wrong features first is one of the most expensive mistakes a startup can make. This guide will show you how to validate your idea, prioritize ruthlessly, and ship an MVP that real customers actually use.`,
        sections: [
            {
                heading: 'What Is an MVP and Why Does It Matter?',
                paragraphs: [
                    `An MVP — Minimum Viable Product — is the smallest version of your product that still delivers real value to a specific group of users. It is not a half-baked prototype; it is a focused solution for one real problem.`,
                    `The goal of an MVP is to learn quickly with minimal investment. Instead of spending 12 months building a full platform, you release a lean version in 6–8 weeks, gather feedback, and iterate. This dramatically lowers your risk and shortens the path to product-market fit.`,
                ],
            },
            {
                heading: 'Step 1 — Define the Core Problem',
                paragraphs: [
                    `Every successful SaaS product solves a specific, painful problem for a specific group of people. Before writing a single line of code, answer these questions clearly:`,
                ],
                bullets: [
                    'Who exactly is your target customer? (role, industry, company size)',
                    'What does their current workflow look like without your product?',
                    'What is the single biggest pain point in that workflow?',
                    'How are they solving it today, and why is that solution inadequate?',
                ],
            },
            {
                heading: 'Step 2 — List Features and Prioritize Ruthlessly',
                paragraphs: [
                    `Once you understand the problem, brainstorm every feature that could solve it. Then apply the MoSCoW method to cut it down:`,
                ],
                bullets: [
                    'Must Have — the product cannot function without these',
                    'Should Have — important but not critical for the first release',
                    'Could Have — nice-to-have features for later iterations',
                    "Won't Have — explicitly out of scope for the MVP",
                ],
            },
            {
                heading: 'Step 3 — Validate Before You Build',
                paragraphs: [
                    `Before committing to development, validate your assumptions with real potential customers. A few methods that work well:`,
                ],
                bullets: [
                    'Customer interviews — talk to 10–15 people in your target segment',
                    'Landing page test — describe the product and measure sign-up interest',
                    'Concierge MVP — manually deliver the service before automating it',
                    'Smoke test — run ads to a waitlist page to gauge demand',
                ],
            },
            {
                heading: 'Step 4 — Choose the Right Tech Stack',
                paragraphs: [
                    `For an MVP, speed of development matters more than architectural perfection. Choose tools your team already knows. Common SaaS MVP stacks include Next.js with a managed database (Supabase or PlanetScale), or a no-code platform like Bubble if the team is non-technical.`,
                    `Avoid over-engineering. Microservices and Kubernetes are not MVP decisions — they are scaling decisions. A well-structured monolith is easier to ship, debug, and iterate on.`,
                ],
            },
            {
                heading: 'Step 5 — Set a Clear Launch Criteria',
                paragraphs: [
                    `An MVP without a definition of "done" will drift indefinitely. Before you start building, agree on:`,
                ],
                bullets: [
                    'The exact features that must work end-to-end before launch',
                    'The number of beta users you need for meaningful feedback',
                    'The key metric that will determine success (activation rate, retention, NPS)',
                    'The timeline — typically 6 to 12 weeks for a SaaS MVP',
                ],
            },
        ],
        takeaways: [
            'An MVP is about learning fast, not just shipping fast — focus on the riskiest assumptions first.',
            'Ruthlessly cut scope — one problem solved brilliantly beats ten features done poorly.',
            'Validate demand before writing code. Customer conversations save months of wasted engineering.',
        ],
        conclusion: `Planning a SaaS MVP is as much a business exercise as a technical one. Get the problem definition right, validate it with real users, and partner with a team that can help you move fast without cutting corners on quality. If you have an idea you want to bring to life, BizoraEdge can help you scope, design and build your MVP — reach out today.`,
    },

    'custom-software-vs-off-the-shelf': {
        slug: 'custom-software-vs-off-the-shelf',
        title: 'Custom Software vs Off-the-Shelf Software',
        date: 'Oct 15, 2023',
        readTime: '5 min read',
        intro: `Every growing business eventually faces this decision: buy an existing software product or build something tailored to your exact needs? Both paths have real advantages — and real trade-offs. Here is how to make the right call for your situation.`,
        sections: [
            {
                heading: 'What Is Off-the-Shelf Software?',
                paragraphs: [
                    `Off-the-shelf (OTS) software is a ready-made product built for a broad audience — think Salesforce, QuickBooks, or Shopify. You pay a subscription, configure it to your preferences, and start using it almost immediately.`,
                    `The appeal is obvious: low upfront cost, proven reliability, and a community of users and integrations already built around it. For standard business functions — accounting, email, HR — OTS is often the right choice.`,
                ],
            },
            {
                heading: 'When Off-the-Shelf Is the Right Choice',
                paragraphs: ['Choose an existing product when:'],
                bullets: [
                    'Your workflow matches what the majority of companies in your industry use',
                    'Speed of deployment is the top priority',
                    'Your budget does not support an extended development engagement',
                    'The software category is mature and well-served (CRM, accounting, email)',
                ],
            },
            {
                heading: 'When Custom Software Makes More Sense',
                paragraphs: [
                    `Custom development becomes the better investment when your business processes are genuinely unique, or when OTS limitations are actively holding you back. Common signals include:`,
                ],
                bullets: [
                    'You are spending significant time on manual workarounds inside your current tool',
                    'You need deep integration between multiple systems that no single product covers',
                    'Your competitive advantage depends on a proprietary workflow or data model',
                    'Licensing costs for the OTS product are approaching what custom development would cost over 3 years',
                ],
            },
            {
                heading: 'The Total Cost of Ownership Question',
                paragraphs: [
                    `People often compare the upfront cost of custom development to the monthly fee of a SaaS tool and conclude OTS is cheaper. This is rarely the full picture. OTS tools accumulate costs through per-seat pricing, add-on modules, consultant fees for customisation and the hidden cost of staff time spent working around limitations.`,
                    `A custom solution has a higher initial investment but typically has a lower total cost of ownership over a 3–5 year horizon — especially as your team grows.`,
                ],
            },
        ],
        takeaways: [
            'Off-the-shelf works well for standard functions; choose it when your needs are common.',
            'Custom software pays off when your process is unique or OTS limitations create real business friction.',
            'Always calculate total cost of ownership over 3–5 years, not just upfront price.',
        ],
        conclusion: `The right answer depends entirely on your specific workflow, growth stage, and competitive situation. If you are unsure which path is right, BizoraEdge offers a free discovery consultation to help you map out your options — with no pressure to build.`,
    },

    'role-of-qa': {
        slug: 'role-of-qa',
        title: 'The Role of QA in Software Development',
        date: 'Nov 05, 2023',
        readTime: '6 min read',
        intro: `Quality Assurance is often the first thing cut when a project is running behind schedule. That decision almost always costs more than it saves. This article explains what QA actually does, why it matters, and how to build testing into your development process from day one.`,
        sections: [
            {
                heading: 'QA Is Not Just "Finding Bugs"',
                paragraphs: [
                    `A common misconception is that QA engineers simply click around and report errors. In reality, a good QA process covers functional correctness, performance under load, security vulnerabilities, accessibility compliance, and cross-device compatibility.`,
                    `QA is a systematic discipline that prevents problems from reaching users — not just a last-minute check before launch.`,
                ],
            },
            {
                heading: 'The Cost of Fixing Bugs Late',
                paragraphs: [
                    `Research consistently shows that fixing a bug in production costs 6 to 100 times more than fixing it during development. The reasons are compounded:`,
                ],
                bullets: [
                    'Production bugs affect real users and damage trust immediately',
                    'Reproduction in a live environment is harder and riskier',
                    'Hot-fixes bypass normal review cycles, introducing new risk',
                    'Support costs spike as users contact your team about the issue',
                ],
            },
            {
                heading: 'Types of Testing Every Project Needs',
                paragraphs: ['A well-rounded QA strategy includes several layers:'],
                bullets: [
                    'Unit tests — verify individual functions work in isolation',
                    'Integration tests — check that modules communicate correctly',
                    'End-to-end tests — simulate real user journeys through the application',
                    'Regression tests — ensure new changes do not break existing functionality',
                    'Performance tests — validate the system behaves under expected and peak load',
                ],
            },
            {
                heading: 'Building QA Into Your Process, Not On Top of It',
                paragraphs: [
                    `The most effective teams treat QA as a continuous activity, not a phase at the end of a sprint. Practices that work:`,
                ],
                bullets: [
                    'Write acceptance criteria before development starts, not after',
                    'Developers write unit tests alongside feature code',
                    'QA engineers review requirements during planning, catching ambiguity early',
                    'Automated test suites run on every pull request before merging',
                    'Exploratory testing sessions are scheduled before every release',
                ],
            },
        ],
        takeaways: [
            'Bugs found during development cost a fraction of what they cost in production.',
            'QA covers much more than bug-finding — performance, security, and accessibility all fall under its scope.',
            'Integrate testing throughout the development cycle rather than treating it as a final gate.',
        ],
        conclusion: `A strong QA culture is one of the clearest signals that a development team takes its craft seriously. If your current process lacks structured testing, BizoraEdge can help you establish one — whether you are starting a new project or improving an existing product.`,
    },
};

// ── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS[slug];

    if (!post) {
        return { title: 'Article Not Found | BizoraEdge Blog' };
    }

    return {
        title: `${post.title} | BizoraEdge Blog`,
        description: post.intro.substring(0, 160),
    };
}

// ── Page ────────────────────────────────────────────────────────────────────

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS[slug];

    if (!post) notFound();

    return (
        <main style={{ width: '100%', backgroundColor: '#f8fafc', paddingTop: '80px', paddingBottom: '80px', minHeight: '100vh' }}>

            {/* ── Header ── */}
            <section style={{ backgroundColor: '#ffffff', padding: '4rem 2rem', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Link href="/blog" style={{ color: '#64748b', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 600, marginBottom: '2.5rem', transition: 'color 0.2s' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back to Blog
                    </Link>

                    <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                        {post.title}
                    </h1>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', color: '#64748b', fontSize: '0.95rem', fontWeight: 500 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #0052cc, #003380)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: '0.8rem' }}>B</div>
                            <span>BizoraEdge Team</span>
                        </div>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div>
                        <span>Published: {post.date}</span>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#cbd5e1' }}></div>
                        <span style={{ color: '#3b82f6', fontWeight: 600, backgroundColor: '#eff6ff', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{post.readTime}</span>
                    </div>
                </div>
            </section>

            {/* ── Article body ── */}
            <section style={{ maxWidth: '850px', margin: '3rem auto', padding: '0 1rem' }}>
                <article style={{ 
                    color: '#334155', 
                    fontSize: '1.125rem', 
                    lineHeight: 1.8,
                    backgroundColor: '#ffffff',
                    padding: '3rem',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                    border: '1px solid #e2e8f0'
                }}>

                    {/* Intro */}
                    <p style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 500, marginBottom: '2.5rem', lineHeight: 1.7 }}>
                        {post.intro}
                    </p>

                    {/* Sections */}
                    {post.sections.map((section, i) => (
                        <div key={i}>
                            <h2 style={{ fontSize: i === 0 ? '2rem' : '1.75rem', fontWeight: 700, color: '#0f172a', marginTop: '3rem', marginBottom: '1rem' }}>
                                {section.heading}
                            </h2>
                            {section.paragraphs?.map((p, pi) => (
                                <p key={pi} style={{ marginBottom: '1.5rem' }}>{p}</p>
                            ))}
                            {section.bullets && (
                                <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
                                    {section.bullets.map((b, bi) => (
                                        <li key={bi} style={{ marginBottom: '0.6rem' }}>{b}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    {/* Key Takeaways */}
                    <div style={{ backgroundColor: '#f0f7ff', borderLeft: '4px solid #3b82f6', padding: '1.5rem 2rem', margin: '3rem 0', borderRadius: '0 8px 8px 0' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', margin: '0 0 1rem 0' }}>Key Takeaways</h2>
                        <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#475569' }}>
                            {post.takeaways.map((t, i) => (
                                <li key={i} style={{ marginBottom: i < post.takeaways.length - 1 ? '0.6rem' : 0 }}>{t}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Conclusion */}
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginTop: '3rem', marginBottom: '1rem' }}>Conclusion</h2>
                    <p style={{ marginBottom: '1.5rem' }}>{post.conclusion}</p>
                </article>

                {/* CTA */}
                <div style={{ marginTop: '4rem', padding: '3rem', backgroundColor: '#eff6ff', borderRadius: '16px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>Need Help With Your Project?</h2>
                    <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Talk to BizoraEdge. We can help you navigate technology decisions and build the right solution for your business.
                    </p>
                    <a
                        href="/quote"
                        style={{ background: 'linear-gradient(90deg, #0052cc, #003380)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '1.1rem', display: 'inline-block', boxShadow: '0 4px 14px rgba(0,82,204,0.3)' }}
                    >
                        Discuss Your Project
                    </a>
                </div>
            </section>
        </main>
    );
}
