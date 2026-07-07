import ProjectCard from "@/components/project-card";

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
            className="relative flex min-h-screen justify-center"
        >
            <div className="mx-auto w-full max-w-7xl px-8">
                <h1 className="text-4xl font-bold text-white">
                    My Projects
                </h1>

                <div className="grid gap-10 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}