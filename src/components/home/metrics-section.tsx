const metrics = [
  ['5+', 'Years of commercial frontend and product development'],
  ['Web', 'Platforms, dashboards, maps, forms and complex product flows'],
  ['Mobile', 'React Native and Ionic React mobile applications'],
  ['Full-stack', 'Frontend-first work with Node.js when product delivery needs it'],
];

export function MetricsSection() {
  return (
    <section className="mt-xl grid grid-cols-4 gap-sm max-lg:grid-cols-2 max-sm:grid-cols-1">
      {metrics.map(([value, label]) => (
        <div key={value} className="bg-white/50 p-lg shadow-subtle">
          <strong className="mb-sm block text-2xl font-semibold tracking-[-0.055em]">
            {value}
          </strong>
          <span className="text-sm leading-7 text-muted">{label}</span>
        </div>
      ))}
    </section>
  );
}
