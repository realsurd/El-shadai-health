import { Heart, Phone, Mail, MapPin} from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const links = {
  Services: ['Household Duties', 'Daily Living Activities', 'Instrumental Activities', 'Transportation', 'Medication Management', 'Family Caregiver Program'],
  States: ['Pennsylvania', 'Connecticut', 'New Jersey', 'Missouri'],
  Company: ['About Us', 'Caregiver Careers', 'FAQ', 'Blog', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">El-Shadai</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Providing uncompromising home care that puts you first. Compassionate, professional, and personalized services across Houston Texas.
            </p>
            <div className="space-y-3">
              <a href="tel:2817016053" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-sky-500 flex-shrink-0" />
                 281-701-6053
              </a>
              <a href="mailto:info@elshadai.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                info@elshadai.com
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                TX
              </div>
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Emerest Health LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[FaFacebook, FaXTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 bg-slate-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-all duration-200 group"
              >
                <Icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
