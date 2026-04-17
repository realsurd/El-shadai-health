import { Phone, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const steps = [
  { num: '01', title: 'Call or Fill Out Form', desc: 'Reach out by phone or complete our simple online form to get started.' },
  { num: '02', title: 'Free Consultation', desc: 'A dedicated representative contacts you within 24 hours to discuss your needs.' },
  { num: '03', title: 'Personalized Plan', desc: 'We create a tailored care plan and match you with the perfect caregiver.' },
  { num: '04', title: 'Care Begins', desc: 'Your caregiver starts providing compassionate, professional care at home.' },
];

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0C2340 0%, #0369A1 100%)' }}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Start Today — It's Free
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Your Loved One Deserves<br />
            <span className="text-sky-300">The Best Care Possible</span>
          </h2>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Join over 10,000 families across Houston Texas who trust El-Shadai for compassionate, professional home care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-full h-px border-t-2 border-dashed border-white/20" />
              )}
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white font-bold text-sm mb-4 border border-white/30">
                {step.num}
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
              <p className="text-sky-200 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="tel:2817016053"
            className="flex items-center gap-3 bg-white text-sky-800 font-bold px-8 py-4 rounded-full hover:bg-sky-50 transition-all duration-200 shadow-lg hover:shadow-xl text-base w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            Call 281-701-6053
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl text-base w-full sm:w-auto justify-center border border-sky-400"
          >
            Request Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-sky-200">
          {[
            { icon: CheckCircle, text: 'No commitment required' },
            { icon: Clock, text: 'Response within 24 hours' },
            { icon: CheckCircle, text: '100% free assessment' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-emerald-400" />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
