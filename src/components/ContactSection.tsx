import { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, MapPin, Banknote, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { quartiers } from '../data/properties';

const demandeTypes = [
  'Location longue durée',
  'Location courte durée',
  'Achat immobilier',
  'Estimation de bien',
  'Autre demande',
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    typeDemande: '',
    quartier: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.telephone.trim()) newErrors.telephone = 'Le téléphone est requis';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.typeDemande) newErrors.typeDemande = 'Sélectionnez un type de demande';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ nom: '', telephone: '', email: '', typeDemande: '', quartier: '', budget: '', message: '' });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100 text-accent-700 text-sm font-semibold mb-4">
              <MessageSquare size={14} />
              Contact
            </span>
            <h2 className="section-title text-left mb-6">
              Parlons de votre<br />
              <span className="text-gradient">projet immobilier</span>
            </h2>
            <p className="text-neutral-500 mb-8 leading-relaxed">
              Que vous cherchiez à louer, acheter ou investir à Rabat, notre équipe est
              à votre écoute. Remplissez le formulaire et nous vous recontacterons
              dans les plus brefs délais.
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-600">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Phone size={18} className="text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">Téléphone</div>
                  <a href="tel:+212661473121" className="font-medium">06 61 47 31 21</a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-neutral-600">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Mail size={18} className="text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">Email</div>
                  <span className="font-medium">contact@karynton.ma</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-neutral-600">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <MapPin size={18} className="text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 uppercase tracking-wider">Agence</div>
                  <span className="font-medium">Agdal, Rabat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {isSubmitted ? (
              <div className="card-premium p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary-500 mb-3">
                  Demande envoyée !
                </h3>
                <p className="text-neutral-500">
                  Merci pour votre message. Notre équipe vous recontactera dans les 24 heures.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-premium p-8 space-y-5">
                {/* Nom */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Nom complet *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <input
                      type="text"
                      value={formData.nom}
                      onChange={(e) => handleChange('nom', e.target.value)}
                      placeholder="Votre nom"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.nom ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-neutral-50'} text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all`}
                    />
                  </div>
                  {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
                </div>

                {/* Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => handleChange('telephone', e.target.value)}
                        placeholder="06 XX XX XX XX"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.telephone ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-neutral-50'} text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all`}
                      />
                    </div>
                    {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="votre@email.com"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-neutral-50'} text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all`}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Type de demande + Quartier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Type de demande *
                    </label>
                    <select
                      value={formData.typeDemande}
                      onChange={(e) => handleChange('typeDemande', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border ${errors.typeDemande ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-neutral-50'} text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none cursor-pointer`}
                    >
                      <option value="">Sélectionner</option>
                      {demandeTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.typeDemande && <p className="text-red-500 text-xs mt-1">{errors.typeDemande}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                      Quartier recherché
                    </label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                      <select
                        value={formData.quartier}
                        onChange={(e) => handleChange('quartier', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none cursor-pointer"
                      >
                        {quartiers.map((q) => (
                          <option key={q} value={q === 'Tous les quartiers' ? '' : q}>{q === 'Tous les quartiers' ? 'Aucune préférence' : q}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Budget estimé
                  </label>
                  <div className="relative">
                    <Banknote size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      placeholder="Ex: 5 000 - 10 000 DH/mois"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Décrivez votre projet immobilier..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="w-full btn-primary py-4 text-base">
                  <Send size={18} />
                  Réserver une visite
                </button>

                <p className="text-xs text-neutral-400 text-center">
                  En envoyant ce formulaire, vous acceptez d'être recontacté par notre équipe.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
