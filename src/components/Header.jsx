import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

function Header() {
  return (
    <header className="text-center py-16 ">
      <div className="flex justify-center items-center mt-4">
        <FaHeart className="text-red-500 mx-2" />
        <p className="text-xl">¡NUESTRA BODA!</p>
        <FaHeart className="text-red-500 mx-2" />
      </div>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-[#5D4037]"
      >
        Rosmery & Alexander
      </motion.h1>
      <p className="mt-4 text-lg">Fecha del evento: 15 de Marzo, 2025</p>
    </header>
  );
}

export default Header;