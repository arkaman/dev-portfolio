import { MapPin } from "lucide-react";

import { DockContact } from "@/components/dock-contact";
import ScrollIndicator from "@/components/scroll-indicator";

import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "@/components/ui/terminal";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-20 px-8 md:flex-row">
                {/* Left */}
                <div className="max-w-xl space-y-2">
                    <h1 className="text-6xl font-bold tracking-tight text-white">
                        Arkayan Manna
                    </h1>

                    <p className="text-2xl font-semibold text-neutral-300">
                        Full Stack Developer
                    </p>

                    <p className="flex items-center gap-1 text-neutral-300">
                        <MapPin className="h-4 w-4" />
                        Kolkata, India
                    </p>

                    <div className="mt-7">
                        <DockContact />
                    </div>
                </div>

                {/* Right */}
                <div className="hidden md:block">
                    <Terminal className="w-125 h-75 font-mono">
                        <TypingAnimation delay={0}>$ whoami</TypingAnimation>

                        <AnimatedSpan delay={800} className="text-amber-400">
                            arkayanmanna
                        </AnimatedSpan>

                        <TypingAnimation delay={1600}>
                            $ cat mission.txt
                        </TypingAnimation>

                        <AnimatedSpan delay={2400} className="text-blue-200">
                            Turning ideas into reliable software
                        </AnimatedSpan>

                        <AnimatedSpan delay={3200} className="text-blue-200">
                            through thoughtful engineering.
                        </AnimatedSpan>

                        <TypingAnimation delay={4800}>
                            $ ls portfolio/
                        </TypingAnimation>

                        <AnimatedSpan delay={5600} className="text-blue-500">
                            about.md
                        </AnimatedSpan>

                        <AnimatedSpan delay={6200} className="text-green-500">
                            projects/
                        </AnimatedSpan>

                        <AnimatedSpan delay={6800} className="text-blue-500">
                            contact.sh
                        </AnimatedSpan>
                    </Terminal>
                </div>
            </div>

            <div className="hidden md:block">
                <ScrollIndicator />
            </div>
        </section>
    );
}