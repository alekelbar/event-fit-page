"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Descubre y conecta con grupos que compartan tu afición al deporte",
      "Event Fit crea amigos.",
      "Reunete y comparte.",
      "Crea tus eventos y disfruta.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="h-96 max-w-screen-4xl mx-auto flex flex-col justify-center items-center font-bold text-center">
      <p className="text-lg md:text-4xl font-semibold mt-4 mb-12" style={{ color: '#001C30' }}>
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffff" />
      </p>
      <button
        className="w-64 h-15 bg-black text-white uppercase text-sm font-semibold rounded-full hover:bg-darkRed hover:text-white duration-300"
        style={{
          backgroundColor: "#64CCC5",
          color: "#001C30",
          padding: "5px 15px",
        }}
      >
        Descarga nuestra APP
      </button>
    </div>
  );
};

export default Banner;
