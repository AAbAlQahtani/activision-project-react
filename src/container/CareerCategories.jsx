import React from 'react';

const categories = [
  "ART, ANIMATION & SOUND",
  "ENGINEERING",
  "PRODUCTION",
  "CORPORATE FUNCTIONS",
  "DESIGN",
  "MARKETING & SALES",
  "QUALITY ASSURANCE (QA)",
  "CENTRAL TECH",
  "MOBILE",
];

export default function CareerCategories() {
  return (
    <section className="bg-black text-white px-6 py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        START YOUR GAME CHANGING CAREER
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="w-full sm:w-full md:w-[280px] px-6 py-4 border-2 rounded border-white font-bold text-sm cursor-pointer text-center"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
