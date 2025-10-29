import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ title, location, description, image }) {
  return (
    <div className="surface-card overflow-hidden">
      <div className="relative aspect-[16/9]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="bg-gradient-to-br from-primary/15 to-accent/15" />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-semibold text-lg">{title}</h3>
          {location && <span className="text-xs text-body/70">{location}</span>}
        </div>
        <p className="mt-2 text-sm text-body/80">{description}</p>
        <div className="mt-4">
          <Link href="#" className="text-primary hover:text-accent text-sm font-semibold">Learn more →</Link>
        </div>
      </div>
    </div>
  );
}


