export default function Footer() {
    return (
        <footer className="border-t border-white/5">
            <div className="mx-auto w-full max-w-7xl px-6 py-12">

                {/* Top */}
                <div className="mb-10 flex justify-end">
                    <a
                        href="#home"
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-5
                            py-2
                            backdrop-blur-xl
                            text-sm
                            text-neutral-300
                            transition
                            hover:text-white
                        "
                    >
                        Back to top ↑
                    </a>
                </div>

                {/* Bottom */}
                <div className="grid gap-10 md:grid-cols-3">

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                            Navigation
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#about"
                                    className="text-neutral-300 transition hover:text-white"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="text-neutral-300 transition hover:text-white"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="text-neutral-300 transition hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
                            Connect
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://github.com/arkaman"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-300 transition hover:text-white"
                                >
                                    GitHub
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://linkedin.com/in/arkayanmanna"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-300 transition hover:text-white"
                                >
                                    LinkedIn
                                </a>
                            </li>

                            <li>
                                <a
                                    href="mailto:arkayanmanna@outlook.com"
                                    className="text-neutral-300 transition hover:text-white"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Copyright */}
                    <div className="md:text-right">
                        <p className="text-lg font-semibold text-neutral-300">
                            &copy; 2026 Arkayan Manna
                        </p>

                        <p className="mt-2 text-neutral-400">
                            Built with React, TypeScript & Tailwind CSS.
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
}