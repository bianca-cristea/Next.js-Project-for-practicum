"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGoogle, FaAward, FaAddressBook } from "react-icons/fa";
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
    id: "linkedin",
    link: "https://www.linkedin.com/in/marius-dumitran-a14a3527/",
    icon: (
      <FaLinkedinIn color="rgb(29, 78, 216,1)" className="w-[40px] h-[40px] " />
    ),
  },
  {
    id: "google-scholar",
    link: "https://scholar.google.com/citations?user=GZMg4eUAAAAJ&hl=ro&oi=ao",
    icon: (
      <FaGoogle color="rgb(29, 78, 216,1)" className="w-[40px] h-[40px] " />
    ),
  },
  {
    id: "resume",
    link: "https://www.linkedin.com/in/marius-dumitran-a14a3527/",
    icon: (
      <FaAddressBook
        color="rgb(29, 78, 216,1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
  {
    id: "phd-Thesis",
    link: "http://fmi.unibuc.ro/ro/pdf/2015/doctorat/rezumatDumitran-en.pdf",
    icon: <FaAward color="rgb(29, 78, 216,1)" className="w-[40px] h-[40px] " />,
  },
];

export default function ClientHomeView({ data }) {
  console.log(data, "ClientHomeView");

  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="h-screen px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className={
            "grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          }
          variants={setVariants}
        >
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal">
              {data && data.length
                ? data[0]?.name.split(" ").map((item, index) => (
                    <span
                      key={index}
                      className={`${
                        index === 2 || index === 3
                          ? "text-blue-main"
                          : "text-[#000]"
                      }`}
                    >
                      {item}{" "}
                    </span>
                  ))
                : null}
            </h1>
            <p className="text-[#000] mt-4 mb-8 font-bold">
              {data && data.length ? data[0]?.title : null}
            </p>
            <motion.div className="flex gap-3 cursor-pointer">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 4,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  <a href={item.link} target="_blank">
                    {item.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="w-[400px] h-[400px] relative bg-green-main"
            >
              <div className="relative">
                <div className="w-[350px] h-[350px] top-[40px] left-[-30px] rounded-lg border-[6px] border-[#000000] absolute"></div>

                <Image
                  src={picture}
                  alt="Profile Picture"
                  layout="responsive"
                  quality={100}
                  height={200}
                  width={200}
                  className="absolute top-[-15px] rounded-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
