import { useState } from "react";

const REGISTRATION_OPEN = true; // 👈 Change to false when closed

export default function VisualOdyssey() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border overflow-hidden">

        {/* Registration Closed Banner */}
        <div className="p-6">
          {!REGISTRATION_OPEN && (
            <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-5 rounded-2xl shadow-lg animate-pulse mb-6">
              ⛔ Registration Closed — Deadline has passed
            </div>
          )}
        </div>

        {/* Banner Image */}
        <img
          src="/assets/visual/visual.jpg"
          alt="Visual Odyssey 2.0 – KUCC Design Challenge"
          className="w-full h-80 object-contain mt-[10px]"
        />

        <div className="p-8 space-y-10">

          {/* Header */}
          <div>
            <h1 className="text-3xl font-semibold text-purple-600">
              Visual Odyssey 2.0 – KUCC Design Challenge
            </h1>
            <p className="text-gray-600 mt-1">
              Exclusive Intra-Club Poster Design Competition
            </p>
          </div>

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed">
            <strong>Khulna University Career Club</strong> proudly presents 
            <strong> Visual Odyssey 2.0 – KUCC Design Challenge</strong>, 
            an exclusive intra-club poster design competition designed to transform 
            recent events into powerful visual narratives.
            <br /><br />
            This platform is built for creative thinkers who can analyze context, 
            interpret significance, and communicate insight through impactful design.
          </p>

          {/* Event Overview */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold border-b-2 border-purple-400 inline-block pb-1">
              🔍 Event Overview
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Event Name:</strong> Visual Odyssey 2.0 – KUCC Design Challenge</li>
              <li><strong>Organizer:</strong> Khulna University Career Club</li>
              <li><strong>Eligibility:</strong> Only registered KUCC members (Batches 23–25)</li>
              <li><strong>Participation Type:</strong> Individual</li>
              <li><strong>Topic:</strong> Any Recent National or International Event (to be published soon)</li>
            </ul>
          </div>

          {/* Challenge Structure */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold border-b-2 border-purple-400 inline-block pb-1">
              🧩 Challenge Structure
            </h2>

            <p className="text-gray-700">
              Participants must design a poster that visually interprets 
              a recent event, capturing its relevance, impact, and perspective 
              through originality and clarity.
            </p>
          </div>

          {/* Evaluation Criteria */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold border-b-2 border-purple-400 inline-block pb-1">
              ★ Evaluation Criteria
            </h2>

            <ul className="list-disc list-inside text-gray-700">
              <li>Creativity & originality</li>
              <li>Relevance to the selected event</li>
              <li>Technical execution</li>
              <li>Presentation & clarity</li>
            </ul>

            <p className="text-sm text-gray-600 mt-2">
              The decision of the jury panel will be final and binding.
            </p>
          </div>

          {/* Registration Details */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold border-b-2 border-purple-400 inline-block pb-1">
              📎 Registration Details
            </h2>

            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Registration Deadline:</strong> 25 February, 11:59 PM</li>
              <li>
                <strong>Registration Link:</strong>{" "}
                <a
                  href="https://forms.gle/h5JKqXce1AD523WR8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-semibold underline"
                >
                  Click Here to Register
                </a>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          {REGISTRATION_OPEN && (
            <button
              onClick={() => setShowModal(true)}
              className="w-full py-3 rounded-md font-semibold bg-purple-600 hover:bg-purple-700 text-white transition"
            >
              Register Now
            </button>
          )}

          {/* Contact
          <div className="border-t pt-6 text-gray-700">
            <p className="font-semibold">For any queries, feel free to contact:</p>
            <p className="mt-2">
              Tanbira Tabassum Ritu <br />
              Public Relation & Communication Secretary <br />
              📞 01403-956534
            </p>
          </div> */}

        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm text-center shadow-xl">
            <h2 className="text-xl font-semibold">Proceed to Registration</h2>
            <p className="text-gray-600 mt-2">
              You will be redirected to the official Google Form.
            </p>
            <a
              href="https://forms.gle/h5JKqXce1AD523WR8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
            >
              Continue
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="mt-3 text-gray-500 hover:text-gray-700 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}