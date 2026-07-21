import React, { memo, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

const cn = (...classes) => classes.filter(Boolean).join(' ');

// Shared pointer/scroll manager: ONE global listener + ONE rAF updates every
// mounted GlowingEffect, instead of N cards each attaching their own listener
// and scheduling their own frame (which forced N layout reads per mouse move).
const instances = new Set();
let listening = false;
let rafId = 0;
let lastX = 0;
let lastY = 0;
let hasPointer = false;

function tick() {
  rafId = 0;
  instances.forEach((inst) => inst.update(lastX, lastY, hasPointer));
}
function schedule() {
  if (rafId === 0) rafId = requestAnimationFrame(tick);
}
function onPointerMove(e) {
  lastX = e.clientX;
  lastY = e.clientY;
  hasPointer = true;
  schedule();
}
function onScroll() {
  schedule();
}
function ensureListening() {
  if (listening) return;
  listening = true;
  document.body.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
}
function maybeStopListening() {
  if (!listening || instances.size > 0) return;
  listening = false;
  document.body.removeEventListener('pointermove', onPointerMove);
  window.removeEventListener('scroll', onScroll);
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
}

// Ported from petaron's "How it Works" bounding-box halo (Aceternity UI).
// Warm bronze/tan gradient to match the cream editorial theme.
const GlowingEffect = memo(function GlowingEffect({
  blur = 0,
  inactiveZone = 0.6,
  proximity = 64,
  spread = 40,
  glow = true,
  className,
  movementDuration = 2,
  borderWidth = 2,
  disabled = false,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (disabled) return undefined;
    const el = containerRef.current;
    if (!el) return undefined;
    let controls = null;

    const inst = {
      update(mouseX, mouseY, pointerKnown) {
        if (!pointerKnown) return;
        const { left, top, width, height } = el.getBoundingClientRect();
        const cx = left + width * 0.5;
        const cy = top + height * 0.5;
        const distanceFromCenter = Math.hypot(mouseX - cx, mouseY - cy);
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        if (distanceFromCenter < inactiveRadius) {
          el.style.setProperty('--active', '0');
          return;
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        el.style.setProperty('--active', isActive ? '1' : '0');
        if (!isActive) return;

        const currentAngle = parseFloat(el.style.getPropertyValue('--start')) || 0;
        const targetAngle = (180 * Math.atan2(mouseY - cy, mouseX - cx)) / Math.PI + 90;
        // Euclidean modulo keeps the delta in [-180, 180) so the glow always
        // takes the short way round (plain JS % is signed and can go the long way).
        const angleDiff = ((((targetAngle - currentAngle) % 360) + 540) % 360) - 180;
        const newAngle = currentAngle + angleDiff;

        controls?.stop();
        controls = animate(currentAngle, newAngle, {
          duration: movementDuration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (value) => el.style.setProperty('--start', String(value)),
        });
      },
    };

    instances.add(inst);
    ensureListening();

    return () => {
      controls?.stop();
      instances.delete(inst);
      maybeStopListening();
    };
  }, [disabled, inactiveZone, proximity, movementDuration]);

  return (
    <div
      ref={containerRef}
      style={{
        '--blur': `${blur}px`,
        '--spread': spread,
        '--start': '0',
        '--active': '0',
        '--glowingeffect-border-width': `${borderWidth}px`,
        '--repeating-conic-gradient-times': '5',
        '--gradient': `radial-gradient(circle, #c9a66b 10%, #c9a66b00 20%),
          radial-gradient(circle at 40% 40%, #b8895a 6%, #b8895a00 18%),
          radial-gradient(circle at 60% 60%, #a8895f 8%, #a8895f00 18%),
          radial-gradient(circle at 40% 60%, #8f7350 8%, #8f735000 20%),
          repeating-conic-gradient(
            from 236.84deg at 50% 50%,
            #c9a66b 0%,
            #b8895a calc(25% / var(--repeating-conic-gradient-times)),
            #a8895f calc(50% / var(--repeating-conic-gradient-times)),
            #8f7350 calc(75% / var(--repeating-conic-gradient-times)),
            #c9a66b calc(100% / var(--repeating-conic-gradient-times))
          )`,
      }}
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity',
        blur > 0 && 'blur-[var(--blur)]',
        className,
      )}
    >
      <div className="glow-slice rounded-[inherit]" />
    </div>
  );
});

export { GlowingEffect };
