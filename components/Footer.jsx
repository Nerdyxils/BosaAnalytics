import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-24 bg-black text-white">
      <div className="container-wide py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.png" alt="BOSA Analytics" width={28} height={28} className="h-7 w-auto" />
            <div className="font-extrabold text-white text-xl">BOSA Analytics</div>
          </div>
          <p className="mt-3 text-sm opacity-80 max-w-xs">
            Transforming Data. Empowering Decisions. Driving Economies.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/what-we-do">What We Do</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Sanmi Obasa</li>
            <li>Phone: +1 647-533-9375 (WhatsApp)</li>
            <li>Email: <a href="mailto:Sanmi.obasa@bosaanalytics.com" className="underline">Sanmi.obasa@bosaanalytics.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get Started</h4>
          <Link href="/contact" className="btn btn-primary">Start the Conversation</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-wide py-6 text-xs opacity-70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} BOSA Analytics. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


