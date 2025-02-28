import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import { FooterLinks } from "@/src/types";

export const links: FooterLinks = {
    product: [
        { name: "Features", href: "#features" },
        { name: "AI Assistant", href: "/chatbot" },
        { name: "Music Player", href: "/player" },
        { name: "Dashboard", href: "/dashboard" },
    ],
    support: [
        { name: "Documentation", href: "/docs" },
        { name: "API", href: "/api-docs" },
        { name: "Status", href: "/status" },
        { name: "Contact", href: "/contact" },
    ],
    company: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Privacy", href: "/privacy" },
    ],
    social: [
        { name: "GitHub", href: "https://github.com", icon: FiGithub },
        { name: "Twitter", href: "https://twitter.com", icon: FiTwitter },
        { name: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
        { name: "Email", href: "mailto:contact@example.com", icon: FiMail },
    ],
};
