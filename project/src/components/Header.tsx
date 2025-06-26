import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Github, Linkedin, Mail, FileText, Trophy, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/karanbhatia26', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/karan-bhatia-b4039b250', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:karanbhatia261204@gmail.com', label: 'Email' },
    { icon: FileText, href: '#', label: 'Resume' },
    { icon: Trophy, href: 'https://leetcode.com/Karan_Bhatia', label: 'LeetCode' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Code className="h-8 w-8 text-accent-primary" />
            <span className="text-xl font-bold text-text-primary">Karan Bhatia</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'projects', 'experience', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-text-secondary hover:text-accent-primary transition-colors duration-200 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface hover:bg-surface-hover transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-accent-primary" />
              ) : (
                <Moon className="h-5 w-5 text-accent-primary" />
              )}
            </button>
            
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-primary transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-morphism rounded-lg p-6 mt-2 mx-4">
            <nav className="flex flex-col space-y-4 mb-6">
              {['about', 'projects', 'experience', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 capitalize text-left font-medium"
                >
                  {item}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-surface hover:bg-surface-hover transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-accent-primary" />
                ) : (
                  <Moon className="h-5 w-5 text-accent-primary" />
                )}
              </button>
              
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;