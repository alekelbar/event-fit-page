import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#176B87] text-white py-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <ul className="list-none">
            <li className="cursor-pointer hover:text-[#64CCC5] transition-all duration-300 mb-2">
            <a
              href="#"
              className="hover:font-bold hover:underline text-xl lg:text-base text-[#DAFFFB] font-normal"
            >
              Descubre
            </a>
            </li>
            <li className="cursor-pointer hover:text-[#64CCC5] transition-all duration-300 mb-2"> <a
              href="#"
              className="hover:font-bold hover:underline text-xl lg:text-base text-[#DAFFFB] font-normal"
            >
              Integrantes
            </a>
            </li>
            <li className="cursor-pointer hover:text-[#64CCC5] transition-all duration-300">
            <a
              href="#"
              className="hover:font-bold hover:underline text-xl lg:text-base text-[#DAFFFB] font-normal"
            >
              Módulo de negocios
            </a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 text-right">
          <ul className="list-none">
            <li className="cursor-pointer hover:text-[#64CCC5] transition-all duration-300 mb-2">
            <a
              href="#"
              className="hover:font-bold hover:underline text-xl lg:text-base text-[#DAFFFB] font-normal"
            >
              Contáctanos
            </a>
            </li>
            <li className="cursor-pointer hover:text-[#64CCC5] transition-all duration-300 mb-2">
            <a
              href="#"
              className="hover:font-bold hover:underline text-xl lg:text-base text-[#DAFFFB] font-normal"
            >
              Formulario de contacto
            </a>
            </li>
            <li className="cursor-pointer hover:text-[#64CCC5] transition-all duration-300 font-bold">
            <a
              href="#"
              className="hover:font-bold hover:underline text-xl lg:text-base text-[#DAFFFB] font-normal"
            >
              +506 8630-7982
            </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
