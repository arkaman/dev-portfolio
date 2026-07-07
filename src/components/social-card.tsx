import type { ReactNode } from "react";

type SocialCardProps = {
    href: string;
    title: string;
    subtitle: string;
    children: ReactNode;
    download?: boolean;
};

export default function SocialCard({
    href,
    title,
    subtitle,
    children,
    download = false,
}: SocialCardProps) {
    return (
        <a
            href={href}
            target={download ? "_self" : "_blank"}
            rel={download ? undefined : "noopener noreferrer"}
            className="
                group
                flex flex-col items-center gap-3
                rounded-2xl
                border border-white/10
                bg-white/5
                p-5
                text-neutral-300
                backdrop-blur-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-violet-500/50
                hover:bg-white/10
                hover:text-white
            "
        >
            <div className="h-7 w-7 transition-transform duration-300 group-hover:scale-110">
                {children}
            </div>

            <span className="font-semibold">
                {title}
            </span>

            <span className="text-xs text-neutral-500 transition-colors group-hover:text-neutral-300">
                {subtitle}
            </span>
        </a>
    );
}