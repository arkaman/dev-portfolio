import { motion } from "motion/react";

interface SkillCardProps {
    title: string;
    skills: string[];
}

export default function SkillCard({
    title,
    skills,
}: SkillCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
        >
            <h3 className="mb-4 text-lg font-semibold text-white">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-neutral-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}