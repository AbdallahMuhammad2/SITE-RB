import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  motion, useScroll, useTransform, useMotionValue, AnimatePresence,
  useSpring, useInView, animate
} from 'framer-motion';
import {
  CheckCircle, ArrowRight, Star, BookOpen, Download, Play,
  GraduationCap, Target, FileCheck, TrendingUp, Brain,
  BookText, Medal, Glasses, User, FileText, ShieldCheck,
  MessageSquare, HeartHandshake, Pen, Quote, Trophy, ChevronRight, ChevronLeft, Plus, Menu, Clock
} from 'lucide-react';

// Import your images
import heroImage from '../images/prof-paula.jpeg'; // You'll need this image


// Scrolling Counter Animation component
const Counter: React.FC<{ from?: number; to: number; duration?: number; delay?: number }> = ({ from = 0, to, duration = 1.5, delay = 0 }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration,
      delay,
      onUpdate(value) {
        node.textContent = Math.round(value).toString();
      },
    });

    return () => controls.stop();
  }, [from, to, duration, delay]);

  return <span ref={nodeRef}>{from}</span>;
};

// Glowing Button Component
const GlowButton: React.FC<{ href: string; children: React.ReactNode; primary?: boolean; className?: string; delay?: number }> = ({ href, children, primary = true, className = "", delay = 0 }) => (
  <motion.a
    href={href}
    className={`px-8 py-4 rounded-lg flex items-center gap-3 text-base font-semibold whitespace-nowrap ${primary
        ? "bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
        : "bg-transparent border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37]/5"
      } transition-all relative overflow-hidden ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {primary && (
      <motion.div
        className="absolute -left-full top-0 w-full h-full bg-white/20 skew-x-12"
        animate={{ left: ['100%', '-100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
      />
    )}
    <span className="relative z-10">{children}</span>
  </motion.a>
);

// Premium Card Component
interface PremiumCardProps {
  title: string;
  description: string;
  icon: React.ReactElement;
  features?: string[];
  cta?: string;
  highlight?: string;
  price?: string;
  url: string;
  index?: number;
}

const PremiumCard = ({
  title,
  description,
  icon,
  features = [],
  cta = "Saiba mais",
  highlight,
  price,
  url,
  index = 0
}: PremiumCardProps) => (
  <motion.div
    className="bg-[#13121A] rounded-xl overflow-hidden border border-[#D4AF37]/10 shadow-xl flex flex-col relative group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.1 * index }}
    whileHover={{
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
      borderColor: "rgba(212,175,55,0.3)"
    }}
  >
    {highlight && (
      <div className="absolute top-5 right-0 z-10">
        <div className="bg-[#D4AF37] text-[#080608] text-xs font-bold px-4 py-1.5 rounded-l-full shadow-lg">
          {highlight}
        </div>
      </div>
    )}

    {/* Card top shine effect */}
    <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] w-full"></div>

    {/* Hover gradient overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    />

    <div className="p-8 flex-grow">
      <div className="w-16 h-16 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
        {React.cloneElement(icon, { className: "w-8 h-8 text-[#D4AF37]" })}
      </div>

      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
        {title}
      </h3>

      <p className="text-white/70 mb-6">
        {description}
      </p>

      {features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="mt-1">
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>

    {price && (
      <div className="px-8 pb-6">
        <div className="flex items-baseline mb-6">
          <span className="text-3xl font-bold text-white">{price}</span>
          <span className="text-white/50 ml-2 text-sm">à vista</span>
        </div>
      </div>
    )}

    <div className="border-t border-[#D4AF37]/10 p-5 bg-[#0F0E13] flex justify-between items-center">
      <a
        href={url}
        className="w-full text-center py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] rounded-lg font-medium flex items-center gap-2 justify-center hover:shadow-lg transition-all"
      >
        {cta}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </motion.div>
);

// Testimonial Component
interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, image, delay = 0 }) => (
  <motion.div
    className="bg-[#13121A] rounded-xl border border-[#D4AF37]/20 overflow-hidden shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{
      y: -8,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6)",
      borderColor: "rgba(212,175,55,0.3)"
    }}
  >
    <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077]"></div>
    <div className="p-8">
      <div className="flex gap-4 items-center mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D4AF37]/20">
          <img
            src={image || "https://via.placeholder.com/100?text=Aluno"}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-[#D4AF37]">{role}</p>
        </div>
      </div>

      <div className="mb-4">
        <Quote className="w-10 h-10 text-[#D4AF37]/30" />
      </div>

      <p className="text-white/80 italic">{quote}</p>
    </div>
  </motion.div>
);

// Section Heading Component
interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description: string;
  center?: boolean;
  dark?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, description, center = true, dark = false }) => (
  <motion.div
    className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.span
      className={`text-sm font-medium ${dark ? 'text-[#D4AF37]/80' : 'text-[#D4AF37]'} uppercase tracking-wider relative inline-block`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {subtitle}
      <motion.span
        className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.span>

    <motion.h2
      className={`text-4xl md:text-5xl font-bold ${dark ? 'text-[#080608]' : 'text-white'} mt-3 mb-5`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {title}
    </motion.h2>

    <motion.p
      className={`text-xl ${dark ? 'text-[#080608]/70' : 'text-white/70'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      {description}
    </motion.p>
  </motion.div>
);

// Feature Box Component
interface FeatureBoxProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  index?: number;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, description, index = 0 }) => (
  <motion.div
    className="bg-[#13121A] rounded-xl p-6 border border-[#D4AF37]/10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.3)" }}
  >
    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-4">
      {React.cloneElement(icon, { className: "w-6 h-6 text-[#D4AF37]" })}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-white/70 text-sm">{description}</p>
  </motion.div>
);

