import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ClipboardCheck, BarChart2, BookOpen, FileText, Brain, CheckCircle2, ArrowRight, Star, Users as UsersIcon, PlayCircle as PlayCircleIcon, TrendingUp, Check as CheckIcon, Headphones as HeadphonesIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface MethodStep {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    gradient: string;
    benefits: string[];
    image?: string;
}

// Enhanced method steps with gradients and optional imagery
const methodSteps: MethodStep[] = [
    {
        icon: <ClipboardCheck />,
        title: "Diagnóstico personalizado",
        description: "Avaliamos seu perfil de aprendizagem, nível atual de conhecimento e áreas que precisam de maior atenção.",
        color: "#D4AF37",
        gradient: "from-amber-400 via-yellow-500 to-amber-600",
        benefits: [
            "Identificação precisa de pontos fortes e fracos",
            "Personalização completa do plano de estudos",
            "Definição clara de objetivos alcançáveis"
        ],
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
    },
    {
        icon: <BarChart2 />,
        title: "Plano de estudos estratégico",
        description: "Desenvolvemos um cronograma otimizado com base nas estatísticas da sua banca e em seu perfil único.",
        color: "#7C3AED",
        gradient: "from-violet-500 via-purple-600 to-violet-700",
        benefits: [
            "Distribuição inteligente de tempo e recursos",
            "Priorização baseada em dados estatísticos",
            "Ajustes contínuos para maximizar resultados"
        ],
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070"
    },
    {
        icon: <BookOpen />,
        title: "Imersão no conteúdo",
        description: "Aulas em vídeo, simulados, resolução de questões e acompanhamento personalizado para absorção máxima.",
        color: "#059669",
        gradient: "from-emerald-400 via-emerald-500 to-teal-600",
        benefits: [
            "Material didático exclusivo e atualizado",
            "Técnicas avançadas de memorização",
            "Abordagem multidisciplinar integrada"
        ],
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073"
    },
    {
        icon: <FileText />,
        title: "Feedback contínuo",
        description: "Avaliações periódicas e relatórios de desempenho para ajustes e otimizações constantes em sua preparação.",
        color: "#E11D48",
        gradient: "from-rose-500 via-red-500 to-rose-600",
        benefits: [
            "Correções personalizadas de simulados",
            "Monitoramento constante de progresso",
            "Identificação e superação de obstáculos"
        ],
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070"
    },
    {
        icon: <Brain />,
        title: "Preparação emocional",
        description: "Mentoria e suporte emocional para lidar com o estresse e a ansiedade associados ao processo de seleção.",
        color: "#3B82F6",
        gradient: "from-blue-400 via-blue-500 to-indigo-600",
        benefits: [
            "Técnicas de controle de ansiedade",
            "Desenvolvimento da resiliência mental",
            "Estratégias para gestão do tempo e energia"
        ],
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2070"
    }
];

