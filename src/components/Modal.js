import React from "react";

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-[100] animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-white/10 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
          <h3 className="text-xl font-black text-white uppercase italic tracking-tight">{title}</h3>
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-red-600 transition-all" 
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="p-8 text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}