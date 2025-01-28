"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "publication",
    placeholder: "Enter publication",
    type: "text",
    label: "Publication:",
  },
  {
    name: "year",
    placeholder: "Enter year",
    type: "text",
    label: "Year",
  },
  {
    name: "authors",
    placeholder: "Enter authors",
    type: "text",
    label: "Authors",
  },
  {
    name: "link",
    placeholder: "Enter link",
    type: "text",
    label: "Link",
  },
];
export default function AdminResearchView({
  formData,
  setFormData,
  handleSaveData,
  data,
}) {
  return (
    <div className="w-full">
      <h1 className=" p-3 text-blue-700 text-xl">Research</h1>
      <div className="mb-10">
        {data && data.length
          ? data.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 border p-4 border-blue-700"
              >
                <p>{item.publication}</p>
                <p>{item.year}</p>
                <p>{item.authors}</p>
                <p>{item.link}</p>
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
          onClick={() => handleSaveData("research")}
          className="mt-[10px] border hover:bg-blue-700 hover:text-white border-blue-700 p-4 font-bold text-[16px]  transition-colors duration-300 ease-in-out"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
