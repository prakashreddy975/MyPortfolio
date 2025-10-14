import React,{ useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  const { isDark } = useThemeStore();

  useEffect(() => {
    // Apply dark mode class to the root element
    const rootElement = document.documentElement;
    if (isDark) {
      rootElement.classList.add('dark');
    } else {
      rootElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add a fallback route for undefined paths */}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;