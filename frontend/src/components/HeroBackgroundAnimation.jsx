import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroBackgroundAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Responsive particle count based on screen size
    const isMobile = width < 768;
    const particleCount = isMobile ? 22 : 45;
    const connectionDistance = isMobile ? 80 : 130;

    const particles = [];
    const colors = [
      { r: 16, g: 185, b: 129 }, // emerald
      { r: 14, g: 165, b: 233 }, // sky blue
      { r: 239, g: 68, b: 68 },  // medium red
      { r: 168, g: 85, b: 247 }, // rich purple
      { r: 99, g: 102, b: 241 }, // indigo
    ];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        color,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // Mouse tracking for subtle interactive ripple
    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundary
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Subtle interactive mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (100 - dist) / 100;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        // Draw particle dot with gentle pulsing glow
        const currentAlpha = 0.35 + 0.25 * Math.sin(time * 2 + p.pulseOffset);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Subtle High-Tech Blueprint Matrix Grid */}
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(100, 116, 139, 0.18) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, black 25%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 40%, black 25%, transparent 75%)',
        }}
      />

      {/* 2. Interactive Constellation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />

      {/* 3. Floating Living Ambient Gradient Glows (Framer Motion) */}
      <motion.div
        className="absolute -top-16 left-1/4 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-emerald-500/12 to-teal-400/8 blur-[100px]"
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-10 right-10 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-sky-500/15 via-blue-400/10 to-transparent blur-[110px]"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 25, -20, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
        }}
      />

      {/* Soft Light Red / Rose Ambient Floating Glow */}
      <motion.div
        className="absolute top-1/3 -left-12 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-rose-400/10 via-red-300/5 to-transparent blur-[110px]"
        animate={{
          x: [0, 25, -15, 0],
          y: [0, 20, -25, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 13,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[520px] h-[260px] rounded-full bg-gradient-to-t from-indigo-500/8 to-emerald-500/6 blur-[120px]"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
