import React from "react";

const Nextgen3 = () => {
  const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLScN5LTqxEjjjm8A_xLcpH-UkaW5GtgDx8ykSjrEh67LL19sHw/viewform?usp=sharing&ouid=105271261288669849958";

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Cover Photo */}
        <div className="w-full bg-blue-100 flex items-center justify-center">
          <img
            src="/assets/nextgen3/nextgen3.jpeg"
            alt="NextGen 3.0 Cover"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-center">NEXTGEN 3.0</h1>

          <p>
            Hello, Batch 26,
            <br /><br />
            Khulna University Career Club is pleased to present <b>NextGen 3.0</b>, an exclusive onboarding initiative curated for the newest members of Khulna University.
          </p>

          <p>
            NextGen is designed as a strategic platform to cultivate leadership, strengthen communication, and prepare students for the evolving demands of academic and professional environments. It offers a structured pathway for individuals who aspire to excel in corporate leadership, entrepreneurship, and academic pursuits.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">🎯 Why participate?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Become part of Khulna University Career Club</li>
              <li>Experience a culture of excellence</li>
              <li>Enhance communication, creativity, and critical thinking</li>
              <li>Build a strong foundation for future success</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">🔥 Activities & Competitions</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>PowerPoint Presentation Competition</li>
              <li>Content Writing</li>
              <li>Ad Making Contest</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📩 Registration Details</h2>
            <p>
              Registration will be conducted through both offline and online channels. Representatives will visit classrooms and campus locations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">💳 Registration Fee</h2>
            <p>100 BDT</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">💰 Payment Options</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>bKash: 01890797023</li>
              <li>Nagad: 01728-235065</li>
              <li>Or via Discipline Delegate</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📢 Additional Info</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>We are coming to your classroom soon</li>
              <li>Available at cafeteria (9:00 AM – 5:00 PM)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📧 For Inquiries</h2>
            <p>
              Tanbira Tabassum Ritu — +8801403956534
              <br />
              Tasmia Islam Tisha — +8801605829705
              <br />
              Email: kuccofficial@gmail.com
            </p>
          </div>

          {/* Register Button at the end with full left-to-right gradient */}
                            <div className="flex justify-center pt-8 w-full">
                    <a
                        href={registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-96 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:from-blue-600 hover:to-blue-800 transition transform hover:scale-105"
                    >
                        🚀 Register Now
                    </a>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Nextgen3;
