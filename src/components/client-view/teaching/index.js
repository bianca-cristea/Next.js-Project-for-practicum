"use client";

import { useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientTeachingView({ data }) {
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
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-small">
            Teaching
          </h1>
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
                  <div className="border-2 w-full relative border-blue-main transition-all rounded-lg flex flex-col">
                    <div className="flex justify-center  p-4 flex-col xl:flex-row w-full items-stretch">
                      <div className="flex flex-row justify-between items-center w-full xl:w-1/2">
                        <div className="flex flex-col">
                          <a href={item.link} target="_blank">
                            {item.course}
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
    </div>
  );
}
