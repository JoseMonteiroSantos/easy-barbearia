import { ReactNode } from "react";
import { cn } from "@/src/utils/cn";

type SectionHeaderProps = {
  badge?: ReactNode;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14 max-w-2xl", centered && "mx-auto text-center")}>
      {badge && <div className="mb-5">{badge}</div>}

      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}