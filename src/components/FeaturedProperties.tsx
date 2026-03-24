import { BedDouble, Maximize2, MapPin, ArrowRight, Eye } from 'lucide-react';
import { properties } from '../data/properties';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function getBadgeClass(transaction: string) {
  switch (transaction) {
    case 'location': return 'badge-rent';
    case 'vente': return 'badge-sale';
    case 'courte-duree': return 'badge-short';
    default: return 'badge-rent';
  }
}

export default function FeaturedProperties() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="biens" className="section-padding bg-neutral-50">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold mb-4">
            <Eye size={14} />
            Biens en vedette
          </span>
          <h2 className="section-title">Nos biens sélectionnés</h2>
          <p className="section-subtitle">
            Découvrez notre sélection de biens immobiliers premium à Rabat,
            soigneusement choisis pour répondre à vos attentes.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`card-premium group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className={getBadgeClass(property.transaction)}>
                    {property.transactionLabel}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="badge bg-white/90 text-neutral-700 backdrop-blur-sm">
                    {property.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-neutral-400 text-sm mb-2">
                  <MapPin size={14} />
                  {property.quartier}
                </div>
                <h3 className="font-display font-semibold text-primary-500 text-lg mb-3 line-clamp-2 group-hover:text-accent-600 transition-colors">
                  {property.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-4 line-clamp-2">
                  {property.description}
                </p>

                {/* Property Details */}
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4 pb-4 border-b border-neutral-100">
                  {property.chambres > 0 && (
                    <div className="flex items-center gap-1.5">
                      <BedDouble size={15} className="text-neutral-400" />
                      <span>{property.chambres} ch.</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Maximize2 size={15} className="text-neutral-400" />
                    <span>{property.surface} m²</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-lg text-primary-500">
                      {property.prix}
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 group/btn transition-colors">
                    Voir détails
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="btn-outline">
            Voir tous les biens
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
