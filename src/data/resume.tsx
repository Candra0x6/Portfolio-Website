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
      company: "Monklabs",
      href: "https://monklabs.io/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/monklabs.jpg",
      start: "January 2026",
      end: "Present",
      description:
        "Build and ship frontend experiences for Web3 and Web2 products using modern React and TypeScript stacks. Own responsive UI, wallet-connected flows, and high-performance landing and app interfaces that connect users to decentralized and traditional platforms.",
    },
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
        "Raflux Super Gacha is a Solana-based gamified raffle platform with USDC payments, a 3D gacha machine, real-time prize pools, and live activity feeds for digital collectible rewards.",
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
        "Ronin Staking is a Solana DeFi staking platform with treasury-backed rewards, wallet integration, real-time staking analytics, and a Japanese-inspired interface for staking SOL and ecosystem tokens.",
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
        "AlphaMetrics is a multi-chain crypto analytics dashboard that tracks live market data, funding rates, liquidations, ETF flows, and on-chain indicators for data-driven trading decisions.",
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
        "PitStop UI is a premium React component library of responsive sections, animations, and design blocks for building modern, high-performance landing pages faster.",
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
        "Crypto Crib is a cryptocurrency media landing page with breaking headlines, featured stories, and newsletter signup in a clean editorial layout for staying informed on market news.",
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
        "Koodie is a gamified programming learning platform with adaptive paths, daily challenges, leaderboards, and XP rewards that help learners build coding skills through competition.",
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
        "Asyah is an Islamic fintech platform for Sharia-compliant, asset-backed investments with transparent products, educational content, and a clean onboarding experience.",
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
