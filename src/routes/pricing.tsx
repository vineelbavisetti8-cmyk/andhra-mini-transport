import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageCircle, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { JsonLd } from "@/components/site/Blocks";
import { localBusinessJsonLd, pageMeta, site, telLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () =>
    pageMeta({
      title: "Get a Relocation Quote | Andhra Mini Transport & Travels, Visakhapatnam",
      description:
        "Request a quote for household shifting, vehicle transport, warehousing or corporate relocation with Andhra Mini Transport. Respond via WhatsApp or our quote form.",
    }),
  component: Pricing,
});

const moveTypes = [
  "Household shifting — local (within Visakhapatnam)",
  "Household shifting — long distance",
  "Intercity or interstate relocation",
  "Vehicle transportation",
  "Warehousing and storage",
  "Corporate or office relocation",
  "Other / multiple services",
] as const;

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[0-9+\s\-()]+$/, "Please enter a valid phone number"),
  moveType: z.string().min(1, "Please select a move type"),
  fromLocation: z.string().min(2, "Please enter the pickup location"),
  toLocation: z.string().min(2, "Please enter the delivery location"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

function Pricing() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
  });

  function onSubmit(data: QuoteFormValues) {
    const text = [
      `Hello, I would like to request a quote from Andhra Mini Transport.`,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Move type: ${data.moveType}`,
      `From: ${data.fromLocation}`,
      `To: ${data.toLocation}`,
      data.preferredDate ? `Preferred date: ${data.preferredDate}` : "",
      data.message ? `Additional info: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    reset();
  }

  return (
    <>
      <JsonLd data={localBusinessJsonLd("Get a Quote")} />

      {/* Hero */}
      <section className="bg-navy-deep pt-32 pb-16">
        <div className="container-page">
          <p className="eyebrow text-gold">Get a quote</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-white md:text-5xl">
            Request a relocation quote
          </h1>
          <span className="gold-rule mt-7" />
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75">
            Fill in the form below and your details will be sent directly to our WhatsApp so we can
            respond promptly. We do not use automated pricing — every quote is assessed by a
            coordinator who understands the specifics of your move.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div>
            {/* WhatsApp shortcut */}
            <div className="mb-8 border border-gold/30 bg-gold/5 p-5">
              <p className="text-sm font-semibold text-navy-deep">Prefer a quick message?</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                If you have the details ready, you can reach us directly on WhatsApp and we will
                respond within the day.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </a>
            </div>

            {isSubmitSuccessful ? (
              <div className="border border-green-200 bg-green-50 p-8 text-center">
                <p className="text-lg font-semibold text-green-800">
                  Your details have been sent to WhatsApp
                </p>
                <p className="mt-2 text-sm text-green-700">
                  Complete the message in WhatsApp to send it. We will respond within the working
                  day.
                </p>
                <button
                  onClick={() => reset()}
                  className="mt-5 text-sm font-semibold text-navy-deep underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form
                id="quote-form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                noValidate
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block text-sm font-semibold text-navy-deep"
                    >
                      Full name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="quote-name"
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

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block text-sm font-semibold text-navy-deep"
                    >
                      Phone number <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      autoComplete="tel"
                      {...register("phone")}
                      className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                      placeholder="10-digit mobile number"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Move type */}
                <div>
                  <label
                    htmlFor="quote-move-type"
                    className="block text-sm font-semibold text-navy-deep"
                  >
                    Type of move <span className="text-destructive">*</span>
                  </label>
                  <select
                    id="quote-move-type"
                    {...register("moveType")}
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {moveTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.moveType && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.moveType.message}</p>
                  )}
                </div>

                {/* From / To */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quote-from"
                      className="block text-sm font-semibold text-navy-deep"
                    >
                      Pickup city / address <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="quote-from"
                      type="text"
                      {...register("fromLocation")}
                      className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                      placeholder="e.g. Visakhapatnam, Andhra Pradesh"
                    />
                    {errors.fromLocation && (
                      <p className="mt-1.5 text-xs text-destructive">
                        {errors.fromLocation.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="quote-to"
                      className="block text-sm font-semibold text-navy-deep"
                    >
                      Delivery city / address <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="quote-to"
                      type="text"
                      {...register("toLocation")}
                      className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                      placeholder="e.g. Hyderabad, Telangana"
                    />
                    {errors.toLocation && (
                      <p className="mt-1.5 text-xs text-destructive">{errors.toLocation.message}</p>
                    )}
                  </div>
                </div>

                {/* Preferred date */}
                <div>
                  <label
                    htmlFor="quote-date"
                    className="block text-sm font-semibold text-navy-deep"
                  >
                    Preferred move date{" "}
                    <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="quote-date"
                    type="date"
                    {...register("preferredDate")}
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="quote-message"
                    className="block text-sm font-semibold text-navy-deep"
                  >
                    Additional details{" "}
                    <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="quote-message"
                    rows={4}
                    {...register("message")}
                    className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
                    placeholder="Approximate volume, special items, access restrictions, or any other detail that helps us quote accurately."
                  />
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

          {/* Sidebar info */}
          <div className="space-y-6">
            <div className="border border-border bg-card p-7 shadow-card">
              <h3 className="text-xl text-navy-deep">How pricing works</h3>
              <span className="gold-rule mt-4" />
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  We do not publish a rate card because relocation costs depend on volume, distance,
                  goods type and access conditions at both locations.
                </p>
                <p>
                  Every enquiry is followed by a quick call or in-person survey to understand what
                  needs moving. The written quote we share after that survey is what you pay — no
                  adjustments on the day.
                </p>
                <p>
                  If you call or message WhatsApp directly, we respond within the working day with
                  either a quote or a time to speak.
                </p>
              </div>
            </div>

            <div className="border border-border bg-card p-7 shadow-card">
              <h3 className="text-xl text-navy-deep">Contact directly</h3>
              <span className="gold-rule mt-4" />
              <div className="mt-5 space-y-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-semibold text-navy-deep transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 text-gold" />
                  WhatsApp — preferred for quick quotes
                </a>
                <a
                  href={telLink}
                  className="flex items-center gap-3 text-sm font-semibold text-navy-deep transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" />
                  {site.phone}
                </a>
                <p className="text-xs text-muted-foreground">{site.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
