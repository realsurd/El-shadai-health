'use client';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Margaret T.',
    location: 'Katy',
    rating: 5,
    text: 'El-Shadai has been a blessing for our family. My mother absolutely loves her caregiver — she\'s become like family. The level of compassion and professionalism is unmatched. I can\'t imagine trusting anyone else with her care.',
    initials: 'MT',
    color: 'bg-sky-500',
  },
  {
    name: 'Robert & Linda K.',
    location: 'Manville',
    rating: 5,
    text: 'After my hip replacement, I needed help at home. The El-Shadai team was so attentive to my every need — from personal care to getting me to physical therapy. They truly go above and beyond. Highly recommend!',
    initials: 'RK',
    color: 'bg-emerald-500',
  },
  {
    name: 'David H.',
    location: 'Richmond',
    rating: 5,
    text: 'The Family Caregiver Program has been life-changing. I now get paid to care for my father while El-Shadai provides all the support and training I need. It\'s the perfect solution for our family — financially and emotionally.',
    initials: 'DH',
    color: 'bg-amber-500',
  },
  {
    name: 'Susan M.',
    location: 'South Houston',
    rating: 5,
    text: 'From the first consultation to daily care, El-Shadai exceeded every expectation. They listened to exactly what we needed and matched us with the perfect caregiver. My father is happier and healthier than he\'s been in years.',
    initials: 'SM',
    color: 'bg-rose-500',
  },
  {
    name: 'James W.',
    location: 'Katy',
    rating: 5,
    text: 'I was nervous about bringing a caregiver into our home but El-Shadai made the transition seamless. The background checks gave us peace of mind, and our caregiver is absolutely wonderful with my mother-in-law.',
    initials: 'JW',
    color: 'bg-sky-600',
  },
  {
    name: 'Patricia & Tom B.',
    location: 'Downtown Houston',
    rating: 5,
    text: 'The 24/7 care option gave our entire family peace of mind. Knowing someone trustworthy is always with my dad allows us to get proper rest. The caregivers are warm, professional, and incredibly dedicated.',
    initials: 'PB',
    color: 'bg-emerald-600',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const total = reviews.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const shown = [
    reviews[current % total],
    reviews[(current + 1) % total],
    reviews[(current + 2) % total],
  ];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl font-bold text-slate-900 mt-3 mb-4">
            What Our Clients Are Saying
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-slate-600 font-semibold text-sm">4.9 out of 5 — 1,000+ reviews</span>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {shown.map((review, i) => (
            <div
              key={i}
              className="relative bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-sky-100 mb-3" />
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
                  <div className="flex items-center gap-2">
                    <StarRating count={review.rating} />
                    <span className="text-slate-400 text-xs">{review.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden mb-8">
          <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm">
            <Quote className="w-8 h-8 text-sky-100 mb-3" />
            <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{reviews[current].text}"</p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${reviews[current].color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {reviews[current].initials}
              </div>
              <div>
                <p className="font-semibold text-slate-900 text-sm">{reviews[current].name}</p>
                <div className="flex items-center gap-2">
                  <StarRating count={reviews[current].rating} />
                  <span className="text-slate-400 text-xs">{reviews[current].location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-slate-200 hover:border-sky-300 hover:bg-sky-50 flex items-center justify-center transition-all duration-200 text-slate-600 hover:text-sky-600"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-200 rounded-full ${
                  i === current ? 'w-6 h-2 bg-sky-600' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-slate-200 hover:border-sky-300 hover:bg-sky-50 flex items-center justify-center transition-all duration-200 text-slate-600 hover:text-sky-600"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
