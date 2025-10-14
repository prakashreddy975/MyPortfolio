import React ,{ useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Brain, Zap } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { personalInfo } from '../data/portfolioData';

const Home = () => {
  const { isDark } = useThemeStore();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    // GSAP animations for hero section
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Backend Development',
      description: 'Spring Boot, Microservices, REST APIs',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'MySQL, Cassandra, Kafka',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'TensorFlow, PyTorch, Deep Learning',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: '30% cost reduction, 14M+ users',
    },
  ];

  const stats = [
    { value: '14M+', label: 'Users Served' },
    { value: '97.6%', label: 'API Success Rate' },
    { value: '30%', label: 'Cost Reduction' },
    { value: '2+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
          isDark ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
        }`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${
              isDark ? 'bg-blue-500/10' : 'bg-blue-300/20'
            } blur-3xl`}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            }}
            className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full ${
              isDark ? 'bg-purple-500/10' : 'bg-purple-300/20'
            } blur-3xl`}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500 shadow-2xl object-cover"
              />
            </motion.div>

            {/* Title */}
            <h1
              ref={titleRef}
              className={`text-5xl md:text-7xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {personalInfo.name}
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className={`text-xl md:text-2xl mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {personalInfo.title}
            </p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors shadow-lg"
                >
                  <span>View Projects</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-lg font-semibold border-2 transition-colors shadow-lg ${
                    isDark
                      ? 'border-gray-600 text-white hover:bg-gray-800'
                      : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className={`w-6 h-10 border-2 rounded-full ${isDark ? 'border-gray-500' : 'border-gray-400'} flex justify-center p-2`}>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl font-bold text-center mb-16 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            What I Do
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-gray-800' : 'bg-gray-50'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4"
                >
                  <feature.icon
                    className={`w-12 h-12 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  />
                </motion.div>
                <h3
                  className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className={`py-20 ${
          isDark ? 'bg-gray-800' : 'bg-gradient-to-r from-blue-600 to-purple-600'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.h3
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
