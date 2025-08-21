import { useParams, useNavigate } from "react-router-dom";
import executives from "./executives";

const MemberInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = executives.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Member not found</h1>
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
    <div className="flex flex-col items-center justify-center p-6 gap-4">
      <img
        src={member.image}
        alt={member.name}
        className="w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full shadow-md object-cover"
      />
      <h1 className="text-2xl sm:text-3xl font-bold">{member.name}</h1>
      <p className="max-w-lg text-center text-gray-700 text-base sm:text-lg">
        {member.about}
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigate(-1)}
      >
        Back to Members
      </button>
    </div>
  );
};

export default MemberInfo;
