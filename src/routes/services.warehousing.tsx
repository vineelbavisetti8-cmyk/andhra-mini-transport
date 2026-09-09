import { createFileRoute } from "@tanstack/react-router";
import { Archive, CheckCircle, ClipboardList, Lock, MessageCircle, Shield } from "lucide-react";
import warehouseImg from "@/assets/warehouse.jpg";
import warehouseInteriorImg from "@/assets/warehouse-interior.png";
import warehouseInventoryImg from "@/assets/warehouse-inventory.png";
import { InfoCard, JsonLd, PageHero, QuoteCta, SectionHeading } from "@/components/site/Blocks";
import { localBusinessJsonLd, pageMeta, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services/warehousing")({
  head: () =>
    pageMeta({
      title: "Warehousing and Storage in Visakhapatnam | Andhra Mini Transport",
      description:
        "Secure short-term and long-term storage in Vizag. Inventoried, access-controlled facilities for household and commercial goods. Enquire with Andhra Mini Transport.",
    }),
  component: Warehousing,
});

const serviceGallery = [
  {
    src: warehouseInteriorImg,
    alt: "Organized warehouse interior with industrial shelving and forklift",
    title: "Modern Storage Facility",
    desc: "Spacious, multi-tier racking warehouse equipped with industrial handling machinery.",
  },
  {
    src: warehouseInventoryImg,
    alt: "Warehouse staff scanning barcodes on palletized boxes",
    title: "Barcoded Inventory Control",
    desc: "Systematic barcode tagging and logging of every single box for flawless tracking.",
  },
  {
    src: warehouseImg,
    alt: "Clean organized storage units with goods",
    title: "Secure & Pest-Controlled Bays",
    desc: "Climate-controlled, clean, and 24/7 monitored bays protecting your belongings.",
  },
];

const storageTypes = [
  {
    title: "Short-term storage",
    periods: "Days to weeks",
    detail:
      "When there is a gap between your move-out and move-in date, we store your packed goods safely until the destination is ready.",
  },
  {
    title: "Long-term storage",
    periods: "Months to indefinite",
    detail:
      "For surplus furniture, business inventory or goods held during renovation, we provide controlled-access storage with periodic inventory checks.",
  },
];

const features = [
  "Goods are catalogued against a written inventory before storage begins.",
  "Access is controlled and recorded — only authorised persons can retrieve goods.",
  "The facility is protected against moisture, pests and unauthorised entry.",
  "Retrieval can be arranged with prior notice, with or without redelivery.",
  "Storage is charged transparently — you know the rate before goods go in.",
];

function Warehousing() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd("Warehousing and Storage")} />
      <PageHero
        eyebrow="Warehousing and storage"
        title="Secure, inventoried storage for when your move is not ready yet"
        intro="A gap between move-out and move-in is common. Rather than rushing or improvising, we hold your goods in a controlled facility until the destination is ready."
        image={warehouseImg}
        imageAlt="Organised warehouse with stacked cartons and furniture in storage"
      />

      {/* Storage types */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Storage options"
            title="Short-term and long-term, both handled the same way"
            intro="Whether you need storage for three days or three months, the process is the same: inventory, access control, and a transparent rate."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {storageTypes.map((t) => (
              <div
                key={t.title}
                className="border border-border bg-card p-8 shadow-card transition-colors hover:border-gold/60"
              >
                <span className="inline-block rounded-sm border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-gold-muted">
                  {t.periods}
                </span>
                <h3 className="mt-5 text-2xl text-navy-deep">{t.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Storage Facilities"
            title="Inside our warehousing units"
            intro="Take a look at how items are catalogued, shelved, and protected in our Visakhapatnam storage hubs."
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

      {/* Features list */}
      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we manage your goods"
            title="Every item accounted for from intake to retrieval"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f} className="flex gap-4 border border-border bg-card p-6 shadow-card">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm leading-relaxed text-muted-foreground">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust cards */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Facility standards"
            title="Security and environment, not just a shed"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <InfoCard icon={<Lock className="h-6 w-6" />} title="Access control">
              Entry is restricted and logged. Retrieval appointments are confirmed in advance so
              your goods are handled only when you authorise it.
            </InfoCard>
            <InfoCard icon={<Shield className="h-6 w-6" />} title="Protected environment">
              The facility is secured against moisture, pests and temperature extremes relevant to
              household and commercial goods.
            </InfoCard>
            <InfoCard icon={<ClipboardList className="h-6 w-6" />} title="Written inventory">
              Every item is listed on intake. The same inventory is checked when goods leave, so
              nothing leaves unaccounted.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-deep section">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <p className="eyebrow text-gold">Need storage?</p>
          <h2 className="max-w-2xl text-3xl text-white md:text-4xl">
            Tell us the volume to store and the duration required, and we will confirm availability
            and rates.
          </h2>
          <a
            href={whatsappLink(
              "Hello, I would like to enquire about warehousing and storage with Andhra Mini Transport.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
          >
            <MessageCircle className="h-4 w-4" />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      <QuoteCta
        title="Storage as part of a larger move?"
        body="If you need storage in the middle of a relocation, we can quote it as a combined service. Share the details and we will cover everything in one plan."
      />
    </>
  );
}
