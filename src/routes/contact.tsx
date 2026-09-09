import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { JsonLd, SectionHeading } from "@/components/site/Blocks";
import { localBusinessJsonLd, pageMeta, site, telLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Contact Andhra Mini Transport & Travels | MVP Colony, Visakhapatnam",
      description:
        "Contact Andhra Mini Transport & Travels for packers and movers in Visakhapatnam. Call 09440147473 or message on WhatsApp. Located in MVP Colony, Vizag.",
    }),
  component: Contact,
});

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\s\-()]+$/, "Please enter a valid phone number"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Please enter a message (at least 10 characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const businessHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 8:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 8:00 PM" },
];

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit(data: ContactFormValues) {
    const text = [
      `Hello, I am contacting Andhra Mini Transport regarding: ${data.subject}`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Message: ${data.message}`,
    ].join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    reset();
  }

  return (
    <>
      <JsonLd data={localBusinessJsonLd("Contact")} />

      {/* Hero */}
      <section className="bg-navy-deep pt-32 pb-16">
        <div className="container-page">
          <p className="eyebrow text-gold">Contact us</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-white md:text-5xl">
            Get in touch with our Visakhapatnam office
          </h1>
          <span className="gold-rule mt-7" />
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75">
            We are available seven days a week from 8 AM to 8 PM. WhatsApp is the fastest way to
            reach us for a quote. For all other enquiries, use the form below or call directly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Contact details */}
          <div className="space-y-6">
            {/* WhatsApp */}
            <div className="border border-border bg-card p-7 shadow-card">
              <h3 className="text-xl text-navy-deep">WhatsApp — fastest response</h3>
              <span className="gold-rule mt-4" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Send your move details on WhatsApp and receive a response within the working day.
                This is our preferred channel for quick quote requests.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
              >
                <MessageCircle className="h-4 w-4" />
                Open WhatsApp chat
              </a>
            </div>

            {/* Phone */}
            <div className="border border-border bg-card p-7 shadow-card">
              <h3 className="text-xl text-navy-deep">Call us</h3>
              <span className="gold-rule mt-4" />
              <a
                href={telLink}
                className="mt-5 flex items-center gap-3 text-lg font-semibold text-navy-deep transition-colors hover:text-gold"
              >
                <Phone className="h-5 w-5 text-gold" />
                {site.phone}
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Calls answered seven days a week, 8 AM to 8 PM.
              </p>
            </div>

            {/* Address */}
            <div className="border border-border bg-card p-7 shadow-card">
              <h3 className="text-xl text-navy-deep">Office address</h3>
              <span className="gold-rule mt-4" />
              <div className="mt-5 flex gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <address className="not-italic leading-relaxed">{site.addressLine}</address>
              </div>
            </div>

            {/* Business hours */}
            <div className="border border-border bg-card p-7 shadow-card">
              <h3 className="text-xl text-navy-deep">Business hours</h3>
              <span className="gold-rule mt-4" />
              <ul className="mt-5 space-y-3">
                {businessHours.map((h) => (
                  <li key={h.day} className="flex items-start gap-3 text-sm">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <div>
                      <span className="font-semibold text-navy-deep">{h.day}</span>
                      <span className="ml-2 text-muted-foreground">{h.hours}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column: form + map */}
          <div className="space-y-8">
            {/* Map */}
            <div className="border border-border shadow-card">
              <iframe
                title="Andhra Mini Transport office location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3800.068300504791!2d83.32542347517312!3d17.741420683207394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ0JzI5LjEiTiA4M8KwMTknNDAuOCJF!5e0!3m2!1sen!2sin!4v1788933182929!5m2!1sen!2sin"
                className="h-[300px] w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* Contact form */}
            <div>
              <SectionHeading
                eyebrow="Write to us"
                title="Send a message"
                intro="For general enquiries, feedback or questions that are not a quote request, use the form below. Submissions open WhatsApp pre-filled with your message."
              />

              {isSubmitSuccessful ? (
                <div className="mt-8 border border-green-200 bg-green-50 p-8 text-center">
                  <p className="text-lg font-semibold text-green-800">
                    Your message has been prepared in WhatsApp
                  </p>
                  <p className="mt-2 text-sm text-green-700">
                    Complete the send in WhatsApp to reach us. We will respond within the working
                    day.
                  </p>
                  <button
                    onClick={() => reset()}
                    className="mt-5 text-sm font-semibold text-navy-deep underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-navy-deep"
                      >
                        Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        {...register("name")}
                        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold text-navy-deep"
                      >
                        Phone <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        {...register("phone")}
                        className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                        placeholder="Mobile number"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-semibold text-navy-deep"
                    >
                      Subject <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      {...register("subject")}
                      className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                      placeholder="Briefly describe your enquiry"
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-navy-deep"
                    >
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      {...register("message")}
                      className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                      placeholder="Your message"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-navy-deep px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy-light sm:w-auto sm:px-10"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
