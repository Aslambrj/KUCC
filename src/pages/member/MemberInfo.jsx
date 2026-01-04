// src/components/MemberInfo.jsx
import { useParams, useNavigate } from "react-router-dom";
import executives from "./executives";
import delegates from "./delegates"; // NEW

const MemberInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const numericId = parseInt(id);
  const member =
    executives.find((m) => m.id === numericId) ||
    delegates.find((m) => m.id === numericId); // NEW

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-[#87d6e6] to-[#063bb7]">
        <h1 className="text-2xl font-bold text-white">Member not found</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 gap-4 bg-gradient-to-tr from-[#a0d8f1] to-[#63b3ed] min-h-screen">
      <div className="bg-gradient-to-tr from-[#ffffff] to-[#a0d8f1] p-6 rounded-lg shadow-xl max-w-2xl w-full">
        <div className="w-full">
          <img
            src={member.image}
            alt={member.name}
            loading="eager"
            decoding="async"
            className="w-full max-h-[60vh] object-contain rounded-md shadow-md bg-white"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mt-5 text-center">{member.name}</h1>
        {"discipline" in member && member.discipline && (
          <p className="text-center text-gray-600 mt-1">{member.discipline}</p>
        )}

        <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed text-center">
          {member.about || "Details will be updated soon."}
        </p>

        <div className="flex justify-center">
          <button
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => navigate(-1)}
          >
            Back to Members
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
