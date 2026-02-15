'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'ocean' | 'blue';
}

export default function SectionDivider({ variant = 'ocean' }: SectionDividerProps) {
  const color = variant === 'ocean' ? 'rgba(0,212,255,' : 'rgba(0,136,204,';

  return (
    <div className="relative h-px overflow-visible py-4">
      {/* Static gradient line */}
      <div
        className="absolute left-0 right-0 top-1/2 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color}0.25 30%, ${color}0.45 50%, ${color}0.25 70%, transparent 100%)`,
        }}
      />
      {/* Animated light that travels across */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-[3px] w-20 rounded-full"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}0.6, transparent)`,
          boxShadow: `0 0 12px ${color}0.4), 0 0 24px ${color}0.15)`,
        }}
        initial={{ left: '-5%' }}
        whileInView={{
          left: ['-5%', '105%'],
        }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      {/* Center diamond */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-2 h-2 rotate-45"
          style={{
            backgroundColor: variant === 'ocean' ? '#00d4ff' : '#0088cc',
            boxShadow: `0 0 10px ${color}0.4)`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
      </div>
    </div>
  );
}
