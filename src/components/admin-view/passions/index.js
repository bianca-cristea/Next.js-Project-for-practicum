"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "passion",
    placeholder: "Enter passion",
    type: "text",
    label: "Passion",
  },
  {
    name: "description",
    placeholder: "Enter description",
    type: "text",
    label: "Description:",
  },
  {
    name: "photo",
    placeholder: "Enter photo",
    type: "text",
    label: "Photo:",
  },
];
export default function AdminHPassionsView({
  formData,
  setFormData,
  handleSaveData,
}) {
  return (
    <div className="w-full">
      <h1 className=" p-3 text-blue-700 text-xl">Passions</h1>
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("passions")}
          className="mt-[10px] border hover:bg-blue-700 hover:text-white border-blue-700 p-4 font-bold text-[16px]  transition-colors duration-300 ease-in-out"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
