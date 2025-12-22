"use client";

import { useEffect, useRef, useState } from 'react';

export default function Grid3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true // Better performance
    });
    if (!ctx) return;

    // Mobile-optimized configuration
    const config = {
      gridSize: isMobile ? 60 : 50,
      gridDepth: isMobile ? 15 : 20,
      gridRange: isMobile ? 8 : 10,
      particleCount: isMobile ? 25 : 50,
      animationSpeed: isMobile ? 0.003 : 0.005,
      lineWidth: isMobile ? 1 : 1.5,
    };

    // Set canvas size to cover full document
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      // For mobile, use lower resolution for better performance
      const scaleFactor = isMobile ? 0.75 : 1;

      canvas.width = window.innerWidth * dpr * scaleFactor;
      canvas.height = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      ) * dpr * scaleFactor;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      )}px`;

      ctx.scale(dpr * scaleFactor, dpr * scaleFactor);
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let animationFrame: number;
    let time = 0;
    let lastFrameTime = 0;
    const targetFPS = isMobile ? 30 : 60; // Lower FPS on mobile
    const frameInterval = 1000 / targetFPS;

    // Perspective settings
    const perspective = isMobile ? 600 : 800;
    const getCenterX = () => window.innerWidth / 2;
    const getCenterY = () => window.innerHeight / 2;

    // Project 3D point to 2D canvas
    const project = (x: number, y: number, z: number) => {
      const scale = perspective / (perspective + z);
      return {
        x: getCenterX() + x * scale,
        y: getCenterY() + y * scale,
        scale
      };
    };

    // Render the 3D grid with FPS throttling
    const render = (currentTime: number) => {
      // FPS throttling for mobile
      if (currentTime - lastFrameTime < frameInterval) {
        animationFrame = requestAnimationFrame(render);
        return;
      }
      lastFrameTime = currentTime;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += config.animationSpeed;

      // Draw horizontal lines
      for (let i = -config.gridRange; i <= config.gridRange; i++) {
        ctx.beginPath();
        let firstPoint = true;

        for (let j = 0; j <= config.gridDepth; j++) {
          const x = i * config.gridSize;
          const z = j * config.gridSize - 500 + (time * 100) % config.gridSize;
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
        ctx.lineWidth = config.lineWidth;
        ctx.stroke();
      }

      // Draw vertical lines
      for (let j = 0; j <= config.gridDepth; j++) {
        ctx.beginPath();
        let firstPoint = true;

        for (let i = -config.gridRange; i <= config.gridRange; i++) {
          const x = i * config.gridSize;
          const z = j * config.gridSize - 500 + (time * 100) % config.gridSize;
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
        ctx.lineWidth = config.lineWidth;
        ctx.stroke();
      }

      // Draw floating particles (reduced on mobile)
      for (let i = 0; i < config.particleCount; i++) {
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

          // Glow effect (skip on mobile for performance)
          if (!isMobile) {
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
      }

      animationFrame = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isMobile]);

  return (
    <>
      {/* Canvas for 3D grid - Fixed position to cover entire page */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full pointer-events-none opacity-40 z-0"
        style={{
          mixBlendMode: 'screen',
          willChange: 'transform',
        }}
      />

      {/* Additional atmospheric layers */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent animate-pulse-slow pointer-events-none z-0" />

      {/* Scanline effect - More subtle on mobile */}
      {!isMobile && (
        <div className="fixed inset-0 pointer-events-none z-0">
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
            style={{
              height: '200px',
              animation: 'scan 8s linear infinite',
            }}
          />
        </div>
      )}

      {/* Radial gradient overlay for depth */}
      <div
        className="fixed inset-0 opacity-60 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)',
        }}
      />
    </>
  );
}
