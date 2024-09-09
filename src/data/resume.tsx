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
        "I have developed a range of Python-based applications and algorithms that enhance operational efficiency across \
        various industries. My work includes creating digital tracking systems for resource utilization, reducing maintenance \
        downtime by 30-50% through optimized algorithms, and improving production scheduling for enterprise operations. \
        I engineered a monitoring service using Server-Sent Events (SSE) in FastAPI for real-time log aggregation and debugging, \
        and designed Linux services and automation scripts to streamline data transfer from files and IoT devices. Additionally, \
        I developed a USB data aggregation device with ESP32-S3, achieving a 70% cost reduction, and created methodologies that \
        cut hardware testing cycle time by 50%, demonstrating a commitment to innovation and operational excellence.",
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
        "Since my internship, I have been actively involved with MakerGram, an open community for makers and hardware enthusiasts\
         to grow and innovate. At MakerGram, we run monthly meetups to discuss the latest in technology, conduct hackathons, and \
         provide mentorship to support various hardware projects. As part of the tech team, I have been responsible for \
         handling technical aspects and am currently focused on developing hardware libraries for our upcoming project, Logram.",
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
      title: "Automated Dino game using arduino",
      href: "https://makergram.com/blog/automated-dino-game-using-arduino/",
      dates: "April 2020 - Present",
      active: true,
      description: "Simple fun project to automate Chrome Dino game .",
      technologies: ["Python", "Arduino"],
      links: [
        {
          type: "Website",
          href: "https://makergram.com/blog/automated-dino-game-using-arduino/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/rafitc/arduDino",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "COMING SOON",
      dates: "November 23rd - 25th, 2018",
      location: "COMING SOON",
      description: "COMING SOON",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
