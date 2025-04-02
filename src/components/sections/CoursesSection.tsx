import { motion } from 'framer-motion';
import { ArrowRight, Book,  Users, Clock, Check, Star } from 'lucide-react';

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
      benefits: [
        "Material exclusivo atualizado",
        "Simulados específicos",
        "Correções personalizadas",
        "Plantão de dúvidas"
      ],
      price: "R$ 1.200,00",
      installments: "12x R$ 100,00"
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
      benefits: [
        "Aulas simplificadas",
        "Exercícios resolvidos",
        "Material complementar",
        "Fórum de dúvidas"
      ],
      price: "R$ 980,00",
      installments: "10x R$ 98,00"
    },
    {
      id: 3,
      title: "Concurso Caraíbas - Mentoria Intensiva",
      professor: "Prof. André Vieira",
      description: "Aprofunde seus conhecimentos em direito constitucional com foco nas questões mais cobradas nos últimos concursos.",
      image: "/images/courses/course-3.jpg",
      duration: "4 meses",
      students: "1,543",
      lessons: "68",
      rating: 4.7,
      benefits: [
        "Mentoria personalizada",
        "Resolução comentada",
        "Acompanhamento individual",
        "Acesso permanente"
      ],
      price: "R$ 1.450,00",
      installments: "12x R$ 120,83"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A090C] to-[#0F0E13] relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-[5%] w-20 h-20 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-[10%] w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with premium styling */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-5 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-medium uppercase tracking-wider mb-4 border border-[#D4AF37]/20"
          >
            <Star className="w-3.5 h-3.5 mr-2 fill-[#D4AF37]" />
            Cursos Premium
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cursos especializados para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] italic">aprovação garantida</span>
          </motion.h2>
          
          <motion.p 
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Desenvolvidos por professores especialistas com metodologias comprovadas por milhares de aprovações em todo o Brasil
          </motion.p>
        </div>

        {/* Featured Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 mt-16">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className={`rounded-2xl overflow-hidden bg-[#13121A] border ${
                course.featured 
                  ? 'border-[#D4AF37]/30 shadow-lg shadow-[#D4AF37]/5' 
                  : 'border-white/10 hover:border-white/20'
              } group relative`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {course.featured && (
                <div className="absolute top-0 right-8 h-7 w-36 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] text-xs font-bold flex items-center justify-center z-20 rounded-b-lg shadow-lg">
                  CURSO DESTAQUE
                </div>
              )}
              
              {/* Image container with premium overlay */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#080608] via-[#080608]/60 to-transparent z-10"></div>
                <motion.img 
                  src={course.image || `https://source.unsplash.com/random/800x600?education&sig=${course.id}`} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Course meta info overlaid on image */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Clock className="h-3 w-3 text-[#D4AF37]" />
                      <span className="text-xs text-white/90">{course.duration}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <Book className="h-3 w-3 text-[#D4AF37]" />
                      <span className="text-xs text-white/90">{course.lessons} aulas</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(course.rating) ? 'text-[#D4AF37]' : 'text-white/20'}`}
                          fill={i < Math.floor(course.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-white/90">{course.rating}</span>
                  </div>
                </div>
              </div>

              {/* Course content */}
              <div className="p-6 pt-5 space-y-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#D4AF37]/10 flex items-center justify-center">
                      <div className="w-6.5 h-6.5 rounded-full overflow-hidden bg-[#201F26] flex items-center justify-center">
                        <Users className="h-3.5 w-3.5 text-[#D4AF37]" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-white/80">{course.professor}</span>
                  </div>
                </div>
                
                <div className="border-t border-b border-white/10 py-4">
                  <p className="text-white/60 text-sm">
                    {course.description}
                  </p>
                </div>
                
                {/* Benefits */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-[#D4AF37]/80 uppercase tracking-wider">O que você vai aprender</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {course.benefits?.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-2.5 w-2.5 text-[#D4AF37]" />
                        </div>
                        <span className="text-xs text-white/70">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Pricing and Action button */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-white">{course.price}</div>
                    <div className="text-xs text-white/50">ou {course.installments}</div>
                  </div>
                  
                  {/* Action button */}
                  <motion.button
                    className={`px-5 py-2.5 rounded-lg ${
                      course.featured 
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608]' 
                        : 'bg-[#201F26] text-[#D4AF37] hover:bg-[#D4AF37]/20'
                    } transition-colors font-medium flex items-center gap-2`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>{course.featured ? 'Matricular-se' : 'Saiba mais'}</span>
                    <ArrowRight className={`h-4 w-4 ${course.featured ? 'text-[#080608]' : 'text-[#D4AF37]'}`} />
                  </motion.button>
                </div>
              </div>
              
              {/* Premium badge effect for featured course */}
              {course.featured && (
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F9E077] rounded-full flex items-center justify-center z-20">
                  <Star className="h-4 w-4 text-[#080608] fill-[#080608]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* View all courses button */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="px-8 py-3.5 rounded-lg bg-[#13121A] border border-[#D4AF37]/30 text-[#D4AF37] font-medium flex items-center gap-2 mx-auto hover:bg-[#D4AF37]/10 transition-colors shadow-lg shadow-[#000]/20"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.3)" }}
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