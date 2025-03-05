// src/components/OurSong.jsx
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { FaMusic } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/Oursong.css";

function OurSong() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-4xl mb-8 text-[#5D4037]">Nuestra Canción</h2>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <FaMusic className="text-4xl mx-auto mb-4 text-red-500" />
        <h3 className="text-2xl mb-2">"Te voy a Amar"</h3>
        <p className="mb-4">Axel</p>

        <AudioPlayer
          src="/canciones/Te-voy-a-amar-Axel.mp3" // Asegúrate de tener esta ruta
          layout="stacked"
          customAdditionalControls={[]}
          customVolumeControls={[]}
          showJumpControls={false}
          className="custom-audio-player"
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderRadius: "10px",
          }}
        />

        <p className="mt-4 text-sm text-gray-600">
          La melodía que nos une y representa nuestro amor
        </p>
      </div>
      <div className="max-w-md mx-auto p-8 mt-8">
        <p className="text-2xl text-[#5D4037] font-bold animate-bounce">
          Desliza hacia abajo
          <IoIosArrowDown className="block text-4xl mx-auto mt-2" />
        </p>
      </div>
      <div className="max-w-md mx-auto p-8 mt-8">
        <p className="text-xl italic text-gray-700">
          "El amor no se mira, se siente, y aún más cuando ella está junto a
          ti." - Pablo Neruda
        </p>
      </div>
    </section>
  );
}

export default OurSong;
