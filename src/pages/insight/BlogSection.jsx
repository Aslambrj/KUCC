import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InsightsSection = () => {
  return (
    <div className="bg-gradient-to-tr from-[#55b2b2] to-[#0c80b2] w-full min-h-screen py-10 px-5 md:px-20">

      {/* Heading */}
      <section className="flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Insights & Messages
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-3xl">
          Stay updated with the latest club initiatives and hear directly from our leadership.
        </p>
      </section>

      {/* CLUB ADVISOR */}
      <section className="mt-10 flex justify-center">
        <div className="bg-gradient-to-br from-[#e4e2d1] to-[#d0c29f] rounded-xl shadow-2xl p-10 max-w-3xl text-center hover:scale-105 transition">

          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-teal-600 mb-5">
              <img
                src="/assets/insights/club-advisor.jpg"
                alt="Club Advisor"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4">
              Message from the Club Advisor
            </h2>
          </div>

          <p className="text-gray-900 text-lg leading-relaxed">
            As the Club Advisor, I am proud to witness the enthusiasm and dedication of the
            members of the Khulna University Career Club. Our mission is to nurture leadership,
            encourage innovation, and provide students with opportunities that prepare them for
            their professional journey. I encourage every student to participate actively, share
            ideas, and make the most of this platform for learning and growth.
          </p>

          <p className="mt-4 font-semibold">— Dr. Md Ashiq Ur Rahman</p>
        </div>
      </section>

      {/* ================= BOARD 2026 ================= */}

      <h2 className="text-3xl font-bold text-white text-center mt-16 mb-10">
        Executive Board 2026
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* President 2026 */}
        <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:scale-105 transition">
          <img src="/assets/insights/president2026.jpg" className="w-40 h-40 mx-auto rounded-full border-8 border-teal-600 mb-4 object-cover"/>
          <h3 className="text-xl font-bold text-teal-700">President</h3>
          <p className="text-gray-700 mt-3 text-sm leading-relaxed">
            As the President of KUCC for 2026, I am honored to lead a passionate team committed to
            empowering students. Our focus is to create meaningful opportunities that help members
            develop leadership, communication, and professional skills. Through impactful events
            and collaborations, we aim to inspire innovation and prepare students for successful careers.
          </p>

          <p className="mt-4 font-semibold text-center">— Ruhul Amin Munna</p>
        </div>

        {/* GS 2026 */}
        <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:scale-105 transition">
          <img src="/assets/insights/gs2026.jpg" className="w-40 h-40 mx-auto rounded-full border-8 border-teal-600 mb-4 object-cover"/>
          <h3 className="text-xl font-bold text-teal-700">General Secretary</h3>
          <p className="text-gray-700 mt-3 text-sm leading-relaxed">
            Serving as General Secretary, my goal is to ensure smooth coordination and effective
            communication among all members of the club. By organizing well-structured activities
            and maintaining strong collaboration, we aim to create a supportive environment where
            students can learn, share ideas, and grow both personally and professionally.
          </p>
          <p className="mt-4 font-semibold text-center">— Nafia Wahid Nirjhor</p>
        </div>

        {/* VP 1 */}
        <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:scale-105 transition">
          <img src="/assets/insights/vp12026.jpg" className="w-40 h-40 mx-auto rounded-full border-8 border-teal-600 mb-4 object-cover"/>
          <h3 className="text-xl font-bold text-teal-700">Vice President</h3>
          <p className="text-gray-700 mt-3 text-sm leading-relaxed">
            As Vice President, I will support the leadership team in executing the club’s vision
            and strengthening teamwork among members. My goal is to ensure that every initiative
            creates value for students by encouraging creativity, collaboration, and active
            participation in programs that enhance career readiness and leadership development.
          </p>
          <p className="mt-4 font-semibold text-center">— Aslam Ansari</p>
        </div>

        {/* VP 2 */}
        <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:scale-105 transition">
          <img src="/assets/insights/vp22026.jpg" className="w-40 h-40 mx-auto rounded-full border-8 border-teal-600 mb-4 object-cover"/>
          <h3 className="text-xl font-bold text-teal-700">Vice President</h3>
          <p className="text-gray-700 mt-3 text-sm leading-relaxed">
            It is a privilege to serve as Vice President of KUCC. I look forward to working closely
            with members to organize impactful programs that develop leadership, confidence, and
            teamwork. Our aim is to build a vibrant community where students can connect, learn
            from each other, and explore opportunities for their future careers.
          </p>
          <p className="mt-4 font-semibold text-center">— Tanbira Tabassum</p>
        </div>

        {/* Treasurer */}
        <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:scale-105 transition">
          <img src="/assets/insights/treasurer2026.jpg" className="w-40 h-40 mx-auto rounded-full border-8 border-teal-600 mb-4 object-cover"/>
          <h3 className="text-xl font-bold text-teal-700">Treasurer</h3>
          <p className="text-gray-700 mt-3 text-sm leading-relaxed">
            As Treasurer, my responsibility is to ensure transparency and responsible management
            of the club’s financial resources. By supporting events and initiatives through
            effective planning, I aim to contribute to the sustainable growth of the club and
            ensure that every activity benefits the entire KUCC community.
          </p>
          <p className="mt-4 font-semibold text-center">— Md. Rayhan Emon </p>
        </div>

      </section>

      {/* ================= BOARD 2025 ================= */}

      <h2 className="text-3xl font-bold text-white text-center mt-20 mb-10">
        Executive Board 2025
      </h2>

      <section className="flex flex-col md:flex-row gap-10 justify-center">

        {/* President 2025 */}
        <div className="bg-gradient-to-br from-[#fef3c7] to-[#93c5fd] rounded-xl shadow-2xl p-8 md:p-12 flex-1 hover:scale-105 transition">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-teal-600 mb-5">
              <img src="/assets/insights/president.jpg" alt="President" className="w-full h-full object-cover"/>
            </div>
            <h2 className="text-2xl font-bold text-teal-700 mb-4">
              Message from the President
            </h2>
          </div>

          <p className="text-gray-900 text-lg leading-relaxed">
            As the President of the Khulna University Career Club, I am delighted to welcome you
            to our dynamic community. Our mission is to empower students with knowledge, skills,
            and opportunities that prepare them for successful careers. Through workshops,
            competitions, and networking events, we aim to build confidence, leadership, and
            collaboration among our members.
          </p>

          <p className="mt-4 font-semibold text-center">— Ahmed Al Faysal</p>
        </div>

        {/* GS 2025 */}
        <div className="bg-gradient-to-br from-[#dbeafe] to-[#93c5fd] rounded-xl shadow-2xl p-8 md:p-12 flex-1 hover:scale-105 transition">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-teal-600 mb-5">
              <img src="/assets/insights/gs.jpg" alt="GS" className="w-full h-full object-cover"/>
            </div>

            <h2 className="text-2xl font-bold text-teal-700 mb-4">
              Message from the General Secretary
            </h2>
          </div>

          <p className="text-gray-900 text-lg leading-relaxed">
            It is a privilege to serve as the General Secretary of KUCC. Our goal is to ensure
            smooth coordination of events and maintain strong communication among members. By
            organizing impactful programs and encouraging participation, we strive to make the
            club a hub for learning, creativity, and professional growth.
          </p>

          <p className="mt-4 font-semibold text-center">— Rahul Gosh</p>
        </div>

      </section>


      {/* Insights */}
      <section className="mt-16 flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl text-gray-950 font-bold">
          Club Insights
        </h1>

        <Button>
          <Link to="/blog/create">Share Your Insight</Link>
        </Button>
      </section>

    </div>
  );
};

export default InsightsSection;