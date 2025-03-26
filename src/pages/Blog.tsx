import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User, Tag, Search, Filter, X, ArrowRight, EyeIcon, BookOpen, Clock } from 'lucide-react';
import yan from '../images/Yan.png';
import paula from '../images/Paula.png';

// Define article type for proper typing
interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    id: string;
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  slug: string;
  readTime?: string;
  views?: string;
  content?: string;
}

const Blog = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showMobileFilters, setShowMobileFilters] = useState<boolean>(false);
  const [animateHeader, setAnimateHeader] = useState<boolean>(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setAnimateHeader(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hardcoded article data - eventually should be fetched from API or CMS
  const articles: Article[] = [
    {
      id: '1',
      title: 'Técnicas avançadas para resolução de equações diferenciais',
      excerpt: 'Descubra métodos eficientes para solucionar problemas complexos de equações diferenciais em concursos públicos.',
      date: '15 Mar 2025',
      author: {
        id: 'prof-yan',
        name: 'Prof. Yan',
        role: 'Especialista em Matemática',
        avatar: yan // Using path instead of direct import
      },
      category: 'Matemática',
      slug: 'tecnicas-avancadas-equacoes',
      readTime: '8 min',
      views: '2.4K',
      content: `
      <h2>Introdução às Equações Diferenciais em Concursos</h2>
      <p>As equações diferenciais representam um dos tópicos mais desafiadores em provas de concursos da área de exatas. Muitos candidatos encontram dificuldades ao se depararem com problemas que envolvem taxas de variação e relações entre funções e suas derivadas.</p>
      
      <p>Neste artigo, vamos explorar técnicas avançadas que podem ser aplicadas para resolver esses problemas de maneira eficiente, economizando tempo precioso durante a prova.</p>
      
      <h3>Por que equações diferenciais são importantes em concursos?</h3>
      <p>Além de serem frequentes em provas de concursos para áreas de engenharia, economia e ciências exatas, as equações diferenciais testam a capacidade do candidato de modelar problemas reais e aplicar conhecimentos matemáticos de forma integrada.</p>
      
      <div class="article-highlight">
        <p><strong>Dica importante:</strong> As bancas examinadoras geralmente valorizam mais a compreensão do método de resolução do que apenas a resposta final. Mostrar o passo a passo de forma clara pode garantir pontuação parcial mesmo em caso de erro no resultado.</p>
      </div>
      
      <h2>Método 1: Separação de Variáveis Simplificada</h2>
      <p>A técnica de separação de variáveis é fundamental para resolver equações diferenciais de primeira ordem. Vamos ver como aplicá-la de forma otimizada:</p>
      
      <ol>
        <li>Identifique os termos que contêm x e y</li>
        <li>Reorganize a equação para isolar os termos em x de um lado e os termos em y do outro</li>
        <li>Integre ambos os lados separadamente</li>
      </ol>
      
      <div class="article-formula">
        <p>Considerando uma equação na forma:</p>
        <p class="formula">M(x) + N(y)y' = 0</p>
        <p>Podemos reorganizá-la como:</p>
        <p class="formula">N(y)dy = -M(x)dx</p>
        <p>Integrando ambos os lados:</p>
        <p class="formula">∫N(y)dy = -∫M(x)dx + C</p>
      </div>
      
      <p>Esta abordagem permite transformar uma equação diferencial em uma equação algébrica, facilitando sua resolução.</p>
      
      <h2>Método 2: Fator Integrante para Equações Lineares</h2>
      <p>Para equações lineares de primeira ordem na forma padrão, o método do fator integrante é extremamente eficaz:</p>
      
      <div class="article-formula">
        <p class="formula">y' + P(x)y = Q(x)</p>
      </div>
      
      <p>O fator integrante é dado por:</p>
      
      <div class="article-formula">
        <p class="formula">μ(x) = e^{∫P(x)dx}</p>
      </div>
      
      <p>Multiplicando toda a equação por μ(x), obtemos:</p>
      
      <div class="article-formula">
        <p class="formula">μ(x)y' + μ(x)P(x)y = μ(x)Q(x)</p>
      </div>
      
      <p>Que simplifica para:</p>
      
      <div class="article-formula">
        <p class="formula">d/dx[μ(x)y] = μ(x)Q(x)</p>
      </div>
      
      <p>Integrando ambos os lados:</p>
      
      <div class="article-formula">
        <p class="formula">μ(x)y = ∫μ(x)Q(x)dx + C</p>
      </div>
      
      <div class="article-highlight">
        <p><strong>Exemplo prático:</strong> Em uma prova da banca CESPE, foi solicitada a resolução da equação <span class="formula">y' + 2xy = x</span>. Utilizando o método do fator integrante:</p>
        <p>P(x) = 2x, então μ(x) = e^{∫2xdx} = e^{x²}</p>
        <p>Multiplicando a equação original por e^{x²}:</p>
        <p>e^{x²}y' + 2xe^{x²}y = xe^{x²}</p>
        <p>Que é equivalente a: d/dx[e^{x²}y] = xe^{x²}</p>
        <p>Integrando: e^{x²}y = ∫xe^{x²}dx + C</p>
        <p>Usando integração por partes: e^{x²}y = (1/2)e^{x²} + C</p>
        <p>Portanto: y = 1/2 + Ce^{-x²}</p>
      </div>
      
      <h2>Método 3: Equações de Segunda Ordem com Coeficientes Constantes</h2>
      <p>Para equações homogêneas de segunda ordem com coeficientes constantes:</p>
      
      <div class="article-formula">
        <p class="formula">ay'' + by' + cy = 0</p>
      </div>
      
      <p>Podemos utilizar a equação característica:</p>
      
      <div class="article-formula">
        <p class="formula">ar² + br + c = 0</p>
      </div>
      
      <p>As soluções dependem das raízes da equação característica:</p>
      
      <ul>
        <li>Se r₁ e r₂ são raízes reais distintas: y = C₁e^{r₁x} + C₂e^{r₂x}</li>
        <li>Se r₁ = r₂: y = (C₁ + C₂x)e^{r₁x}</li>
        <li>Se r = α ± βi são raízes complexas: y = e^{αx}[C₁cos(βx) + C₂sin(βx)]</li>
      </ul>
      
      <h3>Aplicação em Problemas de Valor Inicial</h3>
      <p>Em concursos, frequentemente são dados problemas de valor inicial (PVI), onde além da equação diferencial, são fornecidas condições iniciais. A estratégia consiste em:</p>
      
      <ol>
        <li>Encontrar a solução geral da equação diferencial</li>
        <li>Aplicar as condições iniciais para determinar as constantes</li>
        <li>Verificar a solução obtida</li>
      </ol>
      
      <h2>Dicas para Otimizar o Tempo de Resolução</h2>
      <p>Durante a prova, cada segundo conta. Aqui estão algumas dicas para otimizar seu tempo:</p>
      
      <ul>
        <li>Identifique o tipo de equação antes de iniciar a resolução</li>
        <li>Memorize os padrões de soluções para os tipos mais comuns de equações</li>
        <li>Pratique a aplicação dos métodos em diferentes contextos</li>
        <li>Desenvolva intuição para escolher o método mais eficiente para cada problema</li>
        <li>Mantenha um repertório de soluções de equações comuns memorizadas</li>
      </ul>
      
      <p>Lembre-se de que a prática consistente é a chave para desenvolver intuição e velocidade na resolução de equações diferenciais. Resolver diversos exercícios usando os métodos apresentados ajudará a consolidar o conhecimento e preparará você para enfrentar desafios em provas de concursos com confiança.</p>
      
      <h2>Conclusão</h2>
      <p>As técnicas apresentadas neste artigo fornecem um arsenal poderoso para abordar equações diferenciais em concursos públicos. Dominar esses métodos não apenas aumentará suas chances de acerto, mas também reduzirá significativamente o tempo necessário para resolver questões complexas.</p>
      
      <p>Continue praticando e aprimorando suas habilidades. Com dedicação e a aplicação sistemática dessas técnicas, você estará melhor preparado para enfrentar os desafios das provas de concursos na área de matemática.</p>
      
      <div class="article-references">
        <h3>Referências recomendadas</h3>
        <ul>
          <li>Boyce, W. E., DiPrima, R. C. (2012). <em>Equações Diferenciais Elementares e Problemas de Valores de Contorno</em>. 10ª ed. Rio de Janeiro: LTC.</li>
          <li>Zill, D. G. (2016). <em>Equações Diferenciais com Aplicações em Modelagem</em>. 3ª ed. São Paulo: Cengage Learning.</li>
          <li>Simmons, G. F. (2007). <em>Equações Diferenciais: Teoria, Técnica e Prática</em>. São Paulo: McGraw-Hill.</li>
        </ul>
      </div>
    `
        },
        
        {
      id: '2',
      title: 'Como desenvolver raciocínio lógico para provas',
      excerpt: 'Estratégias práticas para aprimorar seu pensamento lógico e melhorar seu desempenho em questões complexas.',
      date: '10 Mar 2025',
      author: {
        id: 'prof-paula',
        name: 'Profa. Paula',
        role: 'Especialista em Português',
        avatar: paula
      },
      category: 'Raciocínio Lógico',
      slug: 'desenvolvimento-raciocinio-logico',
      readTime: '6 min',
      views: '1.8K'
    },
    {
      id: '3',
      title: 'Matemática financeira simplificada para concursos',
      excerpt: 'Um guia completo sobre juros, amortização e demais temas frequentes em provas de concursos públicos.',
      date: '05 Mar 2025',
      author: {
        id: 'prof-yan',
        name: 'Prof. Yan',
        role: 'Especialista em Matemática',
        avatar: yan
      },
      category: 'Matemática Financeira',
      slug: 'matematica-financeira-simplificada',
      readTime: '10 min',
      views: '3.2K'
    },
    {
      id: '4',
      title: 'Geometria espacial: visualização e resolução rápida',
      excerpt: 'Técnicas para visualizar problemas tridimensionais e resolvê-los com eficiência em provas de tempo limitado.',
      date: '28 Feb 2025',
      author: {
        id: 'prof-paula',
        name: 'Profa. Paula',
        role: 'Especialista em Português',
        avatar: paula
      },
      category: 'Geometria',
      slug: 'geometria-espacial-visualizacao',
      readTime: '7 min',
      views: '1.5K'
    },
  ];

  // Get all unique categories
  const categories = Array.from(new Set(articles.map(article => article.category)));

  // Get all unique authors
  const authors = Array.from(
    new Set(articles.map(article => article.author.id))
  ).map(authorId => {
    const author = articles.find(article => article.author.id === authorId)?.author;
    return author;
  });

  // Filter articles based on selected filters and search term
  const filteredArticles = articles.filter(article => {
    // First check search term
    if (searchTerm && !article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Then check filters
    if (!filter && !activeCategory) return true;
    if (filter && article.author.id === filter) return true;
    if (activeCategory && article.category === activeCategory) return true;
    return false;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const clearFilters = () => {
    setFilter(null);
    setActiveCategory(null);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A090C] to-[#080608]">
      {/* Floating header - becomes visible on scroll */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-30 backdrop-blur-lg bg-[#080608]/90 border-b border-[#D4AF37]/10 shadow-md transition-all duration-300 ${animateHeader ? 'translate-y-0' : '-translate-y-full'}`}
        animate={{ translateY: animateHeader ? 0 : -100 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center">
              <span className="text-[#080608] font-bold text-xs">RB</span>
            </div>
            <h3 className="font-bold text-white">Blog dos Especialistas</h3>
          </div>
          <div className="relative max-w-sm">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D4AF37]/60">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Pesquisar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border border-[#D4AF37]/20 bg-[#13121A]/60 text-white text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-transparent"
            />
          </div>
        </div>
      </motion.div>

      <div className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="relative max-w-4xl mx-auto text-center mb-16 lg:mb-24 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#D4AF37]/10 rounded-full mix-blend-multiply opacity-20 filter blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#D4AF37]/5 rounded-full mix-blend-multiply opacity-20 filter blur-3xl"></div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 backdrop-blur-sm border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold px-4 py-1 rounded-full mb-6">Conhecimento que faz a diferença</span>
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-white">
                Blog dos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F9E077]">Especialistas</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                Artigos exclusivos escritos pelos melhores professores para impulsionar sua preparação
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              className="relative max-w-2xl mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#D4AF37]/60">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Pesquisar artigos, temas ou conceitos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-5 py-4 rounded-full border border-[#D4AF37]/20 bg-[#13121A]/60 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-transparent text-white"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#D4AF37]/60 hover:text-[#D4AF37]"
                >
                  <X size={18} />
                </button>
              )}
            </motion.div>
          </div>

          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full flex items-center justify-between px-4 py-3 bg-[#13121A] border border-[#D4AF37]/20 rounded-lg shadow-md"
            >
              <span className="font-medium flex items-center gap-2 text-white">
                <Filter size={18} className="text-[#D4AF37]" />
                Filtros
              </span>
              <span className="text-sm text-[#D4AF37]">
                {filter || activeCategory ? '1 filtro ativo' : 'Nenhum filtro'}
              </span>
            </button>
          </div>

          {/* Filters Section */}
          <motion.div
            className={`mb-16 ${showMobileFilters ? 'block' : 'hidden md:block'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 bg-[#13121A] border border-[#D4AF37]/20 rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-white">Filtros</h2>
                  {(filter || activeCategory || searchTerm) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-[#D4AF37] hover:text-[#F9E077] flex items-center gap-1"
                    >
                      <X size={14} />
                      Limpar
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setFilter(null);
                      setActiveCategory(null);
                    }}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${!filter && !activeCategory
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] shadow-md hover:shadow-lg'
                        : 'bg-[#201F26] hover:bg-[#2A2933] text-white'
                      }`}
                  >
                    Todos os artigos
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Authors filter */}
                <div>
                  <h3 className="font-medium text-white/80 mb-3">Por especialista</h3>
                  <div className="flex flex-wrap gap-3">
                    {authors.map((author) => (
                      author && (
                        <button
                          key={author.id}
                          onClick={() => {
                            setFilter(author.id);
                            setActiveCategory(null);
                          }}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${filter === author.id
                              ? 'bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] shadow-md'
                              : 'bg-[#201F26] hover:bg-[#2A2933] text-white'
                            }`}
                        >
                          <div className="h-6 w-6 rounded-full bg-[#181820] flex items-center justify-center overflow-hidden">
                            {author.avatar ? (
                              <img
                                src={author.avatar}
                                alt={author.name}
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                  // Fallback if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.onerror = null;
                                  target.src = 'https://via.placeholder.com/40';
                                }}
                              />
                            ) : (
                              <User size={14} className="text-[#D4AF37]" />
                            )}
                          </div>
                          {author.name}
                        </button>
                      )
                    ))}
                  </div>
                </div>

                {/* Categories filter */}
                <div>
                  <h3 className="font-medium text-white/80 mb-3">Por categoria</h3>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setFilter(null);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeCategory === category
                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] shadow-md'
                            : 'bg-[#201F26] hover:bg-[#2A2933] text-white'
                          }`}
                      >
                        <Tag size={14} className={activeCategory === category ? 'text-[#080608]' : 'text-[#D4AF37]'} />
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results summary */}
          {(filter || activeCategory || searchTerm) && (
            <div className="mb-8">
              <p className="text-white/70">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
                {filter && authors.find(a => a?.id === filter) && ` para ${authors.find(a => a?.id === filter)?.name}`}
                {activeCategory && ` em ${activeCategory}`}
                {searchTerm && ` com "${searchTerm}"`}
              </p>
            </div>
          )}

          {/* Featured Article */}
          {filteredArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-16 lg:mb-24"
            >
              <Link to={`/article/${filteredArticles[0].slug}`} className="block group">
                <div className="grid md:grid-cols-5 gap-8 bg-[#13121A] border border-[#D4AF37]/10 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:border-[#D4AF37]/30 group-hover:scale-[1.01]">
                  <div className="md:col-span-3 h-72 md:h-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#080608]/90 to-[#0F0E13]/40 mix-blend-multiply opacity-60 group-hover:opacity-50 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-black/50 backdrop-blur-sm border border-[#D4AF37]/30 flex items-center justify-center overflow-hidden">
                          {filteredArticles[0].author.avatar ? (
                            <img
                              src={filteredArticles[0].author.avatar}
                              alt={filteredArticles[0].author.name}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = 'https://via.placeholder.com/40';
                              }}
                            />
                          ) : (
                            <User size={18} className="text-[#D4AF37]" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{filteredArticles[0].author.name}</div>
                          <div className="text-xs text-white/80">{filteredArticles[0].author.role}</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <span className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] py-1 px-3 rounded-full text-xs font-medium">
                          {filteredArticles[0].category}
                        </span>

                        {filteredArticles[0].readTime && (
                          <span className="inline-flex items-center gap-1 bg-black/30 backdrop-blur-sm text-white/70 py-1 px-3 rounded-full text-xs">
                            <Clock size={12} />
                            {filteredArticles[0].readTime}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar size={16} className="text-[#D4AF37]" />
                        <span className="text-white/60 text-sm">{filteredArticles[0].date}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                        {filteredArticles[0].title}
                      </h3>
                      <p className="text-white/70 mb-6 leading-relaxed">
                        {filteredArticles[0].excerpt}
                      </p>
                    </div>
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#D4AF37] text-[#080608] font-medium transform group-hover:translate-x-2 transition-transform duration-300">
                        Ler artigo completo
                        <ChevronRight size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {filteredArticles.slice(1).map((article) => (
                <motion.div
                  key={article.id}
                  variants={itemVariants}
                  className="bg-[#13121A] border border-[#D4AF37]/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:border-[#D4AF37]/30"
                >
                  <Link to={`/article/${article.slug}`} className="block group">
                    <div className="h-52 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080608] to-transparent opacity-70 z-10"></div>
                   
                      <div className="absolute top-4 right-4 z-20">
                        <span className="bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] py-1 px-3 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>

                      {/* Info badges over the image */}
                      <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                        {article.readTime && (
                          <div className="inline-flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white/70 py-1 px-2 rounded-full text-xs">
                            <Clock size={12} />
                            {article.readTime}
                          </div>
                        )}

                        {article.views && (
                          <div className="inline-flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white/70 py-1 px-2 rounded-full text-xs">
                            <EyeIcon size={12} />
                            {article.views}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-[#181820] border border-[#D4AF37]/20 flex items-center justify-center overflow-hidden">
                            {article.author.avatar ? (
                              <img src={article.author.avatar} alt={article.author.name} className="h-full w-full object-cover" onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = 'https://via.placeholder.com/40';
                              }} />
                            ) : (
                              <User size={16} className="text-[#D4AF37]" />
                            )}
                          </div>
                          <div className="text-sm text-white/80">{article.author.name}</div>
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <Calendar size={14} className="text-[#D4AF37]/80" />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-white/70 mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="pt-4 border-t border-[#D4AF37]/10">
                        <span className="text-[#D4AF37] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                          Ler artigo
                          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-[#13121A] border border-[#D4AF37]/10 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#201F26] mb-4">
                <Search size={24} className="text-[#D4AF37]/60" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Nenhum artigo encontrado</h3>
              <p className="text-white/60 mb-6">
                Tente ajustar seus filtros ou termos de pesquisa para encontrar o que procura.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] rounded-lg font-medium hover:shadow-lg transition-shadow"
              >
                Limpar filtros
              </button>
            </div>
          )}

          {/* Newsletter signup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-24 bg-gradient-to-br from-[#080608] to-[#0A090C] border border-[#D4AF37]/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Receba nossos artigos em primeira mão</h2>
            <p className="text-white/70 mb-6">
              Assine nossa newsletter para receber notificações sobre novos artigos e atualizações exclusivas.
            </p>
            <form className="flex flex-col md:flex-row items-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full md:w-96 px-4 py-3 rounded-full bg-[#13121A] border border-[#D4AF37]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] rounded-full font-medium hover:shadow-lg transition-shadow"
              >
                Assinar
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Blog;