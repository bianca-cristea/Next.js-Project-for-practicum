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
  console.log(data, "ClientHomeView");

  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="h-screen lg:fixed m-0 p-0 px-8 xl:px-16" id="home">
      <AnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-20 py-6 sm:py-16"
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-sm leading-normal">
              {data && data.length
                ? data[0]?.name.split(" ").map((item, index) => (
                    <p key={index} className="text-[#000]">
                      {item}
                    </p>
                  ))
                : null}
            </h1>
            <ul className="text-[#000]   mb-8 font-semibold list-disc">
              {data && data.length
                ? data[0]?.title.split(",").map((item, idx) => (
                    <li className="m-2" key={idx}>
                      {item}
                    </li>
                  ))
                : null}
            </ul>
            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative group"
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
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mb-1 w-max bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.id}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[350px] sm:w-[400px] md:w-[400px] h-[350px] sm:h-[400px] md:h-[400px] relative bg-green-main"
            >
              <div className="relative">
                <div className="w-[320px] sm:w-[350px] md:w-[350px] h-[320px] sm:h-[100px]   md:h-[350px] top-[40px] left-[-30px] rounded-lg border-[4px] border-b-black-900 absolute"></div>

                <Image
                  src={picture}
                  alt="Profile Picture"
                  layout="responsive"
                  quality={100}
                  height={150}
                  width={150}
                  className="absolute top-[-15px] rounded-md"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
