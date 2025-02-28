import { HeroProps } from "@/src/types";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero({ heroRef, scrollToSection, featuresOverviewRef }: HeroProps) {
    return (
        <section ref={heroRef} className="relative flex min-h-screen items-center justify-center">
            <div className="bg-grid-slate-200 dark:bg-grid-slate-800 absolute inset-0 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
            <div className="absolute inset-0 flex w-full items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <HeroHeader />
                        <HeroTitle />
                        <HeroDescription />
                        <HeroCallToAction scrollToSection={scrollToSection} featuresOverviewRef={featuresOverviewRef} />
                    </div>
                </div>
            </div>

            <HeroScrollIndicator />
        </section>
    );
}

const HeroHeader = () => (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Introducing Next-Gen Digital Experience
        </span>
    </motion.div>
);

const HeroDescription = () => (
    <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-6 max-w-3xl text-xl text-slate-600 dark:text-slate-300"
    >
        Experience the next level of digital interaction with AI-powered chat, universal music playback, and intelligent content management.
    </motion.p>
);

const HeroCallToAction = ({ scrollToSection, featuresOverviewRef }: Omit<HeroProps, "heroRef">) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
    >
        <Link
            href="/login"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-medium text-white 
                                            shadow-lg transition-all hover:from-blue-700 hover:to-cyan-600 hover:shadow-xl"
        >
            Get Started Free
        </Link>
        <button
            onClick={(e) => scrollToSection(e, featuresOverviewRef)}
            className="rounded-lg border border-slate-200 bg-white px-8 py-4 font-medium 
                                            text-slate-900 shadow-lg transition-all hover:bg-slate-50 hover:shadow-xl dark:border-slate-700
                                            dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
        >
            Explore Features
        </button>
    </motion.div>
);

const HeroTitle = () => (
    <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-7xl"
    >
        Your Digital World, <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text">Enhanced</span>
    </motion.h1>
);

const HeroScrollIndicator = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: 1,
            ease: "easeOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
        <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-500 dark:text-slate-400">Scroll to explore</span>
            <div className="flex h-10 w-6 items-start rounded-full border-2 border-slate-300 p-1 dark:border-slate-600">
                <motion.div
                    animate={{
                        y: [0, 16, 0],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "loop",
                    }}
                    className="h-2 w-full rounded-full bg-slate-300 dark:bg-slate-600"
                />
            </div>
        </div>
    </motion.div>
);
