'use client';

import { motion } from 'framer-motion';
import { heroData } from '@/lib/data';

export default function HeroVideo() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        poster="/videos/hero-poster.jpg"
      >
        <source src={heroData.videoSrc} type="video/mp4" />
      </video>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b4f7a]/70 via-[#0b4f7a]/20 to-[#0b4f7a]/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b4f7a]/40 via-transparent to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0b4f7a] z-10" />

      {/* Animated particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-tusa-ocean/40 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4"
        >
          <motion.span
            className="inline-block text-xs sm:text-sm tracking-[0.4em] uppercase text-tusa-ocean font-bold mb-4 border border-tusa-ocean/30 px-4 py-1.5 rounded-full"
            animate={{ borderColor: ['rgba(0,212,255,0.3)', 'rgba(0,212,255,0.6)', 'rgba(0,212,255,0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            TUSA México
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]"
        >
          {heroData.headline.split(' ').map((word, i) => (
            <motion.span
              key={i}
              className={i === 2 ? 'text-gradient-animated' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto font-light leading-relaxed"
        >
          {heroData.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href={heroData.ctaHref}
            className="group relative inline-flex items-center justify-center gap-2 bg-tusa-ocean hover:bg-tusa-sky text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,212,255,0.45)' }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shine sweep */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10">{heroData.ctaText}</span>
            <motion.svg
              className="w-4 h-4 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
          <motion.a
            href="#distribuidores"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:bg-white/5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ENCUENTRA TU TIENDA
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
            Scroll
          </span>
          <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
