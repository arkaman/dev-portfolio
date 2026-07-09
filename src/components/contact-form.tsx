import { Send } from "lucide-react";
import { ShineBorder } from "@/components/ui/shine-border";
import { useForm, ValidationError } from "@formspree/react";
import { AnimatePresence, motion } from "motion/react";

export default function ContactForm() {

    const [state, handleSubmit] = useForm("xgojjyog");

    return (
        <div className="relative lg:min-h-130 overflow-hidden rounded-3xl bg-card backdrop-blur-xl">
            <ShineBorder
                borderWidth={2}
                duration={10}
                shineColor={[
                    "#1e1b4b",
                    "#090c9b",
                ]}
            />

            <AnimatePresence mode="wait">
                {state.succeeded ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="relative z-10 flex lg:min-h-130 items-center justify-center p-10"
                    >
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white">
                                🎉 Message sent successfully!
                            </h3>

                            <p className="mt-3 text-neutral-400">
                                Thanks for reaching out. I'll get back to you as soon as possible.
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                            className="relative z-10 space-y-6 p-6 sm:p-10"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Send a Message
                        </h3>

                        <input
                            type="text"
                            name="_gotcha"
                            className="hidden"
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm text-neutral-400">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-neutral-400">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Your Email Address"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-neutral-400">
                                Subject
                            </label>

                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="How can I help you?"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-neutral-400">
                                Message
                            </label>

                            <textarea
                                name="message"
                                required
                                rows={3}
                                placeholder="Your message here..."
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-neutral-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="
                                inline-flex
                                w-full
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                bg-linear-to-r
                                from-violet-500
                                to-cyan-500
                                py-3.5
                                font-semibold
                                text-white
                                transition-all
                                hover:-translate-y-1
                                hover:shadow-lg
                                hover:shadow-violet-500/30
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                disabled:hover:translate-y-0
                                disabled:hover:shadow-none
                                "
                        >
                            <Send size={20} />
                            {state.submitting ? "Sending..." : "Send Message"}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}