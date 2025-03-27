import React, { useRef, useEffect, useState, Suspense } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence, MotionValue } from 'framer-motion';
import { ArrowRight, ChevronDown, ArrowUpRight, Calendar, Clock, CheckCircle2, BarChart3, BookOpen, Star, Mail, Phone, Trophy, Users, Sparkles, ShieldCheck, Instagram, Play, Quote, User } from 'lucide-react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

import { StudyMaterialsSection } from '../components/sections/StudyMaterialsSection';
import { NewsSection } from '../components/sections/NewsSection';

import { CTASection } from '../components/sections/CTASection';
import yan from '../images/Yan.jpg';
import paula from '../images/prof-paula.jpeg';
import Valbert from '../images/Valbert.png';
import jessica from '../images/Jéssica.jpg';
import Nicassio from '../images/Nicássio.jpg';
import Henrique from '../images/Henrique-Landim-Perfil.png';
import Anna from '../images/Anna-Alves-Perfil.png';
import Andreia from '../images/Andreia-Torres-Perfil.png';

// Main Home component with optimized structure
const HomePage = () => {
  return (
    <div className="bg-[#08070A] overflow-hidden">
      <UltraHero />
      <StatsHighlightBanner />
      <AboutSection />
      <MethodologySection />
      <ProfessorsSection />
      <TestimonialsSection />
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
          className="bg-gradient-to-r from-[#13121A] to-[#0F0E13] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2 }}
        >
          {/* Enhanced background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Patterned background */}
            <div className="absolute inset-0 opacity-[0.03]">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="h-px my-6 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                />
              ))}
            </div>

            {/* Subtle animated gradients */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-30"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: '200% 200%' }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "98%", label: "Taxa de Aprovação", icon: <Trophy className="w-5 h-5" /> },
              { value: "5.000+", label: "Alunos Aprovados", icon: <Users className="w-5 h-5" /> },
              { value: "15+", label: "Anos de Experiência", icon: <Star className="w-5 h-5" /> },
              { value: "#1", label: "Em Aprovações", icon: <ShieldCheck className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 md:p-8 text-center relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 + (i * 0.1) }}
                whileHover={{
                  backgroundColor: "rgba(212,175,55,0.03)",
                  transition: { duration: 0.2 }
                }}
              >
                {/* Enhanced background icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0.05 }}
                  whileHover={{
                    opacity: 0.12,
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {stat.icon && React.cloneElement(stat.icon, { className: "w-28 h-28 text-[#D4AF37]" })}
                </motion.div>

                {/* Content with enhanced animations */}
                <div className="relative z-10">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold relative inline-block"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <motion.div
                      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#D4AF37]/10 to-transparent blur-md opacity-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                    />
                    <span className="bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent"
                      style={{ backgroundSize: '200% 100%' }}
                    >
                      {stat.value}
                    </span>
                  </motion.div>

                  <div className="text-xs uppercase tracking-wider text-white/60 font-medium mt-2">
                    {stat.label}
                  </div>

                  {/* Animated underline on hover */}
                  <motion.div
                    className="h-px w-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2"
                    initial={{ width: 0 }}
                    whileHover={{ width: '50%' }}
                    transition={{ duration: 0.3 }}
                  />
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
export const UltraHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [loaded, setLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 40, damping: 15 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 40, damping: 15 });

  // Enhanced cursor tracking for 3D effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    if (headingRef.current) {
      // Ultra premium text animation
      const titleText = new SplitType(headingRef.current, { types: 'chars,words' });

      gsap.fromTo(
        titleText.chars,
        { 
          y: 100, 
          opacity: 0, 
          rotateX: -90,
          transformOrigin: "center bottom"
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.03,
          duration: 1.2,
          delay: 0.3,
          ease: 'power4.out'
        }
      );

      // Create stunning light beam effect
      const container = containerRef.current;
      if (container) {
        // Create light beams
        for (let i = 0; i < 5; i++) {
          const beam = document.createElement('div');
          beam.className = 'absolute h-screen w-40 origin-bottom';
          beam.style.left = `${Math.random() * 100}%`;
          beam.style.transform = `rotate(${-10 + Math.random() * 20}deg)`;
          beam.style.background = `linear-gradient(to top, 
            rgba(212,175,55,${Math.random() * 0.15 + 0.05}) 0%, 
            rgba(249,224,119,${Math.random() * 0.1}) 50%,
            transparent 100%)`;
          beam.style.filter = 'blur(8px)';
          beam.style.opacity = '0';
          
          container.appendChild(beam);
          
          gsap.to(beam, {
            opacity: Math.random() * 0.3 + 0.1,
            duration: 2,
            delay: i * 0.4,
            yoyo: true,
            repeat: -1,
            repeatDelay: Math.random() * 5
          });
        }
      }
    }

    setLoaded(true);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{
        background: "radial-gradient(circle at 20% bottom, #131219 0%, #08060a 70%)",
        perspective: 2000
      }}
    >
      {/* Premium volumetric atmosphere */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.6 }}
          animate={{ 
            opacity: [0.6, 0.75, 0.6],
            background: [
              'radial-gradient(circle at 30% 70%, rgba(8,6,8,0.8), rgba(8,6,8,1) 70%)',
              'radial-gradient(circle at 70% 30%, rgba(8,6,8,0.8), rgba(8,6,8,1) 70%)',
              'radial-gradient(circle at 30% 70%, rgba(8,6,8,0.8), rgba(8,6,8,1) 70%)'
            ]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Ultra-premium particles with depth and glow */}
        <div className="absolute inset-0">
          {[...Array(120)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const depth = Math.random();
            const isGold = Math.random() > 0.85;
            
            return (
              <motion.div
                key={`star-${i}`}
                className="absolute rounded-full"
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  background: isGold ? '#D4AF37' : '#FFFFFF',
                  boxShadow: `0 0 ${size * 2}px ${isGold ? '#D4AF37' : 'rgba(255,255,255,0.8)'}`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: depth * 0.7,
                  zIndex: Math.floor(depth * 10)
                }}
                animate={{
                  y: [0, -30 - Math.random() * 70],
                  x: [0, (Math.random() - 0.5) * 30],
                  opacity: [0, depth * 0.7, 0],
                  scale: [0.3, 1, 0.3],
                  filter: [
                    'blur(0px)',
                    `blur(${Math.random() > 0.7 ? '1px' : '0px'})`,
                    'blur(0px)'
                  ]
                }}
                transition={{
                  duration: 10 + Math.random() * 25,
                  repeat: Infinity,
                  delay: Math.random() * 20
                }}
              />
            );
          })}
        </div>

        {/* Cinematic dust particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white/30"
            style={{
              width: 1 + Math.random() * 2 + 'px',
              height: 1 + Math.random() * 2 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(0.5px)'
            }}
            animate={{
              y: [0, -200 - Math.random() * 300],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.3 + Math.random() * 0.4, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Advanced Content Container with Depth */}
      <div className="relative z-30 flex items-center justify-center min-h-screen">
        <motion.div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
            {/* Left Column */}
            <div className="lg:col-span-7 lg:col-start-1 py-12">
              {/* Premium Brand Badge */}
              <motion.div
                className="mb-8 fade-in-sequence relative inline-block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <motion.div
                  className="absolute -inset-2.5 rounded-full blur-xl"
                  style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.8) 0%, transparent 80%)"
                  }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative inline-flex items-center px-5 py-1.5 rounded-full bg-black/30 backdrop-blur-xl border border-[#D4AF37]/40 overflow-hidden group">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/30 to-transparent"
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
                        '0 0 0 5px rgba(212,175,55,0.5)',
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

              {/* Ultra-Premium Headline with Cinematic Animation */}
              <div className="mb-12">
                <h1
                  ref={headingRef}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                  style={{ lineHeight: 1.1, perspective: "1500px" }}
                >
                  <span className="block mb-6 text-white">Excelência em</span>
                  <span className="block mb-6 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:300%_auto] animate-shimmer bg-clip-text text-transparent">
                    aprovações
                  </span>
                  <span className="block text-white">para concursos</span>
                </h1>

                <motion.div
                  className="max-w-2xl relative mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  <motion.span
                    className="absolute -left-5 top-0 w-[2px] h-full"
                    style={{
                      background: "linear-gradient(to bottom, transparent, #D4AF37, transparent)"
                    }}
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      height: ["40%", "100%", "40%"],
                      top: ["30%", "0%", "30%"]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <p className="text-xl leading-relaxed text-white/80 relative pl-2 fade-in-sequence">
                    <span className="font-medium">Garanta sua aprovação</span> com nossa metodologia 
                    exclusiva e professores especialistas em cada área. Conquiste 
                    sua <span className="text-[#D4AF37] font-medium">estabilidade financeira</span> 
                    e transforme sua vida agora.
                  </p>
                </motion.div>

                {/* Cinematic CTA Buttons */}
                <motion.div 
                  className="mt-12 flex flex-wrap gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  <motion.button
                    className="relative overflow-hidden px-8 py-4 rounded-lg group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto]" />
                    
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      animate={{
                        backgroundPosition: ['0% center', '100% center']
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                      style={{
                        backgroundSize: '200% 100%',
                        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)'
                      }}
                    />
                    
                    <div className="relative flex items-center gap-3">
                      <span className="text-[#080608] font-medium">Começar agora</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <ArrowRight className="h-5 w-5 text-[#080608]" />
                      </motion.div>
                    </div>
                    
                    <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-30 group-hover:animate-shine" />
                  </motion.button>
                  
                  <motion.button
                    className="px-8 py-4 rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white font-medium flex items-center gap-3 group overflow-hidden relative"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "rgba(212,175,55,0.1)",
                      borderColor: "rgba(212,175,55,0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Conhecer metodologia</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowRight className="h-5 w-5 text-[#D4AF37]" />
                    </motion.span>

                    <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-30 group-hover:animate-shine" />
                  </motion.button>
                </motion.div>
              </div>
            </div>

            {/* Right column with 3D floating elements */}
            {/* Add your 3D floating cards here or enhance them further */}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.span
          className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-medium"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Explore
        </motion.span>
        <motion.div
          className="flex flex-col items-center"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-6 bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37] to-[#D4AF37]/0 mb-2"></div>
          <div className="h-10 w-10 rounded-full flex items-center justify-center border border-[#D4AF37]/30">
            <ChevronDown className="h-4 w-4 text-[#D4AF37]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Add CSS for shine animation */}
      <style>{`
        @keyframes shine {
          from {
            transform: translateX(-100%) skewX(-15deg);
          }
          to {
            transform: translateX(150%) skewX(-15deg);
          }
        }
        .group:hover .group-hover\\:animate-shine {
          animation: shine 2s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
    </motion.section>
  );
};

// Enhanced floating card component with premium 3D effects
interface EnhancedFloatingCardProps {
  index: number;
  delay: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const EnhancedFloatingCard: React.FC<EnhancedFloatingCardProps> = ({ index, delay, mouseX, mouseY }) => {
  const x = useTransform(mouseX, (value: number) => value * 20 * (index + 1));
  const y = useTransform(mouseY, (value: number) => value * 20 * (index + 1));
  const rotateX = useTransform(mouseY, (value: number) => value * -5);
  const rotateY = useTransform(mouseX, (value: number) => value * 5);

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
      className="absolute w-72 rounded-2xl overflow-hidden"
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformPerspective: 1000,
        top: index === 0 ? '5%' : index === 1 ? '35%' : '65%',
        left: index === 0 ? '5%' : index === 1 ? '25%' : '45%',
        zIndex: 30 - index
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#D4AF37]/30 to-[#F9E077]/20 blur-sm"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.98, 1.01, 0.98],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Card inner content with glass effect */}
      <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>

        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mr-3 shadow-inner">
              {card.icon}
            </div>
            <h3 className="text-lg font-medium text-white">{card.title}</h3>
          </div>

          <p className="text-white/70 text-sm mb-4">{card.description}</p>

          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
              {card.highlight}
            </div>

            <motion.div
              className="w-6 h-6 rounded-full bg-white/5 border border-white/20 flex items-center justify-center"
              whileHover={{ scale: 1.2, backgroundColor: "rgba(212,175,55,0.1)" }}
            >
              <ArrowRight className="w-3 h-3 text-white/70" />
            </motion.div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-xl"></div>
      </div>
    </motion.div>
  );
};

// About Section (Quem somos nós)
const AboutSection = () => {
  return (
    <section className="py-32 bg-[#0A090C] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[25rem] h-[25rem] bg-[#D4AF37]/3 rounded-full blur-[120px] pointer-events-none"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>

        {/* Enhanced light beams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              className="absolute w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent blur-[3px]"
              style={{
                top: `${30 + i * 20}%`,
                left: '-25%',
                transform: `rotate(${-2 + i * 2}deg)`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                left: ['-25%', '100%'],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                delay: i * 7,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced premium section label with animation */}
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <div className="relative px-4">
                <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.25em]">Quem somos nós</span>
                <motion.div
                  className="absolute -bottom-1 left-4 right-4 h-[1px] bg-[#D4AF37]/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
              <motion.div
                className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Referência em <span className="text-[#D4AF37] relative inline-block">
                aprovações
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </span> há mais de 15 anos
            </motion.h2>

            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Não fique mais preocupado pensando na sua aprovação! Para todas as dúvidas,
              você terá onde encontrar a resposta. Nossa metodologia exclusiva já
              transformou a vida de mais de <span className="text-white font-medium">5.000 alunos</span>.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-6 h-6 text-[#D4AF37]" />,
                title: "Email",
                description: "Tire suas dúvidas diretamente com nossos professores especialistas",
                cta: "ribeiroebarretocursos@gmail.com"
              },
              {
                icon: <Phone className="w-6 h-6 text-[#D4AF37]" />,
                title: "WhatsApp",
                description: "Atendimento rápido e personalizado para seu sucesso",
                cta: "(77) 7400-9165"
              },
              {
                icon: <BookOpen className="w-6 h-6 text-[#D4AF37]" />,
                title: "Conteúdos",
                description: "Acesse materiais exclusivos desenvolvidos para sua aprovação",
                cta: "Acessar agora"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
              >
                {/* Enhanced card with glowing effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/5 to-[#D4AF37]/20 rounded-2xl opacity-0 blur-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 0.5, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 1 }}
                  whileHover={{
                    opacity: 0.8,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />

                <div className="bg-gradient-to-b from-white/8 to-white/4 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative h-full">
                  {/* Subtle corner ambient accents */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-xl transform translate-x-1/4 -translate-y-1/4 opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#D4AF37]/5 rounded-full blur-lg transform -translate-x-1/3 translate-y-1/3"></div>

                  {/* Enhanced icon container */}
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-6 relative"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 border border-[#D4AF37]/40"
                      initial={{ opacity: 0 }}
                      whileHover={{
                        opacity: 1,
                        boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)"
                      }}
                    />
                    {item.icon}
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 mb-8">{item.description}</p>

                  <div className="inline-flex items-center text-[#D4AF37] font-medium group">
                    <span className="group-hover:mr-1 transition-all">{item.cta}</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
                    >
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced decorative elements */}
          <motion.div
            className="absolute -right-16 top-1/4 w-40 h-40 border border-[#D4AF37]/20 rounded-full opacity-20"
            animate={{
              rotate: 360,
              scale: [1, 1.03, 1]
            }}
            transition={{
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute -left-24 bottom-1/3 w-56 h-56 border border-[#D4AF37]/10 rounded-full opacity-10"
            animate={{
              rotate: -360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 50, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>
      </div>
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



// Methodology Section with visual enhancements
const MethodologySection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#080608] to-[#0F0D0F] relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        {/* Dynamic gradient orbs */}
        <motion.div
          className="absolute top-20 left-20 w-[40rem] h-[40rem] rounded-full bg-[#D4AF37]/5 blur-[150px] pointer-events-none"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[35rem] h-[35rem] rounded-full bg-[#D4AF37]/3 blur-[120px] pointer-events-none"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Enhanced section label with animated underline */}
                <div className="flex items-center mb-5">
                  <motion.div
                    className="h-[1px] w-0 bg-gradient-to-r from-transparent to-[#D4AF37]"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="px-4 relative">
                    <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em]">Nossa Metodologia</span>
                    <motion.div
                      className="absolute -bottom-1 left-4 right-4 h-px bg-[#D4AF37]/30"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>
                  <motion.div
                    className="h-[1px] w-0 bg-gradient-to-r from-[#D4AF37] to-transparent"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                <motion.h2 
  className="relative text-5xl md:text-6xl lg:text-7xl font-bold leading-tight perspective-[1000px] overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="relative inline-block">
    {/* 3D text highlight effect */}
    <motion.div
      className="absolute -inset-2 -skew-x-12 bg-gradient-to-r from-[#D4AF37]/20 to-[#F9E077]/5 blur-xl -z-10 rounded-2xl"
      animate={{ 
        opacity: [0.5, 0.8, 0.5],
        scale: [0.95, 1.05, 0.95]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    
    <span className="text-white">Alcance sua</span>
    
    <div className="relative inline-block ml-4">
      <motion.span 
        className="bg-gradient-to-br from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent block"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundSize: '200% 200%' }}
      >
        aprovação
      </motion.span>
      
      {/* Premium underline with animated particles */}
      <div className="absolute bottom-0 left-0 w-full h-2 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F9E077]"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
        
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute bottom-0 w-1 h-1 rounded-full bg-white"
            style={{ left: `${i * 12.5}%` }}
            animate={{
              y: [0, -12, 0],
              opacity: [0, 1, 0],
              scale: [0.2, 1.5, 0.2]
            }}
            transition={{
              duration: 2,
              delay: 1 + (i * 0.1),
              repeat: Infinity,
              repeatDelay: 5
            }}
          />
        ))}
      </div>
      
      {/* Cinematic 3D shadow effect */}
      <motion.div
        className="absolute -bottom-10 inset-x-0 h-12 bg-gradient-to-b from-[#D4AF37]/25 to-transparent blur-lg -z-10"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  </div>
</motion.h2>
                <motion.p
                  className="text-xl text-white/70 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Desenvolvemos um método inovador que otimiza seu tempo de estudo e maximiza a retenção de conteúdo,
                  garantindo resultados extraordinários em concursos de alta competitividade.
                </motion.p>
              </motion.div>

              <div className="space-y-12 mb-12">
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
                    className="flex group relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.7 }}
                  >
                    {/* Enhanced icon container with layered effects */}
                    <div className="relative">
                      <motion.div
                        className="absolute -inset-3 rounded-2xl bg-[#D4AF37]/10 blur-xl opacity-0 group-hover:opacity-70"
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/30 via-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0 mr-6 relative z-10 shadow-inner"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 20px 5px rgba(212, 175, 55, 0.15)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F9E077] bg-clip-text text-transparent relative z-10">
                          {i + 1}
                        </span>
                      </motion.div>
                    </div>

                    <div>
                      <motion.h3
                        className="text-2xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        className="text-white/70 text-lg group-hover:text-white/90 transition-colors duration-300"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                      >
                        {item.description}
                      </motion.p>

                      {/* Animated line */}
                      <motion.div
                        className="h-[1px] w-0 bg-gradient-to-r from-[#D4AF37]/50 to-transparent mt-4"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="group relative px-8 py-4 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {/* Multi-layered background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500" />
                <div className="absolute inset-0 opacity-20" style={{ backgroundSize: "12px 12px", backgroundImage: "radial-gradient(#fff 1px, transparent 1px)" }} />

                <div className="relative flex items-center gap-3">
                  <span className="text-[#080608] font-medium">Conhecer metodologia</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <ArrowRight className="h-5 w-5 text-[#080608]" />
                  </motion.div>
                </div>

                {/* Enhanced shine effect */}
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:animate-shine" />
              </motion.button>
            </div>

            <div>
              <div className="relative">
                {/* Ultra-premium glowing aura with dynamic animation */}
                <motion.div
                  className="absolute -inset-12 rounded-[40px] bg-gradient-to-r from-[#D4AF37]/40 via-[#F9E077]/30 to-[#D4AF37]/40 opacity-0 blur-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  animate={{
                    opacity: [0.15, 0.3, 0.15],
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, 0],
                    background: [
                      "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.4), rgba(249,224,119,0.3), rgba(212,175,55,0.4))",
                      "radial-gradient(circle at 70% 70%, rgba(212,175,55,0.4), rgba(249,224,119,0.3), rgba(212,175,55,0.4))",
                      "radial-gradient(circle at 30% 30%, rgba(212,175,55,0.4), rgba(249,224,119,0.3), rgba(212,175,55,0.4))",
                    ]
                  }}

                />

                {/* Premium layered card effect with 3D depth */}
                <motion.div
                  className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#D4AF37]/40 to-[#D4AF37]/5 opacity-0 blur-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                />

                <motion.div
                  className="relative bg-gradient-to-b from-white/10 to-black/30 backdrop-blur-lg border border-white/15 rounded-2xl overflow-hidden shadow-[0_20px_80px_-15px_rgba(0,0,0,0.7)] transform-gpu"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{
                    boxShadow: "0 30px 80px -15px rgba(0,0,0,0.8), 0 0 30px rgba(212,175,55,0.3)",
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.4, type: "spring", stiffness: 300 }
                  }}
                >
                  {/* Advanced 3D lighting environment effects */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Volumetric lighting effect */}
                    <motion.div
                      className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-[90px] transform translate-x-1/2 -translate-y-1/2 mix-blend-screen"
                      animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.1, 1],
                        x: ["50%", "52%", "50%"],
                        y: ["-50%", "-48%", "-50%"]
                      }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.div
                      className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent rounded-full blur-[70px] transform -translate-x-1/2 translate-y-1/2 mix-blend-screen"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.15, 1],
                        x: ["-50%", "-48%", "-50%"],
                        y: ["50%", "48%", "50%"]
                      }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Cinematic ray effects */}
                    <div className="absolute inset-0">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={`ray-${i}`}
                          className="absolute h-full w-[100px] bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent blur-md"
                          style={{
                            left: `${25 + i * 20}%`,
                            transform: `rotate(${-15 + i * 10}deg) scaleX(${0.5 + i * 0.3})`,
                            opacity: 0,
                            transformOrigin: 'center bottom'
                          }}
                          animate={{
                            opacity: [0, 0.3, 0],
                            x: ['-20px', '20px', '-20px']
                          }}
                          transition={{
                            duration: 8 + i * 4,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>

                    {/* Enhanced depth grid pattern with parallax effect */}
                    <div className="absolute inset-0 opacity-[0.03]">
                      <motion.div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `
              linear-gradient(to right, rgba(212,175,55,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(212,175,55,0.1) 1px, transparent 1px)
            `,
                          backgroundSize: '20px 20px'
                        }}
                        animate={{
                          backgroundPosition: ['0px 0px', '20px 20px'],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    {/* Dynamic 3D ambient particles with depth */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={`particle-${i}`}
                          className="absolute rounded-full bg-[#D4AF37]"
                          style={{
                            width: 2 + Math.random() * 3 + 'px',
                            height: 2 + Math.random() * 3 + 'px',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            filter: `blur(${Math.random() > 0.5 ? '1px' : '0px'})`,
                            opacity: 0.1 + Math.random() * 0.4
                          }}
                          animate={{
                            y: [0, -40 - Math.random() * 80],
                            opacity: [0, 0.3 + Math.random() * 0.5, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 5 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 10
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Main content with premium 3D-like interactions */}
                  <div className="relative z-10 p-10">
                    <motion.div
                      className="flex items-center mb-10"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      {/* Ultra-premium 3D icon with layered effects */}
                      <div className="relative mr-5">
                        <motion.div
                          className="absolute -inset-2.5 bg-gradient-to-r from-[#D4AF37]/60 to-[#F9E077]/60 rounded-xl blur-md opacity-0"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 0.6 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.6 }}
                          animate={{
                            opacity: [0.4, 0.7, 0.4],
                            scale: [0.95, 1.05, 0.95]
                          }}
                        />

                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center shadow-xl relative z-10">
                          <div className="absolute inset-0.5 rounded-[10px] bg-gradient-to-br from-[#F9E077]/90 to-[#D4AF37]/90 opacity-90" />
                          <Trophy className="h-7 w-7 text-[#080608] drop-shadow-md relative z-10" />

                          {/* Light reflection effect */}
                          <motion.div
                            className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0"
                            animate={{
                              opacity: [0, 0.6, 0],
                              rotate: [0, 10, 0],
                              scale: [0.9, 1.1, 0.9]
                            }}
                            transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2 }}
                          />
                        </div>

                        {/* Dynamic 3D shadow */}
                        <motion.div
                          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-2 bg-black/20 rounded-full blur-md"
                          animate={{
                            width: ['60%', '90%', '60%'],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ duration: 3.5, repeat: Infinity }}
                        />
                      </div>

                      {/* Premium heading with animated text reveal */}
                      <div className="overflow-hidden">
                        <motion.h3
                          className="text-3xl font-bold text-white"
                          initial={{ y: 40 }}
                          whileInView={{ y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                        >
                          Resultados comprovados
                          <motion.span
                            className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37]/80 to-transparent"
                            initial={{ scaleX: 0, transformOrigin: "left" }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 1.2 }}
                          />
                        </motion.h3>
                      </div>
                    </motion.div>

                    <div className="space-y-8">
                      {[
                        { label: "Taxa de aprovação", value: "98%" },
                        { label: "Retenção de conteúdo", value: "93%" },
                        { label: "Satisfação dos alunos", value: "99%" }
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (i * 0.15), duration: 0.6 }}
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2, type: "spring", stiffness: 300 }
                          }}
                        >
                          <div className="flex justify-between mb-3">
                            <motion.span
                              className="text-white/80 font-medium flex items-center"
                              whileHover={{ color: "#ffffff", scale: 1.03 }}
                              transition={{ duration: 0.2 }}
                            >
                              <motion.div
                                className="w-1.5 h-6 bg-gradient-to-b from-[#D4AF37] to-transparent rounded-full mr-3 opacity-70"
                                animate={{
                                  height: ['20px', '28px', '20px'],
                                  opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                              />
                              {stat.label}
                            </motion.span>

                            <motion.span
                              className="relative"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 500, damping: 10 }}
                            >
                              <motion.span
                                className="absolute -inset-2 rounded-lg bg-[#D4AF37]/10 blur-md opacity-0"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.8 }}
                              />
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E077] font-bold text-xl relative z-10">
                                {stat.value}
                              </span>
                            </motion.span>
                          </div>

                          {/* Ultra premium progress bar with advanced effects */}
                          <div className="h-4 bg-black/30 backdrop-blur-md rounded-full overflow-hidden p-1 relative">
                            {/* Animated glowing background */}
                            <motion.div
                              className="absolute inset-0 opacity-20"
                              animate={{
                                background: [
                                  'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.7), transparent 70%)',
                                  'radial-gradient(circle at 80% 50%, rgba(212,175,55,0.7), transparent 70%)',
                                  'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.7), transparent 70%)'
                                ]
                              }}
                              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Glass effect container */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full" />

                            <motion.div
                              className="h-full rounded-full relative overflow-hidden"
                              style={{
                                background: `linear-gradient(90deg, #D4AF37, #F9E077, #D4AF37)`,
                                backgroundSize: '200% 100%'
                              }}
                              initial={{ width: "0%" }}
                              whileInView={{ width: stat.value }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.8, delay: 0.5 + (i * 0.2), ease: "easeOut" }}
                              animate={{
                                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
                              }}
                            >
                              {/* Luxury shine effect */}
                              <motion.div
                                className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-30"
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{
                                  duration: 2,
                                  delay: 1.5 + i,
                                  repeat: Infinity,
                                  repeatDelay: 3
                                }}
                              />

                              {/* Illuminated edge detail */}
                              <div className="absolute inset-0 border-t border-white/30" />

                              {/* Animated value particles */}
                              {[...Array(5)].map((_, j) => (
                                <motion.div
                                  key={`dot-${i}-${j}`}
                                  className="absolute top-1/2 w-1 h-1 bg-white rounded-full shadow-glow"
                                  style={{
                                    left: `${j * 20}%`,
                                    boxShadow: '0 0 5px 1px rgba(255, 255, 255, 0.7)'
                                  }}
                                  animate={{
                                    y: ['-50%', '-150%', '-50%'],
                                    opacity: [0, 1, 0],
                                    scale: [0.5, 1.5, 0.5]
                                  }}
                                  transition={{
                                    duration: 2,
                                    delay: i * 0.2 + j * 0.4,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                  }}
                                />
                              ))}
                            </motion.div>

                            {/* Value marker with pop effect */}
                            <motion.div
                              className="absolute top-1/2 -right-1 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F9E077] shadow-lg flex items-center justify-center"
                              style={{ right: `calc(100% - ${stat.value})` }}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: [0, 1.3, 1] }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 1.5 + (i * 0.2),
                                duration: 0.6,
                                type: "spring"
                              }}
                            >
                              <div className="w-2.5 h-2.5 rounded-full bg-white/90 shadow-inner" />

                              {/* Ripple effect */}
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-[#D4AF37]"
                                animate={{
                                  scale: [1, 1.6, 1],
                                  opacity: [1, 0, 1]
                                }}
                                transition={{
                                  duration: 2,
                                  delay: 2 + (i * 0.2),
                                  repeat: Infinity,
                                  repeatDelay: 4
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced testimonial card with luxury 3D effect */}
                    <motion.div
                      className="mt-14 relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      whileHover={{
                        y: -5,
                        transition: { type: "spring", stiffness: 400, damping: 8 }
                      }}
                    >
                      {/* Premium background effect with 3D layering */}
                      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#D4AF37]/30 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />

                      {/* Main card with glass morphism effect */}
                      <div className="relative rounded-xl overflow-hidden backdrop-blur-md">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-black/30 rounded-xl border border-white/20" />

                        {/* Interior texture */}
                        <div className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundSize: '8px 8px'
                          }}
                        />

                        {/* Ambient light effect */}
                        <motion.div
                          className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent"
                          animate={{
                            opacity: [0.3, 0.5, 0.3],
                            y: [0, 4, 0]
                          }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <div className="relative z-10 p-7">
                          <div className="flex items-start">
                            {/* Enhanced quote mark with animations */}
                            <motion.div
                              className="text-5xl leading-none font-serif mr-3 mt-1"
                              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: 1, type: "spring" }}
                            >
                              <div className="relative">
                                <span className="block text-[#D4AF37] opacity-90">"</span>
                                <motion.div
                                  className="absolute -inset-2 rounded-full bg-[#D4AF37]/20 blur-md -z-10"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.4, 0.2]
                                  }}
                                  transition={{ duration: 4, repeat: Infinity }}
                                />
                              </div>
                            </motion.div>

                            <div>
                              {/* Enhanced testimonial text with animated highlights */}
                              <motion.p
                                className="text-white/90 italic mb-5 text-lg leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 1.1 }}
                              >
                                A metodologia do RB Cursos transformou
                                <motion.span
                                  className="relative inline-block mx-1.5 px-1"
                                  initial={{ color: "rgba(255,255,255,0.9)" }}
                                  animate={{
                                    color: ["rgba(255,255,255,0.9)", "rgba(212,175,55,1)", "rgba(255,255,255,0.9)"]
                                  }}
                                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                                >
                                  <motion.span
                                    className="absolute inset-0 bg-[#D4AF37]/10 rounded-sm -z-10"
                                    animate={{
                                      opacity: [0, 0.8, 0],
                                      scale: [0.8, 1, 0.8]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                                  />
                                  completamente
                                </motion.span> minha forma de estudar. Fui aprovada em apenas 3 meses de preparação!
                              </motion.p>

                              {/* Animated avatar section with enhanced styling */}
                              <motion.div
                                className="flex items-center"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 1.3 }}
                              >
                                <div className="relative mr-4">
                                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F9E077] opacity-70 blur-sm" />
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#D4AF37]/30 to-[#F9E077]/20 backdrop-blur-sm border border-white/30 flex items-center justify-center relative overflow-hidden">
                                    {/* Animated glow ring */}
                                    <motion.div
                                      className="absolute inset-0 rounded-full"
                                      animate={{
                                        boxShadow: [
                                          'inset 0 0 15px rgba(212,175,55,0.3)',
                                          'inset 0 0 15px rgba(212,175,55,0.8)',
                                          'inset 0 0 15px rgba(212,175,55,0.3)'
                                        ]
                                      }}
                                      transition={{ duration: 3, repeat: Infinity }}
                                    />

                                    <User className="h-6 w-6 text-[#D4AF37] drop-shadow-lg" />
                                  </div>
                                </div>

                                <div>
                                  <motion.p
                                    className="text-white font-semibold text-sm"
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, repeatDelay: 2 }}
                                  >
                                    Maria Silva
                                  </motion.p>
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.5 }}
                                  >
                                    <p className="text-[#D4AF37]/70 text-xs font-medium bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E077]">Aprovada em 2023</p>
                                  </motion.div>
                                </div>
                              </motion.div>
                            </div>
                          </div>

                          {/* Decorative floating elements */}
                          <motion.div
                            className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full border border-[#D4AF37]/20 opacity-30"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                          />
                          <div className="absolute bottom-3 right-3 text-7xl leading-none text-[#D4AF37]/10 font-bold opacity-40">"</div>

                          {/* Floating gold particles */}
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={`gold-dust-${i}`}
                              className="absolute w-1 h-1 rounded-full bg-[#D4AF37]"
                              style={{
                                top: `${20 + Math.random() * 60}%`,
                                left: `${20 + Math.random() * 60}%`,
                              }}
                              animate={{
                                y: [0, -20 * Math.random()],
                                opacity: [0, 0.8, 0],
                                scale: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2 + Math.random() * 3,
                                repeat: Infinity,
                                repeatDelay: Math.random() * 5
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

