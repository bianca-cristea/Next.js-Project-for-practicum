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
      className="flex-col justify-between fixed ml-10 max-w-screen-xl mt-10 mb-6 sm:mt-10 sm:mb-14 px-6 sm:px-8 lg:px-9 mx-auto"
      id="project"
    >
      <AnimationWrapper>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-20 text-2xl lg:text-4xl xl:text-5xl font-medium">
            Competitive Programming
          </h1>
        </div>
      </AnimationWrapper>

      <div className="flex">
        <AnimationWrapper>
          <ul className="project-wrapper" ref={containerRef}>
            {data && data.length
              ? data.map((item, index) => (
                  <li
                    className="w-full flex items-stretch cursor-pointer"
                    key={index}
                  >
                    <div className="border-1 w-full relative transition-all rounded-lg flex flex-col">
                      <div className="flex p-4 flex-col xl:flex-row w-full items-stretch xl:items-center">
                        <div className="flex order-2 xl:order-1">
                          <div className="flex flex-col">
                            <a
                              href={
                                item.description ? item.description : undefined
                              }
                              target="_blank"
                            >
                              <h3 className="text-lg text-black-600 capitalize">
                                {item.title}
                              </h3>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </AnimationWrapper>

        <div className="relative h-70 w-1/2 mx-auto">
          <div className="w-96 h-70 flex justify-center items-center relative">
            <button
              onClick={prevImage}
              className="absolute left-[-15] p-4 bg-[#34a5f9] text-white-300 rounded-full"
            >
              &lt;
            </button>
            <div className="w-96 h-60 m-3 overflow-hidden flex justify-center items-center">
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                width={800}
                height={400}
              />
            </div>
            <button
              onClick={nextImage}
              className="absolute right-[-15] p-4 bg-[#34a5f9] text-white-300 rounded-full"
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
