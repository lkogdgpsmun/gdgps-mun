import React from "react";
import BackButton from "../../components/BackButton";

function WTOPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <BackButton />
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          WTO; DSB
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Case file (To be released to 15 days prior to the conference)
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed"></p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://www.instagram.com/p/DOwHxF7gWy4/?igsh=MWJiZXU1a3R0ajFlaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Executive Board Members
            </a>
            <a
            href="/coming-soon"
              className="inline-block border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-4 py-2 rounded-md transition-colors"
              // href="https://example.com/background-guide"
              // target="_blank"
              // rel="noopener noreferrer"
              // className="inline-block border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Background Guide
            </a>
            <a
            // href="/coming-soon"
            //   className="inline-block border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-4 py-2 rounded-md transition-colors"
              href="https://drive.google.com/file/d/1EqdBGwGAR6cZ-Bo1wJn-Ok0fbywm0F61/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Case File
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c9.png"
            alt="WTO; DSB"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default WTOPage;
