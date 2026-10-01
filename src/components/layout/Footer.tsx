import Image from "next/image";
import { ArrowUp, ExternalLink } from "lucide-react";

import Container from "@/src/components/ui/Container";

const EASY_WAY_URL = "https://www.easywaydigital.com.br/";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-8 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-7 sm:flex-row">
          {/* LOGO */}

          <a
            href="#inicio"
            aria-label="Voltar ao início"
          >
            <Image
              src="/images/logo/logo-white.png"
              alt="Silva's Barbearia"
              width={140}
              height={55}
              className="h-11 w-auto object-contain"
            />
          </a>

          {/* COPYRIGHT + EASY WAY */}

          <div className="text-center">
            <p className="text-[10px] leading-5 text-white/35">
              © {currentYear} Silva&apos;s Barbearia.
              Todos os direitos reservados.
            </p>

            <p className="mt-1 text-[10px] text-white/30">
              Desenvolvido por{" "}
              
              <a
                href={EASY_WAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-white/55 transition hover:text-white"
              >
                Easy Way Digital
                <ExternalLink size={9} />
              </a>
            </p>
          </div>

          {/* VOLTAR AO TOPO */}

          <a
            href="#inicio"
            aria-label="Voltar ao topo"
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
              transition
              hover:bg-white/10
            "
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}