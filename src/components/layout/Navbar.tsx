"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  CalendarDays,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

import Container from "@/src/components/ui/Container";

const BOOKING_URL = "https://sites.appbarber.com.br/ousebarbearialt-0vas";
const WHATSAPP_URL = "https://wa.me/553136530430";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Profissionais", href: "#profissionais" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <header
        className={`fixed left-0 top-0 z-[80] w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#0a0a0a]/95 shadow-lg backdrop-blur-xl"
            : "border-white/10 bg-[#0a0a0a]"
        }`}
      >
        <Container>
          <nav className="flex h-[76px] items-center justify-between lg:h-[86px]">
            {/* =================================================
                LOGO
                ================================================= */}

            <a
              href="#inicio"
              aria-label="Silva's Barbearia - Início"
              className="relative z-10 flex shrink-0 items-center"
            >
              <Image
                src="/images/logo/logo-white.png"
                alt="Silva's Barbearia"
                width={180}
                height={70}
                priority
                className="h-[48px] w-auto object-contain sm:h-[52px] lg:h-[60px]"
              />
            </a>

            {/* =================================================
                LINKS DESKTOP
                ================================================= */}

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{ color: "#ffffff" }}
                  className="
                    group
                    relative
                    py-3
                    text-[14px]
                    font-medium
                    transition-opacity
                    duration-200
                    hover:opacity-70
                  "
                >
                  {item.label}

                  {/* Linha prata */}
                  <span
                    className="
                      absolute
                      bottom-1
                      left-0
                      h-px
                      w-0
                      bg-[#c7c7c4]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </a>
              ))}
            </div>

            {/* =================================================
                AÇÕES DESKTOP
                ================================================= */}

            <div className="hidden items-center gap-3 lg:flex">
              {/* WhatsApp */}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp"
                style={{ color: "#ffffff" }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.03]
                  transition
                  duration-200
                  hover:border-white/40
                  hover:bg-white/10
                "
              >
                <MessageCircle size={18} />
              </a>

              {/* Agendamento */}

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#c7c7c4]
                  px-5
                  text-[14px]
                  font-semibold
                  text-[#0a0a0a]
                  shadow-lg
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#e0e0dd]
                "
              >
                <CalendarDays size={17} />

                Agendar horário
              </a>
            </div>

            {/* =================================================
                MOBILE ACTIONS
                ================================================= */}

            <div className="flex items-center gap-2 lg:hidden">
              {/* Agendamento */}

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar horário"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#c7c7c4]
                  text-[#0a0a0a]
                  transition
                  hover:bg-[#e0e0dd]
                "
              >
                <CalendarDays size={17} />
              </a>

              {/* Menu */}

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menu"
                style={{ color: "#ffffff" }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.05]
                  transition
                  hover:bg-white/10
                "
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* =====================================================
          MENU MOBILE
          ===================================================== */}

      <div
        className={`fixed inset-0 z-[100] transition ${
          menuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        } lg:hidden`}
      >
        {/* Overlay */}

        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}

        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-[#101010] p-6 shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Topo */}

          <div className="flex items-center justify-between">
            <Image
              src="/images/logo/logo-white.png"
              alt="Silva's Barbearia"
              width={160}
              height={60}
              className="h-12 w-auto object-contain"
            />

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              style={{ color: "#ffffff" }}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.05]
                transition
                hover:bg-white/10
              "
            >
              <X size={19} />
            </button>
          </div>

          {/* Links */}

          <nav className="mt-12">
            <a
              href="#inicio"
              onClick={() => setMenuOpen(false)}
              style={{ color: "#ffffff" }}
              className="
                block
                border-b
                border-white/10
                py-4
                font-display
                text-xl
                font-semibold
              "
            >
              Início
            </a>

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ color: "#ffffff" }}
                className="
                  block
                  border-b
                  border-white/10
                  py-4
                  font-display
                  text-xl
                  font-semibold
                  transition-opacity
                  hover:opacity-70
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Ações */}

          <div className="mt-auto space-y-3 pt-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#c7c7c4]
                px-5
                py-3.5
                text-sm
                font-semibold
                text-[#0a0a0a]
                transition
                hover:bg-[#e0e0dd]
              "
            >
              <CalendarDays size={18} />

              Agendar meu horário
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff" }}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/20
                px-5
                py-3.5
                text-sm
                font-semibold
                transition
                hover:bg-white/10
              "
            >
              <MessageCircle size={18} />

              Falar pelo WhatsApp
            </a>
          </div>

          {/* Rodapé */}

          <p
            style={{
              color: "rgba(255,255,255,0.4)",
            }}
            className="
              mt-8
              text-center
              text-[10px]
              uppercase
              tracking-[0.18em]
            "
          >
            Silva&apos;s Barbearia • Belo Horizonte
          </p>
        </aside>
      </div>
    </>
  );
}