"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Enter name",
    type: "text",
    label: "Name:",
  },
  {
    name: "title",
    placeholder: "Enter your title",
    type: "text",
    label: "Title:",
  },
];

export default function AdminHomeView({
  formData,
  setFormData,
  handleSaveData,
}) {
  console.log(formData);

  return (
    <div className="w-full">
      <h1 className=" p-3 text-blue-700 text-xl">Home</h1>
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("home")}
          className="mt-[10px] border hover:bg-blue-700 hover:text-white border-blue-700 p-4 font-bold text-[16px]  transition-colors duration-300 ease-in-out"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
