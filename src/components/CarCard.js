import React from "react";

export default function CarCard({ car, onOpen }) {
  return (
    <div className="bg-slate-900 rounded-xl border border-white/10 p-4 shadow-lg hover:border-red-600/50 transition-all group">
      {/* IMAGE ADDED HERE */}
      {car.image && (
        <div className="h-32 w-full mb-4 rounded-lg overflow-hidden">
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">
          {car.brand} {car.model}
        </h3>
        <span className="text-sm text-slate-500 bg-slate-800 px-2 py-1 rounded border border-white/5">
          {car.year}
        </span>
      </div>

      <p className="mt-2 text-slate-400 text-sm">{car.headline}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {car.highlights.map((h) => (
          <span 
            key={h} 
            className="text-xs bg-red-600/10 text-red-400 px-2 py-1 rounded-full font-medium"
          >
            {h}
          </span>
        ))}
      </div>

      <button
        onClick={() => onOpen(car)}
        className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors transform active:scale-[0.98]"
      >
        View Specs
      </button>
    </div>
  );
}