import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

function LoveStory() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl mb-6">Nuestra Historia</h2>
      <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl mb-4">Primer Encuentro</h3>
          <p>Nos conocimos en una cafetería un día lluvioso de octubre. Un café derramado y una sonrisa fueron el inicio de todo.</p>
          <FaHeart className="text-red-500 mx-auto mt-4 text-2xl" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl mb-4">La Propuesta</h3>
          <p>En un viaje a la playa, bajo un atardecer mágico, Juan me pidió que fuera su compañera de vida para siempre.</p>
          <FaHeart className="text-red-500 mx-auto mt-4 text-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

export default LoveStory;