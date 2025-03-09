import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Award, BookOpen, Clock, Star, Trophy, Users,
  ArrowRight, Play, Download, Calendar, CheckCircle, 
  ChevronRight, ChevronLeft, BarChart2, Sparkles,
  Zap, MessageSquare, ArrowUpRight, GraduationCap
} from 'lucide-react';

// Componentes reutilizáveis premium
interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ children, icon, className = "" }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className={`px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-xl 
      text-white font-medium shadow-xl shadow-blue-900/20 flex items-center gap-2 
      relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
      transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
    {icon && <span className="relative z-10">{icon}</span>}
    <span className="relative z-10">{children}</span>
  </motion.button>
);

const SecondaryButton = ({ children, icon, className = "" }: ButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className={`px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl 
      text-white font-medium hover:bg-white/15 transition-all flex items-center gap-2 
      group ${className}`}
  >
    <span>{children}</span>
    {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
  </motion.button>
);

interface StatCardProps {
  icon: React.ReactElement;
  number: string;
  label: string;
  delay?: number;
  light?: boolean;
}

const StatCard = ({ icon, number, label, delay = 0, light = false }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)" }}
    className={`flex flex-col items-center p-8 rounded-2xl ${light 
      ? "bg-white/10 backdrop-blur-sm border border-white/10" 
      : "bg-white shadow-2xl border border-blue-50"}`}
  >
    <div className={`w-16 h-16 rounded-full ${light 
      ? "bg-white/10" 
      : "bg-gradient-to-br from-blue-50 to-indigo-50"} 
      flex items-center justify-center mb-4`}>
      {React.cloneElement(icon, { 
        className: `w-8 h-8 ${light ? "text-white" : "text-blue-600"}` 
      })}
    </div>
    <div className={`font-bold text-4xl ${light 
      ? "text-white" 
      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text"}`}>
      {number}
    </div>
    <div className={light ? "text-white/80 mt-1" : "text-gray-500 mt-1"}>
      {label}
    </div>
  </motion.div>
);

const ProfYan = () => {
  // Refs and animations
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // 3D effect for hero section
  interface MousePosition {
    x: number;
    y: number;
  }

  interface HandleMouseMoveEvent extends React.MouseEvent<HTMLDivElement> {}

  const handleMouseMove = (e: HandleMouseMoveEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  // Testimonials with auto-rotation
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "Aprovado no Banco Central",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      text: "As aulas do Prof. Yan transformaram minha relação com a matemática. Sua didática excepcional simplifica conceitos complexos e criou uma base sólida para minha aprovação."
    },
    {
      name: "Amanda Oliveira",
      role: "Aprovada na Receita Federal",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      text: "Por anos lutei com a matemática sem sucesso. Com o método exclusivo do Prof. Yan, dominei todo o conteúdo em apenas 6 meses e conquistei minha aprovação."
    },
    {
      name: "Rafael Mendes",
      role: "Aprovado no BNDES",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      text: "A abordagem única e as resoluções comentadas fizeram toda a diferença. O Prof. Yan não apenas ensina fórmulas, mas desenvolve um raciocínio matemático que vai além do concurso."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col bg-gray-50">
      {/* ================ HERO SECTION ================ */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Premium animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-indigo-900 to-blue-900">
          {/* Animated particles */}
          <div className="absolute w-full h-full overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i} 
                className="absolute rounded-full bg-white/10"
                style={{
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}/>
          </div>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-indigo-600 rounded-full opacity-20 blur-[120px]"></div>
        </div>

        {/* Main content container */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content - Text with premium animations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white space-y-8"
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md 
                  rounded-full border border-white/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-sm font-medium">Referência Nacional em Matemática</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Professor <span className="bg-gradient-to-r from-blue-400 to-indigo-300 text-transparent bg-clip-text">Yan</span>
              </h1>

              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-white/80 text-sm">4.98/5 (950+ avaliações)</span>
              </div>

              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Transformando a matemática em uma ferramenta poderosa para sua
                <span className="relative inline-block mx-2">
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">
                    aprovação
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-sky-300"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
                em concursos de alto nível.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <PrimaryButton icon={<Play className="w-5 h-5" />}>
                  Aula Demonstrativa
                </PrimaryButton>
                
                <SecondaryButton icon={<ArrowRight className="w-5 h-5" />}>
                  Ver Todos os Cursos
                </SecondaryButton>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap items-center gap-6 pt-6"
              >
                <div className="flex -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=80",
                  ].map((src, i) => (
                    <img 
                      key={i} 
                      src={src} 
                      alt="Aluno" 
                      className="w-10 h-10 rounded-full border-2 border-blue-900 object-cover"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center border-2 border-blue-900">
                    <span className="text-xs font-medium">35k+</span>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  <span className="text-white font-medium">38.500+ alunos</span> já transformaram sua relação com a matemática
                </p>
              </motion.div>
            </motion.div>

            {/* Right content - Premium 3D floating image card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ 
                perspective: "1000px",
                transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`
              }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Enhanced glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-600/20 rounded-2xl blur-3xl opacity-70"></div>
                
                {/* Premium card with layered elements */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute -top-10 -right-10 z-30"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                      <Award className="w-6 h-6 text-yellow-300" />
                      <span className="text-white font-medium">Professor Premiado</span>
                    </div>
                  </motion.div>
                  
                  {/* Main image with premium border */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                    {/* Animated border */}
                    <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-80"
                        style={{ 
                          maskImage: 'linear-gradient(black, black), linear-gradient(to right, black, transparent)',
                          maskSize: '100% 100%, 200% 100%',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center center, top left',
                          maskComposite: 'exclude',
                          WebkitMaskComposite: 'xor'
                        }} />
                    
                    <img
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=90"
                      alt="Professor Yan"
                      className="w-full h-[600px] object-cover"
                    />

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>

                    {/* Stats badge with 3D animation */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-2xl"
                      style={{
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full p-3">
                          <GraduationCap className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase tracking-wide">Alunos Aprovados</p>
                          <p className="text-2xl font-bold text-gray-900">700+</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Experience badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0, duration: 0.6 }}
                      className="absolute -bottom-6 right-12 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl px-5 py-3 shadow-xl"
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-white/90" />
                        <p className="text-sm font-medium text-white">12+ Anos de Experiência</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Premium stats row with animated counters */}
        <div className="absolute bottom-12 left-0 right-0 z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <Trophy />, number: "700+", label: "Aprovados" },
                { icon: <Users />, number: "38K+", label: "Alunos" },
                { icon: <BookOpen />, number: "5", label: "Livros" },
                { icon: <Star />, number: "4.98", label: "Avaliação" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-5 text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">
                      {React.cloneElement(stat.icon, { className: "w-5 h-5 text-white" })}
                    </div>
                    <div className="font-bold text-xl text-white">{stat.number}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Elegant scroll indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs uppercase tracking-wider">Deslize para conhecer</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-3 bg-white/90 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================ ABOUT SECTION ================ */}
      <section className="py-32 relative overflow-hidden bg-white">
        {/* Premium background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-70 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full opacity-70 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Premium section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text font-medium">
                Metodologia Exclusiva
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transformando a <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Matemática</span> 
              <br className="hidden md:block" /> em Instrumento de Aprovação
            </h2>
            
            <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left content - Enhanced image with 3D effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative geometric elements */}
                <div className="absolute -top-8 -left-8 w-28 h-28 border-t-4 border-l-4 border-blue-500 rounded-tl-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-28 h-28 border-b-4 border-r-4 border-indigo-500 rounded-br-3xl"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Professor Yan ensinando"
                    className="w-full h-[500px] object-cover object-center"
                  />

                  {/* Premium overlay with stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent 
                    flex flex-col justify-end p-8">
                    <div className="grid grid-cols-2 gap-5">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl"
                      >
                        <BarChart2 className="w-7 h-7 text-blue-600 mb-2" />
                        <p className="text-sm font-medium text-gray-600">Taxa de aprovação</p>
                        <p className="text-2xl font-bold text-gray-900">97.3%</p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl"
                      >
                        <Calendar className="w-7 h-7 text-blue-600 mb-2" />
                        <p className="text-sm font-medium text-gray-600">Desde</p>
                        <p className="text-2xl font-bold text-gray-900">2011</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Floating certificate element */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: -30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="absolute -top-12 right-12 bg-white rounded-xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Reconhecido</p>
                      <p className="text-sm font-bold text-gray-900">Didática Premium</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right content - Enhanced content with premium design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-gray-900">Uma Abordagem Única e Revolucionária</h3>

              <p className="text-xl text-gray-600 leading-relaxed">
                Com mais de <span className="font-semibold text-gray-800">12 anos de experiência</span>
                </p>
              </motion.div>
            </div>
            </div>
            </section>
            </div>
  );
  };
  export default ProfYan;