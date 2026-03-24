import { MapPin, Phone, Mail, ArrowUp, Facebook, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Nos biens', href: '#biens' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Location longue durée',
  'Location courte durée',
  'Vente immobilière',
  'Estimation de bien',
  'Conseil immobilier',
];

const quartiers = [
  'Agdal', 'Aviation', 'Hay Riad', 'Souissi', 'Hassan', 'Centre-ville'
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-500 flex items-center justify-center font-display font-bold text-primary-900 text-lg">
                K
              </div>
              <span className="font-display font-bold text-xl tracking-wider">
                KARYNTON
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Votre agence immobilière de confiance à Rabat.
              Location, vente, courte durée — nous vous accompagnons
              dans tous vos projets.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-500 hover:text-primary-900 flex items-center justify-center transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-500 hover:text-primary-900 flex items-center justify-center transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-500 hover:text-primary-900 flex items-center justify-center transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-accent-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm">{service}</span>
                </li>
              ))}
            </ul>
            <h4 className="font-display font-semibold text-lg mt-8 mb-4">Quartiers</h4>
            <div className="flex flex-wrap gap-2">
              {quartiers.map((q) => (
                <span key={q} className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-xs">
                  {q}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin size={16} className="text-accent-400 flex-shrink-0 mt-0.5" />
                App 2, Immeuble, 76 Rue Tansift,<br />
                Agdal, Rabat 10090
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone size={16} className="text-accent-400 flex-shrink-0" />
                <a href="tel:+212661473121" className="hover:text-accent-400 transition-colors">
                  06 61 47 31 21
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail size={16} className="text-accent-400 flex-shrink-0" />
                <span>contact@karynton.ma</span>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="tel:+212661473121"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-500 text-primary-900 font-semibold text-sm hover:bg-accent-400 transition-all"
              >
                <Phone size={16} />
                Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} KARYNTON Immobilier. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-500 hover:text-primary-900 flex items-center justify-center transition-all duration-300"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
