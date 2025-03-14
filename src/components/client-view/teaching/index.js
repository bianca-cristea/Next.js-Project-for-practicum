"use client";

import { useState, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ClientTeachingView({ data }) {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const dataStructuri = data?.filter((item) =>
    item.course.toLowerCase().includes("structuri de date")
  );
  const dataAlgoritmi = data?.filter((item) =>
    item.course.toLowerCase().includes("algoritmi fundamentali")
  );

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

      <div className="flex flex-col items-center">
        <button
          onClick={() => handleOptionClick("structuri")}
          className="mb-2 p-2 w-full border-2 rounded bg-blue-700 text-white-300"
        >
          Structuri de date
        </button>
        {selectedOption === "structuri" && (
          <div className="flex flex-col p-4 border rounded shadow-md mt-1 mb-3">
            {dataStructuri && dataStructuri.length > 0 ? (
              dataStructuri.map((item, index) => (
                <div key={index}>
                  <a href={item.link} target="_blank" className="text-blue-600">
                    {item.course}
                  </a>
                </div>
              ))
            ) : (
              <p>No courses found for Structuri de date.</p>
            )}
          </div>
        )}

        <button
          onClick={() => handleOptionClick("algoritmi")}
          className="mb-2 p-2 w-full border-2 rounded bg-blue-700 text-white-300"
        >
          Algoritmi fundamentali
        </button>
        {selectedOption === "algoritmi" && (
          <div className="flex flex-col p-4 border rounded shadow-md mt-1">
            {dataAlgoritmi && dataAlgoritmi.length > 0 ? (
              dataAlgoritmi.map((item, index) => (
                <div key={index}>
                  <a href={item.link} target="_blank" className="text-blue-600">
                    {item.course}
                  </a>
                </div>
              ))
            ) : (
              <p>No courses found for Algoritmi fundamentali.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
