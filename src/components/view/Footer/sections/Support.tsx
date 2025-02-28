import { FooterLink } from "@/src/types";
import Link from "next/link";

const Support = ({ support }: { support: FooterLink[] }) => (
    <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">Support</h3>
        <ul className="mt-4 space-y-4">
            {support.map((support) => (
                <li key={support.name}>
                    <Link
                        href={support.href}
                        className="text-base text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        {support.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Support;
