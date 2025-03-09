import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import {
  Award, BookOpen, Users, TrendingUp, CheckCircle, ArrowRight, Star,
  ShieldCheck, Clock, Play, ChevronRight, ChevronLeft, Sparkles, Medal
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const heroY = useTransform(scrollY, [0, 400], [0, 70]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const videoModalRef = useRef<HTMLDivElement>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Smooth cursor following
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 48); // Offset by half width/height
      cursorY.set(e.clientY - 48);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    // Advanced particles effect with multiple types
    if (!particlesRef.current) return;

    const particleTypes = [
      { className: 'absolute rounded-full bg-gold-400/20', size: [2, 10], speed: [3000, 9000] },
      { className: 'absolute rotate-45 bg-white/10', size: [4, 12], speed: [5000, 12000] },
      { className: 'absolute rounded-full bg-blue-400/10', size: [3, 8], speed: [4000, 10000] },
      { className: 'absolute triangle bg-purple-400/20', size: [5, 15], speed: [4000, 11000] }, // Novo tipo de partícula
      { className: 'absolute star bg-yellow-400/20', size: [6, 12], speed: [3000, 8000] } // Novo tipo de partícula
    ];

    const createParticle = () => {
      // Randomly select particle type
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];

      const particle = document.createElement('div');
      particle.className = type.className;

      // Random size within range
      const size = Math.random() * (type.size[1] - type.size[0]) + type.size[0];
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      // Random depth/z-index for parallax effect
      const depth = Math.random();
      particle.style.zIndex = `${Math.floor(depth * 10)}`;
      particle.style.opacity = `${0.1 + depth * 0.4}`;

      // Calculate animation properties based on depth
      const duration = Math.random() * (type.speed[1] - type.speed[0]) + type.speed[0];
      const xTravel = (Math.random() - 0.5) * 50; // Random horizontal drift

      // Animation
      particle.animate(
        [
          { opacity: 0, transform: `translateY(0) translateX(0) scale(1) rotate(0deg)` },
          { opacity: 0.8, transform: `translateY(-${50 + depth * 100}px) translateX(${xTravel}px) scale(${1 + depth * 0.3}) rotate(${Math.random() * 90}deg)` },
          { opacity: 0, transform: `translateY(-${100 + depth * 150}px) translateX(${xTravel * 2}px) scale(${1 - depth * 0.5}) rotate(${Math.random() * 180}deg)` }
        ],
        {
          duration,
          easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
          iterations: Infinity,
          delay: Math.random() * 2000
        }
      );

      particlesRef.current?.appendChild(particle);

      // Remove particles after some time to prevent memory issues
      setTimeout(() => {
        if (particle.parentNode === particlesRef.current) {
          particlesRef.current?.removeChild(particle);
        }
      }, duration * 2);
    };

    // Create initial particles
    for (let i = 0; i < 35; i++) createParticle();

    // Add more particles over time
    const interval = setInterval(createParticle, 1000);

    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  // Data for testimonial slider
  const testimonials = [
    {
      name: "Carlos Henrique",
      position: "Analista Tributário - Receita Federal",
      testimonial: "A abordagem metodológica da Elite Concursos foi decisiva para minha aprovação. Em apenas 6 meses de estudo intensivo, conquistei minha vaga tão sonhada na Receita Federal.",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      rating: 5
    },
    {
      name: "Marina Silva",
      position: "Auditora Fiscal - Tesouro Nacional",
      testimonial: "A qualidade das videoaulas e o material didático complementar fizeram toda diferença na minha preparação. Recomendo a todos que buscam excelência!",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      rating: 5
    },
    {
      name: "Paulo Mendes",
      position: "Analista Judiciário - TRF",
      testimonial: "O diferencial da Elite Concursos está na capacidade dos professores de simplificar conteúdos complexos. Foi fundamental para minha aprovação em primeiro lugar.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setTestimonialIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <div className="flex flex-col">
        {/* Custom cursor */}
        <motion.div
          ref={cursorRef}
          className="fixed w-24 h-24 pointer-events-none z-50 mix-blend-difference opacity-70 hidden lg:flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="w-full h-full rounded-full border border-white opacity-30"></div>
        <div className="absolute w-4 h-4 rounded-full bg-white"></div>
      </motion.div>

   {/* Enhanced Hero Section with Ultra-Premium 3D Effects */}
<section
  className="relative min-h-[110vh] flex items-center justify-center bg-cover bg-fixed overflow-hidden perspective-1000"
  style={{ background: 'linear-gradient(45deg, #0a0a0a, #1a1a1a, #2a2a2a)' }}
>
  {/* Advanced Dynamic Gradient Background with Shimmering Effect */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-luxury-900/95 via-luxury-800/90 to-luxury-900/90 animate-gradient"></div>
    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-soft-light"></div>

    {/* Subtle Geometric Patterns */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.15)_0%,_transparent_70%)]"></div>
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-[radial-gradient(ellipse_at_bottom,_rgba(100,100,255,0.1)_0%,_transparent_70%)]"></div>
    </div>
  </div>

  {/* Enhanced Hero Background with Parallax and Lighting Effects */}
  <motion.div
    style={{
      y: useTransform(scrollY, [0, 1000], [0, 300]),
      scale: useTransform(scrollY, [0, 1000], [1, 1.2])
    }}
    className="absolute inset-0 z-0"
  >
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501290741922-b56c0d0884af?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-20"></div>

    {/* Advanced Light Rays Effect */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-gold-500/10 to-transparent opacity-30 skew-x-12 transform-gpu"></div>
      <div className="absolute top-0 right-1/3 w-1/3 h-full bg-gradient-to-b from-blue-500/10 to-transparent opacity-20 -skew-x-12 transform-gpu"></div>
    </div>
  </motion.div>

  {/* Advanced Cinematic Particles with Depth and Glow */}
  <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
    {/* Pre-rendered particles would be created by the useEffect */}
  </div>

  {/* Premium Ornamental Elements */}
  <div className="absolute top-20 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"></div>
  <div className="absolute bottom-40 right-0 w-1/2 h-px bg-gradient-to-r from-gold-500/60 via-transparent to-transparent"></div>

  {/* Luxury Geometric Accents */}
  <div className="absolute top-32 left-32 w-40 h-40">
    <div className="absolute w-full h-full rounded-full border border-gold-500/10 animate-pulse-slow"></div>
    <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/20 animate-pulse-slow animation-delay-2000"></div>
    <div className="absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/30 animate-pulse-slow animation-delay-4000"></div>
  </div>

  <div className="absolute bottom-40 right-40 w-64 h-64">
    <div className="absolute w-full h-full rounded-full border border-gold-500/5"></div>
    <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/10"></div>
  </div>

  {/* Enhanced 3D Floating Elements with Perspective and Depth */}
  <div className="absolute pointer-events-none">
    <motion.div
      style={{
        x: useSpring(useTransform(useMotionValue(mousePosition.x), [0, window.innerWidth], [-25, 25])),
        y: useSpring(useTransform(useMotionValue(mousePosition.y), [0, window.innerHeight], [-25, 25])),
        rotateX: useTransform(useMotionValue(mousePosition.y), [0, window.innerHeight], [15, -15]),
        rotateY: useTransform(useMotionValue(mousePosition.x), [0, window.innerWidth], [-15, 15]),
      }}
      className="transform-gpu absolute -top-10 -left-40 w-32 h-32"
    >
      <div className="absolute inset-0 rounded-3xl border border-gold-500/20 backdrop-blur-sm rotate-12 transform-gpu"></div>
      <div className="absolute inset-0 rounded-3xl border border-gold-500/10 backdrop-blur-sm -rotate-6 scale-90 transform-gpu"></div>
    </motion.div>

    <motion.div
      style={{
        x: useTransform(useMotionValue(mousePosition.x), [0, window.innerWidth], [15, -15]),
        y: useTransform(useMotionValue(mousePosition.y), [0, window.innerHeight], [15, -15]),
        rotateX: useTransform(useMotionValue(mousePosition.y), [0, window.innerHeight], [-10, 10]),
        rotateY: useTransform(useMotionValue(mousePosition.x), [0, window.innerWidth], [10, -10]),
      }}
      className="transform-gpu absolute -bottom-20 -right-20 w-60 h-60"
    >
      <div className="absolute inset-0 rounded-full border-2 border-gold-500/10 backdrop-blur-sm"></div>
      <div className="absolute inset-2 rounded-full border border-gold-500/5 backdrop-blur-sm"></div>
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gold-500/5 to-transparent"></div>
    </motion.div>
  </div>

  <motion.div
    style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
    className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        className="text-white relative"
      >
        {/* Premium Badge with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-8 inline-block"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, 0, -2, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold-400 to-amber-300 opacity-70 blur"></div>
            <div className="px-6 py-2 rounded-full border border-gold-400/30 backdrop-blur-xl bg-gradient-to-r from-luxury-900/50 to-luxury-800/50 flex items-center gap-2 group relative z-10">
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear"
                }}
                className="flex-shrink-0"
              >
                <Sparkles className="h-5 w-5 text-gold-400" />
              </motion.div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-amber-400 text-sm font-semibold tracking-wide">
                ELITE CONCURSOS
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Cinematic Title with Animated Gradients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h1 className="text-7xl md:text-8xl xl:text-9xl font-bold mb-6 leading-[1.1] tracking-tight">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              >
                <span className="block">Sua</span>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="flex items-center"
              >
                <span className="relative inline-block">
                  <span className="relative z-10">Aprovação</span>
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="absolute bottom-2 left-0 h-5 bg-gradient-to-r from-gold-500/40 to-gold-400/20 -z-10 rounded-sm"
                  ></motion.span>
                </span>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.9, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="flex items-center gap-4"
              >
                <span className="block">é Nossa</span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-br from-gold-400 via-amber-300 to-gold-500 text-transparent bg-clip-text bg-[size:400%] animate-ultra-gradient">
                      Missão
                    </span>
                    <motion.span
                      className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-amber-300 opacity-40 blur-md -z-10"
                      animate={{
                        opacity: [0.4, 0.6, 0.4],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                      }}
                    ></motion.span>
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </h1>
        </motion.div>

        {/* Enhanced Subheading with Animated Underline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-xl"
        >
          Prepare-se com os melhores professores do Brasil
          <span className="relative whitespace-nowrap ml-2">
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-gold-500/50"
              preserveAspectRatio="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </motion.svg>
            <span className="relative"> para conquistar </span>
          </span>
          sua vaga em concursos públicos de alto nível.
        </motion.p>

        {/* Enhanced CTA Buttons with Premium Effects */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 rounded-full text-luxury-900 text-lg font-bold overflow-hidden shadow-[0_0_25px_rgba(255,192,0,0.4)]"
          >
            {/* Animated Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-amber-500 to-gold-600 bg-[size:200%] animate-horizontal-gradient"></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-400 transition-opacity duration-500"></div>
            <div className="absolute inset-y-0 right-0 aspect-square rounded-full -mr-10 w-16 bg-white/20 blur-lg group-hover:bg-white/30 transition-colors"></div>

            {/* Animated Light Reflection */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                background: [
                  "linear-gradient(40deg, transparent 20%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.14) 22%, transparent 23%, transparent 100%)",
                  "linear-gradient(40deg, transparent 20%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.14) 78%, transparent 79%, transparent 100%)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeIn"
              }}
            ></motion.div>

            <span className="relative z-10 flex items-center">
              Comece Agora <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-5 text-white rounded-full text-lg font-semibold overflow-hidden flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <span className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-400/10"></span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gold-400/20 blur-sm"
              ></motion.div>
              <Play className="w-4 h-4 text-white fill-white ml-0.5 relative z-10" />
            </span>
            <span className="relative z-10">Assista Nossa História</span>
          </motion.button>
        </div>

        {/* Animated Statistics Pills with Floating Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-12"
        >
          {[
            { value: "15+", label: "Anos de Tradição", delay: 0 },
            { value: "95%", label: "Taxa de Aprovação", delay: 0.1 },
            { value: "10k+", label: "Alunos Aprovados", delay: 0.2 }
          ].map((stat, index) => (
            <React.Fragment key={index}>
              <motion.div
                whileHover={{ y: -5, scale: 1.03 }}
                animate={{
                  y: [0, -4, 0],
                  x: [0, 2, 0, -2, 0],
                }}
                transition={{
                  y: { delay: 1.8 + stat.delay, duration: 3, repeat: Infinity, repeatType: "reverse" },
                  x: { delay: 2 + stat.delay, duration: 5, repeat: Infinity, repeatType: "reverse" },
                  hover: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-gold-500/30 to-gold-300/30 opacity-0 group-hover:opacity-100 blur transition-all duration-300 group-hover:duration-200"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-full py-2 px-5 flex items-center gap-3 border border-white/10">
                  <span className="bg-gradient-to-r from-gold-400 to-amber-300 bg-clip-text text-transparent font-bold">{stat.value}</span>
                  <span className="h-3 w-px bg-white/20"></span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced 3D Card with Advanced Floating and Parallax Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="hidden lg:block relative perspective-3000"
      >
        <motion.div
          style={{
            rotateX: useTransform(useMotionValue(mousePosition.y), [0, window.innerHeight], [10, -10]),
            rotateY: useTransform(useMotionValue(mousePosition.x), [0, window.innerWidth], [-10, 10])
          }}
          className="relative transform-gpu"
          animate={{ y: [0, -10, 0] }}
          transition={{
            y: { duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          }}
        >
          {/* Enhanced Glow Effects */}
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-gold-500/20 via-amber-300/20 to-gold-500/20 opacity-50 blur-xl"></div>
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gold-500/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-pulse-slow animation-delay-2000"></div>

          {/* Animated Particles Inside Card */}
          <div className="absolute inset-8 overflow-hidden rounded-3xl opacity-30">
            <div className="absolute w-2 h-2 bg-gold-400 rounded-full top-1/4 left-1/3 animate-float-slow"></div>
            <div className="absolute w-1 h-1 bg-gold-300 rounded-full top-1/2 left-1/4 animate-float-slow animation-delay-2000"></div>
            <div className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full bottom-1/4 right-1/3 animate-float-slow animation-delay-4000"></div>
          </div>

          {/* Main Glass Card with 3D Layering Effect */}
          <div className="relative bg-gradient-to-br from-white/[0.09] to-white/[0.03] backdrop-blur-xl rounded-[30px] p-8 border border-white/10 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.7)]">
            {/* 3D Layered Badge Floating Above Card */}
            <div className="absolute -left-5 -top-5">
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.02, 1, 0.98, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-28 h-28 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-500/40 to-gold-300/20 backdrop-blur-md opacity-80"></div>
                <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-gold-500/30 to-gold-300/10 backdrop-blur-md opacity-90"></div>
                <div className="relative z-10">
                  <Medal className="w-10 h-10 text-gold-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                </div>
              </motion.div>
            </div>

            <h3 className="text-white text-2xl font-bold mb-10 mt-6 ml-6 tracking-wide">
              Por que nos escolher?
            </h3>

            <div className="space-y-7 relative">
              {[
                { text: "Material didático constantemente atualizado", delay: 0.1 },
                { text: "Corpo docente com mestres e doutores", delay: 0.2 },
                { text: "Plataforma de estudos exclusiva", delay: 0.3 },
                { text: "Mentorias individualizadas com especialistas", delay: 0.4 },
                { text: "Simulados com correção detalhada", delay: 0.5 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + item.delay, duration: 0.8 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-300/5 backdrop-blur-sm flex items-center justify-center p-2.5 group-hover:from-gold-500/30 group-hover:to-gold-300/10 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-gold-400" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gold-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <p className="text-gray-200 font-medium text-lg">{item.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Glass Button */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(255,192,0,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 backdrop-blur-md text-white font-semibold flex items-center justify-center gap-2 group"
              >
                Explore Nossa Metodologia
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom Scroll Indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <span className="text-gold-400/70 text-sm mb-2">Explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-6 h-10 rounded-full border border-gold-400/30 flex justify-center pt-2"
      >
        <motion.div className="w-1.5 h-1.5 rounded-full bg-gold-400"></motion.div>
      </motion.div>
    </motion.div>
  </motion.div>

  {/* Curved Gold Divider */}
  <div className="absolute -bottom-px left-0 w-full overflow-hidden">
    <div className="absolute -bottom-1 w-full h-20 bg-gold-400/20 rounded-full"></div>
  </div>
</section>

      {/* Featured Achievement Section with 3D Cards */}
     {/* Premium Achievement Section with Advanced 3D Cards */}
<section className="relative py-36 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
  {/* Enhanced Background Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-0 right-0 top-0 h-64 bg-gradient-to-b from-gold-50/80 to-transparent"></div>
    <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-gold-100/30 to-transparent"></div>
    <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-gradient-radial from-blue-50/40 to-transparent"></div>
    <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-purple-100/20 to-blue-100/20 blur-3xl animate-pulse-slow"></div>
    
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 opacity-[0.015]" 
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
         }}
    ></div>
    
    {/* Floating particles */}
    <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-gold-300/30 animate-float-slow"></div>
    <div className="absolute top-40 right-40 w-2 h-2 rounded-full bg-purple-300/30 animate-float-slow animation-delay-2000"></div>
    <div className="absolute bottom-32 left-1/2 w-4 h-4 rounded-full bg-blue-300/30 animate-float-slow animation-delay-1000"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* Enhanced Header Section */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="text-center max-w-3xl mx-auto mb-28"
    >
      {/* Enhanced badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-block mb-6"
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold-400/30 to-amber-300/30 opacity-70 blur"></div>
          <div className="relative px-6 py-2 rounded-full border border-gold-200 bg-gradient-to-r from-white to-gold-50/80 flex items-center gap-2 group shadow-md">
            <span className="bg-gradient-to-r from-gold-600 to-amber-500 text-transparent bg-clip-text text-sm font-semibold tracking-wide">EXCELÊNCIA EM RESULTADOS</span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-400"></div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Enhanced heading with staggered text reveal */}
      <div className="overflow-hidden mb-3">
        <motion.h2 
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-2"
        >
          Transformamos <span className="relative">
            <span className="relative z-10 bg-gradient-to-br from-gold-600 via-amber-500 to-gold-500 text-transparent bg-clip-text">Sonhos</span>
            <motion.span 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-gold-300/40 to-amber-200/30 -z-10 rounded-sm"
            ></motion.span>
          </span> em Aprovações
        </motion.h2>
      </div>
      
      {/* Enhanced divider */}
      <div className="relative flex justify-center items-center my-8">
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "100px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-gold-300 to-amber-400 rounded-full"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute bg-white w-8 h-8 rounded-full border border-gold-200 flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold-400"></div>
        </motion.div>
      </div>
      
      {/* Enhanced description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
      >
        Conheça as histórias de sucesso e metodologia que fazem da <span className="font-medium text-gray-800">Elite Concursos</span> referência nacional em aprovações em concursos públicos.
      </motion.p>
    </motion.div>

    {/* Enhanced 3D Achievement Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          title: "Maior Taxa de Aprovação",
          description: "95% dos nossos alunos conquistam aprovação em até 18 meses de preparação intensiva e acompanhamento personalizado.",
          icon: "trophy",
          color: "gold",
          bgFrom: "from-amber-600",
          bgTo: "to-yellow-500",
          iconBg: "bg-amber-50",
          textColor: "text-amber-600",
          textHoverColor: "group-hover:text-amber-700",
          borderColor: "border-amber-200",
          hoverBorderColor: "group-hover:border-amber-300",
          shadowColor: "shadow-amber-500/20",
          hoverShadowColor: "group-hover:shadow-amber-500/30",
          fillColor: "fill-amber-500",
          lightColor: "bg-amber-300/30",
          number: "95%",
          animation: { rotate: [0, 2, -1, 0], y: [0, -8, 0] }
        },
        {
          title: "Corpo Docente Premium",
          description: "Mais de 50 mestres e doutores com experiência prática nas áreas que lecionam e reconhecimento nacional.",
          icon: "users",
          color: "blue",
          bgFrom: "from-blue-600",
          bgTo: "to-indigo-600",
          iconBg: "bg-blue-50",
          textColor: "text-blue-600",
          textHoverColor: "group-hover:text-blue-700",
          borderColor: "border-blue-200",
          hoverBorderColor: "group-hover:border-blue-300",
          shadowColor: "shadow-blue-500/20",
          hoverShadowColor: "group-hover:shadow-blue-500/30",
          fillColor: "fill-blue-500",
          lightColor: "bg-blue-300/30",
          number: "50+",
          animation: { rotate: [0, -2, 1, 0], y: [0, -8, 0] },
          featured: true
        },
        {
          title: "Alunos Aprovados",
          description: "Milhares de alunos aprovados em concursos públicos de alta competitividade em todo o Brasil.",
          icon: "chart",
          color: "purple",
          bgFrom: "from-purple-600",
          bgTo: "to-violet-600",
          iconBg: "bg-purple-50",
          textColor: "text-purple-600",
          textHoverColor: "group-hover:text-purple-700",
          borderColor: "border-purple-200",
          hoverBorderColor: "group-hover:border-purple-300",
          shadowColor: "shadow-purple-500/20",
          hoverShadowColor: "group-hover:shadow-purple-500/30",
          fillColor: "fill-purple-500",
          lightColor: "bg-purple-300/30",
          number: "10k+",
          animation: { rotate: [0, 2, -1, 0], y: [0, -8, 0] }
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          className={`relative group ${item.featured ? "md:-mt-10 md:mb-10" : ""}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: index * 0.2 }}
        >
          {item.featured && (
            <motion.div 
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-6 inset-x-0 flex justify-center z-10"
            >
              <div className={`bg-gradient-to-r ${item.bgFrom} ${item.bgTo} text-white text-xs font-bold tracking-wider uppercase px-6 py-2 rounded-full shadow-xl flex items-center gap-1.5`}>
                <span className="w-1 h-1 bg-white rounded-full"></span>
                <span>Destaque</span>
                <span className="w-1 h-1 bg-white rounded-full"></span>
              </div>
            </motion.div>
          )}

          <motion.div
            whileHover="hover"
            className={`h-full relative bg-white shadow-xl rounded-3xl p-8 transition-all duration-300 overflow-hidden 
                        border ${item.borderColor} ${item.hoverBorderColor} ${item.shadowColor} ${item.hoverShadowColor} 
                        hover:shadow-2xl group-hover:-translate-y-2`}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1500px"
            }}
            variants={{
              hover: item.animation
            }}
          >
            {/* Premium glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Background decoration */}
            <div className={`absolute right-0 bottom-0 w-56 h-56 rounded-full ${item.lightColor} opacity-10 blur-2xl transform translate-x-20 translate-y-20`}></div>
            <div className={`absolute right-10 top-10 w-12 h-12 rounded-full ${item.lightColor} opacity-30 blur-xl`}></div>

            <div className="flex flex-col h-full relative">
              {/* Enhanced Icon Area */}
              <div className="mb-8 relative">
                <div className={`w-20 h-20 rounded-2xl ${item.iconBg} flex items-center justify-center relative overflow-hidden shadow-lg`}>
                  {item.icon === "trophy" && <Award className={`w-10 h-10 ${item.textColor}`} />}
                  {item.icon === "users" && <Users className={`w-10 h-10 ${item.textColor}`} />}
                  {item.icon === "chart" && <TrendingUp className={`w-10 h-10 ${item.textColor}`} />}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${item.bgFrom} to-transparent opacity-10`}></div>
                </div>
                <div className={`absolute -bottom-3 -right-3 w-12 h-12 rounded-full ${item.iconBg} opacity-60 ${item.shadowColor} blur-md`}></div>
              </div>

              {/* Number with animation */}
              <div className="mb-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <span className={`text-6xl font-extrabold bg-gradient-to-br ${item.bgFrom} ${item.bgTo} text-transparent bg-clip-text`}>{item.number}</span>
                </motion.div>
              </div>

              <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${item.textHoverColor} transition-colors duration-300`}>{item.title}</h3>

              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${item.bgFrom} ${item.bgTo} mb-4 group-hover:w-20 transition-all duration-500 ease-out`}></div>

              <p className="text-gray-600 mb-8 leading-relaxed">{item.description}</p>

              <div className="mt-auto">
                <button className={`group/btn inline-flex items-center gap-2 font-medium ${item.textColor} ${item.textHoverColor} transition-all duration-300`}>
                  <span className="border-b border-transparent group-hover/btn:border-current">Saiba mais</span> 
                  <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                <div className={`absolute top-0 left-0 w-5 h-5 ${item.iconBg} -translate-x-1/2 -translate-y-1/2 rounded-br-full opacity-50`}></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <div className={`absolute bottom-0 right-0 w-5 h-5 ${item.iconBg} translate-x-1/2 translate-y-1/2 rounded-tl-full opacity-50`}></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
    
    {/* Bottom action button */}
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="flex justify-center mt-16"
    >
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.1)" }}
        whileTap={{ scale: 0.98 }}
        className="px-8 py-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-medium text-lg flex items-center gap-2 shadow-xl"
      >
        Ver todas as estatísticas
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </motion.button>
    </motion.div>
  </div>
</section>

      <section className="relative py-32 bg-gradient-to-br from-luxury-900 via-luxury-800 to-black overflow-hidden">
      </section>
      {/* Advanced animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <div className="absolute top-0 -left-40 w-[800px] h-[800px] bg-purple-900 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-900 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-900 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-4000"></div>
          </div>

          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-6 gap-0.5 opacity-5">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-full border-l border-r border-white/20"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-6 gap-0.5 opacity-5">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="w-full border-t border-b border-white/20"></div>
            ))}
          </div>
        </div>

        {/* Gold accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-gold-500/40 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 mb-6"
            >
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 text-transparent bg-clip-text text-sm font-semibold">Cursos Premium</span>
              <div className="w-1 h-1 rounded-full bg-gold-400 ml-2"></div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trilhas de <span className="text-gold-400">Aprovação</span> Garantida</h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-gold-400 to-gold-300 rounded-full mb-6"></div>
            <p className="text-xl text-gray-300">Metodologia exclusiva com materiais atualizados e técnicas avançadas para maximizar seu desempenho.</p>
          </motion.div>

          {/* 3D Course Cards Carousel */}
        {/* Premium 3D Course Cards Carousel with Advanced Effects */}
<div className="relative mt-20">
  {/* Enhanced carousel navigation */}
  <div className="absolute -top-20 sm:-top-24 right-4 flex items-center gap-8">
    <div className="hidden sm:flex items-center gap-3">
      <span className="text-gold-400 text-sm font-medium">Navegar</span>
      <div className="h-px w-10 bg-gradient-to-r from-gold-400/50 to-transparent"></div>
    </div>
    <div className="flex space-x-3">
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all duration-300 backdrop-blur-sm group shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 group-hover:text-gold-400 transition-colors" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white transition-all duration-300 backdrop-blur-sm group shadow-lg"
      >
        <ChevronRight className="w-5 h-5 group-hover:text-gold-400 transition-colors" />
      </motion.button>
    </div>
  </div>

  {/* Premium course cards with 3D effects */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
    {[
      {
        title: "Magistratura Completo",
        category: "Jurídico",
        rating: 4.9,
        students: 1250,
        level: "Avançado",
        image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        color: "from-blue-600 to-indigo-600",
        accent: "bg-blue-500",
        hoverGlow: "group-hover:shadow-blue-500/20",
        icon: "⚖️",
        modules: 36,
        hours: 182,
        description: "Preparação completa para concursos de magistratura com foco em questões discursivas e práticas."
      },
      {
        title: "Carreira Fiscal Elite",
        category: "Tributário",
        rating: 4.9,
        students: 980,
        level: "Especialista",
        featured: true,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        color: "from-purple-600 to-purple-800",
        accent: "bg-purple-500",
        hoverGlow: "group-hover:shadow-purple-500/20",
        icon: "📊",
        modules: 42,
        hours: 210,
        description: "Metodologia focada em aprovação em concursos fiscais de elite com alta competitividade."
      },
      {
        title: "Carreiras Policiais",
        category: "Segurança",
        rating: 4.8,
        students: 845,
        level: "Intermediário",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        color: "from-emerald-600 to-teal-600",
        accent: "bg-emerald-500",
        hoverGlow: "group-hover:shadow-emerald-500/20",
        icon: "🛡️",
        modules: 28,
        hours: 150,
        description: "Preparação completa para carreiras policiais com foco em provas físicas e conhecimentos específicos."
      }
    ].map((course, index) => (
      <motion.div
        key={index}
        className="relative group perspective-1200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        {/* Special floating label for featured course */}
        {course.featured && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -top-7 inset-x-0 flex justify-center z-20"
          >
            <div className={`bg-gradient-to-r ${course.color} px-6 py-1.5 rounded-full shadow-xl flex items-center gap-2`}>
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              <span className="text-white text-xs font-bold tracking-wider uppercase">Mais Popular</span>
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </div>
          </motion.div>
        )}

        {/* 3D Card with enhanced hover effects */}
        <div className="h-full">
          <motion.div
            whileHover={{ 
              rotateY: 8, 
              rotateX: -5, 
              translateY: -10,
              scale: 1.02
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
            className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden transform-gpu h-full ${course.hoverGlow} hover:shadow-2xl transition-shadow duration-500`}
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
            
            {/* Course header with image and overlay */}
            <div className="relative h-56 overflow-hidden">
              {/* Color overlay with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-90`}></div>
              
              {/* Course image with blend effect */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover object-center mix-blend-overlay scale-110 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Elegant overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl">
                {course.icon}
              </div>
              
              {/* Category badge */}
              <div className="absolute top-4 right-4">
                <span className="inline-block bg-white/15 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                  {course.category}
                </span>
              </div>
              
              {/* Course title and level */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${course.color}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-white/90 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    {course.hours}h de conteúdo
                  </div>
                </div>
                <h3 className="text-white text-2xl font-bold leading-tight group-hover:text-gold-200 transition-colors duration-300">{course.title}</h3>
              </div>
            </div>

            {/* Course content */}
            <div className="p-6">
              {/* Course brief description */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-2">{course.description}</p>
              
              {/* Rating and students */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? "text-gold-500 fill-gold-500" : "text-gray-300"}`} />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{course.rating}</span>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Users className="w-4 h-4 mr-1 text-gray-400" /> 
                  <span>{course.students.toLocaleString('pt-BR')}</span>
                </div>
              </div>

              {/* Course features with animated icons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: "📚", label: `${course.modules} Módulos` },
                  { icon: "🎯", label: "Simulados" },
                  { icon: "📱", label: "App Mobile" },
                  { icon: "🏆", label: "Certificado" }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 group/item">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <span className="text-base">{feature.icon}</span>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Price and CTA button */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs line-through">R$ 2.590,00</span>
                    <span className="bg-emerald-50 text-emerald-600 text-xs font-bold px-2 py-0.5 rounded">-23%</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">R$ 1.990</span>
                    <span className="text-gray-500 text-sm">,00</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2.5 rounded-xl text-white text-sm font-medium bg-gradient-to-r ${course.color} shadow-lg flex items-center gap-1.5 group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden pointer-events-none opacity-30">
                <div className={`absolute top-8 right-8 w-32 h-32 rounded-full ${course.accent} opacity-10 blur-xl`}></div>
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden pointer-events-none">
                <div className={`absolute bottom-4 left-4 w-2 h-12 ${course.accent} opacity-20 rounded-full blur-sm`}></div>
              </div>
            </div>

            {/* Animated outline on hover */}
            <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/20 transition-colors duration-300 pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Enhanced reflection effect */}
        <div className="absolute -bottom-12 inset-x-8 h-12 bg-gradient-to-t from-white/5 to-white/20 blur-lg rounded-full transform scale-y-[0.25] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      </motion.div>
    ))}
  </div>

  {/* Enhanced pagination indicator with animation */}
  <div className="flex justify-center mt-14">
    <div className="flex items-center gap-5 bg-white/5 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10">
      {[0, 1, 2].map((_, i) => (
        <motion.button
          key={i}
          className="relative"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={`w-2.5 h-2.5 rounded-full ${i === 0 ? 'bg-gold-400' : 'bg-white/20'} transition-colors`}></div>
          {i === 0 && (
            <motion.div
              layoutId="activeCourseIndicator"
              className="absolute -inset-1.5 rounded-full bg-gold-400/20"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            ></motion.div>
          )}
        </motion.button>
      ))}

      <div className="h-4 w-px bg-white/10 mx-1"></div>
      <span className="text-white/60 text-xs font-medium">01 / 03</span>
    </div>
  </div>

  {/* View all courses button */}
  <motion.div 
    className="flex justify-center mt-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 30px -10px rgba(0,0,0,0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      className="px-8 py-4 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md text-white font-medium text-lg flex items-center gap-3 border border-white/10 shadow-xl"
    >
      Ver Todos os Cursos
      <div className="w-7 h-7 rounded-full bg-gold-400/20 flex items-center justify-center">
        <ArrowRight className="w-4 h-4 text-gold-400" />
      </div>
    </motion.button>
  </motion.div>
</div>
        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 192, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-black rounded-full inline-flex items-center font-medium text-lg shadow-[0_0_15px_rgba(255,192,0,0.3)]"
          >
            Ver Todos os Cursos <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
  </div>
</div>
<section className="relative py-32 bg-white overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute inset-0">
      <div className="absolute right-0 top-0 h-96 w-96 bg-gradient-radial from-gold-100/30 to-transparent rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute left-10 top-32 h-px w-32 bg-gradient-to-r from-gold-300/50 to-transparent"></div>
      <div className="absolute right-10 bottom-32 h-px w-32 bg-gradient-to-l from-gold-300/50 to-transparent"></div>
      <div className="absolute -left-20 bottom-0 h-64 w-64 bg-gradient-radial from-blue-100/20 to-transparent rounded-full -translate-y-1/2"></div>

      {/* Pattern background */}
      <div className="absolute inset-0 opacity-[0.03] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center bg-gradient-to-r from-gold-50 to-amber-50 px-4 py-1.5 rounded-full border border-gold-200 shadow-sm mb-6"
        >
          <span className="text-gold-700 text-sm font-semibold">Histórias de Sucesso</span>
          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-400 ml-2"></div>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">O Que Dizem <span className="bg-gradient-to-r from-gold-600 to-amber-500 text-transparent bg-clip-text">Nossos Aprovados</span></h2>
        <div className="h-1.5 w-20 mx-auto bg-gradient-to-r from-gold-300 to-amber-400 rounded-full mb-6"></div>
        <p className="text-xl text-gray-600">Conheça as histórias reais de alunos que transformaram suas vidas através da aprovação em concursos públicos.</p>
      </motion.div>

      {/* Main testimonial showcase */}
      <div className="relative">
        <motion.div
          className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          {/* Navigation controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-700 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white/80 shadow-lg flex items-center justify-center text-gray-700 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Enhanced immersive testimonial content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="p-0 grid md:grid-cols-5 overflow-hidden"
            >
              {/* Testimonial image/3D card side */}
              <div className="col-span-2 relative overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-purple-500/20 opacity-80 mix-blend-overlay z-10"></div>
                <motion.div
                  initial={{ scale: 1.1, x: -10 }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-20"></div>
                  <img
                    src={testimonials[testimonialIndex].avatar}
                    alt={testimonials[testimonialIndex].name}
                    className="w-full h-full object-cover object-center scale-110"
                  />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute top-8 left-8 z-30">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "backOut" }}
                    className="w-16 h-16 rounded-full border-4 border-white/30 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Star className="w-8 h-8 text-gold-400 fill-gold-400" />
                  </motion.div>
                </div>

                {/* Quote symbol */}
                <div className="absolute bottom-8 right-8 z-30">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-white/20">
                    <path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Position label */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="absolute bottom-12 left-0 z-30 bg-gradient-to-r from-gold-600 to-gold-500 px-8 py-3 rounded-r-full shadow-lg"
                >
                  <span className="text-white font-semibold tracking-wide text-sm">
                    {testimonials[testimonialIndex].position.split(' - ')[1]}
                  </span>
                </motion.div>
              </div>

              {/* Testimonial content side with glass effect */}
              <div className="col-span-3 relative bg-white p-12 overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold-200/20 to-transparent"></div>
                </div>

                {/* Rating stars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="flex mb-6"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    >
                      <Star className="w-5 h-5 text-gold-500 fill-gold-500 mr-1" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial text with staggered animation */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="absolute -top-6 -left-2 text-8xl font-serif text-gold-300"
                  >
                    "
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold text-gray-900 mb-6 relative z-10"
                  >
                    {testimonials[testimonialIndex].name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl text-gray-600 mb-6 leading-relaxed italic relative z-10"
                  >
                    "{testimonials[testimonialIndex].testimonial}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex items-center mt-8"
                  >
                    <div className="block md:hidden w-12 h-12 rounded-full overflow-hidden border-2 border-gold-300 mr-4">
                      <img
                        src={testimonials[testimonialIndex].avatar}
                        alt={testimonials[testimonialIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="block text-gold-600 font-medium mb-1">
                        {testimonials[testimonialIndex].position.split(' - ')[0]}
                      </span>
                      <span className="block text-sm text-gray-500 md:hidden">
                        {testimonials[testimonialIndex].position.split(' - ')[1]}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-gold-300 to-transparent"></div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots - enhanced */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={`relative w-3 h-3 rounded-full transition-colors ${index === testimonialIndex ? 'bg-gold-500' : 'bg-gray-300'
                    }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === testimonialIndex && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute inset-0 bg-gold-500 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>

{/* New 3D Interactive Professors Showcase */ }
<section className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-0 top-1/3 w-1/2 h-1/2 bg-gradient-radial from-gold-100/20 to-transparent rounded-full"></div>
    <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-radial from-blue-100/20 to-transparent rounded-full"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl mx-auto mb-24"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="inline-flex items-center bg-gradient-to-r from-luxury-50 to-luxury-100 px-4 py-1.5 rounded-full border border-luxury-200/50 shadow-sm mb-6"
      >
        <span className="bg-gradient-to-r from-luxury-800 to-luxury-600 text-transparent bg-clip-text text-sm font-semibold">Corpo Docente de Elite</span>
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-gold-500 to-luxury-700 ml-2"></div>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Professores <span className="bg-gradient-to-r from-luxury-800 to-luxury-600 text-transparent bg-clip-text">Extraordinários</span></h2>
      <div className="h-1.5 w-20 mx-auto bg-gradient-to-r from-gold-300 to-luxury-600 rounded-full mb-6"></div>
      <p className="text-xl text-gray-600">Mestres e doutores especialistas em preparação para concursos de alto nível</p>
    </motion.div>

    {/* Interactive 3D Professor Cards with Hover Effects */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {[
        {
          name: "Dra. Mariana Alves",
          specialty: "Direito Constitucional",
          position: "Ph.D em Direito Público",
          experience: "12 anos",
          approvals: 720,
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
          color: "from-blue-600 to-purple-600",
          accent: "bg-blue-500",
          special: "Especialista em questões discursivas"
        },
        {
          name: "Prof. Ricardo Mendes",
          specialty: "Raciocínio Lógico",
          position: "Mestre em Matemática",
          experience: "15 anos",
          approvals: 950,
          image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
          color: "from-emerald-600 to-blue-600",
          accent: "bg-emerald-500",
          featured: true,
          special: "Coordenador de materiais didáticos"
        },
        {
          name: "Dra. Camila Nunes",
          specialty: "Português e Redação",
          position: "Doutora em Linguística",
          experience: "10 anos",
          approvals: 850,
          image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
          color: "from-purple-600 to-pink-600",
          accent: "bg-purple-500",
          special: "Autora de 4 livros sobre técnicas de redação"
        }
      ].map((professor, index) => (
        <motion.div
          key={index}
          className="relative group perspective-2000"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          {professor.featured && (
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-gold-600 to-amber-500 text-white text-xs uppercase font-bold tracking-wider px-4 py-1 rounded-full shadow-lg">
                Coordenador
              </div>
            </div>
          )}

          {/* 3D Card with interactive effects */}
          <motion.div
            whileHover={{
              rotateY: 15,
              rotateX: -5,
              translateY: -10,
              scale: 1.02
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/20 via-gold-400/0 to-gold-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200"></div>

            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform-gpu h-full">
              {/* Professor image with overlay */}
              <div className="relative h-72">
                <div className={`absolute inset-0 bg-gradient-to-br ${professor.color} opacity-90`}></div>
                <img
                  src={professor.image}
                  alt={professor.name}
                  className="w-full h-full object-cover object-center mix-blend-overlay"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>

                {/* Stats overlay */}
                <div className="absolute top-6 right-6 flex flex-col items-end">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-2 mb-2">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-white mr-1" />
                      <span className="text-white text-sm font-semibold">{professor.approvals}+ aprovações</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl px-3 py-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-white mr-1" />
                      <span className="text-white text-sm font-semibold">{professor.experience} de experiência</span>
                    </div>
                  </div>
                </div>

                {/* Name and position */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-1">{professor.name}</h3>
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full ${professor.accent} mr-2`}></div>
                    <span className="text-white/90 text-sm">{professor.position}</span>
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Especialidade</h4>
                  <p className="text-gray-900 font-semibold">{professor.specialty}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-2">Diferencial</h4>
                  <p className="text-gray-900 font-semibold">{professor.special}</p>
                </div>

                {/* Skills visualization */}
                <div className="space-y-3 mb-8">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Didática</span>
                      <span className="text-gray-700">98%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "98%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${professor.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Atualização</span>
                      <span className="text-gray-700">95%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${professor.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                </div>

                {/* CTA Button with liquid effect */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full py-3 rounded-xl text-white overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700"></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${professor.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <span className="relative flex items-center justify-center font-medium">
                    Ver Cursos <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* CTA Section with 3D Parallax Effect */ }
<section className="relative py-36 overflow-hidden bg-gradient-to-br from-luxury-900 via-luxury-800 to-black">
  {/* Advanced animated background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
      <div className="absolute -top-[400px] -left-[300px] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-purple-900/40 to-purple-600/0 blur-3xl"></div>
      <div className="absolute -bottom-[400px] -right-[400px] w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-blue-900/40 to-blue-600/0 blur-3xl"></div>
    </div>

    {/* Parallax floating elements */}
    <div className="absolute inset-0">
      <motion.div
        style={{
          y: useTransform(scrollY, [0, 1000], [0, -150]),
          x: useTransform(scrollY, [0, 1000], [0, 50]),
          rotateZ: useTransform(scrollY, [0, 1000], [0, 10]),
        }}
        className="absolute top-20 left-[15%] w-24 h-24 rounded-full border border-white/10 backdrop-blur-sm"
      ></motion.div>
      <motion.div
        style={{
          y: useTransform(scrollY, [0, 1000], [0, -100]),
          x: useTransform(scrollY, [0, 1000], [0, -50]),
          rotateZ: useTransform(scrollY, [0, 1000], [0, -15]),
        }}
        className="absolute bottom-40 right-[10%] w-40 h-40 rounded-full border border-gold-500/20 backdrop-blur-sm"
      ></motion.div>
      <motion.div
        style={{
          y: useTransform(scrollY, [0, 1000], [0, 100]),
          rotateZ: useTransform(scrollY, [0, 1000], [0, 20]),
        }}
        className="absolute top-1/2 left-[70%] w-16 h-16 rounded-xl border border-white/10 backdrop-blur-sm"
      ></motion.div>
    </div>
  </div>

  {/* Gold accents */}
  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-gold-500/40 via-transparent to-transparent"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* 3D Split Content */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="relative"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 mb-6"
          >
            <span className="bg-gradient-to-r from-gold-400 to-gold-200 text-transparent bg-clip-text text-sm font-semibold">Garanta sua vaga</span>
            <div className="w-1 h-1 rounded-full bg-gold-400 ml-2"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Comece Hoje Sua <span className="text-gold-400">Jornada</span> de Sucesso
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-gold-400 to-gold-300 mb-8"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-10 max-w-lg"
          >
            Junte-se a milhares de alunos aprovados e transforme seu futuro com a metodologia exclusiva da Elite Concursos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 gap-6 mb-10"
          >
            {[
              { label: "Garantia de Satisfação", value: "7 dias" },
              { label: "Suporte ao Aluno", value: "Ilimitado" },
              { label: "Acesso à Plataforma", value: "Vitalício" },
              { label: "Atualizações de Conteúdo", value: "Constantes" },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                <p className="text-white font-bold text-lg">{item.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -20px rgba(255, 192, 0, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-luxury-900 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,192,0,0.3)] relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                Comece Agora <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="relative"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 mb-6"
          >
            <span className="bg-gradient-to-r from-gold-400 to-gold-200 text-transparent bg-clip-text text-sm font-semibold">Garanta sua vaga</span>
            <div className="w-1 h-1 rounded-full bg-gold-400 ml-2"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Comece Hoje Sua <span className="text-gold-400">Jornada</span> de Sucesso
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-gold-400 to-gold-300 mb-8"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-10 max-w-lg"
          >
            Junte-se a milhares de alunos aprovados e transforme seu futuro com a metodologia exclusiva da Elite Concursos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-2 gap-6 mb-10"
          >
            {[
              { label: "Garantia de Satisfação", value: "7 dias" },
              { label: "Suporte ao Aluno", value: "Ilimitado" },
              { label: "Acesso à Plataforma", value: "Vitalício" },
              { label: "Atualizações de Conteúdo", value: "Constantes" },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                <p className="text-white font-bold text-lg">{item.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -20px rgba(255, 192, 0, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-500 hover:from-gold-400 hover:via-gold-500 hover:to-gold-400 text-luxury-900 rounded-full text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,192,0,0.3)] relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                Comece Agora <ArrowRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
        </div>
        </section>
    </>
  );
}

export default Home;
