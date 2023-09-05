import React, { useState } from "react";
import logo from "public/assets/Logo.png";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full sticky top-0 z-20 h-28 lg:h-28 border-b-[1px] text-black lg:text-white bg-[#176b87]">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo.src} alt="Logo" className="h-16 lg:h-20 mr-2 lg:mr-4 animate-pulse" />
          <div>
            <h1 className="text-lg lg:text-xl uppercase font-bold">Event-Fit</h1>
            <a
              href="#"
              className="hover:font-bold hover:underline text-xl lg:text-base text-[#DAFFFB] font-normal"
            >
              ¿Quieres ser nuestro socio?
            </a>
          </div>
        </div>

        {/* Botón de menú hamburguesa para pantallas pequeñas */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            ☰
          </button>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        {menuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white">
            <ul className="flex flex-col items-center gap-4 uppercase text-sm font-semibold p-4">
              <li className="navbarLi">¿Quieres ser nuestro socio?</li>
              <button className="w-32 h-10 bg-black text-white uppercase text-sm font-semibold rounded-full hover:bg-darkRed hover:text-white duration-300"
                style={{ backgroundColor: "#001C30" }}>
                Descargar
              </button>
              <button className="w-32 h-10 bg-black text-white uppercase text-sm font-semibold rounded-full hover:bg-darkRed hover:text-white duration-300"
                style={{ backgroundColor: "#64CCC5" }}>
                Inicia Sesión
              </button>
            </ul>
          </div>
        )}

        {/* Menú en pantallas grandes */}
        <ul className="hidden lg:flex items-center gap-8 uppercase text-xl font-semibold">
          <div className="bg-[#001C30] hover:bg-[#64CCC5] px-5 py-3 rounded-full ">
            <Link
              href={"#"}
              className="text-base hover:text-[#FFFFFF] text-[#FFFFFF] font-normal"
            >
              Descargar
            </Link>
          </div>
          <div className="bg-[#001C30] hover:bg-[#64CCC5] px-5 py-3 rounded-full">
            <Link
              href={"#"}
              className="text-base hover:text-[#FFFFFF text-[#FFFFFF] font-normal"
            >
              Iniciar sesión
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
