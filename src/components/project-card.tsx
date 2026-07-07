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
        <CardContainer className="inter-var">
            <CardBody className="group/card relative h-auto w-full rounded-xl border border-black/10 bg-gray-50 p-6 dark:border-white/20 dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10">

                <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-neutral-900 dark:text-white"
                >
                    {title}
                </CardItem>

                <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300"
                >
                    {description}
                </CardItem>

                <CardItem
                    translateZ="100"
                    as="a"
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 block w-full"
                >
                    <img
                        src={imageSrc}
                        alt={title}
                        className="h-auto w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    />
                </CardItem>

                <div className="mt-8 flex items-center justify-between">
                        <CardItem
                            translateZ={20}
                            as="a"
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition hover:text-blue-500"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </CardItem>

                        <div className="flex gap-3">
                            <CardItem
                                translateZ={20}
                                as="a"
                                href={frontendUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
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
                                className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
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