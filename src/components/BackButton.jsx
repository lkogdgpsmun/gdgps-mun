import { Link } from "react-router-dom";

function BackButton() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-4 sm:mb-6">
      <Link
        to="/committees"
        className="inline-flex items-center gap-2 text-yellow-400 border border-yellow-500/50 hover:border-yellow-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:text-yellow-300 transition-colors duration-200"
      >
        <span className="text-lg">←</span>
        <span className="text-sm sm:text-base font-medium">Back to Committees</span>
      </Link>
    </div>
  );
}

export default BackButton;
