import React, { useState } from "react";
import { motion } from "framer-motion";
import pic from "../imgs/pic.jpg";

// Placeholder for a single image - reemplazar con tu propia imagen
const image = pic;

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-12 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.img
          src={image}
          alt="Foto de nuestra historia"
          onClick={() => setSelectedImg(image)}
          whileHover={{ scale: 1.05 }}
          className="w-full h-auto object-contain rounded-lg cursor-pointer"
        />
      </div>
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Imagen ampliada"
            className="max-w-full max-h-full"
          />
        </div>
      )}
      <div className="mt-8">
        <p className="text-xl italic text-gray-700">
          "Desde el primer momento en que te vi, supe que mi vida cambiaría para
          siempre. Eres mi inspiración, mi amor eterno y mi mejor amiga. Te amo
          más de lo que las palabras pueden expresar." - Tu novio.
        </p>
      </div>
    </section>
  );
}

export default Gallery;
