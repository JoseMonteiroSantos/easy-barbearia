import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Scissors,
  Sparkles,
  Users,
  Coffee,
} from "lucide-react";

import Container from "@/src/components/ui/Container";

const BOOKING_URL =
  "https://sites.appbarber.com.br/ousebarbearialt-0vas";

const highlights = [
  {
    icon: Scissors,
    title: "Precisão",
    description: "Técnica em cada detalhe.",
  },
  {
    icon: Sparkles,
    title: "Estilo",
    description: "Do seu jeito.",
  },
  {
    icon: Users,
    title: "Atendimento personalizado",
    description: "Sempre com atenção ao seu estilo.",
  },
  {
    icon: Coffee,
    title: "Ambiente descontraído",
    description: "Boa conversa faz parte da experiência.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#111111] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* detalhes decorativos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.05]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-20 top-10 h-[240px] w-[240px] rotate-45 border border-white/[0.04]"
      />

      <Container>
        {/* =====================================================
            CONTEÚDO PRINCIPAL
            ===================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">
          {/* =================================================
              TEXTO
              ================================================= */}

          <div className="relative z-10">
            {/* eyebrow */}

            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#8f8f8c]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b7b7b3]">
                Sobre a Silva&apos;s
              </span>
            </div>

            {/* título */}

            <h2 className="font-display mt-7 text-[clamp(3rem,5vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-white">
              Mais que uma
              <br />

              <span className="text-[#9d9d99]">
                barbearia.
              </span>
            </h2>

            {/* texto */}

            <p className="mt-8 max-w-xl text-[15px] leading-7 text-white/80 sm:text-base sm:leading-8">
              A Silva&apos;s nasceu com o propósito de atender às
              necessidades do homem moderno, criando um espaço onde
              cuidado, estilo e bem-estar fazem parte da mesma
              experiência.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-[15px]">
              Em um ambiente descontraído, informal e acolhedor,
              unimos agilidade e precisão a uma boa conversa.
              Nossa equipe está preparada para realizar cortes
              tradicionais, modernos e criativos, sempre respeitando
              o estilo e as preferências de cada cliente.
            </p>

            {/* CTA */}

                  <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff" }}
                className="
                  group
                  mt-8
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.04]
                  px-6
                  text-sm
                  font-semibold
                  shadow-sm
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/40
                  hover:bg-white/[0.10]
                "
              >
                <CalendarDays
                  size={17}
                  color="#ffffff"
                  className="opacity-70 transition-opacity group-hover:opacity-100"
                />

                <span style={{ color: "#ffffff" }}>
                  Agendar horário
                </span>

                <ArrowRight
                  size={17}
                  color="#ffffff"
                  className="opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </a>
          </div>

          {/* =================================================
              FOTO
              ================================================= */}

          <div className="relative">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1a1a1a] sm:rounded-[2rem]">
              <div className="relative aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/images/about/barbearia.webp"
                  alt="Interior da Silva's Barbearia em Belo Horizonte"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />

                {/* tratamento visual */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />

                {/* selo inferior */}

                <div className="absolute bottom-5 right-5">
                  <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-white/25 bg-black/35 backdrop-blur-md sm:h-[82px] sm:w-[82px]">
                    <Scissors
                      size={22}
                      className="text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIFERENCIAIS
            ===================================================== */}

        <div className="mt-14 border-t border-white/10 pt-8 lg:mt-16">
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    flex gap-4 py-5
                    sm:px-6
                    lg:px-7

                    ${
                      index !== 0
                        ? "lg:border-l lg:border-white/10"
                        : ""
                    }

                    ${
                      index % 2 !== 0
                        ? "sm:border-l sm:border-white/10"
                        : ""
                    }
                  `}
                >
                  {/* ícone */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#c7c7c4]">
                    <Icon size={19} />
                  </div>

                  {/* conteúdo */}

                  <div>
                    <h3 className="font-display text-sm font-semibold leading-5 text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-white/40">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}