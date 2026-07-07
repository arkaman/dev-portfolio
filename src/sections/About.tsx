import { SkillsIconCloud } from "@/components/skills-icon-cloud";
import SkillCard from "@/components/skill-card";

export default function About() {
    return (
        <section
            id="about"
            className="relative flex min-h-screen items-center justify-center py-20"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-8">

                {/* Top */}
                <div className="max-w-8xl">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white">
                        About Me
                    </h1>

                    <p className="text-lg leading-8 text-neutral-300">
                        I'm a full stack developer with a strong focus on Java and the Spring ecosystem, building secure, scalable web applications from backend APIs to modern React frontends. I enjoy designing systems that are reliable, performant, and intuitive, with a growing interest in AI-powered applications and developer tooling.
                    </p>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-12 md:flex-row md:items-center">

                    {/* Left - Skill Cards */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <SkillCard
                                title="Languages"
                                skills={["Java", "TypeScript", "Python", "JavaScript"]}
                            />

                            <SkillCard
                                title="Frontend"
                                skills={["React", "Tailwind CSS", "HTML", "CSS"]}
                            />

                            <SkillCard
                                title="Backend"
                                skills={["Spring Boot", "REST APIs", "Spring Security"]}
                            />

                            <SkillCard
                                title="Database"
                                skills={["PostgreSQL", "MongoDB", "Redis"]}
                            />
                        </div>
                    </div>

                    {/* Right - Icon Cloud */}
                    <div className="flex flex-1 items-center justify-center">
                        <SkillsIconCloud />
                    </div>

                </div>
            </div>
        </section>
    );
}