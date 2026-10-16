'use client';

import type { CSSProperties } from 'react';

const particles = Array.from({ length: 46 }, (_, index) => {
  const seed = (value: number) => {
    const x = Math.sin(value * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  const size = 1.5 + seed(index + 3) * 3.5;
  const depth = 30 + seed(index + 51) * 220;
  const hue = index % 5 === 0 ? 'violet' : index % 4 === 0 ? 'cyan' : 'lime';
  return {
    id: index,
    style: {
      '--x': `${(seed(index + 11) * 100).toFixed(2)}%`,
      '--y': `${(seed(index + 27) * 100).toFixed(2)}%`,
      '--size': `${size.toFixed(1)}px`,
      '--depth': `${depth.toFixed(0)}px`,
      '--duration': `${13 + seed(index + 73) * 20}s`,
      '--delay': `${-seed(index + 101) * 28}s`,
      '--drift-x': `${(-36 + seed(index + 131) * 72).toFixed(0)}px`,
      '--drift-y': `${(-58 - seed(index + 151) * 90).toFixed(0)}px`,
      '--particle-color': hue === 'violet' ? '#9b8cff' : hue === 'cyan' ? '#74e5e0' : '#d5ff65',
      '--particle-opacity': (0.18 + seed(index + 171) * 0.52).toFixed(2),
    } as CSSProperties,
    hue,
  };
});

export default function ParticleBackground() {
  return (
    <div className="particle-background" aria-hidden="true">
      <div className="particle-glow particle-glow-left" />
      <div className="particle-glow particle-glow-right" />
      <div className="particle-space">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className={`particle particle-${particle.hue}`}
            style={particle.style}
          />
        ))}
      </div>
    </div>
  );
}
