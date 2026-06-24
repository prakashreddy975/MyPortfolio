import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import { personalInfo, experiences, education, skills } from '../data/portfolioData';
import { Briefcase, GraduationCap, Code, MapPin } from 'lucide-react';

const CompanyLogo = ({
  logo,
  company,
  isDark,
}: {
  logo?: string;
  company: string;
  isDark: boolean;
}) => {
  const [failed, setFailed] = useState(false);
  const initials = company
    .split(/[\s(]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  if (!logo || failed) {
    return (
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
          isDark
            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            : 'bg-blue-50 text-blue-700 border border-blue-200'
        }`}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={`w-14 h-14 rounded-xl flex items-center justify-center p-2 shrink-0 ${
        isDark ? 'bg-white/95 border border-slate-700' : 'bg-white border border-slate-200 shadow-sm'
      }`}
    >
      <img
        src={logo}
        alt={`${company} logo`}
        className="w-full h-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
};

const About = () => {
  const { isDark } = useThemeStore();

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm mb-6 ${
              isDark ? 'text-slate-400 bg-slate-800/60' : 'text-slate-600 bg-white border border-slate-200'
            }`}
          >
            <MapPin size={14} className="text-blue-500" />
            Based in {personalInfo.location}
          </span>
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-6 tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            About Me
          </h1>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {personalInfo.summary}
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {personalInfo.openToRoles.map((role) => (
              <span
                key={role}
                className={`text-sm px-3 py-1.5 rounded-full font-medium ${
                  isDark
                    ? 'bg-blue-500/10 text-blue-300 border border-blue-500/30'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-10"
          >
            <div
              className={`p-2.5 rounded-xl mr-3 ${
                isDark ? 'bg-blue-500/10' : 'bg-blue-50'
              }`}
            >
              <Briefcase className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Experience
              </h2>
              <p className={`text-sm mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                3+ years across backend, full-stack, AI, and data
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <div
              className={`absolute left-7 top-0 bottom-0 w-px hidden sm:block ${
                isDark ? 'bg-slate-700' : 'bg-slate-200'
              }`}
            />
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-8 pl-0 sm:pl-20`}
              >
                <div
                  className={`hidden sm:block absolute left-4 top-8 w-6 h-6 rounded-full border-4 ${
                    isDark
                      ? 'bg-slate-950 border-blue-500'
                      : 'bg-slate-50 border-blue-500'
                  }`}
                />

                <div
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                    isDark
                      ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/60'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                    <CompanyLogo logo={exp.logo} company={exp.company} isDark={isDark} />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                        <div>
                          <h3
                            className={`text-xl sm:text-2xl font-bold ${
                              isDark ? 'text-white' : 'text-slate-900'
                            }`}
                          >
                            {exp.position}
                          </h3>
                          <p
                            className={`text-base font-medium mt-0.5 ${
                              isDark ? 'text-blue-400' : 'text-blue-600'
                            }`}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <span
                          className={`inline-flex self-start text-sm font-medium px-3 py-1 rounded-full shrink-0 ${
                            isDark
                              ? 'bg-slate-800 text-slate-300'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className={`flex items-start text-sm sm:text-base leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0 ${
                            isDark ? 'bg-blue-400' : 'bg-blue-500'
                          }`}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center mb-10"
          >
            <div
              className={`p-2.5 rounded-xl mr-3 ${
                isDark ? 'bg-purple-500/10' : 'bg-purple-50'
              }`}
            >
              <GraduationCap
                className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
              />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
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
                whileHover={{ y: -4 }}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                <h3
                  className={`text-lg sm:text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {edu.institution}
                </h3>
                <p
                  className={`text-base font-medium mb-3 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {edu.degree}
                </p>
                <div
                  className={`text-sm mb-4 space-y-1 ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  <p className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    {edu.location}
                  </p>
                  <p>{edu.period}</p>
                  {edu.gpa && (
                    <p
                      className={`font-semibold ${
                        isDark ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    >
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
                {edu.courses && (
                  <div>
                    <p
                      className={`text-xs font-semibold uppercase tracking-wide mb-2 ${
                        isDark ? 'text-slate-500' : 'text-slate-500'
                      }`}
                    >
                      Relevant Courses
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2.5 py-1 rounded-full ${
                            isDark
                              ? 'bg-slate-800 text-slate-300'
                              : 'bg-slate-100 text-slate-700'
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
            className="flex items-center mb-10"
          >
            <div
              className={`p-2.5 rounded-xl mr-3 ${
                isDark ? 'bg-emerald-500/10' : 'bg-emerald-50'
              }`}
            >
              <Code className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
            </div>
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 sm:p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <h3
                  className={`text-base font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        isDark
                          ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                          : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}
                    >
                      {skill}
                    </span>
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
