import Button from "@/src/components/ui/Button";
import Container from "@/src/components/ui/Container";
import { ArrowRight, Zap } from "lucide-react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como funciona", href: "#processo" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-100/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <Zap size={20} />
            </span>

            <div className="leading-none">
              <strong className="block text-sm font-bold text-slate-950">
                Easy Landing™
              </strong>
              <span className="text-xs font-medium text-slate-500">
                Template Premium
              </span>
            </div>
          </a>

          <ul className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-blue-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button href="#contato" className="hidden lg:inline-flex">
            Solicitar orçamento
            <ArrowRight size={16} />
          </Button>
        </nav>
      </Container>
    </header>
  );
}