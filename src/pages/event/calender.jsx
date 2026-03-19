import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Calendar = () => {
  const events = [
    // 2025 Events

    {
        date: "17-03-2026",
        eventName: "Career Talk Series: Episode 5",
        eventTime: "9:30 PM – 11:00 PM",
        eventVenue: "Online",
        description:
          "This session focused on Effective CV Writing and Interview Readiness, helping participants build strong resumes and prepare confidently for job interviews.",
      },

    {
        date: "01-03-2026",
        eventName: "Visual Odyssey 2.0",
        eventTime: "4:00 PM – 8:00 PM",
        eventVenue: "Journalist Liakat Ali Auditorium",
        description:
          "Visual Odyssey 2.0 is a creative design competition that highlights artistic skills in graphics, photography, and visual storytelling.",
      },
      {
        date: "12-02-2026",
        eventName: "Mind the Hack 2.0",
        eventTime: "4:00 pm – 8:00 pm",
        eventVenue: "Journalist Liakat Ali Auditorium",
        description:
          "Mind the Hack 2.0 is a tech-focused hackathon where participants collaborate to build innovative solutions and showcase programming skills.",
      },
      {
        date: "24-09-2025",
        eventName: "Public Speaking Pros 3.0",
        eventTime: "4:00 pm – 8:00 pm",
        eventVenue: "Journalist Liakat Ali Auditorium",
        description:
          "Public Speaking Pros 3.0 is a communication development event designed to improve confidence, presentation skills, and public speaking abilities.",
      },



    {
      date: "03-08-2025",
      eventName: "NextGen",
      eventTime: "9:00 am – 6:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "NextGen is a career development event focusing on new-age skills, networking, and professional growth.",
    },
    {
      date: "27-07-2025",
      eventName: "RIDGE",
      eventTime: "9:00 am – 6:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "RIDGE is a leadership conference bringing together young professionals to learn and grow.",
    },
    {
      date: "07-07-2025",
      eventName: "Career Talk Series",
      eventTime: "10:00 am – 4:00 pm",
      eventVenue: "Online",
      description:
        "An online series of talks from industry leaders, offering valuable insights into career growth.",
    },
    {
      date: "25-05-2025",
      eventName: "Futurnation",
      eventTime: "9:00 am – 5:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "A futuristic career event, exploring emerging fields and the skills needed for the next generation of workers.",
    },
    {
      date: "23-05-2025",
      eventName: "Prime Bank Empowering Youth",
      eventTime: "9:00 am – 6:00 pm",
      eventVenue: "Journalist Liakat Ali Auditorium",
      description:
        "An event focused on empowering youth through financial literacy, career development, and entrepreneurship.",
    },



       {
    "date": "9th November, 2024",
    "eventName": "TEDx Khulna University",
    "eventTime": "9.00 am – 8.00 pm",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A platform that brings together brilliant minds to share ground-breaking ideas through captivating talks from renowned speakers."
  },
  {
    "date": "6 November, 2024",
    "eventName": "Mastering BCS 1.O",
    "eventTime": "5:00 PM",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "An event providing valuable insights and expert guidance from professionals and alumni for students aspiring to ace the BCS exam."
  },
  {
    "date": "7 October, 2024",
    "eventName": "Public Speaking Pros 2.O",
    "eventTime": "5:00 PM",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A solo public speaking competition for Khulna University students to showcase eloquence and communication skills through video and live rounds."
  },
  {
    "date": "22nd October, 2024",
    "eventName": "Higher Education & Exchange Opportunities in the US",
    "eventTime": "11.00 am – 12.00 pm",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A seminar in collaboration with the US Embassy covering application processes, visa procedures, and cultural nuances of studying in the US."
  },
  {
    "date": "8 July, 2024",
    "eventName": "Higher education abroad Episode 01: Roadmap To ICCR (India)",
    "eventTime": "9:00 PM",
    "eventVenue": "online",
    "description": "A session focused on guiding students through the process of studying in India via the ICCR scholarship program."
  },
  {
    "date": "23 June, 2024",
    "eventName": "LinkedIn Excellency 3.O",
    "eventTime": "9:00 PM",
    "eventVenue": "online",
    "description": "An interactive online session to help students build a powerful LinkedIn presence, focusing on profile optimization and networking."
  },
  {
    "date": "14 June, 2024",
    "eventName": "Higher education abroad Episode 01: Roadmap To USA",
    "eventTime": "8:30 PM",
    "eventVenue": "online",
    "description": "A virtual guide covering the U.S. education system, application steps, scholarships, and visa procedures."
  },
  {
    "date": "23 April, 2024",
    "eventName": "Design Your Future: Career Opportunity with Design Skill",
    "eventTime": "5:20 PM",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A session aimed at guiding students in exploring diverse career paths through design thinking and portfolio building."
  },
  {
    "date": "18 April, 2024",
    "eventName": "Basic slide & Poster Designing session and Competition",
    "eventTime": "9.00 PM",
    "eventVenue": "Online",
    "description": "A creative event (Creative Canvas) focused on enhancing design skills using Canva, including a competition and learning session."
  },
  {
    "date": "30 March, 2024 – 2nd April 2024",
    "eventName": "KUCC Presents “Writeopia” Intra Club Content writing Competition 2024",
    "eventTime": "5.00 PM",
    "eventVenue": "Online",
    "description": "An intra-club competition for storytellers and pen-warriors to showcase creativity and storytelling skills."
  },
  {
    "date": "23 March, 2024",
    "eventName": "KUCC General Member Recruitment",
    "eventTime": "12.00 PM",
    "eventVenue": "Offline",
    "description": "A recruitment drive for the four segments of KUCC (Governor, Language, IT, and Scholar) providing networking and development opportunities."
  },
  {
    "date": "28th February – 9th March, 2024",
    "eventName": "BYLC Career X",
    "eventTime": "9.00 am – 5.00 pm",
    "eventVenue": "URP Lecture Theatre & Online",
    "description": "A training program covering job-related topics such as leadership, CV writing, interviewing, and career planning."
  },
  {
    "date": "20 January, 2024",
    "eventName": "Mind The Hack",
    "eventTime": "12.00 PM",
    "eventVenue": "Offline",
    "description": "A social case competition where students tackle real-world social and environmental issues facing the Khulna region."
  },
  {
    "date": "12th February, 2023",
    "eventName": "BRAC BANK Career Talk at Khulna University",
    "eventTime": "02.00 pm to 04.00 pm",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "An interactive session with top-level executives sharing knowledge on the banking industry and career opportunities at BRAC BANK."
  },
  {
    "date": "28th Dec, 2023",
    "eventName": "Session on Graphics Design",
    "eventTime": "8:30 PM",
    "eventVenue": "Online",
    "description": "An informative session on the design and creative industries, featuring the results of the Visual Odyssey Poster Design Contest."
  },
  {
    "date": "19th Dec, 2023",
    "eventName": "Visual Odyssey (Poster Design Contest)",
    "eventTime": "01:00 PM",
    "eventVenue": "Online",
    "description": "A poster design competition addressing the Israel-Palestine conflict to raise awareness and showcase design expertise."
  },
  {
    "date": "4th Dec-12th Dec, 2023",
    "eventName": "KUCC INTRA CLUB CASE COMPETITION 2023 (Impactors Hunt)",
    "eventTime": "03:00 PM",
    "eventVenue": "Online",
    "description": "A signature event aimed at fostering creative problem-solving and analytical skills through real-world case studies."
  },
  {
    "date": "29th Aug, 2023",
    "eventName": "Session on Etiquettes for Formal Email Writing",
    "eventTime": "09:00 PM",
    "eventVenue": "Online",
    "description": "A virtual session via Google Meet focusing on the proper structure, tone, and etiquette for professional email communication."
  },
  {
    "date": "25th-26th Aug, 2023",
    "eventName": "Session on “Corporate Branding and Communication”",
    "eventTime": "09:00 PM",
    "eventVenue": "Online",
    "description": "A two-day online training program led by an expert in brand marketing to enhance understanding of branding and communication."
  },
  {
    "date": "20th Aug, 2023",
    "eventName": "KUCC Education Expo 1.0",
    "eventTime": "09:30 AM-6:30 PM",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A grand initiative showcasing global educational and career prospects from 18 different countries."
  },
  {
    "date": "10 June, 2023",
    "eventName": "Session on “Depression, Mental Health and Stress Management”",
    "eventTime": "3:00-5:00 PM",
    "eventVenue": "Online",
    "description": "A collaborative session with Moner School providing strategies to improve mental well-being and manage stress."
  },
  {
    "date": "26th March, 2023",
    "eventName": "Session on \"LinkedIn Excellency 2.0\"",
    "eventTime": "3:00-4:15 PM",
    "eventVenue": "Online",
    "description": "An exclusive workshop for club members on creating and optimizing LinkedIn profiles for professional visibility."
  },
  {
    "date": "10th-12th March, 2023",
    "eventName": "Public Speaking Pros",
    "eventTime": "4:00-6:30 PM",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A dynamic public speaking competition in English and Bangla categories, featuring guest debaters and speakers."
  },
  {
    "date": "12th March, 2023",
    "eventName": "Higher Education Abroad",
    "eventTime": "4:00-6:30 PM",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A workshop providing guidance on program selection, scholarships, and application processes for international studies. "
  },
  {
    "date": "24th May, 2022",
    "eventName": "Unilever Leadership Internship Programme (ULIP) Roadshow-2022",
    "eventTime": "9.00 am – 8.00 pm",
    "eventVenue": "Online",
    "description": "A roadshow for Unilever's flagship internship program, offering final-year students insights into corporate strategies and leaders."
  },
  {
    "date": "8 June, 2022",
    "eventName": "Opportunities in the United States",
    "eventTime": "03.00 pm",
    "eventVenue": "URP Lecture Theatre",
    "description": "A collaborative seminar with the US Embassy regarding academic programs, application processes, and funding options in the US. "
  },
  {
    "date": "Not specified",
    "eventName": "Get Future Ready with Grameenphone Academy",
    "eventTime": "Not specified",
    "eventVenue": "Online",
    "description": "A free upskilling platform providing courses in Career Launchpad, Cybersecurity, IoT, and Python."
  },
  {
    "date": "27th September, 2022",
    "eventName": "IELTS and Professional English",
    "eventTime": "4.30 pm",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A session led by Munzereen Shahid focusing on IELTS preparation and essential professional communication skills."
  },
  {
    "date": "4 April, 2022",
    "eventName": "Spell It Season 1",
    "eventTime": "2.00 PM",
    "eventVenue": "Offline",
    "description": "An English language contest for freshers focusing on spelling, vocabulary, pronunciation, and grammar. "
  },
  {
    "date": "27 May, 2022",
    "eventName": "Workshop on PowerPoint – Zero to Hero",
    "eventTime": "9.30 AM",
    "eventVenue": "CSE Gallery Room, 1 no. Building",
    "description": "A free workshop helping students master the basics of creating impactful PowerPoint presentations."
  },
  {
    "date": "6 August, 2022",
    "eventName": "career Talk with KU Graduates",
    "eventTime": "10 AM",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A motivational session where graduates share their journeys in government (BCS) and development sectors."
  },
  {
    "date": "26 August, 2022",
    "eventName": "Spell It Season 2",
    "eventTime": "10 AM",
    "eventVenue": "Offline",
    "description": "A spelling and language competition open to students from schools, colleges, and universities across Bangladesh."
  },
  {
    "date": "9 September, 2022",
    "eventName": "Discussion Session: Gateway to Government Job",
    "eventTime": "9:30 AM",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A guide on preparing for government positions like bank jobs and the BCS with expert DD and administrator speakers."
  },
  {
    "date": "29 September, 2022",
    "eventName": "Career Talk: Journey from KU to Big Tech Companies",
    "eventTime": "4:30 PM",
    "eventVenue": "CSE Gallery Room",
    "description": "A guide featuring speakers who secured positions at big tech firms sharing interview tips and experiences."
  },
  {
    "date": "24 June, 2021",
    "eventName": "Campus to Career",
    "eventTime": "8:00 PM",
    "eventVenue": "Online",
    "description": "An online career session regarding 21st Century employability skills and global skill development courses."
  },
  {
    "date": "13 August, 2021",
    "eventName": "European Joint Master’s with Erasmus+ Scholarship",
    "eventTime": "7:30 PM",
    "eventVenue": "Online",
    "description": "An enlightening webinar on fully funded study abroad opportunities in Europe via Erasmus+ scholarships."
  },
  {
    "date": "3rd September, 2021",
    "eventName": "Workshop On Skill Development to Cope with a New Environment",
    "eventTime": "4:00 to 5:00 PM",
    "eventVenue": "Online",
    "description": "A collaborative workshop focusing on personal potential and adapting to new professional environments."
  },
  {
    "date": "9 January, 2020",
    "eventName": "Seminar On “Higher Study Prospects in USA”",
    "eventTime": "5.00 PM",
    "eventVenue": "URP Lecture Theater",
    "description": "A session detailing the application process for Master's and PhD programs in the US with Education USA guidance."
  },
  {
    "date": "20 January, 2020",
    "eventName": "career Development Workshop",
    "eventTime": "3.00 PM",
    "eventVenue": "Journalist Liakat Ali Auditorium",
    "description": "A workshop covering resume writing, interview skills, and corporate culture to prepare students for the corporate world."
  },
  {
    "date": "21 March, 2020",
    "eventName": "“দেশকে নিকে ভাবিা”",
    "eventTime": "3.00 PM",
    "eventVenue": "Online",
    "description": "A writing initiative celebrating the birth centenary of Bangabandhu, inviting visions for Bangladesh's future."
  },
  {
    "date": "17 July, 2020",
    "eventName": "Career Pathway 01: Startup and Development Sector",
    "eventTime": "7:30 PM",
    "eventVenue": "Online",
    "description": "A session exploring the future of startup and development careers in the 'New Normal'."
  },
  {
    "date": "10 August, 2020",
    "eventName": "“বইক াোর সন্ধাকি ১.০”",
    "eventTime": "Not specified",
    "eventVenue": "Online",
    "description": "An online book reading contest honoring National Mourning Day, testing analytical and literary knowledge."
  },
  {
    "date": "8 October, 2020",
    "eventName": "Linked IN Profile Contest",
    "eventTime": "Not specified",
    "eventVenue": "Online",
    "description": "A contest and workshop promoting professional networking and well-curated LinkedIn profiles for KU students."
  },
  {
    "date": "21 November, 2020",
    "eventName": "Higher study Prospect in the USA: A Post Covid Scenario",
    "eventTime": "7:00 PM",
    "eventVenue": "Online",
    "description": "A virtual session detailing SOP writing, GRE/TOEFL preparation, and PhD planning for international education post-Covid."
  },

  ];

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const cardGradients = [
    "bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200",
    "bg-gradient-to-r from-green-200 via-lime-200 to-teal-200",
    "bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200",
    "bg-gradient-to-r from-orange-200 via-amber-200 to-red-200",
    "bg-gradient-to-r from-cyan-200 via-sky-200 to-blue-200",
  ];

  return (
    <div className="container my-8 px-4 sm:px-8 lg:px-16">
      {/* Full Background Gradient */}
      <section className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-20 mb-16 rounded-2xl">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-semibold text-white text-center animate-fadeIn">
            Events Timeline
          </h1>
          <p className="text-white/90 mt-3 text-center max-w-3xl">
            Explore the exciting events organized by KUCC, ranging from career development to leadership and more.
          </p>
        </div>
      </section>

      {/* Events Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.02, opacity: 0.9 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`rounded-2xl shadow-xl p-6 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${cardGradients[index % cardGradients.length]}`}
          >
            {/* Event Date with Icon */}
            <div className="text-xl font-bold text-white mb-4 flex items-center">
              <FaCalendarAlt className="mr-2" />
              <span className="text-black">{event.date}</span>
            </div>

            {/* Event Name */}
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-3">{event.eventName}</h2>

            {/* Event Description */}
            <p className="text-sm text-gray-800 text-center mb-4">{event.description}</p>

            {/* Event Time & Venue with Icons */}
            <div className="flex justify-between w-full text-gray-600">
              <span className="text-sm font-semibold flex items-center">
                <FaClock className="mr-2" />
                {event.eventTime}
              </span>
              <span className="text-sm flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                {event.eventVenue}
              </span>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Calendar;
