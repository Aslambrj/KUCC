import { useState } from "react";

export default function MindTheHackForm() {
  const [membersCount, setMembersCount] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [teamName, setTeamName] = useState("");
  const [email, setEmail] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [referenceBy, setReferenceBy] = useState("");

  const [members, setMembers] = useState(
    Array.from({ length: 2 }, () => ({ name: "", studentId: "" }))
  );

  // Handle dynamic members change (2–4)
  const handleMembersChange = (count) => {
    setMembersCount(count);
    setMembers(Array.from({ length: count }, () => ({ name: "", studentId: "" })));
  };

  const handleMemberInput = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  // FULLY UPDATED HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // HARD FRONTEND VALIDATION (2–4)
    if (membersCount < 2 || membersCount > 4) {
      alert("Team must have between 2 and 4 members.");
      setIsSubmitting(false);
      return;
    }

    try {
      const googleScriptURL =
        "https://script.google.com/macros/s/AKfycbz8ttx00pj4yeAwCqTVBz5Zl1snMGRyxT8wSqdxJMA4c-_Z43w5UxIZJGcrS50LUCA/exec";

      const formData = new FormData();

      // SECURITY KEY
      formData.append("secret", "KUCC_MIND_HACK_2026");

      formData.append("teamName", teamName);
      formData.append("email", email);
      formData.append("transactionId", transactionId);
      formData.append("referenceBy", referenceBy || "N/A");
      formData.append("membersCount", membersCount.toString());

      members.forEach((member, idx) => {
        formData.append(`memberName_${idx + 1}`, member.name.trim());
        formData.append(`studentId_${idx + 1}`, member.studentId.trim());
      });

      console.log("Submitting form data:", {
        teamName,
        email,
        transactionId,
        referenceBy,
        membersCount,
        members
      });

      const response = await fetch(googleScriptURL, {
        method: "POST",
        body: formData,
      });

      const responseText = await response.text();
      console.log("Raw response:", responseText);

      let result;
      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error("Server returned invalid response");
      }

      if (result.success) {
        setShowModal(true);
        setTeamName("");
        setEmail("");
        setTransactionId("");
        setReferenceBy("");
        setMembers(Array.from({ length: membersCount }, () => ({ name: "", studentId: "" })));
      } else {
        throw new Error(result.message || "Submission failed");
      }

    } catch (err) {
      console.error("Form submission error:", err);
      alert("Error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };



  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 py-12 px-4">
  <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border overflow-hidden">


        {/* Banner */}
        <img
        src="/assets/mind/mindthecover.png"
        alt="Mind the Hack 2nd Edition"
        className="w-full h-80 object-contain mt-[10px]"
      />

      {/* Facebook Videos Section */}
{/* Facebook Videos Section */}
{/* Facebook Videos Section */}
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">

  {/* Video Card */}
  <div className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 via-cyan-400 to-green-400 shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md">
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3260290804152022%2F&show_text=false&width=267&t=0"
        className="w-full h-full"
        style={{ border: "none" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  {/* Video Card */}
  <div className="group relative rounded-2xl p-[2px] bg-gradient-to-br from-green-400 via-teal-400 to-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300">
    <div className="aspect-[9/16] rounded-2xl overflow-hidden bg-white/70 backdrop-blur-md">
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1257174979632940%2F&show_text=false&width=267&t=0"
        className="w-full h-full"
        style={{ border: "none" }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>

</div>










        <div className="p-8 space-y-10">

          {/* Header */}
          <div>
            <h1 className="text-3xl font-semibold text-blue-600">
              Mind the Hack – 2nd Edition
            </h1>
            <p className="text-gray-600 mt-1">Intra-University Business Case Competition</p>
          </div>

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed">
            <strong>Hello Khulna University!</strong> <br />
            Khulna University Career Club  proudly presents the
            <strong> 2nd Edition of “Mind the Hack”</strong> — an intra-university
            business case competition designed to empower innovative and analytical minds.
          </p>

          {/* Event Overview */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
              🔍 Event Overview
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Event Name:</strong> Mind the Hack – 2nd Edition</li>
              <li><strong>Organizer:</strong> Khulna University Career Club</li>
              <li><strong>Eligibility:</strong> Students of Khulna University</li>
              <li><strong>Team Size:</strong> 2–4 members (Multi-disciplinary teams allowed)</li>
              <li><strong>Competition Type:</strong> Intra-University Business Case Competition</li>
            </ul>
          </div>

          {/* Competition Structure */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
                🧩 Competition Structure
              </h2>

              <p>
                <strong>🔹 Preliminary Round – Case Submission + Recorded Video Presentation</strong><br />
                Teams submit their solution in <strong>PowerPoint format</strong> along with a
                <strong> recorded video presentation</strong>.
              </p>

              <p className="text-sm text-gray-600">
                👉 Both <strong>PPT & Video</strong> must be submitted by <strong>11 February 2026</strong>.
              </p>

              <p>
                <strong>🔹 Final Round – Live Presentation</strong><br />
                Top 10 teams present in front of judges at Khulna University.
              </p>
            </div>


          {/* Registration & Payment */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
              💰 Registration Details
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li><strong>Registration Fee:</strong> BDT 150 (per team)</li>
              <li><strong>Payment Method:</strong> bKash, Nagad</li>
              <li><strong>Payment Number:</strong> 01856796371</li>
              <li className="text-sm text-gray-600">(Please mention your <strong>Team Name</strong> in the reference)</li>
              <li><strong>Registration Deadline:</strong> 10 February 2026</li>
            </ul>
          </div>

          {/* Prize Pool */}
          <div className="space-y-2">
  <h2 className="text-xl font-semibold border-b-2 border-blue-400 inline-block pb-1">
    🏆 Prize Pool
  </h2>

  <ul className="list-disc list-inside text-gray-700">
    <li>
      <strong>🥇 Champion Team</strong>: BDT 15,000
    </li>

    <li>
      <strong>🥈 1st Runner-up Team</strong>: BDT 10,000
    </li>

    <li className="flex flex-col gap-1">
      <div>
        <strong>🌟 Emerging Team Award</strong>: BDT 5,000
      </div>
      <div className="text-sm text-gray-600 pl-6 font-semibold">
        Emerging Team Award Eligibility: 25 Batch / 26 Batch / Cross teams (25 & 26 Batch)
      </div>
    </li>

    <li>
      <strong>📜 Certificates</strong> for all finalist teams
    </li>
  </ul>
</div>


          <hr className="border-gray-300" />

          {/* FORM START */}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block mb-2 font-semibold text-gray-800">Team Name</label>
              <input
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Example Team"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-800">Number of Members</label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                value={membersCount}
                onChange={(e) => handleMembersChange(Number(e.target.value))}
              >
                <option value={2}>2 Members</option>
                <option value={3}>3 Members</option>
                <option value={4}>4 Members</option>
              </select>
            </div>

            {/* Dynamic Member Inputs */}
            <div className="space-y-4">
              <label className="block mb-2 font-semibold text-gray-800">Team Members</label>
              {members.map((member, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg border">
                  <input
                    required
                    placeholder={`Member ${index + 1} Name`}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    value={member.name}
                    onChange={(e) => handleMemberInput(index, "name", e.target.value)}
                  />
                  <input
                    required
                    placeholder="Student ID"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                    value={member.studentId}
                    onChange={(e) => handleMemberInput(index, "studentId", e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-800">Email Address</label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="info@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-800">Transaction ID</label>
              <input
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="TX123456789"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-gray-800">Reference By (Discipline Delegate /KUCC member) (optional)</label>
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                value={referenceBy}
                onChange={(e) => setReferenceBy(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md font-semibold transition ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed text-gray-700" : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm text-center shadow-xl animate-scaleIn">
            <div className="h-14 w-14 mx-auto bg-green-100 rounded-full flex items-center justify-center text-2xl">✅</div>
            <h2 className="text-xl font-semibold mt-4">Registration Successful</h2>
            <p className="text-gray-600 mt-2">A confirmation email will be sent within 24 hours.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
