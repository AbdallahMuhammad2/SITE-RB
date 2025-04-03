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
  ArrowRight,
  Building,
  BookOpen,
  Award,
  FileText
} from 'lucide-react';
import { Helmet } from 'react-helmet'; // Você precisará adicionar esta dependência

const ArticleEmurcPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Detectar scroll para o header flutuante
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const relatedArticles = [
    {
      id: 'concurso-pm-ba',
      slug: 'concurso-pm-ba-proximo-certame',
      title: 'Concurso PM-BA: Tudo sobre o próximo certame',
      date: '28 Mar 2025',
      image: '/images/blog/pm-ba-thumb.jpg'
    },
    {
      id: 'concursos-2025',
      slug: 'concursos-mais-esperados-2025',
      title: 'Concursos 2025: Os certames mais esperados do ano',
      date: '25 Mar 2025',
      image: '/images/blog/concursos-2025.jpg'
    },
    {
      id: 'pc-ba',
      slug: 'concurso-pc-ba-novidades',
      title: 'Concurso PC-BA: Novidades sobre o próximo edital',
      date: '22 Mar 2025',
      image: '/images/blog/pc-ba-thumb.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A090C] to-[#080608]">
      <Helmet>
        <title>EMURC autoriza abertura de concurso público | RB Cursos</title>
        <meta name="description" content="Foi publicado nesta sexta-feira (21), no Diário Oficial do Município, o termo de autorização para abertura do concurso público da Empresa Municipal de Urbanização de Vitória da Conquista (Emurc)." />
      </Helmet>
      
      {/* Floating header when scrolled down */}
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
          {/* Article Header */}
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
                    Vitória da Conquista
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  EMURC autoriza abertura de concurso público em Vitória da Conquista
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
                    <span>30 Mar 2025</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/60">
                    <Clock size={16} className="text-[#D4AF37]" />
                    <span>5 min de leitura</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
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
                    src="/images/blog/emurc-concurso.jpg" 
                    alt="Sede da EMURC em Vitória da Conquista" 
                    className="w-full h-auto object-cover max-h-[500px]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80';
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080608]/80 via-transparent to-transparent"></div>
                  
                  {/* Image credit / caption */}
                  <div className="absolute bottom-4 right-4 text-white/60 text-xs">
                    Imagem: Prefeitura de Vitória da Conquista
                  </div>
                </div>
              
                {/* Article Content */}
                <div className="article-content prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-white/80 prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:text-[#F9E077]">
                  <p className="lead">
                    Foi publicado nesta sexta-feira (21), no Diário Oficial do Município, o termo de autorização para abertura do concurso público da Empresa Municipal de Urbanização de Vitória da Conquista (Emurc), visando selecionar profissionais qualificados que vão integrar sua equipe em novos projetos de infraestrutura.
                  </p>

                  <div className="article-highlight">
                    <p><strong>Destaque:</strong> O Instituto Avalia de Inovação em Avaliação e Seleção será a banca organizadora responsável pelo certame.</p>
                  </div>
                  
                  <p>
                    O Instituto Avalia de Inovação em Avaliação e Seleção será a banca organizadora responsável pelo certame, que visa atender às exigências constitucionais e garantir a qualidade dos serviços oferecidos à população de Vitória da Conquista. O edital com os cargos oferecidos, quantidades de vagas e demais informações adicionais será publicado em breve.
                  </p>
                  
                  <h2>Importância do Concurso Público</h2>
                  <p>
                    O concurso público é um instrumento fundamental para promover a impessoalidade e a isonomia no acesso aos cargos públicos, conforme estabelecido no artigo 37 da Constituição Federal. É o meio mais adequado para selecionar os melhores candidatos, considerando os princípios constitucionais para o exercício das funções públicas.
                  </p>
                  
                  <h2>Sobre a EMURC</h2>
                  <p>
                    A Emurc é uma empresa pública com personalidade jurídica de direito privado, criada em 23 de novembro de 1977, por meio da Lei Municipal 134/77, com o objetivo de implantar planos urbanísticos, executar e fiscalizar serviços de caráter econômico, podendo realizá-los também nos municípios vizinhos pertencentes à região administrativa da qual Vitória da Conquista é sede. Ela é responsável por diversas obras de infraestrutura, a exemplo das pavimentações na cidade e na Zona Rural.
                  </p>
                  
                  <h2>Perspectivas para Concursos em 2025</h2>
                  <p>
                    Como estão seus planos para esse ano de 2025? No mundo dos concursos público não podemos perder tempo, pois quem se antecipa sai na frente!
                  </p>
                  
                  <p>
                    Já são várias seleções confirmadas para 2025 e, ao longo dos próximos meses, a quantidade de oportunidades previstas só vai aumentar. Além disso, o Congresso aprovou o Projeto de Lei Orçamentária Anual (PLOA 2025), o qual prevê o total de 57.972 vagas para provimentos em concursos públicos.
                  </p>
                  
                  <div className="bg-[#13121A] p-6 rounded-xl border border-[#D4AF37]/10 my-8">
                    <h3 className="text-xl text-[#D4AF37] mb-4">Áreas com concursos previstos para 2025:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80">
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Policiais
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Fiscais
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Controle
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Tribunais e Procuradorias
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Ministérios Públicos
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Defensorias
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Legislativos
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Saúde
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Bancários
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Educação
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Prefeituras
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                          <ChevronRight size={14} className="text-[#D4AF37]" />
                        </div>
                        Concursos Conselhos
                      </li>
                    </ul>
                  </div>
                  
                  <p>
                    Em meio a tantas opções, a dúvida pode tomar conta do concurseiros, mas esse artigo foi criado exatamente para ser uma luz na sua busca. Por isso, separamos as principais oportunidades previstas, divididas por áreas de atuação.
                  </p>
                  
                  <p>
                    Então, se você deseja mudar de vida ingressando na carreira pública, já salva essa página nos seus favoritos e fique sempre atualizado com as novidades nos concursos espalhados por todo o país.
                  </p>
                  
                  <div className="my-12 p-8 bg-[#13121A] border border-[#D4AF37]/20 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      Prepare-se com a RB Cursos
                    </h3>
                    <p className="text-white/80 mb-6">
                      Não perca tempo! Comece agora sua preparação para o concurso da EMURC e outros certames previstos para 2025. Nossa equipe de professores especialistas está pronta para ajudá-lo a conquistar sua aprovação.
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
              
              {/* Article Footer */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 rounded-full bg-[#201F26] text-white/70 text-sm flex items-center gap-1.5 hover:bg-[#2A2933] transition-colors cursor-pointer">
                      <Building size={14} className="text-[#D4AF37]" />
                      Concurso Público
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#201F26] text-white/70 text-sm flex items-center gap-1.5 hover:bg-[#2A2933] transition-colors cursor-pointer">
                      <Award size={14} className="text-[#D4AF37]" />
                      EMURC
                    </div>
                    <div className="px-3 py-1 rounded-full bg-[#201F26] text-white/70 text-sm flex items-center gap-1.5 hover:bg-[#2A2933] transition-colors cursor-pointer">
                      <FileText size={14} className="text-[#D4AF37]" />
                      Edital
                    </div>
                  </div>
                  
                  {/* Share buttons */}
                  <div className="flex items-center gap-3">
                    <span className="text-white/60 text-sm">Compartilhar:</span>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-[#201F26] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#080608] transition-colors">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-[#201F26] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#080608] transition-colors">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-[#201F26] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#080608] transition-colors">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-16 bg-[#13121A] rounded-2xl p-8 border border-[#D4AF37]/10">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#D4AF37]/30">
                      <img 
                        src="/images/logo-rb.png" 
                        alt="RB Cursos" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://via.placeholder.com/200?text=RB';
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Equipe RB Cursos</h3>
                    <p className="text-white/70 mb-4">
                      Especialistas em concursos públicos, nossa equipe está sempre atualizada com as últimas notícias e tendências do mercado para manter você sempre informado e preparado para sua aprovação.
                    </p>
                    <div className="flex items-center gap-3">
                      <a href="/sobre-nos" className="text-[#D4AF37] hover:text-[#F9E077] transition-colors flex items-center gap-1">
                        <span>Conheça nossa equipe</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation between articles */}
              <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row gap-4 justify-between">
                  <Link 
                    to="/blog"
                    className="px-6 py-3 bg-[#13121A] hover:bg-[#201F26] border border-white/10 rounded-xl flex items-center gap-2 transition-colors"
                  >
                    <ArrowLeft size={16} className="text-[#D4AF37]" />
                    <span className="text-white">Voltar para o Blog</span>
                  </Link>
                  
                  <Link 
                    to="/blog/concurso-pm-ba-proximo-certame"
                    className="px-6 py-3 bg-[#13121A] hover:bg-[#201F26] border border-white/10 rounded-xl flex items-center gap-2 transition-colors"
                  >
                    <span className="text-white">Próximo Artigo</span>
                    <ArrowRight size={16} className="text-[#D4AF37]" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-[#13121A] rounded-2xl p-6 border border-[#D4AF37]/10 mb-8">
                  <h3 className="text-xl font-bold text-white mb-6">Artigos relacionados</h3>
                  
                  <div className="space-y-6">
                    {relatedArticles.map((related, index) => (
                      <div key={related.id} className={`flex gap-4 ${index !== relatedArticles.length - 1 ? 'pb-6 border-b border-white/5' : ''}`}>
                        <div className="w-16 h-16 rounded-lg bg-[#201F26] overflow-hidden flex-shrink-0">
                          {related.image ? (
                            <img 
                              src={related.image} 
                              alt={related.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = 'https://via.placeholder.com/100?text=Article';
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#201F26]">
                              <FileText size={20} className="text-[#D4AF37]/40" />
                            </div>
                          )}
                        </div>
                        <div>
                          <Link 
                            to={`/blog/${related.slug}`} 
                            className="text-white hover:text-[#D4AF37] transition-colors font-medium line-clamp-2"
                          >
                            {related.title}
                          </Link>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="text-xs text-white/60">{related.date}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-[#13121A] rounded-2xl p-6 border border-[#D4AF37]/10 mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">Categorias</h3>
                  <div className="space-y-2">
                    {["Concursos", "Educação", "Notícias", "Dicas de Estudo", "Aprovados"].map((category) => (
                      <Link
                        key={category}
                        to={`/blog/categoria/${category.toLowerCase()}`}
                        className="px-3 py-1.5 rounded-full text-sm block w-fit bg-[#201F26] text-white/70 hover:bg-[#2A2933] transition-colors"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="bg-[#13121A] rounded-2xl p-6 border border-[#D4AF37]/10">
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
          
          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-24">
            <motion.div
              className="bg-[#13121A] border border-[#D4AF37]/10 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Prepare-se para o Concurso da EMURC</h3>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Não perca tempo! Comece agora sua preparação com materiais atualizados e 
                  professores especializados para garantir sua aprovação.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://api.whatsapp.com/send/?phone=557774009165&text=Ol%C3%A1%21+Quero+me+preparar+para+o+concurso+da+EMURC.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] font-medium rounded-lg flex items-center justify-center gap-2 group hover:shadow-lg transition-shadow"
                >
                  <span>Fale com um especialista</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <Link
                  to="/cursos"
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                  Ver todos os cursos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleEmurcPage;