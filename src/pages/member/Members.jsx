import executives from "./executives";
import Member from "./Member";

const Members = () => {
  return (
    <div className="bg-gradient-to-tr from-[#87d6e6] to-[#063bb7] w-full min-h-screen py-10">
      {/* Title Section */}
      <section className="flex flex-col items-center justify-center text-center mx-auto py-5 px-6 sm:px-12 md:px-20">
        <article
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide"
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        >
          A dynamic group of individuals coming together to connect, learn, and grow within the club
        </article>
      </section>

      {/* Executive Members */}
      <section className="bg-gradient-to-tr from-[#2f9fa0] to-[#e5e7eb] w-11/12 mx-auto my-10 shadow-2xl rounded-2xl px-4 sm:px-8 py-10">
        <h1 className="text-center mb-8 text-2xl sm:text-3xl lg:text-4xl font-semibold border-b border-gray-900 pb-2">
          Executive Members
        </h1>
        <div className="grid gap-8 justify-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {executives.map((exec) => (
            <Member
              key={exec.id}
              name={exec.name}
              image={exec.image}
              about={exec.about}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Members;
