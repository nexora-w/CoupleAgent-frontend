"use client";

import { useRef, useState, useCallback } from "react";

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
  rippleColor?: string;
  rippleDuration?: number;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

const RippleEffect: React.FC<RippleEffectProps> = ({
  children,
  className = "",
  rippleColor = "rgba(255, 255, 255, 0.3)",
  rippleDuration = 600,
  disabled = false,
  onClick,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const createRipple = useCallback((event: React.MouseEvent) => {
    if (disabled) return;

    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const id = rippleId.current++;

    const newRipple: Ripple = { id, x, y, size };
    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, rippleDuration);
  }, [disabled, rippleDuration]);

  const handleClick = useCallback((event: React.MouseEvent) => {
    createRipple(event);
    onClick?.(event);
  }, [createRipple, onClick]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor,
            animationDuration: `${rippleDuration}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect; 