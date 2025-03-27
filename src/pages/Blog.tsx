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
    bio: string;
  };
  image: string;
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
      id: '2',
      title: 'A Importância da Gramática na Redação',
      excerpt: 'Como o domínio das regras gramaticais pode ser a chave para o sucesso no ENEM e concursos.',
      date: '18 Mar 2025',
      author: {
        id: 'prof-paula',
        name: 'Profa. Paula Barreto',
        role: 'Especialista em Língua Portuguesa',
        avatar: paula,
        bio: 'Mestre em Letras: Cultura, Educação e Linguagens e Especialista em Teoria e Método de Ensino da Língua Portuguesa.'
      },
      category: 'Gramática',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3',
      slug: 'importancia-gramatica-redacao',
      readTime: '4 min',
      views: '1.2K',
      content: `
        <h2>A Importância da Gramática na Redação: Chave para o Sucesso no ENEM e Concursos</h2>
        <p>A gramática desempenha um papel fundamental na escrita de uma boa redação em exames como o ENEM, vestibulares e concursos. O domínio das regras gramaticais é essencial para garantir clareza, coesão e coerência no texto, permitindo que o autor expresse suas ideias de forma precisa e organizada.</p>
        
        <h3>Clareza e precisão nas ideias</h3>
        <p>Ao compreender os recursos linguísticos, como a concordância verbal e nominal, a regência, a pontuação e a correta utilização dos pronomes, o candidato evita ambiguidades e erros que podem comprometer a compreensão do texto. Um texto bem estruturado e gramaticalmente correto facilita a leitura e transmite credibilidade, demonstrando o preparo do candidato para expressar-se de maneira clara e objetiva.</p>
        
        <div class="article-highlight">
          <p><strong>Atenção:</strong> Nos concursos públicos e no ENEM, erros gramaticais graves podem reduzir significativamente a pontuação da redação, mesmo que o conteúdo seja relevante e bem argumentado.</p>
        </div>
        
        <h3>Coesão e fluidez textual</h3>
        <p>Além disso, o conhecimento da gramática auxilia na coesão textual, que se refere à conexão entre as partes do texto. O uso adequado de conectivos e referências pronominais, por exemplo, contribui para a fluidez da argumentação, evitando repetições desnecessárias e tornando o texto mais sofisticado.</p>
        
        <h3>Avaliação da competência linguística</h3>
        <p>Nos exames e concursos, a capacidade de redigir um texto bem estruturado é um diferencial. A avaliação considera aspectos como a organização das ideias, a argumentação consistente e o uso adequado da norma culta da língua portuguesa. Dessa forma, estudar gramática não significa apenas memorizar regras, mas compreender como aplicá-las para construir textos claros e coesos.</p>
        
        <div class="article-image">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Estudante revisando gramática" />
          <p class="caption">O domínio das regras gramaticais é fundamental para a produção de textos de qualidade</p>
        </div>
        
        <h2>Aspectos gramaticais mais avaliados em redações</h2>
        <p>Entre os principais aspectos gramaticais observados pelos avaliadores, destacam-se:</p>
        
        <ul>
          <li>Concordância verbal e nominal</li>
          <li>Regência verbal e nominal</li>
          <li>Colocação pronominal</li>
          <li>Pontuação</li>
          <li>Ortografia</li>
          <li>Acentuação</li>
          <li>Paralelismo sintático</li>
          <li>Uso adequado dos tempos verbais</li>
        </ul>
        
        <h3>Exercícios para aprimorar seus conhecimentos gramaticais</h3>
        <div class="article-exercise">
          <p>Identifique e corrija os erros gramaticais nas frases abaixo:</p>
          <p>1. "Os candidatos chegaram na sala e fizeram a prova com tranquilidade."</p>
          <p>2. "Haviam muitas questões difíceis no exame."</p>
          <p>3. "Se eu ver o resultado hoje, te aviso."</p>
        </div>
        
        <h2>Conclusão</h2>
        <p>Portanto, investir no estudo da gramática é essencial para quem deseja obter uma boa nota na redação do ENEM, vestibulares e concursos. O domínio da língua permite que o candidato se expresse com segurança e eficácia, aumentando suas chances de sucesso nas avaliações e na vida acadêmica e profissional.</p>
        
        <div class="article-references">
          <h3>Material complementar recomendado</h3>
          <ul>
            <li>Bechara, E. (2019). <em>Moderna Gramática Portuguesa</em>. 39ª ed. Rio de Janeiro: Nova Fronteira.</li>
            <li>Cunha, C., Cintra, L. (2017). <em>Nova Gramática do Português Contemporâneo</em>. 7ª ed. Rio de Janeiro: Lexikon.</li>
            <li>Garcia, O. M. (2010). <em>Comunicação em Prosa Moderna</em>. 27ª ed. Rio de Janeiro: FGV.</li>
          </ul>
        </div>
      `
    },
    
    {
      id: '3',
      title: '5 Razões para Estudar Português',
      excerpt: 'Descubra por que o estudo da língua portuguesa vai muito além de regras gramaticais e pode transformar seu pensamento.',
      date: '22 Mar 2025',
      author: {
        id: 'prof-paula',
        name: 'Profa. Paula Barreto',
        role: 'Especialista em Língua Portuguesa',
        avatar: paula,
        bio: 'Mestre em Letras: Cultura, Educação e Linguagens e Especialista em Teoria e Método de Ensino da Língua Portuguesa.'
      },
      category: 'Língua Portuguesa',
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3',
      slug: 'razoes-para-estudar-portugues',
      readTime: '4 min',
      views: '980',
      content: `
        <h2>5 Razões para Estudar Português</h2>
        <p>A língua portuguesa é um dos elementos fundamentais da nossa comunicação e cultura. No entanto, muitas pessoas questionam a necessidade de estudar gramática e aprofundar-se nas regras do idioma. Baseando-nos na reflexão do texto "Dominar a gramática para quê?", exploramos cinco razões essenciais para investir no aprendizado do português.</p>
        
        <h3>1. Aprimoramento do Pensamento Crítico</h3>
        <p>O estudo da gramática desenvolve o pensamento ordenado e estruturado. Quando entendemos a construção de frases e a função das palavras, passamos a formular argumentos mais claros e convincentes. Por exemplo, ao optar entre uma oração adversativa ("Neymar é bom jogador, mas indisciplinado") e uma concessiva ("Embora seja indisciplinado, Neymar é bom jogador"), direcionamos a ênfase do nosso discurso, o que impacta diretamente na nossa capacidade argumentativa.</p>
        
        <div class="article-highlight">
          <p><strong>Reflexão:</strong> A escolha das estruturas gramaticais não é aleatória. Ela reflete nossa intenção comunicativa e revela nossa capacidade de organizar o pensamento.</p>
        </div>
        
        <h3>2. Maior Compreensão de Textos</h3>
        <p>A gramática não é um fim em si mesma, mas uma ferramenta para a compreensão e fruição de textos. Um exemplo disso é a dificuldade de muitos brasileiros em interpretar o Hino Nacional, que possui estrutura sintática complexa. Ao estudar a gramática, somos capazes de identificar construções como o hipérbato ("Ouviram do Ipiranga as margens plácidas de um povo heroico o brado retumbante"), facilitando a compreensão e apreciação da obra.</p>
        
        <h3>3. Melhoria na Escrita e na Comunicação</h3>
        <p>Conhecer bem o idioma permite que expressemos nossas ideias de forma mais eficiente e impactante. Escolher conscientemente entre voz ativa ("João matou Pedro") e voz passiva ("Pedro foi morto por João") pode mudar completamente a ênfase de um texto. Além disso, a organização dos advérbios pode realçar informações cruciais, como em "Ontem, eu estive nesta casa", onde a posição do advérbio dá maior destaque ao tempo da ação.</p>
        
        <div class="article-image">
          <img src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pessoa escrevendo em um caderno" />
          <p class="caption">O estudo da gramática aprimora nossa capacidade de comunicação escrita e oral</p>
        </div>
        
        <h3>4. Construção de Textos Mais Coesos e Coerentes</h3>
        <p>O uso adequado de pronomes e conjunções é essencial para a coesão textual. Pronomes anafóricos e catafóricos ajudam a conectar as ideias de forma natural. Por exemplo, em "Fui à faculdade. Isso me tomou muito tempo", o pronome "isso" faz referência à primeira oração, garantindo um texto mais fluido e bem estruturado.</p>
        
        <h3>5. Desenvolvimento de uma Visão Mais Crítica da Língua e da Sociedade</h3>
        <p>Dominar o português nos torna leitores mais atentos e capazes de identificar nuances do discurso. Esse conhecimento é útil tanto na interpretação de textos literários quanto na análise crítica de discursos políticos e midiáticos. Compreender as estruturas linguísticas nos permite perceber como a linguagem pode ser usada para persuadir, influenciar ou manipular opiniões.</p>
        
        <div class="article-exercise">
          <h4>Atividade de reflexão:</h4>
          <p>Compare as seguintes frases e analise como a estrutura gramatical altera o sentido:</p>
          <ol>
            <li>"Os manifestantes foram dispersados pela polícia."</li>
            <li>"A polícia dispersou os manifestantes."</li>
          </ol>
          <p>Que diferença de foco e responsabilidade cada estrutura sugere?</p>
        </div>
        
        <h2>Conclusão</h2>
        <p>Em resumo, estudar português não se trata apenas de aprender regras gramaticais, mas de adquirir ferramentas para melhor expressar ideias, compreender textos e desenvolver uma visão mais ampla do mundo. O conhecimento da língua é um instrumento de empoderamento que nos ajuda a transitar melhor pela sociedade e a tomar decisões mais informadas.</p>
        
        <div class="article-references">
          <h3>Para saber mais:</h3>
          <ul>
            <li>Bagno, M. (2007). <em>Preconceito linguístico: o que é, como se faz</em>. São Paulo: Loyola.</li>
            <li>Possenti, S. (2011). <em>Por que (não) ensinar gramática na escola</em>. Campinas: Mercado de Letras.</li>
            <li>Neves, M. H. M. (2018). <em>A gramática passada a limpo</em>. São Paulo: Parábola.</li>
          </ul>
        </div>
      `
    }
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