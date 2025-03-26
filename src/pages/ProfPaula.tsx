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
  Mail, User, FileText, X, Menu, MessageSquare, Eye, MapPin, HeartHandshake, Heart
} from 'lucide-react';
import paula from '../images/Paula.png';

// ProfPaulaNavigation component with black and gold luxury theme
const ProfPaulaNavigation = () => {
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
      title: "Português e Redação",
      href: "#portugues",
      icon: <BookOpen className="w-4 h-4" />
    },
    {
      title: "Profa. Paula Barreto",
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
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#080608]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
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
                      PB
                    </div>
                  </div>
                  <span className="font-bold text-[#D4AF37]">
                    Profa. Paula Barreto
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-white hover:text-[#D4AF37] transition-colors relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                className="p-2 rounded-lg bg-[#13121A] border border-[#D4AF37]/20"
              >
                {activeMobileMenu ? 
                  <X className="w-6 h-6 text-[#D4AF37]" /> : 
                  <Menu className="w-6 h-6 text-[#D4AF37]" />
                }
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile navigation menu */}
      <AnimatePresence>
        {activeMobileMenu && (
          <motion.div 
            className="fixed inset-0 z-40 bg-[#080608]/95 backdrop-blur-lg pt-20 px-4 pb-6 overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="p-4 rounded-lg bg-[#13121A] border border-[#D4AF37]/10 flex items-center gap-3 text-white hover:border-[#D4AF37]/30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    onClick={() => setActiveMobileMenu(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span>{item.title}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ... keep other utility components unchanged ... */

// Main Page Component with premium design
const ProfPaula = () => {
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
      <ProfPaulaNavigation />
      
      {/* Global background canvas with animated particles - unchanged */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Keep existing background elements unchanged */}
      </div>

      {/* ULTRA-PREMIUM HERO SECTION */}
      <section id="professor" ref={heroRef} className="relative min-h-[100vh] py-28 lg:py-0 flex items-center overflow-hidden bg-[#080608]">
        {/* Premium animated background - unchanged */}
        <div className="absolute inset-0 z-0">
          {/* Keep existing background elements unchanged */}
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
                      Especialista em Português e Redação para Concursos
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
                    Profa. <span className="relative inline-block">
                      <span className="absolute inset-0 blur-[20px] bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] opacity-30" />
                      <span className="relative bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                        Paula Barreto
                      </span>
                    </span>
                  </motion.h1>
                  
                  <motion.h2 
                    className="text-3xl lg:text-4xl font-bold text-white/80 mb-6"
                    initial={{ opacity: 0, rotateX: -20 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Educadora, Linguista e Especialista em Textos
                  </motion.h2>
                </div>

                <motion.p
                  className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Com o lema <span className="text-[#D4AF37] font-medium">"Quem aprende não depende"</span>, desenvolvo a autonomia dos alunos para utilizarem os recursos linguísticos para uma boa comunicação e alcançarem a aprovação.
                </motion.p>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-x-12 gap-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                {[
                  { value: 3000, suffix: "+", label: "Alunos aprovados", delay: 0 },
                  { value: 95, suffix: "%", label: "Taxa de aprovação", delay: 0.1 },
                  { value: 12, suffix: "+", label: "Anos de experiência", delay: 0.2 },
                  { value: 4, suffix: "+", label: "Formações acadêmicas", delay: 0.3 }
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
                          <span>
                            {stat.value}
                          </span>
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
                  
                  {/* Main image */}
                  <div className="absolute inset-[6px] rounded-full overflow-hidden border-[8px] border-[#13121A]">
                    <img
                      src="../../images/Paula.JPEG"
                      alt="Professora Paula Barreto - Especialista em Português"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080608]/80 via-[#080608]/20 to-transparent mix-blend-multiply"></div>
                  </div>
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
                    <p className="text-lg font-bold text-white">Mestre em Letras</p>
                    <p className="text-sm text-white/60">Cultura, educação e linguagens</p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-10 bottom-1/4 bg-[#13121A] rounded-lg shadow-xl p-4 flex items-center gap-3 z-10 border border-[#D4AF37]/20"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">Especialista</p>
                    <p className="text-sm text-white/60">Teoria e Método do Ensino</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTUGUÊS E REDAÇÃO SECTION */}
      <section id="portugues" className="py-24 bg-gradient-to-b from-[#0B0A0D] to-[#080608] relative overflow-hidden">
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
            <h2 className="text-4xl font-bold text-white mt-3 mb-5">Língua Portuguesa e Redação para Concursos</h2>
            <p className="text-xl text-white/70">
              Uma metodologia direcionada que transforma conceitos complexos em soluções claras,
              gerando resultados extraordinários em concursos de alta competitividade.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Domínio da Gramática",
                description: "Conhecimentos gramaticais apresentados de forma prática e objetiva para aplicação direta em questões de concursos.",
                icon: <BookText className="w-6 h-6" />,
                ctaText: "Ver mais",
              },
              {
                title: "Produção Textual",
                description: "Técnicas avançadas para elaboração de textos dissertativos, com estratégias específicas para diferentes tipos de provas discursivas.",
                icon: <FileText className="w-6 h-6" />,
              },
              {
                title: "Interpretação Eficiente",
                description: "Métodos exclusivos para compreensão e análise de textos complexos, identificando com precisão as informações relevantes.",
                icon: <Glasses className="w-6 h-6" />,
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
                {/* Card content structure remains the same */}
                <div className="h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] w-full"></div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-0 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
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
                <div className="border-t border-[#D4AF37]/10 p-4 bg-[#0F0E13] group-hover:bg-[#0F0E13]/80 flex justify-between items-center transition-colors duration-300">
                  <span className="text-[#D4AF37] text-sm font-medium">{item.ctaText || "Ver mais"}</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D4AF37]/10 transform rotate-45 translate-x-1/2 translate-y-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Educadora por vocação, especialista em linguística e apaixonada pelo ensino da língua portuguesa. 
              Uma história de dedicação à educação e transformação de vidas através do poder das palavras.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                      <span className="text-[#D4AF37]">Licenciada em Letras</span>, <span className="text-[#D4AF37]">Bacharel em Administração</span>, <span className="text-[#D4AF37]">Especialista em Teoria e Método de ensino da Língua Portuguesa</span>, <span className="text-[#D4AF37]">Mestre em Letras: cultura, educação em Linguagens</span> e atualmente <span className="text-[#D4AF37]">Mestranda em Linguística</span>.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-3">
                      <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                    </span>
                    Atuação Profissional
                  </h3>
                  <div className="pl-11 space-y-4">
                    <p className="text-white/80">
                      Trabalho com o ensino de Língua Portuguesa e Redação em cursos preparatórios para vestibular/ENEM e concursos. Atuo também como revisora de textos e na elaboração de recursos para provas e seleções.
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
                        "Com o lema <span className="text-[#D4AF37] font-semibold">Quem aprende não depende</span>, procuro desenvolver a autonomia dos alunos para que possam utilizar bem os recursos linguísticos para uma boa comunicação e para conseguir a tão sonhada aprovação."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#13121A] border border-[#D4AF37]/10 rounded-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Um pouco mais sobre mim</h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex-shrink-0 flex items-center justify-center">
                        <Heart className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Paixão pelo ensino</h4>
                        <p className="text-white/70">
                          Dedico-me à educação como vocação, acreditando no poder transformador do conhecimento linguístico na vida dos meus alunos.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex-shrink-0 flex items-center justify-center">
                        <Target className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Foco em resultados</h4>
                        <p className="text-white/70">
                          Trabalho com metodologias direcionadas para garantir que cada aluno desenvolva as habilidades necessárias para conquistar sua aprovação.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex-shrink-0 flex items-center justify-center">
                        <Glasses className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Método diferenciado</h4>
                        <p className="text-white/70">
                          Construo uma base sólida que permite aos alunos se tornarem autônomos no uso dos recursos linguísticos, facilitando a expressão clara de suas ideias.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex-shrink-0 flex items-center justify-center">
                        <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Compromisso com o aluno</h4>
                        <p className="text-white/70">
                          Cada aluno é único e recebe atenção personalizada, com estratégias adaptadas às suas necessidades específicas para maximizar seu potencial.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-[#0F0E13] border-t border-[#D4AF37]/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Quer saber mais?</h4>
                      <p className="text-white/70">Conheça meus cursos e materiais exclusivos</p>
                    </div>
                    <motion.button
                      className="px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] rounded-lg font-medium flex items-center gap-2 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver cursos
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfPaula;
