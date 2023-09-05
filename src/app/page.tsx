"use client";
import { FeactureDetails } from "./interfaces/feacture_details";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import image1 from "public/assets/1.jpg";
import Image from "next/image";
import secureAllImage from "public/assets/secure_all.png";
import teamWorkImage from "public/assets/team_work_all.png";
import { IsClientCtxProvider } from "./context/IsClientContext";

const feactures: FeactureDetails[] = [
  {
    image: secureAllImage,
    title: "Proveer espacios seguros para realizar actividad física",
    text: "Organiza tu mismo tus reuniones con la personas en las que confies. Nosotros te permitimos elegir a ti mismo que tan seguro estaras.",
  },
  {
    image: teamWorkImage,
    title:
      "Únete a nuestro equipo y patrocina tu negocio con nuestros usuarios",
    text: "Agilizar la promoción de eventos para los usuarios y organizaciones vinculadas al deporte.",
    reverse: true,
  },
];

export default function Home() {
  return (
    <IsClientCtxProvider>
      <main>
        <div className="w-full bg-[#eee]">
          <Navbar />

          <div className="relative flex flex-col items-center">
            <Image alt="fondo" src={image1} className="w-full h-auto" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
              <Banner />
              <div className="bg-white opacity-20 w-full h-full absolute top-0 left-0"></div> {/* Fondo con opacidad */}
              <button className="relative z-10 my-4 w-64 h-15 px-5 py-3 bg-[#001C30] text-white uppercase text-sm font-semibold rounded-full hover:text-white duration-300">
                Descarga nuestra APP
              </button>
            </div>
          </div>


        </div>

        {feactures.map(({ image, text, title, reverse }) => (
          <Card key={title} image={image} text={text} title={title} reverse={reverse} />
        ))}

        <Footer />
      </main>
    </IsClientCtxProvider>
  );
}
