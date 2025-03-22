"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "degree",
    placeholder: "Enter degree",
    type: "text",
    label: "Degree:",
  },
  {
    name: "years",
    placeholder: "Enter years",
    type: "text",
    label: "Years:",
  },
  {
    name: "college",
    placeholder: "Enter college",
    type: "text",
    label: "College:",
  },
];

export default function AdminEducationView({
  formData,
  setFormData,
  handleSaveData,
  data,
  handleDelete,
}) {
  return (
    <div className="w-full">
      <h1 className=" p-3 text-blue-700 text-xl">Education</h1>
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("education")}
          className="mt-[10px] border hover:bg-blue-700 hover:text-white-500 border-blue-700 p-4 font-bold text-[16px]  transition-colors duration-300 ease-in-out"
        >
          Add Info
        </button>
      </div>
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data
                .slice()
                .reverse()
                .map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-4 border p-4 border-blue-700"
                  >
                    <p>{item.degree}</p>
                    <p>{item.years}</p>
                    <p>{item.college}</p>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="mt-[10px] border hover:text-orange-500 border-red-700 p-4 font-bold text-[16px] transition-colors duration-300 ease-in-out"
                    >
                      Delete
                    </button>
                  </div>
                ))
            : null}
        </div>
      </div>
    </div>
  );
}
