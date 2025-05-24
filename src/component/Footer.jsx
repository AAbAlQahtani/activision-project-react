import React from 'react';

export default function Footer() {
  const activisionLinks = [
    "ABOUT US",
    "CAREERS",
    "PRESS CENTER",
    "RATINGS & RESOURCES",
    "INVESTOR RELATIONS",
    "NEWS",
  ];

  const supportLinks = [
    "GAMES",
    "SUPPORT OPTIONS",
    "GAME MANUALS",
    "SOFTWARE LICENSE AGREEMENTS",
    "TWITTER",
  ];
  const privacyLinks = [
    "LEGAL",
    "TERMS OF USE",
    "PRIVACY POLICY",
    "COOKIE POLICY",
    "COOKIE SETTINGS",
    "ESRB.ORG",
  ];

  return (
    <footer className="bg-black text-white px-10 py-12">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10">

        <div className="flex flex-col sm:flex-row gap-12 flex-wrap">
          <ul className="flex flex-col gap-2 text-xs">
            <h3 className="font-bold mb-2">ACTIVISION.COM</h3>
            {activisionLinks.map((item) => (
              <li key={item} className="cursor-pointer hover:text-white text-[#A5A2A5]">{item}</li>
            ))}
          </ul>

          <ul className="flex flex-col gap-2 text-xs w-32">
            <h3 className="font-bold mb-2">SUPPORT</h3>
            {supportLinks.map((item) => (
              <li key={item} className="cursor-pointer hover:text-white text-[#A5A2A5]">{item}</li>
            ))}
          </ul>

          <ul className="flex flex-col gap-2 text-xs">
            <h3 className="font-bold mb-2">PRIVACY</h3>
            {privacyLinks.map((item) => (
              <li key={item} className="cursor-pointer hover:text-white text-[#A5A2A5]">{item}</li>
            ))}
          </ul>

          <div>
            <div className="flex flex-wrap gap-2 mt-8 lg:mt-0  justify-start items-center w-full  md:w-56 lg:w-76# ">
              <img src="https://support.activision.com/content/dam/atvi/support/common/footer/esrb-rating.png" className="h-14 cursor-pointer" alt="" />
              <img src="https://support.activision.com/content/dam/atvi/support/common/footer/usk-18.png" className="h-16 cursor-pointer" alt="" />
              <img src="https://support.activision.com/content/dam/atvi/support/common/footer/pegionline.png" className="h-18 cursor-pointer" alt="" />
              <img src="https://support.activision.com/content/dam/atvi/support/common/footer/pegi-18.png" className="h-18 cursor-pointer" alt="" />
              <img src="https://support.activision.com/content/dam/atvi/support/common/footer/esrb-privacy.gif" className="h-24 mt-5 cursor-pointer" alt="" />

            </div>

          </div>


          <div className="flex flex-col items-start  lg:items-start gap-2 mt-8 lg:mt-0 ">
            <img
              src="https://support.activision.com/content/dam/atvi/support/common/footer/atvilogo-wht-footer.png"
              className="h-12 cursor-pointer"
              alt=""
            />
            <p className="text-xs text-white bg-[#303030] px-5 py-2 mt-1 ">
              ©Copyright 2025 Activision Publishing, Inc.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
