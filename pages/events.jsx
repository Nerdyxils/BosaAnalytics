import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';

export default function Events() {
  return (
    <>
      <Head>
        <title>Events — BOSA Analytics</title>
      </Head>
      <section className="pt-28 container-wide">
        <SectionHeader eyebrow="Upcoming" title="Events" />
      </section>
      <section className="container-wide my-12 grid gap-6 md:grid-cols-2">
        <div className="surface-card p-6">
          <h3 className="font-semibold text-xl">Data for Development Forum — 2026 (Coming Soon)</h3>
          <p className="mt-2 text-sm text-body/80">A convening on data systems that unlock growth and improve public service delivery.</p>
        </div>
        <div className="surface-card p-6">
          <h3 className="font-semibold text-xl">Agritech Summit — Food Systems & the Future (Q2 2026)</h3>
          <p className="mt-2 text-sm text-body/80">Exploring the role of technology across agrifood value chains and markets.</p>
        </div>
      </section>

      <section className="container-wide my-16 surface-card p-6">
        <h4 className="font-semibold">Subscribe for updates</h4>
        <form className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
          <input type="email" required placeholder="Your email" className="h-11 rounded-md border border-slate-300 px-3" />
          <button className="btn btn-primary h-11">Subscribe</button>
        </form>
      </section>
    </>
  );
}


