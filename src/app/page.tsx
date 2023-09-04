"use client";
import { FeactureDetails } from "../../interfaces/feacture_details";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import image1 from "public/assets/1.jpg";
import Image from "next/image";
import Link from "next/link";
import image2 from "public/assets/secure_all.png";
import secureAllImage from "public/assets/secure_all.png";
import teamWorkImage from "public/assets/team_work_all.png";

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
    <main>
      <div className="w-full text-white">
        <Navbar />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            alt="fondo"
            src={image1}
            sizes="100%"
            style={{
              width: "100%",
              height: "AUTO",
            }}
          />
          <div></div>

          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              marginTop: "0px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              width: "100%",
              height: "35%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Banner />
          </div>
        </div>
        
        
      </div>

      {feactures.map(({ image, text, title, reverse }) => (
        <Card image={image} text={text} title={title} reverse={reverse} />
      ))}

      <Footer />
    </main>
  );
}