// Add this utility function at the top level of your file
const getRGBColor = (color: string) => {
  // Convert hex color to RGB for shadow effects
  if (!color || !color.startsWith('#')) return '0,0,0';
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r},${g},${b}`;
};

// Enhanced animated step card component with premium visuals
const MethodStepCard = React.forwardRef<HTMLDivElement, {
    step: MethodStep,
    index: number,
    currentStep: number,
    setCurrentStep: (index: number) => void,
    scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void
}>(({
    step,
    index,
    currentStep,
    setCurrentStep,
    scrollToRef
}, ref) => {
    const isActive = currentStep === index;
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: false, amount: 0.3 });
    const [isHovered, setIsHovered] = useState(false);
    const isFirstRender = useRef(true);

    // Attach the forwarded ref to the cardRef
    useEffect(() => {
        if (ref && typeof ref === 'function') {
            ref(cardRef.current);
        } else if (ref && 'current' in ref) {
            ref.current = cardRef.current;
        }
    }, [ref]);

    // Mouse tracking for dynamic lighting effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
    };

    // Dynamic light effect based on mouse position
    const spotlightX = useTransform(
        mouseX,
        (val) => `calc(${val}px - var(--spotlight-size) / 2)`
    );
    const spotlightY = useTransform(
        mouseY,
        (val) => `calc(${val}px - var(--spotlight-size) / 2)`
    );
    const spotlightBackground = useMotionTemplate`
      radial-gradient(
        var(--spotlight-size) circle at ${spotlightX} ${spotlightY},
        rgba(255, 255, 255, 0.1),
        transparent 80%
      )
    `;

    // Activate step when it comes into view
    useEffect(() => {
        if (isInView && !isActive) {
            setCurrentStep(index);
        }
    }, [isInView, isActive, index, setCurrentStep]);

    // Run animations when a card becomes active
    useEffect(() => {
        if (isActive && cardRef.current) {
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            
            // Scroll the card into view with smooth animation
            scrollToRef(cardRef);

            // Staggered animation for benefits list
            gsap.fromTo(
                cardRef.current?.querySelectorAll('.benefit-item') || [],
                {
                    opacity: 0,
                    y: 20,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.2
                }
            );

            // Animate the card header elements
            if (cardRef.current) {
                const cardHeader = cardRef.current.querySelector('.card-header');
                if (cardHeader) {
                    gsap.fromTo(
                        cardHeader,
                        { opacity: 0, y: -20 },
                        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                    );
                }

                const accentLine = cardRef.current.querySelector('.accent-line');
                if (accentLine) {
                    gsap.fromTo(
                        accentLine,
                        { scaleX: 0 },
                        {
                            scaleX: 1,
                            duration: 0.8,
                            ease: "power3.inOut",
                            delay: 0.1
                        }
                    );
                }

                const iconContainer = cardRef.current.querySelector('.icon-container');
                if (iconContainer) {
                    gsap.fromTo(
                        iconContainer,
                        {
                            boxShadow: `0 0 0 rgba(${getRGBColor(step.color)}, 0)`
                        },
                        {
                            boxShadow: `0 0 20px rgba(${getRGBColor(step.color)}, 0.3)`,
                            duration: 1.5,
                            repeat: -1,
                            yoyo: true
                        }
                    );
                }
            }
        }
    }, [isActive, step.color, scrollToRef, index]);

    return (
        <motion.div
            ref={cardRef}
            className={`relative overflow-hidden rounded-2xl transition-all duration-500
                ${isActive ? 'border-opacity-80 shadow-2xl' : 'border-opacity-30 shadow-xl'}`}
            style={{
                '--spotlight-size': '300px',
                backgroundColor: isActive ? 'rgba(30, 30, 35, 0.95)' : 'rgba(20, 20, 25, 0.8)',
                borderWidth: '1px',
                borderColor: step.color,
                boxShadow: isActive
                    ? `0 25px 50px -12px rgba(${getRGBColor(step.color)}, 0.25)`
                    : 'none'
            } as React.CSSProperties}
            onClick={() => setCurrentStep(index)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            animate={{
                opacity: 1,
                y: 0,
                scale: isActive ? 1 : 0.98
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                delay: index * 0.1
            }}
            whileHover={{
                y: -5,
                transition: { duration: 0.3 }
            }}
        >
            {/* Card content */}
            <div className="relative z-10 p-8">
                {/* Header with icon */}
                <div className="card-header flex items-center mb-6">
                    <div
                        className="icon-container flex-shrink-0 p-3 rounded-xl mr-5 relative overflow-hidden"
                        style={{
                            background: `linear-gradient(135deg, ${step.color}22, ${step.color}44)`,
                            border: `1px solid ${step.color}60`
                        }}
                    >
                        <div className="relative z-10 text-2xl" style={{ color: step.color }}>
                            {step.icon}
                        </div>

                        {/* Animated background for icon */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                background: [
                                    `radial-gradient(circle at center, ${step.color}30 0%, transparent 70%)`,
                                    `radial-gradient(circle at center, ${step.color}10 0%, transparent 70%)`,
                                    `radial-gradient(circle at center, ${step.color}30 0%, transparent 70%)`
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <div>
                        <h3
                            className="text-xl font-semibold"
                            style={{
                                color: isActive ? 'white' : '#f8f8f8cc',
                                textShadow: isActive ? `0 0 20px rgba(${getRGBColor(step.color)}, 0.3)` : 'none'
                            }}
                        >
                            {step.title}
                        </h3>

                        {/* Dynamic accent line */}
                        <div
                            className="accent-line h-1 rounded-full mt-2 origin-left"
                            style={{
                                background: `linear-gradient(to right, ${step.color}, ${step.color}50)`,
                                width: isActive ? '100px' : '60px'
                            }}
                        />
                    </div>
                </div>

                {/* Description */}
                <p className="text-white/70 mb-8 leading-relaxed">
                    {step.description}
                </p>

                {/* Benefits list with staggered animation */}
                <div className="space-y-4 mt-6">
                    <h4 className="text-white/80 font-medium mb-3">Principais benefícios:</h4>

                    {step.benefits.map((benefit, i) => (
                        <div
                            key={i}
                            className="benefit-item flex items-start gap-3 opacity-0"
                        >
                            <div
                                className="flex-shrink-0 mt-1"
                                style={{ color: step.color }}
                            >
                                <CheckCircle2 size={18} />
                            </div>
                            <p className="text-white/70">{benefit}</p>
                        </div>
                    ))}
                </div>

                {/* Action button */}
                {isActive && (
                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <button
                            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all"
                            style={{
                                background: `linear-gradient(135deg, ${step.color}dd, ${step.color})`,
                                color: '#080808',
                                boxShadow: `0 8px 20px -8px ${step.color}aa`
                            }}
                        >
                            <span>Saiba mais</span>
                            <ArrowRight size={18} />
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Visual elements */}

            {/* Dynamic spotlight effect */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    background: spotlightBackground,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s'
                }}
            />

            {/* Background image effect with gradient overlay for premium look */}
            {step.image && (
                <div className="absolute inset-0 -z-10 opacity-10">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 filter"
                        style={{
                            backgroundImage: `url(${step.image})`,
                            transform: isActive ? 'scale(1.05)' : 'scale(1)',
                            filter: 'blur(3px)'
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(145deg, rgba(20, 20, 25, 0.85), rgba(15, 15, 20, 0.95))`
                        }}
                    />
                </div>
            )}

            {/* Decorative corner accent */}
            <div
                className="absolute top-0 right-0 w-20 h-20"
                style={{
                    background: `linear-gradient(135deg, transparent, ${step.color}20)`,
                    borderLeft: `1px solid ${step.color}30`,
                    borderBottom: `1px solid ${step.color}30`,
                    borderRadius: '0 0 0 100%'
                }}
            />

            {/* Active step indicator */}
            {isActive && (
                <div className="absolute top-4 right-4">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: step.color }}
                    />
                </div>
            )}
        </motion.div>
    );
});

