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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4"
        >
          <span className="inline-block text-xs sm:text-sm tracking-[0.4em] uppercase text-tusa-ocean font-bold mb-4 border border-tusa-ocean/30 px-4 py-1.5 rounded-full">
            TUSA México
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9]"
        >
          {heroData.headline.split(' ').map((word, i) => (
            <span key={i} className={i === 2 ? 'text-gradient-ocean' : ''}>
              {word}{' '}
            </span>
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
          <a
            href={heroData.ctaHref}
            className="group relative inline-flex items-center justify-center gap-2 bg-tusa-blue hover:bg-tusa-ocean text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,102,204,0.4)]"
          >
            {heroData.ctaText}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#distribuidores"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 hover:bg-white/5"
          >
            ENCUENTRA TU TIENDA
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
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
        </div>
      </motion.div>
    </section>
  );
}
