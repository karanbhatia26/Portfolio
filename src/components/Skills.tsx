import React from 'react';
import { Code, Database, Brain, Wrench, Trophy, BookOpen } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Java", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "C", level: 80, color: "from-gray-400 to-gray-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" }
      ]
    },
    {
      title: "AI/ML Libraries",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "PyTorch", level: 92, color: "from-red-400 to-red-600" },
        { name: "Scikit-Learn", level: 88, color: "from-blue-400 to-blue-600" },
        { name: "OpenCV", level: 85, color: "from-green-400 to-green-600" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: [
        { name: "Django", level: 85, color: "from-green-400 to-green-600" },
        { name: "React", level: 80, color: "from-cyan-400 to-cyan-600" },
        { name: "OpenAI Gym", level: 88, color: "from-purple-400 to-purple-600" },
        { name: "Linux", level: 85, color: "from-gray-400 to-gray-600" }
      ]
    },
    {
      title: "Specialized Skills",
      icon: Database,
      skills: [
        { name: "Reinforcement Learning", level: 92, color: "from-cyber-blue to-cyber-purple" },
        { name: "Multi-Agent Systems", level: 90, color: "from-cyber-purple to-cyber-pink" },
        { name: "AutoML", level: 88, color: "from-cyber-green to-cyber-blue" },
        { name: "LaTeX", level: 85, color: "from-gray-400 to-gray-600" }
      ]
    }
  ];

  const achievements = [
    {
      title: "LeetCode Performance",
      stats: [
        { label: "Rating", value: "1805", color: "text-cyber-blue" },
        { label: "Problems Solved", value: "360+", color: "text-cyber-green" },
        { label: "Global Rank", value: "Top 7.36%", color: "text-cyber-purple" }
      ]
    }
  ];

  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Stanford/Deeplearning.AI",
      year: "2024",
      icon: "🧠"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford/Deeplearning.AI",
      year: "2023",
      icon: "🤖"
    },
    {
      title: "Generative AI",
      issuer: "Google DSC",
      year: "2023",
      icon: "✨"
    },
    {
      title: "Cloud Computing",
      issuer: "Google DSC",
      year: "2023",
      icon: "☁️"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyber-blue">$</span> cat <span className="text-cyber-blue">skills.json</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg font-mono">Technical expertise and proficiencies</p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-morphism p-8 rounded-lg card-hover">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-mono">{skill.name}</span>
                      <span className="text-cyber-blue font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LeetCode Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Competitive Programming */}
          <div className="glass-morphism p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Trophy className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Competitive Programming</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-blue mb-2">1805</div>
                <div className="text-gray-400 text-sm font-mono">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-green mb-2">360+</div>
                <div className="text-gray-400 text-sm font-mono">Problems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-purple mb-2">Top 7%</div>
                <div className="text-gray-400 text-sm font-mono">Global</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-dark-800 rounded-lg">
              <div className="text-sm font-mono text-gray-400 mb-2">Recent Activity:</div>
              <div className="text-cyber-blue font-mono">
                ▸ Daily Challenge: Solved<br/>
                ▸ Contest Rating: 1805 (+25)<br/>
                ▸ Streak: 7 days
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-morphism p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <BookOpen className="h-8 w-8 text-cyber-green" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
                  <span className="text-2xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{cert.title}</h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <p className="text-cyber-blue text-sm font-mono">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="glass-morphism p-6 rounded-lg bg-dark-900 border border-cyber-blue/30">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">skills.json</span>
          </div>
          <div className="font-mono text-sm">
            <span className="text-cyber-blue">karan@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-cyber-green">~</span>
            <span className="text-white">$ python -c "print('Skills mastered:', len(skills))"</span>
            <div className="text-gray-300 mt-2">Skills mastered: 16</div>
            <div className="text-cyber-blue mt-2">█</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;