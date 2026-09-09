import { createFileRoute } from '@tanstack/react-router'
import corporateImg from "@/assets/corporate.jpg";
import heroImg from "@/assets/hero-truck.jpg";
import hhPackImg from "@/assets/hh-packing.png";
import hhLoadImg from "@/assets/hh-loading.png";
import hhDeliverImg from "@/assets/hh-delivery.png";
import intercityHighwayImg from "@/assets/intercity-highway.png";
import intercityPlanningImg from "@/assets/intercity-planning.png";
import intercityUnloadImg from "@/assets/intercity-unloading.png";
import vehicleCarrierImg from "@/assets/vehicle-carrier.png";
import vehicleLoadingImg from "@/assets/vehicle-loading.png";
import warehouseInteriorImg from "@/assets/warehouse-interior.png";
import warehouseInventoryImg from "@/assets/warehouse-inventory.png";
import corporatePackImg from "@/assets/corporate-packing.png";
import corporateLoadImg from "@/assets/corporate-loading.png";
import { JsonLd, QuoteCta, SectionHeading } from "@/components/site/Blocks";
import { localBusinessJsonLd, pageMeta } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageMeta({
      title: "Gallery | Andhra Mini Transport & Travels — Packers and Movers",
      description:
        "View images of Andhra Mini Transport operations — household packing, vehicle loading, warehouse storage and transport trucks. Based in Visakhapatnam, operating pan-India.",
    }),
  component: Gallery,
});

const galleryItems = [
  {
    src: heroImg,
    alt: "Andhra Mini Transport truck ready for long-distance relocation",
    caption: "Long-distance transport",
    span: "lg:col-span-2",
  },
  {
    src: hhPackImg,
    alt: "Household furniture wrapped with protective bubble wrap",
    caption: "Household packing",
    span: "",
  },
  {
    src: hhLoadImg,
    alt: "Movers loading furniture and cartons via ramp",
    caption: "Ramp loading",
    span: "",
  },
  {
    src: hhDeliverImg,
    alt: "Household furniture safely placed inside new home",
    caption: "Home delivery & placement",
    span: "",
  },
  {
    src: vehicleCarrierImg,
    alt: "Specialized vehicle carrier on highway",
    caption: "Vehicle carrier",
    span: "",
  },
  {
    src: vehicleLoadingImg,
    alt: "Car being carefully loaded onto transport ramp",
    caption: "Car ramp loading",
    span: "",
  },
  {
    src: intercityHighwayImg,
    alt: "Container transport truck on national highway",
    caption: "Intercity highway transit",
    span: "lg:col-span-2",
  },
  {
    src: intercityPlanningImg,
    alt: "Logistics coordinator mapping transit routes",
    caption: "Route & transit planning",
    span: "",
  },
  {
    src: intercityUnloadImg,
    alt: "Unloading goods at destination location",
    caption: "Destination unloading",
    span: "",
  },
  {
    src: warehouseInteriorImg,
    alt: "Modern warehouse facility with racks and forklift",
    caption: "Warehousing & storage",
    span: "",
  },
  {
    src: warehouseInventoryImg,
    alt: "Warehouse staff scanning inventory barcodes",
    caption: "Barcoded inventory tracking",
    span: "",
  },
  {
    src: corporatePackImg,
    alt: "IT equipment and monitors packed for office relocation",
    caption: "Corporate IT packing",
    span: "",
  },
  {
    src: corporateLoadImg,
    alt: "Office movers navigating equipment through building lobby",
    caption: "Office equipment moving",
    span: "lg:col-span-2",
  },
] as const;

function Gallery() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd("Gallery")} />

      {/* Hero */}
      <section className="bg-navy-deep pt-32 pb-16">
        <div className="container-page">
          <p className="eyebrow text-gold">Gallery</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-white md:text-5xl">
            Packing, loading, storage and transport — the work we do
          </h1>
          <span className="gold-rule mt-7" />
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75">
            The images below show our operations across service types. This gallery is structured to
            be updated with actual company photographs — each grid slot corresponds to a specific
            service area.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our work"
            title="Across service types and locations"
            intro="Each image below represents a service category. Company photographs can be placed directly into these slots without changing the layout."
          />

          {/*
           * Gallery grid — swap-ready.
           * Replace each src with a real company photo.
           * The grid uses a 1/2/3 column responsive layout.
           * Items with lg:col-span-2 span two columns on large screens for visual variety.
           */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <figure
                key={item.alt}
                className={`group relative overflow-hidden border border-border bg-card shadow-card ${item.span}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Caption overlay */}
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 bg-navy-deep/85 px-5 py-3 text-xs font-semibold tracking-[0.18em] text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption.toUpperCase()}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Client photo swap note */}
          <p className="mt-8 border border-dashed border-border p-5 text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-navy-deep">For the client:</span> Replace the images
            above with real company photographs by updating the{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">src/assets/</code>{" "}
            directory. Each slot is 4:3 aspect ratio and at least 800px wide for best results. No
            code changes are required.
          </p>
        </div>
      </section>

      <QuoteCta
        title="Ready to plan your move?"
        body="Send the pickup and delivery cities on WhatsApp and we will respond with a quote."
      />
    </>
  );
}
