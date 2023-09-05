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
    <div className="relative z-10 h-96 w-full sm:w-1/2 mx-auto flex flex-col justify-center items-center font-bold text-center mt-1">
      <p className="text-lg md:text-4xl font-semibold mt-2 mb-6" style={{ color: '#001C30' }}>
        {text} <Cursor cursorBlinking cursorStyle="|" cursorColor="#001C30" />
      </p>
    </div>
  );
};

export default Banner;
