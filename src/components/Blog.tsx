import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Ancient Wisdom of Figs in Tamil Medicine",
      excerpt: "Discover how figs have been used in Siddha medicine for centuries to promote wellness and vitality in Tamil households.",
      image: "🌿",
      author: "Dr. Priya Sharma",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Traditional Medicine"
    },
    {
      title: "Postpartum Nutrition: The Role of Fig Malt",
      excerpt: "Learn how traditional Tamil mothers have used fig-based preparations to support recovery and lactation after childbirth.",
      image: "👶",
      author: "Nutritionist Kavitha",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Maternal Health"
    },
    {
      title: "Natural Fertility Boosters in Tamil Culture",
      excerpt: "Explore the time-tested natural ingredients that Tamil families have relied on for generations to support reproductive health.",
      image: "🌸",
      author: "Ayurveda Expert Ravi",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Wellness"
    },
    {
      title: "From Temple Rituals to Modern Kitchens",
      excerpt: "The journey of figs from sacred temple offerings to everyday wellness solutions in contemporary Tamil homes.",
      image: "🏛️",
      author: "Cultural Historian Meera",
      date: "December 28, 2024",
      readTime: "8 min read",
      category: "Culture"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#364A22] mb-4">
            Wellness Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights into Tamil wellness traditions, nutrition tips, and the science behind natural health
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Featured Image */}
              <div className="h-48 bg-gradient-to-br from-[#E38A30]/20 to-[#364A22]/20 flex items-center justify-center relative">
                <span className="text-6xl">{post.image}</span>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E38A30] text-white text-xs px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#364A22] mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Button */}
                <button className="group w-full bg-[#364A22] hover:bg-[#364A22]/90 text-white py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className="bg-[#E38A30] hover:bg-[#E38A30]/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View All Blog Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;