import { ReactNode } from "react";
import { cn } from "@/src/utils/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700",
        className,
      )}
    >
      {children}
    </span>
  );
}