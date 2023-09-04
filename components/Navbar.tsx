import React from "react";
import logo from "../public/assets/Logo.png"; 
const Navbar = () => {
  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center"> 
          <img src={logo.src} alt="Logo" className="h-40 lg:h-20 mr-2 lg:mr-4" /> 
          <h1 className="text-2xl uppercase font-bold">Event-Fit</h1>
      </div>


        <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
          <li className="navbarLi">¿Quieres ser nuestro socio?</li>
          <button className="w-48 h-14 bg-black text-white uppercase text-sm font-semibold rounded-full hover:bg-darkRed hover:text-white duration-300"
            style={{ backgroundColor: "#001C30"}}>
            Descargar
          </button>
          <button className="w-48 h-14 bg-black text-white uppercase text-sm font-semibold rounded-full hover:bg-darkRed hover:text-white duration-300"
            style={{ backgroundColor: "#64CCC5"}}>
            Inicia Sesion
          </button>
        </ul>
     
      </div>
    </div>
  );
};

export default Navbar;