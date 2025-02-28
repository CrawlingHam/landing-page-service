import { FooterLink } from "@/src/types";
import Link from "next/link";

const Products = ({ products }: { products: FooterLink[] }) => (
    <div>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wider uppercase">Product</h3>
        <ul className="mt-4 space-y-4">
            {products.map((product) => (
                <li key={product.name}>
                    <Link
                        href={product.href}
                        className="text-base text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        {product.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Products;
