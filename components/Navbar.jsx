import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll and handle scroll events when mobile menu is open
  useEffect(() => {
    if (open) {
      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Close menu on scroll attempt
      const handleScroll = () => {
        setOpen(false);
      };

      // Close menu on touch move outside the menu panel
      const handleTouchMove = (e) => {
        const menuPanel = e.target.closest('[data-menu-panel]');
        if (!menuPanel) {
          setOpen(false);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [open]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <nav className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="BOSA Analytics" width={32} height={32} className="h-8 w-auto" />
          <span className="hidden sm:inline font-extrabold tracking-tight text-primary">BOSA <span className="text-black font-semibold">Analytics</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`text-sm transition-colors ${
                router.pathname === item.href 
                  ? 'text-primary font-semibold border-b-2 border-primary' 
                  : 'text-body hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary">Speak with a Consultant</Link>
        </div>

        <button aria-label="Open menu" className="md:hidden p-2" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay & Background */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile Menu Panel */}
          <div 
            className="md:hidden fixed top-0 right-0 h-full w-80 z-50 bg-white shadow-2xl"
            data-menu-panel
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                  <Image src="/assets/logo.png" alt="BOSA Analytics" width={28} height={28} className="h-7 w-auto" />
                  <span className="font-extrabold tracking-tight text-primary">BOSA <span className="text-black font-semibold">Analytics</span></span>
                </Link>
                <button 
                  aria-label="Close menu" 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors" 
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      router.pathname === item.href 
                        ? 'bg-primary/10 text-primary font-semibold' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              {/* Footer CTA */}
              <div className="p-6 border-t border-gray-100">
                <Link 
                  href="/contact" 
                  className="btn btn-primary w-full flex items-center justify-center gap-2" 
                  onClick={() => setOpen(false)}
                >
                  Speak with a Consultant
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
