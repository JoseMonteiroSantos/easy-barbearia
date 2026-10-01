import { Zap } from "lucide-react";

import Container from "@/src/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <Zap size={20} />
            </span>

            <div>
              <strong className="block text-sm font-bold text-slate-950">
                Easy Landing™
              </strong>
              <span className="text-xs text-slate-500">
                Produto Easy Way
              </span>
            </div>
          </a>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Easy Way Soluções Digitais. Todos os
            direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}