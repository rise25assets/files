import React from 'react';
import { Lightbulb, Brain, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About RISE</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/30">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <Brain size={32} className="text-blue-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Research Excellence</h3>
            <p className="text-gray-300 text-center">
              Showcasing cutting-edge research and innovation from IIIT Bangalore's prestigious labs and research centers.
            </p>
          </div>

          <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/30">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <Lightbulb size={32} className="text-yellow-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Innovation Hub</h3>
            <p className="text-gray-300 text-center">
              A platform for researchers, innovators, and entrepreneurs to showcase their groundbreaking work and ideas.
            </p>
          </div>

          <div className="bg-indigo-900/30 backdrop-blur-sm p-6 rounded-lg border border-indigo-500/30">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <Users size={32} className="text-purple-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-4">Collaborative Spirit</h3>
            <p className="text-gray-300 text-center">
              Bringing together academia, industry, and society to foster meaningful connections and partnerships.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-300">
          <p className="max-w-3xl mx-auto">
            RISE 2025 marks the seventh edition of this flagship research-based outreach event, 
            offering visitors a comprehensive view of IIIT Bangalore's evolution in research and innovation. 
            Supported by the F1 Foundation, the CSR arm of Mphasis, this event continues to bridge the gap 
            between academic research and real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;