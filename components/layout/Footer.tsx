'use client';

import { motion } from 'framer-motion';
import { footerMenuLinks, partnerBrands, socialLinks } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  // Double the brands for seamless marquee
  const marqueeItems = [...partnerBrands, ...partnerBrands];

  return (
    <footer className="bg-gradient-to-b from-[#09334d] to-[#052336] border-t border-white/20">
      {/* Animated Partner Brands Marquee */}
      <div className="border-b border-white/5 py-6 overflow-hidden">
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#09334d] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#09334d] to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">
            {marqueeItems.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-gray-600 text-xs font-bold uppercase tracking-widest hover:text-tusa-ocean transition-colors cursor-default mx-8 md:mx-12 inline-block"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col mb-4 group cursor-default">
              <span className="text-2xl font-black tracking-tighter text-white group-hover:text-tusa-ocean transition-colors duration-300">
                TUSA
              </span>
              <span className="text-[9px] tracking-[0.3em] text-tusa-ocean font-bold uppercase">
                México
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Tecnología japonesa de buceo desde 1952. Diseñado por TABATA Co., Ltd. para la exploración del océano.
            </p>
          </motion.div>

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Menú
            </h4>
            <ul className="space-y-2.5">
              {footerMenuLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-white transition-colors group flex items-center gap-1"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-tusa-ocean transition-all duration-300" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {['Aviso de Privacidad', 'Términos y Condiciones', 'Política de Cookies'].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                >
                  <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors group flex items-center gap-1">
                    <span className="w-0 group-hover:w-2 h-px bg-tusa-ocean transition-all duration-300" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Síguenos
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-tusa-ocean/20 hover:border-tusa-ocean/30 transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.4 + i * 0.08 }}
                >
                  <span className="text-[10px] font-bold uppercase">
                    {social.platform.slice(0, 2)}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {year} TUSA / TABATA Co., Ltd. Todos los derechos reservados.
          </p>
          <p className="text-gray-700 text-[10px] uppercase tracking-widest hover:text-gray-500 transition-colors cursor-default">
            Desarrollado por Quetsana
          </p>
        </div>
      </div>
    </footer>
  );
}
