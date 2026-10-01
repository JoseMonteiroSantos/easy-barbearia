import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/553136530430";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Silva's Barbearia pelo WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-[80]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        md:hidden
      "
    >
      <FaWhatsapp
        size={27}
        color="#ffffff"
      />

      <span className="sr-only">
        Falar pelo WhatsApp
      </span>
    </a>
  );
}