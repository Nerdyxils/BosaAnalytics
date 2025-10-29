import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — BOSA Analytics</title>
      </Head>

      <section className="pt-28 container-wide">
        <SectionHeader eyebrow="Contact" title="Start the Conversation" />
      </section>

      <section className="container-wide my-12 grid gap-8 lg:grid-cols-2">
        <form className="surface-card p-6 grid gap-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input className="mt-1 h-11 w-full rounded-md border border-slate-300 px-3" required />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="mt-1 h-11 w-full rounded-md border border-slate-300 px-3" required />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea rows="5" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <button className="btn btn-primary w-fit">Send Message</button>
        </form>

        <div className="surface-card p-6">
          <h3 className="font-semibold text-lg">Direct Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><strong>Contact:</strong> Sanmi Obasa</li>
            <li><strong>Phone:</strong> +1 647-533-9375 (WhatsApp)</li>
            <li><strong>Email:</strong> <a className="text-primary underline" href="mailto:Sanmi.obasa@bosaanalytics.com">Sanmi.obasa@bosaanalytics.com</a></li>
          </ul>
          {/* Optional Map Embed */}
          <div className="mt-6 aspect-[16/10] bg-[url('/assets/placeholder-2.svg')] bg-cover bg-center rounded-lg" />
        </div>
      </section>
    </>
  );
}


