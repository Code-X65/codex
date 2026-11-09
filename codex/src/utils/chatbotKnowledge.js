// Knowledge base for Boluwatife Omoloye. A's portfolio companion chatbot

export const PRESET_QUESTIONS = [
  'Is Boluwatife available for a new project?',
  'What has Boluwatife built with Next.js?',
  'When should I use TanStack Query vs Zustand?',
]

export const KNOWLEDGE_BASE = [
  {
    keywords: ['available', 'hire', 'contract', 'freelance', 'work together', 'project', 'new project', 'status', 'start'],
    response:
      "Yes, Boluwatife is currently AVAILABLE FOR SELECT PROJECTS! He collaborates with founders, product teams, and agencies on freelance contracts, full-stack web applications, technical consulting, and high-impact full-time roles across global time zones.",
    cta: { text: 'Email Boluwatife directly', link: 'mailto:Omoloyeamoss65@gmail.com' },
  },
  {
    keywords: ['next.js', 'nextjs', 'next', 'built with next'],
    response:
      "Boluwatife has leveraged Next.js on major production systems:\n\n1. **Flexchange Website**: A high-conversion gift card trading platform featuring seamless onboarding, Next.js 14 server components, and Tailwind styling.\n2. **Enyata Software Engineering**: Agency portfolio and enterprise product showcase highlighting AI, blockchain, and cloud engineering with Framer Motion transitions.\n3. Custom SaaS prototypes and performant SEO-tuned corporate web presences.",
    cta: { text: 'View Selected Work', link: '#work' },
  },
  {
    keywords: ['tanstack', 'zustand', 'tanstack query', 'state', 'query vs zustand', 'server state', 'client state'],
    response:
      "Great architecture question! Here's Boluwatife's recommended rule of thumb:\n\n• **Use TanStack Query for Server State**: API data fetching, asynchronous caching, automatic background refetching, pagination, and optimistic updates.\n\n• **Use Zustand for Client State**: Ephemeral UI toggles, active modals, themes, complex multi-step form steps, or global client preferences.\n\nSeparating server cache from client UI state keeps your codebase clean, eliminates redundant Redux boilerplate, and prevents state sync bugs.",
  },
  {
    keywords: ['fuelbot', 'scraping', 'cloudflare', 'api', 'stations', 'whreek'],
    response:
      "**WHreek-Fuelbot-API** is one of Boluwatife's standout case studies! It's a high-scale production API monitoring ~83,000 fuel stations across 27 European countries. It successfully bypasses Cloudflare-protected sources with zero public API, utilizing Node.js, Express, PostgreSQL, Prisma, and a resilient distributed scraping pipeline.",
    cta: { text: 'Inspect Fuelbot Case Study', link: '#work' },
  },
  {
    keywords: ['voting', 'pulse', 'pulse code', 'ballot', 'qr'],
    response:
      "**Pulse Code Voting** is a full-stack real-time voting system built with React, TypeScript, Node.js, and PostgreSQL that replaced physical paper ballots at a university awards ceremony. It features unique QR ticket generation, single-vote integrity, live leaderboards, and a dedicated admin audit console.",
    cta: { text: 'View Pulse Code Voting', link: '#work' },
  },
  {
    keywords: ['projects', 'portfolio', 'work', 'what has he built', 'systems'],
    response:
      "Boluwatife's portfolio features 9 key systems across Web2, Web3, and PropTech:\n\n1. **WHreek-Fuelbot-API** (Cloudflare-resilient scraping & data API)\n2. **Pulse Code Voting** (Real-time university voting platform)\n3. **Flexchange Website** (Next.js 14 gift card exchange)\n4. **Denurx Landing Page** (Telemedicine platform)\n5. **360 Trading** (Webflow fintech site)\n6. **BaseWOF** (Base blockchain crypto casino marketing)\n7. **Knapsack** (Strategic web consulting & SEO)\n8. **Enyata** (Enterprise custom software platform)\n9. **HutBay** (Real estate proptech search engine)",
    cta: { text: 'Browse All Projects', link: '#work' },
  },
  {
    keywords: ['skills', 'stack', 'technologies', 'tech', 'languages', 'tools'],
    response:
      "Boluwatife's core technical stack includes:\n\n• **Frontend**: React 19, Next.js 14/15, TypeScript, JavaScript (ESNext), Tailwind CSS v4, GSAP, Framer Motion.\n• **Backend & APIs**: Node.js, Express, RESTful APIs, WebSockets, Python, Web Scraping.\n• **Databases & ORM**: PostgreSQL, Prisma ORM, MongoDB, Firebase.\n• **DevOps & Cloud**: Docker, Git, CI/CD pipelines, Vercel.",
    cta: { text: 'View Capabilities Section', link: '#skills' },
  },
  {
    keywords: ['who is', 'boluwatife', 'about', 'taiwo', 'creator', 'bio'],
    response:
      "Boluwatife Omoloye. A is a Full-Stack Developer, Product Architect, and Creator. He specializes in designing robust backend architectures, high-performance web applications, and thoughtful user interfaces built for longevity.",
    cta: { text: 'Read Experience Timeline', link: '#experience' },
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'call', 'talk', 'hire him', 'message'],
    response:
      "You can get in touch with Boluwatife directly via:\n\n• **Email**: Omoloyeamoss65@gmail.com\n• **Availability**: Select freelance contracts, consulting, & full-time roles\n• Or fill out the interactive project inquiry form at the bottom of the page!",
    cta: { text: 'Jump to Contact Form', link: '#contact' },
  },
  {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'sup'],
    response:
      "Hey there! 👋 Welcome to Boluwatife's portfolio. I'm his AI companion. Feel free to ask me anything about his projects, technical expertise, availability, or architectural philosophies before you get in touch!",
  },
  {
    keywords: ['writing', 'essays', 'articles', 'graphql', 'rest', 'protocols', 'websockets', 'contract'],
    response:
      "Boluwatife writes extensively on durable software architecture. His published essays include:\n\n1. **The interface is a contract, not a coat of paint**: State machines and making intent and recovery visible.\n2. **Web Protocols Explained: When to Use HTTP, WebSockets, or FTP**: Choosing the right wire for production requirements.\n3. **REST vs. GraphQL: A Practical Engineering Breakdown**: Avoiding hype and selecting APIs based on data shape, caching, and team velocity.",
    cta: { text: 'Read Essays', link: '#writing' },
  },
  {
    keywords: ['experience', 'career', 'companies', 'resume', 'cv'],
    response:
      "Boluwatife has extensive hands-on experience building mission-critical applications—from enterprise engineering at Enyata to delivering high-scale automated APIs, proptech search marketplaces, and decentralized Web3 applications.",
    cta: { text: 'View Career Timeline', link: '#experience' },
  },
]

export function getChatbotResponse(userQuery) {
  const query = userQuery.toLowerCase().trim()

  if (!query) {
    return {
      text: "Feel free to ask a question or tap one of the suggested prompts above!",
    }
  }

  // Exact or keyword match
  for (const item of KNOWLEDGE_BASE) {
    const matched = item.keywords.some((kw) => query.includes(kw))
    if (matched) {
      return {
        text: item.response,
        cta: item.cta,
      }
    }
  }

  // Default intelligent fallback
  return {
    text: `That's a thoughtful question! While my site knowledge is focused on Boluwatife's published software projects, stack, and availability, he'd be delighted to discuss this with you directly.\n\nWould you like to drop him a quick note at Omoloyeamoss65@gmail.com?`,
    cta: { text: 'Send Boluwatife an Email', link: 'mailto:Omoloyeamoss65@gmail.com' },
  }
}
