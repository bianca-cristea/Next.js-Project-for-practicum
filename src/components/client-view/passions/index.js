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
      className="max-w-screen-xl mt-10 px-6 sm:px-8 lg:px-16 mx-auto"
      id="project"
    >
      <AnimationWrapper className={"mb-2"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] text-3xl lg:text-4xl xl:text-5xl font-small">
            Passions
          </h1>
        </div>
      </AnimationWrapper>
      <AnimationWrapper>
        <div className="relative w-1/2 mx-auto">
          <div className="flex justify-center items-center relative">
            <button
              onClick={prevImage}
              className="absolute left-0 p-4 bg-[#34a5f9] text-white-300 rounded-full"
            >
              &lt;
            </button>

            <div className="w-96 h-60 m-3 overflow-hidden flex justify-center items-center">
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                width={800}
                height={400}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-0 p-4 bg-[#34a5f9] text-white-300 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
        <ul
          className="project-wrapper ml-4 list text-center"
          ref={containerRef}
        >
          {data && data.length
            ? data.map((item, index) => (
                <li
                  className="w-full flex items-stretch text-center cursor-pointer list-disc"
                  key={index}
                >
                  <h3 className="text-l text-black-600 text-center w-full m-2">
                    {item.description}
                  </h3>
                </li>
              ))
            : null}
        </ul>
      </AnimationWrapper>
    </div>
  );
}
