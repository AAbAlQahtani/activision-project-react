import React from 'react';

const cards = [
  {
    title: 'Our Locations',
    image: 'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg',
  },
  {
    title: 'DE&I',
    image: 'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg',
  },
  {
    title: 'Early Careers',
    image: 'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg',
  },
  {
    title: 'Mission & Talent Brand',
    image: 'https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png',
  },
];

export default function ExploerWorld() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#121212] rounded-lg overflow-hidden w-full sm:w-[230px] shadow-md"
          >
            <img src={card.image} alt={card.title} className="w-full rounded-b-lg h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-extrabold mb-4">{card.title}</h3>
              <button className="px-6 py-2 border-2 border-white rounded-full font-semibold text-white cursor-pointer hover:bg-[#064a7c]">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

