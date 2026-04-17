import { Users, Star, TrendingUp, Heart, Shield, Award } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Clients', sub: 'Across the United States', color: 'text-sky-600', bg: 'bg-sky-50' },
  { icon: TrendingUp, value: '95%+', label: 'Improved Quality of Life', sub: 'Reported by our clients', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: Heart, value: '9/10', label: 'Families at Ease', sub: 'Trusting Emerest care', color: 'text-rose-600', bg: 'bg-rose-50' },
  { icon: Star, value: '5 Stars', label: 'Average Rating', sub: 'Thousands of reviews', color: 'text-amber-600', bg: 'bg-amber-50' },
];

const publications = ['Forbes', 'Yahoo', 'McKnight\'s', 'Modern Healthcare', 'Medium', 'Samsung'];

const accreditations = [
  { icon: Shield, label: 'Licensed & Insured', sub: 'Fully compliant in all states' },
  { icon: Award, label: 'Accredited Agency', sub: 'Certified care standards' },
  { icon: Users, label: 'Background Checked', sub: 'Every caregiver vetted' },
];

export default function TrustBadges() {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(({ icon: Icon, value, label, sub, color, bg }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-7 h-7 ${color}`} />
              </div>
              <span className={`text-3xl font-bold ${color} mb-1`}>{value}</span>
              <span className="text-slate-900 font-semibold text-sm">{label}</span>
              <span className="text-slate-400 text-xs mt-0.5">{sub}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-b border-slate-100 py-10 mb-12">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-7">As Seen In</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {publications.map((pub) => (
              <span key={pub} className="text-slate-400 font-bold text-lg tracking-tight hover:text-slate-600 transition-colors cursor-default">
                {pub}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {accreditations.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 hover:bg-sky-50 transition-colors duration-200">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{label}</p>
                <p className="text-slate-500 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
