'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  products,
  productCategories,
  usageFilters,
  type UsageFilter,
} from '@/lib/data';

const imageFallbackIcon = (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="4" y="6" width="16" height="12" rx="2" strokeWidth="1.5" />
    <path d="M6 8l12 8" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="10" r="1" strokeWidth="1.5" />
  </svg>
);

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeUsage, setActiveUsage] = useState<UsageFilter>('all');

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === 'all' || p.category === activeCategory;
    const useMatch = activeUsage === 'all' || p.usage.includes(activeUsage);
    return catMatch && useMatch;
  });

  return (
    <section id="productos" className="py-20 md:py-32 bg-gradient-to-br from-[#0b4f7a] via-[#1a67a6] to-[#0b4f7a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tusa-ocean/10 rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-tusa-sky/10 rounded-full blur-[100px] animate-float-delay" />

      {/* Rotating background ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-rotate-slow opacity-[0.02]">
        <div className="w-full h-full border border-white rounded-full" />
        <div className="absolute inset-8 border border-white rounded-full" />
        <div className="absolute inset-16 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-tusa-ocean font-bold"
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Catálogo Interactivo
          </motion.span>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.95]">
            Equipamiento<br />
            <span className="text-gradient-animated">Profesional</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg text-sm md:text-base leading-relaxed">
            Cada producto te dice para qué tipo de buzo es. Filtra por categoría o por tu estilo de buceo.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 space-y-4"
        >
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold self-center mr-2 hidden sm:inline">
              Categoría:
            </span>
            {productCategories.map((cat) => (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-tusa-ocean text-white shadow-lg shadow-tusa-ocean/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Usage filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold self-center mr-2 hidden sm:inline">
              Uso:
            </span>
            {usageFilters.map((u) => (
              <motion.button
                key={u.key}
                onClick={() => setActiveUsage(u.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeUsage === u.key
                    ? 'bg-tusa-sky text-white shadow-md shadow-tusa-sky/20'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {u.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <motion.p
          className="text-gray-500 text-xs uppercase tracking-widest mb-6"
          layout
        >
          {filtered.length} producto{filtered.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-black/30 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:border-white/30 shimmer-on-hover transition-all duration-500"
              >
                {/* Hover glow border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${product.imagePlaceholder}22, transparent 40%, transparent 60%, rgba(0,136,204,0.15))`,
                  }}
                />

                {/* Technology Badge */}
                {product.technology && (
                  <motion.div
                    className="absolute top-4 right-4 z-10 text-[9px] font-bold text-tusa-ocean bg-tusa-ocean/10 px-3 py-1 rounded-full uppercase tracking-wider border border-tusa-ocean/20"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {product.technology}
                  </motion.div>
                )}

                {/* Icon */}
                <div className="relative h-48 sm:h-56 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at center, ${product.imagePlaceholder}44, transparent 70%)`,
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2 text-white/80">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                      {imageFallbackIcon}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/60">
                      Imagen no disponible
                    </span>
                  </div>
                  <motion.div
                    className="absolute w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                    style={{ backgroundColor: product.imagePlaceholder }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 relative z-10">
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">
                    {product.model}
                  </p>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">
                    {product.description}
                  </p>

                  {/* For whom badge */}
                  <div className="bg-tusa-blue/5 border border-tusa-blue/10 rounded-lg p-3 mb-4 group-hover:border-tusa-blue/25 transition-colors duration-300">
                    <p className="text-[10px] font-bold text-tusa-blue uppercase tracking-wider mb-1">
                      ¿Para quién?
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {product.forWhom}
                    </p>
                  </div>

                  {/* Usage tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {product.usage.map((u) => (
                      <span
                        key={u}
                        className="text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-white/5 px-2.5 py-1 rounded-full group-hover:bg-white/10 transition-colors"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl mb-4 opacity-30"
            >
              🤿
            </motion.div>
            <p className="text-gray-500 text-lg">No se encontraron productos con estos filtros.</p>
            <button
              onClick={() => { setActiveCategory('all'); setActiveUsage('all'); }}
              className="mt-4 text-tusa-ocean text-sm font-bold hover:underline"
            >
              Limpiar filtros
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
