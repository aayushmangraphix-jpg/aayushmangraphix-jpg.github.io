export const contact = {
  name: 'Aayushman Gupta',
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 82335 20634',
  email: 'aldaayushman@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aldaayushman',
  portfolio: 'https://tinyurl.com/aayush2026',
}

export const linkedInBio = `Product Design Leader crafting products at the intersection of AI, design and end-user experience — Generative, Predictive and Agentic AI.

With 10+ years in enterprise and B2B design, I've been the founding or first designer at Nutanix (first in India, third globally), Cohesity (first in India, second globally), Domino Data Lab, Prophecy.io, Traceable.ai and Onehouse.ai — standing up 0→1 design systems and turning deep technical complexity into interfaces that feel simple and human.

Currently on the founding team of a stealth AI security company, and advising early-stage startups on product-market fit and design strategy.`

export const founding = [
  {
    company: 'Nutanix',
    claim: 'First designer in India · third globally',
    logo: 'logos/nutanix.png',
    logoX: 'logos/nutanix-x.png',
    logoSize: 'sm' as const,
    logoHover: '#8570ff',
  },
  {
    company: 'Rivigo',
    claim: 'Lead Product Designer',
    logo: 'logos/rivigo.png',
    logoSize: 'xs' as const,
  },
  {
    company: 'Cohesity',
    claim: 'First designer in India · second globally',
    logo: 'logos/cohesity.png',
    logoSize: 'sm' as const,
  },
  {
    company: 'Domino',
    claim: 'Founding / first designer',
    logo: 'logos/domino.png',
  },
  {
    company: 'Prophecy',
    claim: 'Founding / first designer',
    logo: 'logos/prophecy.png',
  },
  {
    company: 'Traceable',
    claim: 'Founding / first designer',
    logo: 'logos/traceable.png',
    logoSize: 'lg' as const,
  },
  {
    company: 'Onehouse',
    claim: 'Founding / first designer',
    logo: 'logos/onehouse.png',
  },
  {
    company: 'Cequence',
    claim: 'Principal Product Designer',
    logo: 'logos/cequence.png',
  },
]

export const competencies = [
  {
    icon: 'craft' as const,
    title: 'Design & craft',
    body: '0→1 product design, design systems at scale, information architecture, data visualisation, interaction and visual design, rapid prototyping.',
  },
  {
    icon: 'ai' as const,
    title: 'AI experience',
    body: 'Human–AI collaboration, agentic workflows and handoffs, explainability, auditability and governance, responsible-AI UX frameworks.',
  },
  {
    icon: 'leadership' as const,
    title: 'Leadership',
    body: 'Design team building and hiring, design direction and strategy, product vision and PRDs, partnership with engineering and product.',
  },
  {
    icon: 'tools' as const,
    title: 'Tools',
    body: 'Figma, Sketch, Cursor, Claude, MCP-based and AI-assisted design workflows.',
  },
]

export type Role = {
  org: string
  title: string
  dates: string
  location?: string
  summary: string
  highlights?: string[]
}

export const roles: Role[] = [
  {
    org: 'Stealth Startup — AI Security',
    title: 'Founding Team',
    dates: 'Sep 2025 – Present',
    summary:
      'Defining product vision for AI-powered security through PRDs, agent specs and interaction models. Designing human–AI collaboration — handoffs, explainability, governance and failure recovery — and scaling the design system for agentic applications.',
    highlights: [
      'Responsible-AI UX principles balancing autonomy, transparency and control',
      'Rapid prototyping with Figma, Cursor, Claude and MCP workflows',
    ],
  },
  {
    org: 'Cequence Security',
    title: 'Principal Product Designer',
    dates: 'Apr 2024 – Aug 2025',
    location: 'India',
    summary:
      'Led design for enterprise API security and bot-defence products across detection, risk analysis and policy workflows.',
  },
  {
    org: 'Onehouse.ai',
    title: 'Design Head · founding designer',
    dates: 'Nov 2022 – Aug 2023',
    summary:
      'Established the design function as the first designer; defined product experience and visual language for a managed data-lakehouse platform.',
  },
  {
    org: 'Traceable.ai',
    title: 'Lead Principal Designer · founding designer',
    dates: 'May 2021 – Oct 2022',
    location: 'Bengaluru',
    summary:
      'First designer; owned API security and observability experiences; set the design system and interaction patterns from scratch.',
  },
  {
    org: 'Prophecy.io',
    title: 'Product Designer · founding designer',
    dates: 'Dec 2020 – May 2021',
    location: 'Bengaluru',
    summary:
      'Shipped Prophecy SaaS, Spark column-definition search and lineage, and Databricks Partner Connect as the company’s first designer.',
  },
  {
    org: 'Domino Data Lab',
    title: 'Product Design Manager → Staff Product Designer',
    dates: 'Apr 2019 – Dec 2020',
    location: 'Bengaluru',
    summary:
      'Led designers accountable for every pixel reaching Domino users worldwide. Created and evolved the Domino design system against engineering release cycles.',
  },
  {
    org: 'Cohesity',
    title: 'Experience Designer III / Design Lead',
    dates: 'Nov 2017 – Apr 2019',
    location: 'Bengaluru',
    summary:
      'First designer in Bangalore; built the local team. Drove Cohesity NG (IA redesign → 2.0), Marketplace, and turned a three-day licensing process into a seconds-long self-service portal.',
  },
  {
    org: 'RIVIGO',
    title: 'Lead Product Designer',
    dates: 'Mar 2017 – Oct 2017',
    location: 'Gurgaon',
    summary:
      'Decoded human signals from drivers and operators into logistics tooling that was intuitive and fast to execute against. Acquired by Mahindra.',
  },
  {
    org: 'Nutanix',
    title: 'User Experience Designer, Enterprise',
    dates: 'Jan 2016 – Feb 2017',
    location: 'Bengaluru',
    summary:
      'First designer in India, third globally. Founding member of Bengaluru UX. Owned AMF for ESXi, Prism Central reporting, file-level restore, VM pinning, Data Recovery 2.0 and more.',
  },
]
