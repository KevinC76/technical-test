'use client';
import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoArrowBack } from 'react-icons/io5';
import Search from './search';

function Navbar() {
  return (
    <div className="min-w-md max-w-md flex bg-white">
      <div className="w-[30%] flex items-center p-4">
        <IoArrowBack size={32} color="#18a1fb" />
      </div>
      <div className="flex items-center justify-end w-[70%] bg-[#18a1fb] gap-4 p-4 rounded-bl-lg">
        <Search />
        <IoIosMenu size={24} />
      </div>
    </div>
  );
}

export default Navbar;
