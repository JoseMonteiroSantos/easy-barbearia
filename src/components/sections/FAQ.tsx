"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Badge from "@/src/components/ui/Badge";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";

const faqs = [
  {
    question: "Esse template serve para qualquer segmento?",
    answer:
      "Sim. O Easy Landing™ foi pensado para ser adaptável a diferentes áreas, como saúde, estética, advocacia, consultoria, educação e prestação de serviços.",
  },
  {
    question: "Posso mudar cores, textos e imagens?",
    answer:
      "Sim. Toda a identidade visual pode ser ajustada para combinar com a marca do cliente.",
  },
  {
    question: "A landing funciona no celular?",
    answer:
      "Sim. O template é mobile first e foi pensado para funcionar muito bem em celulares, tablets e computadores.",
  },
  {
    question: "Tem integração com WhatsApp?",
    answer:
      "Sim. Os botões de contato podem abrir uma conversa diretamente no WhatsApp com uma mensagem personalizada.",
  },
];

export default function FAQ() {
  const [opened, setOpened] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-slate-50 py-24">
      <Container className="max-w-3xl">
        <SectionHeader
          badge={<Badge>FAQ</Badge>}
          title="Perguntas frequentes"
          description="Respostas rápidas para as principais dúvidas antes de contratar uma landing page."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const active = opened === index;

            return (
              <article
                key={faq.question}
                className="rounded-3xl border border-slate-100 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpened(active ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-slate-950"
                >
                  {faq.question}
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-blue-600 transition ${
                      active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {active && (
                  <div className="px-6 pb-6 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}