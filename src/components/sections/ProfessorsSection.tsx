import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Users, Award, BookOpen, Star, ChevronRight, Play, Shield, Medal, Heart } from 'lucide-react';

export const ProfessorsSection = () => {
  const [hoveredProfessor, setHoveredProfessor] = useState<number | null>(null);

  const professors = [
    {
      id: 1,
      name: "Paula Barreto",
      role: "Especialista em Português e Redação Jurídica",
      bio: "Mestre em Linguística pela USP com mais de 15 anos de experiência em preparação para concursos jurídicos. Desenvolvedora de metodologia exclusiva para aprovação em provas discursivas.",
      image: "/images/professors/Paula.JPEG",
      stats: {
        students: "12K+",
        approvals: "1.5K+",
        courses: "8",
        rating: 4.9,
      },
      socialLinks: {
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
        website: "https://example.com/",
      },
      specialties: ["Redação Discursiva", "Gramática Aplicada", "Interpretação Textual"],
      path: "/profs/paula-barreto"
    },
    {
      id: 2,
      name: "Yan Ribeiro",
      role: "Especialista em Matemática e RLM",
      bio: "Doutor em Matemática Aplicada pela UNICAMP com expertise em simplificar conceitos complexos. Desenvolveu método inovador de resolução rápida para questões de concursos.",
      image: "/images/professors/yan.jpg",
      stats: {
        students: "10K+",
        approvals: "1.2K+",
        courses: "6",
        rating: 4.8,
      },
      socialLinks: {
        instagram: "https://instagram.com/",
        youtube: "https://youtube.com/",
        website: "https://example.com/",
      },
      specialties: ["Raciocínio Lógico", "Matemática Financeira", "Estatística"],
      path: "/profs/yan-ribeiro"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-[#080608]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A090C] via-[#080608] to-[#0A090C]"></div>
        
        {/* Abstract golden lines */}
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              style={{ 
                top: `${10 + i * 12}%`, 
                left: 0,
                transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` 
              }}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 0.5, scaleX: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </div>
        
        {/* Luxury particle effect */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#D4AF37]"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -(20 + Math.random() * 30)],
                opacity: [0, 0.6, 0],
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
        
        {/* Premium circular glow */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-1/2 h-1/2 rounded-full opacity-[0.07] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.7) 0%, rgba(212,175,55,0.1) 70%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.07, 0.1, 0.07],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          {/* Premium Badge */}
          <motion.div 
            className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center mr-3"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Users className="w-3 h-3 text-[#080608]" />
            </motion.div>
            
            <span className="text-sm font-medium text-[#D4AF37]">
              CORPO DOCENTE DE EXCELÊNCIA
            </span>
          </motion.div>
          
          {/* Enhanced Title */}
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Aprenda com os{" "}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                melhores professores
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 blur-sm"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </span>
          </motion.h2>
          
          {/* Enhanced Description */}
          <motion.p 
            className="text-white/70 text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nossa equipe é formada por <span className="text-white">professores referência em suas áreas</span>, com 
            milhares de alunos aprovados e metodologias exclusivas para sua conquista
          </motion.p>
          
          {/* Premium divider */}
          <motion.div
            className="h-px w-24 mx-auto relative mt-10 mb-6 overflow-hidden"
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
        </div>

        {/* Ultra Premium Professor Cards */}
        <div className="flex flex-col space-y-24">
          {professors.map((professor, index) => (
            <motion.div
              key={professor.id}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProfessor(professor.id)}
              onMouseLeave={() => setHoveredProfessor(null)}
            >
              {/* Background card glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent -z-10 blur-xl"
                animate={{ 
                  opacity: hoveredProfessor === professor.id ? 0.3 : 0.1,
                  scale: hoveredProfessor === professor.id ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="grid grid-cols-12 gap-6 items-center">
                {/* Left Column - Professor Image and Stats */}
                <div className={`col-span-12 lg:col-span-5 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <motion.div 
                    className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl border border-white/5"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Premium image treatments */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080608]/90 z-10"></div>
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03] mix-blend-soft-light z-20"></div>
                    
                    {/* Golden age effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent z-10"
                      initial={{ opacity: 0, height: '0%' }}
                      whileInView={{ opacity: 1, height: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5 }}
                    />
                    
                    {/* Scanning effect */}
                    <motion.div
                      className="absolute inset-x-0 h-[30%] bg-gradient-to-b from-[#D4AF37]/20 to-transparent z-20"
                      animate={{
                        top: ['0%', '70%', '0%'],
                      }}
                      transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    
                    {/* Professor image */}
                    <img 
                      src={professor.image || `https://source.unsplash.com/random/600x800?portrait&sig=${professor.id}`}
                      alt={professor.name}
                      className="w-full h-full object-cover object-center scale-[1.01]"
                    />
                    
                    {/* Premium badge overlay */}
                    <div className="absolute top-4 right-4 z-30">
                      <motion.div 
                        className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Medal className="h-3 w-3 text-[#D4AF37]" />
                        <span className="text-xs font-medium text-white">Top Professor</span>
                      </motion.div>
                    </div>
                    
                    {/* Video preview button */}
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
                    
                    {/* Stats bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080608] to-[#080608]/80 backdrop-blur-sm p-6 z-30">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-[#D4AF37]">{professor.stats.students}</h4>
                          <p className="text-xs text-white/60">Alunos</p>
                        </div>
                        <div className="text-center border-x border-white/10">
                          <h4 className="text-xl font-bold text-[#D4AF37]">{professor.stats.approvals}</h4>
                          <p className="text-xs text-white/60">Aprovados</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <h4 className="text-xl font-bold text-[#D4AF37]">{professor.stats.rating}</h4>
                            <Star className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                          </div>
                          <p className="text-xs text-white/60">Avaliação</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right Column - Professor Info */}
                <div className="col-span-12 lg:col-span-7">
                  <div className="p-6 lg:p-10">
                    {/* Professor name with animated highlight */}
                    <motion.h3 
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {professor.name}
                      <motion.span 
                        className="inline-block w-3 h-3 rounded-full bg-[#D4AF37] ml-2 relative top-[-2px]"
                        animate={{ 
                          scale: [1, 1.3, 1],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      />
                    </motion.h3>
                    
                    {/* Role with gold accent */}
                    <motion.div
                      className="flex items-center gap-2 mb-8"
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <div className="h-px w-16 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
                      <span className="text-[#D4AF37] font-medium text-lg">{professor.role}</span>
                    </motion.div>
                    
                    {/* Bio with premium styling */}
                    <motion.p 
                      className="text-white/70 text-lg mb-8 leading-relaxed max-w-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {professor.bio}
                    </motion.p>
                    
                    {/* Specialties */}
                    <motion.div
                      className="mb-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4">Especialidades</h4>
                      <div className="flex flex-wrap gap-3">
                        {professor.specialties.map((specialty, i) => (
                          <motion.div
                            key={i}
                            className="px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                            whileHover={{ 
                              backgroundColor: "rgba(212,175,55,0.2)",
                              y: -2
                            }}
                          >
                            {specialty}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    
                    {/* Course showcase */}
                    <motion.div
                      className="mb-10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <h4 className="text-sm uppercase tracking-wider text-white/50 mb-4">Cursos em Destaque</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                          </div>
                          <div className="flex-grow">
                            <h5 className="text-white font-medium text-sm">Curso Completo</h5>
                            <p className="text-white/50 text-xs">12 módulos • 60 horas</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                          </div>
                          <div className="flex-grow">
                            <h5 className="text-white font-medium text-sm">Intensivo Concursos</h5>
                            <p className="text-white/50 text-xs">8 módulos • 24 horas</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Action buttons */}
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <motion.a
                        href={professor.path}
                        className="relative overflow-hidden px-8 py-4 rounded-lg group"
                        whileHover={{ scale: 1.02, boxShadow: "0 8px 25px -5px rgba(212, 175, 55, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto] animate-shimmer" />
                        
                        <div className="relative flex items-center gap-2">
                          <span className="text-[#080608] font-medium">Conhecer professor</span>
                          <ArrowRight className="w-4 h-4 text-[#080608]" />
                        </div>
                        
                        <div className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-10 group-hover:animate-shine" />
                      </motion.a>
                      
                      <motion.button
                        className="px-8 py-4 rounded-lg border border-[#D4AF37]/30 text-[#D4AF37] font-medium flex items-center gap-2 hover:bg-[#D4AF37]/10 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Ver cursos
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Testimonial featured quote */}
              <motion.div
                className="absolute -bottom-10 lg:-bottom-16 right-10 lg:right-20 max-w-sm bg-[#13121A] border border-white/5 rounded-lg p-5 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-[#D4AF37] text-4xl font-serif">"</div>
                  <div className="flex-grow">
                    <p className="text-white/70 text-sm italic mb-3">
                      Metodologia incrível que simplifica conceitos complexos. Após anos tentando, consegui ser aprovado!
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white text-sm">Marcos Silva</h4>
                        <p className="text-white/50 text-xs">Aprovado Banco do Brasil</p>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Premium call to action */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D4AF37]/40 to-[#D4AF37]/20 blur-lg"
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <a 
              href="/professores"
              className="relative px-8 py-4 rounded-xl bg-[#13121A] border border-[#D4AF37]/30 text-white font-medium inline-flex items-center gap-3 hover:bg-[#D4AF37]/10 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center">
                <Users className="w-4 h-4 text-[#080608]" />
              </div>
              <span>Conhecer toda equipe de professores</span>
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};