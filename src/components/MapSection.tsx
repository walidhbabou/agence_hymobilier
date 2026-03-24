import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function MapSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold mb-4">
            <MapPin size={14} />
            Localisation
          </span>
          <h2 className="section-title">Nous trouver</h2>
          <p className="section-subtitle">
            Rendez-nous visite dans notre agence au cœur d'Agdal, Rabat.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card-premium p-8">
              <h3 className="font-display font-bold text-xl text-primary-500 mb-6">
                KARYNTON Immobilier
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-primary-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-800 mb-1">Adresse</div>
                    <div className="text-sm text-neutral-500 leading-relaxed">
                      App 2, Immeuble, 76 Rue Tansift,<br />
                      Agdal, Rabat 10090
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-primary-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-800 mb-1">Téléphone</div>
                    <a href="tel:+212661473121" className="text-sm text-accent-600 hover:text-accent-700 font-medium">
                      06 61 47 31 21
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-primary-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-neutral-800 mb-1">Horaires</div>
                    <div className="text-sm text-neutral-500">
                      Lun - Ven : 9h00 - 18h30<br />
                      Sam : 9h00 - 13h00
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+212661473121"
                  className="btn-primary flex-1 text-center text-sm"
                >
                  <Phone size={16} />
                  Appeler
                </a>
                <a
                  href="https://maps.google.com/?q=Agdal+Rabat+76+Rue+Tansift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 text-center text-sm"
                >
                  <ExternalLink size={16} />
                  Itinéraire
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-card min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5!2d-6.8498!3d33.9912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76ce7f5462d3b%3A0x2c74a3e1e4e1a5a5!2sAgdal%2C%20Rabat!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KARYNTON - Agdal, Rabat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
