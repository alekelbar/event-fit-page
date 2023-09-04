'use client'
import Link from "next/link";
import React from "react";
import logo from "public/assets/logo.png";
import { useScreenSize } from "@/app/hooks/useScreenSize";
import { FaAlignCenter } from 'react-icons/fa'

export const Nabvar = () => {
  const { windowSize } = useScreenSize();
  return (
    <nav className="w-screen max-w-full h-16 md:h-28 lg:h-32 bg-[#176B87] mx-auto">
      {windowSize.width < 768 ?
        <li className="flex justify-around place-items-center h-full">
          <FaAlignCenter size={32} color={'white'} />
          <h2 className="text-xl text-[#DAFFFB] font-bold">Event-fit</h2>
        </li> : null}

      <ul className="hidden md:flex justify-around mx-8 place-items-center h-full">
        <li className="flex gap-5">
          <img src={logo.src} width={100} alt="" />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-[#DAFFFB] font-bold">Event-fit</h2>
            <a
              href="#"
              className="hover:font-bold hover:underline text-2xl text-[#DAFFFB] font-normal"
            >
              ¿Quieres ser nuestro socio?
            </a>
          </div>
        </li>
        <li className="flex gap-2">
          <div className="bg-[#001C30] hover:bg-[#64CCC5] px-5 py-3 rounded-2xl">
            <Link
              href={"#"}
              className="text-base hover:text-[#001C30] text-[#DAFFFB] font-normal"
            >
              Descargar
            </Link>
          </div>
          <div className="bg-[#001C30] hover:bg-[#64CCC5] px-5 py-3 rounded-2xl">
            <Link
              href={"#"}
              className="text-base hover:text-[#001C30] text-[#DAFFFB] font-normal"
            >
              Iniciar sesión
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};
