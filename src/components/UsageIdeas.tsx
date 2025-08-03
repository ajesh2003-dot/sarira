import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UsageIdeas = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const usageIdeas = [
    {
      title: "Toast Topper",
      description: "Spread ghee or nut butter on warm toast, sprinkle 1 tsp of Fig Malt on top",
      image: "🍞",
      tip: "Slightly melts and caramelizes — kids love it!"
    },
    {
      title: "Chapati/Paratha Filling",
      description: "Add Fig Malt + chopped nuts into a folded chapati or roll",
      image: "🫓",
      tip: "A hidden energy-boosting surprise inside every bite!"
    },
    {
      title: "Postpartum Porridge",
      description: "Add Fig Malt to ragi or millet kanji for lactating moms",
      image: "🥣",
      tip: "Enhances recovery and boosts iron naturally"
    },
    {
      title: "String Hoppers Topping",
      description: "Mix Fig Malt with grated coconut, serve over warm string hoppers",
      image: "🥥",
      tip: "Traditional-style sweet breakfast"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % usageIdeas.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + usageIdeas.length) % usageIdeas.length);
  };

  return (
    <section className="py-20 bg-[#364A22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Usage Ideas
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Versatile ways to incorporate SARIRA Fig Malt into your daily routine
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {usageIdeas.map((idea, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{idea.image}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {idea.title}
              </h3>
              <p className="text-white/80 mb-3 text-sm">
                {idea.description}
              </p>
              <p className="text-[#E38A30] text-xs font-medium">
                {idea.tip}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {usageIdeas.map((idea, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 bg-white/10 backdrop-blur-sm p-8 text-center"
                >
                  <div className="text-8xl mb-6">{idea.image}</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {idea.title}
                  </h3>
                  <p className="text-white/80 mb-4">
                    {idea.description}
                  </p>
                  <p className="text-[#E38A30] font-medium">
                    {idea.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#E38A30] hover:bg-[#E38A30]/90 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#E38A30] hover:bg-[#E38A30]/90 text-white p-2 rounded-full transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {usageIdeas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-[#E38A30]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageIdeas;