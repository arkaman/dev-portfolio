import ContactInfo from "@/components/contact-info";
import ContactForm from "@/components/contact-form";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative flex min-h-screen items-center justify-center py-24"
        >
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="mb-14">
                    <span className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                        Contact
                    </span>

                    <h2 className="mt-3 text-5xl font-bold tracking-tight text-white">
                        Let's Connect
                    </h2>
                </div>

                <div>
                    <ContactInfo />
                    {/* <ContactForm /> */}
                </div>
            </div>
        </section>
    );
}