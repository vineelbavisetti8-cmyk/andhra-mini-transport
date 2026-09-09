import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Heart, MapPin, Route as RouteIcon, ShieldCheck, Users } from "lucide-react";
import householdImg from "@/assets/household.jpg";
import intercityImg from "@/assets/intercity.jpg";
import { InfoCard, JsonLd, QuoteCta, SectionHeading } from "@/components/site/Blocks";
import { localBusinessJsonLd, pageMeta, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About Andhra Mini Transport & Travels | Packers and Movers since 1993",
      description:
        "Andhra Mini Transport & Travels has operated from Visakhapatnam since 1993. Learn about our 30+ year history, values and pan-India reach.",
    }),
  component: About,
});

const values = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Integrity in every quote",
    body: "We do not offer rates we cannot honour. Every quote is based on a genuine assessment and remains what we charge.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Care for every item",
    body: "We apply the same packing standards to a cardboard carton as to an antique. There is no tier of care based on perceived value.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Accountability throughout",
    body: "The person who quotes your move is responsible for it. We do not hand your file to a subcontractor and walk away.",
  },
  {
    icon: <RouteIcon className="h-6 w-6" />,
    title: "Reliability on the day",
    body: "A confirmed date means we show up. We do not reschedule unilaterally or leave customers waiting for loading crews.",
  },
];

function About() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd("About Us")} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep pt-32 pb-16 md:pt-44 md:pb-24">
        <img
          src={intercityImg}
          alt="Transport truck on the road — Andhra Mini Transport operations"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="container-page relative">
          <p className="eyebrow text-gold">Our story</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight text-white md:text-5xl">
            Thirty years of moving homes and businesses. The same family, the same city.
          </h1>
          <span className="gold-rule mt-7" />
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75">
            Andhra Mini Transport &amp; Travels was founded in 1993 in Visakhapatnam by a family
            with deep roots in the logistics and transport business. What began as a local household
            shifting operation grew steadily into a pan-India relocation service, still run from the
            same base in MVP Colony, Vizag.
          </p>
        </div>
      </section>

      {/* Company story */}
      <section className="section">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Established 1993"
              title="Three decades of doing this one thing well"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                When we started in 1993, most moves were local — families shifting within
                Visakhapatnam, businesses moving to a larger office nearby. The work was physical
                and relationship-driven. Referrals came from satisfied customers, not
                advertisements. That has not changed.
              </p>
              <p>
                Over the following decades, long-distance relocation became a growing part of our
                work. Families moving for employment to Hyderabad, Bengaluru, Chennai, Pune and
                Delhi began calling us because someone they trusted had used us before. We built a
                network of transport partners and destination-side coordinators to handle the full
                chain.
              </p>
              <p>
                Today we handle household moves, vehicle transportation, warehousing and full
                corporate relocations — from Visakhapatnam and across India. The operation is larger
                but the working style is the same: one point of contact, honest pricing, and goods
                that arrive as they were packed.
              </p>
              <p>
                Our rating on Google reflects customers who trusted us with their entire household
                or business and found that trust was warranted. We intend to keep it that way.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border border-border bg-card p-8 shadow-card">
              <div className="flex items-center gap-4">
                <CalendarCheck className="h-8 w-8 text-gold" />
                <div>
                  <p className="text-3xl font-bold text-navy-deep">{site.experience}</p>
                  <p className="text-sm text-muted-foreground">Years in operation</p>
                </div>
              </div>
            </div>
            <div className="border border-border bg-card p-8 shadow-card">
              <div className="flex items-center gap-4">
                <RouteIcon className="h-8 w-8 text-gold" />
                <div>
                  <p className="text-3xl font-bold text-navy-deep">Pan-India</p>
                  <p className="text-sm text-muted-foreground">Coverage from Visakhapatnam</p>
                </div>
              </div>
            </div>
            <div className="border border-border bg-card p-8 shadow-card">
              <div className="flex items-center gap-4">
                <MapPin className="h-8 w-8 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-navy-deep">{site.addressLine}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Headquarters — established here since 1993
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-deep section">
        <div className="container-page">
          <SectionHeading
            light
            eyebrow="How we work"
            title="Four principles that have not changed in thirty years"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title}>
                <div className="text-gold">{v.icon}</div>
                <h3 className="mt-5 text-lg text-white">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Where we operate"
              title="Headquartered in Vizag, reaching every state"
              intro="Our office, loading base and storage facility are all in MVP Colony, Visakhapatnam. Long-distance moves are coordinated from this base using our own transport fleet and trusted partner carriers nationwide."
            />
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-muted-foreground">{site.addressLine}</span>
              </li>
              <li className="flex gap-3">
                <RouteIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-muted-foreground">
                  Long-distance moves to any city or state in India, with coordination at both
                  origin and destination.
                </span>
              </li>
            </ul>
          </div>
          <div className="border border-border shadow-card">
            <iframe
              title="Andhra Mini Transport location — Visakhapatnam"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3800.068300504791!2d83.32542347517312!3d17.741420683207394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQ0JzI5LjEiTiA4M8KwMTknNDAuOCJF!5e0!3m2!1sen!2sin!4v1788933182929!5m2!1sen!2sin"
              className="h-[380px] w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      {/* Fleet / team placeholder */}
      <section className="bg-secondary section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our team and fleet"
            title="Trained people and appropriate equipment for every move type"
            intro="We staff moves with trained loaders and packers who work under the same coordinator throughout the job. Transport is matched to the volume and distance of each move."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden border border-border shadow-card">
              <img
                src={householdImg}
                alt="Andhra Mini Transport packing team at work"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl text-navy-deep">Packing and handling team</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our packing crew is trained in material selection, wrapping technique and loading
                  order. The same crew that packs supervises the load to ensure nothing moves in
                  transit.
                </p>
              </div>
            </div>
            <div className="overflow-hidden border border-border shadow-card">
              <img
                src={intercityImg}
                alt="Andhra Mini Transport vehicle fleet for long-distance moves"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl text-navy-deep">Transport fleet</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We deploy the vehicle type appropriate for the move — small tempo for local
                  shifts, full body trucks for household loads, and specialist carriers for
                  vehicles. Long-distance routes use partner fleets vetted over many years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta
        title="Trusted for 30 years. Ready for your move."
        body="Enquire on WhatsApp or call us directly. We respond with a considered assessment, not a call-centre script."
      />
    </>
  );
}
