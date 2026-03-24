import { useState } from 'react';
import { Search, Home, MapPin, ArrowRightLeft, Banknote } from 'lucide-react';
import { quartiers, typeBiens } from '../data/properties';

const transactions = [
  { value: '', label: 'Toutes transactions' },
  { value: 'location', label: 'Location' },
  { value: 'courte-duree', label: 'Courte durée' },
  { value: 'vente', label: 'Vente' },
];

export default function SearchBar() {
  const [type, setType] = useState('');
  const [transaction, setTransaction] = useState('');
  const [quartier, setQuartier] = useState('');
  const [budgetMin, setBudgetMin] = useState('');
  const [budgetMax, setBudgetMax] = useState('');

  const handleSearch = () => {
    const el = document.querySelector('#biens');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative -mt-12 z-10 px-4 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="bg-white rounded-2xl shadow-premium p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Type de bien */}
            <div className="relative">
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Type de bien
              </label>
              <div className="relative">
                <Home size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none cursor-pointer"
                >
                  {typeBiens.map((t) => (
                    <option key={t} value={t === 'Tous les types' ? '' : t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Transaction */}
            <div className="relative">
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Transaction
              </label>
              <div className="relative">
                <ArrowRightLeft size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <select
                  value={transaction}
                  onChange={(e) => setTransaction(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none cursor-pointer"
                >
                  {transactions.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quartier */}
            <div className="relative">
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Quartier
              </label>
              <div className="relative">
                <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <select
                  value={quartier}
                  onChange={(e) => setQuartier(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none cursor-pointer"
                >
                  {quartiers.map((q) => (
                    <option key={q} value={q === 'Tous les quartiers' ? '' : q}>{q}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget Min */}
            <div className="relative">
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Budget min
              </label>
              <div className="relative">
                <Banknote size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Min DH"
                  value={budgetMin}
                  onChange={(e) => setBudgetMin(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                />
              </div>
            </div>

            {/* Budget Max */}
            <div className="relative">
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Budget max
              </label>
              <div className="relative">
                <Banknote size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Max DH"
                  value={budgetMax}
                  onChange={(e) => setBudgetMax(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full btn-primary py-3 rounded-xl"
              >
                <Search size={18} />
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
