"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "position",
    placeholder: "Enter position",
    type: "text",
    label: "Position:",
  },
  {
    name: "company",
    placeholder: "Enter company",
    type: "text",
    label: "Company:",
  },
  {
    name: "duration",
    placeholder: "Enter duration",
    type: "text",
    label: "Duration:",
  },
  {
    name: "location",
    placeholder: "Enter location",
    type: "text",
    label: "Location:",
  },
];

export default function AdminSoftwareEngineeringView({
  formData,
  setFormData,
  handleSaveData,
  data,
}) {
  return (
    <div className="w-full">
      <h1 className=" p-3 text-blue-700 text-xl">Software Engineering</h1>
      <div className="mb-10">
        {data && data.length
          ? data.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 border p-4 border-blue-700"
              >
                <p>{item.position}</p>
                <p>{item.company}</p>
                <p>{item.duration}</p>
                <p>{item.location}</p>
              </div>
            ))
          : null}
      </div>
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("software-engineering")}
          className="mt-[10px] border hover:bg-blue-700 hover:text-white-500 border-blue-700 p-4 font-bold text-[16px]  transition-colors duration-300 ease-in-out"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
