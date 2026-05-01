import Link from "next/link";
import {
  Phone,
  Star,
  Users,
  Shield,
  Heart,
  Award,
  Clock,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Stethoscope,
  Home,
  HandHeart,
  Brain,
} from "lucide-react";

const trustBadges = [
  { icon: Users, value: "1000+", label: "Families Served" },
  { icon: Star, value: "5-Star", label: "Rated Service" },
  { icon: Shield, value: "Licensed", label: "Caregivers" },
];

const services = [
  {
    icon: Heart,
    title: "Personal Care",
    desc: "Assistance with bathing, grooming, dressing, and daily living activities delivered with dignity and respect.",
  },
  {
    icon: Stethoscope,
    title: "Skilled Nursing",
    desc: "Professional medical care from our registered nurses, including wound care, medication management, and health monitoring.",
  },
  {
    icon: Home,
    title: "Companion Care",
    desc: "Meaningful companionship, light housekeeping, meal preparation, and transportation support.",
  },
  {
    icon: Brain,
    title: "Alzheimer's Care",
    desc: "Specialized memory care providing safe, compassionate support for clients and their families.",
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Round-the-clock support whenever you need us most.",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    desc: "A decade of trusted, expert home care in Houston.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Fully licensed caregivers with rigorous background checks.",
  },
  {
    icon: HandHeart,
    title: "Personalized Plans",
    desc: "Care plans tailored to every individual's unique needs.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "Compassionate professionals who treat clients like family.",
  },
  {
    icon: CheckCircle,
    title: "Trusted by Families",
    desc: "Thousands of Houston families rely on our services daily.",
  },
];

const testimonials = [
  {
    name: "Sandra T.",
    role: "Daughter of client",
    stars: 5,
    text: "El Shadai has been a blessing to our family. The caregivers are so gentle and patient with my mother. We sleep better knowing she's in such capable hands.",
  },
  {
    name: "James & Maria K.",
    role: "Family of client",
    stars: 5,
    text: "The nurses are incredibly professional and caring. They always go above and beyond. I highly recommend El Shadai to anyone looking for quality home care.",
  },
  {
    name: "Robert L.",
    role: "Client",
    stars: 5,
    text: "After my surgery, El Shadai helped me recover at home comfortably. The team was punctual, knowledgeable, and truly made a difference in my recovery.",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-[#FFF5F8]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FCE4EC] rounded-full opacity-50" />
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-[#F48FB1] rounded-full opacity-10" />
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-[#FCE4EC] rounded-full opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-[#F48FB1] px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-2 h-2 bg-[#E91E63] rounded-full animate-pulse" />
              <span className="text-[#E91E63] text-xs font-semibold">
                Serving Houston for 10+ Years
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2B4A] leading-tight mb-6">
              Uncompromising Home Care{" "}
              <span className="text-[#E91E63]">That Puts You First</span>
            </h1>

            <p className="text-[#4A5568] text-lg leading-relaxed mb-8 max-w-lg">
              Compassionate, personalized care delivered in the comfort of your
              own home. Our licensed nurses and caregivers are dedicated to
              enhancing your quality of life with dignity and respect.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="tel:+12817016053"
                className="bg-[#E91E63] py-3 px-5 rounded-2xl flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Link>
              <Link
                href="/contact-us"
                className="bg-white py-3 px-5 rounded-2xl flex items-center gap-2 border border-[#E91E63] text-[#E91E63]"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              {trustBadges.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#FCE4EC]">
                    <Icon className="w-5 h-5 text-[#E91E63]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A2B4A] text-sm">{value}</p>
                    <p className="text-[#718096] text-xs">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg"
                alt="Caregiver helping elderly client"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B4A]/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#FCE4EC] rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#E91E63]" fill="#E91E63" />
                </div>
                <div>
                  <p className="font-bold text-[#1A2B4A] text-sm">
                    Trusted Care
                  </p>
                  <p className="text-[#718096] text-xs">Since 2014</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#E91E63] rounded-2xl p-4 shadow-xl text-white">
              <p className="font-bold text-2xl">10+</p>
              <p className="text-white/80 text-xs">Years of Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "1000+", label: "Clients Served" },
              { value: "5-Star", label: "Average Rating" },
              { value: "100%", label: "Licensed Caregivers" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-[#FFF5F8] border border-[#FCE4EC]"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-[#E91E63] mb-1">
                  {stat.value}
                </p>
                <p className="text-[#4A5568] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[#FFF5F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-2xl  text-[#E91E63] leading-tight">
              What We Offer
            </p>
            <h2 className="text-4xl font-bold text-[#1A2B4A] leading-tight mb-4">
              Comprehensive Home Care Services
            </h2>
            <p className="text-[#4A5568] max-w-xl mx-auto">
              From skilled nursing to personal care, we provide a full range of
              services designed to keep your loved ones safe and comfortable at
              home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group cursor-pointer bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#F48FB1] transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_24px_rgba(233,30,99,0.10)]"
              >
                <div className="w-12 h-12 bg-[#FCE4EC] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#E91E63] transition-colors">
                  <Icon className="w-6 h-6 text-[#E91E63] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold text-[#1A2B4A] mb-2">{title}</h3>
                <p className="text-[#718096] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="bg-[#E91E63] text-white px-7 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-[#D81B60] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 inline-block inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#E91E63] text-xs font-semibold uppercase tracking-widest mb-2">
                Why El Shadai
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight mb-6">
                A Name Families Trust in Houston
              </h2>
              <p className="text-[#4A5568] mb-8 leading-relaxed">
                For over a decade, El Shadai has been the trusted home care
                partner for thousands of Houston families. We combine clinical
                expertise with genuine compassion to deliver care that truly
                makes a difference.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#FCE4EC] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#E91E63]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#1A2B4A] text-sm">
                        {title}
                      </p>
                      <p className="text-[#718096] text-xs mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-square shadow-xl">
                <img
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg"
                  alt="Nurse with patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#E91E63] text-white rounded-2xl p-5 shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-white" />
                  ))}
                </div>
                <p className="font-semibold text-sm">
                  "Exceptional care, always."
                </p>
                <p className="text-white/70 text-xs mt-1">
                  — Houston Family, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FFF5F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#E91E63] text-xs font-semibold uppercase tracking-widest mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2B4A] leading-tight mb-4">
              What Families Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#E91E63] fill-[#E91E63]"
                    />
                  ))}
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FCE4EC] rounded-full flex items-center justify-center">
                    <span className="text-[#E91E63] font-bold text-sm">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A2B4A] text-sm">
                      {t.name}
                    </p>
                    <p className="text-[#718096] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="border-2 border-[#E91E63] text-[#E91E63] px-7 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-[#E91E63] hover:text-white transition-all duration-200 active:scale-95 inline-block inline-flex items-center gap-2"
            >
              Share Your Experience <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E91E63]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Let us care for your loved one like family. Reach out today for a
            free, no-obligation consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+12817016053"
              className="bg-white text-[#E91E63] px-7 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-[#FFF5F8] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href="/contact-us"
              className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-[#E91E63] transition-all duration-200 inline-flex items-center gap-2"
            >
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
