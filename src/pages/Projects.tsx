import React,{ useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import { projects } from '../data/portfolioData';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const { isDark } = useThemeStore();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            Projects
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A showcase of my technical projects and contributions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
              className={`p-6 rounded-xl cursor-pointer ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.period}
                  </p>
                </div>
                <Code2 className={`w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>

              {/* Description */}
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDark
                          ? 'bg-blue-900/30 text-blue-300 border border-blue-700'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.slice(0, 3).map((highlight, i) => (
                  <li
                    key={i}
                    className={`flex items-start text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    <span className="text-blue-500 mr-2 mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex space-x-4">
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 text-sm ${
                      isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 text-sm ${
                      isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } p-8 shadow-2xl`}
              >
                {projects
                  .filter((p) => p.id === selectedProject)
                  .map((project) => (
                    <div key={project.id}>
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {project.title}
                          </h2>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {project.period}
                          </p>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className={`text-2xl ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                        >
                          ×
                        </button>
                      </div>

                      <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-4 py-2 rounded-full ${
                                isDark
                                  ? 'bg-blue-900/30 text-blue-300 border border-blue-700'
                                  : 'bg-blue-50 text-blue-700 border border-blue-200'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Key Highlights
                        </h3>
                        <ul className="space-y-3">
                          {project.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className={`flex items-start ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                            >
                              <span className="text-blue-500 mr-3 mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex space-x-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                          >
                            <Github size={20} />
                            <span>View Source</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            <ExternalLink size={20} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
