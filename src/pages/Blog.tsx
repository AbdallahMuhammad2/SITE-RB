import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, User, Tag, Search, Filter, X } from 'lucide-react';

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
  image: string;
  slug: string;
}

// Hardcoded article data - replace with your real articles
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
      avatar: '/images/prof-yan.jpg'
    },
    category: 'Matemática',
    image: '/images/blog/article-1.jpg',
    slug: 'tecnicas-avancadas-equacoes'
  },
  {
    id: '2',
    title: 'Como desenvolver raciocínio lógico para provas',
    excerpt: 'Estratégias práticas para aprimorar seu pensamento lógico e melhorar seu desempenho em questões complexas.',
    date: '10 Mar 2025',
    author: {
      id: 'prof-paula',
      name: 'Profa. Paula',
      role: 'Especialista em Raciocínio Lógico',
      avatar: '/images/prof-paula.jpg'
    },
    category: 'Raciocínio Lógico',
    image: '/images/blog/article-2.jpg',
    slug: 'desenvolvimento-raciocinio-logico'
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
      avatar: '/images/prof-yan.jpg'
    },
    category: 'Matemática Financeira',
    image: '/images/blog/article-3.jpg',
    slug: 'matematica-financeira-simplificada'
  },
  {
    id: '4',
    title: 'Geometria espacial: visualização e resolução rápida',
    excerpt: 'Técnicas para visualizar problemas tridimensionais e resolvê-los com eficiência em provas de tempo limitado.',
    date: '28 Feb 2025',
    author: {
      id: 'prof-paula',
      name: 'Profa. Paula',
      role: 'Especialista em Raciocínio Lógico',
      avatar: '/images/prof-paula.jpg'
    },
    category: 'Geometria',
    image: '/images/blog/article-4.jpg',
    slug: 'geometria-espacial-visualizacao'
  },
];

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Floating header - becomes visible on scroll */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 z-30 backdrop-blur-lg bg-white/80 shadow-md transition-all duration-300 ${animateHeader ? 'translate-y-0' : '-translate-y-full'}`}
        animate={{ translateY: animateHeader ? 0 : -100 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">B</span>
            </div>
            <h3 className="font-bold text-gray-800">Blog dos Especialistas</h3>
          </div>
          <div className="relative max-w-sm">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="Pesquisar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </motion.div>

      <div className="py-20 lg:py-28">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="relative max-w-4xl mx-auto text-center mb-16 lg:mb-24 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply opacity-20 filter blur-3xl"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply opacity-20 filter blur-3xl"></div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">Conhecimento que faz a diferença</span>
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">
                Blog dos Especialistas
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
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
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Pesquisar artigos, temas ou conceitos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-5 py-4 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
              className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-md"
            >
              <span className="font-medium flex items-center gap-2">
                <Filter size={18} />
                Filtros
              </span>
              <span className="text-sm text-blue-600">
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
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-gray-800">Filtros</h2>
                  {(filter || activeCategory || searchTerm) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
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
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                      !filter && !activeCategory
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    Todos os artigos
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Authors filter */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Por especialista</h3>
                  <div className="flex flex-wrap gap-3">
                    {authors.map((author) => (
                      author && (
                        <button
                          key={author.id}
                          onClick={() => {
                            setFilter(author.id);
                            setActiveCategory(null);
                          }}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                            filter === author.id
                              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                          }`}
                        >
                          <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            {author.avatar ? (
                              <img src={author.avatar} alt={author.name} className="h-full w-full object-cover" />
                            ) : (
                              <User size={14} />
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
                  <h3 className="font-medium text-gray-700 mb-3">Por categoria</h3>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveCategory(category);
                          setFilter(null);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                          activeCategory === category
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <Tag size={14} />
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
              <p className="text-gray-600">
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
                <div className="grid md:grid-cols-5 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.01]">
                  <div className="md:col-span-3 h-72 md:h-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 mix-blend-multiply opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <img 
                      src={filteredArticles[0].image} 
                      alt={filteredArticles[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                          {filteredArticles[0].author.avatar ? (
                            <img src={filteredArticles[0].author.avatar} alt={filteredArticles[0].author.name} className="h-full w-full object-cover" />
                          ) : (
                            <User size={18} className="text-white" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{filteredArticles[0].author.name}</div>
                          <div className="text-xs text-white/80">{filteredArticles[0].author.role}</div>
                        </div>
                      </div>
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white py-1 px-3 rounded-full text-xs font-medium">
                        {filteredArticles[0].category}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar size={16} className="text-blue-500" />
                        <span className="text-gray-500 text-sm">{filteredArticles[0].date}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {filteredArticles[0].title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {filteredArticles[0].excerpt}
                      </p>
                    </div>
                    <div className="mt-6">
                      <span className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-300">
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
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100"
                >
                  <Link to={`/article/${article.slug}`} className="block group">
                    <div className="h-52 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 mix-blend-multiply opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white py-1 px-3 rounded-full text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                            {article.author.avatar ? (
                              <img src={article.author.avatar} alt={article.author.name} className="h-full w-full object-cover" />
                            ) : (
                              <User size={16} className="text-gray-500" />
                            )}
                          </div>
                          <div className="text-sm text-gray-600">{article.author.name}</div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar size={14} />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="pt-4 border-t border-gray-100">
                        <span className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
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
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search size={24} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-600 mb-6">
                Tente ajustar seus filtros ou termos de pesquisa para encontrar o que procura.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
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
            className="mt-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">Fique atualizado</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Receba novos artigos em seu email</h2>
                  <p className="text-white/80 mb-6">
                    Inscreva-se para receber os melhores conteúdos dos especialistas diretamente em sua caixa de entrada.
                  </p>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-white/10 backdrop-blur-sm p-1 rounded-lg">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        placeholder="Seu melhor email"
                        className="flex-1 px-4 py-3 rounded-md bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors whitespace-nowrap">
                        Inscrever-se
                      </button>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mt-3">
                    Prometemos enviar apenas conteúdo relevante. Você pode cancelar a qualquer momento.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;