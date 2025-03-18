import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, BrainCircuit, Target, LineChart, Calendar, BookOpen } from 'lucide-react';

export const MethodologySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const methodologyTabs = [
    {
      id: "focus",
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "Neurociência Aplicada",
      description: "Nossa metodologia se baseia em princípios avançados de neurociência para otimizar a retenção de informações e criar padrões de aprendizagem eficientes.",
      features: [
        "Técnicas de memorização de alta performance",
        "Ciclos de revisão espaçada baseados em evidências",
        "Integração de estados mentais ideais para aprendizagem",
        "Personalização conforme seu perfil cognitivo"
      ],
      image: "/images/methodology/neuroscience.jpg",
      stats: [
        { value: "85%", label: "Aumento na retenção" },
        { value: "3x", label: "Maior concentração" }
      ]
    },
    {
      id: "strategy",
      icon: <Target className="h-5 w-5" />,
      title: "Estratégia Direcionada",
      description: "Desenvolvemos roteiros personalizados que maximizam seu tempo de estudo, priorizando conteúdos com maior incidência nas provas de concursos jurídicos.",
      features: [
        "Análise estatística de provas anteriores",
        "Foco em temas de alta performance",
        "Roteiros adaptados ao seu tempo disponível",
        "Simulações realistas com feedback detalhado"
      ],
      image: "/images/methodology/strategy.jpg",
      stats: [
        { value: "40%", label: "Menos tempo de estudo" },
        { value: "2.3x", label: "Mais questões acertadas" }
      ]
    },
    {
      id: "analytics",
      icon: <LineChart className="h-5 w-5" />,
      title: "Análise de Performance",
      description: "Utilizamos análise de dados para identificar seus pontos fortes e fracos, permitindo ajustes constantes em sua estratégia de estudos para maximizar resultados.",
      features: [
        "Dashboard pessoal de performance",
        "Identificação precisa de gaps de conhecimento",
        "Recomendações personalizadas de estudo",
        "Acompanhamento da evolução com métricas claras"
      ],
      image: "/images/methodology/analytics.jpg",
      stats: [
        { value: "93%", label: "Aproveitamento das horas" },
        { value: "27%", label: "Aumento na pontuação" }
      ]
    },
    {
      id: "schedule",
      icon: <Calendar className="h-5 w-5" />,
      title: "Cronograma Inteligente",
      description: "Nosso sistema cria cronogramas dinâmicos que se adaptam ao seu desempenho e ritmo, garantindo cobertura completa do conteúdo no tempo disponível.",
      features: [
        "Distribuição ideal entre teoria e prática",
        "Ciclos de revisão automáticos",
        "Adaptação contínua baseada no desempenho",
        "Integração com sua rotina pessoal"
      ],
      image: "/images/methodology/schedule.jpg",
      stats: [
        { value: "97%", label: "Cobertura de conteúdo" },
        { value: "68%", label: "Menos procrastinação" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0F0E13] to-[#0A090C]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-medium uppercase tracking-wider mb-4"
          >
            <span className="block w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2"></span>
            Metodologia Exclusiva
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E077]">RB de aprovação</span>
          </motion.h2>
          
          <motion.p 
            className="text-white/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Um método científico e personalizado que já aprovou milhares de alunos em concursos jurídicos de alta competitividade
          </motion.p>
        </div>

        {/* Methodology display */}
        <div className="mt-16">
          {/* Tabs navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {methodologyTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                className={`px-5 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-[#D4AF37] text-[#0A090C] font-medium shadow-lg shadow-[#D4AF37]/20' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {tab.icon}
                <span>{tab.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab content */}
          <div className="relative overflow-hidden rounded-2xl bg-[#151318]/50 backdrop-blur-sm border border-white/5">
            {methodologyTabs.map((tab, index) => (
              <motion.div
                key={tab.id}
                className="p-2"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeTab === index ? 1 : 0,
                  x: activeTab === index ? 0 : activeTab > index ? -40 : 40,
                }}
                transition={{ duration: 0.4 }}
                style={{ display: activeTab === index ? 'block' : 'none' }}
              >
                <div className="flex flex-col md:flex-row rounded-xl overflow-hidden">
                  {/* Image side */}
                  <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A090C]/70 to-transparent z-10"></div>
                    <img 
                      src={tab.image || `https://source.unsplash.com/random/800x600?study&sig=${index}`}
                      alt={tab.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Stats overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                      <div className="flex items-center gap-8">
                        {tab.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-[#D4AF37]">{stat.value}</div>
                            // Complete the stat label styling
<div className="text-xs text-white/60">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content side */}
                  <div className="md:w-1/2 bg-[#151318] p-8 md:p-10 lg:p-12">
                    <h3 className="text-2xl font-bold text-white mb-4">{tab.title}</h3>
                    <p className="text-white/70 mb-8">{tab.description}</p>
                    
                    {/* Features list */}
                    <div className="space-y-4">
                      {tab.features.map((feature, i) => (
                        <motion.div 
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 + 0.2 }}
                        >
                          <div className="mt-1 p-1 rounded-full bg-[#D4AF37]/20">
                            <Check className="h-4 w-4 text-[#D4AF37]" />
                          </div>
                          <p className="text-white/80">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA button */}
                    <motion.button
                      className="mt-10 px-6 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#0A090C] font-medium flex items-center gap-2 group hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span>Conhecer metodologia completa</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional testimonial */}
          <motion.div 
            className="mt-16 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="text-5xl text-[#D4AF37]/20 absolute -top-8 left-0">"</div>
              <p className="text-lg text-white/80 italic mb-6">
                O método RB transformou completamente minha forma de estudar. Em 6 meses, consegui absorver mais conteúdo do que nos 2 anos anteriores. Fui aprovado em 3º lugar para a magistratura federal.
              </p>
              <div className="text-5xl text-[#D4AF37]/20 absolute bottom-0 right-0">"</div>
            </div>
            
            <div className="flex items-center justify-center mt-8">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/43.jpg" 
                  alt="Testimonial Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-medium text-white">Dr. Marcos Oliveira</div>
                <div className="text-sm text-[#D4AF37]">Juiz Federal - TRF3</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};