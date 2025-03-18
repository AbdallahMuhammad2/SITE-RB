import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../../types/Article';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p className="text-gray-600">{article.excerpt}</p>
        <Link to={`/articles/${article.id}`} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;