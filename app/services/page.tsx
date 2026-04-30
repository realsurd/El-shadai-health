import Link from "next/link";
import {
  Heart,
  Stethoscope,
  Home,
  Brain,
  UserCheck,
  Pill,
  Activity,
  Coffee,
  Car,
  Moon,
  ShieldCheck,
  ClipboardList,
  Phone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Personal Care",
    desc: "Respectful assistance with bathing, grooming, dressing, and personal hygiene to help clients maintain dignity and independence in daily life.",
    tags: ["Bathing & Grooming", "Dressing", "Hygiene"],
  },
  {
    icon: Stethoscope,
    title: "Skilled Nursing",
    desc: "Professional medical services provided by our registered nurses, including health assessments, wound care, IV therapy, catheter care, and complex medication management.",
    tags: ["Wound Care", "IV Therapy", "Health Monitoring"],
  },
  {
    icon: Home,
    title: "Companion Care",
    desc: "Friendly companionship and meaningful social engagement to combat isolation, support emotional well-being, and provide peace of mind to families.",
    tags: ["Social Engagement", "Conversation", "Emotional Support"],
  },
  {
    icon: Brain,
    title: "Alzheimer's & Dementia Care",
    desc: "Specialized memory care with structured routines, safe supervision, and compassionate support tailored to individuals living with Alzheimer's and other cognitive conditions.",
    tags: ["Memory Care", "Safe Supervision", "Routine Support"],
  },
  {
    icon: Activity,
    title: "Post-Hospital Care",
    desc: "Transitional support to aid recovery after surgery or hospitalization, reducing re-admission risk and accelerating healing in the comfort of home.",
    tags: ["Recovery Support", "Medication Management", "Follow-up Care"],
  },
  {
    icon: UserCheck,
    title: "Respite Care",
    desc: "Temporary, professional relief for primary family caregivers, ensuring their loved ones receive expert care while they rest and recharge.",
    tags: ["Family Relief", "Short-term Care", "Flexible Scheduling"],
  },
  {
    icon: Pill,
    title: "Medication Management",
    desc: "Careful oversight of medication schedules, dosages, and refills to ensure safety, compliance, and proper therapeutic outcomes.",
    tags: [
      "Prescription Reminders",
      "Dosage Monitoring",
      "Pharmacy Coordination",
    ],
  },
  {
    icon: Coffee,
    title: "Meal Preparation",
    desc: "Nutritious, personalized meal planning and preparation accommodating dietary restrictions, preferences, and medical requirements.",
    tags: ["Diet Planning", "Cooking", "Grocery Assistance"],
  },
  {
    icon: Car,
    title: "Transportation",
    desc: "Safe, reliable transportation to medical appointments, therapy sessions, grocery runs, and community activities.",
    tags: ["Doctor Visits", "Appointments", "Community Outings"],
  },
  {
    icon: ClipboardList,
    title: "Light Housekeeping",
    desc: "Maintaining a clean, safe home environment through light cleaning, laundry, tidying, and organizational support.",
    tags: ["Cleaning", "Laundry", "Organization"],
  },
  {
    icon: Moon,
    title: "Overnight Care",
    desc: "Overnight supervision and assistance ensuring clients are safe and comfortable through the night, offering families peace of mind.",
    tags: ["Night Supervision", "Emergency Response", "24-Hour Care"],
  },
  {
    icon: ShieldCheck,
    title: "Chronic Disease Management",
    desc: "Ongoing support and monitoring for clients managing chronic conditions such as diabetes, heart disease, COPD, and hypertension.",
    tags: ["Diabetes Care", "Cardiac Support", "Vital Monitoring"],
  },
];

const process = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "We begin with a complimentary assessment to understand your loved one's unique needs and goals.",
  },
  {
    num: "02",
    title: "Care Plan Design",
    desc: "Our clinical team develops a personalized care plan tailored to the individual's health and lifestyle.",
  },
  {
    num: "03",
    title: "Caregiver Matching",
    desc: "We carefully match your loved one with the right caregiver based on personality, skills, and preferences.",
  },
  {
    num: "04",
    title: "Ongoing Support",
    desc: "We continuously monitor and adjust the care plan, keeping families informed every step of the way.",
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Page Hero */}
      <section className="bg-[#FFF5F8] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subtitle">Our Services</p>
          <h1 className="section-title text-5xl mb-5">
            Compassionate Care, Tailored to You
          </h1>
          <p className="text-[#4A5568] max-w-2xl mx-auto text-lg leading-relaxed">
            From skilled nursing to everyday assistance, we provide a
            comprehensive range of home care services designed to help your
            loved ones live comfortably and safely at home.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, tags }) => (
              <div
                key={title}
                className="card group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FCE4EC] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E91E63] transition-colors">
                    <Icon className="w-6 h-6 text-[#E91E63] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#1A2B4A] text-lg leading-snug pt-1">
                    {title}
                  </h3>
                </div>
                <p className="text-[#718096] text-sm leading-relaxed mb-4">
                  {desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#FFF5F8] text-[#E91E63] text-xs px-3 py-1 rounded-full border border-[#FCE4EC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#FFF5F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-subtitle">How It Works</p>
            <h2 className="section-title mb-4">Getting Started is Simple</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ num, title, desc }, i) => (
              <div key={num} className="relative">
                <div className="card text-center p-8">
                  <div className="w-14 h-14 bg-[#E91E63] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">{num}</span>
                  </div>
                  <h3 className="font-semibold text-[#1A2B4A] mb-2">{title}</h3>
                  <p className="text-[#718096] text-sm">{desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 z-10">
                    <ArrowRight className="w-5 h-5 text-[#F48FB1]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E91E63]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our care coordinators are available to help you find the right level
            of support. Call us or request a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+17138001234"
              className="btn-white flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href="/contact-us"
              className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-[#E91E63] transition-all duration-200 inline-flex items-center gap-2"
            >
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
