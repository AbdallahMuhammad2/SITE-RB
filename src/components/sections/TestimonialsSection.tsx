// src/components/sections/TestimonialsSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Luiza Mendes",
      role: "Aprovada em 2° lugar - Magistratura Federal",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      content: "O método RB foi determinante para minha aprovação. Com a orientação dos professores, consegui otimizar meu tempo de estudo e focar no que realmente importava para a prova."
    },
    {
      id: 2,
      name: "Ricardo Almeida",
      role: "Aprovado - Ministério Público Federal",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      content: "Estudei com outros cursos antes, mas só depois que conheci a metodologia RB consegui realmente evoluir na minha preparação e conquistar a aprovação."
    }
  ];

  return (
    <section className="py-24 bg-[#0A090C]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Histórias de Sucesso</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Depoimentos de alunos que transformaram seus estudos e conquistaram aprovações
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-[#151318] rounded-lg p-6 border border-white/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: testimonial.id * 0.1 }}
            >
              <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-white/80 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-white">{testimonial.name}</div>
                  <div className="text-sm text-[#D4AF37]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
