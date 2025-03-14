"use client";

import { useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientResearchView({ data }) {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const router = useRouter();

  return (
    <div
      className="max-w-screen-xl mt-10 mb-6  sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="project"
    >
      <AnimationWrapper className={"py-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            My Publications
          </h1>
          <div className="flex justify-center m-5">
            <svg id="progress" width={80} height={80} viewBox="0 0 100 100">
              <circle
                cx={50}
                cy={50}
                r={15}
                stroke="#3465f9"
                strokeWidth={3}
                fill="none"
              />
              <circle
                cx={50}
                cy={50}
                r={10}
                stroke="#34d5f9"
                strokeWidth={3}
                fill="none"
              />
              <circle
                cx={50}
                cy={50}
                r={5}
                stroke="#34a5f9"
                strokeWidth={3}
                fill="none"
              />
            </svg>
          </div>
        </div>
      </AnimationWrapper>
      <AnimationWrapper>
        <ul className="project-wrapper" ref={containerRef}>
          {data && data.length
            ? data
                .slice()
                .reverse()
                .map((item, index) => (
                  <li
                    className="w-full flex items-stretch cursor-pointer"
                    key={index}
                  >
                    <div className="mb-2 border-l-blue-main w-full relative transition-all rounded-lg flex flex-col">
                      <div className="flex p-4 flex-col xl:flex-row w-full items-stretch xl:items-center">
                        <div className="flex order-2 xl:order-1">
                          <div className="flex flex-col">
                            <h3 className="text-3xl text-black-600 capitalize ">
                              <a href={item.link} target="_blank">
                                📄 {item.publication}
                              </a>
                            </h3>
                            <p className="text-sm mt-2 text-black-500 capitalize">
                              {item.authors}
                            </p>
                            <p className="text-sm mt-2 text-black-500 capitalize">
                              {item.year}
                            </p>

                            <div className="grid gap-2 mt-5 grid-cols-2 h-full max-h-[200px] w-full"></div>
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
