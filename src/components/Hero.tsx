import { ArrowRight, Star, MapPin, Shield, Clock } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="Immobilier premium à Rabat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/75 to-primary-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative container-max px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8 animate-fade-in">
            <Shield size={16} className="text-accent-400" />
            Agence immobilière de confiance depuis 2015
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Trouvez votre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
              bien idéal
            </span>
            <br />
            à Rabat
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Location longue durée, courte durée ou achat — KARYNTON vous accompagne
            dans tous vos projets immobiliers à Agdal, Aviation et Rabat.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-14 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollTo('#biens')}
              className="btn-accent group"
            >
              Voir les biens
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-outline border-white/30 text-white hover:bg-white hover:text-primary-500"
            >
              Demander une visite
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 md:gap-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {/* Google Reviews */}
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="text-accent-400 fill-accent-400" />
                ))}
              </div>
              <div className="text-white">
                <div className="text-sm font-semibold">5/5</div>
                <div className="text-xs text-white/60">103 avis Google</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin size={16} className="text-accent-400" />
              Basée à Agdal, Rabat
            </div>

            {/* Quick Response */}
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Clock size={16} className="text-accent-400" />
              Réponse sous 24h
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent" />
    </section>
  );
}
