import ContactInfo from "@/components/contact-info";
import ContactForm from "@/components/contact-form";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative flex min-h-screen items-center justify-center px-6 py-20 sm:px-8"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col px-2 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                        Contact
                    </span>

                    <h2 className="mt-3 text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl">
                        Let's Connect
                    </h2>
                </div>

                <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}