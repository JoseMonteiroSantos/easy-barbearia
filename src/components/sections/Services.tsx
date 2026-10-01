import { CheckCircle2, LayoutTemplate, MessageCircle, PenTool } from "lucide-react";

import Badge from "@/src/components/ui/Badge";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";

const items = [
  "Hero com chamada principal e CTA",
  "Seção de benefícios e serviços",
  "Depoimentos e prova social",
  "FAQ para quebrar objeções",
  "CTA final integrado ao WhatsApp",
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              centered={false}
              badge={<Badge>O que inclui</Badge>}
              title="Uma estrutura completa para apresentar sua oferta"
              description="O Easy Landing™ já vem com as seções essenciais para explicar sua solução, gerar confiança e incentivar o contato."
            />

            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 size={20} className="text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950 p-6 text-white">
              <LayoutTemplate size={28} className="text-blue-400" />
              <h3 className="mt-5 text-lg font-bold">Layout premium</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Visual moderno, limpo e adaptável para vários segmentos.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <MessageCircle size={28} className="text-blue-600" />
              <h3 className="mt-5 text-lg font-bold text-slate-950">
                WhatsApp integrado
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Botões de contato posicionados nos pontos certos.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:col-span-2">
              <PenTool size={28} className="text-blue-600" />
              <h3 className="mt-5 text-lg font-bold text-slate-950">
                Personalização simples
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Cores, textos, imagens e chamadas podem ser ajustados para cada negócio sem reconstruir o site do zero.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}