import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const { isDark } = useThemeStore();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer
      className={`py-12 ${
        isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {personalInfo.name}
            </h3>
            <p className="text-sm">{personalInfo.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-blue-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-blue-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>{personalInfo.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-100'
              } transition-colors`}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-gray-700 pt-8">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
