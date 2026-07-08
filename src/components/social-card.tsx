import type { ReactNode } from "react";

import { MagicCard } from "@/components/ui/magic-card";

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
        <MagicCard
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            gradientFrom="#1e1b4b"
            gradientTo="#090c9b"
            gradientColor="#1E1B4B"
            gradientSize={250}
        >
            <a
                href={href}
                target={download ? "_self" : "_blank"}
                rel={download ? undefined : "noopener noreferrer"}
                className="
                    group
                    flex h-full w-full flex-col items-center gap-3
                    rounded-2xl
                    p-5
                    text-neutral-300
                    transition-all duration-300
                    hover:-translate-y-1
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
        </MagicCard>
    );
}