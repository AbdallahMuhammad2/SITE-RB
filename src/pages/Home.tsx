import React, { useRef, useEffect, useState, Suspense } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ArrowUpRight, Calendar, Clock, CheckCircle2, BarChart3, BookOpen, Star, Mail, Phone, Trophy, Users, Sparkles, ShieldCheck, Instagram, Play, Quote, User } from 'lucide-react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import { StudyMaterialsSection } from '../components/sections/StudyMaterialsSection';
import { NewsSection } from '../components/sections/NewsSection';

import { CTASection } from '../components/sections/CTASection';
import yan from '../images/Yan.png';
import paula from '../images/Paula.png';
import Valbert from '../images/Valbert.png';
import jessica from '../images/jessica.png';
import Nicassio from '../images/Nicassio.png';
import Henrique from '../images/Henrique-Landim-Perfil.png';
import Anna from '../images/Anna-Alves-Perfil.png';
import Andreia from '../images/Andreia-Torres-Perfil.png';

// Main Home component with optimized structure
const HomePage = () => {
  return (
    <div className="bg-[#08070A] overflow-hidden">
      <UltraPremiumHero />
      <StatsHighlightBanner />
      <AboutSection />
      <CoursesSection />
      <MethodologySection />
      <ProfessorsSection />
      <TestimonialsSection />
      <StudyMaterialsSection />
      <NewsSection />
      <MissionCorreiosSection />
      <CTASection />
    </div>
  );
};

export default HomePage;

