import React from 'react';
import { FaClock, FaChurch, FaCamera, FaCocktail, FaUtensils, FaHeart } from 'react-icons/fa';

function Timeline() {
  const events = [
    { time: '3:00 PM', description: 'Ceremonia', icon: <FaChurch className="text-2xl text-[#5D4037] mr-4" /> },
    { time: '4:30 PM', description: 'Sesión de fotos', icon: <FaCamera className="text-2xl text-[#5D4037] mr-4" /> },
    { time: '6:00 PM', description: 'Coctel de bienvenida', icon: <FaCocktail className="text-2xl text-[#5D4037] mr-4" /> },
    { time: '7:30 PM', description: 'Cena y baile', icon: <FaUtensils className="text-2xl text-[#5D4037] mr-4" /> },
    { time: '12:00 AM', description: 'Despedida de los novios', icon: <FaHeart className="text-2xl text-[#5D4037] mr-4" /> }
  ];

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl mb-8 text-[#5D4037]">Cronograma del Evento</h2>
      <div className="max-w-md mx-auto">
        <div className="p-8 rounded-lg">
          <FaClock className="text-4xl mx-auto mb-4 text-indigo-500" />
          {events.map((event, index) => (
            <div 
              key={index} 
              className="flex items-center mb-4 last:mb-0 border-b pb-4 last:border-b-0"
            >
              {event.icon}
              <span className="font-bold text-lg mr-4 text-[#5D4037] w-20">
                {event.time}
              </span>
              <span className="text-gray-700">{event.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;