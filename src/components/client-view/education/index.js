"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

export default function ClientEducationView({ data }) {
  return (
    <div className="max-w-screen-xl  mx-auto  mb-3" id="software-engineering">
      <div className="flex flex-col gap-1">
        <AnimationWrapper className={"py-4"}>
          <h1 className="ml-0 text-left leading-tight text-2xl sm:text-2xl lg:text-4xl text-blue-700 ">
            Education
          </h1>
        </AnimationWrapper>

        <AnimationWrapper>
          <Timeline className="flex flex-col items-start">
            {data && data.length
              ? data.map((educationItem, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator className="flex flex-col items-center">
                      <TimelineDot className="bg-blue-500 w-3 h-3" />
                      <TimelineConnector className="bg-blue-300 w-1" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className="border-[1px] p-6 rounded-lg sm:rounded-xl  w-max border-blue-700 mt-4 shadow-lg bg-white">
                        <p className="font-semibold text-sm sm:text-base text-blue-600">
                          {educationItem.degree}
                        </p>
                        <h3 className="font-bold text-base sm:text-lg mt-2 text-blue-800">
                          {educationItem.years}
                        </h3>
                        <p className="font-medium text-sm sm:text-base mt-2 text-gray-600">
                          {educationItem.college}
                        </p>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                ))
              : null}
          </Timeline>
        </AnimationWrapper>
      </div>
    </div>
  );
}
