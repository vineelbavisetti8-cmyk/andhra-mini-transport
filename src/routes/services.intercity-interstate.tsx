import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle,
  ClipboardList,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Route as RouteIcon,
  Truck,
} from "lucide-react";
import intercityImg from "@/assets/intercity.jpg";
import intercityHighwayImg from "@/assets/intercity-highway.png";
import intercityPlanningImg from "@/assets/intercity-planning.png";
import intercityUnloadImg from "@/assets/intercity-unloading.png";
import { InfoCard, JsonLd, PageHero, QuoteCta, SectionHeading } from "@/components/site/Blocks";
import { localBusinessJsonLd, pageMeta, site, telLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services/intercity-interstate")({
  head: () =>
    pageMeta({
      title: "Intercity and Interstate Relocation from Vizag | Andhra Mini Transport",
      description:
        "Door-to-door intercity and interstate moves from Visakhapatnam to any city in India. One coordinator, full packing, single-point delivery. Enquire with Andhra Mini Transport.",
    }),
  component: IntercityInterstate,
});

const serviceGallery = [
  {
    src: intercityHighwayImg,
    alt: "Long haul transport vehicle on national highway",
    title: "Pan-India Transit",
    desc: "Long-haul closed container vehicles equipped for safe all-weather interstate transit.",
  },
  {
    src: intercityPlanningImg,
    alt: "Logistics coordinator planning transit route and schedule",
    title: "Route & Schedule Planning",
    desc: "Dedicated logistics planning, route mapping, and continuous transit monitoring.",
  },
  {
    src: intercityUnloadImg,
    alt: "Crew unloading goods at destination apartment",
    title: "Destination Unloading",
    desc: "Professional delivery and careful placement at your new home in any Indian city.",
  },
];

const coverage = [
  "Door-to-door service from your current address to the new one, regardless of distance.",
  "Coordination at both the origin and the destination — you do not need to arrange anything at the other end.",
  "Single point of contact throughout the entire move for updates and queries.",
  "Packing material, loading, transport and unloading are all included in the quoted scope.",
];

const processSteps = [
  {
    step: "01",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Enquiry and assessment",
    body: "Share your current and destination city, a rough idea of your volume, and preferred move date. We assess and revert with a written quote.",
  },
  {
    step: "02",
    icon: <MapPin className="h-5 w-5" />,
    title: "Route planning",
    body: "We assign the transport vehicle and route based on goods type and distance. Fragile loads use vehicles with additional securing.",
  },
  {
    step: "03",
    icon: <Truck className="h-5 w-5" />,
    title: "Packed and dispatched",
    body: "Your goods are packed, inventoried and loaded on the confirmed date. You receive a dispatch confirmation before the vehicle departs.",
  },
  {
    step: "04",
    icon: <PackageCheck className="h-5 w-5" />,
    title: "Delivered and checked",
    body: "At the destination our partner team or our own crew handles unloading, placement and inventory check against the original list.",
  },
];

function IntercityInterstate() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd("Intercity and Interstate Relocation")} />
      <PageHero
        eyebrow="Intercity and interstate relocation"
        title="From Visakhapatnam to anywhere in India — one move, one team"
        intro="Long-distance relocation is not just a longer drive. It requires route planning, coordination at both ends, and a single point of accountability. We provide all three."
        image={intercityImg}
        imageAlt="Transport truck on a national highway for long distance relocation"
      />

      {/* What is included */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What is included"
            title="A door-to-door service, not just transportation"
            intro="Many movers hand over at the destination city boundary. We deliver to the address and do not consider the job done until everything is accounted for."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {coverage.map((item) => (
              <div key={item} className="flex gap-4 border border-border bg-card p-6 shadow-card">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="From first enquiry to delivery confirmation"
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
            eyebrow="Fleet & Operations"
            title="Intercity relocation on the ground"
            intro="A visual look at our long-haul fleet, route coordination, and destination arrival procedures."
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

      {/* Trust signals */}
      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why it works"
            title="Pan-India operations from a trusted Vizag base"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <InfoCard icon={<RouteIcon className="h-6 w-6" />} title="Pan-India network">
              Over three decades of long-distance moves have established our logistics network
              across India. We know the routes and the requirements.
            </InfoCard>
            <InfoCard
              icon={<Phone className="h-6 w-6" />}
              title="Single contact for the whole move"
            >
              One phone number, one coordinator, from the day you book until delivery is confirmed.
              No chasing between departments.
            </InfoCard>
            <InfoCard
              icon={<ClipboardList className="h-6 w-6" />}
              title="Written quote before commitment"
            >
              You receive a detailed written scope before we begin. No surprises at delivery. Final
              payment is due only after you are satisfied with the delivery.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-navy-deep section">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-gold">Plan your move</p>
            <h2 className="mt-4 text-3xl text-white md:text-4xl">
              Tell us where you are moving from and to, and we will take it from there.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Send your current city, destination city and expected move date on WhatsApp or call us
              directly. Calls are answered seven days a week, 8 AM to 8 PM.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={whatsappLink(
                "Hello, I need a quote for intercity or interstate relocation with Andhra Mini Transport.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" />
              Get a quote on WhatsApp
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

      <QuoteCta />
    </>
  );
}
