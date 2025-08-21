import { useState } from "react";

const AccordionSection = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full">
      {items.map(({ question, answer }, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <button
            onClick={() => toggleIndex(index)}
            className="w-full flex justify-between items-center text-left text-gray-900 font-semibold text-lg focus:outline-none"
          >
            <span>{question}</span>
            <span className="ml-4 text-2xl font-bold">
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          {activeIndex === index && (
            <div
              className="mt-2 whitespace-pre-line"
              style={{ color: "#f0f0f0" }} // light color for contrast against blue bg
            >
              {answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionSection;
  