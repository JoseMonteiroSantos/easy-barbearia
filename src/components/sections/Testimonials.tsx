import { Star } from "lucide-react";
import Badge from "@/src/components/ui/Badge";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Cliente exemplo",
    role: "Prestador de serviço",
    text: "A landing ficou moderna, rápida e ajudou a apresentar meu serviço de forma muito mais profissional.",
  },
  {
    name: "Cliente exemplo",
    role: "Empreendedor",
    text: "O processo foi simples e direto. Em poucos dias eu já tinha uma página pronta para divulgar meu negócio.",
  },
  {
    name: "Cliente exemplo",
    role: "Profissional autônomo",
    text: "Gostei muito da organização das informações e dos botões de contato bem posicionados.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeader
          badge={<Badge>Depoimentos</Badge>}
          title="Prova social para aumentar a confiança"
          description="O template já possui uma área preparada para exibir avaliações, comentários e feedbacks de clientes."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.text}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-sm leading-7 text-slate-600">
                “{item.text}”
              </p>

              <div className="mt-6">
                <strong className="block text-sm text-slate-950">
                  {item.name}
                </strong>
                <span className="text-sm text-slate-500">{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}