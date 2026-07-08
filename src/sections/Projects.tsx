import ProjectCard from "@/components/project-card";

import GithubIcon from "@/assets/icons/GithubIcon";
import { MagicCard } from "@/components/ui/magic-card";

const projects = [
    {
        title: "Task Manager",
        description:
            "Secure full-stack task manager built with Spring Boot, React, and PostgreSQL, featuring JWT authentication, user-scoped CRUD, search, and pagination.",
        imageSrc:
            "/images/task-manager.png",
        demoUrl: "https://task-manager-arkaman.vercel.app",
        frontendUrl: "https://github.com/arkaman/task-manager-client",
        backendUrl: "https://github.com/arkaman/task-manager-api",
    },
    {
        title: "Abohawa",
        description:
            "AI-powered weather dashboard using React, Spring Boot, Redis, OpenWeather, and Gemini for real-time forecasts with contextual AI insights.",
        imageSrc:
            "/images/weather-app.png",
        demoUrl: "https://weather-app-abohawa.vercel.app",
        frontendUrl: "https://github.com/arkaman/weather-app",
        backendUrl: "https://github.com/arkaman/weather-ai-service",
    },
];
export default function Projects() {
    return (
        <section
            id="projects"
            className="relative flex min-h-screen justify-center px-6 py-20 sm:px-8"
        >
            <div className="mx-auto w-full max-w-7xl px-8">

                {/* Heading */}
                <div className="mb-10">
                    <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                        Projects
                    </span>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Featured Work
                    </h2>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>

                {/* GitHub Button */}
                <div className="mt-14 flex justify-center">
                    <MagicCard
                        className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                        gradientFrom="#1e1b4b"
                        gradientTo="#090c9b"
                        gradientColor="#1E1B4B"
                        gradientSize={250}
                    >
                        <a
                            href="https://github.com/arkaman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group inline-flex max-w-full items-center justify-center gap-3
                                rounded-xl
                                px-6 py-3.5
                                text-center font-semibold text-white
                                transition-all duration-300
                                hover:-translate-y-1
                                "
                        >
                            <GithubIcon />
                            More Projects on GitHub
                        </a>
                    </MagicCard>
                </div>

            </div>
        </section>
    );
}