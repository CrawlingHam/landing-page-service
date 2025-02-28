import { FiMusic, FiZap } from "react-icons/fi";
import { cn } from "@/src/libs/tailwindcss/cn";
import { FeaturesProps } from "@/src/types";
import { motion } from "framer-motion";

export default function MusicPlayerOverview(props: FeaturesProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => props.scrollToSection(e, props.musicRef)}
            className={cn(
                "relative cursor-pointer rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50",
                "dark:border-purple-800 dark:from-purple-900/20 dark:to-pink-900/20",
                "p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
            )}
        >
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={props.featuresOverviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-2xl"></div>
                <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                        <FiMusic className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Universal Music Player</h3>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                            <FiZap className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                            <span>Create cross-platform playlists mixing content from multiple sources</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FiZap className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                            <span>Advanced loop controls for music practice and learning</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FiZap className="mt-1 h-5 w-5 flex-shrink-0 text-purple-500" />
                            <span>Seamless playback continuation across devices</span>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
}
