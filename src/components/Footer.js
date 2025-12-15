import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
            <span className="text-white font-bold tracking-tight uppercase italic">
              Italian Hypercars
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            Exploring the intersection of art and engineering.
          </p>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} UI Design Concept
          </p>
          <p className="text-slate-600 text-[10px] uppercase tracking-widest mt-1">
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}