import { Heart, Zap, Users, Shield, MessageCircle, BookOpen, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Empathy',
    description: 'Our caregiving is marked by deep understanding, compassion, and empathy — we see every person as a unique individual with a unique story.',
  },
  {
    icon: Zap,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our services, ensuring the highest quality of care that consistently exceeds expectations.',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description: 'We empower you to maintain independence, make informed care decisions, and live life on your own terms at every stage.',
  },
  {
    icon: Shield,
    title: 'Ethics',
    description: 'We uphold the highest ethical standards in all interactions and operations, ensuring trust, transparency, and accountability.',
  },
  {
    icon: MessageCircle,
    title: 'Engagement',
    description: 'We actively engage with clients and families, building meaningful relationships and delivering deeply personalized care.',
  },
  {
    icon: BookOpen,
    title: 'Expertise',
    description: 'Our caregivers bring specialized expertise tailored to your unique needs, backed by extensive training and ongoing education.',
  },
];

const differentiators = [
  'Family Caregiver Program — get paid to care for a loved one',
  'No long-term contracts — cancel anytime',
  'Dedicated care coordinator for every client',
  'Available in all areas around Houston',
  'Free in-home assessment and consultation',
  'Medicaid and private pay options available',
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Why El-Shadai</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-6 leading-tight">
              Care That Goes Beyond<br />the Ordinary
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              At El-Shadai, we don't just provide services — we deliver experiences built on trust, warmth, and unwavering dedication. Our six core values guide every interaction.
            </p>

            <div className="space-y-3">
              {differentiators.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100">
              <p className="text-slate-700 font-medium text-sm leading-relaxed italic">
                "Personalized expert care with grace, kindness, and uncompromising dignity — for you and your loved ones."
              </p>
              <p className="text-sky-600 font-bold text-sm mt-3">— El-Shadai Mission</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default ${
                  i % 3 === 0 ? 'bg-sky-50 border-sky-100 hover:border-sky-300' :
                  i % 3 === 1 ? 'bg-emerald-50 border-emerald-100 hover:border-emerald-300' :
                  'bg-amber-50 border-amber-100 hover:border-amber-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  i % 3 === 0 ? 'bg-sky-100' :
                  i % 3 === 1 ? 'bg-emerald-100' :
                  'bg-amber-100'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    i % 3 === 0 ? 'text-sky-600' :
                    i % 3 === 1 ? 'text-emerald-600' :
                    'text-amber-600'
                  }`} />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
