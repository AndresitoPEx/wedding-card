import React from 'react';
import { FaMale, FaFemale } from 'react-icons/fa';

function DressCode() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl mb-8 text-[#5D4037]">Código de Vestimenta</h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-around mb-8">
          <div className="text-center flex flex-col items-center">
            <FaMale className="text-6xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#5D4037]">Hombres</h3>
            <p className="text-lg text-gray-700">Traje formal</p>
            <p className="text-lg text-gray-700">Corbata o moño</p>
            <p className="text-lg text-gray-700">Zapatos de vestir</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <FaFemale className="text-6xl text-pink-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#5D4037]">Mujeres</h3>
            <p className="text-lg text-gray-700">Vestido de cóctel o largo</p>
            <p className="text-lg text-gray-700">Zapatos elegantes</p>
            <p className="text-lg text-gray-700">Accesorios discretos</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-xl italic text-gray-700">
            "Queridos amigos y familiares, estamos encantados de compartir este día tan especial con ustedes. Les agradecemos por acompañarnos y esperamos que disfruten de cada momento."
          </p>
          <p className="text-xl font-bold text-[#5D4037] mt-4">
            ¡Nos vemos en la celebración!
          </p>
        </div>
      </div>
    </section>
  );
}

export default DressCode;