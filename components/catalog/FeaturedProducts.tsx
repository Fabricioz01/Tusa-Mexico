'use client';

import { motion } from 'framer-motion';
import { featuredProducts } from '@/lib/data';

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-tusa-ocean font-bold">
              Lo Nuevo
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Destacados 2025
            </h2>
          </div>
          <a
            href="#productos"
            className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-tusa-ocean transition-colors animated-underline self-start sm:self-auto"
          >
            Ver todo el catálogo →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 border border-white/5 rounded-2xl overflow-hidden hover:border-tusa-ocean/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-block text-[10px] font-black uppercase tracking-wider text-black bg-tusa-ocean px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>

              {/* Image area */}
              <div className="relative h-56 sm:h-64 flex items-center justify-center">
                <div
                  className="absolute w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                  style={{ backgroundColor: product.imagePlaceholder }}
                />
                <span className="text-zinc-800 font-black text-7xl select-none opacity-10 group-hover:scale-110 transition-transform duration-700">
                  TUSA
                </span>
              </div>

              {/* Content */}
              <div className="p-6 pt-0">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">
                  {product.model}
                </p>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>

                <button className="mt-6 w-full py-3.5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 hover:bg-white hover:text-black transition-all duration-300">
                  Ver detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
