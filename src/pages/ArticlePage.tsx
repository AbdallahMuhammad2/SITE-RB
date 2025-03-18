import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Facebook, Twitter, Linkedin, Link2, ChevronRight } from 'lucide-react';

// Define article content type
interface ArticleContent {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  author: {
    id: string;
    name: string;
    role: string;
    avatar: string;
    bio: string;
  };
  category: string;
  image: string;
  content: React.ReactNode;
  relatedArticles: string[];
}

// Define simple heading component for article
const Heading = ({ children, level = 2 }: { children: React.ReactNode; level?: number }) => {
  const Tag = (`h${level}` as keyof JSX.IntrinsicElements) || 'h2';
  const fontSize = level === 2 ? 'text-3xl mb-6' : level === 3 ? 'text-2xl mb-4' : 'text-xl mb-3';
  
  return (
    <Tag className={`font-bold ${fontSize} mt-10 first:mt-0 text-gray-800`}>
      {children}
    </Tag>
  );
};

// Sample article data - replace with your own
const articlesData: { [key: string]: ArticleContent } = {
  'tecnicas-avancadas-equacoes': {
    id: '1',
    title: 'Técnicas avançadas para resolução de equações diferenciais',
    slug: 'tecnicas-avancadas-equacoes',
    date: '15 Mar 2025',
    readTime: '8 min',
    author: {
      id: 'yan',
      name: 'Prof. Yan',
      role: 'Especialista em Matemática',
      avatar: '/images/prof-yan.jpg',
      bio: 'Professor com mais de 15 anos de experiência em aprovação de alunos nos principais concursos do país. Doutor em Matemática Aplicada e autor de diversos livros na área.'
    },
    category: 'Matemática',
    image: '/images/blog/article-1.jpg',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          As equações diferenciais representam um dos tópicos mais desafiadores e frequentes em provas de concursos públicos de alto nível. Neste artigo, abordaremos técnicas avançadas para resolver esses problemas com eficiência.
        </p>

        <Heading>Fundamentação teórica simplificada</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Antes de mergulharmos nas técnicas específicas, é importante compreender os fundamentos que sustentam as equações diferenciais. Uma equação diferencial é uma equação que relaciona uma função com suas derivadas.
        </p>
        <p className="leading-relaxed mb-4 text-gray-700">
          Por exemplo, a equação y' + 2y = 0 é uma equação diferencial de primeira ordem. A solução desta equação é uma função y = f(x) que satisfaz a equação para todos os valores de x no domínio.
        </p>

        <Heading level={3}>Técnica #1: Método do fator integrante</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          O método do fator integrante é uma técnica poderosa para resolver equações diferenciais lineares de primeira ordem da forma:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
          <p className="font-mono text-center text-lg">y' + P(x)y = Q(x)</p>
        </div>
        <p className="leading-relaxed mb-4 text-gray-700">
          O fator integrante é dado por μ(x) = e^(∫P(x)dx). Multiplicando ambos os lados da equação pelo fator integrante, obtemos uma forma que pode ser integrada diretamente.
        </p>

        <Heading level={3}>Técnica #2: Separação de variáveis</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Para equações da forma M(x,y)dx + N(x,y)dy = 0, podemos verificar se é possível reorganizá-la para obter:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
          <p className="font-mono text-center text-lg">g(y)dy = f(x)dx</p>
        </div>
        <p className="leading-relaxed mb-4 text-gray-700">
          Em seguida, integramos ambos os lados:
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
          <p className="font-mono text-center text-lg">∫g(y)dy = ∫f(x)dx + C</p>
        </div>

        <Heading>Aplicações práticas em questões de concursos</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Vamos analisar uma questão típica de concurso público que envolve equações diferenciais:
        </p>
        
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-6">
          <p className="font-medium mb-2 text-blue-800">Questão (CESPE - 2018):</p>
          <p className="text-gray-700 mb-4">Encontre a solução geral da equação diferencial y' - 3y = e^(3x), usando o método do fator integrante.</p>
          
          <p className="font-medium text-blue-800 mt-6">Resolução:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mt-2">
            <li>Identificamos P(x) = -3 e Q(x) = e^(3x)</li>
            <li>Calculamos o fator integrante: μ(x) = e^(∫(-3)dx) = e^(-3x)</li>
            <li>Multiplicamos a equação por e^(-3x): e^(-3x)y' - 3e^(-3x)y = e^(-3x) · e^(3x) = 1</li>
            <li>Reconhecemos que o lado esquerdo é a derivada de e^(-3x)y</li>
            <li>Integramos: e^(-3x)y = ∫1 dx = x + C</li>
            <li>Finalmente: y = e^(3x)(x + C)</li>
          </ol>
        </div>

        <Heading>Dicas para economia de tempo na prova</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Ao enfrentar questões de equações diferenciais em concursos, lembre-se destas dicas práticas:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Identifique rapidamente o tipo da equação (linear, separável, exata)</li>
          <li>Reconheça padrões comuns em questões de concursos</li>
          <li>Memorize os formatos das soluções para casos frequentes</li>
          <li>Pratique a verificação rápida da solução por substituição</li>
        </ul>

        <Heading>Conclusão</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Dominar as técnicas de resolução de equações diferenciais é fundamental para ter sucesso nas provas de concursos públicos de alto nível. A prática constante e o desenvolvimento de uma intuição matemática são elementos essenciais para resolver esses problemas com rapidez e precisão.
        </p>
        <p className="leading-relaxed text-gray-700">
          Continue acompanhando nosso blog para mais artigos sobre tópicos avançados de matemática aplicados a concursos públicos.
        </p>
      </>
    ),
    relatedArticles: ['matematica-financeira-simplificada', 'geometria-espacial-visualizacao']
  },
  
  // Add more articles with their own content here
  'matematica-financeira-simplificada': {
    id: '2',
    title: 'Matemática financeira simplificada para concursos',
    slug: 'matematica-financeira-simplificada',
    date: '05 Mar 2025',
    readTime: '10 min',
    author: {
      id: 'yan',
      name: 'Prof. Yan',
      role: 'Especialista em Matemática',
      avatar: '/images/prof-yan.jpg',
      bio: 'Professor com mais de 15 anos de experiência em aprovação de alunos nos principais concursos do país.'
    },
    category: 'Matemática Financeira',
    image: '/images/blog/article-3.jpg',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          A matemática financeira é um dos tópicos mais cobrados em concursos públicos. Este artigo apresenta métodos simplificados para resolver problemas complexos.
        </p>
        
        <Heading>Juros Simples e Compostos: A base de tudo</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          A diferença fundamental entre juros simples e compostos está na base de cálculo. Nos juros simples, os juros incidem apenas sobre o capital inicial. Nos juros compostos, os juros incidem sobre o montante.
        </p>

        <Heading level={3}>Técnicas de memorização para fórmulas</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Ao invés de decorar dezenas de fórmulas, foque em entender os princípios básicos e derive as fórmulas quando necessário.
        </p>

        <Heading>Conclusão</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Com as técnicas apresentadas neste artigo, você estará preparado para enfrentar qualquer questão de matemática financeira em concursos públicos.
        </p>
      </>
    ),
    relatedArticles: ['tecnicas-avancadas-equacoes', 'geometria-espacial-visualizacao']
  },
  
  'geometria-espacial-visualizacao': {
    id: '3',
    title: 'Geometria espacial: visualização e resolução rápida',
    slug: 'geometria-espacial-visualizacao',
    date: '28 Feb 2025',
    readTime: '12 min',
    author: {
      id: 'paula',
      name: 'Profa. Paula',
      role: 'Especialista em Raciocínio Lógico',
      avatar: '/images/prof-paula.jpg',
      bio: 'Especialista em preparação para concursos com foco em raciocínio lógico e geometria.'
    },
    category: 'Geometria',
    image: '/images/blog/article-4.jpg',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          A visualização espacial é uma das maiores dificuldades dos candidatos em concursos. Veja técnicas para desenvolvê-la.
        </p>
        
        <Heading>Visualização 3D: Técnicas práticas</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Uma das técnicas mais eficientes para visualizar problemas tridimensionais é decompor figuras complexas em figuras simples.
        </p>

        <Heading>Conclusão</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Praticar regularmente exercícios de visualização espacial é fundamental para o sucesso em questões de geometria espacial.
        </p>
      </>
    ),
    relatedArticles: ['tecnicas-avancadas-equacoes', 'matematica-financeira-simplificada']
  },
  
  'desenvolvimento-raciocinio-logico': {
    id: '4',
    title: 'Desenvolvimento do raciocínio lógico para concursos',
    slug: 'desenvolvimento-raciocinio-logico',
    date: '20 Jan 2025',
    readTime: '9 min',
    author: {
      id: 'paula',
      name: 'Profa. Paula',
      role: 'Especialista em Raciocínio Lógico',
      avatar: '/images/prof-paula.jpg',
      bio: 'Especialista em preparação para concursos com foco em raciocínio lógico e geometria.'
    },
    category: 'Raciocínio Lógico',
    image: '/images/blog/article-2.jpg',
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          O raciocínio lógico é uma das habilidades mais importantes para quem está se preparando para concursos públicos. Neste artigo, apresentamos técnicas eficazes para desenvolver essa competência.
        </p>
        
        <Heading>Por que o raciocínio lógico é fundamental</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          O raciocínio lógico é a base para a resolução de problemas em praticamente todas as áreas do conhecimento. Em concursos, ele é cobrado tanto diretamente, em questões específicas, quanto indiretamente, na interpretação e resolução de problemas diversos.
        </p>
        
        <Heading>Conclusão</Heading>
        <p className="leading-relaxed mb-4 text-gray-700">
          Desenvolver o raciocínio lógico é um investimento que traz retornos em todas as áreas de estudo para concursos. Com prática regular e as técnicas adequadas, você verá melhorias significativas na sua capacidade de resolver problemas complexos.
        </p>
      </>
    ),
    relatedArticles: ['tecnicas-avancadas-equacoes', 'geometria-espacial-visualizacao']
  }
};

