import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const { isDark } = useThemeStore();

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer
      className={`py-14 border-t ${
        isDark
          ? 'bg-slate-950 text-slate-400 border-slate-800'
          : 'bg-slate-50 text-slate-600 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3
              className={`text-lg font-bold mb-3 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {personalInfo.name}
            </h3>
            <p className="text-sm leading-relaxed mb-4">{personalInfo.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {personalInfo.openToRoles.slice(0, 3).map((role) => (
                <span
                  key={role}
                  className={`text-xs px-2.5 py-1 rounded-full ${
                    isDark
                      ? 'bg-slate-800 text-slate-300'
                      : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-blue-500" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-500 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-blue-500" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-blue-500 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={15} className="shrink-0 text-blue-500" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-xl ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
              } transition-colors`}
              aria-label={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>

        <div
          className={`text-center text-sm pt-8 border-t ${
            isDark ? 'border-slate-800' : 'border-slate-200'
          }`}
        >
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
