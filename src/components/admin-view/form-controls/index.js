"use client";

export default function FormControls({ controls, formData, setFormData }) {
  if (!controls || !Array.isArray(controls)) {
    console.error("Invalid controls:", controls);
    return null;
  }

  return controls.map((controlItem) => (
    <div className="mb-4" key={controlItem.name}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {controlItem.label}
      </label>
      <input
        placeholder={controlItem.placeholder}
        type={controlItem.type}
        name={controlItem.name}
        id={controlItem.name}
        value={formData[controlItem.name] || ""}
        onChange={(e) =>
          setFormData({ ...formData, [controlItem.name]: e.target.value })
        }
        className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:shadow-outline"
      />
    </div>
  ));
}
