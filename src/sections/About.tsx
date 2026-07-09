import { SkillsIconCloud } from "@/components/skills-icon-cloud";
import SkillCard from "@/components/skill-card";

export default function About() {
    return (
        <section
            id="about"
            className="relative flex min-h-screen items-center justify-center px-6 py-20 sm:px-8"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-8">

                {/* Top */}
                <div>
                    <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                        About
                    </span>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Who I Am
                    </h2>

                    <p className="mt-8 max-w-5xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
                        I'm a full stack developer with a strong focus on Java and the Spring ecosystem, building secure, scalable web applications from backend APIs to modern React frontends. I enjoy designing systems that are reliable, performant, and intuitive, with a growing interest in AI-powered applications and developer tooling.
                    </p>
                </div>

                {/* Bottom */}
                <div className="flex flex-col gap-12 lg:flex-row md:items-center">

                    {/* Left - Skill Cards */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                    <div className="order-first flex flex-1 items-center justify-center lg:order-last">
                        <div className="scale-75 sm:scale-90 lg:scale-100">
                            <SkillsIconCloud />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}