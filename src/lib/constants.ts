// App constants

export const SITE_CONFIG = {
  name: "Zeeshan Shakeel",
  description:
    "BS Computer Science Punjab University | Full-stack Developer | Community Builder | AI & Web Engineer",
  url: "https://zeeshanShakeel.com", 
  ogImage: "/images/Zeeshan/og-image.png",
  links: {
    email: "zeeshankhan.workmail@gmail.com",
    github: "https://github.com/zeeshan-Shakeel/",
    linkedin: "www.linkedin.com/in/zeeshan-shakeel-ba8069300",
    phone: "+92 3244623044"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/#achievements" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};
