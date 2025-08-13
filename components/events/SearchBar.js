"use client";
import React from 'react';

/**
 * SearchBar component for searching events
 * @param {Object} props - Component props
 * @param {string} props.value - Current search term value
 * @param {Function} props.onChange - Callback function when search term changes
 */
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-[90%] md:w-[85%] lg:w-[75%] pb-16">
      <input
        type="text"
        placeholder="Search events..."
        className="w-full p-4 rounded-3xl bg-transparent border-2 border-black text-black placeholder-black-500 focus:outline-none focus:border-black-400 focus:ring-2 focus:ring-black transition-all duration-300 font-baskerville font-bold"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
