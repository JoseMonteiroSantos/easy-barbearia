"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

import Container from "@/src/components/ui/Container";

const reviews = [
  {
    name: "Philippe Braga",
    text: "Excelente atendimento. Se quiser cortar cabelo com barbeiro competente e dar umas boas risadas aqui eh o local. Preço justo, atendimento de qualidade, atualizados nos procedimentos.",
    rating: 5,
  },
  {
    name: "Leandro Ponte",
    text: "Zero defeitos. Esses caras mandam super bem. Demorei para achar um barbeiro em BH, mas agora virei cliente e não troco!",
    rating: 5,
  },
  {
    name: "Daniel Fernandes",
    text: "Ótima barbearia, já corto a três anos 👍",
    rating: 5,
  },
 {
    name: "Marco Aurélio Schneider Loureiro",
    text: "Atendimento especial, sempre deixo pra última hora e fazem de tudo pra me encaixar. Sempre atenciosos e o corte com qualidade. Possuem cerveja, refrigerante, etc. Recomendo!!!",
    rating: 5,
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    );
  };

  const nextReview = () => {
    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1,
    );
  };

  const activeReview = reviews[activeIndex];

  return (
    <section
      id="avaliacoes"
      className="bg-[#f7f7f5] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-20">
          {/* =================================================
              INTRODUÇÃO
              ================================================= */}

          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#929292]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#686868]">
                Avaliações
              </span>
            </div>

            <h2 className="font-display mt-5 text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#151515]">
              Quem conhece,
              <br />

              <span className="text-[#60605d]">
                recomenda.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#686868] sm:text-[15px]">
              A experiência de quem já passou pela Silva&apos;s é
              parte importante da nossa história.
            </p>

            {/* NOTA */}

            <div className="mt-8 flex items-center gap-4">
              <strong className="font-display text-4xl font-semibold tracking-[-0.04em] text-[#151515]">
                5.0
              </strong>

              <div>
                <div className="flex gap-1 text-[#555553]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>

                <span className="mt-1 block text-[10px] uppercase tracking-[0.12em] text-[#929292]">
                  Avaliação dos clientes
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              AVALIAÇÃO EM DESTAQUE
              ================================================= */}

          <div className="relative rounded-[1.75rem] bg-[#111111] p-7 sm:p-10 lg:p-12">
            {/* ASPAS */}

            <Quote
              size={42}
              strokeWidth={1}
              className="text-white/15"
            />

            {/* ESTRELAS */}

            <div className="mt-7 flex gap-1">
              {Array.from({
                length: activeReview.rating,
              }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill="#c7c7c4"
                  color="#c7c7c4"
                />
              ))}
            </div>

            {/* TEXTO */}

            <blockquote
              key={`${activeReview.name}-${activeIndex}`}
              className="animate-fade-in"
            >
              <p
                style={{ color: "#ffffff" }}
                className="font-display mt-7 max-w-2xl text-2xl font-medium leading-[1.35] tracking-[-0.025em] sm:text-3xl lg:text-[2rem]"
              >
                “{activeReview.text}”
              </p>

              <footer className="mt-8 border-t border-white/10 pt-6">
                <strong
                  style={{ color: "#ffffff" }}
                  className="block text-sm font-semibold"
                >
                  {activeReview.name}
                </strong>

                <span
                  style={{
                    color: "rgba(255,255,255,0.45)",
                  }}
                  className="mt-1 block text-xs"
                >
                  Cliente Silva&apos;s Barbearia
                </span>
              </footer>
            </blockquote>

            {/* CONTROLES */}

            <div className="mt-8 flex items-center justify-between">
              {/* INDICADORES */}

              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ver avaliação ${index + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-9 bg-white"
                        : "w-4 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              {/* SETAS */}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previousReview}
                  aria-label="Avaliação anterior"
                  style={{ color: "#ffffff" }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:bg-white/10"
                >
                  <ArrowLeft
                    size={17}
                    color="#ffffff"
                  />
                </button>

                <button
                  type="button"
                  onClick={nextReview}
                  aria-label="Próxima avaliação"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dededb] transition hover:bg-white"
                >
                  <ArrowRight
                    size={17}
                    color="#111111"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}