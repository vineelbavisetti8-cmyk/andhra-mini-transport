import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { services, telLink, whatsappLink } from "@/lib/site";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/pricing", label: "Get a Quote" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-navy-deep shadow-elevated" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" aria-label={`${"Andhra Mini Transport"} home`}>
          <Logo variant="light" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm font-medium text-white/80 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-gold hover:text-gold"
          >
            <MessageCircle className="h-[1.15rem] w-[1.15rem]" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light sm:inline-flex"
          >
            Get Instant Quote
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-sm text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-deep pb-6 lg:hidden">
          <nav className="container-page flex flex-col pt-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-white/10 py-3 text-sm font-medium text-white/85"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 text-xs font-semibold tracking-[0.18em] text-white/45">
              SERVICES
            </div>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={s.path}
                className="border-b border-white/10 py-2.5 text-sm text-white/70"
              >
                {s.title}
              </Link>
            ))}
            <a
              href={telLink}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call 09440147473
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
