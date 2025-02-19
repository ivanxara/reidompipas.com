// @ts-nocheck

"use client";

import { useEffect, useRef } from "react";

const possibleColors: string[] = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson",
];

type ConfettiProps = {
  speed?: number;
  size?: { min: number; max: number };
  maxConfettis?: number;
  tiltIncrement?: { min: number; max: number };
  colors?: string[];
};

type ConfettiParticle = {
  x: number;
  y: number;
  r: number;
  d: number;
  color: string;
  tilt: number;
  tiltAngleIncremental: number;
  tiltAngle: number;
  draw: (context: CanvasRenderingContext2D) => void;
};

const randomFromTo = (from: number, to: number): number =>
  Math.floor(Math.random() * (to - from + 1) + from);

export default function Confetti({
  speed = 2,
  size = { min: 11, max: 20 },
  maxConfettis = 50,
  tiltIncrement = { min: 0.01, max: 0.05 },
  colors = possibleColors,
}: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: ConfettiParticle[] = [];

  useEffect(() => {
    let W = window.innerWidth;
    let H = window.innerHeight;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    class ConfettiParticle implements ConfettiParticle {
      x: number;
      y: number;
      r: number;
      d: number;
      color: string;
      tilt: number;
      tiltAngleIncremental: number;
      tiltAngle: number;

      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H - H;
        this.r = randomFromTo(size.min, size.max);
        this.d = Math.random() * maxConfettis + size.min;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.tilt = Math.floor(Math.random() * 33) - 11;
        this.tiltAngleIncremental =
          Math.random() * (tiltIncrement.max - tiltIncrement.min) +
          tiltIncrement.min;
        this.tiltAngle = 0;
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.lineWidth = this.r / 2;
        context.strokeStyle = this.color;
        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        context.stroke();
      }
    }

    function drawFrame() {
      requestAnimationFrame(drawFrame);
      context.clearRect(0, 0, W, H);
      particles.forEach((particle) => particle.draw(context));
      particles.forEach((particle, index) => {
        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + speed + particle.r / 2) / 2;
        particle.tilt = Math.sin(particle.tiltAngle - index / 3) * 15;

        if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
          particle.x = Math.random() * W;
          particle.y = -30;
          particle.tilt = Math.floor(Math.random() * 10) - 20;
        }
      });
    }

    function handleResize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    }

    window.addEventListener("resize", handleResize);

    for (let i = 0; i < maxConfettis; i++) {
      particles.push(new ConfettiParticle());
    }

    canvas.width = W;
    canvas.height = H;
    drawFrame();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [speed, size, maxConfettis, tiltIncrement, colors]);

  return (
    <canvas
      className="z-[99] pointer-events-none fixed top-0"
      ref={canvasRef}
    ></canvas>
  );
}
