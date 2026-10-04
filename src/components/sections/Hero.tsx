"use client";

import { useState } from "react";

import {
  ArrowDown,
  CalendarDays,
  MapPin,
  Star,
  Volume2,
  VolumeX,
} from "lucide-react";

import Container from "@/src/components/ui/Container";

const BOOKING_URL = "https://sites.appbarber.com.br/ousebarbearialt-0vas";

export default function Hero() {

const [isMuted, setIsMuted] = useState(true);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#eeeeec] pt-[76px] lg:pt-[86px]"
    >
      {/* Luz de fundo bem sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 h-[500px] w-[500px] rounded-full bg-white/50 blur-[100px]"
      />

      <Container>
        <div className="grid min-h-[calc(100svh-76px)] items-center gap-10 py-10 sm:py-14 lg:min-h-[calc(100vh-86px)] lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-16">
          {/* =================================================
              CONTEÚDO
              ================================================= */}

          <div className="relative z-10 lg:py-10">
            <span className="eyebrow">
              Barbearia em Belo Horizonte
            </span>

            <h1 className="heading-display mt-6 max-w-[720px] text-[clamp(3.4rem,8vw,7rem)] text-[#151515]">
              Seu estilo.
              <br />

              <span className="text-[#555553]">
                Nossa
                <br />
                identidade.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#686868] sm:text-base sm:leading-8">
              Mais que um corte, uma experiência feita para quem
              valoriza estilo, cuidado e atenção aos detalhes.
              Conheça a Silva&apos;s Barbearia e encontre o seu
              próximo visual.
            </p>

            {/* BOTÕES */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff" }}
                className="
                  btn
                  sm:min-w-[190px]
                  border-[#111111]
                  bg-[#111111]
                  shadow-[0_12px_30px_rgba(0,0,0,0.16)]
                  transition-all
                  duration-200
                  hover:border-[#292929]
                  hover:bg-[#292929]
                  hover:shadow-[0_16px_35px_rgba(0,0,0,0.20)]
                "
            >
              <CalendarDays
                size={18}
                color="#ffffff"
              />

              <span style={{ color: "#ffffff" }}>
                Agendar horário
              </span>
            </a>

              <a
                href="#servicos"
                className="btn btn-outline sm:min-w-[180px]"
              >
                Conhecer serviços

                <ArrowDown size={17} />
              </a>
            </div>

            {/* PROVA SOCIAL */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[#d0d0cd] pt-6">
              <div>
                <div className="flex items-center gap-1 text-[#737371]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="mt-1.5 text-xs font-medium text-[#686868]">
                  Experiência aprovada pelos clientes
                </p>
              </div>

              <div className="hidden h-9 w-px bg-[#d0d0cd] sm:block" />

              <div className="flex items-center gap-2 text-xs font-medium text-[#686868]">
                <MapPin
                  size={15}
                  className="text-[#737371]"
                />

                Castelo • Belo Horizonte
              </div>
            </div>
          </div>

         
  {/* =================================================
    VÍDEO PRINCIPAL
    ================================================= */}

        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0c0c0c] shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:rounded-[2.5rem]">
            
            <div
              className="
                relative
                aspect-[4/5]
                sm:aspect-[5/6]
                lg:aspect-[5/6]
                lg:max-h-[680px]
                xl:aspect-[6/7]
                xl:max-h-[720px]
              "
            >
              <video
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                aria-label="Silva's Barbearia"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-center
                  lg:scale-[1.05]
                "
              >
                <source
                  src="/videos/hero-barbearia.mp4"
                  type="video/mp4"
                />

                Seu navegador não suporta vídeos HTML5.
              </video>


              {/* Badge superior */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span
                  style={{ color: "#ffffff" }}
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-white/20
                    bg-black/20
                    px-3
                    py-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    backdrop-blur-md
                  "
                >
                  Silva&apos;s Barbearia
                </span>
              </div>

              {/* Controle de áudio */}
              <button
                type="button"
                onClick={() => setIsMuted((current) => !current)}
                aria-label={isMuted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
                title={isMuted ? "Ativar som" : "Desativar som"}
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-black/30
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:bg-black/50
                  active:scale-95
                  sm:right-7
                  sm:top-7
                "
              >
                {isMuted ? (
                  <VolumeX size={17} color="#ffffff" />
                ) : (
                  <Volume2 size={17} color="#ffffff" />
                )}
              </button>

              {/* Conteúdo inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d0d0cc]">
                      Experiência Silva&apos;s
                    </span>

                    <p
                      style={{ color: "#ffffff" }}
                      className="font-display mt-2 max-w-xs text-xl font-semibold leading-tight sm:text-2xl"
                    >
                      Cuidado em cada detalhe.
                    </p>
                  </div>

                  <span
                    style={{ color: "rgba(255,255,255,0.8)" }}
                    className="
                      hidden
                      rounded-full
                      border
                      border-white/20
                      bg-black/30
                      px-4
                      py-2
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      backdrop-blur-md
                      sm:block
                    "
                  >
                    Belo Horizonte
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </Container>

      {/* =====================================================
          RODAPÉ DA HERO
          ===================================================== */}

      <div className="border-t border-[#d0d0cd]">
        <Container>
          <div className="flex min-h-14 items-center justify-center py-3 text-center sm:justify-between sm:text-left">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7d7d7a]">
              Corte • Barba • Estilo • Cuidado
            </span>

            <a
              href="#servicos"
              className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#686868] transition hover:text-[#151515] sm:flex"
            >
              Descubra nossos serviços

              <ArrowDown size={13} />
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}