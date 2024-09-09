import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rafi Rasheed",
  initials: "T C",
  url: "https://rafirasheed.co",
  location: "Kerala, IN",
  locationLink: "https://www.google.com/maps/place/kerala",
  description: "I love to build solutions using codes and wires.",
  summary:
    "I'm a passionate software engineer with 2+ Years of Experience. Graduated from CUSAT and currenlty working as a Software engineer at Neewee Analytics. ",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "C++",
    "Bash",
    "Linux",
    "IoT",
    "Arduino",
    "Raspberry Pi",
    "freeRTOS",
    "ESP-IDF",
    "GCP",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mail@rafirasheed.co",
    tel: "+919747165032",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rafitc",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rafitc",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/iamRafiRasheed",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mail@rafirasheed.co",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Neewee Analytics",
      href: "https://neewee.ai",
      badges: [],
      location: "Bangalore, IN",
      title: "SDE-1",
      logoUrl: "/neewee-round.jpeg",
      start: "June 2022",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. \
        Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and \
        Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "MakerGram",
      badges: [],
      href: "https://makergram.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/mg-logo.png",
      start: "January 2020",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "CUSAT",
      href: "https://cusat.ac.in",
      degree: "B.Tech in Electronics and Communication",
      logoUrl: "/cusat-logo.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
