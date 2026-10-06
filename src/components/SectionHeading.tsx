import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const H = as;
  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-3xl",
        align === "center" && "text-center items-center mx-auto",
        className,
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <H className="text-3xl md:text-4xl lg:text-[42px] font-bold">{title}</H>
      {description && (
        <p className="text-[color:var(--color-muted-text)] text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
