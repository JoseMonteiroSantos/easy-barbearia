import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/src/utils/cn";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
    secondary: "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border border-slate-200 bg-white text-slate-900 hover:border-blue-600 hover:bg-blue-50",
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font700 font-semibold transition-all duration-300 hover:-translate-y-0.5",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}