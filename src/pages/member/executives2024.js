const executives = [
  { id: 2401, name: "President", image: "/assets/executives2024/24_01.jpg", about: "Leads the club, oversees all activities, and represents the organization at events. Ensures the club’s vision and goals are met throughout the year." },

  // Four Vice Presidents
  { id: 2402, name: "General Secretary", image: "/assets/executives2024/24_02.jpg", about: "Manages communication, records, and official documentation. Ensures smooth flow of information and coordination between departments." },
  { id: 2403, name: "Vice President", image: "/assets/executives2024/24_03.jpg", about: "Supports the President in overseeing operations, assists with strategic planning, and coordinates executive meetings and activities." },
  { id: 2404, name: "Vice President", image: "/assets/executives2024/24_04.jpg", about: "Plays a key role in club leadership by assisting with decision-making and promoting club initiatives. Coordinates various team efforts." },
  { id: 2405, name: "Vice President", image: "/assets/executives2024/24_05.jpg", about: "Assists the President in managing executive teams, ensuring activities run smoothly, and supports the club’s mission throughout the year." },

  { id: 2406, name: "Treasurer", image: "/assets/executives2024/24_06.jpg", about: "Responsible for managing club finances, preparing budgets, and ensuring transparent handling of funds. Works closely with other members to ensure financial stability." },

  // Directors of segments
  { id: 2407, name: "Director of Scholar Segment", image: "/assets/executives2024/24_07.jpg", about: "Leads the scholar segment, driving initiatives to improve knowledge and academic engagement among members. Organizes learning events and programs." },
  { id: 2408, name: "Director of Language Segment", image: "/assets/executives2024/24_08.jpg", about: "Oversees the language segment, curating activities to promote language skills. Fosters an environment for cultural exchange and language development." },
  { id: 2409, name: "Director of Governor Segment", image: "/assets/executives2024/24_09.jpg", about: "Manages the governor segment, ensuring governance strategies are implemented. Works on developing leadership skills and community-driven initiatives." },
  { id: 2410, name: "Director of IT Segment", image: "/assets/executives2024/24_10.jpg", about: "Heads the IT segment, handling the technical infrastructure and digital initiatives of the club. Ensures smooth operation of all technological resources." },

  { id: 2411, name: "Joint Secretary", image: "/assets/executives2024/24_11.jpg", about: "Assists the General Secretary in handling correspondence, maintaining records, and ensuring the club's administrative work is organized." },
  { id: 2412, name: "Research & Development Secretary", image: "/assets/executives2024/24_12.jpg", about: "Leads the research and development activities of the club. Works on fostering innovation and supports ongoing projects and new initiatives." },
  { id: 2413, name: "Administrative Secretary", image: "/assets/executives2024/24_13.jpg", about: "Manages the club’s day-to-day administrative duties, ensuring smooth operation and efficient handling of internal resources." },
  { id: 2414, name: "Organizing Secretary", image: "/assets/executives2024/24_14.jpg", about: "Responsible for organizing club events, including logistical planning, venue management, and ensuring event success from start to finish." },
  { id: 2415, name: "Public Relation & Communication Secretary", image: "/assets/executives2024/24_15.jpg", about: "Handles external communications, manages media relationships, and ensures the club’s image is positively represented to the public." },
  { id: 2416, name: "Promotional Secretary", image: "/assets/executives2024/24_16.jpg", about: "Oversees promotional activities and marketing campaigns to increase club visibility. Focuses on reaching new members and enhancing club recognition." },
  { id: 2417, name: "Sports & Cultural Secretary", image: "/assets/executives2024/24_17.jpg", about: "Promotes sports, fitness, and cultural activities. Ensures members are engaged in diverse recreational and cultural programs." },

  // Senior Executives (3)
  { id: 2418, name: "Senior Executive 1", image: "/assets/executives2024/24_18.jpg", about: "Supports club leadership in strategic decision-making and project management. Provides advice and helps with the implementation of new ideas." },
  { id: 2419, name: "Senior Executive 2", image: "/assets/executives2024/24_19.jpg", about: "Assists in executing club strategies and ensures smooth coordination between different departments and teams." },
  { id: 2420, name: "Senior Executive 3", image: "/assets/executives2024/24_20.jpg", about: "Provides leadership support to the executive team, focusing on club operations and offering guidance in various projects." },

  { id: 2421, name: "Deputy Organizing Secretary", image: "/assets/executives2024/24_21.jpg", about: "Assists the organizing secretary with event planning and logistical support to ensure all events are well-managed and executed." },
  { id: 2422, name: "Deputy Administrative Secretary", image: "/assets/executives2024/24_22.jpg", about: "Supports the administrative secretary in managing internal club affairs and maintaining organization-wide procedures." },
  { id: 2423, name: "Deputy Public Relation & Communication Secretary", image: "/assets/executives2024/24_23.jpg", about: "Assists in public relations tasks and helps manage communication with external stakeholders, ensuring positive interactions." },
  { id: 2424, name: "Deputy Research Secretary", image: "/assets/executives2024/24_24.jpg", about: "Supports the research and development secretary, contributing to ongoing projects and assisting with research initiatives." },
  { id: 2425, name: "Deputy Promotional Secretary", image: "/assets/executives2024/24_25.jpg", about: "Assists with the club's promotional campaigns and supports all marketing activities to boost the club’s reach." },
  { id: 2426, name: "Deputy Director of Language Segment", image: "/assets/executives2024/24_26.jpg", about: "Supports the director of language segment in planning and executing events that foster language development." },
  { id: 2427, name: "Deputy Director of Scholar Segment", image: "/assets/executives2024/24_27.jpg", about: "Assists the scholar segment director in creating educational initiatives and organizing academic-focused events." },
  { id: 2428, name: "Deputy Director of Governor Segment", image: "/assets/executives2024/24_28.jpg", about: "Supports the governor segment in managing leadership projects and governance-related activities." },
  { id: 2429, name: "Deputy Director of IT Segment", image: "/assets/executives2024/24_29.jpg", about: "Assists the IT director with technical support and handles various digital projects within the club." },
  { id: 2430, name: "Deputy Treasurer", image: "/assets/executives2024/24_30.jpg", about: "Supports the treasurer with managing the club's financial records and assists with budgeting and financial planning." },

  // One executive of each segment (4 total)
  { id: 2431, name: "Executive of Scholar Segment", image: "/assets/executives2024/24_31.jpg", about: "Assists in the execution of scholar segment activities, including planning events and engaging members in academic activities." },
  { id: 2432, name: "Executive of Language Segment", image: "/assets/executives2024/24_32.jpg", about: "Supports the language segment director in organizing programs and events that enhance language learning." },
  { id: 2433, name: "Executive of Governor Segment", image: "/assets/executives2024/24_33.jpg", about: "Assists the governor segment in developing leadership initiatives and promoting governance activities." },
  { id: 2434, name: "Executive of IT Segment", image: "/assets/executives2024/24_34.jpg", about: "Supports the IT segment, working on tech-related projects and ensuring the club's digital systems are efficient." },

  // Two Executive Members
  { id: 2435, name: "Executive Member 1", image: "/assets/executives2024/24_35.jpg", about: "Helps with general club operations and provides support across various club initiatives and activities." },
  { id: 2436, name: "Executive Member 2", image: "/assets/executives2024/24_36.jpg", about: "Assists in the execution of club activities, supporting different departments and helping with day-to-day operations." },

  // Executive Board 2024 Members
  { id: 2437, name: "President ", image: "/assets/executives2024/24_37.jpg", about: "Leads the club for 2024, managing the team and overseeing the execution of all club activities and strategic goals." },
  { id: 2438, name: "General Secretary ", image: "/assets/executives2024/24_38.jpg", about: "Manages official communication, documentation, and records for the 2024 board. Ensures coordination and effective information flow." },
  { id: 2439, name: "Treasurer ", image: "/assets/executives2024/24_39.jpg", about: "Handles finances for the 2024 board, managing budgets, financial planning, and ensuring the transparent allocation of funds." },
  { id: 2440, name: "Vice President ", image: "/assets/executives2024/24_40.jpg", about: "Supports the President in strategic decisions, helping manage club operations and coordinate team efforts throughout the year." }
];

export default executives;