import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      title: "Morning Ritual",
      description: "Start your day with SARIRA Fig Malt",
      image: "🌅",
      category: "Lifestyle"
    },
    {
      title: "Family Breakfast",
      description: "Bringing families together over healthy meals",
      image: "👨‍👩‍👧‍👦",
      category: "Family"
    },
    {
      title: "Natural Ingredients",
      description: "Pure figs sourced with care",
      image: "🌿",
      category: "Product"
    },
    {
      title: "Traditional Preparation",
      description: "Crafted using time-honored methods",
      image: "🏺",
      category: "Process"
    },
    {
      title: "Wellness Journey",
      description: "Your path to natural health",
      image: "🧘‍♀️",
      category: "Wellness"
    },
    {
      title: "Premium Quality",
      description: "Every jar meets our highest standards",
      image: "⭐",
      category: "Quality"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover SARIRA Fig Malt in beautiful lifestyle settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 1 ? 'lg:col-span-2' : ''}`}
            >
              <div className="aspect-square bg-gradient-to-br from-[#E38A30]/20 to-[#364A22]/20 flex items-center justify-center relative">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </span>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block bg-[#E38A30] text-xs px-2 py-1 rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#E38A30] hover:bg-[#E38A30]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;