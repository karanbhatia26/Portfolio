import React from 'react';
import { Brain, Code, Zap, Users, User } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Research",
      description: "Multi-agent RL systems & AutoML frameworks"
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Optimized algorithms & scalable architectures"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Top 1% accuracy on ML benchmarks"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Research papers & open-source contributions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-primary to-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            <span className="text-accent-primary font-mono">$</span> about <span className="text-accent-primary font-mono">--me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg font-mono max-w-2xl mx-auto">
            Passionate about building intelligent systems that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Placeholder for profile image */}
              <div className="w-80 h-80 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center glass-morphism card-hover">
                {/* <div className="text-center">
                  <User className="h-24 w-24 text-accent-primary mx-auto mb-4" />
                  <p className="text-text-secondary font-mono text-sm">Profile Image</p>
                  <p className="text-text-secondary/60 font-mono text-xs mt-1">Coming Soon</p>
                </div> */}
                <img
                  src="./Web_Photo_Editor.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-primary rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-secondary rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-accent-tertiary rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="glass-morphism p-8 rounded-xl card-hover">
              <div className="text-accent-primary font-mono text-sm mb-6 flex items-center">
                <span className="text-text-secondary">/*</span> 
                <span className="mx-2">About Me</span> 
                <span className="text-text-secondary">*/</span>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-text-primary">
                  I'm an aspiring Machine Learning Engineer with a deep interest in{' '}
                  <span className="text-accent-primary font-semibold">reinforcement learning</span>,{' '}
                  <span className="text-accent-secondary font-semibold">multi-agent systems</span>, and{' '}
                  <span className="text-accent-tertiary font-semibold">automated machine learning (AutoML)</span>.
                </p>
                
                <p className="text-text-primary">
                  My research focuses on building intelligent, collaborative AI agents and deploying scalable ML systems. 
                  I'm currently working on a novel teacher-student MARL framework for AutoML, with a{' '}
                  <span className="text-accent-quaternary font-semibold">paper under review at JMLR</span>.
                </p>
                
                <p className="text-text-primary">
                  I love combining theory and implementation to solve real-world challenges through{' '}
                  <span className="text-accent-primary font-semibold">clean, optimized code</span>.
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="glass-morphism p-6 rounded-xl border-l-4 border-accent-primary card-hover">
              <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center">
                <Zap className="h-5 w-5 text-accent-primary mr-2" />
                Current Focus
              </h3>
              <p className="text-text-primary leading-relaxed">
                Developing novel multi-agent reinforcement learning algorithms for automated machine learning pipeline construction.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-morphism p-8 rounded-xl text-center card-hover group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Terminal-style Quote */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism p-8 rounded-xl bg-surface border border-accent-primary/30">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-text-secondary text-sm font-mono">terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center">
                <span className="text-accent-primary">karan@research</span>
                <span className="text-text-primary">:</span>
                <span className="text-accent-tertiary">~</span>
                <span className="text-text-primary ml-1">$ echo "Building the future, one algorithm at a time"</span>
              </div>
              <div className="text-text-primary ml-4">Building the future, one algorithm at a time</div>
              <div className="text-accent-primary ml-0">█</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;