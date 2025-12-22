"use client";

import { useEffect, useRef } from 'react';

export default function Grid3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Grid configuration
    const gridSize = 50;
    const gridDepth = 20;
    let animationFrame: number;
    let time = 0;

    // Perspective settings
    const perspective = 800;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Project 3D point to 2D canvas
    const project = (x: number, y: number, z: number) => {
      const scale = perspective / (perspective + z);
      return {
        x: centerX + x * scale,
        y: centerY + y * scale,
        scale
      };
    };

    // Render the 3D grid
    const render = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.005;

      // Draw horizontal lines
      for (let i = -10; i <= 10; i++) {
        ctx.beginPath();
        let firstPoint = true;

        for (let j = 0; j <= gridDepth; j++) {
          const x = i * gridSize;
          const z = j * gridSize - 500 + (time * 100) % gridSize;
          const y = Math.sin(time + i * 0.3 + j * 0.1) * 30;

          const point = project(x, y, z);

          if (firstPoint) {
            ctx.moveTo(point.x, point.y);
            firstPoint = false;
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }

        // Gradient color based on position
        const hue = 240 + i * 10;
        const alpha = 0.3 + Math.sin(time + i * 0.5) * 0.2;
        ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw vertical lines
      for (let j = 0; j <= gridDepth; j++) {
        ctx.beginPath();
        let firstPoint = true;

        for (let i = -10; i <= 10; i++) {
          const x = i * gridSize;
          const z = j * gridSize - 500 + (time * 100) % gridSize;
          const y = Math.sin(time + i * 0.3 + j * 0.1) * 30;

          const point = project(x, y, z);

          if (firstPoint) {
            ctx.moveTo(point.x, point.y);
            firstPoint = false;
          } else {
            ctx.lineTo(point.x, point.y);
          }
        }

        const hue = 280 + j * 5;
        const alpha = 0.2 + Math.sin(time + j * 0.3) * 0.15;
        ctx.strokeStyle = `hsla(${hue}, 80%, 55%, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Draw floating particles
      for (let i = 0; i < 50; i++) {
        const angle = time * 0.5 + i * 0.5;
        const radius = 200 + i * 10;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius - 300;
        const y = Math.sin(time * 2 + i) * 50;

        const point = project(x, y, z);

        if (point.scale > 0.3) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2 * point.scale, 0, Math.PI * 2);
          const hue = 200 + i * 3;
          ctx.fillStyle = `hsla(${hue}, 80%, 70%, ${0.6 * point.scale})`;
          ctx.fill();

          // Glow effect
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, 10 * point.scale
          );
          gradient.addColorStop(0, `hsla(${hue}, 80%, 70%, ${0.4 * point.scale})`);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      }

      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas for 3D grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Additional atmospheric layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent animate-pulse-slow" />

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan"
             style={{
               height: '200px',
               animation: 'scan 8s linear infinite'
             }}
        />
      </div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient opacity-60"
           style={{
             background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)'
           }}
      />
    </>
  );
}
