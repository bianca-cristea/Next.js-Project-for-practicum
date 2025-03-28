"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "title",
    placeholder: "Enter title",
    type: "text",
    label: "Title:",
  },
  {
    name: "description",
    placeholder: "Enter description",
    type: "text",
    label: "Description:",
  },
];

export default function AdminCompetitiveProgrammingView({
  formData,
  setFormData,
  handleSaveData,
  data,
  handleDelete,
}) {
  return (
    <div className="w-full">
      <h1 className=" p-3 text-blue-700 text-xl">Competitive Programming</h1>
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("competitive-programming")}
          className="mt-[10px] border hover:bg-blue-700 hover:text-white-500 border-blue-700 p-4 font-bold text-[16px]  transition-colors duration-300 ease-in-out"
        >
          Add Info
        </button>
      </div>
      <div className="mb-10">
        {data && data.length
          ? data.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 border p-4 border-blue-700"
              >
                <p>{item.title}</p>
                <p>{item.description}</p>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="mt-[10px] border hover:text-orange-500 p-4 font-bold text-[16px] transition-colors duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
