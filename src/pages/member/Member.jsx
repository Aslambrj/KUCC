import { useNavigate } from "react-router-dom";

const Member = ({ name, image, about }) => {
  const navigate = useNavigate();

  const MemberInfoHandler = () => {
    navigate(`/memberinfo`, { state: { name, image, about } });
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-xs sm:max-w-sm group"
      onClick={MemberInfoHandler}
    >
      {/* Image with hover zoom */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 sm:h-56 md:h-64 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Name section */}
      <div className="p-3 sm:p-4 text-center transition-colors duration-300 group-hover:bg-gray-50">
        <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Member;
