import Head from 'next/head';
import { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShowSuccess(false);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@bosaanalytics.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission - BOSA Analytics',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        // Scroll to success message
        setTimeout(() => {
          document.querySelector('[data-success-message]')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact — BOSA Analytics</title>
      </Head>

      <section className="pt-28 container-wide">
        <SectionHeader eyebrow="Contact" title="Start the Conversation" />
      </section>

      <section className="container-wide my-12 grid gap-8 lg:grid-cols-2">
        <form 
          onSubmit={handleSubmit}
          className="surface-card p-6 grid gap-4"
        >
          {showSuccess && (
            <div data-success-message className="p-4 rounded-lg bg-green-50 text-green-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-medium">Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="p-1 hover:bg-green-100 rounded"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
          
          {error && (
            <div className="p-4 rounded-lg bg-red-50 text-red-700 flex items-center justify-between">
              <span className="text-sm font-medium">{error}</span>
              <button
                type="button"
                onClick={() => setError('')}
                className="p-1 hover:bg-red-100 rounded"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
          
          <div>
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input 
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 h-11 w-full rounded-md border border-slate-300 px-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input 
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 h-11 w-full rounded-md border border-slate-300 px-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" 
              required 
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea 
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary w-fit disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
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


