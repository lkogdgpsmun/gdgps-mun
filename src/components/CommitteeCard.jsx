import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CommitteeCard({ title, image }) {
  const navigate = useNavigate();

  const imageSrc = (() => {
    if (!image) {
      return `/images/${title.toLowerCase().replace(/\s+/g, "_")}.png`;
    }
    return image.startsWith("/images/") ? image : `/images/${image}`;
  })();

  // Function to get the correct route path for each committee
  const getCommitteeRoute = (committeeTitle) => {
    const routeMap = {
      "AIPPM": "/committees/aippm",
      "UNHRC": "/committees/unhrc", 
      "HSRA": "/committees/hsra",
      "UNSC": "/committees/unsc",
      "UN Women (UNW)": "/committees/unwomen",
      "Lok Sabha": "/committees/lok-sabha",
      "Dumbarton Oaks": "/committees/dumbarton-oaks",
      "JCC": "/committees/jcc",
      "Akbar's Ibadat Khana": "/committees/akbars-ibadat-khana",
      "WTO; DSB": "/committees/wto",
      "UNGA; ESS": "/committees/unga-ess",
      "International Press Corps": "/committees/ipc"
    };
    return routeMap[committeeTitle] || "/committees";
  };

  const handleClick = () => {
    const route = getCommitteeRoute(title);
    navigate(route);
  };

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      <div className="relative bg-black border border-yellow-500/30 rounded-xl p-3 sm:p-4 
                     hover:border-yellow-500/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] 
                     transition-all duration-300 transform hover:scale-105">
        
        {/* Image */}
        <div className="aspect-square flex items-center justify-center mb-3">
          <img
            src={imageSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-contain rounded-lg
                       group-hover:brightness-110 transition-all duration-300"
          />
        </div>

        {/* Title */}
        <div className="text-center">
          <h3 className="text-gold text-xs sm:text-sm font-serif font-medium
                         group-hover:text-yellow-300 transition-colors duration-300
                         leading-tight">
            {title}
          </h3>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                       rounded-xl flex items-end justify-center pb-2">
          <span className="text-yellow-400 text-xs font-medium">Click to explore</span>
        </div>
      </div>
    </motion.div>
  );
}

export default CommitteeCard;
