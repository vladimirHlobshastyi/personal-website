type InfoCardProps = {
  label: string;
  value: string;
  className?: string;
};

export function InfoCard({ label, value, className }: InfoCardProps) {
  return (
    <div className={className ?? 'border-line bg-surface border p-5'}>
      <strong className="text-quiet mb-1.5 block text-xs font-bold tracking-[.12em] uppercase">
        {label}
      </strong>
      <span className="text-muted leading-7">{value}</span>
    </div>
  );
}
