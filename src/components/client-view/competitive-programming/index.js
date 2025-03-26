"use client";

import { useRef, useState } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img1 from "../../../assets/concursuri1.jpg";
import img2 from "../../../assets/concursuri2.jpg";
import img3 from "../../../assets/concursuri3.jpg";
import img4 from "../../../assets/concursuri4.jpg";
import img5 from "../../../assets/concursuri5.jpg";

export default function ClientCompetitiveProgrammingView({ data }) {
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
      className="flex-col fixed ml-3 max-w-screen-xl mt-[25vh] md:mt-[6vh] mb-6  sm:mb-14 px-6 sm:px-8 lg:px-9 mx-auto"
      id="project"
    >
      <AnimationWrapper>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="mb-20 text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium">
            Competitive Programming
          </h1>
        </div>
      </AnimationWrapper>

      <div className="flex flex-col sm:flex-row justify-between items-center">
        <AnimationWrapper>
          <ul className="project-wrapper w-full" ref={containerRef}>
            {data && data.length
              ? data.map((item, index) => (
                  <li
                    className="w-full flex items-stretch cursor-pointer"
                    key={index}
                  >
                    <div className=" w-full relative transition-all rounded-lg flex flex-col">
                      <div className="mb-2">
                        <a
                          href={item.description ? item.description : undefined}
                          target="_blank"
                        >
                          <h3 className="text-base sm:text-lg text-black-600 capitalize">
                            {item.title}
                          </h3>
                        </a>
                      </div>
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </AnimationWrapper>

        <div className="relative w-full sm:w-full lg:w-full">
          <div className="w-full h-full flex justify-center items-center relative">
            <button
              onClick={prevImage}
              className="absolute left-[-15px] p-4 bg-[#34a5f9] text-white-300 rounded-full z-10"
            >
              &lt;
            </button>
            <div className="w-auto h-[60vh] overflow-hidden flex justify-center items-center">
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                layout="responsive"
                width={1600}
                height={900}
                objectFit="contain"
              />
            </div>
            <button
              onClick={nextImage}
              className="absolute right-[-15px] p-4 bg-[#34a5f9] text-white-300 rounded-full z-10"
            >
              &gt;
            </button>
          </div>

          <div className="flex justify-center mt-4 h-full">
            {images.map((pic, index) => (
              <img
                key={index}
                src={pic}
                className={`w-2 mx-1 rounded-full object-cover h-full shadow-black-600 ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