// Componente de Navegação Premium para a página da Professora Paula
const PremiumNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Detecta scroll para aplicar efeitos de transparência
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 80);
      
      // Detecta seção ativa baseada no scroll
      const sections = ["home", "sobre", "cursos", "depoimentos", "faq"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "cursos", label: "Cursos" },
    { id: "depoimentos", label: "Depoimentos" },
    { id: "faq", label: "FAQ" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setActiveSection(sectionId);
  };

  return (
    <motion.nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#080608]/95 backdrop-blur-lg border-b border-[#D4AF37]/10"
          : "py-6 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.03 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F9E077] flex items-center justify-center shadow-lg">
              <Pen className="w-5 h-5 text-[#080608]" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Profa. <span className="text-[#D4AF37]">Paula</span></h1>
              <p className="text-xs text-white/60">Português & Redação</p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all relative ${
                activeSection === item.id
                  ? "text-[#D4AF37]"
                  : "text-white/70 hover:text-white"
              }`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                  layoutId="activeIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
          
          {/* Botão CTA */}
          <motion.a
            href="https://pay.kiwify.com.br/aAsUbOm" 
            className="ml-4 px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] rounded-lg text-sm font-semibold flex items-center gap-2 shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute -left-full top-0 w-full h-full bg-white/20 skew-x-12"
              animate={{ left: ["100%", "-100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
            <span className="relative z-10">Matricule-se</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37]"
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="w-5 h-5" />
        </motion.button>
      </div>
    </motion.nav>
  );
};

// Main Home Component
const Home = () => {
  // For parallax scroll effects
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse tracking for interactive elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Refs for sections
  const heroRef = useRef(null);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Substitua o useEffect existente com este código mais robusto

useEffect(() => {
  // Seletores mais abrangentes para encontrar o navbar principal
  const possibleNavbars = [
    document.querySelector('header'),
    document.querySelector('nav:not([class*="z-[60]"])'),
    document.querySelector('.navbar'),
    document.querySelector('#main-navbar'),
    document.querySelector('header nav'),
    // Seletor mais genérico como último recurso
    ...Array.from(document.querySelectorAll('nav')).filter(nav => 
      !nav.className.includes('z-[60]') && 
      nav !== document.querySelector('nav[class*="z-[60]"]')
    )
  ];
  
  // Array para armazenar elementos que foram modificados para restauração futura
  const modifiedElements: Array<{element: HTMLElement, display: string}> = [];
  
  // Tenta ocultar cada possível navbar
  possibleNavbars.forEach(element => {
    if (element instanceof HTMLElement) {
      // Guarda o estilo display original
      const originalDisplay = element.style.display;
      // Oculta o elemento
      element.style.display = 'none';
      // Adiciona à lista para restauração
      modifiedElements.push({element, display: originalDisplay});
    }
  });
  
  // Aumenta o z-index do navbar da Prof. Paula para garantir precedência
  const profPaulaNav = document.querySelector('nav[class*="z-[60]"]');
  if (profPaulaNav instanceof HTMLElement) {
    profPaulaNav.style.zIndex = '1000';
  }
  
  // Adiciona CSS global para maior garantia
  const style = document.createElement('style');
  style.textContent = `
    body > header, 
    body > nav:not([class*="z-[60]"]), 
    .navbar, 
    #main-navbar {
      display: none !important;
    }
    nav[class*="z-[60]"] {
      z-index: 1000 !important;
    }
  `;
  document.head.appendChild(style);
  
  // Limpa tudo ao desmontar o componente
  return () => {
    // Restaura os elementos modificados
    modifiedElements.forEach(({element, display}) => {
      element.style.display = display;
    });
    
    // Remove o estilo global
    document.head.removeChild(style);
    
    // Restaura o z-index
    if (profPaulaNav instanceof HTMLElement) {
      profPaulaNav.style.zIndex = '60';
    }
  };
}, []);

  return (
    <div className="relative overflow-hidden bg-[#080608] text-white">
      <PremiumNavigation />
      {/* ULTRA-PREMIUM CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen pt-20 pb-20 flex items-center overflow-hidden bg-[#080608]">
      {/* Cinematic Background Layers */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Layered Gradient Backgrounds */}
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(circle at 30% 30%, rgba(13,12,15,0.9) 0%, rgba(8,6,8,0.98) 70%)',
            mixBlendMode: 'hard-light'
          }}
        />
        
        {/* Animated Nebula Effects */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(ellipse at 30% 20%, rgba(212,175,55,0.2), transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(212,175,55,0.15), transparent 50%)',
              'radial-gradient(ellipse at 40% 30%, rgba(212,175,55,0.15), transparent 60%), radial-gradient(ellipse at 60% 50%, rgba(212,175,55,0.1), transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        {/* Dynamic Particle System */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 3 + 1;
            const depth = Math.random();
            
            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: depth > 0.9 ? '#D4AF37' : 'rgba(255,255,255,0.5)',
                  opacity: depth * 0.7,
                  filter: `blur(${depth < 0.3 ? '1px' : '0px'})`
                }}
                animate={{
                  y: [0, -((Math.random() * 50) + 10), 0],
                  x: [0, ((Math.random() - 0.5) * 20), 0],
                  opacity: [depth * 0.2, depth * 0.7, depth * 0.2]
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 15
                }}
              />
            );
          })}
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Premium Badge */}
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-2 rounded-full text-[#D4AF37] font-medium tracking-wider uppercase text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                Educação de Excelência
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="block">Domine o </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37]">
                Português
              </span>
              <span className="block">e conquiste sua </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37]">
                Aprovação
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-xl text-white/70 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Prepare-se para concursos públicos com a metodologia exclusiva da{' '}
              <span className="text-[#D4AF37] font-semibold">
                Profa. Paula Barreto
              </span>
              , especialista em Língua Portuguesa e Redação.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <a 
                href="https://pay.kiwify.com.br/aAsUbOm" 
                className="group bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
              >
                <BookText className="w-5 h-5" />
                Curso de Português
                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
              </a>
              <a 
                href="https://pay.kiwify.com.br/GoNdIir" 
                className="group border border-[#D4AF37]/30 text-[#D4AF37] px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Curso de Redação
                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {[
                { value: 3000, suffix: "+", label: "Alunos aprovados", icon: User },
                { value: 98, suffix: "%", label: "Taxa de aprovação", icon: Trophy },
                { value: 12, suffix: "+", label: "Anos de experiência", icon: Star },
                { value: 1200, suffix: "+", label: "Questões resolvidas", icon: CheckCircle }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:scale-105 transition-transform"
                >
                  <div className="flex justify-center items-center mb-2">
                    <stat.icon className="w-6 h-6 text-[#D4AF37] mr-2" />
                    <div className="text-2xl font-bold text-white">
                      <Counter from={0} to={stat.value} delay={1.5 + index * 0.2} />
                      {stat.suffix}
                    </div>
                  </div>
                  <p className="text-white/50 text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="relative max-w-md w-full">
              <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-3xl blur-2xl"></div>
              <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/30">
                <img 
                  src={heroImage} 
                  alt="Professora Paula Barreto" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <blockquote className="text-white italic text-lg font-light">
                    "Quem aprende não depende"
                  </blockquote>
                  <p className="text-[#D4AF37] text-sm mt-2">— Lema de vida</p>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div 
                className="absolute -left-10 top-20 bg-black/60 backdrop-blur-lg rounded-xl p-4 border border-[#D4AF37]/30 z-30"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-[#D4AF37]" />
                  <div>
                    <p className="text-white font-bold">Mestre em Letras</p>
                    <p className="text-white/50 text-xs">Especialista em Linguística</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-2 h-4 bg-[#D4AF37] rounded-full animate-bounce"></div>
        </motion.div>
      </motion.div>
    </section>

      {/* CURSOS SECTION - DRAMATIC PRESENTATION */}
      <section id="cursos" className="py-24 bg-gradient-to-b from-[#0A090C] to-[#080608] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
        <div className="absolute -left-64 bottom-0 w-[40rem] h-[40rem] bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            subtitle="Preparação Completa"
            title="Cursos Especializados"
            description="Desenvolva as habilidades necessárias para dominar a Língua Portuguesa e Redação e conquistar pontuações máximas em concursos públicos."
          />

          {/* Showcased Courses with Premium Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Course 1 - Portuguese */}
            <PremiumCard
              title="Curso de Português Online"
              description="Domine a gramática, interpretação de textos e estruturação de respostas para provas e concursos públicos."
              icon={<BookText />}
              features={[
                "Aulas ao vivo e gravadas para estudar no seu ritmo",
                "Apostila teórica com conteúdos explicados de forma clara",
                "Listas de questões objetivas e abertas para fixar o aprendizado"
              ]}
              highlight="Mais Popular"
              price="R$ 147,00"
              cta="Quero me inscrever"
              url="https://pay.kiwify.com.br/aAsUbOm"
              index={0}
            />

            {/* Course 2 - Writing */}
            <PremiumCard
              title="Curso de Redação Online"
              description="Aprenda técnicas avançadas para elaborar textos dissertativos e aumente sua pontuação nas provas discursivas."
              icon={<FileText />}
              features={[
                "Aulas ao vivo com especialista em redação",
                "Correção de redações para aprender com seus erros",
                "Acompanhamento individualizado para progresso real"
              ]}
              highlight="Recomendado"
              price="R$ 247,00"
              cta="Quero me inscrever"
              url="https://pay.kiwify.com.br/GoNdIir"
              index={1}
            />
          </div>

          {/* Benefits section */}
          <div className="mt-24">
            <SectionHeading
              subtitle="Diferenciais"
              title="Por que escolher nossos cursos?"
              description="Metodologia exclusiva desenvolvida por uma mestre em Letras, focada em resultados práticos e aprovação."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureBox
                icon={<Target />}
                title="Método Direcionado"
                description="Conteúdo focado exatamente no que é cobrado nas provas, sem perda de tempo com temas irrelevantes."
                index={0}
              />

              <FeatureBox
                icon={<Brain />}
                title="Aprendizagem Ativa"
                description="Exercícios práticos e situações reais de prova para fixar o conhecimento de forma efetiva."
                index={1}
              />

              <FeatureBox
                icon={<ShieldCheck />}
                title="Garantia de Qualidade"
                description="Material didático constantemente atualizado e baseado nas últimas tendências de concursos."
                index={2}
              />

              <FeatureBox
                icon={<TrendingUp />}
                title="Resultados Comprovados"
                description="Milhares de alunos aprovados em concursos públicos com as maiores notas em português e redação."
                index={3}
              />
            </div>
          </div>
        </div>
      </section>
      <SobreProfPaula />

      {/* TESTIMONIALS SECTION */}
<section id="depoimentos" className="py-24 bg-[#0A090C] relative overflow-hidden">
  {/* Animated Background Layers */}
  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
  <motion.div 
    className="absolute -right-64 top-64 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-3xl"
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, 10, 0],
      opacity: [0.2, 0.3, 0.2]
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <div className="container mx-auto px-4 relative z-10">
    <SectionHeading
      subtitle="Histórias de Sucesso"
      title="Depoimentos de Alunos"
      description="Veja o que dizem os alunos que transformaram seus estudos e conquistaram a aprovação em concursos públicos após aprenderem com minha metodologia."
    />

    {/* Ultra Premium Testimonial Gallery */}
    <div className="relative max-w-6xl mx-auto">
      {/* Decorative Animated Elements */}
      <motion.div
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-[#D4AF37]/30"
        animate={{ 
          rotate: 360,
          borderColor: ['rgba(212,175,55,0.3)', 'rgba(212,175,55,0.5)', 'rgba(212,175,55,0.3)']
        }}
        transition={{ 
          duration: 60, 
          repeat: Infinity, 
          ease: "linear",
          borderColor: { repeat: Infinity, duration: 10 }
        }}
      />
      <motion.div
        className="absolute -right-10 top-20 w-28 h-28 rounded-full border border-[#D4AF37]/20"
        animate={{ 
          rotate: -360,
          borderColor: ['rgba(212,175,55,0.2)', 'rgba(212,175,55,0.4)', 'rgba(212,175,55,0.2)']
        }}
        transition={{ 
          duration: 45, 
          repeat: Infinity, 
          ease: "linear",
          borderColor: { repeat: Infinity, duration: 10 }
        }}
      />

      {/* 3D Carousel */}
      <div className="py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Testimonial 1 - Premium Version with Score Badge */}
          <motion.div
            className="bg-gradient-to-br from-[#13121A] to-[#1E1C24] rounded-2xl border border-[#D4AF37]/20 overflow-hidden shadow-2xl relative group"
            whileHover={{
              y: -12,
              boxShadow: "0 30px 60px -15px rgba(212,175,55,0.2)",
              borderColor: "rgba(212,175,55,0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077]"></div>

            {/* Score badge with enhanced hover effect */}
            <motion.div 
              className="absolute top-5 right-5 z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex flex-col items-center justify-center backdrop-blur-sm">
                  <span className="text-[#D4AF37] text-xs font-medium">Nota</span>
                  <span className="text-white font-bold text-lg">96.7</span>
                </div>
              </div>
            </motion.div>

            <div className="p-8 relative">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute -top-2 -left-2" />
              </div>

              <p className="text-white/80 italic mb-8 text-lg leading-relaxed relative z-10">
                "A metodologia da Professora Paula transformou minha forma de estudar português. Consegui nota máxima na prova discursiva do TRT e conquistei minha aprovação!"
              </p>

              <div className="flex items-center gap-5">
                <motion.div 
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=256"
                    alt="Marina Almeida"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div>
                  <h4 className="font-bold text-white text-lg">Marina Almeida</h4>
                  <p className="text-[#D4AF37]">Analista Judiciária</p>
                  <p className="text-white/50 text-sm">Aprovada em 2º lugar</p>
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 opacity-5"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.05, 1, 0.95, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <Trophy className="w-full h-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial 2 - With Highlighted Text */}
          <motion.div
            className="bg-gradient-to-br from-[#13121A] to-[#1E1C24] rounded-2xl border border-[#D4AF37]/20 overflow-hidden shadow-2xl relative group"
            whileHover={{
              y: -12,
              boxShadow: "0 30px 60px -15px rgba(212,175,55,0.2)",
              borderColor: "rgba(212,175,55,0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077]"></div>

            {/* Position badge with enhanced hover effect */}
            <motion.div 
              className="absolute top-5 right-5 z-10"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 bg-[#13121A] border border-[#D4AF37]/30 rounded-full px-3 py-1.5 shadow-lg">
                <Trophy className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-white font-bold text-xs">1º Lugar</span>
              </div>
            </motion.div>

            <div className="p-8 relative">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute -top-2 -left-2" />
              </div>

              <p className="text-white/80 italic mb-8 text-lg leading-relaxed">
                "Impossível falar de gramática sem mencionar a Profa. Paula. Seu método
                <span className="text-[#D4AF37] font-medium"> simplifica os conceitos mais complexos</span> e foca no que realmente cai na prova. Foi essencial para minha aprovação."
              </p>

              <div className="flex items-center gap-5">
                <motion.div 
                  className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <img
    src="https://randomuser.me/api/portraits/women/65.jpg"
    alt="Juliana Silva"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div>
                  <h4 className="font-bold text-white text-lg">Juliana Silva</h4>
                  <p className="text-[#D4AF37]">Servidora Pública</p>
                  <p className="text-white/50 text-sm">Aprovada em 1º lugar</p>
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 opacity-5"
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.05, 1, 0.95, 1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <Medal className="w-full h-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial 3 - Call to Action */}
          <motion.div
            className="bg-gradient-to-br from-[#13121A] to-[#1E1C24] rounded-2xl border border-[#D4AF37]/20 overflow-hidden shadow-2xl flex flex-col justify-between group"
            whileHover={{
              y: -12,
              boxShadow: "0 30px 60px -15px rgba(212,175,55,0.2)",
              borderColor: "rgba(212,175,55,0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077]"></div>

            <div className="p-8">
              <div className="mb-6">
                <MessageSquare className="w-12 h-12 text-[#D4AF37]/20" />
              </div>

              <p className="text-white/80 italic mb-8 text-lg leading-relaxed">
                Está esperando o que para garantir sua aprovação?
                <span className="text-[#D4AF37] font-medium"> Comece agora mesmo a estudar com a Profa. Paula!</span>
              </p>
            </div>

            {/* Call to action buttons with enhanced hover and shine effects */}
            <div className="p-6 border-t border-[#D4AF37]/20 flex items-center justify-center gap-4">
              <motion.a
                href="https://pay.kiwify.com.br/aAsUbOm"
                className="px-8 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] font-semibold rounded-lg flex items-center justify-center gap-3 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-shadow relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shine effect with enhanced animation */}
                <motion.div
                  className="absolute -left-full top-0 w-full h-full bg-white/30 skew-x-12"
                  animate={{ 
                    left: ['100%', '-100%'],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    opacity: { repeat: Infinity, duration: 2 }
                  }}
                />
                <BookText className="w-5 h-5" />
                <span className="relative z-10">Iniciar com Português</span>
              </motion.a>
              
              <motion.a
                href="https://pay.kiwify.com.br/GoNdIir"
                className="px-8 py-5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] font-semibold rounded-lg flex items-center justify-center gap-3 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-shadow relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shine effect with enhanced animation */}
                <motion.div
                  className="absolute -left-full top-0 w-full h-full bg-white/30 skew-x-12"
                  animate={{ 
                    left: ['100%', '-100%'],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    opacity: { repeat: Infinity, duration: 2 }
                  }}
                />
                <FileText className="w-5 h-5" />
                <span className="relative z-10">Iniciar com Redação</span>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Footer note with subtle animation */}
          <motion.div 
            className="col-span-full text-center mt-10 text-white/50 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Acesso imediato ao conteúdo completo. Satisfação garantida ou seu dinheiro de volta em até 7 dias.
          </motion.div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

    
    </div>
  );
};
// Seção "Sobre" Premium para a página da Professora Paula
const SobreProfPaula: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  const achievements = [
    { icon: <GraduationCap />, text: "Licenciada em Letras" },
    { icon: <BookOpen />, text: "Bacharel em Administração" },
    { icon: <Medal />, text: "Especialista em Teoria e Método de ensino" },
    { icon: <Trophy />, text: "Mestre em Letras" },
    { icon: <Brain />, text: "Mestranda em Linguística" },
    { icon: <FileCheck />, text: "Revisora de textos especializada" }
  ];

  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-[#080608] to-[#0A090C] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute left-0 top-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={containerRef} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content: Photo & Stats */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Main photo with premium frame effect */}
            <div className="relative max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-3xl blur-2xl"></div>
              
              {/* Photo frame with golden border - REDUZIDO PARA z-10 */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#D4AF37]/30">
                <img 
                  src={heroImage} 
                  alt="Professora Paula Barreto" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <blockquote className="text-white italic text-lg font-light">
                    "Quem aprende não depende"
                  </blockquote>
                  <p className="text-[#D4AF37] text-sm mt-2">— Lema de vida</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badges separadas para ficarem fora do contexto de empilhamento da foto */}
            <motion.div 
              className="absolute -left-16 top-20 bg-black/70 backdrop-blur-md rounded-xl p-4 border border-[#D4AF37]/30 shadow-lg z-50"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-[#D4AF37]" />
                <div>
                  <p className="text-white font-bold">Mestre em Letras</p>
                  <p className="text-white/50 text-xs">Especialista em Linguística</p>
                </div>
              </div>
            </motion.div>
            
            {/* Experience Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 }}
            >
              {/* Anos de experiência */}
              <div className="bg-[#13121A] border border-[#D4AF37]/10 rounded-xl p-5 shadow-lg flex flex-col items-center justify-center text-center hover:border-[#D4AF37]/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-3 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Clock className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-3xl font-bold text-white">10+</h3>
                <p className="text-white/60 text-sm mt-1">Anos de experiência</p>
              </div>
              
              {/* Alunos aprovados */}
              <div className="bg-[#13121A] border border-[#D4AF37]/10 rounded-xl p-5 shadow-lg flex flex-col items-center justify-center text-center hover:border-[#D4AF37]/30 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-3 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <User className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-3xl font-bold text-white">3000+</h3>
                <p className="text-white/60 text-sm mt-1">Alunos aprovados</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Content: Bio & Qualifications */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Section heading */}
            <div>
              <motion.span 
                className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider relative inline-block"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                Conheça sua professora
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.span>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Profa. Paula Barreto
              </motion.h2>
            </div>
            
            {/* Bio text */}
            <motion.div 
              className="space-y-6 text-lg text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p>
                Sou a Professora Paula Barreto, especialista no ensino de Língua Portuguesa e Redação para concursos públicos, vestibulares e ENEM. Com mais de uma década de experiência, desenvolvi métodos que transformam conteúdos complexos em aprendizado eficiente.
              </p>
              
              <p>
                Minha formação acadêmica inclui licenciatura em Letras, bacharelado em Administração, especialização em Teoria e Método de ensino da Língua Portuguesa, mestrado em Letras (cultura, educação e Linguagens) e estou cursando mestrado em Linguística.
              </p>
              
              <p>
                Além da docência, atuo como revisora de textos e elaboro recursos para provas e seleções, o que me mantém sempre atualizada sobre as exigências das bancas examinadoras.
              </p>
              
              <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 italic">
                "Com o lema de vida <span className="text-[#D4AF37] font-medium">Quem aprende não depende</span>, procuro desenvolver a autonomia dos alunos para que possam utilizar bem os recursos linguísticos para uma boa comunicação e para conseguir a tão sonhada aprovação."
              </blockquote>
            </motion.div>
            
            {/* Qualifications grid */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {achievements.map((item, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-lg border border-[#D4AF37]/10 bg-[#13121A]/50"
                  whileHover={{ y: -5, borderColor: "rgba(212,175,55,0.3)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                    {React.cloneElement(item.icon, { className: "w-5 h-5 text-[#D4AF37]" })}
                  </div>
                  <p className="text-white text-sm">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA */}
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a 
                href="https://pay.kiwify.com.br/aAsUbOm" 
                className="group bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-black px-8 py-4 rounded-lg font-semibold hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-shadow flex items-center gap-2 relative overflow-hidden w-max"
              >
                <motion.div
                  className="absolute -left-full top-0 w-full h-full bg-white/20 skew-x-12"
                  animate={{ left: ['100%', '-100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
                <BookText className="w-5 h-5" />
                <span className="relative z-10">Aprenda com a Profa. Paula</span>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
// Animated FAQ Component
const AnimatedFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems = [
    {
      question: "Como funciona o curso de Português?",
      answer: "O curso de Português é 100% online e possui aulas gravadas e ao vivo. Você terá acesso a todo o conteúdo teórico, exercícios práticos, simulados e material complementar. Além disso, contará com suporte para tirar dúvidas e acompanhamento personalizado."
    },
    {
      question: "Qual a metodologia utilizada no curso de Redação?",
      answer: "Nossa metodologia exclusiva para redação trabalha com a estruturação clara do texto dissertativo-argumentativo, técnicas de repertório sociocultural, conectivos e elementos coesivos avançados, além de estratégias específicas para cada tipo de prova discursiva. Fazemos correções individualizadas para garantir seu progresso."
    },
    {
      question: "Por quanto tempo terei acesso aos cursos?",
      answer: "Após a compra, você terá acesso por 12 meses a todo o conteúdo do curso, incluindo atualizações que forem realizadas nesse período. O acesso é através de nossa plataforma online, que pode ser acessada de qualquer dispositivo com internet."
    },
    {
      question: "Os cursos têm garantia de satisfação?",
      answer: "Sim! Oferecemos garantia de satisfação de 7 dias. Se você não estiver satisfeito com o curso nesse período, pode solicitar o reembolso integral do valor investido, sem questionamentos."
    },
    {
      question: "Como recebo o certificado de conclusão?",
      answer: "Ao finalizar todas as aulas e atividades do curso, você receberá automaticamente um certificado digital que poderá ser baixado diretamente da plataforma. O certificado contém carga horária e conteúdo programático."
    }
  ];
  
  return (
    <div className="space-y-4">
      {faqItems.map((item, idx) => (
        <motion.div 
          key={idx}
          className={`border border-[#D4AF37]/20 rounded-xl overflow-hidden bg-[#13121A] ${activeIndex === idx ? 'shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 * idx }}
        >
          <motion.button
            className="w-full flex justify-between items-center p-6 text-left"
            onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            whileHover={{ backgroundColor: "rgba(212,175,55,0.05)" }}
          >
            <h3 className="font-semibold text-white text-lg">{item.question}</h3>
            <motion.div 
              className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"
              animate={{ rotate: activeIndex === idx ? 45 : 0 }}
            >
              <Plus className={`w-4 h-4 ${activeIndex === idx ? 'text-[#D4AF37]' : 'text-white/70'}`} />
            </motion.div>
          </motion.button>
          
          <AnimatePresence>
            {activeIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-white/70 border-t border-[#D4AF37]/10">
                  <p>{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Home;