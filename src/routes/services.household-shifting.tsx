import { createFileRoute } from "@tanstack/react-router";
import {
  Archive,
  CheckCircle,
  ClipboardList,
  Home,
  MessageCircle,
  PackageCheck,
  Shield,
  Truck,
} from "lucide-react";
import householdImg from "@/assets/household.jpg";
import hhPackImg from "@/assets/hh-packing.png";
import hhLoadImg from "@/assets/hh-loading.png";
import hhDeliverImg from "@/assets/hh-delivery.png";
import { InfoCard, JsonLd, PageHero, QuoteCta, SectionHeading } from "@/components/site/Blocks";
import { localBusinessJsonLd, pageMeta, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services/household-shifting")({
  head: () =>
    pageMeta({
      title: "Household Shifting in Visakhapatnam | Andhra Mini Transport since 1993",
      description:
        "Local and long-distance home relocation from Vizag. Room-by-room packing, careful loading, and safe placement at your new home. Enquire with Andhra Mini Transport.",
    }),
  component: HouseholdShifting,
});

const serviceGallery = [
  {
    src: hhPackImg,
    alt: "Professional packing with bubble wrap and protective materials",
    title: "Multi-Layer Packing",
    desc: "Bubble wrap, corrugated sheets, and stretch film safeguard furniture against scratches.",
  },
  {
    src: hhLoadImg,
    alt: "Loading packed goods into moving truck ramp",
    title: "Secure Ramp Loading",
    desc: "Heavy items loaded via ramps with secure stacking to eliminate shifting during transit.",
  },
  {
    src: hhDeliverImg,
    alt: "Safe delivery and placement inside customer home",
    title: "Room-by-Room Delivery",
    desc: "Unloaded and placed directly into your designated rooms with full inventory sign-off.",
  },
];

const whatWePack = [
  {
    label: "Furniture",
    detail:
      "Sofas, beds, wardrobes, dining sets — disassembled where required and reassembled at destination.",
  },
  {
    label: "Kitchen and appliances",
    detail:
      "Refrigerators, washing machines, microwaves and glassware packed to manufacturer standards.",
  },
  {
    label: "Fragile and antique items",
    detail:
      "Fine china, artwork and mirrors wrapped individually in bubble wrap and custom-cut foam inserts.",
  },
  {
    label: "Packed cartons",
    detail:
      "Books, clothing and personal items boxed, labelled by room and kept together throughout the move.",
  },
];

const processSteps = [
  {
    step: "01",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Pre-move survey",
    body: "We visit or do a video walkthrough to record every item that needs moving. This drives the quote and the packing plan.",
  },
  {
    step: "02",
    icon: <Archive className="h-5 w-5" />,
    title: "Packing day",
    body: "Our trained packers arrive with materials. Each room is packed, labelled and inventoried before loading begins.",
  },
  {
    step: "03",
    icon: <Truck className="h-5 w-5" />,
    title: "Loading and transport",
    body: "Goods are loaded in a planned order to prevent shifting during transit. The vehicle is sealed before departure.",
  },
  {
    step: "04",
    icon: <PackageCheck className="h-5 w-5" />,
    title: "Delivery and placement",
    body: "At the destination we unload, place furniture in the rooms you designate, and check every item against the inventory.",
  },
];

function HouseholdShifting() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd("Household Shifting")} />
      <PageHero
        eyebrow="Household shifting"
        title="Your home, moved carefully from one address to the next"
        intro="Whether you are moving within Visakhapatnam or relocating across India, we treat every item as if it were ours. The same team that packs handles the move."
        image={householdImg}
        imageAlt="Packed household goods wrapped and ready for loading"
      />

      {/* What we handle */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we handle"
            title="Every room, every item — one coordinated move"
            intro="We do not work from a fixed rate card. The survey defines exactly what needs to move, and the quote reflects that precisely."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whatWePack.map((item) => (
              <div
                key={item.label}
                className="flex gap-5 border border-border bg-card p-7 shadow-card"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-semibold text-navy-deep">{item.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="How the move works"
            title="Four stages, one point of contact"
            intro="A single coordinator handles your move from survey to delivery. You always have one person to call."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s) => (
              <div key={s.step} className="border-t-2 border-gold pt-6">
                <div className="flex items-center justify-between text-navy">
                  {s.icon}
                  <span className="font-display text-2xl text-gold-muted">{s.step}</span>
                </div>
                <h3 className="mt-5 text-lg text-navy-deep">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="On the Ground"
            title="Our packing & shifting in action"
            intro="Real glimpse of our trained team handling household goods with complete care and systematic protection."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceGallery.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-sm border border-border bg-card shadow-card transition-all hover:border-gold/60"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-deep">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / safety */}
      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Safe handling"
            title="Three decades of packing experience behind every move"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <InfoCard icon={<Shield className="h-6 w-6" />} title="Trained packers">
              Every team member is trained on material selection, wrapping technique and safe
              loading order to prevent damage in transit.
            </InfoCard>
            <InfoCard icon={<Home className="h-6 w-6" />} title="Local and long-distance">
              We handle moves within Visakhapatnam city limits and long-distance moves to any city
              in India with the same level of care.
            </InfoCard>
            <InfoCard icon={<ClipboardList className="h-6 w-6" />} title="Full inventory record">
              A written inventory is created before loading and checked again at delivery so nothing
              is unaccounted for.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep section">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <p className="eyebrow text-gold">Ready to move?</p>
          <h2 className="max-w-2xl text-3xl text-white md:text-4xl">
            Share the pickup and delivery addresses and we will respond with a considered quote.
          </h2>
          <a
            href={whatsappLink(
              "Hello, I need a quote for household shifting with Andhra Mini Transport.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
          >
            <MessageCircle className="h-4 w-4" />
            Get a quote on WhatsApp
          </a>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
