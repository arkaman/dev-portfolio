import { SkillsIconCloud } from "@/components/skills-icon-cloud";
import SkillCard from "@/components/skill-card";

export default function About() {
    return (
        <section
            id="about"
            className="relative flex min-h-screen items-center justify-center"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-20 px-8 md:flex-row">
                {/* Left */}
                <div className="max-w-2xl flex-1 space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        About Me
                    </h1>

                    <p className="leading-8 text-lg text-neutral-300">
                        I'm a full stack developer with a strong focus on Java and the Spring ecosystem, building secure, scalable web applications from backend APIs to modern React frontends. I enjoy designing systems that are reliable, performant, and intuitive, with a growing interest in AI-powered applications and developer tooling.
                    </p>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
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

                {/* Right */}
                <div className="hidden flex-1 items-center justify-center md:flex">
                    <SkillsIconCloud />
                </div>
            </div>
        </section>
    );
}