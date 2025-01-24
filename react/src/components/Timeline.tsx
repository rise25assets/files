import React from 'react';

const Timeline = () => {
  const schedule = [
    {
      time: "09:00 AM",
      event: "Registration & Welcome Kit Distribution",
      description: "Check-in and collect your conference materials"
    },
    {
      time: "10:00 AM",
      event: "Inaugural Ceremony",
      description: "Opening remarks and keynote address"
    },
    {
      time: "11:00 AM",
      event: "Research Presentations",
      description: "Showcase of ongoing research projects"
    },
    {
      time: "01:00 PM",
      event: "Lunch Break & Networking",
      description: "Interactive session with researchers"
    },
    {
      time: "02:00 PM",
      event: "Innovation Showcase",
      description: "Demonstrations from various labs"
    },
    {
      time: "04:00 PM",
      event: "Panel Discussion",
      description: "Future of Research & Innovation"
    },
    {
      time: "05:30 PM",
      event: "Closing Ceremony",
      description: "Awards and acknowledgments"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Event Timeline</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-indigo-500/30"></div>

          {/* Timeline events */}
          <div className="space-y-8">
            {schedule.map((item, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="flex-1 md:w-1/2"></div>
                
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-2"></div>
                
                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/30">
                    <div className="text-indigo-400 font-semibold mb-2">{item.time}</div>
                    <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;