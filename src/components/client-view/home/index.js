"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaLinkedinIn, FaAward, FaBookOpen } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import Image from "next/image";
import picture from "../../../assets/poza-profil.jpeg";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons = [
  {
    id: "Linkedin",
    link: "https://www.linkedin.com/in/marius-dumitran-a14a3527/",
    icon: (
      <FaLinkedinIn color="rgb(29, 78, 216,1)" className="w-[40px] h-[40px]" />
    ),
  },
  {
    id: "Google-scholar",
    link: "https://scholar.google.com/citations?user=GZMg4eUAAAAJ&hl=ro&oi=ao",
    icon: (
      <FaGoogleScholar
        color="rgb(29, 78, 216,1)"
        className="w-[40px] h-[40px]"
      />
    ),
  },
  {
    id: "Resume",
    link: "",
    icon: <TbFileCv color="rgb(29, 78, 216,1)" className="w-[40px] h-[40px]" />,
  },
  {
    id: "PhD-Thesis",
    link: "https://arxiv.org/abs/2501.06949",
    icon: (
      <FaBookOpen color="rgb(29, 78, 216,1)" className="w-[40px] h-[40px]" />
    ),
  },
];

export default function ClientHomeView({ data }) {
  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div
      className="h-screen flex items-center justify-center lg:fixed m-0 p-0 px-4 sm:px-8 xl:px-16 py-12"
      id="home"
    >
      <AnimationWrapper>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:py-16 items-center w-full max-w-5xl"
          variants={setVariants}
        >
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="ml-3 mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold leading-tight sm:leading-normal">
              {data?.length
                ? data[0]?.name.split(" ").map((item, index) => (
                    <p key={index} className="text-[#000]">
                      {item}
                    </p>
                  ))
                : null}
            </h1>

            <ul className="text-[#000] flex flex-wrap justify-center md:justify-start text-xs sm:text-sm md:text-md mb-6 font-semibold list-disc">
              {data?.length
                ? data[0]?.title.split(",").map((item, idx) => (
                    <li className="m-2" key={idx}>
                      {item}
                    </li>
                  ))
                : null}
            </ul>

            <motion.div className="flex gap-3 justify-center md:justify-start">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative group text-sm sm:text-lg md:text-2xl"
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 1,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.icon}
                  </a>
                  <span className="absolute top-full left-1/2 w-[15px] h-[5px] -translate-x-1/2 mb-1 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.id}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            ref={containerRef}
            className="flex justify-center md:justify-center w-full"
          >
            <motion.div
              drag
              dragConstraints={containerRef}
              className="relative"
            >
              <div className="relative sm:mt-6 md:mt-8 w-[120px] sm:w-[160px] md:w-[200px] lg:w-[230px] xl:w-[260px]">
                <div className="absolute w-full h-full top-3 sm:top-4 md:top-6 lg:top-8 xl:top-10 left-[-8%] sm:left-[-10%] md:left-[-15%] lg:left-[-18%] xl:left-[-20%] rounded-lg border-[2px] md:border-[3px] lg:border-[4px] border-black"></div>

                <Image
                  src={picture}
                  alt="Profile Picture"
                  layout="responsive"
                  quality={100}
                  height={150}
                  width={150}
                  className="relative rounded-md"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
