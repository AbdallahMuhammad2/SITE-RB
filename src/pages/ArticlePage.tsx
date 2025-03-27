import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  EyeIcon, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Bookmark, 
  Facebook, 
  Twitter, 
  Linkedin,
  ChevronRight,
  Tag
} from 'lucide-react';

// Import the articles from separate file
import { articles } from '../data/articles.tsx';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [relatedArticles, setRelatedArticles] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate article loading (could be an API call in a real app)
    setLoading(true);
    
    // Find the article by slug
    console.log("Looking for slug:", slug);
    console.log("Available articles:", articles.map(a => a.slug));
    
    const foundArticle = articles.find(a => a.slug === slug);
    console.log("Found article:", foundArticle ? foundArticle.id : "null");
    
    if (foundArticle) {
      setArticle(foundArticle);
      
      // Find related articles (same category or from same author)
      const related = articles
        .filter(a => a.id !== foundArticle.id) // Exclude current article
        .filter(a => a.category === foundArticle.category || a.author.id === foundArticle.author.id)
        .slice(0, 3); // Limit to 3 related articles
      
      setRelatedArticles(related);
    }
    
    setLoading(false);
    
    // Add scroll listener for header effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);
  
  // Format the article date
  const formatDate = (dateString: string) => {
    return dateString; // You could implement proper date formatting here
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A090C] to-[#080608] flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-t-[#D4AF37] border-r-[#D4AF37] border-b-[#D4AF37]/30 border-l-[#D4AF37]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A090C] to-[#080608] py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-[#13121A] border border-[#D4AF37]/10 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#201F26] mb-4">
              <motion.div
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <EyeIcon size={24} className="text-[#D4AF37]" />
              </motion.div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Artigo não encontrado</h1>
            <p className="text-white/70 mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#080608] rounded-lg font-medium hover:shadow-lg transition-all"
            >
              <ArrowLeft size={18} />
              Voltar para o Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A090C] to-[#080608]">
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
              <button className="text-white/70 hover:text-[#D4AF37] transition-colors">
                <Bookmark size={18} />
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
                <span className="inline-block bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] py-1 px-3 rounded-full text-xs font-medium">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-xl text-white/70 mb-8">
                {article.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-[#181820] border border-[#D4AF37]/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={article.author.avatar} 
                      alt={article.author.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-medium text-white">{article.author.name}</div>
                    <div className="text-sm text-white/60">{article.author.role}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-white/60">
                    <Calendar size={16} className="text-[#D4AF37]" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  
                  {article.readTime && (
                    <div className="flex items-center gap-2 text-white/60">
                      <Clock size={16} className="text-[#D4AF37]" />
                      <span>{article.readTime} de leitura</span>
                    </div>
                  )}
                  
                  {article.views && (
                    <div className="flex items-center gap-2 text-white/60">
                      <EyeIcon size={16} className="text-[#D4AF37]" />
                      <span>{article.views} visualizações</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Main content layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Article Hero Image */}
              {article.image && (
                <div className="rounded-2xl overflow-hidden mb-12 relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-auto object-cover max-h-[500px]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://via.placeholder.com/1200x600?text=Article+Image';
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080608]/80 via-transparent to-transparent"></div>
                  
                  {/* Image credit / caption */}
                  {article.imageCredit && (
                    <div className="absolute bottom-4 right-4 text-white/60 text-xs">
                      {article.imageCredit}
                    </div>
                  )}
                </div>
              )}
              
              {/* Article Content */}
              <div className="article-content">
                <div className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-white/80 prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:text-[#F9E077]" dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>
              
              {/* Article Footer */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags?.map((tag: string, index: number) => (
                      <div 
                        key={index} 
                        className="px-3 py-1 rounded-full bg-[#201F26] text-white/70 text-sm flex items-center gap-1.5 hover:bg-[#2A2933] transition-colors cursor-pointer"
                      >
                        <Tag size={12} className="text-[#D4AF37]" />
                        {tag}
                      </div>
                    ))}
                    {!article.tags && (
                      <div className="px-3 py-1 rounded-full bg-[#201F26] text-white/70 text-sm flex items-center gap-1.5">
                        <Tag size={12} className="text-[#D4AF37]" />
                        {article.category}
                      </div>
                    )}
                  </div>
                  
                  {/* Share links */}
                  <div className="flex items-center gap-4">
                    <span className="text-white/60 text-sm">Compartilhar:</span>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-full bg-[#201F26] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#080608] transition-colors">
                        <Facebook size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-[#201F26] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#080608] transition-colors">
                        <Twitter size={14} />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-[#201F26] flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#080608] transition-colors">
                        <Linkedin size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-16 bg-[#13121A] rounded-2xl p-8 border border-[#D4AF37]/10">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 rounded-full bg-[#181820] border-2 border-[#D4AF37]/30 flex items-center justify-center overflow-hidden">
                      <img 
                        src={article.author.avatar} 
                        alt={article.author.name}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = article.avatar;
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{article.author.name}</h3>
                    <p className="text-[#D4AF37] mb-4">{article.author.role}</p>
                    <p className="text-white/70 mb-4">
                      {article.author.bio || "Professor especialista com vasta experiência em preparação para concursos públicos, autor de materiais exclusivos e metodologias que já ajudaram milhares de alunos a conquistarem a aprovação."}
                    </p>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#F9E077]"
                    >
                      <span>Ver todos os artigos</span>
                      <ChevronRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Related Articles */}
              <div className="sticky top-24">
                <div className="bg-[#13121A] rounded-2xl p-6 border border-[#D4AF37]/10 mb-8">
                  <h3 className="text-xl font-bold text-white mb-6">Artigos relacionados</h3>
                  
                  {relatedArticles.length > 0 ? (
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
                                <Tag size={20} className="text-[#D4AF37]/40" />
                              </div>
                            )}
                          </div>
                          <div>
                            <Link 
                              to={`/article/${related.slug}`} 
                              className="text-white hover:text-[#D4AF37] transition-colors font-medium line-clamp-2"
                            >
                              {related.title}
                            </Link>
                            <div className="flex items-center gap-2 mt-2">
                              <div className="text-xs text-white/60">{formatDate(related.date)}</div>
                              {related.readTime && (
                                <div className="text-xs text-white/60 flex items-center gap-1">
                                  <Clock size={10} />
                                  {related.readTime}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-white/60">Nenhum artigo relacionado encontrado.</p>
                    </div>
                  )}
                </div>
                
                {/* Categories */}
                <div className="bg-[#13121A] rounded-2xl p-6 border border-[#D4AF37]/10 mb-8">
                  <h3 className="text-xl font-bold text-white mb-6">Categorias</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Matemática', 'Português', 'Raciocínio Lógico', 'Direito', 'Informática', 'Atualidades'].map((category, index) => (
                      <Link 
                        key={index}
                        to={`/blog?category=${category}`} 
                        className={`px-3 py-1.5 rounded-full text-sm ${
                          category === article.category 
                            ? 'bg-[#D4AF37] text-[#080608]' 
                            : 'bg-[#201F26] text-white/70 hover:bg-[#2A2933]'
                        } transition-colors`}
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
            </motion.div>
          </div>
          
          {/* Navigation between articles */}
          <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row gap-4 justify-between">
              <Link 
                to="/blog"
                className="px-6 py-3 rounded-lg bg-[#13121A] border border-[#D4AF37]/20 flex items-center gap-2 text-white hover:bg-[#201F26] transition-colors"
              >
                <ArrowLeft size={18} className="text-[#D4AF37]" />
                <span>Voltar para o Blog</span>
              </Link>
              
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-lg bg-[#13121A] border border-[#D4AF37]/20 flex items-center gap-2 text-white hover:bg-[#201F26] transition-colors"
              >
                <span>Próximo artigo</span>
                <ArrowRight size={18} className="text-[#D4AF37]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;