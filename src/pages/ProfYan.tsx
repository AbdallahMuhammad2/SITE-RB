import React, { useState, useRef, useEffect } from 'react';
import {
  motion, useScroll, useTransform, useMotionValue, AnimatePresence,
  MotionValue, useSpring, useInView, animate, useMotionTemplate
} from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle, ArrowRight, Award, Calendar, Star, BarChart2, BookOpen,
  Download, ChevronRight, ChevronLeft, Clock, Users, Play, Sparkles,
  GraduationCap, Target, FileCheck, Zap, TrendingUp, ShieldCheck, Brain,
  ArrowUpRight, BookText, Medal, ArrowDown, BookMarked, Bookmark, Glasses,
  Mail, User, FileText, X, Menu, MessageSquare, Eye, MapPin, HeartHandshake, Heart, Trophy, Plus, ShoppingCart, Youtube
} from 'lucide-react';
import case1 from '../images/case1.jpg';
import case2 from '../images/case2.jpg';
import case3 from '../images/case3.jpg';
import case4 from '../images/case4.jpg';
import case5 from '../images/case5.jpg';
import case6 from '../images/case6.jpg';
import case7 from '../images/case7.jpg';
import case8 from '../images/case8.jpg';
import image from '../images/image.png';
import yan2 from '../images/yan3.jpg';
import yan from '../images/yan3.jpg';
import ImportedCounter from '../components/Counter';
// ProfYanNavigation component with black and gold luxury theme
const ProfYanNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: "Matemática e RLM",
      href: "#matematica",
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      title: "Prof. Yan Ribeiro",
      href: "#professor",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      title: "Quem sou eu",
      href: "#sobre",
      icon: <User className="w-4 h-4" />
    },
    {
      title: "Conteúdos",
      href: "#conteudos",
      icon: <FileText className="w-4 h-4" />
    },
    {
      title: "Cursos",
      href: "#cursos",
      icon: <BookMarked className="w-4 h-4" />
    },
    {
      title: "Materiais de estudo",
      href: "#materiais",
      icon: <BookOpen className="w-4 h-4" />
    }
  ];

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-[#080608]/90 backdrop-blur-lg shadow-lg ${isScrolled ? 'bg-[#080608]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Professor Branding */}
            <div className="flex items-center">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/" className="flex items-center">
                  <div className="relative h-10 w-10 mr-3">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077]"></div>
                    <div className="absolute inset-[2px] rounded-full bg-[#080608] flex items-center justify-center text-[#D4AF37] font-bold text-lg">
                      YR
                    </div>
                    <span className={`font-bold text-[#D4AF37]`}>
                    </span>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className={`px-4 py-2 rounded-md hover:bg-[#D4AF37]/10 flex items-center gap-2 text-sm font-medium ${isScrolled ? 'text-white/90 hover:text-[#D4AF37]' : 'text-white/90 hover:text-[#F9E077] hover:bg-white/10'
                    } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.cloneElement(item.icon, {
                    className: `w-4 h-4 ${isScrolled ? 'text-[#D4AF37]' : 'text-[#F9E077]'}`
                  })}
                  {item.title}
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.a
              href="#contato"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F9E077] text-[#080608] font-medium text-sm shadow-lg shadow-[#D4AF37]/20 hover:scale-105 transition-transform"

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              <span>Contato</span>
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              aria-label="Toggle menu"
            >
              {activeMobileMenu ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-[#D4AF37]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#D4AF37]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {activeMobileMenu && (
          <motion.div
            className="md:hidden fixed top-20 inset-x-0 bg-[#0A090C]/95 backdrop-blur-md shadow-lg overflow-hidden z-40"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-3 px-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-white hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] rounded-lg my-1 font-medium transition-colors"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveMobileMenu(false)}
                >
                  <div className="w-8 h-8 rounded-full bg-[#0F0E13] flex items-center justify-center">
                    {React.cloneElement(item.icon, { className: "text-[#D4AF37]" })}
                  </div>
                  {item.title}
                </motion.a>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10">
                <motion.a
                  href="#contato"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] rounded-lg font-medium"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveMobileMenu(false)}
                >
                  <Mail className="w-4 h-4" />
                  Contato
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Ultra-premium Counter with better animations
const LocalCounter = ({ from, to, duration = 2, delay = 0 }: {
  from: number; to: number; duration?: number; delay?: number
}) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-5%" });
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    // Ensure final value is shown if component unmounts
    return () => {
      if (!hasAnimated.current) {
        setCount(to);
      }
    };
  }, [to]);
  
  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    
    // Set a fallback timeout to ensure number always appears
    const fallback = setTimeout(() => {
      if (count === from) {
        setCount(to);
      }
    }, 3000); // Fallback after 3 seconds
    
    // Start animation with a small delay to ensure mobile has time to initialize
    const timer = setTimeout(() => {
      hasAnimated.current = true;
      
      let startTime: number | null = null;
      let animationFrame: number;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Use easing function for smoother counting
        const easeOutQuad = (x: number) => 1 - (1 - x) * (1 - x);
        const easedProgress = easeOutQuad(progress);
        
        const currentValue = Math.floor(from + (to - from) * easedProgress);
        setCount(currentValue);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(to); // Ensure final value is exact
        }
      };
      
      animationFrame = requestAnimationFrame(step);
      
      return () => {
        cancelAnimationFrame(animationFrame);
        clearTimeout(fallback);
      };
    }, delay * 1000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(fallback);
    };
  }, [isInView, from, to, duration, delay, count]);
  
  // For server-side rendering safety
  useEffect(() => {
    // Set value immediately on mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Add slight delay to ensure React has time to render
      const mobileTimer = setTimeout(() => {
        setCount(to);
      }, 500);
      return () => clearTimeout(mobileTimer);
    }
  }, [to]);
  
  return <span ref={nodeRef}>{count}</span>;
};

// Background Canvas Element for organic animation
const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 2;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }[] = [];

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.2 - 0.1,
        color: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#4f46e5' : '#6366f1',
        opacity: Math.random() * 0.4 + 0.1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.round(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary checks
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
};

// Modern button with advanced effects
const PremiumButton = ({
  children,
  primary = true,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      className={`group relative px-8 py-4 rounded-xl overflow-hidden flex items-center gap-2 font-medium text-base transition-all duration-300 ${primary
        ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-indigo-700/20'
        : 'border-2 border-blue-200/80 text-blue-700 bg-white/80 backdrop-blur-sm hover:bg-blue-50'
        } ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      {primary && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 blur-xl group-hover:opacity-30 transition-opacity duration-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="absolute -right-20 -top-20 w-40 h-40 bg-white opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-1000"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
          />
        </>
      )}
      <div className="relative z-10 flex items-center gap-2">{children}</div>
    </motion.button>
  );
};

