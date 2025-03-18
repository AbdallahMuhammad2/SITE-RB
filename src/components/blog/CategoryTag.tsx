import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;