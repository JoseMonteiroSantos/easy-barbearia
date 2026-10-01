import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Navigation,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "@/src/components/ui/Container";

/* =========================================================
   LINKS
   ========================================================= */

const BOOKING_URL =
  "https://sites.appbarber.com.br/ousebarbearialt-0vas";


const WHATSAPP_URL =
  "https://wa.me/553136530430";

const INSTAGRAM_URL =
  "https://www.instagram.com/silvasbarbeariabh/";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Miguel+Perrela,+355,+Castelo,+Belo+Horizonte,+MG,+31330-290";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Av.+Miguel+Perrela,+355,+Castelo,+Belo+Horizonte,+MG,+31330-290&output=embed";

export default function Location() {
  return (
    <section
      id="localizacao"
      className="overflow-hidden bg-[#111111] py-16 text-white sm:py-20 lg:py-24"
    >
      <Container>
        {/* =====================================================
            CABEÇALHO
            ===================================================== */}

        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#8f8f8c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b7b7b3]">
                Venha nos visitar
              </span>
            </div>

            <h2
              style={{ color: "#ffffff" }}
              className="font-display mt-5 max-w-3xl text-[clamp(2.7rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
            >
              Seu próximo estilo
              <br />

              <span className="text-[#9d9d99]">
                começa aqui.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-[15px]">
              Estamos no bairro Castelo, em Belo Horizonte.
              Escolha seu horário e venha viver a experiência
              Silva&apos;s.
            </p>
          </div>

          {/* CTA */}

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#111111" }}
            className="
              inline-flex
              min-h-12
              w-fit
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#dededb]
              px-6
              text-sm
              font-semibold
              transition
              duration-200
              hover:bg-white
            "
          >
            <CalendarDays size={17} />

            Agendar horário
          </a>
        </div>

        {/* =====================================================
            MAPA
            ===================================================== */}

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1a1a1a]">
          <div className="relative h-[300px] w-full sm:h-[380px] lg:h-[430px]">
            <iframe
              src={MAP_EMBED_URL}
              title="Localização da Silva's Barbearia"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale"
              allowFullScreen
            />

            {/* Sombra discreta */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />

            {/* Badge sobre o mapa */}

            <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-[#111111]/90 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <MapPin
                    size={15}
                    color="#ffffff"
                  />
                </div>

                <div>
                  <strong
                    style={{ color: "#ffffff" }}
                    className="block text-xs font-semibold"
                  >
                    Silva&apos;s Barbearia
                  </strong>

                  <span className="block text-[10px] text-white/45">
                    Castelo • Belo Horizonte
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            INFORMAÇÕES
            ===================================================== */}

        <div className="mt-3 grid gap-0 lg:grid-cols-3">
          {/* =================================================
              ENDEREÇO
              ================================================= */}

          <div className="border-b border-white/10 py-8 lg:border-b-0 lg:border-r lg:pr-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
              <MapPin
                size={17}
                color="#c7c7c4"
              />
            </div>

            <span className="mt-5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Onde estamos
            </span>

            <h3
              style={{ color: "#ffffff" }}
              className="font-display mt-2 text-xl font-semibold"
            >
              Castelo • Belo Horizonte
            </h3>

           <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">
            Av. Miguel Perrela, 355
            <br />
            Castelo — Belo Horizonte, MG
            <br />
            CEP 31330-290
          </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff" }}
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold transition hover:opacity-60"
            >
              <Navigation size={14} />

              Abrir no Google Maps

              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* =================================================
              FUNCIONAMENTO
              ================================================= */}

          <div className="border-b border-white/10 py-8 lg:border-b-0 lg:border-r lg:px-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
              <Clock3
                size={17}
                color="#c7c7c4"
              />
            </div>

            <span className="mt-5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Funcionamento
            </span>

            <div className="mt-4 max-w-xs space-y-3">
              {/* TERÇA E QUARTA */}

              <div className="flex items-center justify-between gap-6">
                <span className="text-sm text-white/65">
                  Terça e quarta
                </span>

                <span
                  style={{ color: "#ffffff" }}
                  className="text-sm font-medium"
                >
                  10:00 — 20:00
                </span>
              </div>

              {/* QUINTA E SEXTA */}

              <div className="flex items-center justify-between gap-6">
                <span className="text-sm text-white/65">
                  Quinta e sexta
                </span>

                <span
                  style={{ color: "#ffffff" }}
                  className="text-sm font-medium"
                >
                  09:00 — 20:00
                </span>
              </div>

              {/* SÁBADO */}

              <div className="flex items-center justify-between gap-6">
                <span className="text-sm text-white/65">
                  Sábado
                </span>

                <span
                  style={{ color: "#ffffff" }}
                  className="text-sm font-medium"
                >
                  08:00 — 17:00
                </span>
              </div>

              {/* DOMINGO */}

              <div className="flex items-center justify-between gap-6">
                <span className="text-sm text-white/65">
                  Domingo
                </span>

                <span className="text-sm text-white/35">
                  Fechado
                </span>
              </div>

              {/* SEGUNDA */}

              <div className="flex items-center justify-between gap-6">
                <span className="text-sm text-white/65">
                  Segunda
                </span>

                <span className="text-sm text-white/35">
                  Fechado
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTATO
              ================================================= */}

          <div className="py-8 lg:pl-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
              <MessageCircle
                size={17}
                color="#c7c7c4"
              />
            </div>

            <span className="mt-5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
              Fale com a gente
            </span>

            <h3
              style={{ color: "#ffffff" }}
              className="font-display mt-2 text-xl font-semibold"
            >
              Estamos por perto.
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-6 text-white/50">
              Entre em contato para tirar dúvidas ou acompanhe
              a Silva&apos;s nas redes sociais.
            </p>

            {/* REDES */}

            <div className="mt-5 flex items-center gap-2">
              {/* WHATSAPP */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Silva's Barbearia"
                style={{ color: "#ffffff" }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  transition
                  duration-200
                  hover:border-white/30
                  hover:bg-white/10
                "
              >
                <FaWhatsapp size={18} />
              </a>

              {/* INSTAGRAM */}

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Silva's Barbearia"
                style={{ color: "#ffffff" }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  transition
                  duration-200
                  hover:border-white/30
                  hover:bg-white/10
                "
              >
                <FaInstagram size={18} />
              </a>
            </div>

            {/* AGENDAMENTO */}

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff" }}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold transition hover:opacity-60"
            >
              <CalendarDays size={14} />

              Agendamento online

              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}