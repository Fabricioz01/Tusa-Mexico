'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { offices, socialLinks } from '@/lib/data';

const socialIcons: Record<string, ReactNode> = {
  facebook: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  pinterest: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
};

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-tusa-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-tusa-blue/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-tusa-ocean font-bold">
            Contacto Directo
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Hablemos
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            ¿Tienes dudas sobre equipo, garantías o distribución? Escríbenos directamente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-tusa-blue/50 focus:ring-1 focus:ring-tusa-blue/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-tusa-blue/50 focus:ring-1 focus:ring-tusa-blue/30 transition-all"
                />
              </div>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none focus:border-tusa-blue/50 appearance-none cursor-pointer">
                <option value="">Asunto</option>
                <option value="producto">Información de producto</option>
                <option value="garantia">Registro de garantía</option>
                <option value="distribucion">Distribución</option>
                <option value="pro">Programa Pro / Instructores</option>
                <option value="otro">Otro</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tu mensaje..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-tusa-blue/50 focus:ring-1 focus:ring-tusa-blue/30 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-tusa-blue hover:bg-tusa-ocean text-white font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,102,204,0.3)]"
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>

          {/* Offices + Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {offices.map((office) => (
              <div
                key={office.region}
                className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6"
              >
                <h4 className="text-tusa-ocean text-xs font-bold uppercase tracking-widest mb-3">
                  {office.region}
                </h4>
                <p className="text-white text-sm font-medium mb-1">{office.address}</p>
                <p className="text-gray-400 text-sm mb-3">{office.city}</p>
                <div className="space-y-1">
                  {office.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[.\s]/g, '')}`}
                      className="block text-gray-300 text-sm hover:text-tusa-ocean transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
                <a
                  href={`mailto:${office.email}`}
                  className="inline-block mt-2 text-tusa-blue text-sm font-medium hover:text-tusa-ocean transition-colors"
                >
                  {office.email}
                </a>
              </div>
            ))}

            {/* Social */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6">
              <h4 className="text-white text-sm font-bold mb-4">Síguenos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-tusa-blue/20 hover:border-tusa-blue/30 transition-all duration-300"
                  >
                    {socialIcons[social.platform]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
