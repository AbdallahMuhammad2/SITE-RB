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
    },{
      id: '4',
      title: 'Concursos 2025: são mais de 90 mil vagas. Confira aqui!',
      excerpt: 'O ano de 2025 está repleto de oportunidades nos concursos públicos! São milhares de vagas confirmadas nas áreas policial, fiscal, legislativa, da saúde e muito mais.',
      date: '25 Abr 2025',
      author: {
        id: 'editor-yan',
        name: 'Yan Souza',
        role: 'Editor de Concursos',
        avatar: yan,
        bio: 'Especialista em carreiras públicas, acompanha diariamente as movimentações do setor de concursos no Brasil.'
      },
      category: 'Concursos Públicos',
      image: 'https://images.unsplash.com/photo-1600195077070-7dca93aabbcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'concursos-2025-mais-de-90-mil-vagas',
      readTime: '12 min',
      views: '2.1K',
      content: `
        <h2>Concursos 2025: são mais de 90 mil vagas. Confira aqui!</h2>
        <p>Como estão seus planos para esse ano de 2025? No mundo dos concursos públicos não podemos perder tempo, pois quem se antecipa sai na frente!</p>
        <p>Já são várias seleções confirmadas para 2025 e, ao longo dos próximos meses, a quantidade de oportunidades previstas só vai aumentar.</p>
        <p>Além disso, o Congresso aprovou o Projeto de Lei Orçamentária Anual (PLOA 2025), o qual prevê o total de <strong>57.972 vagas</strong> para provimentos em concursos públicos.</p>
        
        <div class="article-highlight">
          <p><strong>Dica:</strong> Em meio a tantas opções, a dúvida pode tomar conta dos concurseiros, mas esse artigo foi criado exatamente para ser uma luz na sua busca. Salve esta página nos seus favoritos e fique sempre atualizado!</p>
        </div>
    
        <p>Por isso, separamos as principais oportunidades previstas, divididas por áreas de atuação. Se você deseja mudar de vida ingressando na carreira pública, continue lendo e confira as novidades nos concursos espalhados por todo o país.</p>
    
        <h3>Concursos 2025: área Policial</h3>
        
        <div class="article-image">
          <img src="https://images.unsplash.com/photo-1610645308596-9abe95aa9367?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Policial em serviço" />
          <p class="caption">A área de segurança pública concentra grande parte das vagas previstas para 2025</p>
        </div>
        
        <p>A área policial é uma das que mais oferecem oportunidades em 2025, com destaque para:</p>
        
        <ul>
          <li><strong>Concurso PRF</strong>: Status solicitado, com 4.902 vagas solicitadas para Policial Rodoviário, exigindo nível superior e oferecendo salário de R$ 10.790,87.</li>
          <li><strong>Concurso PF</strong>: Banca definida (Cebraspe), com 1.000 vagas para Agente, Escrivão, Papiloscopista, Perito Criminal e Delegado, exigindo nível superior e oferecendo salários de R$ 13.900,54 a R$ 26.300,00.</li>
          <li><strong>Concurso PCDF</strong>: Banca definida (Cebraspe), com 50 vagas + 100 CR para Agente de Custódia, exigindo nível superior e oferecendo salário de R$ 9.394,68.</li>
          <li><strong>Concurso PC RJ</strong>: Autorizado, com 414 vagas para diversos cargos, exigindo nível superior e oferecendo salários de R$ 13.981,45 a R$ 26.981,77.</li>
          <li><strong>Concurso PC BA</strong>: Comissão formada, com mais de mil vagas para Delegado e Investigador, exigindo nível superior e oferecendo salários de R$ 4.873,18 a R$ 13.032,44.</li>
          <li><strong>Concurso PMERJ</strong>: Anunciado, com 4.000 vagas para Soldado, exigindo nível médio e oferecendo salário de R$ 5.233,88.</li>
          <li><strong>Concurso PM MG</strong>: Anunciado, com 2.500 vagas, exigindo nível superior e oferecendo salários de R$ 4.360,83 a R$ 11.037,14.</li>
        </ul>
        
        <h3>Concursos 2025: área Fiscal</h3>
        
        <p>Para quem busca estabilidade e altos salários, a área fiscal apresenta excelentes oportunidades:</p>
        
        <ul>
          <li><strong>Concurso Sefaz GO</strong>: Banca definida (FCC), com 200 vagas + 100 CR para Auditor Fiscal, exigindo nível superior e oferecendo salário de R$ 27.247,26 + verba indenizatória de R$ 3,6 mil.</li>
          <li><strong>Concurso Sefaz SE</strong>: Banca provável (Cebraspe), com 10 vagas + 40 CR para Auditor Fiscal Tributário, exigindo nível superior e oferecendo salário de R$ 16.016,47 + gratificação de arrecadação de R$ 6 mil.</li>
          <li><strong>Concurso ISS Porto Velho (RO)</strong>: Comissão formada para Auditor do Tesouro Municipal e Fiscal Municipal de Tributos, com salários de R$ 32.301,27 para Auditor e R$ 21.430,54 para Fiscal.</li>
          <li><strong>Concurso ISS Niterói (RJ)</strong>: Previsto para 2025, para Fiscal de Tributos, exigindo nível superior e oferecendo salário de R$ 30.468,68.</li>
        </ul>
        
        <div class="article-highlight">
          <p><strong>Importante:</strong> Concursos fiscais são conhecidos pela alta remuneração e estabilidade, mas a concorrência também é elevada. Prepare-se com antecedência!</p>
        </div>
    
        <h3>Concursos 2025: área de Controle</h3>
        
        <p>Os órgãos de controle também oferecem ótimas oportunidades para 2025:</p>
        
        <ul>
          <li><strong>Concurso TCE PE</strong>: Banca definida (FGV), com 44 vagas para Auditor, Analista de Controle Externo e Procurador, exigindo nível superior e oferecendo salários de R$ 16.433,62 a R$ 26.161,63.</li>
          <li><strong>Concurso TCE RJ</strong>: Banca definida (IBFC), com 40 vagas + CR para Auditor de Controle Externo, exigindo nível superior e oferecendo salário de R$ 19.793,26.</li>
          <li><strong>Concurso CGE SP</strong>: Edital previsto para agosto, com 200 vagas para Auditor Estadual de Controle, exigindo nível superior e oferecendo salário de R$ 17.850,00.</li>
          <li><strong>Concurso TCE RS</strong>: Banca definida (Cebraspe), com 45 vagas + CR para Oficial de Controle Externo e Auditor de Controle Externo, exigindo níveis médio e superior e oferecendo salários de R$ 9.801,07 e R$ 20.572,72.</li>
          <li><strong>Concurso TCU</strong>: Previsto, com 300 vagas previstas para Técnico e Auditor Federal de Controle Externo, exigindo níveis médio e superior e oferecendo salários de R$ 15.128,26 e R$ 26.159,01.</li>
        </ul>
        
        <h3>Concursos 2025: área de Tribunais e Procuradorias</h3>
        
        <p>O sistema judiciário também oferece excelentes oportunidades:</p>
        
        <ul>
          <li><strong>Concurso TJ PR</strong>: Comissão formada, com 60 vagas para técnico judiciário, exigindo nível superior e oferecendo salário de R$ 7.082,99.</li>
          <li><strong>Concurso TJ RJ</strong>: Banca definida (Instituto AOCP), para técnico e analista, exigindo nível superior e oferecendo salário de R$ 9.363,84 + benefícios.</li>
          <li><strong>Concurso TRE TO</strong>: Banca definida (Instituto AOCP), para técnico e analista, exigindo nível superior e oferecendo salários de R$ 9.052,54 (Técnico) e R$ 14.852,98 (Analista).</li>
        </ul>
    
        <div class="article-image">
          <img src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tribunal de Justiça" />
          <p class="caption">Tribunais de Justiça e órgãos do sistema judiciário oferecem vagas com excelentes remunerações</p>
        </div>
        
        <h3>Concursos 2025: área Legislativa</h3>
        
        <p>O poder legislativo também oferece boas oportunidades:</p>
        
        <ul>
          <li><strong>Concurso Câmara dos Deputados</strong>: Anunciado, para Policial Legislativo, exigindo nível médio e oferecendo salários de R$ 26.196,30 a R$ 34.812,19.</li>
          <li><strong>Concurso ALERJ (RJ)</strong>: Comissão formada, com 109 vagas para vários cargos, exigindo níveis médio e superior e oferecendo salário de R$ 5.546,19.</li>
          <li><strong>Concurso ALEGO</strong>: Autorizado e em fase de contratação da banca, com 101 vagas para diversos cargos, exigindo níveis médio e superior e oferecendo salários de R$ 2 mil a R$ 30 mil.</li>
          <li><strong>Concurso CLDF</strong>: Grupo de estudos formado, com 90 vagas previstas para Analista, Assistente Técnico e Técnico Administrativo, exigindo níveis médio e superior e oferecendo salários de R$ 6.086,65 a R$ 13.531,06.</li>
        </ul>
        
        <h3>Concursos 2025: área da Saúde</h3>
        
        <p>A área da saúde continua em expansão com várias oportunidades:</p>
        
        <ul>
          <li><strong>Concurso Ministério da Saúde (Efetivos)</strong>: Autorizado, com 319 vagas para vários cargos, exigindo níveis médio/técnico e superior e oferecendo salários de R$ 3.731,83 a R$ 6.256,90.</li>
          <li><strong>Concurso SES SC</strong>: Anunciado e previsto em 2025, com 500 vagas para vários cargos, exigindo níveis médio, técnico e superior e oferecendo salários de R$ 1.092,87 e R$ 4.369,16.</li>
          <li><strong>Concurso SES SP</strong>: Autorizado, com 790 vagas para diversos cargos, exigindo níveis médio e superior e oferecendo salários de R$ 2.913,55 a R$ 7.900,60.</li>
          <li><strong>Concurso João Pessoa Saúde</strong>: Anunciado, com 2.000 vagas para diversos cargos.</li>
        </ul>
        
        <h3>Concursos 2025: área da Educação</h3>
        
        <p>A educação também conta com grandes oportunidades:</p>
        
        <ul>
          <li><strong>Concurso SEE MG</strong>: Banca definida, com 14.281 vagas para diversos cargos, exigindo níveis superior e médio e oferecendo salários de R$ 1.623,94 a R$ 5.876,21.</li>
          <li><strong>Concurso SEC BA</strong>: Anunciado, com 2.113 vagas para pedagogo e professor, exigindo nível superior e oferecendo salários de R$ 5.050,43 a R$ 5.187,88.</li>
          <li><strong>Concurso SEE PB</strong>: Comissão formada, com 2.000 vagas para professor, exigindo nível superior e oferecendo salários de R$ 1.918,29 a R$ 3.162,86.</li>
          <li><strong>Concurso SEDU ES</strong>: Banca definida, com 1.290 vagas para professor e suporte, exigindo níveis superior e médio.</li>
          <li><strong>Concurso SEMED Campo Grande</strong>: Comissão formada, com 4.200 vagas autorizadas, oferecendo salário de R$3.671,07.</li>
        </ul>
        
        <div class="article-exercise">
          <h4>Como se preparar para concursos em 2025?</h4>
          <ol>
            <li>Escolha concursos compatíveis com sua formação e objetivos de carreira</li>
            <li>Analise editais anteriores para conhecer o perfil da prova</li>
            <li>Crie um cronograma de estudos realista e persistente</li>
            <li>Utilize materiais de qualidade e faça simulados regularmente</li>
            <li>Acompanhe as notícias sobre os concursos de seu interesse</li>
          </ol>
        </div>
        
        <h3>Outros destaques para 2025</h3>
        
        <ul>
          <li><strong>CNU – Concurso Nacional Unificado</strong>: Previsto para 2025, com 3.000 vagas previstas para diversos cargos, exigindo níveis médio/técnico e superior e oferecendo salários de R$ 3.741,84 a R$ 22.921,71.</li>
          <li><strong>Concurso INSS</strong>: Anunciado, com 1.000 vagas previstas para Analista do Seguro Social, exigindo nível superior e oferecendo salário de R$ 9.109,20.</li>
          <li><strong>Concurso Banco do Brasil</strong>: Em estudos, com salário inicial de R$ 3.622,23 + benefícios.</li>
          <li><strong>Concurso CVM</strong>: Solicitado, com 139 vagas para Inspetor, Analista e Agente Executivo, exigindo níveis médio e superior e oferecendo salário de R$ 20.924,80.</li>
        </ul>
        
        <h2>Conclusão</h2>
        <p>2025 promete ser um ano histórico para os concursos públicos. Se você busca estabilidade, bons salários e realização profissional, esse é o momento de começar sua preparação com foco total.</p>
        <p>Lembre-se: o sucesso em concursos públicos não é fruto do acaso, mas sim de planejamento, dedicação e estudo consistente. Sua vaga pode estar entre essas 90 mil oportunidades!</p>
        
        <div class="article-references">
          <h3>Fontes:</h3>
          <ul>
            <li>Projeto de Lei Orçamentária Anual (PLOA 2025)</li>
            <li>Diários Oficiais da União, dos Estados e Municípios</li>
            <li>Sites oficiais dos órgãos e instituições mencionados</li>
            <li>Portais de transparência governamentais</li>
          </ul>
        </div>
      `
    },
    {
      id: '5',
      title: 'Concurso PF 2025: Confira os requisitos para cada cargo',
      excerpt: 'Cebraspe é a banca do concurso PF 2025, com edital previsto para 20 de maio e provas em julho. Descubra os requisitos específicos para os cargos da Polícia Federal.',
      date: '25 Abr 2025',
      author: {
        id: 'editor-yan',
        name: 'Yan Souza',
        role: 'Editor de Concursos',
        avatar: yan,
        bio: 'Especialista em carreiras públicas, acompanha diariamente as movimentações do setor de concursos no Brasil.'
      },
      category: 'Concursos Públicos',
      image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      slug: 'concurso-pf-2025-requisitos-cargos',
      readTime: '8 min',
      views: '1.8K',
      content: `
          <h2>Concurso PF 2025: Confira os requisitos para cada cargo</h2>
          <p>Foram divulgados diversos documentos acerca do novo concurso PF (Polícia Federal) 2025. Com isso, cresce a expectativa do concurseiro que sonha ingressar na área policial.</p>
          <p>A Cebraspe já foi definida como banca organizadora, com edital previsto para 20 de maio e provas programadas para julho de 2025. Serão mil vagas no total, distribuídas entre diversos cargos, todos de nível superior.</p>
          
          <div class="article-highlight">
            <p><strong>Importante:</strong> Todas as oportunidades do concurso PF exigem nível superior de escolaridade, com salários que variam de R$ 13.900,54 a R$ 26.300,00.</p>
          </div>
          
          <h3>Distribuição das vagas no Concurso PF 2025</h3>
          <p>As mil vagas do concurso PF 2025 serão distribuídas da seguinte forma:</p>
          <ul>
            <li><strong>Agente de Polícia Federal:</strong> 630 vagas</li>
            <li><strong>Escrivão de Polícia Federal:</strong> 160 vagas</li>
            <li><strong>Delegado de Polícia Federal:</strong> 120 vagas</li>
            <li><strong>Perito Criminal Federal:</strong> 69 vagas (áreas: Meio Ambiente, Contabilidade e Tecnologia da Informação)</li>
            <li><strong>Papiloscopista Policial Federal:</strong> 21 vagas</li>
          </ul>
          
          <div class="article-image">
            <img src="https://images.unsplash.com/photo-1603899968034-60a0d5110417?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Polícia Federal em operação" />
            <p class="caption">O concurso PF 2025 oferece oportunidades em diversas áreas da segurança pública</p>
          </div>
          
          <h3>Requisitos específicos para cada cargo</h3>
          <p>Confira abaixo os requisitos detalhados para cada cargo do concurso PF 2025:</p>
          
          <h4>Delegado de Polícia Federal</h4>
          <ul>
            <li><strong>Requisito:</strong> Diploma, devidamente registrado, de conclusão de curso de graduação de nível superior de bacharel em Direito, fornecido por instituição de ensino superior reconhecida pelo MEC</li>
            <li><strong>Salário inicial:</strong> R$ 26.300,00</li>
          </ul>
          
          <h4>Agente de Polícia Federal</h4>
          <ul>
            <li><strong>Requisito:</strong> Diploma, devidamente registrado, de conclusão de qualquer curso superior, em nível de graduação, fornecido por instituição de ensino reconhecida pelo MEC</li>
            <li><strong>Salário inicial:</strong> R$ 13.900,54</li>
          </ul>
          
          <h4>Escrivão de Polícia Federal</h4>
          <ul>
            <li><strong>Requisito:</strong> Diploma, devidamente registrado, de conclusão de qualquer curso superior, em nível de graduação, fornecido por instituição de ensino reconhecida pelo MEC</li>
            <li><strong>Salário inicial:</strong> R$ 13.900,54</li>
          </ul>
          
          <h4>Papiloscopista Policial Federal</h4>
          <ul>
            <li><strong>Requisito:</strong> Diploma, devidamente registrado, de conclusão de qualquer curso superior, em nível de graduação, fornecido por instituição de ensino reconhecida pelo MEC</li>
            <li><strong>Salário inicial:</strong> R$ 13.900,54</li>
          </ul>
          
          <div class="article-highlight">
            <p><strong>Dica:</strong> Para os cargos de Agente, Escrivão e Papiloscopista Policial Federal, é aceita qualquer graduação, o que amplia as possibilidades para candidatos de diversas áreas.</p>
          </div>
          
          <h4>Perito Criminal Federal</h4>
          <p>O cargo de Perito Criminal Federal exige formação específica de acordo com a área de atuação:</p>
          
          <ul>
            <li><strong>Área Contábil Financeira:</strong> Bacharel em Ciências Contábeis ou Ciências Econômicas</li>
            <li><strong>Área Engenharia Elétrica/Eletrônica:</strong> Bacharel em Engenharia Elétrica, Engenharia Eletrônica, Engenharia de Telecomunicações, Engenharia de Redes de Comunicação ou Engenharia Mecatrônica</li>
            <li><strong>Área Informática Forense:</strong> Bacharel em Ciências da Computação, Informática, Análise de Sistemas, Engenharia da Computação ou Engenharia de Redes de Comunicação</li>
            <li><strong>Área Geologia:</strong> Bacharel em Geologia</li>
            <li><strong>Área Engenharia Civil:</strong> Bacharel em Engenharia Civil</li>
            <li><strong>Área Engenharia Cartográfica:</strong> Bacharel em Engenharia Cartográfica</li>
            <li><strong>Área Medicina Legal:</strong> Bacharel em Medicina</li>
            <li><strong>Área Física Forense:</strong> Bacharel em Física</li>
            <li><strong>Área Engenharia de Minas:</strong> Bacharel em Engenharia de Minas</li>
            <li><strong>Área Genética Forense:</strong> Bacharel em Biomedicina, Ciências Biológicas, Farmácia, Odontologia, Medicina, Engenharia Agronômica, Engenharia Florestal ou Medicina Veterinária</li>
            <li><strong>Área Engenharia Ambiental:</strong> Bacharel em Biomedicina, Ciências Biológicas, Farmácia, Odontologia, Medicina, Engenharia Agronômica, Engenharia Florestal ou Medicina Veterinária</li>
            <li><strong>Área Antropologia Forense:</strong> Bacharel em Biomedicina, Ciências Biológicas, Medicina ou Odontologia</li>
            <li><strong>Área Meio Ambiente:</strong> Bacharel em Ciências Biológicas, Engenharia Agronômica, Engenharia Ambiental, Engenharia Cartográfica, Engenharia de Minas, Engenharia Florestal, Geologia ou Medicina Veterinária</li>
          </ul>
          
          <p>Todos os diplomas devem ser devidamente registrados e fornecidos por instituição de ensino superior reconhecida pelo MEC.</p>
          
          <h3>Perspectivas para o futuro</h3>
          <p>De acordo com anúncio do Ministério da Justiça e Segurança Pública (MJSP), é possível que um próximo concurso PF ocorra a partir de janeiro de 2026 para provimento de outras mil oportunidades. Isso demonstra o compromisso do governo com o fortalecimento do efetivo da Polícia Federal nos próximos anos.</p>
          
          <div class="article-exercise">
            <h4>Planejamento para o concurso PF 2025</h4>
            <p>Se você pretende se candidatar, considere estas etapas:</p>
            <ol>
              <li>Verifique se sua formação atende aos requisitos do cargo desejado</li>
              <li>Estude o edital anterior para entender o perfil de prova</li>
              <li>Crie um cronograma de estudos intensivo até as provas (julho/2025)</li>
              <li>Prepare-se para todas as etapas: prova objetiva, discursiva, exame físico, avaliação médica e psicológica</li>
              <li>Treine regularmente para o Teste de Aptidão Física (TAF)</li>
            </ol>
          </div>
          
          <h3>Etapas do concurso PF 2025</h3>
          <p>O concurso PF 2025 contará com as seguintes etapas:</p>
          <ol>
            <li><strong>Prova objetiva:</strong> Eliminatória e classificatória</li>
            <li><strong>Prova discursiva:</strong> Eliminatória e classificatória</li>
            <li><strong>Exame de aptidão física:</strong> Eliminatório</li>
            <li><strong>Avaliação médica:</strong> Eliminatória</li>
            <li><strong>Avaliação psicológica:</strong> Eliminatória</li>
            <li><strong>Avaliação de títulos:</strong> Classificatória (apenas para o cargo de Delegado)</li>
            <li><strong>Curso de formação profissional:</strong> Eliminatório</li>
          </ol>
          
          <h2>Conclusão</h2>
          <p>O concurso PF 2025 representa uma excelente oportunidade para quem deseja ingressar na carreira policial federal. Com mil vagas distribuídas entre diferentes cargos e a perspectiva de outro concurso em 2026, este é o momento ideal para iniciar a preparação.</p>
          <p>Lembre-se de verificar cuidadosamente os requisitos específicos para o cargo desejado e preparar-se adequadamente para todas as etapas do processo seletivo. A carreira na Polícia Federal oferece não apenas estabilidade e boa remuneração, mas também a oportunidade de contribuir significativamente para a segurança do país.</p>
          
          <div class="article-references">
            <h3>Fontes:</h3>
            <ul>
              <li>Documentos oficiais divulgados pela Polícia Federal</li>
              <li>Associação Nacional dos Peritos Criminais Federais (APCF)</li>
              <li>Ministério da Justiça e Segurança Pública (MJSP)</li>
              <li>Editais anteriores de concursos da Polícia Federal</li>
            </ul>
          </div>
        `
      },
      {
        id: '6',
        title: 'CNU 2025 terá novos cargos e blocos temáticos; entenda!',
        excerpt: 'EXCLUSIVO! MGI deve realizar coletiva de imprensa na próxima sexta (25) para divulgar o termo de referência. Conheça os principais detalhes do próximo Concurso Nacional Unificado.',
        date: '22 Abr 2025',
        author: {
          id: 'editor-yan',
          name: 'Yan Souza',
          role: 'Editor de Concursos',
          avatar: yan,
          bio: 'Especialista em carreiras públicas, acompanha diariamente as movimentações do setor de concursos no Brasil.'
        },
        category: 'Concursos Públicos',
        image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        slug: 'cnu-2025-novos-cargos-blocos-tematicos',
        readTime: '6 min',
        views: '1.3K',
        content: `
          <h2>CNU 2025 terá novos cargos e blocos temáticos; entenda!</h2>
          <p><strong>EXCLUSIVO!</strong> MGI deve realizar coletiva de imprensa na próxima sexta (25) para divulgar o termo de referência.</p>
          
          <p>Mais cedo, a ministra do MGI, Esther Dweck, divulgou informações sobre o Concurso Nacional Unificado (CNU) 2025. Agora, em contato exclusivo com fontes internas do Ministério, tivemos acesso a mais detalhes.</p>
          
          <p>Uma dúvida muito grande dos concurseiros é quanto aos cargos que serão ofertados e como eles se encaixarão em cada bloco temático.</p>
          
          <div class="article-highlight">
            <p><strong>Importante:</strong> Fomos informados que os cargos e blocos temáticos do próximo edital serão totalmente distintivos da edição anterior. Essa estrutura por blocos faz parte das diretrizes de planejamento, com o objetivo de deslocar o foco exclusivo dos cargos e reforçar a busca por candidatos vocacionados.</p>
          </div>
          
          <p>Ou seja, pessoas com real interesse em atuar nas áreas específicas, motivadas pela afinidade com o serviço público, e não apenas pela remuneração.</p>
          
          <p>Mais detalhes sobre o número final de vagas, cargos, blocos temáticos e órgãos participantes devem ser revelados em uma coletiva de imprensa, prevista inicialmente para a próxima sexta-feira (25).</p>
          
          <h3>Principais informações do CNU 2025</h3>
          
          <div class="article-image">
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pessoa estudando para concurso" />
            <p class="caption">O CNU 2025 traz diversas novidades para os candidatos</p>
          </div>
          
          <h4>Nova banca organizadora e inscrições</h4>
          <ul>
            <li>O Termo de Referência para escolha da banca será lançado ainda nesta semana</li>
            <li>Fundação Cesgranrio pode não ser mantida como organizadora</li>
            <li>Inscrições deverão ser abertas em junho</li>
          </ul>
          
          <h4>Substituição das "bolinhas" por código de barras</h4>
          <ul>
            <li>Objetivo: evitar erros de identificação e judicializações</li>
            <li>Código de barras ligará automaticamente a prova ao candidato</li>
            <li>Garante anonimato, imparcialidade na correção e agilidade nos resultados</li>
          </ul>
          
          <h4>Edital unificado</h4>
          <ul>
            <li>Todos os blocos constarão em um único edital</li>
            <li>Medida visa simplificar e tornar as regras mais acessíveis</li>
          </ul>
          
          <div class="article-highlight">
            <p><strong>Novidade:</strong> Estuda-se a possibilidade de aplicar provas em dois dias diferentes, seguindo o modelo do ENEM, para facilitar a logística. Além disso, considera-se a realização de uma prova extraordinária para até 0,50% dos candidatos que forem prejudicados por imprevistos.</p>
          </div>
          
          <h4>Vagas e novas carreiras confirmadas</h4>
          <ul>
            <li>Analista Técnico de Justiça e Defesa (ATJD)</li>
            <li>Analista Técnico de Desenvolvimento Socioeconômico (ATDS)</li>
            <li>Carreiras criadas pela MP nº 1.286/2024</li>
            <li>Previsão de cerca de 3 mil vagas (menos da metade da primeira edição)</li>
          </ul>
          
          <div class="article-image">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pessoas em ambiente de trabalho" />
            <p class="caption">As novas carreiras buscam atrair profissionais com vocação para o serviço público</p>
          </div>
          
          <h4>Bonificação para mulheres</h4>
          <ul>
            <li>Medida para corrigir a desigualdade de gênero nos resultados</li>
            <li>Possível adoção de bonificações, como já ocorre no MRE</li>
            <li>Discrepância identificada entre áreas: mulheres predominam em sociais e educação, mas são minoria em TI</li>
          </ul>
          
          <div class="article-exercise">
            <h4>Como se preparar para o CNU 2025?</h4>
            <p>Com as mudanças anunciadas, confira algumas dicas:</p>
            <ol>
              <li>Acompanhe a divulgação do Termo de Referência, que trará informações sobre conteúdos e formato das provas</li>
              <li>Identifique sua vocação e área de interesse antes de escolher o bloco temático</li>
              <li>Estude as novas carreiras (ATJD e ATDS) para entender suas atribuições e requisitos</li>
              <li>Prepare-se para possíveis mudanças no modelo de prova e critérios de avaliação</li>
              <li>Monte um cronograma de estudos considerando que as inscrições devem abrir em junho</li>
            </ol>
          </div>
          
          <h3>Diferenças em relação ao CNU anterior</h3>
          
          <p>O primeiro Concurso Nacional Unificado, realizado em 2024, trouxe uma série de inovações para o cenário dos concursos públicos brasileiros. No entanto, a edição de 2025 promete ser ainda mais aprimorada.</p>
          
          <p>Entre as principais diferenças, destacam-se:</p>
          
          <ul>
            <li>Novos blocos temáticos, com configuração diferente da primeira edição</li>
            <li>Possibilidade de aplicação das provas em duas datas, facilitando a logística</li>
            <li>Sistema de identificação por código de barras, aumentando a segurança</li>
            <li>Edital unificado para todos os blocos</li>
            <li>Novas carreiras criadas especificamente para esta edição</li>
            <li>Mecanismo de bonificação para mulheres, visando maior equidade</li>
          </ul>
          
          <h2>Conclusão</h2>
          
          <p>O CNU 2025 promete trazer importantes inovações que podem transformar definitivamente o modelo de seleção para o serviço público federal. A busca por candidatos vocacionados, aliada às melhorias operacionais e de transparência, demonstra o compromisso do governo em aprimorar o processo seletivo.</p>
          
          <p>Com aproximadamente 3 mil vagas previstas, embora em menor número que a edição anterior, o certame continua sendo uma excelente oportunidade para quem deseja ingressar no serviço público. A coletiva de imprensa marcada para sexta-feira (25) deverá trazer informações mais detalhadas sobre o concurso, esclarecendo muitas das dúvidas dos candidatos.</p>
          
          <div class="article-references">
            <h3>Fontes:</h3>
            <ul>
              <li>Entrevista com a ministra Esther Dweck</li>
              <li>Fontes internas do Ministério da Gestão e Inovação (MGI)</li>
              <li>Medida Provisória nº 1.286/2024</li>
              <li>Documentos oficiais do governo federal</li>
            </ul>
          </div>
        `
      }, {
        id: '7',
        title: 'GOMIFES: Quem são os agentes da proposta de intervenção no ENEM?',
        excerpt: 'Aprenda a estruturar uma proposta de intervenção completa para sua redação no ENEM utilizando a sigla GOMIFES para identificar os agentes responsáveis.',
        date: '25 abril 2025',
        author: {
          id: 'prof-paula',
          name: 'Profa. Paula Barreto',
          role: 'Especialista em Língua Portuguesa',
          avatar: paula,
          bio: 'Mestre em Letras: Cultura, Educação e Linguagens e Especialista em Teoria e Método de Ensino da Língua Portuguesa.'
        },
        category: 'Redação',
        image: 'https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        slug: 'gomifes-agentes-proposta-intervencao-enem',
        readTime: '7 min',
        views: '890',
        content: `
          <h2>GOMIFES: Quem são os agentes da proposta de intervenção no ENEM?</h2>
          
          <p>Uma das grandes exigências da redação do ENEM é a elaboração de uma proposta de intervenção que respeite os direitos humanos e seja viável dentro da realidade brasileira. Para que essa proposta tenha força e coerência, é essencial indicar quem será o responsável por colocá-la em prática — e é aí que entram os agentes da intervenção.</p>
          
          <div class="article-highlight">
            <p><strong>Fundamental:</strong> A proposta de intervenção vale 2 pontos na nota final da redação do ENEM. Sem ela, mesmo que o restante do texto esteja perfeito, você não conseguirá atingir a nota máxima.</p>
          </div>
          
          <h3>Mas afinal, o que são esses agentes?</h3>
          
          <p>Eles são os atores sociais que podem executar as ações sugeridas para resolver o problema apresentado no texto. E para facilitar a sua memorização, existe uma sigla que ajuda bastante: GOMIFES.</p>
          
          <p>Cada letra representa um tipo de agente que pode (e deve!) ser usado na sua proposta. Vamos conhecê-los:</p>
          
          <div class="article-image">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pessoas trabalhando em conjunto" />
            <p class="caption">A proposta de intervenção precisa identificar quem são os responsáveis por colocar a solução em prática</p>
          </div>
          
          <h3>G – Governo</h3>
          
          <p>Esse é o agente mais usado, mas também o mais arriscado quando mal utilizado. O "governo" é amplo demais! Para evitar generalizações, é importante especificar:</p>
          
          <ul>
            <li><strong>Poder Legislativo:</strong> cria e regulamenta leis.</li>
            <li><strong>Poder Judiciário:</strong> julga e aplica as leis.</li>
            <li><strong>Poder Executivo:</strong> administra e executa ações do Estado.</li>
          </ul>
          
          <p>Além disso, considere o nível de atuação:</p>
          
          <ul>
            <li><strong>Federal:</strong> abrange todo o território nacional (Ex.: Ministério da Saúde).</li>
            <li><strong>Estadual:</strong> cuida de questões regionais (Ex.: Secretaria Estadual de Educação).</li>
            <li><strong>Municipal:</strong> responsável por ações locais (Ex.: prefeitura, postos de saúde).</li>
          </ul>
          
          <div class="article-highlight">
            <p><strong>Dica:</strong> Quanto mais específico for seu agente, mais credibilidade sua proposta terá! Em vez de "o governo deve fazer", prefira "o Ministério da Educação, em parceria com as Secretarias Estaduais, deve implementar..."</p>
          </div>
          
          <h3>O – ONGs (Organizações Não Governamentais)</h3>
          
          <p>As ONGs atuam de forma independente do Estado e estão presentes em diversas áreas, como meio ambiente, saúde, educação e direitos humanos. Elas são ótimas para ações socioculturais, como:</p>
          
          <ul>
            <li>Palestras educativas</li>
            <li>Oficinas comunitárias</li>
            <li>Apoio a campanhas de conscientização</li>
          </ul>
          
          <h3>M – Mídia</h3>
          
          <p>A mídia é um veículo poderoso para informar e sensibilizar a sociedade. Pode ser usada para sugerir:</p>
          
          <ul>
            <li>Campanhas publicitárias</li>
            <li>Programas de TV</li>
            <li>Conteúdos nas redes sociais</li>
            <li>Parcerias com influenciadores</li>
          </ul>
          
          <p>A chave aqui é a disseminação de informação e mudança de comportamento.</p>
          
          <h3>I – Iniciativa Privada (ou Indivíduo)</h3>
          
          <p>Pouco lembrada pelos candidatos, mas extremamente válida! A iniciativa privada pode:</p>
          
          <ul>
            <li>Financiar projetos sociais</li>
            <li>Criar campanhas educativas</li>
            <li>Estimular ações com apoio do governo (parcerias público-privadas)</li>
          </ul>
          
          <p>Você também pode mencionar o indivíduo como agente de mudança, especialmente quando o foco é comportamento ou consciência cidadã.</p>
          
          <div class="article-image">
            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Família reunida conversando" />
            <p class="caption">A família é um agente fundamental quando a proposta envolve educação e valores</p>
          </div>
          
          <h3>F – Família</h3>
          
          <p>Apesar de parecer distante de temas sociais amplos, a família é fundamental na formação ética, emocional e social dos indivíduos. É ideal quando sua proposta envolve:</p>
          
          <ul>
            <li>Educação infantil</li>
            <li>Violência doméstica</li>
            <li>Valores familiares</li>
            <li>Saúde mental</li>
          </ul>
          
          <h3>E – Escola</h3>
          
          <p>A escola é um ambiente de transformação real. Pode ser agente de propostas que envolvam:</p>
          
          <ul>
            <li>Educação cidadã</li>
            <li>Campanhas de conscientização</li>
            <li>Projetos pedagógicos</li>
          </ul>
          
          <div class="article-highlight">
            <p><strong>Importante:</strong> Identifique o nível educacional envolvido para acertar qual esfera do governo deve ser acionada (municipal, estadual ou federal).</p>
          </div>
          
          <h3>S – Sociedade</h3>
          
          <p>A sociedade como agente é válida quando se fala de mobilização social. Mas atenção: dizer apenas "a sociedade precisa mudar" é vago.</p>
          
          <p>Seja específico: cite movimentos sociais, ONGs comunitárias, coletivos ou associações de bairro.</p>
          
          <div class="article-exercise">
            <h4>Exercício prático:</h4>
            <p>Para cada tema abaixo, identifique pelo menos dois agentes específicos que poderiam atuar na proposta de intervenção:</p>
            <ol>
              <li>Bullying nas escolas</li>
              <li>Desmatamento na Amazônia</li>
              <li>Fake news nas redes sociais</li>
            </ol>
          </div>
          
          <h3>Como usar os agentes na redação?</h3>
          
          <p>Para atingir uma boa nota, sua proposta deve conter:</p>
          
          <ul>
            <li><strong>Ação:</strong> o que será feito?</li>
            <li><strong>Agente:</strong> quem fará?</li>
            <li><strong>Modo/meio:</strong> como será feito?</li>
            <li><strong>Finalidade:</strong> para quê?</li>
            <li><strong>Detalhamento:</strong> quando/onde/com quem?</li>
          </ul>
          
          <p>Exemplo:</p>
          <p>"O Poder Executivo Federal, por meio do Ministério da Educação, deve promover campanhas de combate ao bullying nas escolas públicas, utilizando redes sociais e parcerias com ONGs, a fim de reduzir a violência escolar e promover um ambiente mais saudável para os estudantes."</p>
          
          <div class="article-image">
            <img src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Estudante escrevendo" />
            <p class="caption">Uma proposta bem estruturada pode garantir até 2 pontos na nota final da redação</p>
          </div>
          
          <h2>Conclusão</h2>
          
          <p>Usar bem os agentes da proposta de intervenção é uma estratégia fundamental para elevar sua nota na redação do ENEM. A sigla GOMIFES pode ser a sua aliada para organizar ideias e construir soluções mais completas e convincentes.</p>
          
          <p>Pratique, revise e, principalmente, seja específico e realista. Sua proposta precisa ter quem a execute de forma viável.</p>
          
          <p>Lembre-se que o ENEM busca avaliar sua capacidade de analisar problemas sociais e propor soluções concretas. Quanto mais detalhada e bem fundamentada for sua proposta, maiores as chances de alcançar uma excelente pontuação.</p>
          
          <div class="article-references">
            <h3>Material complementar recomendado:</h3>
            <ul>
              <li>Cartilha de Redação do ENEM (INEP)</li>
              <li>Fiorin, J. L.; Savioli, F. P. (2007). <em>Para entender o texto: leitura e redação</em>. São Paulo: Ática.</li>
              <li>Garcia, O. M. (2010). <em>Comunicação em Prosa Moderna</em>. 27ª ed. Rio de Janeiro: FGV.</li>
              <li>Marcuschi, L. A. (2008). <em>Produção textual, análise de gêneros e compreensão</em>. São Paulo: Parábola.</li>
            </ul>
          </div>
        `
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