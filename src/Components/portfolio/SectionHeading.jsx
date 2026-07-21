import React from 'react';
import { motion } from 'framer-motion';

// Editorial section heading — kicker label, serif title, muted description.
export default function SectionHeading({ kicker, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`mb-14 flex flex-col ${alignment}`}
    >
      {kicker && <span className="kicker mb-5">{kicker}</span>}
      <h2 className="text-4xl md:text-5xl font-normal text-th-heading leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-th-body leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
