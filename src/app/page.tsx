import { FeactureDetails } from "@/interfaces/feacture_details";
import { Card } from "./components/Card/Card";
import { Hero } from "./components/Hero/Hero";
import { Nabvar } from "./components/navbar/Navbar";

import secureAllImage from "public/assets/secure_all.png";
import teamWorkImage from "public/assets/team_work_all.png";
import { Footer } from "./components/footer/Footer";

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
    <main className="min-h-screen bg-[#eee]">
      <Nabvar />
      <Hero />
      {feactures.map(({ image, text, title, reverse }) => (
        <Card image={image} text={text} title={title} reverse={reverse} />
      ))}
      <Footer />
    </main>
  );
}
