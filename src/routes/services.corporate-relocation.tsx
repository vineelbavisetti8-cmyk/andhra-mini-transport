import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  CheckCircle,
  ClipboardList,
  Clock,
  MessageCircle,
  Monitor,
  Phone,
  Truck,
} from "lucide-react";
import corporateImg from "@/assets/corporate.jpg";
import { InfoCard, JsonLd, PageHero, QuoteCta, SectionHeading } from "@/components/site/Blocks";
import { localBusinessJsonLd, pageMeta, site, telLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services/corporate-relocation")({
  head: () =>
    pageMeta({
      title: "Corporate Relocation and Office Moving | Andhra Mini Transport Vizag",
      description:
        "Planned office and business moves from Visakhapatnam. After-hours scheduling, IT handling and furniture moves to keep downtime minimal. Enquire with Andhra Mini Transport.",
    }),
  component: CorporateRelocation,
});

const whatWeHandle = [
  {
    label: "Office furniture",
    detail:
      "Desks, chairs, conference tables, partitions and storage units — disassembled, moved and reassembled.",
  },
  {
    label: "IT and server equipment",
    detail:
      "Computers, monitors, servers and networking equipment packed to manufacturer specifications and labelled by workstation.",
  },
  {
    label: "Documents and filing",
    detail:
      "Filing cabinets and document boxes handled with chain-of-custody tracking throughout the move.",
  },
  {
    label: "Breakroom and kitchen equipment",
    detail:
      "Appliances, pantry equipment and common-area furniture cleared, moved and reinstalled.",
  },
];

const approach = [
  "Move execution is scheduled outside working hours — evenings, weekends or holidays — to avoid business disruption.",
  "A floor plan of the new premises is taken in advance so furniture is placed once without repeated shifting.",
  "IT equipment is labelled by department and workstation to make reconnection straightforward.",
  "A single project coordinator handles the move, accessible to your office manager throughout the process.",
  "Multiple vehicles are deployed in parallel where needed to meet a tight completion window.",
];

function CorporateRelocation() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd("Corporate Relocation")} />
      <PageHero
        eyebrow="Corporate relocation"
        title="Office moves planned to run outside business hours"
        intro="A poorly executed office move costs more than the move itself. We plan the timing, sequencing and placement in advance so your team walks into a functional workplace."
        image={corporateImg}
        imageAlt="Office furniture and equipment being prepared for corporate relocation"
      />

      {/* What we handle */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Scope of work"
            title="Everything in the office, handled in one coordinated move"
            intro="An office is not just furniture. We account for IT equipment, documents and common-area assets in the same move plan."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whatWeHandle.map((item) => (
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

      {/* Our approach */}
      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our approach"
            title="Minimal downtime by design, not by luck"
            intro="Every practice below is how we do corporate moves by default — not an upgrade."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {approach.map((a) => (
              <div key={a} className="flex gap-4 border border-border bg-card p-6 shadow-card">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust cards */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why businesses choose us"
            title="30 years of moving what businesses cannot afford to lose"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard icon={<Clock className="h-6 w-6" />} title="After-hours scheduling">
              We execute moves in the evenings or on weekends so your team loses no working hours.
            </InfoCard>
            <InfoCard icon={<Monitor className="h-6 w-6" />} title="IT equipment handling">
              Technology is packed by item, labelled by workstation and placed at the correct desk
              on arrival.
            </InfoCard>
            <InfoCard icon={<Briefcase className="h-6 w-6" />} title="Single coordinator">
              One person manages the entire operation and is your point of contact from planning to
              handover.
            </InfoCard>
            <InfoCard icon={<Truck className="h-6 w-6" />} title="Parallel vehicle deployment">
              For large offices we deploy multiple vehicles to meet the required completion window.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep section">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">Plan your office move</p>
            <h2 className="mt-4 text-3xl text-white md:text-4xl">
              Tell us the office size, location and your required completion date.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              We will come back with a move plan and quote. Corporate moves are assessed in person
              or via a detailed briefing call. Calls are answered seven days a week, 8 AM to 8 PM.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={whatsappLink(
                "Hello, I need a quote for corporate or office relocation with Andhra Mini Transport.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
            </a>
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/30 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <QuoteCta
        title="Need a combined household and office move?"
        body="We can coordinate a personal and corporate relocation under one plan when an employee is relocating with your company. Enquire for a combined quote."
      />
    </>
  );
}
