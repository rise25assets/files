import React from 'react';

const PreviousGlimpses = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80",
      year: "2023",
      description: "Research Presentations"
    },
    {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
      year: "2022",
      description: "Innovation Showcase"
    },
    {
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
      year: "2021",
      description: "Panel Discussions"
    }
  ];

  return (
    <section className="py-20 px-4 bg-indigo-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Previous Editions</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={image.url}
                alt={`RISE ${image.year}`}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">RISE {image.year}</h3>
                <p className="text-gray-300">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviousGlimpses;