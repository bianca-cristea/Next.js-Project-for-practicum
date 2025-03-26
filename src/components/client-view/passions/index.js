"use client";

import { useRef, useState } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img1 from "../../../assets/sport1.jpg";
import img2 from "../../../assets/sport2.jpg";
import img3 from "../../../assets/sport3.jpg";
import img4 from "../../../assets/sport4.jpg";
import img5 from "../../../assets/sport5.jpg";

export default function ClientPassionsView({ data }) {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const router = useRouter();
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16"
      id="project"
    >
      <AnimationWrapper className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold">
          Passions
        </h1>
      </AnimationWrapper>

      <AnimationWrapper>
        <div className="relative flex flex-col items-center w-full max-w-4xl">
          <div className="relative flex justify-center items-center w-full">
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 p-2 sm:p-3 md:p-4 lg:p-5 bg-[#34a5f9] text-white rounded-full shadow-md hover:bg-[#1d87d6] transition z-10"
            >
              ◀
            </button>

            <div className="w-auto max-w-[800px]  sm:h-[20vh] md:h-[60vh] lg:h-[40vh] xl:h-[50vh]  flex justify-center items-center">
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                width={700}
                height={350}
                objectFit="contain"
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 p-2 sm:p-3 md:p-4 lg:p-5 bg-[#34a5f9] text-white rounded-full shadow-md hover:bg-[#1d87d6] transition z-10"
            >
              ▶
            </button>
          </div>
        </div>

        <ul
          className="mt-6 text-center w-full max-w-4xl text-sm sm:text-md md:text-lg"
          ref={containerRef}
        >
          {data && data.length ? (
            data.map((item, index) => (
              <li key={index} className="text-gray-700 ">
                {item.description}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No passions available.</p>
          )}
        </ul>
      </AnimationWrapper>
    </div>
  );
}
