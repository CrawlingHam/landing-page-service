import { FooterLink } from "@/src/types";
import Link from "next/link";

const Socials = ({ socials }: { socials: FooterLink[] }) => (
    <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">Connect</h3>
        <ul className="mt-4 space-y-4">
            {socials.map((social) => (
                <li key={social.name}>
                    <Link
                        href={social.href}
                        className="text-base text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.icon && <social.icon className="h-5 w-5" />}
                        {social.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Socials;
