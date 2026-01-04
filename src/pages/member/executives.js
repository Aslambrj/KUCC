const executives = [
  { id: 1, name: "President", image: "/assets/executives/president.jpg", about: "Leads the club, oversees all activities, and represents the organization at events. Ensures the club’s vision and goals are met throughout the year." },

  // Four Vice Presidents
  { id: 2, name: "General Secretary", image: "/assets/executives/gs.jpg", about: "Manages communication, records, and official documentation. Ensures smooth flow of information and coordination between departments." },
  { id: 3, name: "Vice President", image: "/assets/executives/vp3.jpg", about: "Supports the President in overseeing operations, assists with strategic planning, and coordinates executive meetings and activities." },
  { id: 4, name: "Vice President", image: "/assets/executives/vp1.jpg", about: "Plays a key role in club leadership by assisting with decision-making and promoting club initiatives. Coordinates various team efforts." },
  { id: 5, name: "Vice President", image: "/assets/executives/vp2.jpg", about: "Assists the President in managing executive teams, ensuring activities run smoothly, and supports the club’s mission throughout the year." },

  { id: 6, name: "Treasurer", image: "/assets/executives/treasurer.jpg", about: "Responsible for managing club finances, preparing budgets, and ensuring transparent handling of funds. Works closely with other members to ensure financial stability." },

  // Directors of segments
  { id: 7, name: "Director of Scholar Segment", image: "/assets/executives/director_scholar.jpg", about: "Leads the scholar segment, driving initiatives to improve knowledge and academic engagement among members. Organizes learning events and programs." },
  { id: 8, name: "Director of Language Segment", image: "/assets/executives/director_language.jpg", about: "Oversees the language segment, curating activities to promote language skills. Fosters an environment for cultural exchange and language development." },
  { id: 9, name: "Director of Governor Segment", image: "/assets/executives/director_governor.jpg", about: "Manages the governor segment, ensuring governance strategies are implemented. Works on developing leadership skills and community-driven initiatives." },
  { id: 10, name: "Director of IT Segment", image: "/assets/executives/director_it.jpg", about: "Heads the IT segment, handling the technical infrastructure and digital initiatives of the club. Ensures smooth operation of all technological resources." },

  { id: 11, name: "Joint Secretary", image: "/assets/executives/joint_secretary.jpg", about: "Assists the General Secretary in handling correspondence, maintaining records, and ensuring the club's administrative work is organized." },
  { id: 12, name: "Research & Development Secretary", image: "/assets/executives/research_development.jpg", about: "Leads the research and development activities of the club. Works on fostering innovation and supports ongoing projects and new initiatives." },
  { id: 13, name: "Administrative Secretary", image: "/assets/executives/administrative_secretary.jpg", about: "Manages the club’s day-to-day administrative duties, ensuring smooth operation and efficient handling of internal resources." },
  { id: 14, name: "Organizing Secretary", image: "/assets/executives/organizing_secretary.jpg", about: "Responsible for organizing club events, including logistical planning, venue management, and ensuring event success from start to finish." },
  { id: 15, name: "Public Relation & Communication Secretary", image: "/assets/executives/public_relation.jpg", about: "Handles external communications, manages media relationships, and ensures the club’s image is positively represented to the public." },
  { id: 16, name: "Promotional Secretary", image: "/assets/executives/promotional_secretary.jpg", about: "Oversees promotional activities and marketing campaigns to increase club visibility. Focuses on reaching new members and enhancing club recognition." },
  { id: 17, name: "Sports & Cultural Secretary", image: "/assets/executives/sports_cultural.jpg", about: "Promotes sports, fitness, and cultural activities. Ensures members are engaged in diverse recreational and cultural programs." },

  // Senior Executives (3)
  { id: 18, name: "Senior Executive 1", image: "/assets/executives/senior_executive1.jpg", about: "Supports club leadership in strategic decision-making and project management. Provides advice and helps with the implementation of new ideas." },
  { id: 19, name: "Senior Executive 2", image: "/assets/executives/senior_executive2.jpg", about: "Assists in executing club strategies and ensures smooth coordination between different departments and teams." },
  { id: 20, name: "Senior Executive 3", image: "/assets/executives/senior_executive3.jpg", about: "Provides leadership support to the executive team, focusing on club operations and offering guidance in various projects." },

  { id: 21, name: "Deputy Organizing Secretary", image: "/assets/executives/deputy_organizing_secretary.jpg", about: "Assists the organizing secretary with event planning and logistical support to ensure all events are well-managed and executed." },
  { id: 22, name: "Deputy Administrative Secretary", image: "/assets/executives/deputy_administrative_secretary.jpg", about: "Supports the administrative secretary in managing internal club affairs and maintaining organization-wide procedures." },
  { id: 23, name: "Deputy Public Relation & Communication Secretary", image: "/assets/executives/deputy_public_relation.jpg", about: "Assists in public relations tasks and helps manage communication with external stakeholders, ensuring positive interactions." },
  { id: 24, name: "Deputy Research Secretary", image: "/assets/executives/deputy_research_secretary.jpg", about: "Supports the research and development secretary, contributing to ongoing projects and assisting with research initiatives." },
  { id: 25, name: "Deputy Promotional Secretary", image: "/assets/executives/deputy_promotional_secretary.jpg", about: "Assists with the club's promotional campaigns and supports all marketing activities to boost the club’s reach." },
  { id: 26, name: "Deputy Director of Language Segment", image: "/assets/executives/deputy_director_language.jpg", about: "Supports the director of language segment in planning and executing events that foster language development." },
  { id: 27, name: "Deputy Director of Scholar Segment", image: "/assets/executives/deputy_director_scholar.jpg", about: "Assists the scholar segment director in creating educational initiatives and organizing academic-focused events." },
  { id: 28, name: "Deputy Director of Governor Segment", image: "/assets/executives/deputy_director_governor.jpg", about: "Supports the governor segment in managing leadership projects and governance-related activities." },
  { id: 29, name: "Deputy Director of IT Segment", image: "/assets/executives/deputy_director_it.jpg", about: "Assists the IT director with technical support and handles various digital projects within the club." },
  { id: 30, name: "Deputy Treasurer", image: "/assets/executives/deputy_treasurer.jpg", about: "Supports the treasurer with managing the club's financial records and assists with budgeting and financial planning." },

  // One executive of each segment (4 total)
  { id: 31, name: "Executive of Scholar Segment", image: "/assets/executives/executive_scholar.jpg", about: "Assists in the execution of scholar segment activities, including planning events and engaging members in academic activities." },
  { id: 32, name: "Executive of Language Segment", image: "/assets/executives/executive_language.jpg", about: "Supports the language segment director in organizing programs and events that enhance language learning." },
  { id: 33, name: "Executive of Governor Segment", image: "/assets/executives/executive_governor.jpg", about: "Assists the governor segment in developing leadership initiatives and promoting governance activities." },
  { id: 34, name: "Executive of IT Segment", image: "/assets/executives/executive_it.jpg", about: "Supports the IT segment, working on tech-related projects and ensuring the club's digital systems are efficient." },

  // Two Executive Members
  { id: 35, name: "Executive Member 1", image: "/assets/executives/executive_member1.jpg", about: "Helps with general club operations and provides support across various club initiatives and activities." },
  { id: 36, name: "Executive Member 2", image: "/assets/executives/executive_member2.jpg", about: "Assists in the execution of club activities, supporting different departments and helping with day-to-day operations." },

  // Executive Board 2024 Members
{ id: 37, name: "President ", image: "/assets/executives2024/president_2024.jpg", about: "Leads the club for 2024, managing the team and overseeing the execution of all club activities and strategic goals." },
  { id: 38, name: "General Secretary ", image: "/assets/executives2024/gs_2024.jpg", about: "Manages official communication, documentation, and records for the 2024 board. Ensures coordination and effective information flow." },
  { id: 39, name: "Treasurer ", image: "/assets/executives2024/treasurer_2024.jpg", about: "Handles finances for the 2024 board, managing budgets, financial planning, and ensuring the transparent allocation of funds." },
  { id: 40, name: "Vice President ", image: "/assets/executives2024/vp1_2024.jpg", about: "Supports the President in strategic decisions, helping manage club operations and coordinate team efforts throughout the year." },
  { id: 41, name: "Vice President ", image: "/assets/executives2024/vp2_2024.jpg", about: "Supports the President in managing club activities, ensuring smooth coordination of meetings, and executing the club’s vision for 2024." }
];

export default executives;
