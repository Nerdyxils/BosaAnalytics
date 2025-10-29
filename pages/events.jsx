import Head from 'next/head';
import { useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Events() {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
          email: email,
          _subject: 'New Event Subscription Request - BOSA Analytics',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setShowSuccess(true);
        setEmail('');
        // Scroll to success message
        setTimeout(() => {
          document.querySelector('[data-success-message]')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
      } else {
        setError('Failed to subscribe. Please try again.');
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
        {showSuccess && (
          <div data-success-message className="mt-4 p-4 rounded-lg bg-green-50 text-green-700 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-medium">Thank you! You've been successfully subscribed. You'll receive updates about our events.</span>
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
          <div className="mt-4 p-4 rounded-lg bg-red-50 text-red-700 flex items-center justify-between">
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
        <form 
          onSubmit={handleSubmit}
          className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]"
        >
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            required 
            placeholder="Your email" 
            className="h-11 rounded-md border border-slate-300 px-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" 
          />
          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary h-11 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </section>
    </>
  );
}


