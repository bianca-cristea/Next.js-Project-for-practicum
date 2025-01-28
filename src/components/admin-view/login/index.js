"use client";

import FormControls from "../form-controls";

const controls = [
  { name: "email", placeholder: "Enter email", type: "text", label: "Email:" },
  {
    name: "password",
    placeholder: "Enter password",
    type: "password",
    label: "Password:",
  },
];

export default function Login({ formData, setFormData, handleLogin }) {
  return (
    <div className="w-full">
      <h1 className=" p-4 text-blue-700 text-xl">Login</h1>
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleLogin()}
          className="mt-[10px] border hover:bg-blue-700 hover:text-white border-blue-700 p-4 font-bold text-[16px]  transition-colors duration-300 ease-in-out"
        >
          Login
        </button>
      </div>
    </div>
  );
}
