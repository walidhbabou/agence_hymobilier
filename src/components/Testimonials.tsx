import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/properties';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="temoignages" className="section-padding bg-primary-500">
      <div className="container-max" ref={ref}>
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4">
            <Star size={14} className="fill-accent-400 text-accent-400" />
            Témoignages
          </span>
          <h2 className="section-title text-white">Ce que disent nos clients</h2>
          <p className="section-subtitle text-white/60">
            La satisfaction de nos clients est notre plus belle récompense.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-700 hover:bg-white/15 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-accent-400/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-accent-400 fill-accent-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/85 text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-primary-900 font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-white/50 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/10">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="text-accent-400 fill-accent-400" />
              ))}
            </div>
            <span className="text-white/80 text-sm">
              Noté <strong className="text-white">5/5</strong> sur Google — 103 avis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
