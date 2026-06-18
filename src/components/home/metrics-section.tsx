const metrics = [
  ['5+', 'Years of commercial frontend and product development'],
  ['Web', 'Platforms, dashboards, maps, forms and complex product flows'],
  ['Mobile', 'React Native and Ionic React mobile applications'],
  ['Full-stack', 'Frontend-first work with Node.js when product delivery needs it'],
];

export function MetricsSection() {
  return (
    <section className="mt-28 grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {metrics.map(([value, label]) => (
        <div key={value} className="bg-white/50 p-7 shadow-[0_14px_38px_rgba(40,28,20,.035)]">
          <strong className="mb-2 block text-4xl font-semibold tracking-[-0.055em]">
            {value}
          </strong>
          <span className="text-[15px] leading-7 text-muted">{label}</span>
        </div>
      ))}
    </section>
  );
}
