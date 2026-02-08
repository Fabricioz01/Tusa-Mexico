'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { dealers, dealerStates } from '@/lib/data';

export default function DealerLocator() {
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');

  const filtered = dealers.filter((d) => {
    const stateMatch = selectedState === 'all' || d.state === selectedState;
    const searchMatch =
      !search ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.city.toLowerCase().includes(search.toLowerCase());
    return stateMatch && searchMatch;
  });

  return (
    <section id="distribuidores" className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tusa-blue/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-tusa-ocean font-bold">
            ¿Dónde Comprar?
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Encuentra tu{' '}
            <span className="text-gradient-ocean">tienda</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            Localiza al distribuidor autorizado TUSA más cercano a ti.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 mb-10 max-w-2xl mx-auto"
        >
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por ciudad o nombre..."
              className="w-full bg-zinc-900/80 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-tusa-blue/50 focus:ring-1 focus:ring-tusa-blue/30 transition-all"
            />
          </div>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="bg-zinc-900/80 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-tusa-blue/50 appearance-none cursor-pointer min-w-[200px]"
          >
            <option value="all">Todos los estados</option>
            {dealerStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Dealer Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((dealer, i) => (
            <motion.div
              key={dealer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-tusa-blue/30 transition-all duration-300 group"
            >
              {/* Map pin icon */}
              <div className="w-10 h-10 bg-tusa-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-tusa-blue/20 transition-colors">
                <svg className="w-5 h-5 text-tusa-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{dealer.name}</h3>
              <p className="text-tusa-ocean text-xs font-bold uppercase tracking-wider mb-3">
                {dealer.city}, {dealer.state}
              </p>
              <p className="text-gray-400 text-sm mb-1">{dealer.address}</p>
              <p className="text-gray-500 text-sm mb-4">{dealer.phone}</p>

              <div className="flex gap-2">
                <a
                  href={`https://www.google.com/maps?q=${dealer.lat},${dealer.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 bg-tusa-blue/10 text-tusa-blue text-xs font-bold rounded-lg hover:bg-tusa-blue hover:text-white transition-all duration-300"
                >
                  Ver en mapa
                </a>
                <a
                  href={`tel:${dealer.phone.replace(/[.\s]/g, '')}`}
                  className="flex-1 text-center py-2.5 border border-white/10 text-gray-300 text-xs font-bold rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  Llamar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No se encontraron distribuidores.</p>
            <button
              onClick={() => { setSearch(''); setSelectedState('all'); }}
              className="mt-3 text-tusa-ocean text-sm font-bold hover:underline"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
