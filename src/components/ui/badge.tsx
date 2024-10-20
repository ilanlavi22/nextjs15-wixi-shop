import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "w-fit rounded-sm bg-primary px-2 py-1 text-sm text-primary-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
