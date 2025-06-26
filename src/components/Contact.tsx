import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Send, MapPin, Trophy } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs.send(
      'service_qyih5tj',        // e.g., 'service_xxxxxx'
      'template_9w9sau9',       // e.g., 'template_yyyyyy'
      formData,                 // object with keys matching template variables
      'qiRvFiWJeNB2wR6Y_'         // e.g., 'YgXzZ_example'
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      alert("Failed to send message. Try again later.");
      console.error(error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "karanbhatia261204@gmail.com",
      href: "mailto:karanbhatia261204@gmail.com",
      color: "hover:text-red-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9356215190",
      href: "tel:+919356215190",
      color: "hover:text-green-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "karanbhatia26",
      href: "https://github.com/karanbhatia26",
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "karan-bhatia-b4039b250",
      href: "https://linkedin.com/in/karan-bhatia-b4039b250",
      color: "hover:text-blue-400"
    },
    {
      icon: Trophy,
      label: "LeetCode",
      value: "Karan_Bhatia",
      href: "https://leetcode.com/Karan_Bhatia",
      color: "hover:text-yellow-400"
    }
  ];

  const quickLinks = [
    { name: "Resume", href: "https://drive.google.com/file/d/1RZZ61wzXGipA82dPgerePvHzlCIiwWGY/view?usp=sharing", icon: ExternalLink },
    { name: "Research Papers", href: "https://drive.google.com/file/d/1gS6JBG3GtgbdK0zNHrWH4DwakBI4zDjO/view?usp=sharing", icon: ExternalLink },
    { name: "GitHub Profile", href: "https://github.com/karanbhatia26", icon: Github },
    { name: "LeetCode Profile", href: "https://leetcode.com/Karan_Bhatia", icon: Trophy }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-surface to-primary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
            <span className="text-accent-primary font-mono">$</span> ./contact <span className="text-accent-primary font-mono">--me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mb-6"></div>
          <p className="text-text-secondary text-lg font-mono max-w-2xl mx-auto">
            Let's build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-morphism p-8 rounded-xl card-hover">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center">
                <Mail className="h-6 w-6 text-accent-primary mr-3" />
                Get In Touch
              </h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                I'm always open to discussing research opportunities, internships, or collaborating on 
                exciting AI/ML projects. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 bg-surface hover:bg-surface-hover rounded-lg transition-all duration-200 ${info.color} group border border-border hover:border-accent-primary/50`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-text-secondary font-mono">{info.label}</div>
                      <div className="text-text-primary font-mono truncate">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-morphism p-8 rounded-xl card-hover">
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center">
                <ExternalLink className="h-5 w-5 text-accent-secondary mr-3" />
                Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-surface hover:bg-surface-hover rounded-lg transition-colors group border border-border hover:border-accent-primary/30"
                  >
                    <span className="text-text-primary font-mono">{link.name}</span>
                    <link.icon className="h-4 w-4 text-accent-primary group-hover:translate-x-1 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-morphism p-8 rounded-xl card-hover">
              <h3 className="text-2xl font-bold text-text-primary mb-8 flex items-center">
                <Send className="h-6 w-6 text-accent-primary mr-3" />
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono text-accent-primary mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors placeholder-text-secondary/50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono text-accent-primary mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors placeholder-text-secondary/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-mono text-accent-primary mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors placeholder-text-secondary/50"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-accent-primary mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary font-mono focus:border-accent-primary focus:outline-none transition-colors resize-none placeholder-text-secondary/50"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white py-4 px-6 rounded-lg font-mono font-semibold hover:from-accent-primary/80 hover:to-accent-secondary/80 transition-all duration-200 flex items-center justify-center space-x-3 group shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="glass-morphism p-8 rounded-xl border border-accent-primary/30">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-text-secondary text-sm font-mono">footer.sh</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center">
                <span className="text-accent-primary">karan@portfolio</span>
                <span className="text-text-primary">:</span>
                <span className="text-accent-tertiary">~</span>
                <span className="text-text-primary ml-1">$ echo "Ready to collaborate on the next big thing?"</span>
              </div>
              <div className="text-text-primary ml-4">Ready to collaborate on the next big thing?</div>
              <div className="text-accent-primary ml-0">█</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-text-secondary font-mono">
              © 2025 Karan Bhatia. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;