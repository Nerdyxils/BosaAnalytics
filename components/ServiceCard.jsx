import Link from 'next/link';

export default function ServiceCard({ Icon, title, description, href = '/what-we-do' }) {
  return (
    <Link href={href} className="surface-card p-6 block hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        {Icon && <Icon className="h-10 w-10 text-primary" />}
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="mt-2 text-sm text-body/80">{description}</p>
        </div>
      </div>
    </Link>
  );
}


