import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Location() {
  return (
    <section className="text-center py-12">
      <h2 className="text-3xl mb-6">Ubicación</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-red-500" />
        <h3 className="text-xl font-semibold">Lugar</h3>
        <p>Jr. Antonio Lobato N° 486</p>
        <p>El Tambo - Huancayo</p>
        <a 
          href="https://maps.app.goo.gl/csN37VEWrrGSsU1t6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#5D4037] text-white px-4 py-2 rounded hover:bg-[#4D3423]"
        >
          Ver en Google Maps
        </a>
      </div>
    </section>
  );
}

export default Location;