import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import Container from "@/src/components/ui/Container";

const BOOKING_URL =
  "https://sites.appbarber.com.br/ousebarbearialt-0vas";

const services = [
  "Corte",
  "Barba",
  "Selagem",
  "Hidratação",
  "Sobrancelha",
  "Platinado",
  "Pintura",
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="bg-[#f7f7f5] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* CABEÇALHO */}
        <div className="flex flex-col gap-5 border-b border-[#d6d6d2] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow">
              Nossos serviços
            </span>

            <h2 className="font-display mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#151515] sm:text-4xl lg:text-5xl">
              Cuidado em cada detalhe.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#686868] sm:text-right">
            Serviços pensados para cuidar do seu estilo,
            do corte aos detalhes.
          </p>
        </div>

        {/* SERVIÇOS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <a
              key={service}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex items-center justify-between
                border-b border-[#d6d6d2]
                py-6
                transition duration-300
                hover:bg-[#eeeeeb]
                sm:px-5

                ${
                  index % 2 === 0
                    ? "sm:border-r"
                    : ""
                }

                lg:border-r
                lg:[&:nth-child(3n)]:border-r-0
              `}
            >
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-semibold tracking-[0.15em] text-[#9a9a96]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-[#151515] sm:text-xl">
                  {service}
                </h3>
              </div>

              <ArrowUpRight
                size={17}
                className="text-[#929292] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#151515]"
              />
            </a>
          ))}
        </div>

        {/* RODAPÉ */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#7d7d7a]">
            Consulte horários e disponibilidade pelo agendamento online.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#111111] px-5 text-sm font-semibold shadow-sm transition duration-200 hover:bg-[#292929]"
          >
            <CalendarDays
              size={16}
              color="#ffffff"
            />

            <span style={{ color: "#ffffff" }}>
              Ver horários
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}