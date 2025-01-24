import React from 'react';

const Sessions = () => {
  const sessions = [
    {
      domain: "Artificial Intelligence & Machine Learning",
      title: "Deep Learning in Healthcare",
      speaker: "Dr. Sarah Mitchell",
      abstract: "This workshop explores the transformative potential of deep learning in healthcare diagnostics. Participants will learn about recent breakthroughs in medical imaging analysis, predictive healthcare, and personalized medicine through AI-driven approaches."
    },
    {
      domain: "Cybersecurity",
      title: "Zero Trust Architecture",
      speaker: "Prof. James Chen",
      abstract: "An intensive session on implementing zero trust security models in modern enterprise environments. The workshop covers practical aspects of identity verification, network security, and continuous monitoring in the context of zero trust frameworks."
    },
    {
      domain: "Quantum Computing",
      title: "Quantum Algorithms for Optimization",
      speaker: "Dr. Elena Rodriguez",
      abstract: "Discover how quantum computing is revolutionizing optimization problems. This session delves into quantum algorithms, their applications in solving complex optimization challenges, and their potential impact on various industries."
    },
    {
      domain: "Sustainable Technology",
      title: "Green Computing Initiatives",
      speaker: "Prof. Michael Kumar",
      abstract: "Explore the intersection of technology and sustainability. Learn about energy-efficient computing, sustainable data center practices, and how technology can drive environmental conservation efforts while maintaining performance."
    }
  ];

  return (
    <section className="py-20 px-4 bg-indigo-950/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Sessions & Workshops</h2>
        
        <div className="grid gap-8">
          {sessions.map((session, index) => (
            <div 
              key={index} 
              className="bg-indigo-900/30 backdrop-blur-sm p-8 rounded-lg border border-indigo-500/30 hover:border-indigo-400/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">
                    {session.domain}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{session.title}</h3>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30">
                    <span className="text-indigo-300">Speaker: {session.speaker}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {session.abstract}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sessions;