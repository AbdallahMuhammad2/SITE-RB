import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Book, Calendar, Users, Award, Clock } from 'lucide-react';

export const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "MENTORIA SELEÇÃO SESAB",
      professor: "Prof. Paula Barreto",
      description: "A mentoria que vai te preparar para a seleção da SESAB com foco nas disciplinas mais cobradas.",
      image: "/images/courses/course-1.jpg",
      duration: "6 meses",
      students: "2,342",
      lessons: "84",
      rating: 4.9,
      featured: true,
    },
    {
      id: 2,
      title: "Matemática e RLM",
      professor: "Prof. Yan Ribeiro",
      description: "Aprenda matemática e raciocínio lógico-matemático de forma simplificada com metodologia prática e direto ao ponto.",
      image: "/images/courses/course-2.jpg",
      duration: "5 meses",
      students: "1,876",
      lessons: "72",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Direito Constitucional",
      professor: "Prof. André Vieira",
      description: "Aprofunde seus conhecimentos em direito constitucional com foco nas questões mais cobradas nos últimos concursos.",
      image: "/images/courses/course-3.jpg",
      duration: "4 meses",
      students: "1,543",
      lessons: "68",
      rating: 4.7,
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A090C] to-[#0F0E13]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with premium styling */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-medium uppercase tracking-wider mb-4"
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2"></span>
            Cursos Premium
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cursos especializados para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E077]">aprovação garantida</span>
          </motion.h2>
          
          <motion.p 
            className="text-white/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Desenvolvidos por professores especialistas com metodologias comprovadas por milhares de aprovações em todo o Brasil
          </motion.p>
        </div>

        {/* Featured Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className={`rounded-2xl overflow-hidden bg-gradient-to-b from-[#151318] to-[#0F0E13] border border-white/5 group ${course.featured ? 'relative z-10 ring-4 ring-[#D4AF37]/20' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image container with overlay */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <img 
                  src={course.image || `https://source.unsplash.com/random/800x600?law&sig=${course.id}`} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {course.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                    Em destaque
                  </div>
                )}
              </div>

              {/* Course content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {course.title}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-[#D4AF37]/80"></div>
                  </div>
                  <span className="text-sm text-white/70">{course.professor}</span>
                </div>
                
                <p className="text-white/60 text-sm line-clamp-3">
                  {course.description}
                </p>
                
                {/* Course meta info */}
                <div className="grid grid-cols-3 gap-2 pt-4">
                  <div className="flex flex-col items-center">
                    <Clock className="h-4 w-4 text-[#D4AF37] mb-1" />
                    <span className="text-xs text-white/50">{course.duration}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Book className="h-4 w-4 text-[#D4AF37] mb-1" />
                    <span className="text-xs text-white/50">{course.lessons} aulas</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="h-4 w-4 text-[#D4AF37] mb-1" />
                    <span className="text-xs text-white/50">{course.students}</span>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Award
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(course.rating) ? 'text-[#D4AF37]' : 'text-white/20'}`}
                          fill={i < Math.floor(course.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-white/70">{course.rating}</span>
                  </div>
                  
                  {/* Action button */}
                  <motion.button
                    className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View all courses button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 rounded-lg border border-[#D4AF37] text-[#D4AF37] font-medium flex items-center gap-2 mx-auto hover:bg-[#D4AF37]/10 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Ver todos os cursos</span>
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};