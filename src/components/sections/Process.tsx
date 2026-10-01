import { ClipboardCheck, Rocket, Send, WandSparkles } from "lucide-react";

import Badge from "@/src/components/ui/Badge";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/ui/SectionHeader";

const steps = [
  {
    icon: Send,
    title: "Briefing",
    description: "Coletamos as informações principais do negócio e objetivo da página.",
  },
  {
    icon: WandSparkles,
    title: "Personalização",
    description: "Ajustamos identidade visual, textos, imagens e chamadas.",
  },
  {
    icon: ClipboardCheck,
    title: "Revisão",
    description: "Você valida o resultado e solicita ajustes finais.",
  },
  {
    icon: Rocket,
    title: "Publicação",
    description: "Configuramos domínio, hospedagem e colocamos a landing no ar.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="bg-slate-50 py-24">
      <Container>
        <SectionHeader
          badge={<Badge>Como funciona</Badge>}
          title="Da ideia ao site publicado em poucos dias"
          description="Um processo simples, rápido e previsível para você não perder tempo com complexidade técnica."
        />

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-blue-600">
                  0{index + 1}
                </span>

                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}