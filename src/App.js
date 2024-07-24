import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sectionRefs = {
    home: useRef(null),
    WhatWeDo: useRef(null),
    Portfolio: useRef(null),
    OurClients: useRef(null)
  };

  useEffect(() => {
    if (location.pathname === '/') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.7
        }
      );

      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });

      return () => {
        Object.values(sectionRefs).forEach((ref) => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });
      };
    } else {
      setActiveSection(null);
    }
  }, [sectionRefs, location.pathname]);

  return (
    <div className='w-full'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
