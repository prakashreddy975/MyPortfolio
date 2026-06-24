import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code,
  Database,
  Brain,
  Layers,
  Linkedin,
  Briefcase,
  FolderKanban,
} from 'lucide-react';
import { useThemeStore } from '../store/themeStore';
import { personalInfo, impactMetrics, experiences } from '../data/portfolioData';

const CompanyBadge = ({
  logo,
  company,
  isDark,
}: {
  logo?: string;
  company: string;
  isDark: boolean;
}) => {
  const [failed, setFailed] = useState(false);
  const shortName = company.split(/[\s(]+/)[0];

  if (!logo || failed) {
    return (
      <div
        className={`px-5 py-3 rounded-xl text-sm font-semibold ${
          isDark
            ? 'bg-slate-800 text-slate-300 border border-slate-700'
            : 'bg-white text-slate-600 border border-slate-200'
        }`}
      >
        {shortName}
      </div>
    );
  }

  return (
    <div
      className={`px-5 py-3 rounded-xl flex items-center justify-center h-14 ${
        isDark ? 'bg-white border border-slate-700' : 'bg-white border border-slate-200 shadow-sm'
      }`}
    >
      <img
        src={logo}
        alt={company}
        className="h-7 w-auto max-w-[100px] object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
};

const Home = () => {
  const { isDark } = useThemeStore();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

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
      title: 'Backend Engineering',
      description: 'Spring Boot, microservices, REST APIs, event-driven architecture',
      color: 'blue',
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'React, JavaScript, API design, end-to-end product delivery',
      color: 'indigo',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'LLMs, RAG, PyTorch, TensorFlow, production ML pipelines',
      color: 'purple',
    },
    {
      icon: Database,
      title: 'Data Engineering & Science',
      description: 'Kafka, SQL/NoSQL, ETL, analytics, and data visualization',
      color: 'emerald',
    },
  ];

  const colorMap: Record<string, { icon: string; ring: string }> = {
    blue: {
      icon: isDark ? 'text-blue-400' : 'text-blue-600',
      ring: isDark ? 'bg-blue-500/10' : 'bg-blue-50',
    },
    indigo: {
      icon: isDark ? 'text-indigo-400' : 'text-indigo-600',
      ring: isDark ? 'bg-indigo-500/10' : 'bg-indigo-50',
    },
    purple: {
      icon: isDark ? 'text-purple-400' : 'text-purple-600',
      ring: isDark ? 'bg-purple-500/10' : 'bg-purple-50',
    },
    emerald: {
      icon: isDark ? 'text-emerald-400' : 'text-emerald-600',
      ring: isDark ? 'bg-emerald-500/10' : 'bg-emerald-50',
    },
  };

  const heroCtaClass = `group w-full px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 border ${
    isDark
      ? 'bg-slate-800/70 border-slate-600/60 text-white hover:bg-slate-800 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/15'
      : 'bg-white/90 border-slate-200 text-slate-800 hover:border-blue-400 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10'
  }`;

  const heroCtas = [
    {
      label: 'View Projects',
      icon: FolderKanban,
      to: '/projects',
      external: false,
    },
    {
      label: 'Experience & Skills',
      icon: Briefcase,
      to: '/about',
      external: false,
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: personalInfo.linkedin,
      external: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
          isDark
            ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950'
            : 'bg-gradient-to-br from-slate-50 via-white to-blue-50'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className={`absolute inset-0 ${
              isDark
                ? 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent'
                : 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent'
            }`}
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className={`absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full ${
              isDark ? 'bg-blue-600/5' : 'bg-blue-400/10'
            } blur-3xl`}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [0, -90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className={`absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full ${
              isDark ? 'bg-purple-600/5' : 'bg-purple-400/10'
            } blur-3xl`}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
            >
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${
                  isDark
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8"
            >
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className={`w-36 h-36 rounded-full mx-auto object-cover shadow-2xl ring-4 ${
                  isDark ? 'ring-blue-500/50' : 'ring-blue-500/30'
                }`}
              />
            </motion.div>

            <h1
              ref={titleRef}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {personalInfo.name}
            </h1>

            <p
              ref={subtitleRef}
              className={`text-lg sm:text-xl md:text-2xl font-medium mb-6 bg-gradient-to-r ${
                isDark
                  ? 'from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text'
                  : 'from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text'
              }`}
            >
              {personalInfo.title}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto"
            >
              {personalInfo.openToRoles.map((role) => (
                <span
                  key={role}
                  className={`text-xs sm:text-sm px-3 py-1 rounded-full font-medium ${
                    isDark
                      ? 'bg-slate-800 text-slate-300 border border-slate-700'
                      : 'bg-white text-slate-700 border border-slate-200 shadow-sm'
                  }`}
                >
                  {role}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto w-full px-2 sm:px-0"
            >
              {heroCtas.map((cta) => {
                const Icon = cta.icon;
                const button = (
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={heroCtaClass}
                  >
                    <Icon
                      size={18}
                      className={`shrink-0 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      } group-hover:scale-110 transition-transform`}
                    />
                    <span>{cta.label}</span>
                    <ArrowRight
                      size={16}
                      className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                  </motion.button>
                );

                return cta.external ? (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    {button}
                  </a>
                ) : (
                  <Link key={cta.label} to={cta.to!} className="w-full">
                    {button}
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div
            className={`w-6 h-10 border-2 rounded-full ${
              isDark ? 'border-slate-600' : 'border-slate-400'
            } flex justify-center p-2`}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-1 h-1 rounded-full ${
                isDark ? 'bg-slate-500' : 'bg-slate-400'
              }`}
            />
          </div>
        </motion.div>
      </section>

      {/* Companies Section */}
      <section
        className={`py-14 border-y ${
          isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p
            className={`text-center text-sm font-medium uppercase tracking-wider mb-8 ${
              isDark ? 'text-slate-500' : 'text-slate-500'
            }`}
          >
            Experience at leading organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {experiences.map((exp) => (
              <CompanyBadge
                key={exp.company}
                logo={exp.logo}
                company={exp.company}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              What I Bring to the Table
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Versatile engineer across backend, full-stack, AI/ML, and data from architecture to production
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600 hover:shadow-xl hover:shadow-black/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    colorMap[feature.color].ring
                  }`}
                >
                  <feature.icon
                    className={`w-6 h-6 ${colorMap[feature.color].icon}`}
                  />
                </div>
                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
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
          isDark
            ? 'bg-gradient-to-r from-blue-950 via-indigo-950 to-purple-950'
            : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-blue-200/80 text-sm font-medium uppercase tracking-wider mb-10">
            Impact at a glance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-blue-100 text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Let's Connect
            </h2>
            <p
              className={`text-lg mb-8 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Hiring for Backend, Full-Stack, AI/ML, or Data roles ?
              <br /> I'd love to
              connect.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
