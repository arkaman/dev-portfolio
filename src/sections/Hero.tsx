import { MapPin } from "lucide-react";

import FloatingLines from "@/components/FloatingLines";
import { DockContact } from "@/components/dock-contact";
import ScrollIndicator from "@/components/scroll-indicator";

import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal";
import { CometCard } from "@/components/ui/comet-card";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Hero() {
    
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    maskImage:
                        "linear-gradient(to bottom, black 75%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 75%, transparent 100%)",
                }}
            >
                <FloatingLines
                    linesGradient={["#090C9B", "#1E1B4B"]}
                    animationSpeed={0.5}
                    interactive={false}
                    bendRadius={1}
                    bendStrength={-0.5}
                    mouseDamping={0.05}
                    parallax
                    parallaxStrength={0.2}
                />
            </div>

            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-20 px-8 md:flex-row">
                {/* Left */}
                <div className="max-w-xl space-y-2">
                    <BlurFade delay={0}>
                        <h1 className="text-6xl font-bold tracking-tight text-white">
                            Arkayan Manna
                        </h1>
                    </BlurFade>

                    <BlurFade delay={0.08}>
                        <p className="text-2xl font-semibold text-neutral-300">
                            Full Stack Developer
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.16}>
                        <p className="flex items-center gap-1 text-neutral-300">
                            <MapPin className="h-4 w-4" />
                            Kolkata, India
                        </p>
                    </BlurFade>

                    <div className="mt-7">
                        <BlurFade delay={0.24}>
                            <DockContact />
                        </BlurFade>
                    </div>
                </div>

                {/* Right */}
                <BlurFade delay={0}>
                    <CometCard>
                        <div className="hidden md:block">
                            <Terminal className="h-75 w-125 font-mono">
                                <TypingAnimation delay={0}>$ whoami</TypingAnimation>

                                <AnimatedSpan
                                    delay={200}
                                    className="text-amber-400 hover:text-amber-600"
                                >
                                    <a
                                        href="https://linkedin.com/in/arkayanmanna"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        arkayanmanna
                                    </a>
                                </AnimatedSpan>

                                <TypingAnimation delay={400}>
                                    $ cat mission.txt
                                </TypingAnimation>

                                <AnimatedSpan
                                    delay={600}
                                    className="text-blue-200"
                                >
                                    Turning ideas into reliable software
                                </AnimatedSpan>

                                <AnimatedSpan
                                    delay={700}
                                    className="text-blue-200"
                                >
                                    through thoughtful engineering.
                                </AnimatedSpan>

                                <TypingAnimation delay={900}>
                                    $ ls portfolio/
                                </TypingAnimation>

                                <AnimatedSpan
                                    delay={1100}
                                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                                >
                                    <a href="#about">about.md</a>
                                </AnimatedSpan>

                                <AnimatedSpan
                                    delay={1200}
                                    className="text-green-500 hover:text-green-700 transition-colors duration-300"
                                >
                                    <a href="#projects">projects/</a>
                                </AnimatedSpan>

                                <AnimatedSpan
                                    delay={1300}
                                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                                >
                                    <a href="#contact">contact.sh</a>
                                </AnimatedSpan>
                            </Terminal>
                        </div>
                    </CometCard>
                </BlurFade>
            </div>

            <div className="absolute min-w-full bottom-2 left-1/2 hidden -translate-x-1/2 md:block">
                <a href="#about">
                    <BlurFade delay={1}>
                        <ScrollIndicator />
                    </BlurFade>
                </a>
            </div>
        </section>
    );
}