import React from 'react';
import { MapPin, Calendar, Users, Code2 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Junior Web Editor",
      company: "Computer Society of India, VESIT",
      location: "Mumbai, India",
      period: "Oct 2022 – Apr 2023",
      type: "Leadership Role",
      responsibilities: [
        "Organized workshops on JavaScript and OpenCV with more than 100 participants for upskilling peers'",
        "Maintained council website and technical infrastructure",
        "Led multiple technical events and student outreach programs",
        "Mentored junior students in web development and programming"
      ],
      skills: ["JavaScript", "OpenCV", "Leadership", "Event Management", "Web Development"]
    },
    {
      title: "Software Development Intern(Machine Learning)",
      company: "Ascentech India",
      location: "Remote|India",
      period: "May 2025 – Present",
      type: "Internship",
      responsibilities: [
        "Designed backend architecture and API middleware for a Multimodal Machine Learning pipeline.",
        "Enhanced the pipeline to support voice input processing, enabling real-time multimodal interaction",
        "Integrated SQL-based data ingestion for dynamic model training, automating data flow.",
        "Optimized model training loop, resulting in improved accuracy and computational efficiency"
      ],
      skills: ["Python", "Machine Learning", "DBMS", "SQL(Oracle)", "Software Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyber-blue">$</span> history <span className="text-cyber-blue">--work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg font-mono">Professional journey and leadership roles</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass-morphism p-8 rounded-lg card-hover">
              {}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-xl text-cyber-blue font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span className="font-mono text-sm">{exp.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>
                    <div className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm font-mono">
                      {exp.type}
                    </div>
                  </div>
                </div>
              </div>

              {}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Code2 className="h-5 w-5 text-cyber-blue mr-2" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start space-x-3">
                      <span className="text-cyber-blue mt-1 text-sm">▸</span>
                      <span className="text-gray-300 leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {}
              <div>
                <h4 className="text-sm font-mono text-cyber-blue mb-3">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm font-mono border border-dark-600 hover:border-cyber-blue transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {}
        <div className="mt-16">
          <div className="glass-morphism p-8 rounded-lg border-l-4 border-cyber-green">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-cyber-green mr-2">🎯</span>
              Looking Forward
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Actively seeking <span className="text-cyber-blue font-semibold">research opportunities</span> and{' '}
              <span className="text-cyber-purple font-semibold">exciting internships</span> in AI/ML, where I can contribute to software development,cutting-edge research in reinforcement learning and multi-agent systems while gaining hands-on experience in deploying intelligent systems at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;