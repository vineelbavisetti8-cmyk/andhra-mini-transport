import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Star } from "lucide-react";
import { Logo } from "./Logo";
import { services, site, telLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-sm leading-relaxed">
            Established in {site.established} in Visakhapatnam. Household, commercial and vehicle
            relocation handled end to end, anywhere in India.
          </p>
          <p className="flex items-center gap-2 text-sm text-gold">
            <Star className="h-4 w-4 fill-current" />
            {site.rating.value} rating from {site.rating.count} Google reviews
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] text-white">QUICK LINKS</h3>
          <span className="gold-rule mt-3" />
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/gallery", label: "Gallery" },
              { to: "/pricing", label: "Get a Quote" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] text-white">SERVICES</h3>
          <span className="gold-rule mt-3" />
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.path} className="transition-colors hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] text-white">CONTACT</h3>
          <span className="gold-rule mt-3" />
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.addressLine}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={telLink} className="transition-colors hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="text-gold">Trusted since {site.established} — Pan India Relocation</span>
        </div>
      </div>
    </footer>
  );
}
