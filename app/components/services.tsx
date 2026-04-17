import { Home, Activity, UserCheck, Clock, Pill, Car, Coffee, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Daily Living Activities',
    description: 'Compassionate support with Activities of Daily Living including personal hygiene, dressing, grooming, and mobility to maintain your dignity.',
    features: ['Personal Hygiene', 'Dressing & Grooming', 'Mobility Support', 'Bathing Assistance'],
    color: 'emerald',
  },
  {
    icon: Home,
    title: 'Household Duties',
    description: 'Meticulous kitchen care, expert laundry services, and organization that brings cleanliness, order, and tranquility to your living space.',
    features: ['Kitchen & Laundry', 'Light Housekeeping', 'Grocery Assistance', 'Home Organization'],
    color: 'sky',
  },
  
  {
    icon: UserCheck,
    title: 'Instrumental Activities',
    description: 'Comprehensive support that empowers independence — from meal planning and medication management to transportation and recreational activities.',
    features: ['Meal Planning', 'Medication Management', 'Transportation', 'Recreational Activities'],
    color: 'amber',
  },
  {
    icon: Clock,
    title: 'Flexible Care Hours',
    description: 'From as little as 1 hour a day to around-the-clock care — we adapt to your schedule and evolving needs at every stage.',
    features: ['Hourly Care', '24/7 Around-the-Clock', 'Weekend Coverage', 'Overnight Stays'],
    color: 'rose',
  },
  {
    icon: Pill,
    title: 'Medication Reminders',
    description: 'Ensuring your medications are taken on time and as prescribed, reducing the risk of missed doses and keeping you healthy.',
    features: ['Dosage Reminders', 'Prescription Tracking', 'Refill Coordination', 'Medical Appointments'],
    color: 'sky',
  },
  {
    icon: Car,
    title: 'Transportation',
    description: 'Safe and reliable transportation to medical appointments, social events, and errands — maintaining your independence and connections.',
    features: ['Doctor Appointments', 'Errands & Shopping', 'Social Outings', 'Community Access'],
    color: 'emerald',
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string; text: string; border: string }> = {
  sky: { bg: 'bg-sky-50', icon: 'text-sky-600', badge: 'bg-sky-100 text-sky-700', text: 'text-sky-600', border: 'border-sky-200' },
  emerald: { bg: 'bg-emerald-50', icon: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700', text: 'text-emerald-600', border: 'border-emerald-200' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', badge: 'bg-amber-100 text-amber-700', text: 'text-amber-600', border: 'border-amber-200' },
  rose: { bg: 'bg-rose-50', icon: 'text-rose-600', badge: 'bg-rose-100 text-rose-700', text: 'text-rose-600', border: 'border-rose-200' },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
            Comprehensive Home Care Services
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our diverse array of personalized care programs designed to meet every individual need — delivered with compassion and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, features, color }) => {
            const c = colorMap[color];
            return (
              <div
                key={title}
                className={`bg-white rounded-2xl p-6 border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 group flex flex-col`}
              >
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {features.map((f) => (
                    <span key={f} className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.badge}`}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-sky-600 rounded-2xl p-8 text-center text-white">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div>
              <p className="font-bold text-lg">Not sure what you need?</p>
              <p className="text-sky-100 text-sm">Our care coordinators will assess your needs and build a personalized plan.</p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-white text-sky-700 font-bold px-6 py-3 rounded-full hover:bg-sky-50 transition-all duration-200 shadow-md text-sm"
            >
              Get a Free Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
