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
            className="h-full w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
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
                    flex
                    h-full
                    w-full
                    flex-row
                    items-center
                    justify-center
                    gap-4
                    rounded-2xl
                    p-4
                    text-neutral-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:text-white

                    lg:flex-col
                    lg:justify-center
                    lg:gap-2
                    lg:p-5
                    lg:text-center
                "
            >
                <div
                    className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        transition-transform
                        duration-300
                        group-hover:scale-110

                        lg:h-7
                        lg:w-7
                    "
                >
                    {children}
                </div>

                <div className="flex flex-col text-left lg:text-center">
                    <span className="text-sm font-semibold sm:text-base">
                        {title}
                    </span>

                    <span
                        className="
                            text-[11px]
                            text-neutral-500
                            transition-colors
                            group-hover:text-neutral-300
                            sm:text-xs
                        "
                    >
                        {subtitle}
                    </span>
                </div>
            </a>
        </MagicCard>
    );
}