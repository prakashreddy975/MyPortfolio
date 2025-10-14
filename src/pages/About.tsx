import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import { personalInfo, experiences, education, skills } from '../data/portfolioData';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const About = () => {
  const { isDark } = useThemeStore();

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {personalInfo.summary}
          </p>
        </motion.div>

        {/* Experience Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <Briefcase className={`w-8 h-8 mr-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Experience
            </h2>
          </motion.div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`mb-8 p-6 rounded-xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {exp.position}
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    {exp.company}
                  </p>
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p>{exp.location}</p>
                  <p>{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <GraduationCap className={`w-8 h-8 mr-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Education
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {edu.institution}
                </h3>
                <p className={`text-lg mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  {edu.degree}
                </p>
                <div className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p>{edu.location}</p>
                  <p>{edu.period}</p>
                  {edu.gpa && <p className="font-semibold mt-1">GPA: {edu.gpa}</p>}
                </div>
                {edu.courses && (
                  <div>
                    <p className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Relevant Courses:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className={`text-xs px-3 py-1 rounded-full ${
                            isDark ? 'bg-gray-700 text-gray-300' : 'bg-blue-50 text-blue-700'
                          }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-8"
          >
            <Code className={`w-8 h-8 mr-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark
                          ? 'bg-blue-900/30 text-blue-300 border border-blue-700'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
