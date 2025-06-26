import React from 'react';
import { ExternalLink, Github, Star, GitBranch } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "EasyML – AutoML with Multi-Agent Reinforcement Learning",
      description: "A research-driven AutoML framework that uses multi-agent reinforcement learning to autonomously construct high-performing machine learning pipelines. Achieved top 1% accuracy across standard classification and regression benchmarks.",
      techStack: ["Python", "PyTorch", "OpenAI Gym", "Scikit-Learn"],
      githubUrl: "https://github.com/karanbhatia26/EasyML.git",
      featured: true,
      status: "Research Paper Under Review - JMLR"
    },
    {
      title: "Constellation Detector – Astronomy Object Detection",
      description: "A computer vision project that detects constellations in space images with over 70% accuracy across 30+ star patterns. Uses advanced image preprocessing and OpenCV-based matching techniques.",
      techStack: ["Python", "OpenCV", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/karanbhatia26/Constellation_detector.git",
      featured: false
    },
    {
      title: "TrackFit – AI-Powered Fitness App",
      description: "An intelligent fitness companion that uses optical flow and state-of-the-art segmentation models to analyze workout form and predict calories burned in real time.",
      techStack: ["Python", "React", "TensorFlow", "Computer Vision"],
      githubUrl: "https://github.com/karanbhatia26/TE_mini_project.git",
      featured: false
    },
    {
      title: "Applicant Tracking System – Smart Resume Classifier",
      description: "Developed an ATS platform that auto-classifies resumes into relevant job profiles using ML models with over 85% accuracy. Designed for recruiters to streamline hiring.",
      techStack: ["Python", "React", "PocketBase (Go)", "NLP"],
      githubUrl: "https://github.com/s-mv/50_DeezNulls_3",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyber-blue">$</span> ls <span className="text-cyber-blue">./projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg font-mono">Building intelligent systems that matter</p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-morphism p-8 rounded-lg card-hover ${
                project.featured ? 'border-2 border-cyber-blue/50 bg-gradient-to-r from-cyber-blue/5 to-cyber-purple/5' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="inline-flex items-center space-x-2 mb-2">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-yellow-400 font-mono">Featured Project</span>
                        </div>
                      )}
                      {project.status && (
                        <div className="inline-flex items-center space-x-2 mb-2">
                          <GitBranch className="h-4 w-4 text-cyber-green" />
                          <span className="text-sm text-cyber-green font-mono">{project.status}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-mono text-cyber-blue mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-sm font-mono border border-dark-600 hover:border-cyber-blue transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 lg:ml-8">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-lg transition-colors duration-200 border border-dark-600 hover:border-cyber-blue"
                  >
                    <Github className="h-5 w-5" />
                    <span className="font-mono">GitHub</span>
                  </a>
                  {/* <button className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber-blue hover:bg-cyber-blue/80 text-white rounded-lg transition-colors duration-200">
                    <ExternalLink className="h-5 w-5" />
                    <span className="font-mono">Live Demo</span>
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal-style Footer */}
        <div className="mt-16">
          <div className="glass-morphism p-6 rounded-lg bg-dark-900 border border-cyber-blue/30">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">projects.sh</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-cyber-blue">karan@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-cyber-green">~/projects</span>
              <span className="text-white">$ git status</span>
              <div className="text-gray-300 mt-2">On branch main</div>
              <div className="text-cyber-green mt-1">Your branch is up to date with 'origin/main'.</div>
              <div className="text-gray-300 mt-1">4 projects committed, 0 to go.</div>
              <div className="text-cyber-blue mt-2">█</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;