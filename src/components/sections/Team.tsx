"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Scissors,
} from "lucide-react";

import Container from "@/src/components/ui/Container";

const BOOKING_URL =
  "https://sites.appbarber.com.br/ousebarbearialt-0vas";

const professionals = [
  {
    name: "Matheus",
    role: "Barbeiro e empreendedor",
    experience: "Barbeiro há 9 anos.",
    image: "/images/professionals/matheus.webp",
  },
  {
    name: "Rafael",
    role: "Barbeiro e empreendedor",
    experience: "Barbeiro há 7 anos.",
    image: "/images/professionals/rafael.webp",
  },
  {
    name: "Davyd",
    role: "Barbeiro e empreendedor",
    experience: "Barbeiro há 7 anos.",
    image: "/images/professionals/davyd.webp",
  },
];

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousProfessional = () => {
    setActiveIndex((current) =>
      current === 0 ? professionals.length - 1 : current - 1,
    );
  };

  const nextProfessional = () => {
    setActiveIndex((current) =>
      current === professionals.length - 1 ? 0 : current + 1,
    );
  };

  const activeProfessional = professionals[activeIndex];

  return (
    <section
      id="profissionais"
      className="overflow-hidden bg-[#eeeeec] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* =====================================================
            CABEÇALHO
            ===================================================== */}

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#929292]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#686868]">
                Nossa equipe
              </span>
            </div>

            <h2 className="font-display mt-5 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#151515]">
              Quem cuida
              <br />

              <span className="text-[#60605d]">
                do seu estilo.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#686868] sm:text-right sm:text-[15px]">
            Profissionais preparados para oferecer um atendimento
            personalizado em cada detalhe.
          </p>
        </div>

        {/* =====================================================
            DESKTOP
            ===================================================== */}

        <div className="mt-12 hidden grid-cols-3 gap-5 md:grid lg:gap-6">
          {professionals.map((professional) => (
            <ProfessionalCard
              key={professional.name}
              professional={professional}
            />
          ))}
        </div>

        {/* =====================================================
            MOBILE
            ===================================================== */}

        <div className="mt-10 md:hidden">
          {/* CARD ATIVO */}

          <div
            key={activeProfessional.name}
            className="animate-fade-in"
          >
            <ProfessionalCard
              professional={activeProfessional}
            />
          </div>

          {/* CONTROLES */}

          <div className="mt-5 flex items-center justify-between">
            {/* CONTADOR */}

            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-semibold text-[#151515]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="h-px w-8 bg-[#b8b8b5]" />

              <span className="text-xs text-[#929292]">
                {String(professionals.length).padStart(2, "0")}
              </span>
            </div>

            {/* SETAS */}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousProfessional}
                aria-label="Profissional anterior"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c9c9c6]
                  text-[#151515]
                  transition
                  active:scale-95
                "
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={nextProfessional}
                aria-label="Próximo profissional"
                style={{ color: "#ffffff" }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#111111]
                  transition
                  active:scale-95
                "
              >
                <ArrowRight
                  size={17}
                  color="#ffffff"
                />
              </button>
            </div>
          </div>

          {/* INDICADORES */}

          <div className="mt-6 flex gap-2">
            {professionals.map((professional, index) => (
              <button
                key={professional.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver ${professional.name}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-10 bg-[#151515]"
                    : "w-5 bg-[#c9c9c6]"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CARD DO PROFISSIONAL
   ========================================================= */

type Professional = {
  name: string;
  role: string;
  experience: string;
  image: string;
};

function ProfessionalCard({
  professional,
}: {
  professional: Professional;
}) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-[#151515]">
      {/* =====================================================
          FOTO
          ===================================================== */}

      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={professional.image}
          alt={`${professional.name} - ${professional.role} da Silva's Barbearia`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
        />

        {/* SOMBREAMENTO */}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/5" />

        {/* BADGE */}

        <div className="absolute left-5 top-5">
          <span
            style={{ color: "#ffffff" }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-black/30
              px-3
              py-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.16em]
              backdrop-blur-md
            "
          >
            <Scissors
              size={11}
              color="#ffffff"
            />

            Silva&apos;s Team
          </span>
        </div>

        {/* =====================================================
            INFORMAÇÕES
            ===================================================== */}

        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
          <span
            style={{ color: "rgba(255,255,255,0.6)" }}
            className="text-[9px] font-semibold uppercase tracking-[0.18em]"
          >
            {professional.role}
          </span>

          <h3
            style={{ color: "#ffffff" }}
            className="font-display mt-2 text-3xl font-semibold tracking-[-0.04em] lg:text-4xl"
          >
            {professional.name}
          </h3>

          {/* EXPERIÊNCIA */}

          <div className="mt-3 flex items-center gap-3">
            <span className="h-px w-6 bg-white/40" />

            <p
              style={{ color: "rgba(255,255,255,0.72)" }}
              className="text-sm font-medium"
            >
              {professional.experience}
            </p>
          </div>

          {/* CTA */}

          <div className="mt-6 border-t border-white/15 pt-5">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#111111" }}
              className="
                inline-flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#dededb]
                px-5
                text-xs
                font-semibold
                transition
                duration-200
                hover:bg-white
              "
            >
              <CalendarDays size={15} />

              Agendar horário
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}