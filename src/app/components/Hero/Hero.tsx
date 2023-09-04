'use client'
import React from "react";
import imageDesk from "public/assets/training_desk.png";
import imageMobile from "public/assets/training_mobile.png";
import Link from "next/link";
import { useScreenSize } from "@/app/hooks/useScreenSize";

export const Hero = () => {
    const { windowSize } = useScreenSize();

    return (
        <div className="w-full relative">
            <div className="bg-[#eee] h-full py-4 opacity-70 absolute top-0 left-0 w-full flex flex-col items-center justify-center gap-5">
                <h1 className="md:text-4xl text-lx sm:text-lg w-1/2 text-center text-[#001C30]">
                    Descubre y conecta con grupos que compartan tu afición al deporte
                </h1>
                <div className="bg-[#001C30] hover:bg-[#64CCC5] px-5 py-3 rounded-2xl">
                    <Link
                        href={"#"}
                        className="md:text-2xl text-xl sm:text-lg hover:text-[#001C30] text-[#DAFFFB] font-normal"
                    >
                        Descarga Nuestra APP
                    </Link>
                </div>
            </div>
            <img
                src={windowSize.width > 478 ? imageDesk.src : imageMobile.src}
                className="w-full max-h-96 object-cover"
                alt="Chica tomando un café mientras se prepara para entrenar"
            />
        </div>
    );
};
