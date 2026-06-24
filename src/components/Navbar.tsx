import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-black/10 border-b border-slate-800'
            : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              <span className="text-blue-500">PR</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`relative ${
                    location.pathname === link.path
                      ? isDark
                        ? 'text-blue-400'
                        : 'text-blue-600'
                      : isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  } transition-colors duration-200`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className={`absolute left-0 right-0 h-0.5 -bottom-1 ${
                        isDark ? 'bg-blue-400' : 'bg-blue-600'
                      }`}
                    />
                  )}
                </motion.span>
              </Link>
            ))}

            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                  isDark
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Hire Me
              </motion.span>
            </Link>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark
                  ? 'bg-gray-800 text-yellow-400'
                  : 'bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark
                  ? 'bg-gray-800 text-yellow-400'
                  : 'bg-gray-100 text-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isDark ? 'text-white' : 'text-gray-900'}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        className={`md:hidden overflow-hidden ${
          isDark ? 'bg-gray-900' : 'bg-white'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                whileTap={{ scale: 0.98 }}
                className={`block py-2 px-4 rounded-lg ${
                  location.pathname === link.path
                    ? isDark
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-600'
                    : isDark
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </motion.div>
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <motion.div
              whileTap={{ scale: 0.98 }}
              className={`block py-2 px-4 rounded-lg font-semibold text-center mt-2 ${
                isDark
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Hire Me
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;