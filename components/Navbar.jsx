import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
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
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      // Save current scroll position immediately
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
      
      // Apply scroll lock synchronously to prevent any jump
      const scrollY = scrollPositionRef.current;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.left = '0';
      document.body.style.right = '0';
      
      // Prevent scroll on body but allow scrolling within menu panel
      const preventBodyScroll = (e) => {
        const target = e.target;
        // Check if target is an HTMLElement and has closest method
        // For scroll events, target might be document or window
        if (target && target.nodeType === Node.ELEMENT_NODE && typeof target.closest === 'function') {
          const menuPanel = target.closest('[data-menu-panel]');
          // Allow scrolling within the menu panel
          if (!menuPanel) {
            e.preventDefault();
            e.stopPropagation();
          }
        } else {
          // If we can't check (document, window, etc.), prevent scroll to be safe
          e.preventDefault();
          e.stopPropagation();
        }
      };

      // Prevent wheel scrolling on body
      const preventWheel = (e) => {
        const target = e.target;
        // Check if target is an HTMLElement and has closest method
        if (target && target.nodeType === Node.ELEMENT_NODE && typeof target.closest === 'function') {
          const menuPanel = target.closest('[data-menu-panel]');
          if (!menuPanel) {
            e.preventDefault();
            e.stopPropagation();
          }
        } else {
          // If we can't check, prevent scroll to be safe
          e.preventDefault();
          e.stopPropagation();
        }
      };
      
      // Add event listeners with capture for better control
      window.addEventListener('touchmove', preventBodyScroll, { passive: false, capture: true });
      window.addEventListener('wheel', preventWheel, { passive: false, capture: true });
      window.addEventListener('scroll', preventBodyScroll, { passive: false, capture: true });
      
      return () => {
        // Remove event listeners first
        window.removeEventListener('touchmove', preventBodyScroll, { capture: true });
        window.removeEventListener('wheel', preventWheel, { capture: true });
        window.removeEventListener('scroll', preventBodyScroll, { capture: true });
        
        // Restore all styles immediately
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.left = '';
        document.body.style.right = '';
        
        // Restore scroll position - use setTimeout to ensure DOM has updated
        setTimeout(() => {
          window.scrollTo(0, scrollPositionRef.current);
        }, 0);
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
            data-backdrop
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile Menu Panel */}
          <div 
            className="md:hidden fixed top-0 right-0 h-full w-80 z-50 bg-white shadow-2xl"
            style={{ 
              top: 0, 
              right: 0,
              height: '100vh',
              width: '20rem',
              maxWidth: '80vw'
            }}
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
