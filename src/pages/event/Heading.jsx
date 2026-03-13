import React from "react";

const Heading = ({
  title = "Events Timeline",
  subtitle = "Explore the exciting events organized by KUCC, ranging from career development to leadership and more."
}) => {
  return (
    <section className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 py-20 mb-16 rounded-2xl">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <h1 className="text-xl sm:text-2xl md:text-5xl font-semibold text-white text-center animate-fadeIn">
          {title}
        </h1>
        <p className="text-white/90 mt-3 text-center max-w-3xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default Heading;
