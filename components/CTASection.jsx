import Link from 'next/link';

export default function CTASection({
  title = 'Ready to Break Ground?',
  ctaText = 'Schedule a Call',
  href = '/contact'
}) {
  return (
    <section className="container-wide my-20">
      <div className="surface-card p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl font-extrabold">{title}</h3>
          <Link href={href} className="btn btn-primary">{ctaText}</Link>
        </div>
      </div>
    </section>
  );
}


