import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** Every section lays its content out in the same shell. */
export const SHELL = 'mx-auto w-full max-w-[1240px] px-6 md:px-8';

/** "Head <Em>last word</Em>": one light Plex word inside a grotesk headline. */
export const splitTitle = (title) => {
  const i = title.lastIndexOf(' ');
  return i === -1 ? [title, ''] : [title.slice(0, i), title.slice(i + 1)];
};

/**
 * "Arrives out of focus and settles": blur + rise on first view. Holds still
 * under reduced motion.
 */
export function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  const anim = reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24, filter: 'blur(14px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: { once: true, margin: '-8% 0px' },
        transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] },
      };
  return (
    <Tag className={className} {...anim} {...rest}>
      {children}
    </Tag>
  );
}

/** The headline's second face: light Plex, no italics. */
export const Em = ({ children, className = 'text-th-heading/80' }) => (
  <em className={`font-serif font-light not-italic tracking-[-0.02em] ${className}`}>{children}</em>
);

export const Title = ({ text, emClassName }) => {
  const [head, tail] = splitTitle(text);
  return (
    <>
      {head}
      {tail && (
        <>
          {' '}
          <Em className={emClassName}>{tail}</Em>
        </>
      )}
    </>
  );
};

/**
 * Section opener. `align="left"`: headline with the aside line on the right.
 * `align="center"`: stacked and centred.
 */
export function SectionIntro({ title, aside, align = 'left' }) {
  if (align === 'center') {
    return (
      <div className="mx-auto grid max-w-3xl justify-items-center gap-4 text-center">
        <Reveal as="h2" className="text-balance text-[clamp(28px,4.4vw,46px)] leading-[1.08] text-th-heading">
          <Title text={title} />
        </Reveal>
        {aside && (
          <Reveal as="p" delay={0.1} className="max-w-xl font-body text-[15px] leading-relaxed text-th-body">
            {aside}
          </Reveal>
        )}
      </div>
    );
  }
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-end">
      <Reveal as="h2" className="text-balance text-[34px] leading-[1.08] text-th-heading sm:text-[44px]">
        <Title text={title} />
      </Reveal>
      {aside && (
        <Reveal as="p" delay={0.1} className="max-w-md font-body text-[15px] leading-relaxed text-th-body lg:justify-self-end lg:pb-2">
          {aside}
        </Reveal>
      )}
    </div>
  );
}

const VARIANT = {
  accent: 'btn-accent',
  dark: 'btn-dark',
  ghost: 'btn-ghost',
  onAccent: 'btn-on-accent',
};

/**
 * Pill button. `accent` and `dark` carry the hover from petaron's buttons: the
 * dot beside the label spreads to fill the button in the opposite colour while
 * the label slides out and a copy in that colour slides in (`.hb` in index.css).
 */
export function PillButton({ variant = 'accent', size, href, onClick, className = '', children, ...rest }) {
  const Tag = href ? 'a' : 'button';
  const swaps = variant === 'accent' || variant === 'dark';
  const external = href && /^https?:/i.test(href);
  const cls = ['btn', VARIANT[variant] || VARIANT.accent, swaps && 'hb', size === 'sm' && 'btn-sm', className]
    .filter(Boolean)
    .join(' ');
  return (
    <Tag
      href={href}
      type={href ? undefined : 'button'}
      onClick={onClick}
      className={cls}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {swaps ? (
        <>
          <span aria-hidden="true" className="hb-dot" />
          <span className="hb-label">{children}</span>
          <span aria-hidden="true" className="hb-over">
            {children}
          </span>
        </>
      ) : (
        children
      )}
    </Tag>
  );
}
