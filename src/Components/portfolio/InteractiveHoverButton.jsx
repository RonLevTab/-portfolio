import React from 'react';

// Ported from Magic UI's "Interactive Hover Button" (via petaron's demo):
// an expanding dot that fills the button on hover, plus a shine sweep.
// The fill inverts the button: a dark button turns white on hover, and a
// light button turns dark — text colour flips to stay readable.
const VARIANTS = {
  dark: {
    base: 'bg-ac-1 text-th-page border border-ac-1',
    dot: 'bg-th-page', // fills white
    hoverText: 'group-hover:text-th-heading',
    shine: 'via-black/15',
    shadow: '0 10px 26px rgb(28 25 23 / 0.18)',
  },
  light: {
    base: 'bg-th-surface text-th-heading border border-th-line',
    dot: 'bg-ac-1', // fills dark
    hoverText: 'group-hover:text-th-page',
    shine: 'via-white/40',
    shadow: 'none',
  },
};

export default function InteractiveHoverButton({
  href,
  onClick,
  children,
  className = '',
  variant = 'dark',
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const linkProps = href ? { href } : {};
  const v = VARIANTS[variant] || VARIANTS.dark;

  return (
    <Tag
      {...linkProps}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full ${v.base} px-7 py-3.5 font-display text-[13px] font-semibold tracking-wide transition-all duration-300 ${className}`}
      style={{ boxShadow: v.shadow }}
      {...rest}
    >
      {/* Expanding dot that fills (and inverts) the button */}
      <span
        className={`absolute left-[20%] top-[40%] h-2 w-2 scale-0 rounded-full ${v.dot} transition-all duration-500 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8]`}
      />
      {/* Shine sweep */}
      <span
        className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent ${v.shine} to-transparent transition-transform duration-700 group-hover:translate-x-full`}
      />
      <span
        className={`relative z-10 inline-flex items-center gap-2 transition-colors duration-300 ${v.hoverText}`}
      >
        {children}
      </span>
    </Tag>
  );
}
