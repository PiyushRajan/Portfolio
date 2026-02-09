"use client"

import { useEffect, useCallback } from 'react';

const CONFIG = {
  proximity: 40,
  spread: 80,
  blur: 12,
  gap: 32,
  vertical: false,
  opacity: 0,
};


type GlowCardProps = {
  children: React.ReactNode;
  identifier: string | number;
};


const GlowCard: React.FC<GlowCardProps> = ({ children, identifier }) => {
  const updateCards = useCallback((event:PointerEvent) => {
    const cards = document.querySelectorAll<HTMLElement>(`.glow-card-${identifier}`);

    cards.forEach((card) => {
      const bounds = card.getBoundingClientRect();
      const isNearby = 
        event?.x > bounds.left - CONFIG.proximity &&
        event?.x < bounds.left + bounds.width + CONFIG.proximity &&
        event?.y > bounds.top - CONFIG.proximity &&
        event?.y < bounds.top + bounds.height + CONFIG.proximity;

      card.style.setProperty('--active', String(isNearby ? 1 : CONFIG.opacity));

      if (isNearby) {
        const centerX = bounds.left + bounds.width * 0.5;
        const centerY = bounds.top + bounds.height * 0.5;
        let angle = (Math.atan2(event.y - centerY, event.x - centerX) * 180) / Math.PI;
        angle = angle < 0 ? angle + 360 : angle;
        card.style.setProperty('--start', String(angle + 90));
      }
    });
  }, [identifier]);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(`.glow-container-${identifier}`);
    if (!container) return;
    
    container.style.setProperty('--gap', String(CONFIG.gap));
    container.style.setProperty('--blur', String(CONFIG.blur));
    container.style.setProperty('--spread', String(CONFIG.spread));
    container.style.setProperty('--direction', CONFIG.vertical ? 'column' : 'row');

    document.body.addEventListener('pointermove', updateCards);
    return () => document.body.removeEventListener('pointermove', updateCards);
  }, [identifier, updateCards]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows" />
        {children}
      </article>
    </div>
  );
};

export default GlowCard;