import React from 'react'

export const Footer = () => {
    return (
        <div className='bg-[#176B87] w-full gap-5 justify-end flex flex-col lg:flex-row rounded-t-lg py-5 px-2'>
            <div>
                <h2 className='text-xl text-[#DAFFFB] font-bold'>Descubre</h2>
                <p className='text-[#DAFFFB]'>Integrantes</p>
                <p className='text-[#DAFFFB]'>Modelo de negocio</p>
            </div>

            <div>
                <h2 className='text-xl text-[#DAFFFB] font-bold'>Contactanos</h2>
                <p className='text-[#DAFFFB]'>Formulario de contacto</p>
            </div>
        </div>
    )
}
