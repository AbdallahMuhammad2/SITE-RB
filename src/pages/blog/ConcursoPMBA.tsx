import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2,
  ChevronRight, 
  ArrowRight 
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const ConcursoPMBA = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A090C] to-[#080608]">
      <Helmet>
        <title>Concurso PM-BA: Tudo sobre o próximo certame | RB Cursos</title>
        <meta name="description" content="Informações sobre o novo concurso da Polícia Militar da Bahia, com previsão de edital ainda em 2025." />
      </Helmet>
      
      {/* Floating header */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-30 backdrop-blur-lg bg-[#080608]/90 border-b border-[#D4AF37]/10 shadow-md transition-all duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}
        animate={{ translateY: isScrolled ? 0 : -100 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/blog" className="flex items-center gap-2 text-white">
            <ArrowLeft size={18} className="text-[#D4AF37]" />
            <span className="font-medium">Voltar ao Blog</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center space-x-4">
              <button className="text-white/70 hover:text-[#D4AF37] transition-colors">
                <Share2 size={18} />
              </button>
            </div>
            
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center">
              <span className="text-[#080608] font-bold text-xs">RB</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pt-16 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F9E077] transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Voltar para o Blog</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] text-xs font-medium">
                    Concursos
                  </span>
                  <span className="px-3 py-1 bg-[#201F26] text-white/70 rounded-full text-xs">
                    Segurança Pública
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Concurso PM-BA: Tudo sobre o próximo certame
                </h1>
                
                <div className="flex flex-wrap items-center gap-y-3 gap-x-5 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#201F26] overflow-hidden flex items-center justify-center">
                      <User size={16} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Equipe RB</div>
                      <div className="text-sm text-white/60">Editor</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/60">
                    <Calendar size={16} className="text-[#D4AF37]" />
                    <span>28 Mar 2025</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/60">
                    <Clock size={16} className="text-[#D4AF37]" />
                    <span>7 min de leitura</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Conteúdo principal - Será preenchido posteriormente */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-10"
              >
                {/* Featured Image */}
                <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                  <img 
                    src="/images/blog/pm-ba-thumb.jpg" 
                    alt="Policiais Militares da Bahia em formação" 
                    className="w-full h-auto object-cover max-h-[500px]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80';
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080608]/80 via-transparent to-transparent"></div>
                </div>
              
                {/* Conteúdo do artigo */}
                <div className="article-content prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-white/80 prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:text-[#F9E077]">
                  <p className="lead">
                    Informações sobre o novo concurso da Polícia Militar da Bahia, com previsão de edital ainda em 2025.
                  </p>
                  
                  <p>
                    Conteúdo completo será adicionado em breve...
                  </p>

                  <div className="my-12 p-8 bg-[#13121A] border border-[#D4AF37]/20 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                        <ChevronRight className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      Prepare-se com a RB Cursos
                    </h3>
                    <p className="text-white/80 mb-6">
                      Não perca tempo! Comece agora sua preparação para o concurso da PM-BA. 
                      Nossa equipe de professores especialistas está pronta para ajudá-lo a conquistar sua aprovação.
                    </p>
                    <Link 
                      to="/matricula"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] rounded-lg text-[#080608] font-medium hover:shadow-lg transition-shadow"
                    >
                      Conhecer nossos cursos
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Será preenchida posteriormente */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-[#13121A] rounded-2xl p-6 border border-[#D4AF37]/10 mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">Newsletter</h3>
                  <p className="text-white/70 mb-6">
                    Receba novos artigos e dicas exclusivas diretamente no seu e-mail
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="email" 
                      placeholder="Seu melhor e-mail"
                      className="w-full px-4 py-3 rounded-lg bg-[#201F26] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40"
                    />
                    <button 
                      type="submit"
                      className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] font-medium hover:shadow-lg transition-shadow"
                    >
                      Inscrever-se
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcursoPMBA;