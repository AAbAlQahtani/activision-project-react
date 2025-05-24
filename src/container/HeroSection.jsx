import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://video.activision.com/activision/cdn/videos/call-of-duty-mobile.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/10 to-transparent z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center w-full lg:w-[60%] h-full text-white px-4 text-center">
        <img
          src="https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blackops6/common/black-ops-6-full-logo.png"
          alt=""
          className="w-full max-w-xs sm:max-w-md mb-6"
        />

        <p className="text-lg sm:text-xl font-light leading-snug mb-6">
          Forced to go rogue. Hunted from Within. <br />
          This is Black Ops 6.
        </p>

        <div className="flex  flex-col sm:flex-row gap-4">
          <button className="px-6 py-2 w-60 rounded-full font-semibold text-white border-2 mx-auto  text-center transition-colors duration-300  border-[#0768af] bg-[rgba(7,104,175,0.5)] hover:bg-[#064a7c] hover:border-3 hover:border-[#0768AF] cursor-pointer">
            PLAY WITH GAME PASS
          </button>
          <button className="px-6 py-2 w-60 border border-white text-white rounded-full font-semibold hover:bg-[#064a7c] hover:border-3 hover:border-[#0768AF] cursor-pointer ">
            VISIT SITE
          </button>
        </div>
      </div>
    </div>
  );
}
