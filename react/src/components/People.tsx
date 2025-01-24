import React, { useState } from 'react';
import { Linkedin, FileText, ExternalLink, Search } from 'lucide-react';

interface Person {
  name: string;
  photo: string;
  lab: string;
  supervisor: string;
  description: string;
  links: {
    linkedin?: string;
    resume?: string;
    website?: string;
  };
}

const People = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const people: Person[] = [
    {
      name: "Ameena K Ashraf",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      lab: "Software Engineering Lab",
      supervisor: "Dr. John Smith",
      description: "My research focuses on the formal testing and verification of industrial robot programs.",
      links: {
        linkedin: "https://linkedin.com/in/ameena",
        resume: "/resumes/ameena.pdf"
      }
    },
    {
      name: "Anirban Mukherjee",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      lab: "Multimodal Perception Lab",
      supervisor: "Dr. Sarah Johnson",
      description: "Data science researcher, loves films, coffee, singing & engaging in insightful discussions.",
      links: {
        linkedin: "https://linkedin.com/in/anirban",
        website: "https://anirban.dev"
      }
    },
    {
      name: "Deepak Sharma",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      lab: "Machine Learning Lab",
      supervisor: "Dr. Emily Chen",
      description: "Working on deep learning models for computer vision and natural language processing.",
      links: {
        linkedin: "https://linkedin.com/in/deepak",
        website: "https://deepak.dev",
        resume: "/resumes/deepak.pdf"
      }
    },
    {
      name: "Kavita Patel",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
      lab: "Cybersecurity Research Center",
      supervisor: "Dr. Michael Brown",
      description: "Researching blockchain security and smart contract vulnerabilities.",
      links: {
        linkedin: "https://linkedin.com/in/kavita",
        resume: "/resumes/kavita.pdf"
      }
    },
    {
      name: "Mohammed Rahman",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
      lab: "IoT Systems Lab",
      supervisor: "Dr. Lisa Wang",
      description: "Developing secure and efficient protocols for IoT device communication.",
      links: {
        linkedin: "https://linkedin.com/in/mohammed",
        website: "https://mohammed.io"
      }
    },
    {
      name: "Priya Venkatesh",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      lab: "Data Analytics Lab",
      supervisor: "Dr. Robert Wilson",
      description: "Exploring big data analytics and machine learning for healthcare applications.",
      links: {
        linkedin: "https://linkedin.com/in/priya",
        resume: "/resumes/priya.pdf",
        website: "https://priya.tech"
      }
    },
    {
      name: "Rahul Verma",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      lab: "Quantum Computing Lab",
      supervisor: "Dr. Amanda Taylor",
      description: "Researching quantum algorithms and their applications in cryptography.",
      links: {
        linkedin: "https://linkedin.com/in/rahul",
        website: "https://rahul.quantum"
      }
    },
    {
      name: "Sarah Chen",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      lab: "Human-Computer Interaction Lab",
      supervisor: "Dr. James Peterson",
      description: "Designing and evaluating novel interaction techniques for AR/VR environments.",
      links: {
        linkedin: "https://linkedin.com/in/sarahchen",
        resume: "/resumes/sarah.pdf"
      }
    },
    {
      name: "Vikram Singh",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
      lab: "Robotics Lab",
      supervisor: "Dr. Maria Garcia",
      description: "Working on autonomous navigation systems for mobile robots.",
      links: {
        linkedin: "https://linkedin.com/in/vikram",
        website: "https://vikram.robotics"
      }
    },
    {
      name: "Zara Ahmed",
      photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80",
      lab: "Natural Language Processing Lab",
      supervisor: "Dr. David Kim",
      description: "Developing multilingual language models for low-resource languages.",
      links: {
        linkedin: "https://linkedin.com/in/zara",
        resume: "/resumes/zara.pdf",
        website: "https://zara.ai"
      }
    }
  ].sort((a, b) => a.name.localeCompare(b.name));

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.lab.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-indigo-950 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our People</h2>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or lab..."
              className="w-full pl-10 pr-4 py-3 bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPeople.map((person, index) => (
            <div
              key={index}
              className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-lg overflow-hidden hover:border-indigo-400/50 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-indigo-400 text-sm mb-1">{person.lab}</p>
                <p className="text-gray-400 text-sm mb-4">Supervisor: {person.supervisor}</p>
                <p className="text-gray-300 mb-6">{person.description}</p>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  {person.links.linkedin && (
                    <a
                      href={person.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {person.links.resume && (
                    <a
                      href={person.links.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <FileText size={20} />
                    </a>
                  )}
                  {person.links.website && (
                    <a
                      href={person.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default People;