import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
    "java",
    "javascript",
    "typescript",
    "python",
    "html5",
    "css3",
    "react",
    "tailwindcss",
    "bootstrap",
    "vite",
    "spring",
    "springboot",
    "postgresql",
    "mongodb",
    "redis",
    "supabase",
    "git",
    "apachemaven",
    "docker",
    "postman",
];

const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}`
);

export function SkillsIconCloud() {
    return (
        <div className="relative flex items-center justify-center overflow-hidden">
            <IconCloud images={images} />
        </div>
    );
}