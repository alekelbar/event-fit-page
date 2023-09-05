import React from 'react';

export const Footer = () => {
  return (
    <footer className='bg-[#176B87] p-5 grid grid-cols-1 md:grid-cols-2 rounded-t-lg'>
      <div className="sm:w-full">
        <h2 className='text-xl text-[#DAFFFB] font-bold'>Descubre</h2>
        <p className='text-[#DAFFFB] cursor-pointer hover:text-[#64CCC5] transition-all duration-300'>Integrantes</p>
        <p className='text-[#DAFFFB] cursor-pointer hover:text-[#64CCC5] transition-all duration-300'>Modelo de negocio</p>
      </div>

      <div className="sm:w-full">
        <h2 className='text-xl text-[#DAFFFB] font-bold'>Contactanos</h2>
        <p className='text-[#DAFFFB] cursor-pointer hover:text-[#64CCC5] transition-all duration-300'>Formulario de contacto</p>
      </div>
    </footer>
  )
}

export default Footer;
