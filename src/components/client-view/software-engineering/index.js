// "use client";

// import {
//   Timeline,
//   TimelineConnector,
//   TimelineContent,
//   TimelineDot,
//   TimelineItem,
//   TimelineSeparator,
// } from "@mui/lab";
// import AnimationWrapper from "../animation-wrapper";
// import { motion } from "framer-motion";

// export default function ClientSoftwareEngineeringView({ data }) {
//   return (
//     <div className="max-w-screen-xl  mx-auto  mb-3" id="software-engineering">
//       <div className="flex flex-col gap-1">
//         <AnimationWrapper className="p-4">
//           <h1 className="ml-0 text-left leading-tight text-2xl sm:text-2xl lg:text-4xl text-blue-700 ">
//             My Software Engineering Experience
//           </h1>
//         </AnimationWrapper>

//         <AnimationWrapper>
//           <Timeline className="flex flex-col items-start">
//             {data && data.length
//               ? data.map((softwareEngineeringItem, index) => (
//                   <TimelineItem key={index}>
//                     <TimelineSeparator className="flex flex-col items-center">
//                       <TimelineDot className="bg-blue-500 w-3 h-3" />
//                       <TimelineConnector className="bg-blue-300 w-1" />
//                     </TimelineSeparator>
//                     <TimelineContent>
//                       <div className="border-[1px] p-6 rounded-lg sm:rounded-xl  w-max border-blue-700 mt-4 shadow-lg bg-white">
//                         <p className="font-semibold text-sm sm:text-base text-blue-600">
//                           {softwareEngineeringItem.position}
//                         </p>
//                         <h3 className="font-bold text-base sm:text-lg mt-2 text-blue-800">
//                           {softwareEngineeringItem.company}
//                         </h3>
//                         <p className="font-medium text-sm sm:text-base mt-2 text-gray-600">
//                           {softwareEngineeringItem.duration}
//                         </p>
//                         <p className="font-light text-sm sm:text-base mt-2 text-gray-400">
//                           {softwareEngineeringItem.location}
//                         </p>
//                       </div>
//                     </TimelineContent>
//                   </TimelineItem>
//                 ))
//               : null}
//           </Timeline>
//         </AnimationWrapper>
//       </div>
//     </div>
//   );
// }
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

export default function ClientSoftwareEngineeringView({ data }) {
  return (
    <div className="max-w-screen-xl  mx-auto  mb-3" id="software-engineering">
      <div className="flex flex-col m-7 gap-1">
        <AnimationWrapper className="p-4">
          <h1 className="ml-2 text-left leading-tight text-2xl sm:text-2xl lg:text-4xl text-blue-700 ">
            My Software Engineering Experience
          </h1>
        </AnimationWrapper>

        <AnimationWrapper>
          <Timeline className="flex flex-col items-start">
            {data && data.length
              ? data
                  .slice()
                  .reverse()
                  .map((softwareEngineeringItem, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator className="flex flex-col items-center">
                        <TimelineDot className="bg-blue-500 w-3 h-3" />
                        <TimelineConnector className="bg-blue-300 w-1" />
                      </TimelineSeparator>
                      <TimelineContent>
                        <div className="border-[1px] p-6 rounded-lg sm:rounded-xl  w-max border-blue-700 mt-4 shadow-lg bg-white">
                          <p className="font-bold mb-2 text-base sm:text-lg mt-2 text-blue-800">
                            {softwareEngineeringItem.position}
                          </p>
                          <h3 className="font-semibold mb-2 text-sm">
                            {softwareEngineeringItem.company}
                          </h3>
                          <p className="text-sm mb-2">
                            {softwareEngineeringItem.duration}
                          </p>
                          <p className="text-sm text-gray-400">
                            {softwareEngineeringItem.location}
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
