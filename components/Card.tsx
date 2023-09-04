import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { useScreenSize } from "../hooks/useScreenSize";

interface CardProps {
  title: string;
  text: string;
  reverse?: boolean;
  image: StaticImageData;
}

export const Card: React.FC<CardProps> = ({ image, text, title, reverse }) => {
  const { windowSize } = useScreenSize();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`mx-auto my-5 w-2/3 grid grid-cols-1 gap-5 md:grid-cols-2 items-center ${
        isHovered ? "transform scale-105 transition-transform" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {reverse && windowSize.width >= 768 ? (
        <>
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl lg:text-3xl text-[#001C30]">{title}</h3>
            <p className="text-lg lg:text-xl text-[#001C30]">{text}</p>
          </div>
          <img
            src={image.src}
            className="w-1/2 mx-auto rounded-lg md:rounded-full"
            alt=""
          />
        </>
      ) : (
        <>
          <img
            src={image.src}
            className="w-1/2 mx-auto rounded-lg md:rounded-full"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl lg:text-3xl text-[#001C30]">{title}</h3>
            <p className="text-lg lg:text-xl text-[#001C30]">{text}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Card;
