export default function SectionHeader({ eyebrow, title, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : '';
  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && <p className="text-xs tracking-widest uppercase text-primary font-semibold">{eyebrow}</p>}
      <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold">{title}</h2>
    </div>
  );
}


