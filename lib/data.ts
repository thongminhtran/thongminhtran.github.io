export const profile = {
  name: "Tim Tran",
  fullName: "Minh Thong Tran",
  title: "Full-Stack Developer",
  tagline:
    "Building production-grade mobile and web apps with React Native, Next.js, and .NET.",
  location: "Calgary, Alberta, Canada",
  email: "tminhthong1999@gmail.com",
  phone: "+1 825 521 1633",
  resumeUrl: "/Tim_Tran_Resume.pdf",
  socials: {
    github: "https://github.com/thongminhtran",
    linkedin: "https://linkedin.com/in/thongminhtran/",
    website: "https://thongminhtran.github.io",
  },
  summary:
    "Full-stack developer with production experience across React Native mobile, ReactJS / Next.js web, and .NET / Node.js backends. I ship cross-platform apps to the App Store and Google Play, architect Firebase Cloud Functions at scale, and turn Figma prototypes into accessible, high-performance interfaces.",
};

export type Experience = {
  company: string;
  companyUrl?: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Tekarra Project Services",
    companyUrl: "https://tekarraprojects.com",
    role: "Software Developer",
    location: "Calgary, AB",
    period: "Jan 2024 — Present",
    current: true,
    highlights: [
      "Built and shipped a cross-platform social gifting app with React Native, TypeScript, and Expo SDK — published to the App Store and Google Play.",
      "Architected 120+ Firebase Cloud Functions (Node.js 20, TypeScript) handling auth, payments, notifications, and real-time sync across Firestore, Storage, and Firebase Auth.",
      "Integrated Elavon payment processing with tokenization and gift card fulfillment, plus real-time chat and activity feeds via GetStream.io.",
      "Designed a scalable frontend with Zustand, multi-stack React Navigation, and 10+ context providers for real-time data flow.",
      "Configured EAS Build with multi-environment profiles, Sentry error monitoring, and Expo OTA updates for rapid production releases.",
    ],
    stack: [
      "React Native",
      "TypeScript",
      "Expo",
      "Firebase",
      "Node.js",
      "Zustand",
      "Sentry",
      "GetStream.io",
    ],
  },
  {
    company: "Allied Solutions Global",
    companyUrl: "https://alliedsolutionsglobal.com",
    role: "Full-Stack Developer (Part-time, Remote)",
    location: "Singapore (Remote)",
    period: "Nov 2025 — Feb 2026",
    highlights: [
      "Developed Good Catch Pro, a cross-platform safety reporting app using React Native (Expo), Redux, and a .NET 8 backend with EF Core and SQL Server — published to the App Store and Google Play.",
      "Implemented end-to-end push notifications (Expo Push API + Hangfire background jobs) and built an admin dashboard with Next.js, Material UI, and Tailwind CSS.",
      "Built custom UI components and batch execution screens for a Manufacturing Execution System (MES) using ASP.NET Web Forms, jQuery, Bootstrap 5, and TrakSYS / ETS in a GMP environment.",
      "Managed CI/CD and deployments via Azure DevOps, EAS Build/Submit, and IIS.",
    ],
    stack: [
      "React Native",
      "Next.js",
      ".NET 8",
      "C#",
      "EF Core",
      "SQL Server",
      "Hangfire",
      "Azure DevOps",
    ],
  },
  {
    company: "Bombardier Aerospace",
    companyUrl: "https://bombardier.com",
    role: "Frontend Developer (Co-op)",
    location: "Montreal, QC",
    period: "Jan 2023 — Dec 2023",
    highlights: [
      "Delivered aircraft data visualization dashboards using React (v16 → 18), JavaScript, Material UI, and Mapbox API.",
      "Integrated Node.js REST APIs and optimized data handling, cutting page load times by 15%; managed client state with Redux.",
      "Authored 100+ unit tests (React Testing Library + Jest) and Playwright e2e suites, reaching 95% coverage and reducing manual QA effort.",
      "Partnered with UX to convert Figma prototypes into accessible, responsive web features.",
    ],
    stack: [
      "React",
      "Material UI",
      "Mapbox",
      "Node.js",
      "Redux",
      "Jest",
      "Playwright",
      "Figma",
    ],
  },
  {
    company: "CGI Canada",
    companyUrl: "https://www.cgi.com",
    role: "Frontend Developer (Co-op)",
    location: "Montreal, QC",
    period: "Jan 2022 — May 2022",
    highlights: [
      "Optimized VIA Rail Canada's booking front-end in Angular 10 (TypeScript), reducing load times by 15%.",
      "Designed and deployed an internal HR system with Java 17 (Spring Boot 2.3), improving operational efficiency by 20%.",
      "Containerized services with Docker for consistent builds and deployments.",
    ],
    stack: ["Angular", "TypeScript", "Java", "Spring Boot", "Docker"],
  },
  {
    company: "Vanntechs Web Studio",
    companyUrl: "https://vanntechs.com",
    role: "WordPress Developer (Part-time)",
    location: "Montreal, QC",
    period: "May 2020 — Apr 2021",
    highlights: [
      "Delivered multiple client sites using WordPress and WooCommerce (e.g. darchisystems.com, huongxuaanjou.com).",
      "Coordinated with international teams (India, Philippines, Dominican Republic) and managed timelines across concurrent projects.",
    ],
    stack: ["WordPress", "WooCommerce", "PHP", "JavaScript"],
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "C#", "Python", "SQL"],
  },
  {
    category: "Mobile & Web Frontend",
    skills: [
      "React Native (Expo)",
      "React",
      "Next.js",
      "Redux",
      "Zustand",
      "React Navigation",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap 5",
      "Angular",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      ".NET 8 / ASP.NET Core",
      "Entity Framework Core",
      "Hangfire",
      "Firebase Cloud Functions",
      "REST APIs",
      "PostgreSQL",
      "SQL Server",
      "MongoDB",
      "Firestore",
    ],
  },
  {
    category: "Testing",
    skills: [
      "Jest",
      "React Testing Library",
      "React Native Testing Library",
      "Playwright (E2E)",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Firebase (Auth, Firestore, Functions, Storage)",
      "Azure DevOps",
      "EAS (Expo)",
      "IIS",
      "Sentry",
      "Docker",
      "CI/CD",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git (GitHub, Bitbucket, Azure Repos)",
      "ESLint / Prettier",
      "JIRA",
      "Agile / Scrum",
      "Figma",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  image?: string;
  imageAlt?: string;
  imagePosition?: "center" | "top" | "bottom" | "contain";
  /** "logo": logo on branded gradient. "photo": full-bleed photo. */
  presentation?: "logo" | "photo";
  /** CSS background for the logo panel (used when presentation === "logo"). */
  panelBackground?: string;
  accent: "primary" | "violet" | "cyan" | "amber" | "rose";
};

export const projects: Project[] = [
  {
    title: "VUG Social — Social Gifting App",
    description:
      "Cross-platform social gifting platform built for GiveVUGS Corp. Shipped to the App Store and Google Play, powered by 120+ Firebase Cloud Functions for auth, payments, notifications, and real-time sync.",
    highlights: [
      "Elavon payments with tokenization & gift card fulfillment",
      "Real-time chat and activity feeds via GetStream.io",
      "Multi-environment EAS Build + Sentry + Expo OTA",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Zustand"],
    image: "/projects/vug-logo.png",
    imageAlt: "VUG Social brand logo",
    presentation: "logo",
    panelBackground:
      "linear-gradient(135deg, #fde7f3 0%, #ffe6d4 45%, #d8efff 100%)",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/ca/app/vug-social/id1566899770",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.givevugs.vug2025",
      },
      {
        label: "givevugs.com",
        href: "https://givevugs.com",
      },
    ],
    accent: "primary",
  },
  {
    title: "Good Catch Pro — Allied Solutions Global",
    description:
      "Cross-platform safety reporting app and admin dashboard. React Native frontend with a .NET 8 + EF Core + SQL Server backend, plus Hangfire-driven push notifications.",
    highlights: [
      "End-to-end push notifications via Expo Push API + Hangfire",
      "Admin dashboard with Next.js, Material UI, Tailwind CSS",
      "Azure DevOps CI/CD, EAS Build/Submit, IIS deployment",
    ],
    stack: ["React Native", "Next.js", ".NET 8", "SQL Server", "Hangfire"],
    image: "/projects/goodcatch-logo.png",
    imageAlt: "Good Catch Pro brand logo",
    presentation: "logo",
    panelBackground:
      "linear-gradient(135deg, #fff5e0 0%, #ffe2c2 50%, #ffd1a8 100%)",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/good-catch-pro/id1467733489",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.alliedsolutions.goodcatchpro",
      },
      {
        label: "alliedsolutionsglobal.com",
        href: "https://alliedsolutionsglobal.com",
      },
    ],
    accent: "violet",
  },
  {
    title: "myMaintenance — Bombardier",
    description:
      "Web app for Bombardier's Smart Link Plus connected aircraft program — pilots and maintenance crews access live aircraft data, predictive prognostics, and event analytics for Global and Challenger fleets.",
    highlights: [
      "React 18 + MUI dashboards with ApexCharts and visx for predictive prognostics",
      "Mapbox GL flight visualizations and React PDF report exports",
      "100+ unit tests (Jest + RTL) and Playwright E2E — 95% coverage",
    ],
    stack: [
      "React 18",
      "MUI",
      "Mapbox GL",
      "ApexCharts",
      "visx",
      "React PDF",
      "Jest",
      "Playwright",
    ],
    image: "/projects/bombardier-prognostics.png",
    imageAlt: "Prognostics survival curve from the Bombardier myMaintenance app",
    imagePosition: "center",
    presentation: "photo",
    links: [
      {
        label: "myMaintenance product page",
        href: "https://bombardier.com/en/mymaintenance-app",
      },
      {
        label: "Smart Link Plus",
        href: "https://bombardier.com/en/support/enhance-your-aircraft/smart-link-plus",
      },
    ],
    accent: "cyan",
  },
  {
    title: "VIA Rail Booking Optimization — CGI",
    description:
      "Performance and UX improvements to VIA Rail Canada's booking front-end. Reduced load times by 15% on a high-traffic Angular application.",
    highlights: [
      "Angular 10 (TypeScript) booking flow optimization",
      "Internal HR system in Java 17 / Spring Boot 2.3",
      "Dockerized builds for consistent deployments",
    ],
    stack: ["Angular", "TypeScript", "Java", "Spring Boot", "Docker"],
    image: "/projects/viarail.jpg",
    imageAlt: "VIA Rail Canada train",
    imagePosition: "center",
    presentation: "photo",
    links: [
      {
        label: "viarail.ca",
        href: "https://www.viarail.ca/en",
      },
      {
        label: "cgi.com",
        href: "https://www.cgi.com",
      },
    ],
    accent: "amber",
  },
];

export type Education = {
  degree: string;
  school: string;
  location: string;
  year: string;
  note?: string;
  url?: string;
};

export const educations: Education[] = [
  {
    degree: "Bachelor of Computer Science — General Program (Co-op)",
    school: "Concordia University",
    location: "Montreal, QC, Canada",
    year: "2024",
    url: "https://www.concordia.ca",
  },
  {
    degree: "High School Diploma — Specialized Mathematics",
    school: "High School for the Gifted, VNU-HCM (PTNK)",
    location: "Ho Chi Minh City, Vietnam",
    year: "2014 – 2017",
    note: "Top-ranked gifted high school in HCMC, affiliated with Vietnam National University.",
    url: "https://ptnk.edu.vn/",
  },
];
