

import yan from '../images/Yan.png';
import paula from '../images/Paula.png';


export const articles = [
  {
    id: '1',
    title: 'Técnicas avançadas para resolução de equações diferenciais',
    excerpt: 'Descubra métodos eficientes para solucionar problemas complexos de equações diferenciais em concursos públicos.',
    date: '15 Mar 2025',
    author: {
      id: 'prof-yan',
      name: 'Prof. Yan',
      role: 'Especialista em Matemática',
      avatar: yan,
      bio: 'Doutor em Matemática Aplicada com mais de 15 anos de experiência em preparação para concursos.'
    },
    category: 'Matemática',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3',
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
      role: 'Especialista em Raciocínio Lógico',
      avatar: paula,
      bio: 'Mestre em Lógica Matemática com especialização em metodologias de ensino.'
    },
    category: 'Raciocínio Lógico',
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?ixlib=rb-4.0.3',
    slug: 'desenvolvimento-raciocinio-logico',
    readTime: '6 min',
    views: '1.8K',
    content: `
      <h2>Desbloqueando seu potencial em Raciocínio Lógico</h2>
      <p>O raciocínio lógico é uma das habilidades mais valorizadas em provas de concursos públicos, não apenas em questões específicas sobre o tema, mas como base para a resolução de problemas em diversas áreas.</p>
      
      <p>Neste artigo, apresentarei métodos práticos e eficazes para desenvolver seu raciocínio lógico, com foco específico na preparação para concursos.</p>
      
      <h3>Por que o raciocínio lógico é fundamental?</h3>
      <p>As provas de concursos têm evoluído para avaliar não apenas a capacidade de memorização, mas principalmente a habilidade de análise e resolução de problemas.</p>
    `
  }
];