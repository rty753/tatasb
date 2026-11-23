"use client";

import { useEffect, useRef } from 'react';

// Must match the background-size of .bg-grid in globals.css.
const CELL = 56;

type Pulse = {
  horizontal: boolean;
  line: number;
  pos: number;
  speed: number;
  length: number;
  alpha: number;
};

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let width = 0;
    let height = 0;
    let pulses: Pulse[] = [];
    let frame = 0;
    let last = performance.now();

    const spawn = (anywhere = false): Pulse => {
      const horizontal = Math.random() < 0.5;
      const span = horizontal ? width : height;
      const lines = Math.ceil((horizontal ? height : width) / CELL);
      const length = 80 + Math.random() * 140;
      const dir = Math.random() < 0.5 ? 1 : -1;
      return {
        horizontal,
        line: Math.floor(Math.random() * (lines + 1)),
        pos: anywhere ? Math.random() * span : dir > 0 ? -length : span + length,
        speed: dir * (50 + Math.random() * 110),
        length,
        alpha: 0.3 + Math.random() * 0.5,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(6, Math.min(22, Math.round((width * height) / 70000)));
      pulses = Array.from({ length: count }, () => spawn(true));
    };

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i];
        p.pos += p.speed * dt;
        const span = p.horizontal ? width : height;
        if (p.pos < -p.length * 2 || p.pos > span + p.length * 2) {
          pulses[i] = spawn();
          continue;
        }

        const fixed = p.line * CELL + 0.5;
        const tail = p.pos - Math.sign(p.speed) * p.length;
        const x1 = p.horizontal ? tail : fixed;
        const y1 = p.horizontal ? fixed : tail;
        const x2 = p.horizontal ? p.pos : fixed;
        const y2 = p.horizontal ? fixed : p.pos;

        const trail = ctx.createLinearGradient(x1, y1, x2, y2);
        trail.addColorStop(0, 'rgba(43, 111, 255, 0)');
        trail.addColorStop(1, `rgba(120, 170, 255, ${p.alpha})`);
        ctx.strokeStyle = trail;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        ctx.fillStyle = `rgba(220, 232, 255, ${p.alpha})`;
        ctx.fillRect(x2 - 1.5, y2 - 1.5, 3, 3);
      }

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    frame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Blue light source above the fold */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% -8%, rgba(43, 111, 255, 0.36), transparent 70%)',
        }}
      />
      <div className="mask-grid-fade absolute inset-0">
        <div className="bg-grid absolute inset-0" />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950 to-transparent" />
      <div className="bg-grain absolute inset-0 opacity-[0.06]" />
    </div>
  );
}