// Map numerical IDs to slugs by teacher ID
const articleIdMap: { [teacherId: string]: { [id: string]: string } } = {
  yan: {
    '1': 'tecnicas-avancadas-equacoes',
    '2': 'matematica-financeira-simplificada'
  },
  paula: {
    '3': 'geometria-espacial-visualizacao',
    '4': 'desenvolvimento-raciocinio-logico'
  }
};

// Debug function to help identify routing issues
const debugParams = (params: any, location: any) => {
  console.log('URL Parameters:', params);
  console.log('Path:', location.pathname);
  
  if (params.teacherId && params.id) {
    const teacherArticles = articleIdMap[params.teacherId];
    const slug = teacherArticles ? teacherArticles[params.id] : undefined;
    console.log('Looking up slug for:', params.teacherId, params.id);
    console.log('Found slug:', slug);
    console.log('Article exists:', slug ? !!articlesData[slug] : false);
  }
  
  if (params.slug) {
    console.log('Direct slug:', params.slug);
    console.log('Article exists:', !!articlesData[params.slug]);
  }
};

const ArticlePage = () => {
  const params = useParams<{ slug?: string; teacherId?: string; id?: string }>();
  const location = useLocation();
  
  // Debug parameters to help troubleshoot
  useEffect(() => {
    debugParams(params, location);
  }, [params, location]);
  
  // Determine the correct article based on URL parameters
  const getArticle = () => {
    // If we have a direct slug parameter
    if (params.slug && articlesData[params.slug]) {
      return articlesData[params.slug];
    }
    
    // If we have teacherId and id parameters
    if (params.teacherId && params.id) {
      // Try to find the matching article by teacher ID and article ID
      const teacherMap = articleIdMap[params.teacherId as keyof typeof articleIdMap];
      if (teacherMap) {
        const slug = teacherMap[params.id];
        if (slug && articlesData[slug]) {
          return articlesData[slug];
        }
      }
    }
    
    // Extract from path directly as fallback
    // This handles URLs like /blog/yan/1
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'blog' && pathParts.length >= 4) {
      const teacherId = pathParts[2];
      const articleId = pathParts[3]; 
      
      // Try to find the article using the extracted teacherId and articleId
      const teacherMap = articleIdMap[teacherId as keyof typeof articleIdMap];
      if (teacherMap) {
        const slug = teacherMap[articleId];
        if (slug && articlesData[slug]) {
          return articlesData[slug];
        }
      }
    }
    
    return undefined;
  };
  
  const article = getArticle();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle article not found
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
        <p className="mb-6 text-lg text-gray-600">
          Não foi possível encontrar o artigo solicitado.
          {params.teacherId && params.id ? ` (${params.teacherId}/${params.id})` : ''}
          {params.slug ? ` (${params.slug})` : ''}
        </p>
        <p className="mb-6 text-gray-500">
          Path: {location.pathname}
        </p>
        <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-1" /> Voltar para o blog
        </Link>
      </div>
    );
  }

  // Get related articles
  const relatedArticlesData = article.relatedArticles
    .map(relatedSlug => articlesData[relatedSlug])
    .filter(Boolean);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero section */}
      <motion.div 
        className="relative h-[60vh] min-h-[400px] w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Article image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70">
          <img 
            src={article.image} 
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Article header content */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10 max-w-7xl">
          <Link 
            to="/blog" 
            className="mb-6 inline-flex items-center text-white bg-black/30 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-full text-sm transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Voltar para o blog
          </Link>
          
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {article.title}
            </h1>
            
            <div className="flex items-center flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <h4 className="font-medium text-white">{article.author.name}</h4>
                  <p className="text-sm text-gray-300">{article.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{article.readTime} de leitura</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Main content */}
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Article content */}
            <motion.div 
              className="lg:col-span-2"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <article className="prose prose-lg max-w-none">
                {article.content}
              </article>
              
              {/* Share section */}
              <div className="flex items-center gap-4 mt-12">
                <span className="text-gray-600">Compartilhe este artigo:</span>
                <a href="#" className="text-blue-600 hover:underline">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-blue-400 hover:underline">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-blue-800 hover:underline">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>

            {/* Related articles */}
            <motion.div
              className="lg:col-span-1"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <h2 className="text-2xl font-bold mb-4">Artigos relacionados</h2>
              <ul className="space-y-4">
                {relatedArticlesData.map((article, index) => (
                  <li key={index} className="border-b border-gray-100 pb-4">
                    <Link to={`/article/${article.slug}`} className="flex items-center gap-2 hover:text-blue-600">
                      <ChevronRight size={16} />
                      <span>{article.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
            
export default ArticlePage;