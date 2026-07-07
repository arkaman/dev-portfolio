import ContactInfo from "@/components/contact-info";
import ContactForm from "@/components/contact-form";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative flex min-h-screen items-center justify-center px-6 py-24"
        >
            <div className="w-full max-w-7xl">
                <h2 className="mb-12 text-4xl font-bold text-white">
                    Contact Me
                </h2>

                <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}