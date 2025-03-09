import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, BookOpen, Clock, Star, CheckCircle, Play, Users, ArrowRight } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

const ProfPaula = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const stats = [
    { icon: Users, value: "500+", label: "Alunos Aprovados" },
    { icon: Star, value: "4.9", label: "Avaliação Média" },
    { icon: BookOpen, value: "12", label: "Cursos Ativos" },
    { icon: Clock, value: "10+", label: "Anos de Experiência" }
  ];

  const courses = [
    {
      title: "Química Geral Intensivo",
      description: "Domine os fundamentos essenciais da química para concursos",
      duration: "60 horas",
      modules: 24,
      price: "R$ 597,00",
      image: "https://images.unsplash.com/photo-1554475901-6dacf9b2ca9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Química Orgânica Avançada",
      description: "Aprofundamento completo em química orgânica",
      duration: "45 horas",
      modules: 18,
      price: "R$ 497,00",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Resolução de Questões",
      description: "Treinamento intensivo com questões anteriores",
      duration: "30 horas",
      modules: 15,
      price: "R$ 397,00",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Parallax */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1532634993-15f421e42ec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
              transform: 'scale(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
              Profa. Paula
            </h1>
            <p className="text-2xl mb-8 text-gray-300">
              Transformando o Ensino da Química
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex items-center gap-4"
                >
                  <stat.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-left">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Comece Sua Jornada
            </motion.button>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section with 3D Card Effect */}
      <section className="py-32 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform -rotate-6 group-hover:rotate-6 transition-transform duration-300" />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Professora Paula"
                className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Sobre a Professora
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Com mais de uma década dedicada ao ensino da Química, a Profa. Paula revolucionou a forma de preparação
                para concursos públicos. Sua metodologia única combina profundidade teórica com aplicações práticas,
                garantindo resultados excepcionais para seus alunos.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Award, text: "Doutora em Química pela USP" },
                  { icon: Star, text: "Professora do Ano 2023" },
                  { icon: BookOpen, text: "3 Livros Publicados" },
                  { icon: Users, text: "500+ Alunos Aprovados" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg"
                  >
                    <item.icon className="w-6 h-6 text-purple-600" />
                    <span className="text-gray-800 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section with Floating Cards */}
      <section className="py-32 bg-gradient-to-br from-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532634993-15f421e42ec0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Cursos Disponíveis</h2>
            <p className="text-xl text-gray-300">Escolha o curso ideal para sua preparação</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform group-hover:scale-[0.99] transition-transform duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{course.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: Clock, text: course.duration },
                        { icon: BookOpen, text: `${course.modules} módulos` }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-600">
                          <item.icon className="w-5 h-5 text-purple-600" />
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">{course.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Matricular-se
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Dizem os Alunos</h2>
            <p className="text-xl text-gray-600">Histórias reais de sucesso</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Aprovada na Petrobrás",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                text: "A metodologia da Profa. Paula é única. Consegui entender química de uma forma que nunca imaginei ser possível."
              },
              {
                name: "João Santos",
                role: "Aprovado no INSS",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                text: "Os exercícios práticos e a forma de explicação fizeram toda a diferença na minha aprovação."
              },
              {
                name: "Ana Oliveira",
                role: "Aprovada na ANVISA",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
                text: "Graças ao curso da Profa. Paula, consegui minha aprovação em primeiro lugar no concurso."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 relative"
              >
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-purple-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comece Sua Preparação Hoje
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Junte-se a centenas de alunos aprovados e transforme seu sonho em realidade.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Matricule-se Agora
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProfPaula;