import React, { useState } from "react";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-4 text-lg font-medium text-gray-800 hover:bg-gray-50 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? "–" : "+"}</span>
      </button>

      {isOpen && <div className="px-4 pb-4 text-gray-600">{content}</div>}
    </div>
  );
}
