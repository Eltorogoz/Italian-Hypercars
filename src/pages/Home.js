import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

export default function Home() {

  const carouselItems = [
    {
      id: 1,
      title: "Pagani Huayra",
      subtitle: "Carbon-titanium art piece with twin-turbo V12 energy.",
      image: "/images/pagani-huayra.jpg",
    },
    {
      id: 2,
      title: "Pagani Zonda",
      subtitle: "Hybrid hypercar with insane launch and daily-drive vibes.",
      image: "/images/pagani-zonda.jpg",
    },
    {
      id: 3,
      title: "Ferrari 458 Italia",
      subtitle: "Naturally aspirated soundtrack legend.",
      image: "/images/ferrari-458.jpg",
    },
  ];

  // Use your existing FAQ items.
  const faq = [
    {
      title: "Why is Pagani so expensive?",
      content:
        "They’re ultra low-volume, hand-built, and use exotic materials (carbon-titanium, custom interiors). You’re paying for craftsmanship, rarity, and engineering detail.",
    },
    {
      title: "Ferrari vs Pagani vibe?",
      content:
        "Ferrari leans motorsport and performance heritage. Pagani feels like automotive art — dramatic design, boutique production, and insane interior detail.",
    },
    {
      title: "What should a buyer care about most?",
      content:
        "Your use-case: collecting vs driving. Also maintenance/service access, warranty, and whether you want raw emotion (NA engines) or modern tech (hybrid/active aero).",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Header
        backgroundPic="/images/italy-garage.jpg"
        title="Italian Hypercars"
        subtitle="A clean, interactive tour of Pagani + Ferrari — design, specs, and what makes them iconic."
      />

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-14 space-y-16">
        {/* Highlights */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Highlights</h2>
          <p className="text-slate-400 max-w-2xl">
            Tap through the carousel, then jump into Models to compare specs.
          </p>

          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Carousel items={carouselItems} />
          </div>
        </section>

        {/* Philosophy + FAQ */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold mb-2">Pagani + Ferrari</h3>
            <p className="text-slate-400">
              Two very different philosophies: boutique art builds vs
              motorsport-driven evolution. One is “handmade sculpture,” the other
              is “racing DNA refined for the street.”
            </p>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="p-5 border-b border-white/10">
              <h3 className="text-lg font-semibold">Quick FAQ</h3>
              <p className="text-sm text-slate-400">Short answers, no fluff.</p>
            </div>

            <div>
              {faq.map((item, i) => (
                <Accordion key={i} title={item.title} content={item.content} />
              ))}
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
