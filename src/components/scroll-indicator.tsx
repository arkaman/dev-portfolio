import { motion } from "motion/react";

export default function ScrollIndicator() {
    return (
        <motion.div
            className="
                absolute
                bottom-8
                left-1/2
                -translate-x-1/2
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                backdrop-blur-xl
                text-sm
                text-neutral-300
            "
            animate={{ y: [0, 8, 0] }}
            transition={{
                repeat: Infinity,
                duration: 2,
            }}
        >
            ↓ Scroll
        </motion.div>
    );
}