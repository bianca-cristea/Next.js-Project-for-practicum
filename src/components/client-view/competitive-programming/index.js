"use client";

import { useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientCompetitiveProgrammingView({ data }) {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const router = useRouter();

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="project"
    >
      <AnimationWrapper className={"py-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            Competitive Programming
          </h1>
          <svg id="progress" width={100} height={80} viewBox="0 0 100 100">
            <circle
              cx={"30"}
              cy={"30"}
              r="20"
              pathLength={"2"}
              className="stroke-[#000]"
            />
          </svg>
        </div>
      </AnimationWrapper>
      <AnimationWrapper>
        <ul className="project-wrapper" ref={containerRef}>
          {data && data.length
            ? data.map((item, index) => (
                <li
                  className="w-full flex items-stretch cursor-pointer"
                  key={index}
                >
                  <div className="border-2 w-full relative border-green-main transition-all rounded-lg flex flex-col">
                    <div className="flex p-4 flex-col xl:flex-row w-full items-stretch xl:items-center">
                      <div className="flex order-2 xl:order-1">
                        <div className="flex flex-col">
                          <h3 className="text-3xl text-black-600 capitalize font-extrabold">
                            {item.title}
                          </h3>
                          <p className="text-sm mt-2 text-black-500  font-bold">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </AnimationWrapper>
    </div>
  );
}