// Stats Highlight Banner
const StatsHighlightBanner = () => {
  return (
    <div className="relative z-10 -mt-20 mb-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-[#13121A] to-[#0F0E13] backdrop-blur-lg border border-white/5 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2 }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-[10%] opacity-[0.03] rotate-12">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-px my-8 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" 
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
            {[
              { value: "98%", label: "Taxa de Aprovação", icon: <Trophy className="w-5 h-5" /> },
              { value: "5.000+", label: "Alunos Aprovados", icon: <Users className="w-5 h-5" /> },
              { value: "15+", label: "Anos de Experiência", icon: <Star className="w-5 h-5" /> },
              { value: "#1", label: "Em Aprovações", icon: <ShieldCheck className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="p-6 md:p-8 text-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 + (i * 0.1) }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-5">
                  {stat.icon && React.cloneElement(stat.icon, { className: "w-24 h-24 text-[#D4AF37]" })}
                </div>
                <div className="relative z-10">
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent inline-block mb-2"
                    animate={{ backgroundPosition: ['0% center', '100% center', '0% center'] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
                    style={{ backgroundSize: '200% 100%' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs uppercase tracking-wider text-white/60 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Ultra-Premium Hero Section with Cinematic Visual Effects
export const UltraPremiumHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [loaded, setLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 50, damping: 15 });
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const parallaxY1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const parallaxY2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const parallaxY3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / innerWidth);
    mouseY.set((clientY - innerHeight / 2) / innerHeight);
  };
  
  // Calculate 3D perspective effect for background elements
  const calculatePerspective = (x: number, y: number, depth: number = 1) => {
    const xOffset = x * depth * 50;
    const yOffset = y * depth * 50;
    return { x: xOffset, y: yOffset };
  };
  
  useEffect(() => {
    setLoaded(true);
    
    if (headingRef.current) {
      // Enhanced text reveal animation
      const titleText = new SplitType('.split-text', { types: 'chars,words' });
      
      // Staggered luxury text animation
      gsap.fromTo(
        titleText.chars,
        { y: 80, opacity: 0, rotateX: -90 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0,
          stagger: 0.03, 
          duration: 1.2, 
          delay: 0.5, 
          ease: 'power3.out',
          transformOrigin: "0% 50%"
        }
      );
      
      // Enhanced gold shine animation
      gsap.fromTo(
        '.gold-shine-text',
        { backgroundPosition: "0% 50%", backgroundSize: '300% auto' },
        { backgroundPosition: "100% 50%", duration: 4, delay: 1.5, ease: 'power2.out' }
      );
      
      // Premium fade-in sequence with enhanced easing
      gsap.fromTo(
        '.fade-in-sequence',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 1.2, ease: 'power3.out', delay: 1.2 }
      );
    }
    
    // Enhanced parallax effect with depth perception
    const parallaxItems = document.querySelectorAll('.parallax-element');
    const handleParallax = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      parallaxItems.forEach((item: any, index) => {
        const depth = (index % 3 + 1) * 0.3;
        const { x: xOffset, y: yOffset } = calculatePerspective(x, y, depth);
        
        gsap.to(item, {
          x: xOffset,
          y: yOffset,
          rotateX: -y * depth * 2,
          rotateY: x * depth * 2,
          duration: 1.2,
          ease: 'power2.out'
        });
      });
    };
    
    window.addEventListener('mousemove', handleParallax);
    return () => window.removeEventListener('mousemove', handleParallax);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: "radial-gradient(ellipse at bottom, #131219 0%, #080608 70%)",
        perspective: 1000
      }}
    >
      {/* Cinematic Background Layer System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced 3D Starfield Effect */}
        <div className="absolute inset-0 z-0">
          {[...Array(120)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: `${Math.random() > 0.8 ? '#D4AF37' : '#FFF'}`,
                boxShadow: `0 0 ${Math.random() * 6 + 2}px ${Math.random() > 0.8 ? '#D4AF37' : '#FFF'}`,
                opacity: Math.random() * 0.5 + 0.1,
                zIndex: Math.floor(Math.random() * 10)
              }}
              animate={{
                opacity: [
                  Math.random() * 0.2 + 0.1,
                  Math.random() * 0.5 + 0.3,
                  Math.random() * 0.2 + 0.1
                ],
                scale: [1, Math.random() * 0.5 + 1, 1]
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Enhanced Nebula Effect */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute w-full h-full opacity-20 mix-blend-screen"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 40%, rgba(212,175,55,0.4) 0%, transparent 40%), 
                                radial-gradient(circle at 70% 60%, rgba(212,175,55,0.3) 0%, transparent 30%)`
            }}
            animate={{
              backgroundPosition: ['0% 0%', '2% 5%', '0% 0%'],
            }}
            transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
          />
        </div>
        
        {/* Enhanced Luxury Pattern with Dynamic Depth */}
        <motion.div 
          className="absolute inset-0 opacity-[0.015] parallax-element"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            transform: "translateZ(-20px)"
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity
          }}
        />
        
        {/* Enhanced Premium Geometric Patterns */}
        <div className="absolute inset-0 parallax-element" style={{ perspective: 1500 }}>
          <div className="absolute w-full h-[150%] -top-[25%] opacity-[0.03]">
            {[...Array(25)].map((_, idx) => (
              <motion.div
                key={idx}
                className="absolute h-[1px] w-full"
                style={{ 
                  top: `${idx * 6}%`,
                  left: 0,
                  transform: `rotateZ(${(idx % 2 === 0 ? -1 : 1) * 25}deg) translateZ(${idx * 2}px)`,
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(212,175,55,${idx % 3 === 0 ? 0.7 : 0.3}) 50%, 
                    transparent 100%)`
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  duration: 2 + (idx % 3), 
                  delay: idx * 0.08, 
                  ease: "easeOut" 
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Enhanced Luxury Diagonal Lines with Dynamic Lighting */}
        <motion.div 
          className="absolute -inset-[20%] opacity-[0.025] rotate-[-20deg] parallax-element"
          style={{ y: parallaxY2, z: 20 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div 
              key={i} 
              className="h-1.5 my-20 overflow-hidden rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: "easeInOut" }}
            >
              <div className="h-full bg-gradient-to-r from-[#D4AF37]/10 via-[#F9E077] to-[#D4AF37]/10" />
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(212,175,55,0.7) 50%, 
                    transparent 100%)`
                }}
                animate={{ 
                  x: ['-100%', '100%'],
                }}
                transition={{ 
                  duration: 3, 
                  delay: i * 0.2, 
                  repeat: Infinity, 
                  repeatDelay: 5 
                }}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Dynamic 3D Gold Dust Particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(80)].map((_, i) => {
            // Create depth layers for more realistic 3D effect
            const depth = Math.random();
            const size = Math.random() * 4 + 1;
            const speed = (1 - depth) * 8 + 4; // Particles further away move slower
            
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: depth > 0.7 
                    ? `radial-gradient(circle, #D4AF37 0%, transparent 80%)`
                    : depth > 0.4
                    ? `radial-gradient(circle, #F9E077 0%, transparent 80%)`
                    : `radial-gradient(circle, #FFFFFF 0%, transparent 80%)`,
                  boxShadow: depth > 0.7 
                    ? `0 0 ${size * 3}px #D4AF37`
                    : depth > 0.4
                    ? `0 0 ${size * 2}px #F9E077`
                    : `0 0 ${size}px #FFFFFF`,
                  opacity: Math.random() * 0.5 + (depth * 0.5),
                  filter: `blur(${(1 - depth) * 1}px)`,
                  zIndex: Math.floor(depth * 30),
                  transformStyle: "preserve-3d",
                  transform: `translateZ(${depth * 100}px)`
                }}
                animate={{
                  y: [0, -20 - Math.random() * 100],
                  x: [0, (Math.random() - 0.5) * 50],
                  opacity: [0, depth + 0.2, 0],
                  scale: [0, 1, 0.5],
                }}
                transition={{
                  duration: speed,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "easeOut"
                }}
              />
            );
          })}
        </div>
        
        {/* Enhanced Atmospheric Glow Effect */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full blur-[140px] parallax-element"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.7) 0%, rgba(212,175,55,0.1) 70%, transparent 100%)',
              y: parallaxY1,
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)"
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 rounded-full blur-[160px] parallax-element"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(212,175,55,0.1) 60%, transparent 100%)',
              y: parallaxY3,
              transformStyle: "preserve-3d",
              transform: "translateZ(40px)"
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.06, 0.09, 0.06],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          
          {/* Dynamic Light Beams */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-[0.03] w-full h-screen overflow-hidden"
              style={{
                top: '0%',
                left: '0%',
                transform: `rotate(${30 + i * 30}deg)`,
              }}
            >
              <motion.div
                className="w-20 h-[200%] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent blur-md"
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ 
                  x: ['100%', '200%'],
                  opacity: [0, 0.4, 0]
                }}
                transition={{ 
                  duration: 7,
                  delay: i * 4 + 2,
                  repeat: Infinity,
                  repeatDelay: 15
                }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Vignette with Depth */}
        <motion.div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(8,6,8,0.8) 80%, rgba(8,6,8,0.95) 100%)',
            opacity: 0.95
          }}
          animate={{ opacity: [0.9, 0.95, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      {/* Main Content with Cinematic Animations */}
      <div className="relative z-30 flex items-center justify-center min-h-screen">
        <motion.div 
          className="container mx-auto px-4 md:px-6 lg:px-8 py-16"
          style={{ scale }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Left Column with Enhanced Content */}
            <div className="lg:col-span-7 lg:col-start-1 py-12">
              {/* Ultra-Premium Brand Badge with Enhanced Interaction */}
              <motion.div
                className="mb-8 fade-in-sequence relative inline-block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.div
                  className="absolute -inset-2.5 rounded-full opacity-0 blur-xl"
                  style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 80%)"
                  }}
                  animate={{ 
                    opacity: [0, 0.6, 0],
                    scale: [0.8, 1.15, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative inline-flex items-center px-5 py-1.5 rounded-full bg-black/20 backdrop-blur-lg border border-[#D4AF37]/40 overflow-hidden group">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-transparent"
                      animate={{ 
                        x: ['-100%', '100%']
                      }}
                      transition={{ 
                        duration: 1.5, 
                        ease: "easeInOut", 
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </div>
                  
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-[#D4AF37]"
                    animate={{ 
                      boxShadow: [
                        '0 0 0 0 rgba(212,175,55,0)',
                        '0 0 0 5px rgba(212,175,55,0.3)',
                        '0 0 0 0 rgba(212,175,55,0)'
                      ] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="ml-3 text-xs tracking-widest uppercase font-medium bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent relative z-10">
                    RB Cursos
                  </span>
                </div>
              </motion.div>
              
              {/* Enhanced Premium Headline with 3D Character Animations */}
              <div className="mb-12">
                <h1
                  ref={headingRef}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                  style={{ lineHeight: 1.1, perspective: "1000px" }}
                >
                  <div className="mb-6 overflow-hidden">
                    <span className="split-text block mr-1 relative text-white">
                      Excelência em
                    </span>
                  </div>
                  
                  <div className="mb-6 overflow-hidden perspective-text">
                    <div className="relative inline-block">
                      <span className="heading-word gold-shine-text bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:300%_auto] bg-clip-text text-transparent">
                        aprovações
                      </span>
                      
                      {/* Ultra-premium gold underline animation */}
                      <div className="relative h-[3px] mt-3 w-full overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/80 via-[#F9E077] to-[#D4AF37]/80 rounded-full"
                          initial={{ scaleX: 0, transformOrigin: "left" }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 1.8, duration: 1.2, ease: "easeInOut" }}
                        />
                        
                        {/* Enhanced gold scanner effect */}
                        <motion.div
                          className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ repeat: Infinity, duration: 2, delay: 3, repeatDelay: 5 }}
                        />
                        
                        {/* Enhanced gold dust animation */}
                        <div className="absolute inset-0">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute top-0 w-[2px] h-[2px] rounded-full bg-white shadow-glow"
                              style={{ 
                                left: `${i * 14}%`,
                                boxShadow: "0 0 5px #D4AF37"
                              }}
                              animate={{ 
                                y: [0, -8, 0],
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.8, 0.5]
                              }}
                              transition={{ 
                                duration: 2,
                                delay: 2 + i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 8
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Enhanced gold sparkle effect */}
                      <motion.div
                        className="absolute -right-5 -top-6 z-10"
                        initial={{ opacity: 0, scale: 0, rotate: -45 }}
                        animate={{ 
                          opacity: [0, 1, 0], 
                          scale: [0.2, 1.4, 0.2], 
                          rotate: [-45, 45, -45] 
                        }}
                        transition={{ 
                          delay: 2, 
                          duration: 2.5, 
                          repeat: Infinity, 
                          repeatDelay: 5 
                        }}
                      >
                        <div className="relative">
                          <Sparkles className="w-7 h-7 text-[#D4AF37]" />
                          <motion.div 
                            className="absolute inset-0 rounded-full bg-[#D4AF37]/30 blur-md"
                            animate={{ 
                              scale: [0.8, 1.5, 0.8],
                              opacity: [0.5, 0, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </h1>
                
                {/* Enhanced description with animated accent */}
                <motion.div
                  className="relative max-w-2xl" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.span
                    className="absolute -left-5 top-0 w-[2px] h-full"
                    style={{
                      background: "linear-gradient(to bottom, transparent, #D4AF37, transparent)"
                    }}
                    animate={{ 
                      opacity: [0.3, 0.7, 0.3],
                      height: ["40%", "100%", "40%"],
                      top: ["30%", "0%", "30%"]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  <p className="text-xl leading-relaxed text-white/80 relative pl-2 fade-in-sequence">
                    <span className="font-medium">Garanta a sua aprovação</span> de forma rápida no concurso mais esperado do ano.
                    O <span className="text-[#D4AF37]">concurso dos correios</span> está chegando: essa é a sua chance de ser aprovado e
                    conquistar a sua <span className="relative inline-block">
                      estabilidade financeira
                      <motion.span 
                        className="absolute left-0 right-0 bottom-0 h-[1px] bg-white/30"
                        initial={{ scaleX: 0, transformOrigin: "left" }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 2, duration: 0.8 }}
                      />
                    </span>.
                  </p>
                </motion.div>
              </div>
              
              {/* Ultra-Premium Professor Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 max-w-lg gap-5 mb-12 fade-in-sequence">
                {[
                  {
                    title: "Português e Redação",
                    professor: "Prof. Paula Barreto",
                    icon: "📝"
                  },
                  {
                    title: "Matemática e RLM",
                    professor: "Prof. Yan Ribeiro",
                    icon: "📊"
                  }
                ].map((course, i) => (
                  <motion.div 
                    key={i}
                    className="bg-white/5 backdrop-blur-[12px] border border-white/10 p-5 rounded-xl overflow-hidden relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + (i * 0.1) }}
                    whileHover={{ 
                      y: -3,
                      boxShadow: '0 15px 30px -10px rgba(0,0,0,0.5)'
                    }}
                  >
                    {/* Enhanced hover effect system */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    <motion.div
                      className="absolute inset-y-0 w-[150%] -left-[100%] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent group-hover:left-[100%] opacity-0 group-hover:opacity-100 transition-all duration-1500 ease-in-out"
                    />
                    
                    {/* Enhanced border glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ boxShadow: "inset 0 0 20px rgba(212,175,55,0.15)" }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        {/* Enhanced icon container with dynamic effects */}
                        <div className="text-2xl relative">
                          <motion.div
                            className="absolute inset-0 blur-md bg-[#D4AF37]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            animate={{ 
                              scale: [0.8, 1.2, 0.8],
                              opacity: [0, 0.8, 0] 
                            }}
                            transition={{ 
                              duration: 3,
                              repeat: Infinity,
                              repeatDelay: 1
                            }}
                          />
                          <div className="relative">{course.icon}</div>
                        </div>
                        
                        <div>
                          <h3 className="text-white font-medium text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">
                            {course.title}
                          </h3>
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 overflow-hidden mr-2 flex-shrink-0 group-hover:scale-110 transition-transform">
                              <div className="w-full h-full bg-gradient-to-br from-[#D4AF37]/30 to-transparent" />
                            </div>
                            <p className="text-sm text-white/70">{course.professor}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Reveal on hover */}
                      <motion.div
                        className="mt-4 pl-10 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        whileHover={{ height: 'auto', opacity: 1 }}
                      >
                        <div className="flex items-center text-[#D4AF37]/80 text-xs font-medium">
                          <span>Ver detalhes</span>
                          <ArrowUpRight className="ml-1 w-3 h-3" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Ultra-luxurious CTA buttons */}
              <div className="flex flex-wrap gap-5 mb-16 fade-in-sequence">
                <motion.button
                  className="group relative px-8 py-4 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 30px -5px rgba(212, 175, 55, 0.5)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  {/* Multi-layered premium background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto]" />
                  <motion.div 
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: "url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E')"
                    }}
                  />
                  
                  <div className="relative flex items-center gap-3">
                    <span className="text-[#080608] font-medium">Quero garantir minha vaga</span>
                    <motion.span
                      className="flex items-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowRight className="h-5 w-5 text-[#080608]" />
                    </motion.span>
                  </div>
                  
                  {/* Premium shine and light effect */}
                  <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-30 group-hover:animate-shine" />
                  
                  {/* Enhanced light ring on click */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <motion.div
                      className="absolute -inset-[100%] bg-white/5 rounded-full z-0"
                      initial={{ scale: 0, opacity: 0 }}
                      whileTap={{ scale: 4, opacity: 0.5 }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </motion.button>
                
                <motion.button
                  className="group relative px-8 py-4 rounded-lg border border-[#D4AF37]/50 text-[#D4AF37] font-medium text-base overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-[#D4AF37]/5 opacity-0"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10">Grupo do WhatsApp</span>
                  
                  {/* Enhanced glowing border animation */}
                  <motion.div
                    className="absolute inset-0 border border-[#D4AF37]/50 rounded-lg opacity-0 group-hover:opacity-100"
                    animate={{ 
                      boxShadow: ["0 0 0px rgba(212, 175, 55, 0.2)", "0 0 15px rgba(212, 175, 55, 0.4)", "0 0 0px rgba(212, 175, 55, 0.2)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Enhanced corner accents */}
                  {[0, 1, 2, 3].map(i => (
                    <motion.div 
                      key={i}
                      className="absolute w-2 h-2 border-[#D4AF37] opacity-0 group-hover:opacity-100"
                      style={{
                        top: i < 2 ? -1 : 'auto',
                        bottom: i >= 2 ? -1 : 'auto',
                        left: i % 2 === 0 ? -1 : 'auto',
                        right: i % 2 === 1 ? -1 : 'auto',
                        borderTopWidth: i < 2 ? '2px' : 0,
                        borderBottomWidth: i >= 2 ? '2px' : 0,
                        borderLeftWidth: i % 2 === 0 ? '2px' : 0,
                        borderRightWidth: i % 2 === 1 ? '2px' : 0
                      }}
                      initial={{ width: 0, height: 0 }}
                      whileHover={{ width: 8, height: 8 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </motion.button>
              </div>
            </div>
            
            {/* Right column with enhanced 3D floating cards */}
            <div className="lg:col-span-5 lg:col-start-8 relative hidden lg:block">
              <div className="relative h-[500px]">
                {/* Premium atmospheric glow behind cards */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl bg-[#D4AF37]/5 opacity-70"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Enhanced 3D floating cards */}
                <FloatingCard index={0} delay={0.3} mouseX={mouseXSpring} mouseY={mouseYSpring} />
                <FloatingCard index={1} delay={0.5} mouseX={mouseXSpring} mouseY={mouseYSpring} />
                <FloatingCard index={2} delay={0.7} mouseX={mouseXSpring} mouseY={mouseYSpring} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ opacity }}
        whileHover={{ y: 4 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]/90 mb-2 font-medium">
              Explore
            </span>
            <motion.div 
              className="h-10 w-10 rounded-full flex items-center justify-center border border-[#D4AF37]/30 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-[#D4AF37]/10 scale-0 origin-bottom"
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3 }}
              />
              <ChevronDown className="h-5 w-5 text-[#D4AF37] relative z-10" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Enhanced Floating Card with premium styling
const FloatingCard = ({ index, delay, mouseX, mouseY }: { index: number; delay: number; mouseX: import('framer-motion').MotionValue<number>; mouseY: import('framer-motion').MotionValue<number> }) => {
  const x = useTransform(mouseX, (value: number) => value * 15 * (index + 1));
  const y = useTransform(mouseY, (value: number) => value * 15 * (index + 1));

  const cardsData = [
    {
      title: "Acesso Imediato",
      icon: <Calendar className="w-5 h-5 text-[#D4AF37]" />,
      description: "Comece a estudar agora mesmo e não perca tempo!",
      highlight: "100% online"
    },
    {
      title: "Aulas Exclusivas",
      icon: <Clock className="w-5 h-5 text-[#D4AF37]" />,
      description: "Assista às aulas de onde estiver e quando quiser.",
      highlight: "24/7"
    },
    {
      title: "Conteúdo Atualizado",
      icon: <BarChart3 className="w-5 h-5 text-[#D4AF37]" />,
      description: "Material sempre atualizado com as últimas novidades.",
      highlight: "2025"
    },
  ];

  const card = cardsData[index % cardsData.length];

  return (
    <motion.div
      className="absolute w-64 p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10"
      style={{ x, y, top: index === 0 ? '10%' : index === 1 ? '35%' : '60%', left: index === 0 ? '10%' : index === 1 ? '30%' : '50%' }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mr-3">
          {card.icon}
        </div>
        <h3 className="text-lg font-medium text-white">{card.title}</h3>
      </div>
      <p className="text-sm text-white/70">{card.description}</p>
      <div className="mt-4 text-xs text-[#D4AF37] font-medium">{card.highlight}</div>
    </motion.div>
  );
};

// About Section (Quem somos nós)
const AboutSection = () => {
  return (
    <section className="py-24 bg-[#0A090C] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium section label */}
            <div className="flex items-center justify-center mb-3">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] mx-4">Quem somos nós</span>
              <div className="h-[1px] w-8 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
              Referência em <span className="text-[#D4AF37]">aprovações</span> há mais de 15 anos
            </h2>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Não fique mais preocupado pensando na sua aprovação! Para todas as dúvidas, 
              você terá onde encontrar a resposta. Nossa metodologia exclusiva já 
              transformou a vida de mais de 5.000 alunos.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-6 h-6 text-[#D4AF37]" />,
                title: "Email",
                description: "Tire suas dúvidas diretamente com nossos professores",
                cta: "contato@rbcursos.com.br"
              },
              {
                icon: <Phone className="w-6 h-6 text-[#D4AF37]" />,
                title: "WhatsApp",
                description: "Atendimento rápido e personalizado",
                cta: "DDD + WhatsApp"
              },
              {
                icon: <BookOpen className="w-6 h-6 text-[#D4AF37]" />,
                title: "Conteúdos",
                description: "Acesse materiais exclusivos para sua preparação",
                cta: "Acessar agora"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:border-[#D4AF37]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)" }}
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 mb-6">{item.description}</p>
                
                <div className="inline-flex items-center text-[#D4AF37] font-medium">
                  <span>{item.cta}</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

// Mission Correios Section
const MissionCorreiosSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#080608] to-[#0B0A0D] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.div 
                className="max-w-3xl mx-auto text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Premium section label */}
                <div className="flex items-center justify-center mb-3">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                  <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] mx-4">Missão Correios</span>
                  <div className="h-[1px] w-8 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
                  O que você vai aprender na <span className="text-[#D4AF37]">Missão Correios</span>?
                </h2>
                
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Como organizar seus estudos para alcançar resultados consistentes e rápidos.
                  Os erros que os candidatos cometem e como você pode evitá-los.
                  Métodos exclusivos de memorização e revisão para garantir que o conteúdo fique fixo em sua mente até o dia da prova.
                  E, o mais importante, como se destacar entre os concorrentes e garantir sua vaga no concurso dos Correios.
                </p>
              </motion.div>
              
              <div className="space-y-5 mb-10">
                {[
                  "Como organizar seus estudos para alcançar resultados consistentes e rápidos.",
                  "Os erros que os candidatos cometem e como você pode evitá-los.",
                  "Métodos exclusivos de memorização e revisão para garantir que o conteúdo fique fixo em sua mente até o dia da prova.",
                  "E, o mais importante, como se destacar entre os concorrentes e garantir sua vaga no concurso dos Correios."
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 mt-0.5 mr-4">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                    <p className="text-white/80">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-5 rounded-xl bg-[#D4AF37]/5 border border-[#D4AF37]/10">
                <p className="text-white/80 mb-4">
                  Clique no botão abaixo para entrar no grupo do WhatsApp e obter a melhor oferta.
                  Assim que você se inscrever, será redirecionado para à página de acesso ao grupo.
                </p>
                
                <motion.button
                  className="group relative w-full py-4 rounded-lg overflow-hidden"
                  whileHover={{ boxShadow: "0 8px 25px -5px rgba(212, 175, 55, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto]" />
                  
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="text-[#080608] font-medium">Quero ter acesso</span>
                    <motion.span
                      className="flex items-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowRight className="h-5 w-5 text-[#080608]" />
                    </motion.span>
                  </div>
                  
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto]"
                    animate={{
                      backgroundPosition: ['0% center', '100% center']
                    }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
                  />
                  
                  <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:animate-shine" />
                </motion.button>
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#D4AF37] to-[#F9E077] opacity-30 blur-xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
              />
              
              <div className="relative bg-gradient-to-b from-white/10 to-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden">
                <div className="flex justify-end mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Desperte seu <span className="text-[#D4AF37]">potencial</span> máximo
                </h3>
                
                <p className="text-white/80 mb-6">
                  Nossa metodologia exclusiva para concursos já transformou a vida de mais de 5.000 alunos. 
                  Estamos prontos para ajudar você a alcançar sua aprovação.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-1">98%</h4>
                    <p className="text-xs text-white/60 uppercase tracking-wider">Taxa de aprovação</p>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <h4 className="text-xl font-semibold text-white mb-1">15+</h4>
                    <p className="text-xs text-white/60 uppercase tracking-wider">Anos de experiência</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-24 -right-20 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-20 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02] pointer-events-none" />
    </section>
  );
};

// Courses Section with enhanced visual design
const CoursesSection = () => {
  return (
    <section className="py-24 bg-[#0B0A0D] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <motion.div 
                className="max-w-3xl mx-auto text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Premium section label */}
                <div className="flex items-center justify-center mb-3">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                  <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] mx-4">Nossos Cursos</span>
                  <div className="h-[1px] w-8 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5">
                  Soluções completas de <span className="text-[#D4AF37]">preparação</span>
                </h2>
                
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Cursos desenvolvidos por especialistas para maximizar suas chances de sucesso em concursos.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-6 md:mt-0">
              <motion.button
                className="group flex items-center text-[#D4AF37] font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Ver todos os cursos
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Curso Completo",
                subtitle: "Correios 2025",
                description: "Preparação intensiva e completa para a prova dos Correios",
                features: ["170+ horas de aulas", "Provas comentadas", "Simulados exclusivos"],
                isPopular: true
              },
              {
                title: "Módulo Específico",
                subtitle: "Português e Redação",
                description: "Domine a língua portuguesa e garanta pontos na redação",
                features: ["75 horas de aulas", "Correção de redações", "Material PDF"],
                isPopular: false
              },
              {
                title: "Pacote Premium",
                subtitle: "Resolução de Questões",
                description: "Treine com milhares de questões comentadas por professores",
                features: ["5.000+ questões", "Análise estatística", "Simulados personalizados"],
                isPopular: false
              }
            ].map((course, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl bg-gradient-to-b ${course.isPopular ? 'from-[#D4AF37]/20' : 'from-white/10'} to-transparent backdrop-blur-sm border ${course.isPopular ? 'border-[#D4AF37]/30' : 'border-white/10'} overflow-hidden group relative`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.6)" }}
              >
                {course.isPopular && (
                  <div className="absolute top-5 right-5">
                    <div className="px-3 py-1 bg-[#D4AF37] rounded-full">
                      <span className="text-xs font-medium text-black">Mais popular</span>
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-lg font-medium text-white/80 mb-1">{course.title}</h3>
                  <h4 className="text-2xl font-bold text-white mb-4">{course.subtitle}</h4>
                  
                  <p className="text-white/70 mb-6">{course.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {course.features.map((feature, j) => (
                      <div key={j} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full ${course.isPopular ? 'bg-[#D4AF37]/20' : 'bg-white/10'} flex items-center justify-center mr-3`}>
                          <CheckCircle2 className={`w-3 h-3 ${course.isPopular ? 'text-[#D4AF37]' : 'text-white'}`} />
                        </div>
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    className={`w-full py-3 px-6 rounded-lg ${course.isPopular ? 'bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608]' : 'bg-white/10 text-white'} font-medium transition-all flex items-center justify-center gap-2 group-hover:shadow-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saiba mais
                    <ArrowRight className={`w-4 h-4 ${course.isPopular ? 'text-[#080608]' : 'text-white'} transition-transform group-hover:translate-x-1`} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-[#D4AF37]/5 blur-[80px] pointer-events-none" />
    </section>
  );
};

// Methodology Section with visual enhancements
const MethodologySection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#080608] to-[#0F0D0F] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-20 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#D4AF37]/3 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Premium section label */}
                <div className="flex items-center mb-3">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
                  <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] mx-4">Nossa Metodologia</span>
                  <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                </div>
                
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
                  Metodologia <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E077]">exclusiva</span> baseada em neurociência
                </h2>
                
                <p className="text-xl text-white/70 max-w-2xl">
                  Desenvolvemos um método inovador que otimiza seu tempo de estudo e maximiza a retenção de conteúdo, 
                  garantindo resultados extraordinários em concursos de alta competitividade.
                </p>
              </motion.div>
              
              <div className="space-y-8 mb-12">
                {[
                  {
                    title: "Estudo Direcionado",
                    description: "Conteúdo focado nas disciplinas e temas mais cobrados nas provas",
                    icon: "Target"
                  },
                  {
                    title: "Técnicas de Memorização",
                    description: "Métodos científicos para fixação eficiente do conteúdo",
                    icon: "Brain"
                  },
                  {
                    title: "Aplicação Prática",
                    description: "Treinamento intensivo com questões no mesmo estilo das provas",
                    icon: "CheckCircle"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mr-6 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                      <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E077]">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">{item.title}</h3>
                      <p className="text-white/70 group-hover:text-white/80 transition-colors duration-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                className="group relative px-8 py-4 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500" />
                
                <div className="relative flex items-center gap-3">
                  <span className="text-[#080608] font-medium">Conhecer metodologia</span>
                  <ArrowRight className="h-5 w-5 text-[#080608] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                
                <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:animate-shine" />
              </motion.button>
            </div>
            
            <div>
              <div className="relative">
                <motion.div
                  className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-[#D4AF37]/50 to-[#F9E077]/50 opacity-20 blur-xl"
                  animate={{ 
                    opacity: [0.15, 0.25, 0.15],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror' }}
                />
                
                <div className="relative bg-gradient-to-b from-white/10 to-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-10 overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2" />
                  
                  <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F9E077] flex items-center justify-center mr-4">
                      <Trophy className="h-5 w-5 text-[#080608]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Resultados comprovados</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      { label: "Taxa de aprovação", value: "98%" },
                      { label: "Retenção de conteúdo", value: "93%" },
                      { label: "Satisfação dos alunos", value: "99%" }
                    ].map((stat, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-2">
                          <span className="text-white/80">{stat.label}</span>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E077] font-semibold">{stat.value}</span>
                        </div>
                        <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F9E077]"
                            initial={{ width: "0%" }}
                            whileInView={{ width: stat.value }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2 + (i * 0.1) }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-start">
                      <div className="text-5xl text-[#D4AF37] font-bold mr-3">"</div>
                      <div>
                        <p className="text-white/80 italic mb-4">A metodologia do RB Cursos transformou completamente minha forma de estudar. Fui aprovada em apenas 3 meses de preparação!</p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#F9E077]/20 flex items-center justify-center mr-3">
                            <User className="h-5 w-5 text-[#D4AF37]" />
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">Maria Silva</p>
                            <p className="text-white/60 text-xs">Aprovada em 2023</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </section>
  );
};

// Don't forget to import these icons

// Professors Section with premium styling

const ProfessorsSection = () => {
  const professors = [
    {
      name: "Profª Paula Barreto",
      role: "Língua Portuguesa e Redação",
      image: paula,
      specialization: "Doutora em Linguística Aplicada",
      approvalRate: "97%"
    },
    {
      name: "Profº Yan Ribeiro",
      role: "Matemática",
      image: yan,
      specialization: "Mestre em Matemática Aplicada",
      approvalRate: "95%"
    },
    {
      name: "Profº Nicássio Couto",
      role: "Informática",
      image: Nicassio,
      specialization: "Especialista em Segurança de Dados",
      approvalRate: "98%"
    },
    {
      name: "Profª Jessica Fontes",
      role: "Geografia",
      image: jessica,
      specialization: "Mestre em Geografia Humana",
      approvalRate: "96%"
    },
    {
      name: "Profº Valbert Laert",
      role: "Adm. Legislação",
      image: Valbert,
      specialization: "Especialista em Direito Administrativo",
      approvalRate: "94%"
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0A090C] to-[#12101A] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-[80px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/2 left-3/4 w-64 h-64 rounded-full bg-[#8A2BE2]/5 blur-[80px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] bg-repeat opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Elegant section label with animated gradient */}
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <div className="relative px-6">
                <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] relative z-10">Professores Especialistas</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 blur-sm"></div>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mt-6 mb-8 leading-tight">
              Conheça os <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent">especialistas</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] rounded-full opacity-50"></span>
              </span> em aprovações
            </h2>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Nossa equipe é formada por professores com histórico comprovado de excelência,
              especializados em suas respectivas áreas e com metodologias exclusivas para 
              maximizar suas chances de aprovação.
            </p>
            
            <motion.div 
              className="flex items-center justify-center mt-10 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.button
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#080608] font-medium flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                Conhecer metodologia
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.button
                className="px-8 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white font-medium flex items-center gap-2 group"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <Play className="w-3 h-3 text-[#080608] ml-0.5" />
                </div>
                Ver depoimentos
              </motion.button>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {professors.map((professor, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-2xl transform rotate-1 scale-[0.97] blur-sm group-hover:rotate-2 group-hover:scale-[0.98] transition-all duration-300"></div>
                
                <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden relative z-10 h-full">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={professor.image} 
                      alt={professor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A090C] to-transparent opacity-90"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[#D4AF37] text-sm font-medium mb-1">{professor.role}</p>
                          <h3 className="text-xl font-bold text-white">{professor.name}</h3>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-white/60 text-xs mb-1">Taxa de aprovação</p>
                          <p className="text-[#D4AF37] font-bold text-lg">{professor.approvalRate}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-4">
                    <p className="text-white/70 text-sm mb-4">{professor.specialization}</p>
                    
                    <div className="flex items-center justify-between">
                      
                      
                    
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* "Ver todos" button */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium flex items-center gap-2 group hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver todos os professores
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "A metodologia focada em resolução de questões foi fundamental para minha aprovação. O direcionamento dos professores fez toda a diferença!",
      name: "Henrique Landim",
      role: "Aprovado em 1º lugar",
      image: Henrique// Placeholder para imagem real da aluna
    },
    {
      content: "Estudei apenas 4 meses com o método RB e consegui minha aprovação. Os materiais são excelentes e os professores realmente se importam com os alunos.",
      name: "Anna Alves",
      role: "Aprovada em 2023",
      image: Anna // Placeholder para imagem real da aluna
    },
    {
      content: "Já tinha tentado outros cursos antes, mas só depois que conheci o RB consegui finalmente ser aprovada. A abordagem é completamente diferente!",
      name: "Andreia Torres",
      role: "Aprovada em 2024",
      image: Andreia// Placeholder para imagem real da aluna
    }
  ];

  return (
    <section className="py-24 bg-[#080608] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-40 left-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#D4AF37]/3 blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-40 w-20 h-20 rounded-full bg-[#D4AF37]/10 blur-[20px] animate-pulse pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Premium section label with enhanced styling */}
            <div className="flex items-center justify-center mb-3">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] mx-4 relative">
                Depoimentos
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></span>
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 tracking-tight">
              O que os alunos <span className="text-[#D4AF37] relative inline-block">
                dizem
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></span>
              </span> sobre nós?
            </h2>
            
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Conheça histórias de alunos que transformaram suas vidas através da nossa metodologia exclusiva.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8 group hover:border-[#D4AF37]/30 transition-all relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5)",
                  scale: 1.02
                }}
              >
                {/* Subtle glow effect on hover */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex mb-8">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + j * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-[#D4AF37]" fill="#D4AF37" />
                    </motion.div>
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-[#D4AF37]/20 mb-4" />
                <p className="text-white/80 mb-8 italic leading-relaxed relative z-10">{testimonial.content}</p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-[#D4AF37]/30 relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{testimonial.name}</h3>
                    <p className="text-[#D4AF37]/80 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 text-5xl leading-none text-[#D4AF37]/10 font-bold">"</div>
              </motion.div>
            ))}
          </div>
          
          {/* CTA Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#matricula" 
              className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#F5CC4D] px-8 py-4 rounded-full text-black font-bold tracking-wide hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-1"
            >
              Quero transformar minha vida também
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

