import {
  ArrowRight,
  CheckCircle2,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import Badge from "@/src/components/ui/Badge";
import Button from "@/src/components/ui/Button";
import Container from "@/src/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pt-36 pb-24 lg:pt-44 lg:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(219,234,254,0.8),transparent_35%)]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Badge>
              <Sparkles size={14} />
              Landing Page Premium
            </Badge>

            <h1 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Crie uma presença digital que realmente gera clientes.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              O Easy Landing™ é um modelo de Landing Page moderno, rápido e
              focado em conversão para profissionais e empresas que querem
              transformar visitantes em contatos.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="#contato">
                Solicitar orçamento
                <ArrowRight size={18} />
              </Button>

              <Button href="#beneficios" variant="outline">
                Ver benefícios
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-600" />
                Entrega rápida
              </span>

              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-600" />
                SEO básico incluso
              </span>

              <span className="flex items-center gap-2">
                <MousePointerClick size={18} className="text-blue-600" />
                Foco em conversão
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/70 lg:block">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Zap size={16} className="text-blue-600" />
                Performance 95+
              </div>
            </div>

            <div className="absolute -right-4 bottom-10 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/70 lg:block">
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-600">
                Experiência premium
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-blue-950/10">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-950">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="bg-white p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="h-8 w-28 rounded-full bg-blue-100" />
                    <div className="h-8 w-20 rounded-full bg-blue-600" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-5 w-3/4 rounded-full bg-slate-900" />
                    <div className="h-5 w-2/3 rounded-full bg-slate-900" />
                    <div className="h-3 w-full rounded-full bg-slate-200" />
                    <div className="h-3 w-5/6 rounded-full bg-slate-200" />
                  </div>

                  <div className="mt-6 h-11 w-40 rounded-2xl bg-blue-600" />

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-2xl bg-blue-50" />
                    <div className="h-24 rounded-2xl bg-slate-100" />
                    <div className="h-24 rounded-2xl bg-blue-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}