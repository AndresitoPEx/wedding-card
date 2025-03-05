import React, { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-03-15T00:00:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ Días: d, Horas: h, Minutos: m, Segundos: s });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-12">
      <h2 className="text-3xl mb-6">Cuenta Regresiva</h2>
      <div className="flex justify-center space-x-4">
        {Object.entries(countdown).map(([unit, value]) => (
          <div key={unit} className="bg-white p-4 rounded-lg shadow-md">
            <span className="text-4xl font-bold block">{value}</span>
            <span>{unit}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Countdown;