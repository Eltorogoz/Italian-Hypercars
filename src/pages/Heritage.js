import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Heritage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header
        backgroundPic="/images/pagani-interior.jpg"
        title="Italian Performance Studio" // NAME CHANGE HERE
        subtitle="Why these brands matter — craft, racing, and obsession-level detail."
      />

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-14">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold mb-4">What makes them iconic?</h2>

          <ul className="space-y-4 text-slate-300">
            <li>
              <b className="text-slate-100">Ferrari:</b> decades of motorsport DNA
              expressed through design, engineering, and racing success.
            </li>
            <li>
              <b className="text-slate-100">Pagani:</b> ultra-low-volume art builds
              using exotic materials and obsessive attention to detail.
            </li>
            <li>
              <b className="text-slate-100">Both:</b> emotional design — these cars
              are built to feel special, not just fast.
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}