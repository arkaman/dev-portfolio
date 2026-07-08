import { cn } from "@/lib/utils";

const links = [
    { name: "ABOUT", href: "#about" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className="fixed top-4 left-1/2 z-50 lg:w-full -translate-x-1/2 px-4 md:top-6">
            <nav
                className={cn(
                    "mx-auto flex w-full max-w-md items-center justify-evenly",
                    "rounded-full border border-white/10",
                    "bg-white/5 backdrop-blur-2xl",
                    "shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
                    "px-2 py-2",
                    "sm:max-w-lg",
                    "md:max-w-xl md:px-4",
                    "lg:max-w-2xl lg:px-6"
                )}
            >
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="
                            rounded-full
                            px-3 py-2
                            text-xs font-medium
                            tracking-[0.2em]
                            text-neutral-200
                            transition-all duration-300
                            hover:bg-white/10
                            hover:text-white

                            sm:px-4 sm:text-sm
                            md:px-5
                            "
                    >
                        {link.name}
                    </a>
                ))}
            </nav>
        </header>
    );
}