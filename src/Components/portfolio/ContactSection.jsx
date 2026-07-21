import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import { contactData } from '../../data';
import SparklesFinale from './SparklesFinale';

export default function ContactSection() {
  const iconMap = { Mail, Instagram, MapPin, Linkedin };

  const contactInfo = contactData.contactInfo.map((contact) => ({
    ...contact,
    icon: iconMap[contact.icon],
  }));

  return (
    <section id="contact" className="py-16 md:py-20 bg-th-surface-alt border-t border-th-line">
      <div className="max-w-5xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-th-heading leading-[1.05]">
            {contactData.title}
          </h2>
          <p className="mt-4 text-lg text-th-body leading-relaxed">{contactData.description}</p>
          <p className="mt-6 text-th-body leading-relaxed">{contactData.message}</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            const external = contact.href.startsWith('http');
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={external ? '_blank' : '_self'}
                rel={external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="editorial-card group flex items-center gap-4 p-5"
              >
                <span className="icon-tile h-12 w-12 flex-shrink-0 transition-colors group-hover:bg-ac-1 group-hover:text-th-page group-hover:border-ac-1">
                  <IconComponent className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-[11px] uppercase tracking-[0.16em] text-th-muted">
                    {contact.label}
                  </div>
                  <div className="font-medium text-th-heading truncate">{contact.value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-th-muted transition-colors group-hover:text-th-heading" />
              </motion.a>
            );
          })}
        </div>
      </div>

      <SparklesFinale text={contactData.footer.name} className="mt-16" />

      <div className="max-w-5xl mx-auto section-padding">
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-th-line text-center"
        >
          <p className="text-sm text-th-faint">{contactData.footer.copyright}</p>
        </motion.footer>
      </div>
    </section>
  );
}
