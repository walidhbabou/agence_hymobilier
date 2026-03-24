import { MapPin, Shield, Eye, Clock, Home, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const advantages = [
  {
    icon: MapPin,
    title: "Expertise locale à Rabat",
    description: "Une connaissance approfondie du marché immobilier rabatais, quartier par quartier."
  },
  {
    icon: Eye,
    title: "Biens sélectionnés",
    description: "Chaque bien est visité et validé par nos experts avant d'être proposé à nos clients."
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Un conseiller dédié vous guide de la recherche jusqu'à la signature du contrat."
  },
  {
    icon: Clock,
    title: "Visite rapide",
    description: "Organisez une visite en moins de 48h. Nous nous adaptons à votre emploi du temps."
  },
  {
    icon: Home,
    title: "Location courte & longue durée",
    description: "Que ce soit pour quelques nuits ou plusieurs années, nous avons la solution adaptée."
  },
  {
    icon: Shield,
    title: "Accompagnement vente & achat",
    description: "Un suivi complet pour sécuriser votre transaction immobilière en toute sérénité."
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
            <Shield size={14} />
            Nos engagements
          </span>
          <h2 className="section-title">Pourquoi choisir KARYNTON ?</h2>
          <p className="section-subtitle">
            Plus qu'une agence, un partenaire de confiance pour tous vos projets immobiliers à Rabat.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border border-neutral-100 hover:border-primary-100 bg-white hover:bg-gradient-to-br hover:from-primary-50/50 hover:to-white transition-all duration-500 hover:shadow-card ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors duration-300">
                  <Icon size={24} className="text-primary-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-semibold text-lg text-primary-500 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
