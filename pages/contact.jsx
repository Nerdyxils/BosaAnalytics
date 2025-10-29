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
            <li><strong>Email:</strong> <a className="text-primary underline" href="mailto:info@bosaanalytics.com">info@bosaanalytics.com</a></li>
          </ul>
          {/* Map Embed */}
          <div className="mt-6 aspect-[16/10] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.492080254821!2d-79.64185918450734!3d43.587286779125955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b474b19d6c071%3A0x8b7a0c5d4fb7b7b0!2s1311%20Galesway%20Blvd%2C%20Mississauga%2C%20ON%20L5V%203B3%2C%20Canada!5e0!3m2!1sen!2sca!4v1642345678901!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}


