import React from 'react';
import { GraduationCap, Calendar, MapPin, Trophy, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyber-blue">$</span> cat <span className="text-cyber-blue">education.log</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg font-mono">Academic journey and learning path</p>
        </div>

        {/* Main Education Card */}
        <div className="glass-morphism p-8 rounded-lg card-hover mb-16">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Bachelor of Engineering in Computer Engineering
                  </h3>
                  <p className="text-2xl text-cyber-blue font-semibold mb-4">
                    VESIT, Mumbai
                  </p>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <div className="px-4 py-2 bg-cyber-blue/20 text-cyber-blue rounded-full font-mono text-sm">
                    2022 – Present
                  </div>
                  <div className="text-3xl font-bold text-cyber-green">
                    8.73 / 10
                  </div>
                  <div className="text-gray-400 text-sm font-mono">CGPA</div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="font-mono text-sm">Mumbai, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono text-sm">Expected Graduation: 2026</span>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 text-cyber-blue mr-2" />
                    Key Subjects
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Machine Learning & AI",
                      "Data Structures & Algorithms",
                      "Computer Vision",
                      "Deep Learning",
                      "Software Engineering",
                      "Database Management Systems"
                    ].map((subject, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-cyber-blue text-sm">▸</span>
                        <span className="text-gray-300">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Trophy className="h-5 w-5 text-cyber-purple mr-2" />
                    Academic Achievements
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Consistent 8.7+ CGPA maintenance",
                      "Research paper under review at JMLR",
                      "Multiple hackathon victories",
                      "Leadership roles in technical societies",
                      "Top performer in ML coursework",
                      "Dean's List recognition"
                    ].map((achievement, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-cyber-purple text-sm">▸</span>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-morphism p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-cyber-blue mb-2">8.6</div>
            <div className="text-gray-400 text-sm font-mono">Current CGPA</div>
          </div>
          <div className="glass-morphism p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-cyber-green mb-2">4</div>
            <div className="text-gray-400 text-sm font-mono">Years</div>
          </div>
          <div className="glass-morphism p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-cyber-purple mb-2">50+</div>
            <div className="text-gray-400 text-sm font-mono">Courses</div>
          </div>
          <div className="glass-morphism p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-cyber-pink mb-2">2026</div>
            <div className="text-gray-400 text-sm font-mono">Graduation</div>
          </div>
        </div>

        {/* Academic Focus Areas */}
        <div className="glass-morphism p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6">Research Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Reinforcement Learning</h4>
              <p className="text-gray-400 text-sm">Multi-agent systems and autonomous decision making</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AutoML</h4>
              <p className="text-gray-400 text-sm">Automated machine learning pipeline construction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyber-pink to-cyber-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👁️</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Computer Vision</h4>
              <p className="text-gray-400 text-sm">Advanced image processing and pattern recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;