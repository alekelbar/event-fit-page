import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="#176B87 text-white py-4">
      <div className="max-w-4xl mx-auto flex justify-between">
        <div className="w-1/2">
          <ul className="list-none">
            <li className="cursor-pointer hover:border-b hover:border-white hover:text-white transition-all duration-300">
              Descubre
            </li>
            <li className="cursor-pointer hover:border-b hover:border-white hover:text-white transition-all duration-300">
              Integrantes
            </li>
            <li className="cursor-pointer hover:border-b hover:border-white hover:text-white transition-all duration-300">
              Módulo de negocios
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <ul className="list-none">
            <li className="cursor-pointer hover:border-b hover:border-white hover:text-white transition-all duration-300">
              Contactanos
            </li>
            <li className="cursor-pointer hover:border-b hover:border-white hover:text-white transition-all duration-300">
              Formulario de contacto
            </li>
            <li className="cursor-pointer hover:border-b hover:border-white hover:text-white transition-all duration-300">
              +506 8630-7982
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
