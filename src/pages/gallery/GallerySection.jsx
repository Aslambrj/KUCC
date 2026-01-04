import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/assets/gallary/gallary19.jpg",
    "/assets/gallary/gallary20.jpg",
    "/assets/gallary/gallary21.jpg",
    "/assets/gallary/gallary22.jpg",
    "/assets/gallary/gallary23.jpg",
    "/assets/gallary/gallary24.jpg",
    "/assets/gallary/gallary25.jpg",
    "/assets/gallary/gallary26.jpg",
    "/assets/gallary/gallary27.jpg",
    "/assets/gallary/gallary28.jpg",
    "/assets/gallary/gallary29.jpg",
    "/assets/gallary/gallary30.jpg",
    "/assets/gallary/gallary31.jpg",
    "/assets/gallary/gallary32.jpg",
    "/assets/gallary/gallary33.jpg",
    "/assets/gallary/gallary34.jpg",
    "/assets/gallary/gallary35.jpg",
    "/assets/gallary/gallary36.jpg",
    "/assets/gallary/gallary38.jpg",
    "/assets/gallary/gallary39.jpg",
    "/assets/gallary/gallary40.jpg",
    "/assets/gallary/gallary41.jpg",
    "/assets/gallary/gallary42.jpg",
    "/assets/gallary/gallary43.jpg",
    "/assets/gallary/gallary44.jpg",
    "/assets/gallary/gallary45.jpg",
    "/assets/gallary/gallary46.jpg",
    "/assets/gallary/gallary47.jpg",
    "/assets/gallary/gallary48.jpg",
    "/assets/gallary/gallary49.jpg",
    "/assets/gallary/gallary50.jpg",
    "/assets/gallary/gallary1.jpg",
    "/assets/gallary/gallary2.jpg",
    "/assets/gallary/gallary3.jpg",
    "/assets/gallary/gallary4.jpg",
    "/assets/gallary/gallary5.jpg",
    "/assets/gallary/gallary6.jpg",
    "/assets/gallary/gallary7.jpg",
    "/assets/gallary/gallary8.jpg",
    "/assets/gallary/gallary9.jpg",
    "/assets/gallary/gallary10.jpg",
    "/assets/gallary/gallary11.jpg",
    "/assets/gallary/gallary12.jpg",
    "/assets/gallary/gallary13.jpg",
    "/assets/gallary/gallary14.jpg",
    "/assets/gallary/gallary15.jpg",
    "/assets/gallary/gallary16.jpg",
    "/assets/gallary/gallary18.jpg",
  ];

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gradient-to-tr from-[#87d6e6] to-[#063bb7] w-full h-full py-10">
      {/* Section Title */}
      <section className="flex flex-col items-center justify-center text-center mx-auto py-5 px-6 sm:px-10 md:px-20">
        <article
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide"
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        >
          A Visually Organized Collection for Easy Image Browsing
        </article>
      </section>

      {/* Gallery Container */}
      <section className="bg-gradient-to-tr from-[#2f9fa0] to-gray-200 w-11/12 mx-auto my-10 shadow-2xl rounded-2xl px-5 sm:px-10">
        <div className="w-full flex flex-col items-center pt-5">
          <h1
            className="text-center py-2 my-5 text-xl sm:text-2xl lg:text-4xl border-b border-gray-950"
            style={{ textShadow: "1px 1px 2px rgba(255, 255, 255, 0.5)" }}
          >
            Gallery
          </h1>
        </div>

        {/* Image Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10 sm:pb-20">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative w-full h-60 sm:h-72 lg:h-80 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </section>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <Card className="relative animate-scaleUp max-w-4xl">
            <CardTitle className="absolute top-3 right-3 text-white hover:scale-110 transition-transform cursor-pointer">
              <button onClick={handleCloseModal}>
                <IoIosCloseCircle size={36} />
              </button>
            </CardTitle>
            <CardContent>
              <img
                src={selectedImage}
                alt="Full View"
                className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
              />
            </CardContent>
            <CardFooter className="flex justify-center mt-4">
              <a
                href={selectedImage}
                download={`${selectedImage}.jpg`}
                className="px-5 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 hover:scale-105 transition-all duration-300"
              >
                Download
              </a>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          @keyframes scaleUp {
            from { transform: scale(0.85); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scaleUp {
            animation: scaleUp 0.35s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default GallerySection;
