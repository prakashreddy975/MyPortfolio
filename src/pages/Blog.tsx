import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../store/themeStore'; 
import { blogPosts } from '../data/portfolioData';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';

const Blog = () => {
  const { isDark } = useThemeStore();
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Technical Blog
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Insights, tutorials, and thoughts on software engineering and technology
          </p>
        </motion.div>

        {/* Tag Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedTag === null
                  ? isDark
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-600 text-white'
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Posts
            </motion.button>
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedTag === tag
                    ? isDark
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-600 text-white'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedPost(post.id)}
                className={`p-6 rounded-xl cursor-pointer ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {post.title}
                </h2>

                <div className={`flex items-center space-x-4 mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDark
                          ? 'bg-blue-900/30 text-blue-300 border border-blue-700'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className={`mt-4 flex items-center space-x-2 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  <span className="text-sm font-semibold">Read more</span>
                  <span>→</span>
                </motion.div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Blog Post Modal */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
              <motion.article
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`max-w-4xl w-full my-8 rounded-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } p-8 shadow-2xl`}
              >
                {blogPosts
                  .filter((p) => p.id === selectedPost)
                  .map((post) => (
                    <div key={post.id}>
                      <motion.button
                        whileHover={{ x: -5 }}
                        onClick={() => setSelectedPost(null)}
                        className={`flex items-center space-x-2 mb-6 ${
                          isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <ArrowLeft size={20} />
                        <span>Back to all posts</span>
                      </motion.button>

                      <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {post.title}
                      </h1>

                      <div className={`flex items-center space-x-6 mb-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        <div className="flex items-center space-x-2">
                          <Calendar size={18} />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={18} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`flex items-center space-x-1 px-4 py-2 rounded-full ${
                              isDark
                                ? 'bg-blue-900/30 text-blue-300 border border-blue-700'
                                : 'bg-blue-50 text-blue-700 border border-blue-200'
                            }`}
                          >
                            <Tag size={14} />
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>

                      <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
                        <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <div
                              className="prose prose-slate"
                              dangerouslySetInnerHTML={{ __html: post.blog_content }}
                            />
                        </p>

                      </div>
                    </div>
                  ))}
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blog;
