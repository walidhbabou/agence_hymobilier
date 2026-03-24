import { Building2, CalendarDays, TrendingUp, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Building2,
    title: "Location longue durée",
    description: "Trouvez l'appartement, la villa ou le bureau idéal pour vos besoins à long terme. Nous gérons la recherche, les visites et la négociation pour vous offrir les meilleures conditions.",
    features: ["Appartements meublés et non meublés", "Villas et maisons", "Locaux professionnels"],
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    icon: CalendarDays,
    title: "Location courte durée",
    description: "Séjours professionnels, touristiques ou transitoires — nos logements meublés et équipés vous accueillent pour quelques nuits ou quelques semaines.",
    features: ["Studios et appartements meublés", "Réservation flexible", "Service conciergerie"],
    color: "from-amber-500 to-amber-700",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600"
  },
  {
    icon: TrendingUp,
    title: "Vente immobilière",
    description: "Achetez ou vendez en toute confiance. Notre expertise du marché rabatais vous garantit une transaction sécurisée au meilleur prix.",
    features: ["Estimation gratuite", "Accompagnement juridique", "Négociation professionnelle"],
    color: "from-emerald-500 to-emerald-700",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600"
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold mb-4">
            <Building2 size={14} />
            Nos services
          </span>
          <h2 className="section-title">Ce que nous proposons</h2>
          <p className="section-subtitle">
            Trois expertises complémentaires pour répondre à tous vos besoins immobiliers à Rabat.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`card-premium group p-8 transition-all duration-700 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6`}>
                  <Icon size={28} className={service.textColor} />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-primary-500 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className={`flex items-center gap-2 font-semibold text-sm ${service.textColor} group-hover:gap-3 transition-all`}>
                  En savoir plus
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
