import React from 'react';
import { FaMale, FaFemale } from 'react-icons/fa';
import couple from '../imgs/couple.png';

function DressCode() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-4xl mb-8 text-[#5D4037]">Código de Vestimenta</h2>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div>
            <img src={couple} alt="Pareja de novios" className="mx-auto" />
        </div>
        <div className="flex justify-around mb-8">
          <div className="text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-[#5D4037]">Hombres</h3>
            <p className="text-lg text-gray-700">Traje formal</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-[#5D4037]">Mujeres</h3>
            <p className="text-lg text-gray-700">Omitir el blanco</p>
            <p className="text-lg text-gray-700">o crema</p>
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