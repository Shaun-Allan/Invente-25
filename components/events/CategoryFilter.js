"use client";
import React from 'react';

/**
 * CategoryFilter component for filtering events by department
 * @param {Object} props - Component props
 * @param {Array} props.categories - Array of category objects
 * @param {string} props.activeCategory - Currently active category name
 * @param {Function} props.onCategoryChange - Callback function when category changes
 */

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
  <div className="w-[90%] md:w-[85%] lg:w-[75%] pt-16 pb-12 px-3 rounded-xl mx-auto">
      <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-5 items-center w-full">
        {categories.map((category, index) => (
          <button
            key={index}
            className="group relative px-5 py-3 md:px-7 md:py-4 rounded-3xl font-baskervill font-extrabold text-xl md:text-1xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 active:translate-y-0 active:scale-95"
            style={{
              backgroundColor: category.name === activeCategory
                ? category.color
                : 'rgba(255,255,255,0.1)',
              color: category.name === activeCategory ? '#FFFFFF' : category.textColor,
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: category.color,
              backdropFilter: category.name === activeCategory ? undefined : 'blur(6px)'
            }}
            onClick={() => onCategoryChange(category.name)}
          >
            <span className="relative z-10 whitespace-nowrap">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
