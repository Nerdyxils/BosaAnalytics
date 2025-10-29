import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/projects', label: 'Projects' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <nav className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="BOSA Analytics" width={32} height={32} className="h-8 w-auto" />
          <span className="hidden sm:inline font-extrabold tracking-tight text-primary">BOSA <span className="text-black font-semibold">Analytics</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-body hover:text-primary">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary">Speak with a Consultant</Link>
        </div>

        <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="container-wide flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-lg font-extrabold text-primary">
              <Image src="/assets/logo.png" alt="BOSA Analytics" width={24} height={24} className="h-6 w-auto" />
              <span className="text-black font-semibold">BOSA Analytics</span>
            </Link>
            <button aria-label="Close menu" className="p-2" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block text-lg" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
              Speak with a Consultant
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


