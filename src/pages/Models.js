import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarCard from "../components/CarCard";
import Modal from "../components/Modal";
import { cars } from "../data/italianCarsData";

export default function Models() {
  const [brandFilter, setBrandFilter] = useState("All");
  const [selectedCar, setSelectedCar] = useState(null);
  const [countMessage, setCountMessage] = useState("");

  const filtered = useMemo(() => {
    if (brandFilter === "All") return cars;
    return cars.filter((c) => c.brand === brandFilter);
  }, [brandFilter]);

  useEffect(() => {
    setCountMessage(`Showing ${filtered.length} model(s).`);
  }, [filtered.length]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header
        backgroundPic="/images/red-ferrari.jpg"
        title="Models"
        subtitle="Filter by brand, open a modal, and explore detailed specs."
      />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-14 space-y-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <label className="font-semibold">Brand</label>
            <select
              className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2"
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
            >
              <option>All</option>
              <option>Pagani</option>
              <option>Ferrari</option>
            </select>
          </div>
          <p className="text-sm text-slate-400">{countMessage}</p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <CarCard key={car.id} car={car} onOpen={setSelectedCar} />
          ))}
        </div>

        {/* Modal */}
        <Modal
          open={!!selectedCar}
          title={selectedCar ? `${selectedCar.brand} ${selectedCar.model}` : ""}
          onClose={() => setSelectedCar(null)}
        >
          {selectedCar && (
            <div className="space-y-3">
              <p className="text-sm text-slate-400">
                Price range: {selectedCar.priceRange}
              </p>

              <div>
                <p><b>Engine:</b> {selectedCar.specs.engine}</p>
                <p><b>Power:</b> {selectedCar.specs.power}</p>
                <p><b>Drivetrain:</b> {selectedCar.specs.drivetrain}</p>
              </div>

              <p className="text-slate-300">{selectedCar.headline}</p>
            </div>
          )}
        </Modal>
      </main>

      <Footer />
    </div>
  );
}
