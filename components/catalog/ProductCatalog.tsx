'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  products,
  productCategories,
  usageFilters,
  type ProductCategory,
  type UsageFilter,
} from '@/lib/data';

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [activeUsage, setActiveUsage] = useState<UsageFilter>('all');

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === 'all' || p.category === activeCategory;
    const useMatch = activeUsage === 'all' || p.usage.includes(activeUsage);
    return catMatch && useMatch;
  });

  return (
    <section id="productos" className="py-20 md:py-32 bg-tusa-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tusa-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-tusa-ocean/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-tusa-ocean font-bold">
            Catálogo Interactivo
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[0.95]">
            Equipamiento<br />
            <span className="text-gradient-ocean">Profesional</span>
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
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-tusa-blue text-white shadow-lg shadow-tusa-blue/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Usage filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold self-center mr-2 hidden sm:inline">
              Uso:
            </span>
            {usageFilters.map((u) => (
              <button
                key={u.key}
                onClick={() => setActiveUsage(u.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeUsage === u.key
                    ? 'bg-tusa-ocean text-white shadow-lg shadow-tusa-ocean/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-tusa-blue/30 transition-all duration-500"
              >
                {/* Technology Badge */}
                {product.technology && (
                  <div className="absolute top-4 right-4 z-10 text-[9px] font-bold text-tusa-ocean bg-tusa-ocean/10 px-3 py-1 rounded-full uppercase tracking-wider border border-tusa-ocean/20">
                    {product.technology}
                  </div>
                )}

                {/* Image Placeholder */}
                <div className="relative h-48 sm:h-56 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at center, ${product.imagePlaceholder}44, transparent 70%)`,
                    }}
                  />
                  <span className="text-zinc-800 font-black text-5xl select-none opacity-20 group-hover:scale-110 transition-transform duration-700">
                    TUSA
                  </span>
                  <div
                    className="absolute w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                    style={{ backgroundColor: product.imagePlaceholder }}
                  />
                </div>

                {/* Content */}
                <div className="p-5">
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
                  <div className="bg-tusa-blue/5 border border-tusa-blue/10 rounded-lg p-3 mb-4">
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
                        className="text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-white/5 px-2.5 py-1 rounded-full"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
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
