import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, FileText, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const taglines = [
    "Building Intelligent Systems with Reinforcement Learning",
    "AutoML & Multi-Agent Systems Researcher",
    "Transforming Ideas into Intelligent Solutions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setIsTyping(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/karanbhatia26', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://linkedin.com/in/karan-bhatia-b4039b250', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:karanbhatia261204@gmail.com', label: 'Email', color: 'hover:text-red-400' },
    { icon: FileText, href: 'https://drive.google.com/file/d/1RZZ61wzXGipA82dPgerePvHzlCIiwWGY/view?usp=sharing', label: 'Resume', color: 'hover:text-green-400' },
    { icon: Trophy, href: 'https://leetcode.com/Karan_Bhatia', label: 'LeetCode', color: 'hover:text-yellow-400' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-surface to-primary"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {}
        <div className="animate-fade-in">
          <div className="mb-12">
            <div className="inline-block">
              <span className="text-accent-primary text-sm font-mono mb-4 block tracking-wider">$ whoami</span>
              <h1 className="text-6xl md:text-8xl font-bold text-text-primary mb-6 leading-tight">
                <span className="glow-text">Karan</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                  Bhatia
                </span>
              </h1>
            </div>
            
            <div className="text-xl md:text-2xl text-text-secondary mb-8 font-medium">
              <span className="text-accent-primary font-mono">&gt;</span> Aspiring Software Engineer | Machine Learning Enthusiast
            </div>

            {/* Dynamic Tagline */}
            <div className="h-20 flex items-center justify-center mb-8">
              <p className={`text-lg md:text-xl text-text-secondary font-mono transition-opacity duration-500 ${
                isTyping ? 'opacity-100' : 'opacity-0'
              }`}>
                <span className="text-accent-primary">&gt;</span> {taglines[currentTagline]}
                <span className="terminal-cursor"></span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glass-morphism px-8 py-4 rounded-lg transition-all duration-300 ${link.color} card-hover`}
              >
                <div className="flex items-center space-x-3">
                  <link.icon className="h-5 w-5" />
                  <span className="font-mono font-medium">{link.label}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="glass-morphism p-6 rounded-lg text-center card-hover">
              <div className="text-3xl font-bold text-accent-primary mb-2">1805</div>
              <div className="text-sm text-text-secondary font-mono">LeetCode Rating</div>
            </div>
            <div className="glass-morphism p-6 rounded-lg text-center card-hover">
              <div className="text-3xl font-bold text-accent-secondary mb-2">400+</div>
              <div className="text-sm text-text-secondary font-mono">Problems Solved</div>
            </div>
            <div className="glass-morphism p-6 rounded-lg text-center card-hover">
              <div className="text-3xl font-bold text-accent-tertiary mb-2">8.73</div>
              <div className="text-sm text-text-secondary font-mono">CGPA</div>
            </div>
            <div className="glass-morphism p-6 rounded-lg text-center card-hover">
              <div className="text-3xl font-bold text-accent-quaternary mb-2">Top 7%</div>
              <div className="text-sm text-text-secondary font-mono">Global Rank</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-accent-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;