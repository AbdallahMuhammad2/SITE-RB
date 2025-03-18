import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  ArrowRight, 
  Star, 
  Check, 
  Play, 
  ChevronRight, 
  Eye, 
  Award
} from 'lucide-react';

export const StudyMaterialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredMaterial, setHoveredMaterial] = useState<number | null>(null);

  const featuredMaterials = [
    {
      id: 1,
      title: "Apostilas Exclusivas",
      icon: <BookOpen className="w-6 h-6" />,
      description: "Material didático completo com teoria estruturada e exercícios práticos para fixação",
      features: ["Elaborado por especialistas", "Atualizado constantemente", "Foco em questões de concursos"],
      image: "/images/materials/apostilas.jpg",
      stats: {
        pages: "220+",
        exercises: "500+",
        downloads: "12.5K",
        rating: 4.9
      },
      featured: true
    },
    {
      id: 2,
      title: "Videoaulas Premium",
      icon: <Video className="w-6 h-6" />,
      description: "Explicações claras e diretas com recursos visuais para melhor compreensão dos conteúdos",
      features: ["Alta qualidade de imagem", "Explicações detalhadas", "Acesso ilimitado"],
      image: "/images/materials/videoaulas.jpg",
      stats: {
        lessons: "120+",
        hours: "60h",
        students: "8.2K",
        rating: 4.8
      }
    },
    {
      id: 3,
      title: "Banco de Simulados",
      icon: <FileText className="w-6 h-6" />,
      description: "Questões elaboradas no padrão das principais bancas com correção comentada",
      features: ["Comentários detalhados", "Estatísticas de desempenho", "Simulação da prova real"],
      image: "/images/materials/simulados.jpg",
      stats: {
        questions: "2000+",
        exams: "25",
        attempts: "45K",
        rating: 4.7
      }
    }
  ];

  const additionalMaterials = [
    { id: 1, title: "Mapas Mentais", type: "PDF", size: "12.5 MB", icon: <FileText />, isNew: true },
    { id: 2, title: "Resumo Estratégico", type: "PDF", size: "8.3 MB", icon: <FileText /> },
    { id: 3, title: "Aulas de Revisão", type: "MP4", size: "320 MB", icon: <Video /> },
    { id: 4, title: "Caderno de Exercícios", type: "PDF", size: "15.2 MB", icon: <BookOpen />, isNew: true },
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#0A090C] via-[#080608] to-[#0F0E13]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Abstract premium pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(10)].map((_, i) => (
              <motion.line
                key={i}
                x1="0"
                y1={i * 10}
                x2="100"
                y2={i * 10 + 5}
                stroke="#D4AF37"
                strokeWidth="0.1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <motion.line
                key={i+10}
                x1={i * 10}
                y1="0"
                x2={i * 10 + 5}
                y2="100"
                stroke="#D4AF37"
                strokeWidth="0.1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
              />
            ))}
          </svg>
        </div>
        
        {/* Premium particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -(20 + Math.random() * 30)],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeOut"
            }}
          />
        ))}
        
        {/* Premium glow effect */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full opacity-[0.07] blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.7) 0%, rgba(212,175,55,0.1) 70%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.07, 0.12, 0.07],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Luxury badge */}
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center mr-3"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <BookOpen className="w-3 h-3 text-[#080608]" />
            </motion.div>
            
            <span className="text-sm font-medium text-[#D4AF37]">
              MATERIAL EXCLUSIVO
            </span>
          </motion.div>
          
          {/* Premium title */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Materiais de Estudo{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                Premium
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 blur-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>
          
          {/* Premium description */}
          <motion.p 
            className="text-white/70 text-lg max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Recursos didáticos desenvolvidos por <span className="text-white">especialistas</span>, com metodologias 
            exclusivas para <span className="text-[#D4AF37]">maximizar</span> seu aprendizado e garantir sua aprovação
          </motion.p>
          
          {/* Premium divider */}
          <motion.div
            className="h-px w-24 mx-auto relative mt-8 mb-6 overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
        </motion.div>

        {/* Premium Tabs Interface */}
        <motion.div 
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {featuredMaterials.map((material, index) => (
            <motion.button
              key={material.id}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608]' 
                  : 'bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20'
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex items-center gap-2">
                {material.icon}
                <span>{material.title}</span>
              </div>
              
              {material.featured && activeIndex !== index && (
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37]">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#D4AF37]"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Premium Materials */}
        <div className="mb-24">
          <AnimatePresence mode="wait">
            {featuredMaterials.map((material, index) => (
              activeIndex === index && (
                <motion.div
                  key={material.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Premium Visual */}
                  <motion.div 
                    className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Enhanced image treatment */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#13121A]/60 via-transparent to-[#13121A]/90 z-10 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.04] mix-blend-overlay z-20"></div>
                    
                    {/* Gold scanning effect */}
                    <motion.div
                      className="absolute inset-x-0 h-[30%] bg-gradient-to-b from-[#D4AF37]/20 to-transparent z-20"
                      animate={{
                        top: ['0%', '70%', '0%'],
                      }}
                      transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    
                    {/* Material image with fallback */}
                    <img 
                      src={material.image || `https://source.unsplash.com/random/800x600?study&sig=${material.id}`}
                      alt={material.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Premium video play button */}
                    {material.id === 2 && (
                      <div className="absolute inset-0 flex items-center justify-center z-30">
                        <motion.button
                          className="relative group"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div 
                            className="absolute inset-0 rounded-full bg-[#D4AF37]/30 blur-md"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F9E077] flex items-center justify-center relative">
                            <Play className="w-6 h-6 text-[#080608] ml-1" />
                          </div>
                        </motion.button>
                      </div>
                    )}
                    
                    {/* Premium badge overlay */}
                    {material.featured && (
                      <div className="absolute top-4 left-4 z-30">
                        <motion.div 
                          className="flex items-center gap-2 px-3 py-1.5 bg-[#D4AF37] rounded-full"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Award className="h-3 w-3 text-[#080608]" />
                          <span className="text-xs font-medium text-[#080608]">Exclusivo</span>
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Stats overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#080608] to-transparent p-6 z-30">
                      <div className="grid grid-cols-4 gap-3">
                        {Object.entries(material.stats).map(([key, value], i) => (
                          <div key={i} className="text-center">
                            <h4 className="text-xl font-bold text-[#D4AF37]">
                              {value}
                            </h4>
                            <p className="text-xs text-white/60 capitalize">
                              {key}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Premium Content */}
                  <div>
                    <motion.h3 
                      className="text-3xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {material.title}
                    </motion.h3>
                    
                    {/* Gold accent line */}
                    <motion.div 
                      className="h-[2px] w-16 bg-gradient-to-r from-[#D4AF37] to-transparent mb-6"
                      initial={{ width: 0 }}
                      animate={{ width: 64 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                    
                    <motion.p 
                      className="text-white/70 text-lg mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {material.description}
                    </motion.p>
                    
                    {/* Premium features list */}
                    <motion.div
                      className="mb-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4">Características</h4>
                      <div className="space-y-3">
                        {material.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                          >
                            <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mr-3">
                              <Check className="w-3 h-3 text-[#D4AF37]" />
                            </div>
                            <span className="text-white/80">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Premium action buttons */}
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    >
                      <motion.button
                        className="group relative px-6 py-3 rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.03, boxShadow: "0 8px 25px -5px rgba(212, 175, 55, 0.4)" }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto]" />
                        
                        <div className="relative flex items-center gap-2">
                          <Download className="h-5 w-5 text-[#080608]" />
                          <span className="text-[#080608] font-medium">Acessar material</span>
                        </div>
                        
                        <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-20 group-hover:animate-shine" />
                      </motion.button>
                      
                      <motion.button
                        className="px-6 py-3 rounded-lg border border-[#D4AF37]/30 text-[#D4AF37] font-medium flex items-center gap-2 hover:bg-[#D4AF37]/10 transition-colors"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Eye className="h-5 w-5" />
                        Pré-visualizar
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Additional Materials Collection */}
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Recursos Adicionais</h3>
            <motion.button
              className="text-[#D4AF37] text-sm font-medium flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Ver todos os materiais
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalMaterials.map((material, i) => (
              <motion.div
                key={material.id}
                className="bg-[#13121A] border border-[#D4AF37]/10 rounded-lg p-5 relative group overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                whileHover={{ y: -5, borderColor: "rgba(212,175,55,0.3)" }}
                onMouseEnter={() => setHoveredMaterial(material.id)}
                onMouseLeave={() => setHoveredMaterial(null)}
              >
                {/* Interior glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent"
                  animate={{ opacity: hoveredMaterial === material.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* New badge */}
                {material.isNew && (
                  <div className="absolute top-3 right-3">
                    <div className="px-2 py-1 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] rounded-full text-[#080608] text-[10px] font-medium">
                      NOVO
                    </div>
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      {React.cloneElement(material.icon, { className: "w-6 h-6 text-[#D4AF37]" })}
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-1 group-hover:text-[#D4AF37] transition-colors">
                        {material.title}
                      </h4>
                      <div className="flex items-center text-xs gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                          {material.type}
                        </span>
                        <span className="text-white/50">
                          {material.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-[#D4AF37]/10 flex justify-between items-center">
                  <span className="text-white/50 text-xs">7 min de leitura</span>
                  
                  <motion.button
                    className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(212,175,55,0.3)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4 text-[#D4AF37]" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Call to Action */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4AF37]/40 to-[#D4AF37]/20 blur-md"
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <a 
              href="/materiais"
              className="relative px-8 py-4 rounded-xl bg-[#13121A] border border-[#D4AF37]/30 text-white font-medium inline-flex items-center gap-3 hover:bg-[#D4AF37]/10 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-[#080608]" />
              </div>
              <span>Explorar biblioteca completa de materiais</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};