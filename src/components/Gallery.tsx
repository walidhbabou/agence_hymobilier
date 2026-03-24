import { Camera } from 'lucide-react';
import { galleryImages } from '../data/properties';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Gallery() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="galerie" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold mb-4">
            <Camera size={14} />
            Galerie
          </span>
          <h2 className="section-title">Nos intérieurs d'exception</h2>
          <p className="section-subtitle">
            Plongez dans l'univers de nos biens et découvrez des espaces de vie pensés pour votre confort.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item rounded-2xl cursor-pointer ${image.span} ${
                index === 0 ? 'min-h-[300px] md:min-h-[400px]' : 'min-h-[180px] md:min-h-[200px]'
              }`}
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="gallery-label font-display">
                {image.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
