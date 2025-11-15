import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonDetail from './pages/LessonDetail';

// Components
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import Exercises from './pages/Exercises';
import Navbar from './components/Navbar';

// MathJax wrapper component to handle route changes
const MathJaxWrapper = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Retypeset MathJax whenever the route changes
    if (window.MathJax && typeof window.MathJax.typesetPromise === 'function') {
      try {
        window.MathJax.typesetPromise();
      } catch (error) {
        console.error('MathJax typesetting error:', error);
      }
    }
  }, [location]);
  
  return <>{children}</>;
};

function App() {
  useEffect(() => {
    // Only load MathJax if it's not already loaded
    if (typeof window !== 'undefined' && !window.MathJax) {
      // Approach chuẩn hơn để tải và cấu hình MathJax
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
      script.id = 'MathJax-script';
      script.async = true;
      
      // Cấu hình MathJax qua cách đúng đắn hơn sử dụng window.MathJax_config
      window.MathJax = {
        tex: {
          inlineMath: [['\\(', '\\)']],
          displayMath: [['\\[', '\\]']]
        },
        options: {
          enableMenu: false
        },
        startup: {
          pageReady: () => {
            console.log('MathJax is ready');
            return window.MathJax.startup.defaultPageReady();
          }
        }
      };
      
      document.head.appendChild(script);

      return () => {
        const script = document.getElementById('MathJax-script');
        if (script) document.head.removeChild(script);
        if (window.MathJax) {
          try {
            delete window.MathJax;
          } catch (e) {
            window.MathJax = undefined;
          }
        }
      }
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <MathJaxWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:subjectId/:lessonId" element={<LessonDetail />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </MathJaxWrapper>
    </Router>
  );
}

export default App;