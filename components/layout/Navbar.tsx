'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl py-3 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col group">
            <motion.span
              className="text-2xl sm:text-3xl font-black tracking-tighter text-white group-hover:text-tusa-ocean transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              TUSA
            </motion.span>
            <span className="text-[9px] tracking-[0.3em] text-tusa-ocean font-bold uppercase leading-none">
              México
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.15em] font-semibold text-gray-300 hover:text-white animated-underline transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#pro"
              className="text-[11px] uppercase tracking-[0.15em] font-bold text-tusa-ocean bg-tusa-ocean/10 border border-tusa-ocean/30 px-5 py-2 rounded-full hover:bg-tusa-ocean hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0,163,224,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Zona Pro
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-[110]"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-tusa-blue via-tusa-ocean to-tusa-blue origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tusa-blue/5 rounded-full blur-[100px] animate-float" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-tusa-ocean/5 rounded-full blur-[80px] animate-float-delay" />
            </div>

            <nav className="flex flex-col items-center gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
                  className="text-2xl font-bold text-white hover:text-tusa-ocean transition-colors tracking-tight"
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#pro"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className="mt-4 text-sm font-bold text-tusa-ocean border border-tusa-ocean/40 px-8 py-3 rounded-full hover:bg-tusa-ocean hover:text-white transition-all"
              >
                ZONA PRO
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
