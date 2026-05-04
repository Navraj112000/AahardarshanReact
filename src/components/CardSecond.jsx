import React from "react";

const sampleCards = [
  {
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/49a37553a2c3c8e611ffac1eabe4686f77dee549.jpg",
    heading: "Thyroid Health",
    points: [
      "Iodine-rich seafood daily",
      "Selenium from Brazil nuts",
      "Anti-inflammatory spices",
      "Balanced hormone support",
    ],
  },
  {
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d7fce39bb976d9fc3da20d528ff57823fe2a6960.jpg",
    heading: "PCOS Balance",
    points: [
      "Low-GI complex carbs",
      "Healthy fat avocados",
      "Anti-androgen spearmint tea",
      "Fiber-rich vegetables",
    ],
  },
  {
    image:
      "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/d7fce39bb976d9fc3da20d528ff57823fe2a6960.jpg",
    heading: "PCOS Balance",
    points: [
      "Low-GI complex carbs",
      "Healthy fat avocados",
      "Anti-androgen spearmint tea",
      "Fiber-rich vegetables",
    ],
  },
];
const CardSecond = ({}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {sampleCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Full-width image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.heading}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {card.heading}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {card.points.map((point, i) => (
                    <li className="text-left">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 inline-block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSecond;
