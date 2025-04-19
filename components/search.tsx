import React from 'react';
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  return (
    <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-md w-full max-w-md mx-auto border border-gray-300">
      <FaSearch className="text-gray-400 w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder="Cari Kotak Galang Dana"
        className="outline-none w-full text-gray-500 placeholder-gray-400"
      />
    </div>
  );
}

export default SearchBox;
