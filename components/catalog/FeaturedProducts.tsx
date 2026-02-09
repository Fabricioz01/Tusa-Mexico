'use client';

import { motion } from 'framer-motion';
import { featuredProducts } from '@/lib/data';

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-tusa-ocean/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-tusa-blue/5 rounded-full blur-[80px] animate-float-delay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <motion.span
              className="inline-block text-xs tracking-[0.3em] uppercase text-tusa-ocean font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Lo Nuevo
            </motion.span>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Destacados{' '}
              <span className="text-gradient-animated">2025</span>
            </h2>
          </div>
          <motion.a
            href="#productos"
            className="text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-tusa-ocean transition-colors animated-underline self-start sm:self-auto group"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Ver todo el catálogo{' '}
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -12 }}
              className="group relative bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 border border-white/5 rounded-2xl overflow-hidden shimmer-on-hover card-hover-tilt"
            >
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 rotate-45 bg-gradient-to-br from-tusa-ocean/20 to-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                />
              </div>

              {/* Badge */}
              <div className="absolute top-5 left-5 z-10">
                <motion.span
                  className="inline-block text-[10px] font-black uppercase tracking-wider text-black bg-tusa-ocean px-3 py-1 rounded-full"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, delay: 0.4 + i * 0.2 }}
                >
                  {product.badge}
                </motion.span>
              </div>

              {/* Image area */}
              <div className="relative h-56 sm:h-64 flex items-center justify-center">
                <motion.div
                  className="absolute w-48 h-48 rounded-full blur-[80px] opacity-20 group-hover:opacity-50 transition-opacity duration-700"
                  style={{ backgroundColor: product.imagePlaceholder }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.span
                  className="text-zinc-800 font-black text-7xl select-none opacity-10"
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  TUSA
                </motion.span>
              </div>

              {/* Content */}
              <div className="p-6 pt-0 relative z-10">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">
                  {product.model}
                </p>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>

                <motion.button
                  className="mt-6 w-full py-3.5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Ver detalles</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-tusa-blue to-tusa-ocean opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
