import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, useSpring, AnimatePresence, useMotionTemplate, useTransform, useMotionValue } from 'framer-motion';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';


const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus:outline-none",
  {
    variants: {
      variant: {
        gold: "text-[#08070A]",
        violet: "text-white",
        emerald: "text-[#08070A]",
        neutral: "text-white",
      },
      size: {
        sm: "px-4 py-1.5 text-sm",
        default: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
        xl: "px-10 py-4 text-xl"
      },
      radius: {
        default: "rounded-lg",
        full: "rounded-full",
        sm: "rounded-md",
      },
      effect: {
        default: "",
        pulse: "hover:animate-pulse",
        shimmer: "",
        glow: "",
        morph: "",
      }
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
      radius: "default",
      effect: "default",
    }
  }
);

export interface PremiumButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof buttonVariants> {
  active?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  glow?: boolean;
  particles?: boolean;
  shimmer?: boolean;
  shine?: boolean;
  customGradient?: {from: string, to: string, via?: string};
  glassmorphism?: boolean;
  intense?: boolean;
}

const PARTICLE_COUNT = 12;
const SHINE_DELAY = 4;

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ 
    children, 
    className,
    variant = "gold", 
    size = "default", 
    radius = "default",
    effect = "default",
    active = false,
    loading = false,
    icon = null,
    iconPosition = "left", 
    glow = true,
    shimmer = true,
    shine = true,
    customGradient,
    glassmorphism = false,
    intense = false,
    ...props 
  }, ref) => {
    // Interactive states
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    
    // Motion values
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useSpring(1, { stiffness: 400, damping: 30 });
    const glowOpacity = useSpring(0, { stiffness: 100, damping: 20 });
    const shimmerProgress = useSpring(0, { stiffness: 60, damping: 20 });
    const rotateX = useTransform(y, [-100, 100], [3, -3]);
    const rotateY = useTransform(x, [-100, 100], [-3, 3]);
    
    // Background rotation for gradient movement
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
      if (!isHovered) return;
      
      const interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 50);
      
      return () => clearInterval(interval);
    }, [isHovered]);
    
    // Mouse tracking for 3D effect
    const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      
      const rect = buttonRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      
      // Normalize coordinates
      const normalizedX = (offsetX / rect.width) * 200 - 100;
      const normalizedY = (offsetY / rect.height) * 200 - 100;
      
      x.set(normalizedX);
      y.set(normalizedY);
      
      setMousePosition({ 
        x: offsetX / rect.width, 
        y: offsetY / rect.height 
      });
    };
    
    // Reset position when not hovering
    const handlePointerLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
      setIsPressed(false);
    };
    
    // Update dimensions for responsive effects
    useEffect(() => {
      if (!buttonRef.current) return;
      
      const updateDimensions = () => {
        if (buttonRef.current) {
          const { width, height } = buttonRef.current.getBoundingClientRect();
          setDimensions({ width, height });
        }
      };
      
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }, []);
    
    // Update springs based on interaction states
    useEffect(() => {
      scale.set(isPressed ? 0.97 : isHovered ? 1.02 : 1);
      glowOpacity.set(isHovered && glow ? (intense ? 0.8 : 0.5) : 0);
      shimmerProgress.set(isHovered && shimmer ? 1 : 0);
    }, [isHovered, isPressed, glow, shimmer, intense, scale, glowOpacity, shimmerProgress]);

    // Generate gradient based on variant
    const getGradient = () => {
      if (customGradient) {
        if (customGradient.via) {
          return `linear-gradient(${rotation}deg, ${customGradient.from}, ${customGradient.via}, ${customGradient.to})`;
        }
        return `linear-gradient(${rotation}deg, ${customGradient.from}, ${customGradient.to})`;
      }
      
      switch(variant) {
        case "gold":
          return `linear-gradient(${rotation}deg, #D4AF37, #F9E077, #D4AF37)`;
        case "violet":
          return `linear-gradient(${rotation}deg, #4F46E5, #7C3AED, #8B5CF6)`;
        case "emerald":
          return `linear-gradient(${rotation}deg, #059669, #34D399, #10B981)`;
        case "neutral":
          return `linear-gradient(${rotation}deg, #1F2937, #374151, #4B5563)`;
        default:
          return `linear-gradient(${rotation}deg, #D4AF37, #F9E077, #D4AF37)`;
      }
    };
    
    // Generate glow effect colors based on variant
    const getGlowColor = () => {
      switch(variant) {
        case "gold":
          return "rgba(212, 175, 55, 0.7)";
        case "violet":
          return "rgba(124, 58, 237, 0.7)";
        case "emerald":
          return "rgba(16, 185, 129, 0.7)";
        case "neutral":
          return "rgba(75, 85, 99, 0.7)";
        default:
          return "rgba(212, 175, 55, 0.7)";
      }
    };
    
    // Generate particle colors
    const getParticleColor = () => {
      switch(variant) {
        case "gold":
          return ["#D4AF37", "#F9E077", "#E6C989"];
        case "violet":
          return ["#4F46E5", "#7C3AED", "#8B5CF6"];
        case "emerald":
          return ["#059669", "#34D399", "#10B981"];
        case "neutral":
          return ["#1F2937", "#374151", "#4B5563"];
        default:
          return ["#D4AF37", "#F9E077", "#E6C989"];
      }
    };
    
    // Memoized particles array
    const particles = useMemo(() => {
      return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
        id: i,
        color: getParticleColor()[i % getParticleColor().length],
        size: 2 + Math.random() * 4,
        duration: 0.8 + Math.random() * 0.4,
        direction: {
          x: (Math.random() - 0.5) * 2 * (40 + Math.random() * 80),
          y: (Math.random() - 0.5) * 2 * (40 + Math.random() * 80),
        }
      }));
    }, [variant]);
    
    // Memoized transformation style
    const transformStyle = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Background shine position
    const [shinePosition, setShinePosition] = useState(-100);
    
    // Trigger shine animation
    useEffect(() => {
      if (!shine || !isHovered) return;
      
      const timer = setTimeout(() => {
        setShinePosition(100);
        
        const resetTimer = setTimeout(() => {
          setShinePosition(-100);
        }, 700);
        
        return () => clearTimeout(resetTimer);
      }, SHINE_DELAY * 1000);
      
      return () => clearTimeout(timer);
    }, [isHovered, shine, shinePosition]);
    
    return (
      <motion.div 
        className="relative inline-flex"
        style={{ scale }}
      >
        {/* Glow effect */}
        {glow && (
          <motion.div 
            className={cn(
              "absolute -inset-1.5 rounded-xl blur-md", 
              radius === "full" ? "rounded-full" : "",
              radius === "sm" ? "rounded-md" : "",
            )}
            style={{ 
              opacity: glowOpacity,
              background: getGlowColor(),
            }}
          />
        )}
        
        {/* Main button */}
        <motion.button
          ref={buttonRef}
          className={cn(buttonVariants({ variant, size, radius, effect, className }))}
          onPointerMove={handlePointerMove as React.PointerEventHandler<HTMLButtonElement>}
          onPointerDown={() => setIsPressed(true)}
          onPointerUp={() => setIsPressed(false)}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={handlePointerLeave}
          style={{ transform: transformStyle }}
          {...(props as any)}
        >
          {/* Background gradient with rotation */}
          <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "inherit" }}>
            <div
              className="absolute inset-0 transition-all duration-200"
              style={{ background: getGradient() }}
            />
            
            {/* Glass effect overlay */}
            {glassmorphism && (
              <div className="absolute inset-0 bg-white/15 backdrop-blur-[1px]" />
            )}
            
            {/* Shine effect */}
            {shine && (
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`,
                  transform: `translateX(${shinePosition}%)`, 
                  transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
                }}
              />
            )}
            
            {/* Shimmer effect */}
            {shimmer && (
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                style={{ opacity: shimmerProgress }}
              >
                <motion.div
                  className="w-[200%] h-full absolute -left-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
                    transition: isHovered ? 'transform 1.2s ease' : 'none',
                  }}
                />
              </motion.div>
            )}
            
            {/* Hover light spot that follows cursor */}
            <motion.div
              className="absolute w-[150%] h-[150%] opacity-50"
              style={{
                background: 'radial-gradient(circle closest-side, rgba(255,255,255,0.2), transparent)',
                left: `${mousePosition.x * 100}%`,
                top: `${mousePosition.y * 100}%`,
                transform: 'translate(-50%, -50%)',
                opacity: isHovered ? 0.15 : 0,
                transition: 'opacity 0.3s ease',
              }}
            />
          </div>
          
          {/* Button content with loading state */}
          <div className="relative z-10 flex items-center gap-2">
            {loading ? (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" cy="12" r="10" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="none" 
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <>
                {icon && iconPosition === "left" && <span>{icon}</span>}
                <span>{children}</span>
                {icon && iconPosition === "right" && <span>{icon}</span>}
              </>
            )}
          </div>
          
          {/* Fine border */}
          <div 
            className={cn(
              "absolute inset-0 border transition-colors", 
              isHovered ? "border-white/30" : "border-white/10",
              radius === "full" ? "rounded-full" : "",
              radius === "sm" ? "rounded-md" : "",
              radius === "default" ? "rounded-lg" : "",
            )} 
          />

          {/* Particle effects on hover */}
          <AnimatePresence>
            {isHovered && particles && (
              <>
                {particles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="absolute"
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      scale: 0, 
                      opacity: 0 
                    }}
                    animate={{ 
                      x: particle.direction.x, 
                      y: particle.direction.y, 
                      scale: [0, 1, 0], 
                      opacity: [0, 1, 0] 
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ 
                      duration: particle.duration, 
                      ease: "easeOut" 
                    }}
                  >
                    <div 
                      className="rounded-full" 
                      style={{
                        width: particle.size,
                        height: particle.size,
                        background: particle.color,
                      }}
                    />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    );
  }
);

PremiumButton.displayName = "PremiumButton";