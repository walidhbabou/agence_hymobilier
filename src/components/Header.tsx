import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Biens', href: '#biens' },
  { label: 'Services', href: '#services' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Avis', href: '#temoignages' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2 group">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-colors duration-300 ${
            isScrolled ? 'bg-primary-500 text-white' : 'bg-white/20 backdrop-blur text-white'
          }`}>
            K
          </div>
          <span className={`font-display font-bold text-xl tracking-wider transition-colors duration-300 ${
            isScrolled ? 'text-primary-500' : 'text-white'
          }`}>
            KARYNTON
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                isScrolled
                  ? 'text-neutral-700 hover:text-primary-500 hover:bg-primary-50'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+212661473121"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? 'text-neutral-600' : 'text-white/90'
            }`}
          >
            <Phone size={16} />
            06 61 47 31 21
          </a>
          <button
            onClick={() => handleNavClick('#contact')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-primary-500 text-white hover:bg-primary-600'
                : 'bg-white text-primary-500 hover:bg-white/90'
            }`}
          >
            Nous contacter
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-primary-500' : 'text-white'
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-premium transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-6 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 rounded-xl text-neutral-700 hover:bg-primary-50 hover:text-primary-500 font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 mt-4 border-t border-neutral-100 space-y-3">
            <a
              href="tel:+212661473121"
              className="flex items-center gap-3 px-4 py-3 text-neutral-600"
            >
              <Phone size={18} />
              06 61 47 31 21
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 px-4 py-3 text-neutral-600"
            >
              <MapPin size={18} />
              Agdal, Rabat
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full btn-primary text-center"
            >
              Demander une visite
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
