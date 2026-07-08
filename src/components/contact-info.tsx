import { Mail } from "lucide-react";

import SocialCard from "@/components/social-card";

import GithubIcon from "@/assets/icons/GithubIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import CvIcon from "@/assets/icons/CvIcon";

export default function ContactInfo() {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="mx-auto w-full max-w-xl text-center">
                <h3 className="text-3xl font-bold text-white">
                    Get In Touch
                </h3>

                <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-neutral-300">
                    Whether you have an opportunity, an interesting project, or
                    just want to talk about software, I'd be happy to connect.
                </p>

                <a
                    href="mailto:arkayanmanna@outlook.com"
                    className="mt-10 inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-violet-500 to-cyan-500 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/30"
                >
                    <Mail size={20} />
                    Email Me
                </a>

                <div className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                    <SocialCard
                        href="https://github.com/arkaman"
                        title="GitHub"
                        subtitle="View my code"
                    >
                        <GithubIcon />
                    </SocialCard>

                    <SocialCard
                        href="https://linkedin.com/in/arkayanmanna"
                        title="LinkedIn"
                        subtitle="Let's connect"
                    >
                        <LinkedinIcon />
                    </SocialCard>

                    <SocialCard
                        href="/resume.pdf"
                        title="Resume"
                        subtitle="Download PDF"
                        download
                    >
                        <CvIcon />
                    </SocialCard>
                </div>
            </div>
        </div>
    );
}