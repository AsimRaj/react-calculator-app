import React from "react";

export const Display = ({ value }) => {
  return (
    <input
      type="text"
      readOnly
      value={value || "0"}
      className="w-full p-3 outline-none mb-4 text-right text-xl rounded bg-gray-700 text-white
      "
    />
  );
};
