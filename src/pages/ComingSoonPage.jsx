// import React from "react";
// import BackButton from "../components/BackButton";

// function ComingSoonPage() {
//   return (
//     <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
//       <BackButton />
//       <section className="mx-auto max-w-6xl text-center mb-10">
//         <h3 className="h-serif text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
//           Coming Soon
//         </h3>
//         <div className="w-20 sm:w-24 h-1 bg-yellow-500 mx-auto mt-3 sm:mt-4 rounded-full"></div>
//       </section>
//       <section className="mx-auto max-w-3xl text-center">
//         <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-semibold">
//           Coming Soon
//         </p>
//       </section>
//     </div>
//   );
// }

// export default ComingSoonPage;


import React from "react";
import BackButton from "../components/BackButton";

function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 sm:px-6">
      <BackButton />

      {/* Centered Coming Soon text */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="mt-30 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gold uppercase tracking-wide">
          Coming Soon...
        </h1>
      </div>
    </div>
  );
}

export default ComingSoonPage;
