import { ArrowRight } from "lucide-react";

import Button from "@/src/components/ui/Button";
import Container from "@/src/components/ui/Container";

export default function CTA() {
  return (
    <section id="contato" className="bg-white py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-center shadow-2xl shadow-blue-950/20 md:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.45),transparent_35%)]" />

          <div className="relative mx-auto max-w-2xl">
            <span className="text-sm font-semibold text-blue-300">
              Easy Landing™
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Pronto para transformar visitas em contatos?
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Use este modelo como base para criar uma landing page moderna,
              rápida e focada em conversão.
            </p>

            <div className="mt-8 flex justify-center">
              <Button  href="https://wa.me/5531990627375?text=Ol%C3%A1%21%20Me%20interessei%20pelo%20produto%20Easy%20Landing%E2%84%A2%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." 
                className="bg-white text-slate-950 hover:bg-blue-50">
                Solicitar orçamento
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}