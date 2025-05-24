import React from 'react'
const studios = [
  { name: 'Treyarch', img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_treyarch.png' },
  { name: 'Infinity Ward', img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_infinityward.png' },
  { name: 'High Moon', img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_highmoon-studios.png' },
  { name: 'Beenox', img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png' },
  { name: 'Sledgehammer Games', img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_sledgehammer.png' },
  { name: 'Raven', img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_raven.png' },
  { name: 'Toys for Bob', img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png' },
  { name: 'Shanghai Studio', img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_atvi-shanghai-studio.png' },
  { name: 'Demonware', img: 'https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_demonware.png' },
];

export default function OurStudios() {
  return (
    <section className="bg-black py-24 px-6">
      <h2 className="text-3xl font-bold mb-4 text-white text-center ">OUR STUDIOS</h2>
      <div className="w-full h-[1px] bg-gray-500 mb-8" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 max-w-6xl mx-auto place-items-center">
        {studios.map((studio, idx) => (
          <img
            key={idx}
            src={studio.img}
            alt={studio.name}
            className="w-80 opacity-60 hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </section>
  )
}
