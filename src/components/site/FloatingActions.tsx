import { MessageCircle, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <a
        href={telLink}
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-elevated transition-transform hover:scale-105 md:hidden"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Request a quote on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elevated transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
