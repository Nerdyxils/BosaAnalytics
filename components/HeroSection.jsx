import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection({
  title = 'Transforming Data. Empowering Decisions. Driving Economies.',
  subtitle = 'At BOSA Analytics, we help organizations unlock growth by turning data into strategy and strategy into impact.',
  primaryHref = '/what-we-do',
  secondaryHref = '/contact'
}) {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-hero" />
      <div className="relative container-wide grid gap-8 lg:grid-cols-2 items-center py-16">
        <div>
          <motion.h1
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-body max-w-2xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href={primaryHref} className="btn btn-primary">Explore Our Solutions</Link>
            <Link href={secondaryHref} className="btn btn-ghost">Speak with a Consultant</Link>
          </motion.div>
        </div>
        <motion.div
          className="surface-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative aspect-[4/3]">
            <Image
              src="/assets/hero_image.jpg"
              alt="BOSA Analytics — data and strategy in action"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


