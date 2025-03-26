import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock, ArrowUpRight, ChevronRight, Bookmark, Star, Eye, Users, TrendingUp } from 'lucide-react';

export const NewsSection = () => {
  const [hoveredNews, setHoveredNews] = useState<number | null>(null);

  // Enhanced news data with more metadata and featured flag
  const news = [
    {
      id: 1,
      title: "Novo curso intensivo de Direito Constitucional preparado para o Edital",
      category: "Lançamentos",
      date: "15/03/2023",
      name: "tecnicas-avancadas-equacoes",
      readTime: "4 min",
      views: "2.4K",
      featured: true,
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3",
      excerpt: "Preparamos um curso intensivo focado nas principais questões de Direito Constitucional que serão cobradas no próximo edital com base em nossa análise exclusiva.",
      tags: ["Direito Constitucional", "Curso Intensivo", "Edital"]
    },
    {
      id: 2,
      title: "RB Cursos celebra 90% de aprovação em concursos públicos federais",
      category: "Resultados",
      date: "02/02/2023",
      readTime: "3 min",
      name: "tecnicas-avancadas-equacoes",
      views: "3.8K",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3",
      excerpt: "Nosso método exclusivo alcançou mais uma vez resultados excepcionais nas aprovações dos principais concursos federais realizados no último trimestre.",
      tags: ["Aprovações", "Resultados", "Concursos Federais"]
    },
    {
      id: 3,
      title: "Estratégias avançadas para resolver questões de RLM em tempo recorde",
      category: "Metodologia",
      date: "28/01/2023",
      name: "tecnicas-avancadas-equacoes",
      readTime: "5 min",
      views: "1.9K",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3",
      excerpt: "Conheça as técnicas desenvolvidas pelo Prof. Yan Ribeiro para solucionar questões complexas de Raciocínio Lógico-Matemático com rapidez e precisão.",
      tags: ["RLM", "Técnicas Avançadas", "Economia de Tempo"]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0A090C] to-[#080608]">
      {/* Premium visual background elements */}
      <div className="absolute inset-0 z-0">
        {/* Premium grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
        
        {/* Luxury gold atmospheric glow */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Diagonal luxury lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.04]">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              style={{
                top: `${i * 35}%`,
                left: '-50%',
                transform: 'rotate(-30deg)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 * i }}
            />
          ))}
        </div>
        
        {/* Subtle particle effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#D4AF37]"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -(20 + Math.random() * 30)],
                opacity: [0, 0.5, 0],
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ultra-Premium Section Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="px-5 py-2 bg-[#D4AF37]/10 backdrop-blur-sm rounded-full border border-[#D4AF37]/20 flex items-center">
              <motion.div 
                className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center mr-3"
                animate={{ 
                  scale: [0.95, 1.05, 0.95],
                  boxShadow: [
                    "0 0 0 rgba(212,175,55,0.4)",
                    "0 0 10px rgba(212,175,55,0.6)",
                    "0 0 0 rgba(212,175,55,0.4)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="w-3 h-3 text-[#080608]" />
              </motion.div>
              <span className="text-sm font-medium bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                NOVIDADES & ARTIGOS
              </span>
            </div>
          </motion.div>

          {/* Premium section title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Últimas 
            <span className="relative ml-3 inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                Atualizações
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

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Fique por dentro dos lançamentos, resultados e conteúdos exclusivos 
            para maximizar seu desempenho nos estudos.
          </motion.p>
          
          {/* Luxury animated divider */}
          <motion.div 
            className="relative h-[2px] w-32 my-8 mx-auto overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg, transparent, #D4AF37, #F9E077, #D4AF37, transparent)",
                backgroundSize: "200% 100%"
              }}
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Featured Article - Takes up first 8 columns on large screens */}
          {news.filter(item => item.featured).map(featuredItem => (
            <motion.div
              key={featuredItem.id}
              className="lg:col-span-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onMouseEnter={() => setHoveredNews(featuredItem.id)}
              onMouseLeave={() => setHoveredNews(null)}
            >
              <div className="bg-[#13121A] rounded-2xl overflow-hidden border border-white/5 shadow-xl h-full">
                {/* Premium card glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 blur-xl -z-10"
                  animate={{ 
                    opacity: hoveredNews === featuredItem.id ? 0.2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Image side */}
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    {/* Featured badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="px-3 py-1.5 bg-[#D4AF37] rounded-full text-[#080608] text-xs font-medium flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 fill-[#080608] text-[#080608]" />
                        Em Destaque
                      </div>
                    </div>
                    
                    {/* Category tag */}
                    <div className="absolute top-4 right-4 z-20">
                      <div className="px-3 py-1.5 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-medium">
                        {featuredItem.category}
                      </div>
                    </div>
                    
                    {/* Image with premium hover effect */}
                    <div className="relative w-full h-full overflow-hidden">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#13121A] via-[#13121A]/40 to-transparent z-10"></div>
                        <img 
                          src={featuredItem.image} 
                          alt={featuredItem.title} 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      {/* Scan line effect */}
                      <motion.div
                        className="absolute inset-x-0 h-[30%] bg-gradient-to-b from-[#D4AF37]/10 to-transparent z-10 pointer-events-none"
                        animate={{
                          top: ['0%', '70%', '0%'],
                        }}
                        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
                      />
                    </div>
                  </div>
                  
                  {/* Content side */}
                  <div className="p-8 lg:p-10 flex flex-col">
                    {/* Metadata */}
                    <div className="flex items-center text-xs text-white/60 mb-6 gap-5">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredItem.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredItem.readTime} de leitura
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        {featuredItem.views} visualizações
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                      {featuredItem.title}
                    </h3>
                    
                    {/* Fancy divider */}
                    <div className="h-px w-16 bg-gradient-to-r from-[#D4AF37] to-transparent mb-4"></div>
                    
                    {/* Excerpt */}
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {featuredItem.excerpt}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredItem.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs bg-white/5 rounded-full text-white/70 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      {/* Premium CTA */}
                      <motion.a
                        href={`/article/${featuredItem.name}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white overflow-hidden relative group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/80 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                        <span className="absolute inset-0 bg-white/5 border border-white/10 group-hover:border-[#D4AF37]/50 rounded-lg transition-colors"></span>
                        <span className="relative font-medium group-hover:text-[#080608] transition-colors">Ler artigo completo</span>
                        <ArrowRight className="w-4 h-4 relative group-hover:text-[#080608] group-hover:translate-x-1 transition-all" />
                        
                        {/* Shine effect */}
                        <motion.span
                          className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 group-hover:animate-shine"
                        />
                      </motion.a>
                      
                      {/* Bookmark button */}
                      <motion.button
                        className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/5 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Bookmark className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Regular news column - Takes up remaining 4 columns */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {news.filter(item => !item.featured).map((item, index) => (
              <motion.div 
                key={item.id}
                className="bg-[#13121A] rounded-xl overflow-hidden border border-white/5 relative h-full group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (index * 0.2), duration: 0.6 }}
                onMouseEnter={() => setHoveredNews(item.id)}
                onMouseLeave={() => setHoveredNews(null)}
                whileHover={{ y: -4 }}
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 blur-lg -z-10"
                  animate={{ 
                    opacity: hoveredNews === item.id ? 0.15 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex flex-col h-full">
                  <div className="h-44 relative overflow-hidden">
                    {/* Category tag */}
                    <div className="absolute top-3 left-3 z-20">
                      <div className="px-2.5 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-medium">
                        {item.category}
                      </div>
                    </div>
                    
                    {/* Premium image hover effect */}
                    <div className="w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#13121A] via-transparent to-transparent z-10"></div>
                      <motion.img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Scan line effect */}
                      <motion.div
                        className="absolute inset-x-0 h-[30%] bg-gradient-to-b from-[#D4AF37]/10 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100"
                        animate={{
                          top: ['0%', '70%', '0%'],
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Metadata row */}
                    <div className="flex items-center justify-between text-xs text-white/60 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3 h-3" />
                        {item.views}
                      </div>
                    </div>
                    
                    {/* Title with hover effect */}
                    <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-white/70 mb-4 line-clamp-2">{item.excerpt}</p>
                    
                    {/* Read more link with premium styling */}
                    <div className="mt-auto">
                      <motion.a 
                        href={`/noticias/${item.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D4AF37] group/link"
                        whileHover={{ x: 3 }}
                      >
                        <span>Ler artigo</span>
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                        >
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </motion.div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Ultra-Premium CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.div 
            className="inline-block relative"
            whileHover={{ scale: 1.03 }}
          >
            <motion.div 
              className="absolute -inset-2 rounded-lg bg-gradient-to-r from-[#D4AF37]/40 to-[#D4AF37]/10 opacity-75 blur-lg"
              animate={{ 
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <a 
              href="/noticias"
              className="relative flex items-center gap-3 px-8 py-4 bg-[#13121A] rounded-lg border border-[#D4AF37]/30 text-white"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-[#080608]" />
              </div>
              <span className="font-medium">Ver todas as notícias e artigos</span>
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.3)" }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.03, 1.1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};