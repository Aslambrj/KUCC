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
  { id: 37, name: "President", image: "/assets/executives2024/24_01.jpg", about: "Leads the club for 2024, managing the team and overseeing the execution of all club activities and strategic goals." },
  { id: 38, name: "General Secretary", image: "/assets/executives2024/24_02.jpg", about: "Manages official communication, documentation, and records for the 2024 board. Ensures coordination and effective information flow." },
  { id: 39, name: "Vice President", image: "/assets/executives2024/24_03.jpg", about: "Supports the President in overseeing operations, assisting with planning and leadership activities." },
  { id: 40, name: "Vice President", image: "/assets/executives2024/24_04.jpg", about: "Helps coordinate executive decisions and assists leadership in executing club initiatives." },
  { id: 41, name: "Treasurer", image: "/assets/executives2024/24_05.jpg", about: "Supports the President in managing club activities and ensuring smooth team coordination." },

  { id: 42, name: "Joint Secretary", image: "/assets/executives2024/24_06.jpg", about: "Handles finances, budgeting, and ensures transparent financial management for the club." },

  { id: 43, name: "Director of Language Segment", image: "/assets/executives2024/24_07.jpg", about: "Leads academic initiatives and organizes knowledge-focused programs for members." },
  { id: 44, name: "Director of Governor Segment", image: "/assets/executives2024/24_08.jpg", about: "Promotes language development through workshops, competitions, and cultural activities." },
  { id: 45, name: "Director of Scholar Segment", image: "/assets/executives2024/24_09.jpg", about: "Develops leadership and governance activities within the club." },
  { id: 46, name: "Director of IT Segment", image: "/assets/executives2024/24_10.jpg", about: "Manages digital infrastructure and technology initiatives of the club." },

  { id: 47, name: "Organizing Secretary", image: "/assets/executives2024/24_11.jpg", about: "Assists the General Secretary in maintaining records and handling official correspondence." },
  { id: 48, name: "Administrative Secretary", image: "/assets/executives2024/24_12.jpg", about: "Encourages innovation and manages research-based initiatives and projects." },
  { id: 49, name: "Promotional Secretary", image: "/assets/executives2024/24_13.jpg", about: "Oversees administrative operations and internal organizational processes." },
  { id: 50, name: "Public Relations & Communication Secretary", image: "/assets/executives2024/24_14.jpg", about: "Responsible for planning and executing events and managing logistics." },
  { id: 51, name: "Research & Development Secretary", image: "/assets/executives2024/24_15.jpg", about: "Handles public communication and maintains the club’s external relationships." },
  { id: 52, name: "Senior Executive", image: "/assets/executives2024/24_16.jpg", about: "Manages marketing campaigns and promotional activities for club programs." },
  { id: 53, name: "Senior Executive", image: "/assets/executives2024/24_17.jpg", about: "Promotes sports and cultural engagement among members." },

  { id: 54, name: "Deputy Director of Language Segment", image: "/assets/executives2024/24_18.jpg", about: "Supports leadership decisions and assists with major projects." },
  { id: 55, name: "Deputy Director of Scholar Segment", image: "/assets/executives2024/24_19.jpg", about: "Helps coordinate departments and ensures smooth execution of initiatives." },
  { id: 56, name: "Deputy Director of Scholar Segment", image: "/assets/executives2024/24_20.jpg", about: "Provides guidance and leadership support to the executive team." },

  { id: 57, name: "Deputy Director of IT Segment", image: "/assets/executives2024/24_21.jpg", about: "Supports event organization and assists with logistical planning." },
  { id: 58, name: "Deputy Director of Governor Segment", image: "/assets/executives2024/24_22.jpg", about: "Assists administrative operations and internal coordination." },
  { id: 59, name: "Deputy Director of Governor Segment", image: "/assets/executives2024/24_23.jpg", about: "Supports public relations and communication with stakeholders." },
  { id: 60, name: "Deputy Treasurer", image: "/assets/executives2024/24_24.jpg", about: "Assists with research projects and development initiatives." },
  { id: 61, name: "Deputy Organizing Secretary", image: "/assets/executives2024/24_25.jpg", about: "Supports marketing campaigns and promotional outreach." },
  { id: 62, name: "Deputy Administrative Secretary", image: "/assets/executives2024/24_26.jpg", about: "Assists the Language Segment director in organizing language-focused programs." },
  { id: 63, name: "Deputy Promotional Secretary", image: "/assets/executives2024/24_27.jpg", about: "Supports academic initiatives and scholar segment activities." },
  { id: 64, name: "Deputy Public Relations Secretary", image: "/assets/executives2024/24_28.jpg", about: "Assists governance and leadership initiatives." },
  { id: 65, name: "Deputy Research Secretary", image: "/assets/executives2024/24_29.jpg", about: "Supports IT infrastructure and technical projects." },
  { id: 66, name: "Executive of IT segment", image: "/assets/executives2024/24_30.jpg", about: "Assists in financial management and maintaining financial records." },

  { id: 67, name: "Executive of Governor Segment", image: "/assets/executives2024/24_31.jpg", about: "Supports scholar segment programs and academic activities." },
  { id: 68, name: "Executive of Scholar Segment", image: "/assets/executives2024/24_32.jpg", about: "Assists in language development initiatives and events." },
  { id: 69, name: "Executive of Language Segment", image: "/assets/executives2024/24_33.jpg", about: "Supports governance-focused programs and leadership activities." },
  { id: 70, name: "Executive of IT Segment", image: "/assets/executives2024/24_34.jpg", about: "Works on technical projects and digital support for the club." },

  { id: 71, name: "Executive Member", image: "/assets/executives2024/24_35.jpg", about: "Helps manage general club activities and operations." },
  { id: 72, name: "Executive Member", image: "/assets/executives2024/24_36.jpg", about: "Supports various departments and assists with club initiatives." },

  { id: 73, name: "Executive Member", image: "/assets/executives2024/24_37.jpg", about: "Leads the club for 2024, managing the team and overseeing all activities." },
  { id: 74, name: "Executive Member", image: "/assets/executives2024/24_38.jpg", about: "Manages official documentation and communication for the executive board." },
  { id: 75, name: "Executive Member", image: "/assets/executives2024/24_39.jpg", about: "Responsible for financial planning and managing club funds." },
  { id: 76, name: "Executive Member", image: "/assets/executives2024/24_40.jpg", about: "Supports leadership decisions and helps coordinate club operations." }
];


export default executives;
