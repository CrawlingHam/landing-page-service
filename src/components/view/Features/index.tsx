import MusicPlayerOverview from "./MusicPlayerOverview";
import ChatbotOverview from "./ChatbotOverview";
import { FeaturesProps } from "@/src/types";
import { motion } from "framer-motion";

export default function Features(props: FeaturesProps) {
    return (
        <section id="features" ref={props.featuresOverviewRef} className="bg-white px-4 py-24 sm:px-6 lg:px-8 dark:bg-slate-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={props.featuresOverviewInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-7xl"
            >
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">Powerful Features for Modern Digital Life</h2>
                    <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
                        Discover tools that transform how you interact with content and music
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <ChatbotOverview {...props} />
                    <MusicPlayerOverview {...props} />
                </div>
            </motion.div>
        </section>
    );
}