MethodStepCard.displayName = "MethodStepCard";

// Journey progress indicator component
const JourneyProgress = ({
    currentStep,
    totalSteps,
    onStepClick
}: {
    currentStep: number,
    totalSteps: number,
    onStepClick: (index: number) => void
}) => {
    return (
        <motion.div
            className="sticky top-8 z-40 bg-slate-900/80 backdrop-blur-lg p-3 rounded-full shadow-xl border border-white/10 hidden lg:flex w-fit mx-auto"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
        >
            <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }).map((_, i) => {
                    const isActive = i === currentStep;
                    const isPast = i < currentStep;
                    const stepColor = methodSteps[i].color;

                    return (
                        <motion.button
                            key={i}
                            className="relative rounded-full transition-all flex items-center justify-center"
                            style={{
                                width: isActive ? '40px' : '12px',
                                height: '12px',
                                background: isPast
                                    ? `${stepColor}`
                                    : isActive
                                        ? `linear-gradient(to right, ${stepColor}, ${stepColor}aa)`
                                        : 'rgba(255, 255, 255, 0.2)',
                            }}
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 }
                            }}
                            onClick={() => onStepClick(i)}
                        >
                            {isActive && (
                                <motion.span
                                    className="absolute flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="sr-only">Step {i + 1}</span>
                                </motion.span>
                            )}

                            {/* Pulse animation for active step */}
                            {isActive && (
                                <motion.div
                                    className="absolute inset-0 rounded-full"
                                    style={{ background: stepColor }}
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.7, 0, 0.7]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "loop"
                                    }}
                                />
                            )}
                        </motion.button>
                    );
                })}
            </div>

            {/* Current step label */}
            <div className="ml-4 px-3 text-xs font-medium text-white">
                {currentStep + 1}/{totalSteps}
            </div>
        </motion.div>
    );
};

