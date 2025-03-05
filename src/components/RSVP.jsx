import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/RSVP.css"; // Asegúrate de importar tu archivo CSS

function RSVP() {
  const eventDate = new Date(2025, 2, 15); // 15 de Marzo, 2025
  const today = new Date();

  const handleAddToCalendar = () => {
    const event = {
      title: "Nuestra Boda",
      start: eventDate,
      end: eventDate,
      description: "¡No te pierdas nuestra boda!",
    };

    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${event.start.toISOString().replace(/-|:|\.\d+/g, "")}/${event.end
      .toISOString()
      .replace(/-|:|\.\d+/g, "")}&details=${encodeURIComponent(
      event.description
    )}`;

    window.open(calendarUrl, "_blank");
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (date.getTime() === eventDate.getTime()) {
        return "react-calendar__tile--event";
      }
      if (date.toDateString() === today.toDateString()) {
        return "react-calendar__tile--highlight";
      }
    }
    return null;
  };

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl mb-6">Fecha de Nuestra Boda</h2>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <Calendar
          className={"mx-auto"}
          value={eventDate}
          tileDisabled={() => false} // Deshabilitar selección de fechas
          tileClassName={tileClassName} // Agregar clase personalizada
        />
        <button
          onClick={handleAddToCalendar}
          className="w-full bg-[#5D4037] text-white py-2 rounded mt-4 hover:bg-[#4D3423]"
        >
          Agendar en mi Calendario
        </button>
      </div>
    </section>
  );
}

export default RSVP;