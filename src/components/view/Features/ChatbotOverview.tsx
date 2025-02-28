import { FiMessageSquare, FiZap } from "react-icons/fi";
import { FeaturesProps } from "@/src/types";
import { motion } from "framer-motion";

export default function ChatbotOverview(props: FeaturesProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => props.scrollToSection(e, props.aiRef)}
            className="relative cursor-pointer rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 
                                    p-8 shadow-xl transition-all duration-300 hover:shadow-2xl 
                                    dark:border-blue-800 dark:from-blue-900/20 dark:to-cyan-900/20"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={props.featuresOverviewInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-2xl"></div>
                <div className="relative">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                        <FiMessageSquare className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">AI Knowledge Assistant</h3>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                            <FiZap className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                            <span>Process and understand content from any webpage or document instantly</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FiZap className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                            <span>Ask questions about multiple sources simultaneously</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <FiZap className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                            <span>Get accurate answers with direct references to source material</span>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
}
