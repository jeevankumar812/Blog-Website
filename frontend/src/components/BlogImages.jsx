import React from "react";

const blogImages = [
  "/blog.jpg",
  "/bi2.jpg",
  "/bi3.jpg",
  
];

const BlogImages = () => {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Featured Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {blogImages.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition">
            <img
              src={src}
              alt={`Blog ${idx + 1}`}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogImages;
