"use client";

import {
    CardBody,
    CardContainer,
    CardItem,
} from "@/components/ui/3d-card";
import { ExternalLink, CodeXml } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    demoUrl: string;
    frontendUrl: string;
    backendUrl: string;
}

export default function ProjectCard({
    title,
    description,
    imageSrc,
    demoUrl,
    frontendUrl,
    backendUrl,
}: ProjectCardProps) {
    return (
        <CardContainer className="w-full inter-var">
            <CardBody
                className="
                    group/card
                    relative
                    h-auto
                    w-full
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-4
                    sm:p-6
                    text-card-foreground
                    transition-all
                    duration-300
                    hover:shadow-2xl
                    hover:shadow-primary/20
                "
            >
                <CardItem
                    translateZ="50"
                    className="w-full text-center text-xl font-bold sm:text-left sm:text-2xl"
                >
                    {title}
                </CardItem>

                <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-3 text-sm leading-6 text-muted-foreground"
                >
                    {description}
                </CardItem>

                <CardItem
                    as="a"
                    translateZ="100"
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block w-full"
                >
                    <img
                        src={imageSrc}
                        alt={title}
                        className="
                            aspect-video
                            w-full
                            rounded-xl
                            object-cover
                            transition-shadow
                            duration-300
                            group-hover/card:shadow-xl
                            group-hover/card:shadow-primary/20
                        "
                    />
                </CardItem>

                <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Live Demo */}
                    <CardItem
                        as="a"
                        translateZ={20}
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            border
                            border-border
                            px-4
                            py-2.5
                            text-sm
                            font-medium
                            transition-colors
                            hover:text-primary
                            lg:w-auto
                        "
                    >
                        <ExternalLink size={16} />
                        Live Demo
                    </CardItem>

                    {/* Frontend + Backend */}
                    <div
                        className="
                            flex
                            w-full
                            flex-col
                            gap-3
                            md:flex-row
                            lg:w-auto
                        "
                    >
                        <CardItem
                            translateZ={20}
                            as="a"
                            href={frontendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-linear-to-r
                                from-violet-500
                                to-cyan-500
                                px-4
                                py-2.5
                                text-sm
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-lg
                                hover:shadow-violet-500/30
                                lg:w-auto
                            "
                        >
                            <CodeXml size={16} />
                            Frontend
                        </CardItem>

                        <CardItem
                            translateZ={20}
                            as="a"
                            href={backendUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-linear-to-r
                                from-violet-500
                                to-cyan-500
                                px-4
                                py-2.5
                                text-sm
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-lg
                                hover:shadow-violet-500/30
                                lg:w-auto
                            "
                        >
                            <CodeXml size={16} />
                            Backend
                        </CardItem>
                    </div>
                </div>
            </CardBody>
        </CardContainer>
    );
}