import React from 'react';
import { Mail, Instagram, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import { contactData, navigationData } from '../../data';
import { SHELL, Reveal, PillButton, Title } from './shared';

const iconMap = { Mail, Instagram, MapPin, Linkedin };

export default function ContactSection() {
  const { contactInfo, footer } = contactData;
  const email = contactInfo.find((c) => c.icon === 'Mail');
  const linkedin = contactInfo.find((c) => c.icon === 'Linkedin');
  const initials = navigationData.brand
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <section id="contact" className={`relative scroll-mt-24 pb-10 pt-20 ${SHELL}`}>
      {/* the one ask, on the blue panel */}
      <Reveal className="accent-panel px-6 py-16 text-center md:px-12 md:py-20">
        <h2 className="mx-auto max-w-2xl text-balance text-[clamp(30px,4.6vw,52px)] leading-[1.06] text-white">
          <Title text={contactData.title} emClassName="text-white/80" />
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-body text-[16px] leading-relaxed text-white/85 md:text-[17px]">
          {contactData.description}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {email && (
            <PillButton variant="dark" href={email.href}>
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              {email.value}
            </PillButton>
          )}
          {linkedin && (
            <PillButton variant="onAccent" href={linkedin.href}>
              <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              {linkedin.label}
            </PillButton>
          )}
        </div>
      </Reveal>

      {/* every way to reach me */}
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((contact, index) => {
          const Icon = iconMap[contact.icon];
          const external = contact.href.startsWith('http');
          return (
            <Reveal as="li" key={contact.label} delay={0.05 * index}>
              <a
                href={contact.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="glass-card group flex h-full items-center gap-4 p-4 transition-transform duration-500 hover:-translate-y-0.5"
              >
                <span className="icon-well h-11 w-11 flex-none transition-colors duration-300 group-hover:bg-ac-1 group-hover:text-white">
                  {Icon && <Icon className="h-5 w-5" strokeWidth={1.5} />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-body text-[12px] text-th-muted">{contact.label}</span>
                  <span className="block truncate font-body text-[14px] font-medium text-th-heading">{contact.value}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 flex-none text-th-muted transition-colors group-hover:text-th-heading" strokeWidth={1.5} />
              </a>
            </Reveal>
          );
        })}
      </ul>

      <footer className="mt-16 flex flex-col gap-4 border-t border-th-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="logo-mark h-7 w-7 text-[10px]">{initials}</span>
          <span className="font-body text-[14px] text-th-heading">{footer.name}</span>
        </div>
        <p className="font-body text-[12px] text-th-muted">{footer.copyright}</p>
      </footer>
    </section>
  );
}