// Main methodology component
export const PremiumMethodology = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const stepRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

    // Initialize refs for each step card
    useEffect(() => {
        stepRefs.current = methodSteps.map(() => React.createRef<HTMLDivElement>());
    }, []);

    // Helper to scroll to a specific step card
    const scrollToStep = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            gsap.to(window, {
                scrollTo: {
                    y: ref.current.offsetTop - 100,
                    autoKill: false
                },
                duration: 0.8,
                ease: "power3.inOut"
            });
        }
    };

    // Scroll to step on direct navigation
    const handleStepClick = (index: number) => {
        setCurrentStep(index);
        scrollToStep(stepRefs.current[index]);
    };

    // Motion values for parallax background elements
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacityProgress = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <div
            ref={containerRef}
            className="relative bg-gradient-to-b from-[#0A090C] via-[#0D0C10] to-[#0A090C] pt-24 pb-32 overflow-hidden"
        >
            {/* Decorative background elements */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 -z-10"
            >
                {/* Premium backdrop */}
                <div className="absolute top-0 left-0 w-full h-full">
                    {/* Light grid */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(to right, #D4AF37 0.5px, transparent 0.5px),
                             linear-gradient(to bottom, #D4AF37 0.5px, transparent 0.5px)`,
                            backgroundSize: '50px 50px'
                        }}
                    />

                    {/* Floating orbs */}
                    <motion.div
                        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
                        style={{
                            background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, rgba(212,175,55,0.1) 50%, transparent 70%)',
                        }}
                        animate={{
                            x: [0, 20, -20, 0],
                            y: [0, -30, 10, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />

                    <motion.div
                        className="absolute bottom-1/3 left-1/5 w-96 h-96 rounded-full opacity-5 blur-3xl"
                        style={{
                            background: 'radial-gradient(circle, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0.1) 50%, transparent 70%)',
                        }}
                        animate={{
                            x: [0, -50, 20, 0],
                            y: [0, 30, -20, 0],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </div>
            </motion.div>

            {/* Content container */}
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Section header with premium effects */}
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Glowing badge */}
                    <motion.div
                        className="inline-flex relative mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                            <div className="flex items-center gap-2">
                                <motion.div
                                    className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="text-xs tracking-wide uppercase font-medium text-[#D4AF37]">
                                    Metodologia exclusiva
                                </span>
                            </div>
                        </div>

                        {/* Shine effect */}
                        <motion.div
                            className="absolute inset-0 w-full"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)',
                            }}
                        />
                    </motion.div>

                    {/* Heading with highlighted text */}
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        O caminho para sua{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37]">
                                aprovação
                            </span>
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                            />
                        </span>
                    </h2>

                    {/* Section description */}
                    <motion.p
                        className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        O método RB é estruturado em cinco pilares fundamentais que juntos garantem não apenas a absorção do conteúdo, mas a verdadeira preparação para o sucesso em concursos de alta complexidade.
                    </motion.p>
                </motion.div>

                {/* Journey progress indicator */}
                <JourneyProgress
                    currentStep={currentStep}
                    totalSteps={methodSteps.length}
                    onStepClick={handleStepClick}
                />

                {/* Method steps cards */}
                <div className="mt-12 space-y-12 max-w-4xl mx-auto">
                    {methodSteps.map((step, index) => (
                        <MethodStepCard
                            key={index}
                            ref={stepRefs.current[index]}
                            step={step}
                            index={index}
                            currentStep={currentStep}
                            setCurrentStep={setCurrentStep}
                            scrollToRef={(ref) => scrollToStep(ref)}
                        />
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    className="mt-24 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block relative">
                        {/* Premium button with effects */}
                        <button
                            className="px-8 py-4 rounded-lg font-medium text-base bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] text-[#0A090C] relative z-10 flex items-center gap-3 group overflow-hidden"
                        >
                            <span>Conhecer o método completo</span>
                            <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                            >
                                <ArrowRight size={20} />
                            </motion.div>

                            {/* Button shine effect */}
                            <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                        </button>

                        {/* Glow effect */}
                        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#D4AF37]/80 to-[#F9E077]/80 opacity-30 blur-lg group-hover:opacity-100 transition-all duration-1000" />
                    </div>
                    {/* Enhanced Social Proof Section */}
                    <motion.div
                        className="mt-16 relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Glowing background accent */}
                        <div className="absolute -inset-10 bg-gradient-radial from-[#D4AF37]/5 to-transparent opacity-70 blur-3xl -z-10" />

                        {/* Container with glass effect */}
                        <motion.div
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl"
                            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.15)" }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Left column - Avatar group & stats */}
                                <div className="flex-1 flex flex-col items-center md:items-start">
                                    {/* Impressive stats */}
                                    <div className="mb-5 text-center md:text-left">
                                        <motion.div
                                            className="text-4xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] text-transparent bg-clip-text mb-1"
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                            animate={{
                                             backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                            }}
                                        >
                                            +5.000
                                        </motion.div>
                                        <p className="text-white/80 text-sm">alunos aprovados</p>
                                    </div>

                                    {/* Premium avatars group */}
                                    <div className="mb-4 relative h-14">
                                        {/* Real-looking avatars with staggered animation */}
                                        <motion.div className="flex">
                                            {[
                                                "https://randomuser.me/api/portraits/men/32.jpg",
                                                "https://randomuser.me/api/portraits/women/44.jpg",
                                                "https://randomuser.me/api/portraits/women/56.jpg",
                                                "https://randomuser.me/api/portraits/men/78.jpg",
                                                "https://randomuser.me/api/portraits/women/21.jpg",
                                                "https://randomuser.me/api/portraits/men/11.jpg"
                                            ].map((avatar, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-12 h-12 rounded-full border-2 border-[#0A090C] overflow-hidden -ml-2 first:ml-0 shadow-lg relative"
                                                    initial={{ opacity: 0, x: -10, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                                                    whileHover={{ y: -5, zIndex: 10, scale: 1.05 }}
                                                >
                                                    <img
                                                        src={avatar}
                                                        alt={`Aluno aprovado ${i + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {/* Gold success indicator */}
                                                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#D4AF37] rounded-full border-2 border-[#0A090C] flex items-center justify-center">
                                                        <CheckCircle2 size={10} className="text-black" />
                                                    </div>
                                                </motion.div>
                                            ))}

                                            {/* More users indicator */}
                                            <motion.div
                                                className="w-12 h-12 rounded-full flex items-center justify-center -ml-2 bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-[#0A090C] text-xs font-semibold text-white/90"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.7, duration: 0.5 }}
                                                whileHover={{ y: -5, scale: 1.05 }}
                                            >
                                                +4.9k
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    {/* Premium star rating with animation */}
                                    <div className="flex flex-col items-center md:items-start">
                                        <div className="flex items-center gap-1 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.1 * i + 0.5, duration: 0.4 }}
                                                    animate={i < 4 ? {
                                                        scale: [1, 1.3, 1],
                                                        rotate: [0, 5, -5, 0],
                                                        transition: {
                                                            duration: 1.2,
                                                            delay: i * 0.3,
                                                            repeat: Infinity,
                                                            repeatDelay: 5
                                                        }
                                                    } : {}}
                                                >
                                                    <Star
                                                        size={i === 4 ? 16 : 20}
                                                        fill={i < 4 ? "#D4AF37" : "none"}
                                                        stroke={i < 4 ? "#D4AF37" : "#D4AF37"}
                                                        className={i < 4 ? "" : "opacity-60"}
                                                    />
                                                </motion.div>
                                            ))}
                                            <span className="ml-2 text-white font-medium">4.9<span className="text-white/60 text-xs">/5.0</span></span>
                                        </div>
                                        <p className="text-white/60 text-xs">Avaliações com base em 728 alunos</p>
                                    </div>
                                </div>

                                {/* Right column - Featured testimonial */}
                                <div className="flex-1 mt-6 md:mt-0">
                                    <div className="relative">
                                        {/* Decorative quote mark */}
                                        <div className="absolute -top-6 -left-5 text-5xl text-[#D4AF37]/20 font-serif">"</div>

                                        {/* Testimonial card */}
                                        <motion.div
                                            className="relative z-10"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3, duration: 0.6 }}
                                        >
                                            <p className="text-white/80 italic text-base leading-relaxed">
                                                O método do professor Rodrigo foi fundamental para minha aprovação.
                                                A abordagem estruturada e as técnicas de memorização fizeram toda diferença
                                                na reta final da preparação.
                                            </p>

                                            {/* Testimonial author */}
                                            <div className="mt-4 flex items-center gap-3">
                                                {/* Author image with gold border effect */}
                                                <div className="relative">
                                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]/50 p-0.5">
                                                        <img
                                                            src="https://randomuser.me/api/portraits/women/33.jpg"
                                                            alt="Ana Clara Mendes"
                                                            className="w-full h-full object-cover rounded-full"
                                                        />
                                                    </div>
                                                    <motion.div
                                                        className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/40"
                                                        animate={{
                                                            boxShadow: [
                                                                '0 0 0 0 rgba(212,175,55,0)',
                                                                '0 0 0 4px rgba(212,175,55,0.3)',
                                                                '0 0 0 0 rgba(212,175,55,0)'
                                                            ]
                                                        }}
                                                        transition={{ duration: 2.5, repeat: Infinity }}
                                                    />
                                                </div>

                                                <div>
                                                    <div className="text-white font-medium">Ana Clara Mendes</div>
                                                    <div className="flex items-center text-xs text-white/60 gap-2">
                                                        <span className="flex items-center gap-1">
                                                            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                                                            Procuradora Federal
                                                        </span>
                                                        <span>•</span>
                                                        <span>Aprovada em 2º lugar</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Testimonial navigation dots */}
                                        <div className="mt-5 flex justify-center md:justify-end gap-1.5">
                                            {[0, 1, 2].map((i) => (
                                                <button
                                                    key={i}
                                                    className={`w-2 h-2 rounded-full transition-all ${i === 0 ? 'bg-[#D4AF37] w-4' : 'bg-white/20 hover:bg-white/30'}`}
                                                    aria-label={`Ver depoimento ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Success metrics bar */}
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { label: "Taxa de aprovação", value: "93%", icon: <BarChart2 size={16} /> },
                                        { label: "Bancas atendidas", value: "12+", icon: <ClipboardCheck size={16} /> },
                                        { label: "Anos de experiência", value: "15+", icon: <FileText size={16} /> },
                                        { label: "Horas de mentoria", value: "20k+", icon: <Brain size={16} /> }
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex flex-col items-center"
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                        >
                                            <div className="flex items-center gap-1.5 text-[#D4AF37]/80 mb-1.5">
                                                {stat.icon}
                                                <span className="text-sm font-medium">{stat.label}</span>
                                            </div>
                                            <div className="text-white text-xl font-bold">{stat.value}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating particles for premium effect */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-[#D4AF37]"
                                style={{
                                    width: 2 + Math.random() * 4,
                                    height: 2 + Math.random() * 4,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -15 - Math.random() * 30],
                                    opacity: [0, 0.8, 0],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                }}
                            />
                        ))}
                    </motion.div>
                    {/* Premium FAQ Section */}
                    <motion.div
                        className="mt-24 relative"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-40 right-0 w-96 h-96 bg-gradient-radial from-[#D4AF37]/10 to-transparent opacity-30 blur-3xl -z-10" />
                        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-gradient-radial from-[#7C3AED]/10 to-transparent opacity-20 blur-3xl -z-10" />

                        {/* Section header */}
                        <div className="text-center mb-16 relative">
                            <motion.div
                                className="inline-flex relative mb-6"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="px-5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                                    <div className="flex items-center gap-2">
                                        <motion.div
                                            className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"
                                            animate={{ scale: [1, 1.3, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                        <span className="text-xs tracking-wide uppercase font-medium text-[#D4AF37]">
                                            Dúvidas frequentes
                                        </span>
                                    </div>
                                </div>

                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 w-full"
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
                                    style={{
                                        background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.2), transparent)',
                                    }}
                                />
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Perguntas frequentes sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37]">Método RB</span>
                            </h2>

                            <motion.p
                                className="text-white/70 max-w-2xl mx-auto"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Esclarecemos as principais dúvidas sobre nossa abordagem e como ela pode transformar sua preparação para concursos .
                            </motion.p>
                        </div>

                        {/* Animated FAQ accordions */}
                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                {
                                    question: "Como o Método RB se diferencia de outros métodos de estudo?",
                                    answer: "O Método RB se diferencia pela abordagem personalizada baseada em ciência cognitiva e dados estatísticos de bancas. Nossa metodologia não apenas transmite conteúdo, mas desenvolve estratégias específicas para cada perfil de aprendizagem, com foco em resultados comprovados por milhares de aprovações em concursos de alta complexidade.",
                                    iconColor: "#D4AF37"
                                },
                                {
                                    question: "Por quanto tempo terei acesso aos materiais do curso?",
                                    answer: "Os alunos têm acesso vitalício a todos os materiais do curso, incluindo atualizações de conteúdo. Nosso compromisso é acompanhar sua jornada completa até a aprovação, sem limites de tempo ou restrições de acesso.",
                                    iconColor: "#7C3AED"
                                },
                                {
                                    question: "O método funciona para qualquer tipo de concurso jurídico?",
                                    answer: "Sim, o Método RB foi desenvolvido para ser adaptável a diversos concursos, desde a magistratura e ministério público até carreiras como defensoria, procuradoria e advocacia pública. A metodologia é ajustada conforme as especificidades de cada banca e cargo pretendido.",
                                    iconColor: "#059669"
                                },
                                {
                                    question: "Quanto tempo em média os alunos levam para conseguir aprovação?",
                                    answer: "O tempo médio para aprovação varia conforme o nível inicial do aluno, o concurso almejado e a dedicação aos estudos. Nossos dados indicam que alunos que seguem rigorosamente o método conseguem aprovação em 40% menos tempo comparado a métodos tradicionais, com média de 12 a 18 meses de preparação intensiva.",
                                    iconColor: "#E11D48"
                                },
                                {
                                    question: "Existe acompanhamento individualizado durante o curso?",
                                    answer: "Absolutamente. Oferecemos mentorias individuais periódicas, correções personalizadas de questões e simulados, além de um sistema de monitoramento de desempenho que permite ajustes constantes no plano de estudos para maximizar seus resultados.",
                                    iconColor: "#3B82F6"
                                }
                            ].map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <h3 style={{ color: faq.iconColor }}>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* Premium support message */}
                        <motion.div
                            className="mt-16 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 text-white/60 text-sm">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <HeadphonesIcon className="w-5 h-5 text-[#D4AF37]" />
                                </div>
                                <span>
                                    Ainda tem dúvidas? <a href="#" className="text-[#D4AF37] underline underline-offset-2 hover:text-[#F9E077] transition-colors">Fale com nossa equipe</a>
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Premium Call to Action Section */}
                    <motion.div
                        className="mt-32 relative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        {/* Premium visual background */}
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0A090C] via-[#13121A] to-[#0A090C]" />

                            {/* Premium glow effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl h-80 rounded-full bg-gradient-radial from-[#D4AF37]/10 to-transparent opacity-60 blur-[100px]" />

                            {/* Animated line accents */}
                            <motion.div
                                className="absolute left-0 top-20 w-full h-px"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                                }}
                                animate={{
                                    opacity: [0.1, 0.3, 0.1],
                                    scaleY: [1, 1.5, 1],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute left-0 bottom-20 w-full h-px"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
                                }}
                                animate={{
                                    opacity: [0.1, 0.2, 0.1],
                                    scaleY: [1, 1.5, 1],
                                }}
                                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            />
                        </div>

                        {/* Content container with premium glass effect */}
                        <div className="container mx-auto px-6 relative z-10">
                            <div className="max-w-5xl mx-auto bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-10 md:p-14 shadow-2xl">
                                <div className="flex flex-col md:flex-row gap-12 items-center">
                                    {/* Left content */}
                                    <div className="flex-1">
                                        <motion.h2
                                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            Transforme sua
                                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] mt-1">
                                                jornada de estudos
                                            </span>
                                        </motion.h2>

                                        <motion.p
                                            className="text-white/80 text-lg mb-8"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2, duration: 0.6 }}
                                        >
                                            Junte-se a milhares de alunos aprovados e comece agora sua preparação com o método que revolucionou o ensino jurídico no Brasil.
                                        </motion.p>

                                        {/* Feature highlights */}
                                        <div className="space-y-4 mb-10">
                                            {[
                                                "Acesso imediato a todo conteúdo",
                                                "Suporte personalizado por 12 meses",
                                                "Garantia de satisfação de 30 dias"
                                            ].map((feature, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-center gap-3"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                                                >
                                                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center">
                                                        <CheckIcon className="h-3 w-3 text-black" />
                                                    </div>
                                                    <span className="text-white/80">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Premium action buttons */}
                                        <motion.div
                                            className="flex flex-wrap gap-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, duration: 0.6 }}
                                        >
                                            <button
                                                className="px-8 py-4 rounded-lg font-medium text-base bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] text-[#0A090C] relative z-10 flex items-center gap-3 group overflow-hidden"
                                            >
                                                <span>Quero conhecer o método</span>
                                                <ArrowRight size={16} />
                                            </button>

                                            <button className="text-white/70 hover:text-white px-5 py-3 transition-colors flex items-center gap-2">
                                                <PlayCircleIcon className="h-5 w-5" />
                                                <span>Ver depoimentos</span>
                                            </button>
                                        </motion.div>
                                    </div>

                                    {/* Right visual content */}
                                    <div className="flex-1 relative">
                                        {/* Premium stats display */}
                                        <motion.div
                                            className="relative z-10"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3, duration: 0.7 }}
                                        >
                                            <div className="relative">
                                                <div className="bg-[#13121A] border border-white/10 rounded-xl p-6 shadow-xl">
                                                    {/* Decorative elements */}
                                                    <div className="absolute top-0 right-0 h-px w-1/3 bg-gradient-to-l from-[#D4AF37]/80 to-transparent" />
                                                    <div className="absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
                                                    <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-[#D4AF37]/30" />
                                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#D4AF37]/30" />

                                                    {/* Metrics grid */}
                                                    <div className="grid grid-cols-2 gap-6">
                                                        {[
                                                            { value: "93%", label: "Taxa de aprovação" },
                                                            { value: "1.200+", label: "Alunos ativos" },
                                                            { value: "15+", label: "Anos de experiência" },
                                                            { value: "4.9/5", label: "Satisfação média" }
                                                        ].map((stat, i) => (
                                                            <motion.div
                                                                key={i}
                                                                className="text-center"
                                                                initial={{ opacity: 0 }}
                                                                whileInView={{ opacity: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                                                            >
                                                                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37]">
                                                                    {stat.value}
                                                                </div>
                                                                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    {/* Testimonial preview */}
                                                    <motion.div
                                                        className="mt-6 pt-6 border-t border-white/10"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.6, duration: 0.5 }}
                                                    >
                                                        <div className="text-white/80 italic text-sm">
                                                            "O método RB transformou minha forma de estudar e foi fundamental para minha aprovação em primeiro lugar."
                                                        </div>

                                                        <div className="mt-4 flex items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#D4AF37]/30">
                                                                    <img
                                                                        src="https://randomuser.me/api/portraits/men/54.jpg"
                                                                        alt="Aluno aprovado"
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <div className="text-white text-xs font-medium">Carlos Eduardo</div>
                                                                    <div className="text-white/60 text-[10px]">Juiz Federal</div>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center">
                                                                {[1, 2, 3, 4, 5].map(star => (
                                                                    <Star key={star} size={12} fill="#D4AF37" stroke="#D4AF37" />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </div>

                                                {/* Decorative elements */}
                                                <motion.div
                                                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full"
                                                    style={{
                                                        background: 'radial-gradient(circle, rgba(212,175,55,0.15), transparent)',
                                                        filter: 'blur(20px)'
                                                    }}
                                                    animate={{
                                                        opacity: [0.6, 1, 0.6],
                                                        scale: [1, 1.1, 1],
                                                    }}
                                                    transition={{ duration: 4, repeat: Infinity}}
                                                />

                                                {/* Floating badges */}
                                                <motion.div
                                                    className="absolute -left-10 top-10 flex items-center gap-2 px-3 py-2 bg-[#13121A]/90 backdrop-blur-sm border border-white/10 rounded-full shadow-xl"
                                                    initial={{ x: -50, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.7, duration: 0.5 }}
                                                    animate={{
                                                        y: [0, -10, 0],
                                                    }}
                                                >
                                                    <TrendingUp className="h-4 w-4 text-[#D4AF37]" />
                                                    <span className="text-white text-xs">Alta taxa de aprovação</span>
                                                </motion.div>

                                                <motion.div
                                                    className="absolute -right-8 bottom-16 flex items-center gap-2 px-3 py-2 bg-[#13121A]/90 backdrop-blur-sm border border-white/10 rounded-full shadow-xl"
                                                    initial={{ x: 50, opacity: 0 }}
                                                    whileInView={{ x: 0, opacity: 1 }}
                                                     viewport={{ once: true }}
                                                     transition={{ 
                                                        delay: 0.8, 
                                                        duration: 6, 
                                                        repeat: Infinity 
                                                     }}
                                                     animate={{
                                                        y: [0, 10, 0],
                                                    }}
                                                >
                                                    <UsersIcon className="h-4 w-4 text-[#D4AF37]" />
                                                    <span className="text-white text-xs">Comunidade exclusiva</span>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating particles */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-[#D4AF37]"
                                style={{
                                    width: 2 + Math.random() * 4,
                                    height: 2 + Math.random() * 4,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -15 - Math.random() * 30],
                                    opacity: [0, 0.8, 0],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                }}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}