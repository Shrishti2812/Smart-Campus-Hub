import type { ComponentType, SVGProps } from "react";

type SummaryCardProps = {
  title: string;
  description: string;
  value: string | number;
  label?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

function SummaryCard({ title, description, value, label, icon: Icon }: SummaryCardProps) {
  return (
    <div className="group bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-emerald-400/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-2xl group-hover:bg-emerald-500/20 transition">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>

      <div className="mt-auto flex items-end gap-2">
        <span className="text-3xl font-bold text-white">{value}</span>
        {label ? <span className="text-sm text-slate-400 mb-1">{label}</span> : null}
      </div>
    </div>
  );
}

export default SummaryCard;