// Premium Case Study Carousel Component
const CaseStudyCarousel = () => {
  // Replace these with your actual case study images
  const caseImages = [
    case1,
    case2,
    case3,
    case4,
    case5,
    case6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const visibleSlides = 3; // Number of slides visible at once on desktop

  // Controls the number of visible slides based on screen width
  const getVisibleSlidesCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev === caseImages.length - getVisibleSlidesCount() ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev === 0 ? caseImages.length - getVisibleSlidesCount() : prev - 1
    );
  };

  // Handle drag events for mobile swipe
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStart === 0) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragEnd(clientX);
  };

  const handleDragEnd = () => {
    if (dragStart === 0 || dragEnd === 0) return;
    const diff = dragStart - dragEnd;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    setDragStart(0);
    setDragEnd(0);
  };

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative max-w-7xl mx-auto pb-20">
      {/* Premium glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/3 w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>
        <div className="absolute -right-20 top-2/3 w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>
      </div>

      {/* Carousel container with elegant border */}
      <motion.div
        className="relative mx-auto rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-[#0F0E13]/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Carousel viewport */}
        <div
          ref={carouselRef}
          className="overflow-hidden py-12 px-4"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * (100 / getVisibleSlidesCount())}%`
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {caseImages.map((image, index) => (
              <motion.div
                key={index}
                className={`px-3 w-full sm:w-1/2 lg:w-1/3 flex-shrink-0`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-gradient-to-br from-[#13121A] to-[#0A090C] rounded-xl overflow-hidden shadow-xl border border-[#D4AF37]/10 h-full">
                  {/* Image container */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    {/* Placeholder for your case images */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080608]/80 z-10"></div>
                    <img
                      src={image}
                      alt={`Caso de sucesso ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500?text=Caso+de+Sucesso";
                      }}
                    />

                    {/* Success badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-[#D4AF37] text-[#080608] text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        <Trophy className="w-3.5 h-3.5" />
                        Aprovado
                      </div>
                    </div>

                    {/* Case details overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">
                          {index === 0 ? "Deraldo Augusto" :
                            index === 1 ? "Danny" :
                              index === 2 ? "Paloma" :
                                index === 3 ? "Dani Azevedo" :
                                  index === 4 ? "Henrique Landim" :
                                    `Elias Junior`}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {index === 0 ? "Aprovado em 1º lugar - TRT" :
                            index === 1 ? "Aprovada em 2º lugar - TRF" :
                              index === 2 ? "Aprovado em Matemática - IFBA" :
                                index === 3 ? "Aprovada para Defensoria" :
                                  index === 4 ? "Aprovado para Receita Federal" :
                                    "Aprovado em Tribunal de Contas"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Premium control buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -mt-6 pointer-events-none">
          <motion.button
            className="w-12 h-12 rounded-full bg-[#080608]/80 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] pointer-events-auto shadow-lg backdrop-blur-sm"
            onClick={prevSlide}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="w-12 h-12 rounded-full bg-[#080608]/80 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] pointer-events-auto shadow-lg backdrop-blur-sm"
            onClick={nextSlide}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(212,175,55,0.2)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {Array.from({ length: caseImages.length - getVisibleSlidesCount() + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index
                ? "w-8 bg-[#D4AF37]"
                : "bg-[#D4AF37]/30"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>


    </div>
  );
};

// Main Page Component with premium design
const ProfYan = () => {
  // Keep existing state and refs
  const [activeTab, setActiveTab] = useState("metodologia");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeBioSection, setActiveBioSection] = useState("education");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effects for hero section
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroContentY = useTransform(scrollY, [0, 800], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Keep existing useEffect for mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative overflow-hidden bg-[#080608] text-white">
      {/* Add the navigation component */}
      <ProfYanNavigation />

      {/* Global background canvas with animated particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Luxury diagonal lines */}
        <div className="absolute -inset-[20%] opacity-[0.03] rotate-[-20deg]">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="h-1.5 my-20 bg-gradient-to-r from-[#D4AF37]/10 via-[#F9E077] to-[#D4AF37]/10"
            />
          ))}
        </div>

        {/* Subtle gold particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#D4AF37]"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [0, -15 - Math.random() * 15],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Main gold atmospheric glow */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full opacity-[0.08] blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.7) 0%, rgba(212,175,55,0.1) 70%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ULTRA-PREMIUM HERO SECTION */}
      <section id="professor" ref={heroRef} className="relative min-h-[100vh] py-28 lg:py-0 flex items-center overflow-hidden bg-[#080608]">
        {/* Premium animated background */}
        <div className="absolute inset-0 z-0">
          {/* Luxury gold patterns */}
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                  style={{
                    height: 1,
                    width: '120%',
                    top: `${i * 12.5}%`,
                    left: '-10%',
                    rotate: Math.random() * 5 - 2.5,
                  }}
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 0.4, scaleX: 1 }}
                  transition={{ duration: 2, delay: 0.1 * i, ease: "easeOut" }}
                />
              ))}
            </div>

            {/* Vertical gold lines */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-[1px] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"
                  style={{
                    height: `${Math.random() * 30 + 20}%`,
                    left: `${i * 7}%`,
                    top: `${Math.random() * 70}%`,
                    opacity: 0.2 + (Math.random() * 0.4)
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 0.3, scaleY: 1 }}
                  transition={{ duration: 1.8, delay: 0.07 * i, ease: "easeOut" }}
                />
              ))}
            </div>
          </div>

          {/* Dynamic atmospheric glow */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full opacity-[0.15] blur-[160px]"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(212,175,55,0.2) 60%, transparent 100%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.22, 0.15],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <motion.div className="lg:col-span-7 lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Luxury badge */}
                <motion.div
                  className="inline-flex items-center mb-6 overflow-hidden"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3 px-4 py-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/20 rounded-full">
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.7 }}
                    >
                      <Star className="w-3.5 h-3.5 text-[#080608]" />
                    </motion.div>
                    <span className="text-sm font-medium bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                      Especialista em Matemática e RLM para Concursos
                    </span>
                  </div>
                </motion.div>

                {/* Title with premium effects */}
                <div className="perspective">
                  <motion.h1
                    className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
                    initial={{ opacity: 0, rotateX: -20 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Prof. <span className="relative inline-block">
                      <span className="absolute inset-0 blur-[20px] bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] opacity-30" />
                      <span className="relative bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                        Yan Ribeiro
                      </span>
                    </span>
                  </motion.h1>

                  <motion.h2
                    className="text-3xl lg:text-4xl font-bold text-white/80 mb-6"
                    initial={{ opacity: 0, rotateX: -20 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Engenheiro, Matemático e Educador
                  </motion.h2>
                </div>

                {/* Luxury animated divider */}
                <motion.div
                  className="relative h-[2px] w-32 my-8 overflow-hidden"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(90deg, transparent, #D4AF37, #F9E077, #D4AF37, transparent)",
                      backgroundSize: "200% 100%"
                    }}
                    animate={{ backgroundPosition: ["0% center", "200% center"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.div>

                <motion.p
                  className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Método exclusivo que <span className="text-[#D4AF37] font-medium">transformou a vida de mais de 5.000 alunos</span> em
                  concursos de alta competitividade. Transformando conceitos complexos em soluções claras e objetivas.
                </motion.p>
              </motion.div>

              {/* Premium Call-to-Actions */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.button
                  className="group relative px-8 py-5 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -5px rgba(212, 175, 55, 0.5)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto]" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[url('/noise-pattern.svg')] bg-repeat mix-blend-overlay" />

                  <div className="relative flex items-center gap-3">
                    <span className="text-[#080608] font-medium">Conhecer cursos</span>
                    <motion.span
                      className="flex items-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowRight className="h-5 w-5 text-[#080608]" />
                    </motion.span>
                  </div>

                  <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-30 group-hover:animate-shine" />
                </motion.button>

                <motion.button
                  className="relative px-8 py-5 rounded-lg border border-[#D4AF37]/30 group overflow-hidden"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(212, 175, 55, 0.1)",
                    borderColor: "rgba(212, 175, 55, 0.6)"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-[#D4AF37]/5 rounded-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative flex items-center gap-2">
                    <span className="text-[#D4AF37] font-medium">Metodologia exclusiva</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ChevronRight className="h-5 w-5 text-[#D4AF37]" />
                    </motion.div>
                  </div>
                </motion.button>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div className="grid grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { value: 5000, suffix: "+", label: "Alunos aprovados", delay: 0 },
                  { value: 98, suffix: "%", label: "Taxa de aprovação", delay: 0.1 },
                  { value: 9, suffix: "+", label: "Anos de experiência", delay: 0.2 },
                  { value: 3, suffix: "+", label: "Formações acadêmicas", delay: 0.3 }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + stat.delay }}
                  >
                    <motion.div
                      className="absolute -inset-4 rounded-lg bg-[#D4AF37]/5 blur-lg z-0"
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-baseline">
                        <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                          <LocalCounter from={0} to={stat.value} duration={2} delay={0.5} />
                        </div>
                        <span className="text-2xl lg:text-3xl font-bold text-[#D4AF37] ml-1">{stat.suffix}</span>
                      </div>
                      <span className="text-white/70">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Professor Image with premium effects */}
            <motion.div className="lg:col-span-5 relative z-10">
              <div className="relative">
                {/* Luxury image container */}
                <motion.div
                  className="relative mx-auto lg:ml-auto lg:mr-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]"
                  initial={{ opacity: 0, scale: 0.9, rotateZ: -5 }}
                  animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 }}
                >
                  {/* Background glow */}
                  <motion.div
                    className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#D4AF37]/30 via-[#F9E077]/20 to-[#D4AF37]/30 blur-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                  />

                  {/* Premium border with animated scanner effect */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 rounded-full border-[1px] border-[#D4AF37]/40" />

                    <motion.div
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent blur-sm"
                      animate={{
                        left: ["-50%", "150%"],
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
                    />

                    {/* Secondary animated ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/0"
                      animate={{
                        scale: [1, 1.05, 1],
                        borderColor: ["rgba(212,175,55,0)", "rgba(212,175,55,0.3)", "rgba(212,175,55,0)"],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </div>

                  {/* Main image */}
                  <div className="absolute inset-[6px] rounded-full overflow-hidden border-[8px] border-[#13121A]">
                    <img
                      src={yan}
                      alt="Professor Yan Ribeiro - Especialista em Matemática"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080608]/80 via-[#080608]/20 to-transparent mix-blend-multiply"></div>
                  </div>

                  {/* Orbital elements */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    {[0, 72, 144, 216, 288].map((degree, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
                        style={{ rotate: degree }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 + (i * 0.1), duration: 0.6 }}
                      >
                        <motion.div
                          className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"
                          whileHover={{ scale: 1.2, backgroundColor: "rgba(212,175,55,0.2)" }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Info cards */}
                <motion.div
                  className="absolute -left-10 top-1/4 bg-[#13121A] rounded-lg shadow-xl p-4 flex items-center gap-3 z-10 border border-[#D4AF37]/20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.3, type: "spring" }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Engenheiro</p>
                    <p className="text-sm text-white/60">UFU</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-10 bottom-1/4 bg-[#13121A] rounded-lg shadow-xl p-4 flex items-center gap-3 z-10 border border-[#D4AF37]/20"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Desde 2014</p>
                    <p className="text-sm text-white/60">Educador Apaixonado</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Premium scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
          style={{ opacity: heroOpacity }}
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
              <ArrowDown className="h-5 w-5 text-[#D4AF37]" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* MATEMÁTICA E RLM SECTION */}
      <section id="matematica" className="py-24 bg-gradient-to-b from-[#0B0A0D] to-[#080608] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
        <div className="absolute -left-64 -bottom-64 w-[40rem] h-[40rem] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider">Abordagem Única</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-5">Matemática e RLM para Concursos</h2>
            <p className="text-xl text-white/70">
              Uma abordagem inovadora e objetiva que transforma conceitos complexos em soluções claras,
              gerando resultados extraordinários em concursos de alta competitividade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Visualização Intuitiva",
                description: "Transformamos fórmulas abstratas em representações visuais que facilitam a compreensão e memorização.",
                icon: <Brain className="w-6 h-6" />,
                ctaText: "",
              },
              {
                title: "Raciocínio Estruturado",
                description: "Desenvolvemos uma sequência lógica de pensamento que permite resolver questões de forma sistemática e eficiente.",
                icon: <Target className="w-6 h-6" />,
              },
              {
                title: "Técnicas de Resolução Rápida",
                description: "Métodos exclusivos para economizar tempo na prova, identificando padrões e atalhos matemáticos.",
                icon: <Zap className="w-6 h-6" />,
              }
            ].map((item: {
              title: string;
              description: string;
              icon: React.ReactElement;
              ctaText?: string;
              items?: string[];
            }, i) => (
              <motion.div
                key={i}
                className="group bg-[#13121A] rounded-xl overflow-hidden shadow-lg border border-[#D4AF37]/10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
                  borderColor: "rgba(212,175,55,0.3)"
                }}
              >
                {/* Premium top accent */}
                <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] w-full"></div>

                {/* Interior glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Card content */}
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8 text-[#D4AF37]" })}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-white/70 mb-6">
                    {item.description}
                  </p>

                  {item.items && (
                    <ul className="space-y-3">
                      {item.items.map((subitem: string, j: number) => (
                        <li key={j} className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mr-3">
                            <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                          </div>
                          <span className="text-white/80 text-sm">{subitem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Premium footer with animation */}
                <div className="border-t border-[#D4AF37]/10 p-4 bg-[#0F0E13] group-hover:bg-[#0F0E13]/80 flex justify-between items-center transition-colors duration-300">
                  <span className="text-[#D4AF37] text-sm font-medium">{item.ctaText || "Ver mais"}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
                  </motion.div>
                </div>

                {/* Subtle corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D4AF37]/10 transform rotate-45 translate-x-1/2 translate-y-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Methodology diagram with animations */}
          <motion.div
            className="bg-[#13121A] rounded-2xl shadow-xl border border-[#D4AF37]/10 overflow-hidden max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-gradient-to-br from-[#D4AF37] to-[#F9E077] p-10 text-[#080608]">
                <h3 className="text-2xl font-bold mb-6">Ciclo de Aprendizagem Avançada</h3>
                <p className="mb-8 text-[#080608]/90">
                  Nossa metodologia circular garante que cada etapa reforce a anterior,
                  criando um ciclo virtuoso de aprendizagem e evolução constante.
                </p>
                <div className="hidden md:block">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#080608]/20 flex items-center justify-center font-semibold">1</div>
                    <span className="font-medium">Diagnóstico Personalizado</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#080608]/20 flex items-center justify-center font-semibold">2</div>
                    <span className="font-medium">Fundamentos Sólidos</span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#080608]/20 flex items-center justify-center font-semibold">3</div>
                    <span className="font-medium">Resolução Estratégica</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#080608]/20 flex items-center justify-center font-semibold">4</div>
                    <span className="font-medium">Avaliação e Aprimoramento</span>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 p-10 bg-[#13121A]">
                <div className="relative h-full flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border-8 border-[#0F0E13] relative flex items-center justify-center">
                    <motion.div
                      className="w-full h-full absolute"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {[0, 90, 180, 270].map((rotation, i) => (
                        <motion.div
                          key={i}
                          className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8"
                          style={{ rotate: rotation }}
                          whileInView={{ scale: [0.8, 1] }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <div className="w-16 h-16 rounded-full bg-[#0F0E13] flex items-center justify-center shadow-md border border-[#D4AF37]/10">
                            {i === 0 && <BookOpen className="w-6 h-6 text-[#D4AF37]" />}
                            {i === 1 && <BookText className="w-6 h-6 text-[#D4AF37]" />}
                            {i === 2 && <Brain className="w-6 h-6 text-[#D4AF37]" />}
                            {i === 3 && <Target className="w-6 h-6 text-[#D4AF37]" />}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    <div className="w-40 h-40 rounded-full bg-[#080608] border-4 border-[#D4AF37]/20 shadow-md flex items-center justify-center">
                      <div className="text-center">
                        <GraduationCap className="w-10 h-10 text-[#D4AF37] mx-auto mb-2" />
                        <p className="font-bold text-white">Método RB</p>
                        <p className="text-xs text-[#D4AF37]">Exclusivo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUEM SOU EU SECTION */}
      <section id="sobre" className="py-24 bg-[#0A090C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
        <div className="absolute -right-64 top-64 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider">Trajetória e Filosofia</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-5">Quem Sou Eu</h2>
            <p className="text-xl text-white/70">
              Educador por vocação, engenheiro por formação e matemático por paixão. Uma história de dedicação
              ao ensino e à transformação de vidas através da educação de qualidade.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img
                  src={yan2}
                  alt="Professor Yan Ribeiro ensinando"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080608] to-transparent opacity-70"></div>

                {/* Experience badges positioned over the image */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { number: "9+", label: "Anos de experiência" },
                      { number: "5000+", label: "Alunos aprovados" },
                      { number: "3+", label: "Formações" }
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-[#13121A]/80 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                      >
                        <div className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                          {item.number}
                        </div>
                        <p className="text-xs text-white/60 mt-1">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-3">
                      <User className="w-4 h-4 text-[#D4AF37]" />
                    </span>
                    Formação Acadêmica
                  </h3>
                  <div className="pl-11 space-y-4">
                    <p className="text-white/80">
                      Graduado em <span className="text-[#D4AF37]">Engenharia Eletrônica e de Telecomunicações</span> pela Universidade Federal de Uberlândia - UFU, em <span className="text-[#D4AF37]">Matemática</span> pela Estácio, e pós-graduado em <span className="text-[#D4AF37]">Estatística e Probabilidade</span> pela UNIBF.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-3">
                      <Heart className="w-4 h-4 text-[#D4AF37]" />
                    </span>
                    Trajetória
                  </h3>
                  <div className="pl-11 space-y-4">
                    <p className="text-white/80">
                      Meu instinto genuíno de ensino percorre desde 2014, quando ofertava aulas gratuitas em comunidades carentes, na cidade de Patos de Minas - MG. Desde 2019, estou diariamente conquistando um espaço único, ministrando com propriedade aulas de Raciocínio Lógico Matemático.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-3">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    </span>
                    Filosofia de Ensino
                  </h3>
                  <div className="pl-11">
                    <div className="bg-[#13121A] border border-[#D4AF37]/10 p-6 rounded-lg">
                      <p className="text-white/80 italic">
                        "Para mim, ser professor é compartilhar conhecimento, propagar informação, fazer o outro crescer, mostrar caminhos, dar as mãos... É necessário criar vínculos, conhecer e reconhecer o contexto de cada aluno, suas necessidades e seu repertório de vida, aproximar-se e compreender o outro, o que exige <span className="text-[#D4AF37] font-semibold">AMOR!</span>"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTEÚDOS SECTION */}
      <section id="conteudos" className="py-24 bg-gradient-to-b from-[#0B0A0D] to-[#080608] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
        <div className="absolute -left-64 top-64 w-[40rem] h-[40rem] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider">Material Exclusivo</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-5">Conteúdos</h2>
            <p className="text-xl text-white/70">
              Acesse artigos, videoaulas e materiais desenvolvidos para maximizar seu desempenho
              em concursos públicos com foco na matemática e raciocínio lógico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

            {[
              {
                title: "Artigos Especializados",
                description: "Análises aprofundadas sobre os principais tópicos cobrados em concursos, com técnicas exclusivas de resolução.",
                icon: <FileText className="w-6 h-6" />,
                items: ["Análise de bancas", "Revisões estratégicas", "Comentários de provas recentes"],
                ctaText: "Ver mais"
              },
              {
                title: "Vídeos Didáticos",
                description: "Aulas em formato de vídeo com explicações claras e objetivas sobre os temas mais importantes da matemática.",
                icon: <Play className="w-6 h-6" />,
                items: ["Resoluções passo a passo", "Técnicas de memorização", "Mapas mentais animados"]
              },
              {
                title: "Simulados Comentados",
                description: "Pratique com questões no estilo das principais bancas e receba explicações detalhadas sobre cada alternativa.",
                icon: <CheckCircle className="w-6 h-6" />,
                items: ["Questões inéditas", "Correções personalizadas", "Estatísticas de desempenho"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group bg-[#13121A] rounded-xl overflow-hidden shadow-lg border border-[#D4AF37]/10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
                  borderColor: "rgba(212,175,55,0.3)"
                }}
              >
                {/* Premium top accent */}
                <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] w-full"></div>

                {/* Interior glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Card content */}
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                    {item.icon && React.cloneElement(item.icon, { className: "w-8 h-8 text-[#D4AF37]" })}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-white/70 mb-6">
                    {item.description}
                  </p>

                  {item.items && (
                    <ul className="space-y-3">
                      {item.items.map((subitem, j) => (
                        <li key={j} className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mr-3">
                            <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                          </div>
                          <span className="text-white/80 text-sm">{subitem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>


                {/* Subtle corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D4AF37]/10 transform rotate-45 translate-x-1/2 translate-y-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured content */}
          <motion.div
            className="bg-[#13121A] rounded-2xl shadow-xl border border-[#D4AF37]/10 overflow-hidden max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">

<div className="w-full md:w-2/5 relative">
  {/* Link envolvendo toda a area do vídeo */}
  <a 
    href="https://www.youtube.com/watch?v=OtCkEKheBeI" 
    target="_blank" 
    rel="noopener noreferrer"
    className="block aspect-video bg-[#0F0E13] rounded-xl overflow-hidden relative group cursor-pointer"
  >
    <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
    
    <img
      src={image}
      alt="Aula destaque"
      className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
    />
    
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Play className="w-6 h-6 text-[#080608] ml-1" />
      </motion.div>
    </div>
    
    {/* Texto de visualização que aparece no hover */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#080608]/70 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all z-20 flex items-center gap-2">
      <Youtube className="w-4 h-4 text-[#D4AF37]" />
      <span className="text-white text-sm">Assistir no YouTube</span>
    </div>
  </a>
</div>

                <div className="w-full md:w-3/5">
  <h3 className="text-2xl font-bold text-white mb-4">Conteúdo em Destaque</h3>
  <h4 className="text-[#D4AF37] text-lg mb-4">Raciocínio Lógico para Concursos: Técnicas Avançadas de Resolução Rápida</h4>
  <p className="text-white/70 mb-6">
    Nesta aula exclusiva, apresento métodos inéditos para resolver questões de lógica em até 50% menos tempo,
    utilizando padrões visuais e técnicas de simplificação que desenvolvi ao longo de minha experiência.
  </p>

  <div className="flex flex-wrap gap-3 mb-6">
    <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs rounded-full">Raciocínio Lógico</span>
    <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs rounded-full">Técnicas Avançadas</span>
    <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs rounded-full">Resolução Rápida</span>
  </div>

  <div className="flex items-center gap-6">
    {/* Botão transformado em link para o vídeo específico */}
    <motion.a
      href="https://www.youtube.com/watch?v=OtCkEKheBeI"
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] rounded-lg text-[#080608] font-medium text-sm flex items-center gap-2"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Play className="w-4 h-4" />
      Assistir agora
    </motion.a>

    {/* Botão adicional para o canal */}
    <motion.a
      href="https://www.youtube.com/@professoryanribeiro"
      target="_blank"
      rel="noopener noreferrer"
      className="px-5 py-3 border border-[#D4AF37]/30 rounded-lg text-[#D4AF37] font-medium text-sm flex items-center gap-2"
      whileHover={{ scale: 1.03, backgroundColor: 'rgba(212,175,55,0.1)' }}
      whileTap={{ scale: 0.97 }}
    >
      <Youtube className="w-4 h-4" />
      Ver canal completo
    </motion.a>
  </div>
</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

  {/* Featured Course Section - Design Premium */}
<motion.div 
  className="bg-gradient-to-br from-[#13121A] to-[#0A090C] rounded-2xl border border-[#D4AF37]/20 overflow-hidden shadow-2xl mt-24 relative"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* Background decorative elements */}
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#D4AF37]/30 blur-3xl"></div>
    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#D4AF37]/20 blur-3xl"></div>
  </div>
  
  {/* Gold accents */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-[#D4AF37]/80 to-transparent"></div>
  
  <div className="flex flex-col lg:flex-row">
    {/* Image container - enhanced */}
    <div className="lg:w-2/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/40 via-[#D4AF37]/20 to-transparent mix-blend-overlay z-10"></div>
      
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 bg-[url('/math-patterns.svg')] bg-repeat opacity-20"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 50, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      
      {/* Enhanced image effects */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-48 h-48 rounded-full border border-[#D4AF37]/30 flex items-center justify-center">
          <div className="w-36 h-36 rounded-full border-2 border-[#D4AF37]/20 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-[#D4AF37]/10 backdrop-blur-sm flex items-center justify-center">
              <motion.div
                className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                <BookOpen className="w-6 h-6 text-[#080608]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <img 
        src="/math-course-image.jpg" 
        alt="Curso de Matemática para Concursos" 
        className="w-full h-full object-cover"
        style={{ minHeight: "400px" }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = yan;
        }}
      />
      
      {/* Improved gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080608] via-[#080608]/50 to-transparent z-5"></div>
      
      {/* Premium course badge */}
      <div className="absolute top-4 right-4 z-20">
        <motion.div 
          className="flex items-center gap-2 bg-[#D4AF37] px-4 py-2 rounded-full shadow-lg"
          whileHover={{ y: -3, boxShadow: "0 15px 30px -5px rgba(212,175,55,0.5)" }}
        >
          <Star className="w-4 h-4 text-[#080608]" />
          <span className="text-xs font-bold text-[#080608]">DESTAQUE</span>
        </motion.div>
      </div>
      
      {/* Course stats */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#0A090C]/80 backdrop-blur-sm border border-[#D4AF37]/10 rounded-lg p-3 text-center">
            <div className="text-[#D4AF37] text-lg font-bold">200+</div>
            <div className="text-white/60 text-xs">Aulas</div>
          </div>
          
          <div className="bg-[#0A090C]/80 backdrop-blur-sm border border-[#D4AF37]/10 rounded-lg p-3 text-center">
            <div className="text-[#D4AF37] text-lg font-bold">98%</div>
            <div className="text-white/60 text-xs">Aprovação</div>
          </div>
          
          <div className="bg-[#0A090C]/80 backdrop-blur-sm border border-[#D4AF37]/10 rounded-lg p-3 text-center">
            <div className="text-[#D4AF37] text-lg font-bold">5.0</div>
            <div className="text-white/60 text-xs">Avaliação</div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Content container - enhanced */}
    <div className="lg:w-3/5 p-8 lg:p-12 relative">
      {/* Premium corner accents */}
      <div className="absolute top-4 right-4 w-16 h-16">
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/30 rounded-tr-lg"></div>
      </div>
      <div className="absolute bottom-4 left-4 w-16 h-16">
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/30 rounded-bl-lg"></div>
      </div>
      
      {/* Course title with fancy styling */}
      <div className="mb-8">
        <motion.div 
          className="inline-flex items-center mb-4 px-3 py-1 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <GraduationCap className="w-4 h-4 text-[#D4AF37] mr-2" />
          <span className="text-xs text-[#D4AF37] font-medium">Curso Especializado</span>
        </motion.div>
        
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">
          Matemática para 
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent"> Concursos Públicos</span>
        </h3>
        
        <div className="flex items-center gap-4 mb-6 text-sm">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-white/70">Prof. Yan Ribeiro</span>
          </div>
          
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40"></div>
          
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-white/70">120 horas</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-[#D4AF37]/5 to-[#D4AF37]/0 px-5 py-4 rounded-lg border-l-2 border-[#D4AF37]/30 mb-8">
          <p className="text-white/90">
            Um programa <span className="text-[#D4AF37] font-medium">abrangente e especializado</span> projetado para preparar os estudantes para dominar os desafios 
            matemáticos encontrados nas provas de concursos públicos, com técnicas exclusivas do Prof. Yan Ribeiro.
          </p>
        </div>
      </div>
      
      {/* Features with improved styling */}
      <div className="space-y-5 mb-10">
        <motion.div 
          className="flex items-start gap-4 group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:bg-[#D4AF37]/20 transition-colors">
            <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Professor especializado</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Instrutor altamente qualificado, com expertise específica em matemática para concursos públicos.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-4 group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:bg-[#D4AF37]/20 transition-colors">
            <BookOpen className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Conteúdo completo</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Abrange todo o espectro da matemática cobrada em concursos: aritmética, álgebra, geometria, estatística e raciocínio lógico.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-start gap-4 group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex-shrink-0 flex items-center justify-center mt-0.5 group-hover:bg-[#D4AF37]/20 transition-colors">
            <Target className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Estratégias e técnicas</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Métodos práticos para otimizar tempo de resposta, identificar padrões e evitar armadilhas comuns.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Premium call-to-action buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <motion.a
          href="https://pay.hotmart.com/F83685898D?bid=1742817343922"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 rounded-xl overflow-hidden shadow-xl"
          whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -5px rgba(212,175,55,0.4)" }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto]" />
          <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:animate-shine" />
          
          <div className="relative flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-[#080608]" />
            <span className="text-[#080608] font-semibold">Comprar Agora</span>
          </div>
        </motion.a>
        
        <motion.a
          href="#"
          className="group relative px-8 py-4 rounded-xl border border-[#D4AF37]/30 overflow-hidden"
          whileHover={{ scale: 1.03, backgroundColor: "rgba(212,175,55,0.1)" }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="absolute inset-0 bg-[#D4AF37]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          
          <div className="relative flex items-center gap-3">
            <Eye className="w-5 h-5 text-[#D4AF37]" />
            <a 
              href="https://wa.me/5577998663437"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-[#D4AF37] font-medium flex items-center gap-1"
            >
              Mais informações
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.a>
      </div>
      
      {/* Social proof - optional addition */}
      <div className="mt-10 pt-6 border-t border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-[#13121A] bg-[#0F0E13] flex items-center justify-center text-xs font-bold text-[#D4AF37]">
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <div className="text-sm">
            <p className="text-white font-medium">+2500 alunos matriculados</p>
            <p className="text-white/50 text-xs">Última atualização: Março 2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>

      {/* MATERIAIS DE ESTUDO SECTION */}
      <section id="materiais" className="py-24 bg-gradient-to-b from-[#0B0A0D] to-[#080608] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
        <div className="absolute -left-64 -bottom-64 w-[40rem] h-[40rem] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider">Recursos Didáticos</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-5">Materiais de Estudo</h2>
            <p className="text-xl text-white/70">
              Acesse materiais de estudo exclusivos, desenvolvidos para maximizar seu desempenho em concursos públicos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Apostilas",
                description: "Materiais completos e atualizados, com teoria e exercícios para fixação.",
                icon: <BookOpen className="w-6 h-6" />,
                items: ["Teoria detalhada", "Exercícios resolvidos", "Dicas de estudo"],
                ctaText: ""
              },
              {
                title: "Mapas Mentais",
                description: "Mapas mentais para facilitar a memorização e revisão dos conteúdos.",
                icon: <FileCheck className="w-6 h-6" />,
                items: ["Mapas coloridos", "Estrutura lógica", "Fácil memorização"]
              },
              {
                title: "Simulados",
                description: "Simulados completos para testar seus conhecimentos e se preparar para a prova.",
                icon: <FileCheck className="w-6 h-6" />,
                items: ["Questões inéditas", "Correção detalhada", "Estatísticas de desempenho"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group bg-[#13121A] rounded-xl overflow-hidden shadow-lg border border-[#D4AF37]/10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
                  borderColor: "rgba(212,175,55,0.3)"
                }}
              >
                {/* Premium top accent */}
                <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] w-full"></div>

                {/* Interior glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Card content */}
                <div className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                    {React.cloneElement(item.icon, { className: "w-8 h-8 text-[#D4AF37]" })}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-white/70 mb-6">
                    {item.description}
                  </p>

                  {item.items && (
                    <ul className="space-y-3">
                      {item.items.map((subitem, j) => (
                        <li key={j} className="flex items-center">
                          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mr-3">
                            <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                          </div>
                          <span className="text-white/80 text-sm">{subitem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

            

                {/* Subtle corner accent */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D4AF37]/10 transform rotate-45 translate-x-1/2 translate-y-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>

        
        </div>
      </section>

      {/* CASES DE SUCESSO SHOWCASE SECTION */}
      <section id="cases" className="py-24 bg-gradient-to-b from-[#0B0A0D] to-[#080608] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
        <div className="absolute -right-64 top-64 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider">Histórias de sucesso</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-5">Cases de Aprovação</h2>
            <p className="text-xl text-white/70">
              Veja alguns dos alunos que transformaram seus estudos e conquistaram a aprovação com nosso método exclusivo de ensino.
            </p>
          </motion.div>

          {/* Case Study Carousel */}
          <CaseStudyCarousel />

          {/* Stats Display */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { value: 98, suffix: "%", label: "Taxa de aprovação" },
              { value: 120, suffix: "+", label: "Primeiros lugares" },
              { value: 300, suffix: "+", label: "Aprovações em 2024" },
              { value: 5000, suffix: "+", label: "Alunos aprovados" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="bg-[#13121A] rounded-xl p-6 border border-[#D4AF37]/10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
                  borderColor: "rgba(212,175,55,0.3)"
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent mb-2 flex items-baseline">
                    <LocalCounter from={0} to={stat.value} duration={2} delay={0.3} />
                    <span className="ml-1">{stat.suffix}</span>
                  </div>
                  <p className="text-white/60">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#cursos"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] font-semibold rounded-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(212,175,55,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div
                className="absolute top-0 -left-full h-full w-full bg-white/20 skew-x-12"
                animate={{ left: ['100%', '-100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              />
              <Trophy className="w-5 h-5" />
              <span className="relative z-10">Seja o próximo caso de sucesso</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default ProfYan;