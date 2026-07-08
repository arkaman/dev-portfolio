import { MagicCard } from "@/components/ui/magic-card";

interface SkillCardProps {
    title: string;
    skills: string[];
}

export default function SkillCard({
    title,
    skills,
}: SkillCardProps) {
    return (
        <MagicCard
            className="
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-sm
                transition-transform duration-300
                hover:-translate-y-1
            "
            gradientFrom="#1e1b4b"
            gradientTo="#090c9b"
            gradientColor="#1E1B4B"
            gradientSize={250}
        >
            <div className="rounded-2xl p-5">
                <h3 className="mb-4 text-lg font-semibold text-white">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="
                                rounded-full
                                border border-white/10
                                bg-white/5
                                px-3 py-1
                                text-sm font-medium
                                text-neutral-300
                                transition-all duration-300
                                hover:border-primary/50
                                hover:bg-primary/10
                                hover:text-white
                            "
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </MagicCard>
    );
}