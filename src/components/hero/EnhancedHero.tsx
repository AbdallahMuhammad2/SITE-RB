import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Environment, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { colors, gradients } from '../../styles/designSystem';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SplitType from 'split-type';
import { gsap } from 'gsap';

// 3D Golden Logo Component
const GoldenLogo = () => {
  const group = useRef<THREE.Group>(null);
  const { nodes } = useGLTF('/models/rb-logo.glb') as any;
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
        <mesh geometry={nodes.logo.geometry} castShadow receiveShadow>
          <meshStandardMaterial 
            color="#D4AF37" 
            roughness={0.2} 
            metalness={0.9} 
            envMapIntensity={1} 
          />
        </mesh>
      </Float>
    </group>
  );
};

// Hero Floating Card Component
const FloatingCard = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  return (
    <motion.div 
      className="absolute w-[380px] h-[280px] bg-gradient-to-br from-navy-900/80 to-navy-900/50 backdrop-blur-md rounded-xl p-6 border border-gold-500/20 shadow-xl"
      style={{
        transform: `perspective(1000px) rotateX(${mouseY * 5}deg) rotateY(${mouseX * -5}deg) translateZ(10px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="h-1.5 w-16 bg-gradient-to-r from-gold-400 to-gold-500/50 rounded-full mb-5" />
      
      {/* Content placeholders */}
      <div className="space-y-3">
        <div className="h-2 bg-white/10 rounded w-4/5" />
        <div className="h-2 bg-white/10 rounded w-3/5" />
      </div>
      
      <div className="grid grid-cols-3 gap-3 mt-8">
        <div className="h-16 rounded-lg bg-gold-500/10" />
        <div className="h-16 rounded-lg bg-gold-500/5" />
        <div className="h-16 rounded-lg bg-gold-500/10" />
      </div>
      
      <div className="absolute bottom-6 right-6">
        <div className="h-8 w-8 rounded-full bg-gold-500/20 flex items-center justify-center">
          <ArrowRight className="h-4 w-4 text-gold-300" />
        </div>
      </div>
      
      {/* Reflection/shine effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-xl"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
        }}
      />
    </motion.div>
  );
};

// Main Enhanced Hero Component
const EnhancedHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  
  // Handle mouse movement for parallax effects
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 2,
      y: (clientY / innerHeight - 0.5) * 2,
    });
  };
  
  useEffect(() => {
    setLoaded(true);
    
    // Advanced text animation
    if (headingRef.current) {
      const splitText = new SplitType(headingRef.current, { types: "lines,words,chars" });
      
      if (splitText.chars) {
        const chars = splitText.chars;
        
        gsap.fromTo(chars, 
          {
            opacity: 0,
            y: 80,
            rotateX: 100,
            transformOrigin: "0% 50% -50",
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.02,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      }
      
      // Add a fade-in for other elements once text animation completes
      gsap.fromTo(".hero-content > *:not(h1)", 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1, 
          duration: 0.8, 
          ease: "power3.out",
          delay: 1.2
        }
      );
    }
  }, []);
  
  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-navy-900"
      onMouseMove={handleMouseMove}
      style={{ opacity, scale, y }}
    >
      {/* Ambient background elements */}
      <div className="absolute inset-0">
        {/* Premium noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Subtle dot grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #D4AF37 0.5px, transparent 0.5px)',
            backgroundSize: '35px 35px'
          }}
        />
        
        {/* Atmospheric glow */}
        <div 
          className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full opacity-[0.07] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0.05) 50%, transparent 70%)',
            transform: `translate3d(${mousePosition.x * -30}px, ${mousePosition.y * -30}px, 0px)`,
          }}
        />
        
        <div 
          className="absolute bottom-[30%] right-[20%] w-[35%] h-[35%] rounded-full opacity-[0.06] blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, rgba(212,175,55,0.05) 50%, transparent 70%)',
            transform: `translate3d(${mousePosition.x * -20}px, ${mousePosition.y * -20}px, 0px)`,
          }}
        />
        
        {/* Vignette effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-navy-900 via-transparent to-navy-900 opacity-80"
        />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left column: Main content */}
            <div className="lg:col-span-7 hero-content">
              {/* Premium badge */}
              <motion.div
                className="mb-8 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative overflow-hidden group">
                  <div className="px-4 py-1.5 rounded-full bg-navy-800/80 backdrop-blur-sm border border-gold-500/30 flex items-center gap-2">
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-gold-500"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs tracking-widest uppercase font-medium text-gold-300">
                      Método Exclusivo RB
                    </span>
                  </div>
                  
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 w-full"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)',
                    }}
                  />
                </div>
              </motion.div>

              {/* Main heading with premium animation */}
              <h1 
                ref={headingRef}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white font-heading mb-8"
                style={{ 
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}
              >
                <span className="block mb-2">Excelência em</span>
                <span className="block mb-2 text-transparent bg-clip-text" style={{ backgroundImage: gradients.goldPrimary }}>
                  aprovações para
                </span>
                <span className="block">concursos</span>
              </h1>
              
              {/* Elegant underline */}
              <div className="relative h-px w-40 mb-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 via-gold-500 to-gold-400/20" />
                <motion.div 
                  className="absolute inset-0 bg-gold-300"
                  animate={{ 
                    x: ['-100%', '100%'],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </div>
              
              {/* Description */}
              <div className="mb-10 max-w-lg">
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden md:block" />
                  <p className="text-lg leading-relaxed text-white/80 md:pl-5">
                    Uma <span className="text-gold-400 font-medium">abordagem sofisticada</span> que combina 
                    neurociência avançada e estratégias de elite para garantir 
                    <span className="text-gold-400 font-medium"> resultados extraordinários</span>.
                  </p>
                </div>
              </div>
              
              {/* Call to action buttons */}
              <div className="flex flex-wrap gap-5 mb-12">
                {/* Primary CTA */}
                <div className="group relative">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-gold-500 to-gold-300 opacity-70 blur-sm group-hover:opacity-100 transition duration-300"></div>
                  <button className="relative bg-navy-900 px-8 py-3.5 rounded-lg font-medium text-gold-400 border border-gold-500/20 group-hover:text-gold-300 transition duration-300">
                    <span className="flex items-center gap-2">
                      Iniciar jornada
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </span>
                  </button>
                </div>
                
                {/* Secondary CTA */}
                <button className="px-6 py-3.5 rounded-lg text-white font-medium border border-white/10 hover:bg-navy-800/50 transition duration-300 backdrop-blur-sm">
                  Conhecer metodologia
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-navy-900 relative"
                      style={{
                        background: `linear-gradient(135deg, #D4AF37 0%, #F9E077 50%, #D4AF37 100%)`,
                        backgroundSize: '200% 200%',
                        animation: `gradientShift 8s ease infinite ${i * 1.5}s`,
                      }}
                    >
                      <div className="absolute inset-0.5 rounded-full bg-navy-900 flex items-center justify-center text-gold-500 text-xs font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-medium">+5.000 aprovados</div>
                  <div className="text-white/60 text-xs">nos últimos concursos</div>
                </div>
              </div>
            </div>
            
            {/* Right column: 3D visuals */}
            <div className="lg:col-span-5 relative">
              {/* 3D Logo/Visual */}
              <motion.div
                className="w-full aspect-square relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Canvas dpr={[1, 2]} className="absolute inset-0">
                  <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={0.5} />
                  <directionalLight 
                    position={[5, 5, 5]}
                    intensity={1}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                  />
                  <GoldenLogo />
                  <Environment preset="city" />
                </Canvas>
                
                {/* Floating card */}
                <motion.div
                  className="absolute -bottom-32 -right-20"
                  initial={{ opacity: 0, y: 40, x: 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                >
                  <FloatingCard mouseX={mousePosition.x} mouseY={mousePosition.y} />
                </motion.div>
                
                {/* Decorative elements */}
                <div className="absolute -top-16 -left-16 w-32 h-32 rounded-2xl border border-gold-500/20 -z-10"
                  style={{ transform: `rotate(-15deg) translate3d(${mousePosition.x * 15}px, ${mousePosition.y * 15}px, 0)` }}
                />
                
                <div className="absolute -bottom-20 right-12 w-40 h-40 rounded-full border border-gold-500/10 -z-10"
                  style={{ transform: `rotate(10deg) translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)` }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gold-500/80 cursor-pointer z-30"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 font-medium">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </div>
      
      {/* CSS Animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </motion.section>
  );
};

export default EnhancedHero;