import React, { useState } from "react";

export default function Carousel({ items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!items.length) return null;

  const next = () => setCurrentIndex((i) => (i + 1) % items.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + items.length) % items.length);

  const item = items[currentIndex];

  return (
    <div className="relative group">
      <div className="relative h-64 sm:h-80 md:h-[500px] bg-black">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover opacity-80 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-red-600 text-white w-12 h-12 flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
        >
          &#10094;
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-red-600 text-white w-12 h-12 flex items-center justify-center backdrop-blur-md transition-all opacity-0 group-hover:opacity-100"
        >
          &#10095;
        </button>

        {/* Content - Supports both 'subtitle' and 'description' keys */}
        <div className="absolute bottom-8 left-8 right-8">
          <h3 className="text-white text-3xl md:text-4xl font-black italic uppercase tracking-tighter">
            {item.title}
          </h3>
          <p className="text-red-500 font-bold text-lg mt-1">
            {item.subtitle || item.description}
          </p>
          <div className="flex gap-1 mt-4">
            {items.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 w-8 rounded-full transition-all ${i === currentIndex ? "bg-red-600" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}