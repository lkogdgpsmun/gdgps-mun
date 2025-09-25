import React from "react";
import { NavLink } from "react-router-dom";
import BackButton from "../../components/BackButton";

function IPCPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <BackButton />
      <section className="mx-auto max-w-6xl text-center mb-10">
        <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
          International Press Corps
        </h3>
        <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
      </section>

      <section className="mx-auto max-w-6xl grid md:grid-cols-5 gap-6 sm:gap-10 items-start">
        <div className="md:col-span-3 order-2 md:order-1">
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-3">
            Agenda
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
            Photography, Journalism and Caricature.
          </p>
          <h3 className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold mb-3">
            Overview
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">“Freedom of the press is not just important to democracy, it is democracy.”
— Walter Cronkite

Looking to break free from the usual MUN debates and dive into a world where stories shape history and images speak louder than words? Welcome to the International Press Corps ,the committee where curiosity meets creativity, and every lens, pen, and sketch uncovers a deeper truth.

The International Press Corps (IPC) isn’t just a committee; it’s an experience like no other with 
alongside specialized focuses in photography, journalism, and caricature. other. Here, journalism meets diplomacy, photography captures the pulse of debate, and caricatures reveal the lighter side of serious discourse.

The International Press Corps empowers you to follow your passions, engage with fellow creatives, and leave a lasting mark on the MUN community.
Take your voice beyond speeches. Capture, question, and create with the International Press Corps where the story behind the debate is yours to tell.</p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://www.instagram.com/p/DOq7NtrAXxB/?igsh=NmYydzFrMDdwNjN5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Executive Board Members
            </a>
            <div className="relative inline-block group">
              <button
                className="inline-flex items-center gap-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:cursor-pointer font-semibold px-4 py-2 rounded-md transition-colors"
              >
                Background Guide
                <span className="inline-block">▾</span>
              </button>
              <div className="hidden group-hover:flex group-focus-within:flex flex-col absolute left-0 mt-2 bg-black/90 backdrop-blur-lg rounded-md shadow-lg w-64 z-20 p-2">
                <NavLink
                  to="/coming-soon"
                  className="text-gold px-3 py-2 rounded hover:bg-yellow-500 hover:!text-black transition-colors"
                >
                  Photography
                </NavLink>
                <a
                  href="https://drive.google.com/file/d/1gs7MSFy7IXMbGgjC0BCTzlINvDI-a_FR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold px-3 py-2 rounded hover:bg-yellow-500 hover:!text-black transition-colors"
                >
                  Journalism and Caricature
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center mt-10 md:mt-20 order-1 md:order-2">
          <img
            src="/images/c10.png"
            alt="IPC"
            className="rounded-2xl shadow-lg max-w-[260px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default IPCPage;
