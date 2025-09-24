import React, { useState } from "react";
import BackButton from "../../components/BackButton";

function JCCPage() {
  const [isExecDropdownOpen, setIsExecDropdownOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <BackButton />
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          JCC
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Case file (To be released 7 days prior to the conference)
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed"></p>
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="relative inline-block">
              <button
                type="button"
                onClick={() => setIsExecDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md transition-colors"
              >
                Executive Board Members
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              {isExecDropdownOpen && (
                <div className="absolute z-10 mt-2 w-56 rounded-md border border-yellow-500 bg-black shadow-lg">
                  <a
                    href="https://www.instagram.com/p/DOoI33rAbuk/?igsh=MTVxMjB5ZTZ2bmZreg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    Executive Board 1
                  </a>
                  <a
                    href="https://www.instagram.com/p/DOoI_A7AVxo/?igsh=MWoxaTh4dWpmdmh1Nw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-yellow-500 hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    Executive Board 2
                  </a>
                </div>
              )}
            </div>
            <a
              href="/coming-soon"
              className="inline-block border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Background Guide
            </a>
            {/* <a
              href="https://example.com/background-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Background Guide
            </a> */}
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c7.png"
            alt="JCC"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default JCCPage;
