const metrics = [
  ['5+ years', 'Commercial product engineering'],
  ['10+ products', 'Shipped to web, iOS and Android'],
  ['6 domains', 'EdTech, health, logistics, social, ops & realtime'],
];

export function MetricsSection() {
  return (
    <section className="mt-28">
      <p className="text-accent before:bg-accent/50 mb-8 inline-flex items-center gap-3 text-xs font-bold tracking-[.16em] uppercase before:block before:h-px before:w-10">
        What I bring
      </p>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
        {metrics.map(([value, label]) => (
          <div key={value} className="border-line bg-surface border p-7">
            <strong className="mb-2 block text-[2rem] leading-none font-semibold tracking-[-0.04em]">
              {value}
            </strong>
            <span className="text-muted text-[0.9375rem] leading-7">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
