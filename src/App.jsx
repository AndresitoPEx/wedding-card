// filepath: /D:/alex/wedding_card/src/App.jsx
import React from "react";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import RSVP from "./components/RSVP";
import LoveStory from "./components/LoveStory";
import OurSong from "./components/OurSong";
import Bendicion from "./components/Bendicion";
import Timeline from "./components/Timeline";
import DressCode from "./components/Dresscode";

import textura from "./imgs/textura.jpg";
import flores1 from "./imgs/flores1.png";
import flores2 from "./imgs/flores2.png";
import flores3 from "./imgs/flores3.png";
import flores4 from "./imgs/flores4.png";

function App() {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${textura})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        position: "relative",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Elementos decorativos de flores */}
      <img
        src={flores1}
        alt="Decoración floral"
        className="fixed top-0 left-0 w-48 md:w-64 opacity-50 pointer-events-none z-0"
        style={{ transform: "rotate(180deg)" }}
      />
      <img
        src={flores1}
        alt="Decoración floral"
        className="fixed top-0 right-0 w-48 md:w-64 opacity-50 pointer-events-none z-0"
        style={{ transform: "rotate(270deg)" }}
      />

      <img
        src={flores1}
        alt="Decoración floral"
        className="fixed bottom-0 left-0 w-48 md:w-64 opacity-50 pointer-events-none z-0"
        style={{ transform: "scaleX(-1)" }}
      />
      <img
        src={flores1}
        alt="Decoración floral"
        className="fixed bottom-0 right-0 w-48 md:w-64 opacity-50 pointer-events-none z-0"
      />
      <img
        src={flores3}
        alt="Decoración floral"
        className="fixed top-36 left-1/2 transform -translate-x-1/2 w-48 md:w-64 opacity-50 pointer-events-none z-0"
      />
      <img
        src={flores3}
        alt="Decoración floral"
        className="fixed bottom-36 left-1/2 transform -translate-x-1/2 w-48 md:w-64 opacity-50 pointer-events-none z-0"
      />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 relative z-20">
          <Countdown />
          <OurSong />
          <Gallery />
          <LoveStory />
          <Bendicion />
          <Location />
          <RSVP />
          <Timeline />
          <DressCode />
        </main>
      </div>
    </div>
  );
}

export default App;