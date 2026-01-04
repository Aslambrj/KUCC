// src/components/MemberCard.jsx
import { useNavigate } from "react-router-dom";

const Member = ({ id, name, image, about, subtitle, clickable = true }) => {
  const navigate = useNavigate();

  const MemberInfoHandler = () => {
    if (!clickable) return;
    navigate(`/memberinfo/${id}`);
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 w-full max-w-xs sm:max-w-sm group ${
        clickable ? "cursor-pointer hover:scale-105 hover:shadow-2xl" : "cursor-default"
      }`}
      onClick={clickable ? MemberInfoHandler : undefined}
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Text */}
      <div className="p-3 sm:p-4 text-center transition-colors duration-300 group-hover:bg-gray-50">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">{name}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Member;
