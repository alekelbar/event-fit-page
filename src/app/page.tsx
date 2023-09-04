import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import image1 from "public/assets/1.jpg";
import Image from "next/image";
import Link from "next/link";
// Ah andrey les gustan los rabanos
export default function Home() {
  return (
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

        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: "100%",
            height: "25%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Banner />

         
        </div>
      </div>

      
      <Footer />
      
    </div>
    
  );
}
