import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kurniawan Candra Mahardika",
  displayName: "Candra",
  initials: "CN",
  url: "https://portfolio-candra.vercel.app",
  location: "Surakarta, ID",
  locationLink: "https://www.google.com/maps/place/Surakarta,+Central+Java",
  description:
    "Kurniawan Candra Mahardika is a Software Engineer in Surakarta, Indonesia, passionate about Web3, blockchain, and building useful full-stack products.",
  keywords: [
    "Kurniawan Candra Mahardika",
    "Candra",
    "Kurniawan Candra",
    "Software Engineer",
    "Web3",
    "Surakarta",
  ],
  summary:
    "Kurniawan Candra Mahardika is a full-stack developer focused on both frontend and backend using Next.js and modern JavaScript/TypeScript. I enjoy building fast, scalable web apps with great user experiences and solid backend systems. I'm also passionate about Web3 and blockchain, and I'm always exploring how new tech can shape the future of the web. I love learning, solving problems, and working with teams to build useful and innovative products.",
  avatarUrl: "/my.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Rust",
    "Docker",
    "Kubernetes",
    "C++",
    "Motoko"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Candra0x6",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kurniawan-candra-mahardika-637313372/",
        icon: Icons.linkedin,

        navbar: true,
      },

   
    },
  },

  work: [
    {
      company: "Komdigi",
      href: "https://www.komdigi.go.id/",
      badges: [],
      location: "Hybrid",
      title: "Intern IT Support",
      logoUrl: "/komdigi.png",
      start: "June 2023",
      end: "Dec 2023",
      description:
        "Assisted in IT support tasks, including troubleshooting hardware and software issues, providing technical assistance to staff, and maintaining IT infrastructure.",
    }
  ],
  education: [
    {
      school: "Muhammadiyah University of Surakarta",
      href: "https://www.ums.ac.id/",
      degree: "Bachelor of Computer Science",
      logoUrl: "/ums.png",
      start: "2024",
      end: "2028",
    },
  
  ],
  projects: [
    {
      title: "Raflux",
      href: "https://raflux.io/",
      dates: "2025 - Present",
      active: true,
      description:
        "Raflux Super Gacha is a modern web-based gamified raffle platform that combines blockchain payments with collectible rewards in an engaging, interactive experience. The project features a sleek dark-themed interface, a 3D animated gacha machine, multiple entry tiers with USDC payments, real-time prize pool tracking, player statistics, and live global activity feeds. Designed with a strong focus on user experience, responsive design, and immersive visual effects, the platform delivers a seamless and transparent raffle system where users can participate for digital collectibles such as Pokémon TCG packs while enjoying an intuitive, high-performance interface.",
      technologies: ["Solana", "Next.js", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://raflux.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/raflux.png",
    },
    {
      title: "Ronin Staking",
      href: "https://ronin-landing-web.vercel.app/",
      dates: "2025 - Present",
      active: true,
      description:
        "Ronin Staking is a Solana-powered DeFi staking platform designed to deliver sustainable, treasury-backed rewards through a transparent and community-driven ecosystem. Built with a modern, immersive interface inspired by Japanese aesthetics, the platform enables users to stake SOL or ecosystem tokens, earn real protocol-generated yield, and participate in long-term value creation. Leveraging Solana's high-speed, low-cost infrastructure, the application provides seamless wallet integration, secure on-chain transactions, real-time staking analytics, tokenomics insights, and an intuitive user experience that makes decentralized staking accessible for both new and experienced participants.",
      technologies: ["Solana", "Next.js", "Typescript"],
      links: [
        {
          type: "Website",
          href: "https://ronin-landing-web.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ronin.png",
    },
    {
      title: "AlphaMetrics",
      href: "https://alphametrics.gg/",
      dates: "2025 - Present",
      active: true,
      description:
        "AlphaMetrics is a comprehensive cryptocurrency analytics platform built for traders and investors to monitor real-time market conditions across multiple blockchain ecosystems, including Solana, Ethereum, Base, BNB Chain, and Bitcoin. The platform aggregates live market data, open interest, funding rates, liquidation metrics, stablecoin flows, ETF tracking, and advanced on-chain indicators into a clean, high-performance dashboard. Featuring interactive charts, sentiment gauges, macro market analysis, and deep liquidity insights, AlphaMetrics empowers users to identify trends, evaluate market risk, and make data-driven trading decisions through an intuitive, responsive interface optimized for both desktop and mobile experiences.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://alphametrics.gg/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/alpha-metrics.png",
    },
    {
      title: "PitStop UI",
      href: "https://pitstop.design/",
      dates: "2025 - Present",
      active: true,
      description:
        "PitStop UI is a premium React component library designed to help developers and designers build modern, high-performance landing pages with speed and consistency. Featuring a curated collection of responsive UI components, smooth animations, and customizable design blocks, PitStop enables rapid development without sacrificing visual quality. Built with a developer-first approach, the library integrates seamlessly into modern frontend frameworks, providing reusable sections, interactive elements, and production-ready components that accelerate workflow while maintaining clean, scalable code and an exceptional user experience.",
      technologies: ["React", "Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://pitstop.design/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pitstop.png",
    },
    {
      title: "Crypto Crib",
      href: "https://sites-cryptocrib-web.ekk2zh.easypanel.host/",
      dates: "2025 - Present",
      active: true,
      description:
        "Crypto Crib is a modern cryptocurrency media platform that delivers real-time market news, in-depth analysis, and curated insights for investors, traders, and blockchain enthusiasts. Designed with a clean editorial interface and immersive visual aesthetics, the landing page highlights breaking headlines, featured stories, and newsletter subscriptions while providing a seamless reading experience across devices. Built with performance and responsiveness in mind, Crypto Crib combines engaging content presentation, intuitive navigation, and contemporary web design to establish a trusted destination for staying informed about the rapidly evolving crypto ecosystem.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://sites-cryptocrib-web.ekk2zh.easypanel.host/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/crypto-crib.png",
    },
    {
      title: "Koodie",
      href: "https://koodi-one.vercel.app/",
      dates: "2025 - Present",
      active: true,
      description:
        "Koodie is a gamified learning platform designed to make programming education engaging, interactive, and rewarding. Built with a clean, modern interface, the platform combines adaptive learning paths, daily coding challenges, leaderboards, and achievement-based rewards to motivate learners through game-like progression. Interactive exercises, XP systems, streaks, and milestone rewards encourage consistent practice while providing a personalized learning experience that adapts to each user's skill level. Koodie delivers an intuitive and enjoyable environment that helps aspiring developers build real-world coding skills through continuous learning and friendly competition.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://koodi-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/koodie.png",
    },
    {
      title: "Asyah",
      href: "https://asyah.co/#intro",
      dates: "2025 - Present",
      active: true,
      description:
        "Asyah is a modern Islamic fintech platform that bridges Sharia-compliant investment principles with real-world asset-backed opportunities. Designed with a clean, trustworthy interface, the platform enables users to access transparent investment products that adhere to Islamic financial principles while prioritizing security, sustainability, and long-term wealth preservation. Featuring an intuitive onboarding experience, educational content, and streamlined account management, Asyah delivers a seamless digital platform that makes ethical investing more accessible through modern web technologies and a user-centric design.",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://asyah.co/#intro",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/asyah.png",
    },
    {
      title: "Chin",
      href: "https://chin-eight.vercel.app/",
      dates: "June 2024 - Present",
      active: true,
      description:"HospiTwin Lite is an AI-powered Emergency Room Flow Analyzer that processes ER queue videos to detect crowding and patient flow bottlenecks. It delivers actionable insights and operational recommendations through automated video analytics and an interactive chat assistant.",
      technologies: [
        "Python",
        "Next.js",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://chin-eight.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
         {
          type: "Source",
          href: "https://github.com/Candra0x6/Chin.",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hospiTwin.png",
    },
    {
      title: "Carsa",
      href: "https://carsa.vercel.app/",
      dates: "June 2024 - Present",
      active: true,
      description:"Transform ordinary buying into a future-ready digital wealth experience with yield-generating Lokal tokens. Increase your LocalRank and shape stronger, smarter local economies through blockchain-enabled loyalty.",
      technologies: [
        "Rust",
        "Next.js",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://carsa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
         {
          type: "Source",
          href: "https://github.com/Candra0x6/carsa-solana",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Carsa.png",
    },
    {
      title: "Roca",
      href: "https://roca-theta.vercel.app/",
      dates: "June 2024 - Present",
      active: true,
      description:"Experience Decentralized Arisan, a blockchain-powered ROSCA where every transaction is recorded on-chain for complete transparency and trust. Create or join secure rotating savings circles backed by Somnia and ZetaChain.",
      technologies: [
        "Solidity",
        "Next.js",
        "Typescript",
      ],
      links: [
        {
          type: "Website",
          href: "https://roca-theta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
         {
          type: "Source",
          href: "https://github.com/Candra0x6/Roca.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/roca.png",
    },
    {
      title: "Tepay",
      href: "https://y5hnf-uqaaa-aaaai-q3yza-cai.icp0.io/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "Tepay is a simple, fast, and fun way to create payment links using Internet Identity on the Internet Computer. Whether you’re receiving tips, collecting donations, or setting up quick transfers, Tepay makes it effortless and secure.",
      technologies: [
        "Motoko",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://y5hnf-uqaaa-aaaai-q3yza-cai.icp0.io/",
          icon: <Icons.globe className="size-3" />,
        },
         {
          type: "Source",
          href: "https://github.com/Candra0x6/Tepay.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tepay.png",
    },
    {
      title: "Nesify",
      href: "https://nesify.vercel.app/",
      dates: "March 2025 - April 2025",
      active: true,
      description:
        "NFT ticketing platform leverages cutting-edge blockchain technology to provide a secure, transparent, and efficient solution for event organizers and attendees.",
      technologies: [
        "Solidity",
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nesify.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Candra0x6/Nesify.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nesify.png",
    },
    {
      title: "Healty",
      href: "https://healty-five.vercel.app/",
      dates: "November 2024 - December 2024",
      active: true,
      description:
        "Healty is a health and fitness gamify web application with Ai-powered features that help users track their health, set fitness goals, and receive personalized recommendations.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Gemini AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://healty-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Candra0x6/Healty.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/healty.png",
    },
    {
      title: "Livify",
      href: "https://livify.netlify.app/",
      dates: "Dec 2023 - February 2024",
      active: true,
      description:
        "Livify is an open-source e-commerce platform specifically designed for furniture retailers. Built with modern web technologies, it offers a scalable, customizable, and user-friendly. ",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://livify.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Candra0x6/Livify.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/livify.png",
    },
  ],
 
} as const;
