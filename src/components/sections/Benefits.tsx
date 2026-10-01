import { BarChart3, Smartphone, Search, Zap } from "lucide-react";

import Badge from "@/src/components/ui/Badge";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";

const benefits = [
  {
    icon: Zap,
    title: "Carregamento rápido",
    description:
      "Estrutura otimizada para abrir rápido e manter o visitante na página.",
  },
  {
    icon: Smartphone,
    title: "Mobile first",
    description:
      "Pensado primeiro para celular, onde a maioria dos clientes acessa.",
  },
  {
    icon: Search,
    title: "Pronto para o Google",
    description:
      "Base preparada com SEO técnico para ajudar sua página a ser encontrada.",
  },
  {
    icon: BarChart3,
    title: "Foco em conversão",
    description:
      "Cada seção foi pensada para levar o visitante até o contato.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="bg-slate-50 py-24">
      <Container>
        <SectionHeader
          badge={<Badge>Benefícios</Badge>}
          title="Tudo que uma landing precisa para vender melhor"
          description="Um modelo enxuto, moderno e pensado para transformar visitantes em oportunidades reais."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}