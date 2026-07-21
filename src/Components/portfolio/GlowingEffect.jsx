import React, { memo, useCallback, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

const cn = (...classes) => classes.filter(Boolean).join(' ');

// Ported from petaron's "How it Works" bounding-box halo.
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
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(0);

  const handleMove = useCallback(
    (e) => {
      if (!containerRef.current) return;

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        const element = containerRef.current;
        if (!element) return;

        const { left, top, width, height } = element.getBoundingClientRect();
        const mouseX = e && 'x' in e ? e.x : lastPosition.current.x;
        const mouseY = e && 'y' in e ? e.y : lastPosition.current.y;

        if (e) {
          lastPosition.current = { x: mouseX, y: mouseY };
        }

        const center = [left + width * 0.5, top + height * 0.5];
        const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        if (distanceFromCenter < inactiveRadius) {
          element.style.setProperty('--active', '0');
          return;
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        element.style.setProperty('--active', isActive ? '1' : '0');

        if (!isActive) return;

        const currentAngle = parseFloat(element.style.getPropertyValue('--start')) || 0;
        const targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;

        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + angleDiff;

        animate(currentAngle, newAngle, {
          duration: movementDuration,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (value) => {
            element.style.setProperty('--start', String(value));
          },
        });
      });
    },
    [inactiveZone, proximity, movementDuration]
  );

  useEffect(() => {
    if (disabled) return;

    const handleScroll = () => handleMove();
    const handlePointerMove = (e) => handleMove(e);

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.body.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, [handleMove, disabled]);

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
        glow && 'opacity-100',
        blur > 0 && 'blur-[var(--blur)]',
        className
      )}
    >
      <div
        className={cn(
          'rounded-[inherit]',
          'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
          'after:[border:var(--glowingeffect-border-width)_solid_transparent]',
          'after:[background:var(--gradient)] after:[background-attachment:fixed]',
          'after:opacity-[var(--active)] after:transition-opacity after:duration-300',
          'after:[mask-clip:padding-box,border-box]',
          'after:[mask-composite:intersect]',
          'after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]'
        )}
      />
    </div>
  );
});

export { GlowingEffect };
