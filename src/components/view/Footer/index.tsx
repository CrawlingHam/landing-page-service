import Copyright from "./sections/Copyright";
import Products from "./sections/Products";
import Support from "./sections/Support";
import Company from "./sections/Company";
import Socials from "./sections/Socials";
import { links } from "./links";
import { FooterSectionProps } from "@/src/types";

export default function Footer() {
    const { product, support, company, social } = links;

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <Products products={product} />
                    <Support support={support} />
                    <Company company={company} />
                    <Socials socials={social} />
                </div>
                <Copyright />
            </div>
        </footer>
    );
}
