import React from 'react';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Runner-Up – Medino's X",
      event: "Advitiya 2025 (IIT Ropar)",
      position: "🥈 2nd Place",
      icon: Medal,
      color: "from-gray-400 to-gray-600",
      description: "Secured runner-up position in prestigious AI/ML competition"
    },
    {
      title: "2nd Runner-Up – Awakening the Scientist",
      event: "Science Competition 2023",
      position: "🥉 3rd Place",
      icon: Award,
      color: "from-amber-400 to-amber-600",
      description: "Recognized for innovative research presentation"
    },
    {
      title: "Special Mention – Hack-AI-Thon",
      event: "AI Hackathon 2024",
      position: "🏅 Special Recognition",
      icon: Star,
      color: "from-purple-400 to-purple-600",
      description: "Outstanding innovation in AI/ML solutions"
    },
    {
      title: "LeetCode Rating",
      event: "Competitive Programming",
      position: "💻 Top 7.36%",
      icon: Trophy,
      color: "from-cyber-blue to-cyber-purple",
      description: "Rating: 1805 | 400+ problems solved"
    }
  ];

  const stats = [
    { label: "Competitions Won", value: "3+", color: "text-cyber-blue" },
    { label: "LeetCode Rank", value: "Top 7%", color: "text-cyber-green" },
    { label: "Research Papers", value: "1", color: "text-cyber-purple" },
    { label: "Certifications", value: "4", color: "text-cyber-pink" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyber-blue">$</span> ls <span className="text-cyber-blue">achievements/</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg font-mono">Recognition and competitive accomplishments</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-morphism p-6 rounded-lg text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="glass-morphism p-8 rounded-lg card-hover group">
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl">{achievement.position}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-cyber-blue font-semibold mb-2">{achievement.event}</p>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-morphism p-8 rounded-lg border-l-4 border-cyber-purple mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyber-purple to-cyber-pink rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Research Publication</h3>
              <p className="text-cyber-purple font-semibold">Under Review - JMLR</p>
            </div>
          </div>
          
          <div className="bg-dark-800 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-2">
              "EasyML: Multi-Agent Reinforcement Learning for Automated Machine Learning"
            </h4>
            <p className="text-gray-300 mb-4">
              A novel teacher-student MARL framework for AutoML that achieves top 1% accuracy across 
              standard benchmarks. Currently under review at the Journal of Machine Learning Research.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-cyber-blue font-mono">Status: Under Review</span>
              <span className="text-cyber-green font-mono">Category: Original Research</span>
            </div>
          </div>
        </div>

        <div className="glass-morphism p-6 rounded-lg bg-dark-900 border border-cyber-blue/30">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">achievements.log</span>
          </div>
          <div className="font-mono text-sm">
            <span className="text-cyber-blue">karan@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-cyber-green">~/achievements</span>
            <span className="text-white">$ tail -f achievements.log</span>
            <div className="text-gray-300 mt-2">[2025-01-20] 🥈 Medino's X Runner-Up</div>
            <div className="text-gray-300">[2024-12-15] 📝 Paper submitted to JMLR</div>
            <div className="text-gray-300">[2024-11-30] 🏅 Hack-AI-Thon Special Mention</div>
            <div className="text-cyber-green">[2024-11-25] 💻 LeetCode Rating: 1805</div>
            <div className="text-cyber-blue mt-2">█</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;