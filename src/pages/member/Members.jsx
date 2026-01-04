// src/components/Members.jsx
import executives from "./executives";
import delegates from "./delegates"; // NEW
import MemberCard from "./MemberCard";

const Members = () => {
  const board2024 = executives.filter((exec) => exec.id >= 37 && exec.id <= 41);
  const board2025 = executives.filter((exec) => exec.id < 37);

  return (
    <div className="bg-gradient-to-tr from-[#87d6e6] to-[#063bb7] w-full min-h-screen py-10">
      {/* Title */}
      <section className="flex flex-col items-center justify-center text-center mx-auto py-5 px-6 sm:px-12 md:px-20">
        <article
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide"
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        >
          A dynamic group of individuals coming together to connect, learn, and grow within the club
        </article>
      </section>

      {/* 2025 — landscape */}
     <section className="bg-gradient-to-tr from-[#2563eb] via-[#3b82f6] to-[#06b6d4] w-11/12 mx-auto my-10 shadow-2xl rounded-2xl px-4 sm:px-8 py-10">
        <h1 className="text-center mb-8 text-2xl sm:text-3xl lg:text-4xl font-semibold border-b border-gray-900 pb-2">
          Executive Board Members 2025/2026
        </h1>
        <div className="grid gap-8 justify-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {board2025.map((exec) => (
            <MemberCard
              key={exec.id}
              id={exec.id}
              name={exec.name}
              image={exec.image}
              orientation="landscape"
            />
          ))}
        </div>
      </section>

      {/* NEW: Discipline Delegates — 2025 */}
      <section className="bg-gradient-to-tr from-[#2563eb] via-[#3b82f6] to-[#06b6d4] w-11/12 mx-auto my-10 shadow-2xl rounded-2xl px-4 sm:px-8 py-10">
        <h1 className="text-center mb-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-md border-b border-white/30 pb-2">
          Discipline Delegates 2025
        </h1>
        <p className="text-center text-base sm:text-lg mt-3 text-white/80 font-medium tracking-wide">
          Meet the newly appointed delegates representing each discipline for 2025
        </p>
        <div className="grid gap-8 justify-center grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mt-8">
          {delegates.map((d) => (
            <MemberCard
              key={d.id}
              id={d.id}
              name={d.name}
              image={d.image}
              subtitle={d.discipline}
              about={d.about}
              clickable={false} // keep delegates non-navigable for now
            />
          ))}
        </div>
      </section>


      {/* 2024 — portrait */}
      {board2024.length > 0 && (
        <section className="bg-gradient-to-tr from-[#a0d8f1] to-[#63b3ed] w-11/12 mx-auto my-10 shadow-2xl rounded-2xl px-4 sm:px-8 py-10">
          <h1 className="text-center mb-8 text-2xl sm:text-3xl lg:text-4xl font-semibold border-b border-gray-900 pb-2">
            Executive Board Members 2024/2025
          </h1>
          <div className="grid gap-8 justify-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            {board2024.map((exec) => (
              <MemberCard
                key={exec.id}
                id={exec.id}
                name={exec.name}
                image={exec.image}
                orientation="portrait"
              />
            ))}
          </div>
        </section>
      )}

      
    </div>
  );
};

export default Members;
