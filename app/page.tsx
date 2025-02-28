"use client";

import { useRef, lazy } from "react";
import { HeroProps } from "@/src/types";
import { useInView } from "framer-motion";
import Hero from "@/src/components/view/Hero";

const Features = lazy(() => import("@/src/components/view/Features"));
const Stats = lazy(() => import("@/src/components/view/Stats"));
const Footer = lazy(() => import("@/src/components/view/Footer"));

export default function Home() {
    const aiRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const statsRef = useRef<HTMLElement>(null);
    const musicRef = useRef<HTMLElement>(null);
    const featuresOverviewRef = useRef<HTMLElement>(null);
    const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
    const featuresOverviewInView = useInView(featuresOverviewRef, { once: true, amount: 0.3 });

    const scrollToSection: HeroProps["scrollToSection"] = (e, ref) => {
        e.preventDefault();
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
                <Hero heroRef={heroRef} scrollToSection={scrollToSection} featuresOverviewRef={featuresOverviewRef} />

                <Stats statsRef={statsRef} statsInView={statsInView} />

                <Features
                    featuresOverviewInView={featuresOverviewInView}
                    featuresOverviewRef={featuresOverviewRef}
                    scrollToSection={scrollToSection}
                    musicRef={musicRef}
                    aiRef={aiRef}
                />
            </div>

            <Footer />
        </main>
    );
}
