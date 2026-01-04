import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InsightsSection = () => {
  return (
    <div className="bg-gradient-to-tr from-[#55b2b2] to-[#0c80b2] w-full min-h-screen py-10 px-5 md:px-20">
      {/* Heading Section */}
      <section className="flex flex-col items-center justify-center gap-6 md:gap-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg animate-fadeIn">
          Insights & Messages
        </h1>
        <p className="text-lg md:text-2xl text-white max-w-3xl animate-fadeIn delay-200">
          Stay updated with the latest club initiatives and hear directly from our leadership.
        </p>
      </section>

      {/* Club Advisor, President & GS Messages */}
      <section className="mt-10 flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-stretch">
        {/* Club Advisor */}
        <div className="bg-gradient-to-br from-[#e4e2d1] to-[#d0c29f] rounded-xl shadow-2xl p-8 md:p-12 flex-1 animate-slideInLeft hover:scale-105 transition-transform duration-500">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-teal-600 mb-5 animate-fadeIn">
              <img
                src="/assets/images/club-advisor.jpg"
                alt="Club Advisor"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 text-center">
              Message from the Club Advisor
            </h2>
          </div>
          <p className="text-gray-900 text-sm md:text-lg leading-relaxed">
            As the Club Advisor, I am honored to be part of this incredible journey with the
            Khulna University Career Club. My role is to guide and support the team in their
            endeavors, ensuring that the club’s activities align with our broader educational
            goals. I encourage all students to take full advantage of the club’s resources, learn
            from the diverse experiences offered, and always strive for personal and professional
            growth. Together, we can build a future of success and opportunity.
          </p>
          <p className="mt-4 font-semibold text-gray-900 text-center">— Dr. Md Ashiq Ur Rahman</p>
        </div>
      </section>

      {/* President & General Secretary (In a separate row for larger screens) */}
      <section className="mt-10 flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-stretch">
        {/* President */}
        <div className="bg-gradient-to-br from-[#fef3c7] to-[#fde68a] rounded-xl shadow-2xl p-8 md:p-12 flex-1 animate-slideInLeft hover:scale-105 transition-transform duration-500">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-teal-600 mb-5 animate-fadeIn">
              <img
                src="/assets/images/president.jpg"
                alt="President"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 text-center">
              Message from the President
            </h2>
          </div>
          <p className="text-gray-900 text-sm md:text-lg leading-relaxed">
            As the President of the Khulna University Career Club, I am delighted to welcome you
            to our vibrant and dynamic community. Our mission is to empower students with the
            knowledge, skills, and opportunities necessary to excel in their careers and personal
            growth. Through workshops, seminars, competitions, and networking events, we strive to
            create an environment where every student can explore their potential, develop
            confidence, and prepare for the professional world. I encourage all members to
            actively participate, share ideas, and make the most of what our club has to offer.
            Together, we can foster innovation, collaboration, and excellence.
          </p>
          <p className="mt-4 font-semibold text-gray-900 text-center">— Ahmed Al Faysal</p>
        </div>

        {/* General Secretary */}
        <div className="bg-gradient-to-br from-[#dbeafe] to-[#93c5fd] rounded-xl shadow-2xl p-8 md:p-12 flex-1 animate-slideInRight hover:scale-105 transition-transform duration-500">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-teal-600 mb-5 animate-fadeIn">
              <img
                src="/assets/images/gs.jpg"
                alt="General Secretary"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 text-center">
              Message from the General Secretary
            </h2>
          </div>
          <p className="text-gray-900 text-sm md:text-lg leading-relaxed">
            It is a privilege to serve as the General Secretary of the Khulna University Career
            Club. Our goal is to support students in their journey toward personal and professional
            development. By organizing a variety of events, maintaining effective communication,
            and ensuring smooth execution of all activities, we aim to make the club a hub of
            learning, creativity, and opportunity. I invite every student to engage wholeheartedly,
            contribute their talents, and benefit from the rich experiences our club provides. Let
            us work together to build a strong, supportive, and inspiring community.
          </p>
          <p className="mt-4 font-semibold text-gray-900 text-center">— Rahul Gosh</p>
        </div>
      </section>

      {/* Insights / Articles Section */}
      <section className="mt-16 flex flex-col justify-center items-center gap-5 md:gap-10 w-full h-full px-5 md:px-0">
        <div className="flex justify-between w-full items-center mb-6 animate-fadeIn">
          <h1 className="text-2xl md:text-4xl text-gray-950 font-bold">Club Insights</h1>
          <Button>
            <Link to="/blog/create">Share Your Insight</Link>
          </Button>
        </div>

        
      </section>
    </div>
  );
};

export default InsightsSection;
