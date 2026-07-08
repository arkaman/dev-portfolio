import { Send } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";

export default function ContactForm() {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-card backdrop-blur-xl">
            <ShineBorder
                borderWidth={2}
                duration={10}
                shineColor={[
                    "#1e1b4b",
                    "#090c9b",
                ]}
            />

            <form className="relative z-10 space-y-6 p-10">
                <h3 className="text-2xl font-bold text-white">
                    Send a Message
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm text-neutral-400">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-neutral-400">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-neutral-400">
                        Subject
                    </label>

                    <input
                        type="text"
                        placeholder="How can I help you?"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-neutral-400">
                        Message
                    </label>

                    <textarea
                        rows={3}
                        placeholder="Your message here..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                    />
                </div>

                <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-violet-500 to-cyan-500 py-3.5 font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/30"
                >
                    <Send size={20} />
                    Send Message
                </button>
            </form>
        </div>
    );
}