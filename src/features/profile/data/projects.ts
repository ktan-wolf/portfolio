import { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "web3terminal",
    title: "Web3Terminal",
    time: "11.2025 - present",
    link: "https://w3terminal.vercel.app/",
    github: "https://github.com/ktan-wolf/W3Terminal_server",
    tags: [
      "Solana",
      "Rust",
      "WebSockets",
      "Next.js",
      "Axum",
    ],
    description: "W3:Terminal Engine is a high-frequency, quantum-styled cryptocurrency arbitrage terminal. \n- Multi-Exchange Arbitrage Engine: Engineered a multi-threaded Rust backend (using Tokio and Axum) that concurrently ingests WebSocket streams from CEXs (Binance) and DEXs (Jupiter/Raydium) to identify price discrepancies in real-time. \n- Reactive Terminal Interface: A high-performance Next.js frontend designed to render high-frequency market updates without UI freezing, utilizing optimistic updates for a seamless institutional- grade trading experience. \n- Hybrid Data Normalization: Implemented an efficient adapter layer that normalizes disparate off-chain API data and on-chain RPC responses into a unified format, enabling instant comparison of asset prices across ecosystems."
  },
  {
    id: "aethernet depin",
    title: "AetherNet DePin",
    time: "08.2025 - present",
    link: "https://aethernet-depin.vercel.app/",
    github: "https://github.com/ktan-wolf/AetherNet-DePIN",
    tags: [
      "Solana/Rust",
      "Anchor",
      "DeFi",
      "Next.js",
      "PostgreSQL",
      "Docker"
    ],
    description: "AetherNet is a decentralized physical infrastructure network (DePIN) project built on the Solana blockchain. \n- On-Chain Node Registry: Users can register and deregister their physical devices on the Solana blockchain. \n- SPL Token Staking: Node registration requires staking a specific SPL token, which is returned upon deregistration. \n- Full User Lifecycle: Complete flow for users to register, view their registered node, and deregister."
  },
  {
    id: "yap",
    title: "YAP",
    time: "01.2025 - present",
    link: "https://yap-five.vercel.app/",
    github: "https://github.com/ktan-wolf/YAP",
    tags: [
      "Company Project",
      "React ts",
      "Tailwindcss",
      "MERN stack"
    ],
    description: "social media app \n- Post creation with text and image uploads. \n- Like, unlike, and comment on posts. \n- Real-time notifications for likes, comments, and follows. \n- Delete own posts only (with authorization check)."
  },
  {
    id: "walletApp",
    title: "Wallet-App",
    time: "03.2025",
    link: "https://wallet-app-user-app-theta.vercel.app",
    github: "https://github.com/ktan-wolf/wallet-app",
    tags: [
      "Major Project",
      "Open Source",
      "Turborepo",
      "Next.js 15",
      "Vercel"
    ],
    description:
      "Wallet App , let the user transfer the money from banks.\n- Transfer the money between peer users.",
  },
  {
    id: "rust cli terminal",
    title: "Rust CLI Terminal",
    time: "08.2025 - present",
    link: "https://github.com/ktan-wolf/Rust-Terminal",
    github: "https://github.com/ktan-wolf/Rust-Terminal",
    tags: [
      "Rust CLI tool for shell",
      "Open Source",
    ],
    description:
      "A fully functional mini command-line shell written in Rust, featuring support for: \n- Command execution \n- Directory navigation (cd) \n- Output redirection (>) \n- Piping between commands (|) \n- Built-in exit command to gracefully quit"
  },
  {
    id: "studyNotion",
    title: "StudyNotion",
    time: "11.2024",
    link: "https://study-notion-phi-coral.vercel.app/",
    github: "https://github.com/ktan-wolf/StudyNotion",
    tags: [
      "University Project",
    ],
    description:
      "- Course: Distributed Applications",
  },
  {
    id: "noteSave",
    title: "Note-Save-App",
    time: "07.2024",
    link: "https://note-saver-app-seven.vercel.app/",
    github: "https://github.com/ktan-wolf/Note-Saver-App",
    tags: [
      "Self-learning Project",
      "Open Source",
      "React"
    ],
    description:
      "Note saving app.\n- let you create read update and delete the notes",
  },
];
