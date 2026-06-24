import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import { blogPosts } from '../data/portfolioData';
import { Calendar, Clock, Tag, ArrowLeft, X } from 'lucide-react';

const BlogPostModal = ({
  postId,
  isDark,
  onClose,
  formatDate,
}: {
  postId: string;
  isDark: boolean;
  onClose: () => void;
  formatDate: (dateStr: string) => string;
}) => {
  const post = blogPosts.find((p) => p.id === postId);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!post) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-post-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Scrollable modal panel */}
      <div className="relative z-10 flex min-h-0 flex-1 items-start justify-center overflow-y-auto overscroll-contain p-4 sm:p-6 pt-24 pb-10">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-3xl rounded-2xl shadow-2xl ${
            isDark ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'
          }`}
        >
          {/* Sticky header */}
          <div
            className={`sticky top-0 z-10 flex items-center justify-between gap-4 rounded-t-2xl border-b px-5 py-4 sm:px-8 ${
              isDark
                ? 'border-slate-800 bg-slate-900/95 backdrop-blur-md'
                : 'border-slate-200 bg-white/95 backdrop-blur-md'
            }`}
          >
            <button
              type="button"
              onClick={onClose}
              className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ArrowLeft size={18} />
              Back to all posts
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close article"
              className={`rounded-lg p-2 transition-colors ${
                isDark
                  ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <X size={20} />
            </button>
          </div>

          {/* Article body */}
          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <h1
              id="blog-post-title"
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {post.title}
            </h1>

            <div
              className={`flex flex-wrap items-center gap-4 mb-5 text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Calendar size={16} />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full ${
                    isDark
                      ? 'bg-blue-500/10 text-blue-300 border border-blue-500/30'
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            <div
              className={`blog-content ${isDark ? 'blog-content-dark' : 'blog-content-light'}`}
              dangerouslySetInnerHTML={{ __html: post.blog_content }}
            />
          </div>
        </motion.article>
      </div>
    </motion.div>,
    document.body
  );
};

const Blog = () => {
  const { isDark } = useThemeStore();
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

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
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Technical Blog
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Insights, tutorials, and thoughts on software engineering and technology
          </p>
        </motion.div>

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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === null
                  ? 'bg-blue-600 text-white'
                  : isDark
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white'
                    : isDark
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedPost(post.id)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                <h2
                  className={`text-xl font-bold mb-3 line-clamp-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {post.title}
                </h2>

                <div
                  className={`flex items-center gap-4 mb-4 text-xs sm:text-sm ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <p
                  className={`mb-4 text-sm leading-relaxed line-clamp-3 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-0.5 rounded-full ${
                        isDark
                          ? 'bg-blue-500/10 text-blue-300 border border-blue-500/20'
                          : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-4 flex items-center gap-1 text-sm font-semibold ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  <span>Read more</span>
                  <span>→</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <BlogPostModal
            postId={selectedPost}
            isDark={isDark}
            onClose={() => setSelectedPost(null)}
            formatDate={formatDate}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
