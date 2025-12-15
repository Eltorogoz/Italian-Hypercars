import React from "react";

export default function Header({ backgroundPic, title, subtitle }) {
  return (
    <header className="relative overflow-hidden">
      <div
        className="h-64 sm:h-80 md:h-96 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundPic})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      <div className="absolute inset-0 flex items-end">
        <div className="max-w-6xl mx-auto w-full px-4 pb-8 sm:pb-10">
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow">
            {title}
          </h1>
          <p className="mt-2 text-white/90 text-base sm:text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
}
