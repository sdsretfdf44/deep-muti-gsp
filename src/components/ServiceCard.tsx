import { Icon } from "./Icon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card p-6 md:p-7 flex flex-col gap-3">
      <span
        aria-hidden="true"
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--color-sky-soft)] text-[color:var(--color-navy-900)]"
      >
        <Icon name={service.icon} size={20} />
      </span>
      <h3 className="text-lg font-semibold text-[color:var(--color-navy-900)]">
        {service.name}
      </h3>
      <p className="text-[14.5px] text-[color:var(--color-muted-text)] leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
