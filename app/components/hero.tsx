'use client';
import { useState } from 'react';
import { Phone, CheckCircle, Loader2, ChevronDown } from 'lucide-react';
import { supabase } from '../lib/supabase';

const STATES = ['Houston', 'Missouri', 'New Jersey', 'Pennsylvania'];

export default function Hero() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', state: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: dbError } = await supabase.from('contact_submissions').insert([form]);

    if (dbError) {
      setError('Something went wrong. Please try again or call us directly.');
    } else {
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', state: '', message: '' });
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center"
      style={{
        background: 'linear-gradient(135deg, #0C2340 0%, #0369A1 60%, #0EA5E9 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1920")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
             Serving Greater Houston Area

            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Uncompromising
              <span className="block text-sky-300">Home Care</span>
              That Puts You First
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              Personalized, compassionate care delivered by dedicated professionals — right in the comfort of your own home. Over 10,000 families trust El-Shadai.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {[
                '10,000+ Happy Clients',
                '5-Star Rated',
                'Free Consultation',
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>

            <a
              href="tel:2817016053"
              className="inline-flex items-center gap-3 bg-white text-sky-700 font-bold px-6 py-3.5 rounded-full hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl text-base"
            >
              <Phone className="w-5 h-5" />
              Call 281-701-6053
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {success ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600">
                  A dedicated El-Shadai representative will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">Get Your Free Consultation</h2>
                  <p className="text-slate-500 text-sm">Fill out the form and we'll reach out within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@email.com"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 000-0000"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your State *</label>
                    <div className="relative">
                      <select
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition appearance-none bg-white"
                      >
                        <option value="">Select your state</option>
                        {STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message (optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your care needs..."
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 text-white font-bold py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-base shadow-md hover:shadow-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Request Free Consultation'
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    By submitting, you agree to be contacted by an El-Shadai representative.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
