import { cn } from "@/src/libs/tailwindcss/cn";
import { StatsProps } from "@/src/types";
import { motion } from "framer-motion";

type StatsItem = {
    title: string;
    value: string;
};

const statsItems: StatsItem[] = [
    {
        title: "Active Users",
        value: "100K+",
    },
    {
        title: "AI Conversations",
        value: "1M+",
    },
    {
        title: "Songs",
        value: "500K+",
    },
    {
        title: "Support",
        value: "24/7",
    },
];

const statsItemColors = [
    "bg-gradient-to-r from-blue-600 to-cyan-500",
    "bg-gradient-to-r from-purple-600 to-pink-500",
    "bg-gradient-to-r from-orange-600 to-red-500",
    "bg-gradient-to-r from-green-600 to-emerald-500",
];

export default function Stats({ statsRef, statsInView }: StatsProps) {
    return (
        <section ref={statsRef} className="bg-gradient-to-b from-transparent to-white py-20 dark:to-slate-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {statsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="rounded-xl bg-white/50 p-6 text-center backdrop-blur-sm dark:bg-slate-800/50"
                        >
                            <div className={cn(" bg-clip-text text-3xl font-bold text-transparent", statsItemColors[index])}>{item.value}</div>
                            <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.title}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
