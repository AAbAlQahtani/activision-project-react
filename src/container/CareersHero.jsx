import React from 'react';

export default function CareersHero() {

  return (
    <section className="relative w-full h-screen overflow-hidden">

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-20 flex justify-center items-center">
        <button className="bg-[#2B2B2B] text-white font-bold px-6 py-3 border border-[#3E8909] hover:bg-[#3E8909] transition cursor-pointer">
          SEARCH JOBS
        </button>
      </div>
      
    </section>
  );
}
