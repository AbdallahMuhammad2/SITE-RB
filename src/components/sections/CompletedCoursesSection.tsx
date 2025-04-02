import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Trophy, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompletedCoursesSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Concurso de Vitória da Conquista',
      year: '2023',
      approved: '215 alunos aprovados',
      description: 'Preparação completa para o concurso da Prefeitura Municipal de Vitória da Conquista com foco em todas as áreas do edital.',
      image: 'https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&w=2070',
      color: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 2,
      title: 'Processo Seletivo de Vitória da Conquista e Barra do Choça',
      year: '2022',
      approved: '187 alunos aprovados',
      description: 'Curso intensivo para o processo seletivo das prefeituras de Vitória da Conquista e Barra do Choça.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070',
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      id: 3,
      title: 'Concurso da Prefeitura de Caraíbas',
      year: '2023',
      approved: '92 alunos aprovados',
      description: 'Preparação específica para todos os cargos do concurso público da Prefeitura Municipal de Caraíbas.',
      image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974',
      color: 'from-amber-500/20 to-orange-500/20'
    },
    {
      id: 4,
      title: 'SESAB',
      year: '2022',
      approved: '154 alunos aprovados',
      description: 'Curso preparatório para o concurso da Secretaria de Saúde da Bahia com material didático exclusivo.',
      image: 'https://images.unsplash.com/photo-1631217878532-7f522d28d21c?q=80&w=2091',
      color: 'from-red-500/20 to-pink-500/20'
    },
    {
      id: 5,
      title: 'Correios',
      year: '2023',
      approved: '206 alunos aprovados',
      description: 'Preparação intensiva para o concurso dos Correios, com simulados e questões direcionadas.',
      image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f6?q=80&w=2070',
      color: 'from-yellow-500/20 to-[#D4AF37]/20'
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0C0B0E] to-[#080608] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4AF37]/3 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section label */}
          <div className="flex items-center justify-center mb-6">
            <motion.div
              className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <div className="px-4 relative">
              <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em]">Concursos Realizados</span>
              <motion.div
                className="absolute -bottom-1 left-4 right-4 h-px bg-[#D4AF37]/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <motion.div
              className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <motion.h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Nossa <span className="text-[#D4AF37] relative inline-block">
              trajetória
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37]/80 to-[#D4AF37]/20"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </span> de sucesso
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Conheça alguns dos concursos e processos seletivos em que nossos alunos tiveram sucesso, 
            demonstrando a eficiência da nossa metodologia e a qualidade do nosso ensino.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onMouseEnter={() => setActiveCard(course.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card glow effect */}
              <motion.div
                className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${course.color} opacity-0 blur-xl transition-opacity duration-300`}
                animate={{ opacity: activeCard === course.id ? 0.7 : 0 }}
              />

              <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-full relative z-10">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0E] to-transparent opacity-90"></div>
                  
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full flex items-center">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37] mr-1.5" />
                    <span className="text-xs font-medium text-white">{course.year}</span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white line-clamp-2">{course.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mr-3">
                      <Trophy className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <p className="text-[#D4AF37] font-medium">{course.approved}</p>
                  </div>
                  
                  <p className="text-white/70 mb-6">{course.description}</p>
                  
                  <Link 
                    to="/contato" 
                    className="inline-flex items-center text-white group/link hover:text-[#D4AF37] transition-colors"
                  >
                    <span className="mr-2">Saiba mais</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/history"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white hover:bg-[#D4AF37]/10 transition-colors"
          >
            Ver todos os concursos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CompletedCoursesSection;