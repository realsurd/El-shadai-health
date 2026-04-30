"use client";
import { useState } from "react";
import { Phone, MapPin, Clock, CheckCircle, Mail } from "lucide-react";

const services = [
  "Personal Care",
  "Skilled Nursing",
  "Companion Care",
  "Alzheimer's & Dementia Care",
  "Post-Hospital Care",
  "Respite Care",
  "Medication Management",
  "Overnight Care",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="bg-[#FFF5F8] pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle">Contact Us</p>
          <h1 className="section-title text-5xl mb-5">
            We'd Love to Hear From You
          </h1>
          <p className="text-[#4A5568] max-w-xl mx-auto text-lg">
            Whether you have questions or are ready to begin, our care
            coordinators are here to help. Reach out today.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-[#FCE4EC] rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-[#E91E63]" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#1A2B4A] mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-[#4A5568]">
                      Thank you for reaching out. One of our care coordinators
                      will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          phone: "",
                          email: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className="mt-6 btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-[#1A2B4A] mb-2">
                      Request a Free Consultation
                    </h2>
                    <p className="text-[#718096] text-sm mb-6">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#1A2B4A] text-sm font-medium mb-1.5">
                            Full Name <span className="text-[#E91E63]">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="John Smith"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A2B4A] placeholder-gray-400 focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#FCE4EC] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[#1A2B4A] text-sm font-medium mb-1.5">
                            Phone Number{" "}
                            <span className="text-[#E91E63]">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="(713) 555-0100"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A2B4A] placeholder-gray-400 focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#FCE4EC] transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#1A2B4A] text-sm font-medium mb-1.5">
                          Email Address{" "}
                          <span className="text-[#E91E63]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A2B4A] placeholder-gray-400 focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#FCE4EC] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[#1A2B4A] text-sm font-medium mb-1.5">
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A2B4A] focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#FCE4EC] transition-all bg-white"
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#1A2B4A] text-sm font-medium mb-1.5">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us about your loved one's care needs..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A2B4A] placeholder-gray-400 focus:outline-none focus:border-[#E91E63] focus:ring-2 focus:ring-[#FCE4EC] transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#E91E63] text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-[#D81B60] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Submit Request"
                        )}
                      </button>
                      <p className="text-[#718096] text-xs text-center">
                        We respect your privacy. Your information is never
                        shared.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-6">
              {/* Call to action card */}
              <div className="bg-[#E91E63] text-white rounded-3xl p-8">
                <h3 className="font-display text-2xl font-bold mb-2">
                  Prefer to Call?
                </h3>
                <p className="text-white/80 text-sm mb-5">
                  Our care coordinators are available to speak with you
                  directly. Call us now for immediate assistance.
                </p>
                <a
                  href="tel:+17138001234"
                  className="flex items-center gap-3 bg-white text-[#E91E63] px-6 py-4 rounded-2xl font-bold text-lg hover:bg-[#FFF5F8] transition-colors w-full sm:w-auto justify-center sm:justify-start"
                >
                  <Phone className="w-5 h-5" />
                  (713) 800-1234
                </a>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card p-5">
                  <div className="w-10 h-10 bg-[#FCE4EC] rounded-lg flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-[#E91E63]" />
                  </div>
                  <h4 className="font-semibold text-[#1A2B4A] text-sm mb-1">
                    Our Location
                  </h4>
                  <p className="text-[#718096] text-sm">1407 Lacy Dr</p>
                  <p className="text-[#718096] text-sm">Baytown, TX 77520</p>
                </div>

                <div className="card p-5">
                  <div className="w-10 h-10 bg-[#FCE4EC] rounded-lg flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-[#E91E63]" />
                  </div>
                  <h4 className="font-semibold text-[#1A2B4A] text-sm mb-1">
                    Hours
                  </h4>
                  <p className="text-[#718096] text-sm">Mon – Sun</p>
                  <p className="text-[#718096] text-sm">8:00 AM – 8:00 PM</p>
                </div>

                <div className="card p-5">
                  <div className="w-10 h-10 bg-[#FCE4EC] rounded-lg flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-[#E91E63]" />
                  </div>
                  <h4 className="font-semibold text-[#1A2B4A] text-sm mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+17138001234"
                    className="text-[#E91E63] text-sm font-semibold hover:underline"
                  >
                    (713) 800-1234
                  </a>
                  <p className="text-[#718096] text-xs mt-0.5">
                    24/7 for emergencies
                  </p>
                </div>

                <div className="card p-5">
                  <div className="w-10 h-10 bg-[#FCE4EC] rounded-lg flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-[#E91E63]" />
                  </div>
                  <h4 className="font-semibold text-[#1A2B4A] text-sm mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:info@elshadaicare.com"
                    className="text-[#E91E63] text-sm font-semibold hover:underline break-all"
                  >
                    info@elshadaicare.com
                  </a>
                  <p className="text-[#718096] text-xs mt-0.5">
                    We reply within 24 hours
                  </p>
                </div>
              </div>

              {/* Coverage */}
              <div className="card p-6">
                <h4 className="font-semibold text-[#1A2B4A] mb-3">
                  Areas We Serve
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Houston",
                    "Baytown",
                    "Pasadena",
                    "Pearland",
                    "Sugar Land",
                    "Katy",
                    "League City",
                    "The Woodlands",
                  ].map((area) => (
                    <span
                      key={area}
                      className="bg-[#FFF5F8] text-[#E91E63] border border-[#FCE4EC] text-xs px-3 py-1.5 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
