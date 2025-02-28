import { FooterLink } from "@/src/types";
import Link from "next/link";

const Company = ({ company }: { company: FooterLink[] }) => (
    <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">Company</h3>
        <ul className="mt-4 space-y-4">
            {company.map((link) => (
                <li key={link.name}>
                    <Link
                        href={link.href}
                        className="text-base text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Company;
