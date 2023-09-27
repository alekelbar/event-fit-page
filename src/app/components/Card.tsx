import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useScreenSize } from "../hooks/useScreenSize";

interface CardProps {
  title: string;
  text: string;
  reverse?: boolean;
  image: StaticImageData;
}

export const Card: React.FC<CardProps> = ({ image, text, title, reverse }) => {
  const { windowSize } = useScreenSize();

  const [screen, setScreen] = useState(windowSize);

  useEffect(() => {
    setScreen(windowSize);
  }, [windowSize]);

  console.log(screen);

  return (
    <section
      className={`mx-auto hover:brightness-75 p-5 group my-5 w-2/3 grid grid-cols-1 gap-5 md:grid-cols-2 items-center hover:transform hover:scale-105 hover:transition-transform`}
    >
      {reverse && windowSize.width >= 768 ? (
        <>
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl lg:text-3xl text-[#001C30]">{title}</h3>
            <p className="text-lg lg:text-xl text-[#001C30]">{text}</p>
          </div>
          <Image
            src={image.src}
            className="w-1/2 transition-all duration-150 group-hover:w-[70%] mx-auto rounded-full md:rounded-full group-hover:full"
            alt=""
          />
        </>
      ) : (
        <>
          <Image
            src={image.src}
            className="w-1/2 transition-all duration-150 group-hover:w-[70%] mx-auto rounded-full md:rounded-full group-hover:full"
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
