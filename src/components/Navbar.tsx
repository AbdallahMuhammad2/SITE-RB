import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = clsx(
    'fixed w-full z-50 transition-all duration-500',
    isScrolled ? 'glass-effect' : 'bg-transparent'
  );

  const linkClasses = clsx(
    'relative px-6 py-2 transition-all duration-300 hover-gold rounded-full',
    isScrolled ? 'text-gold-400 hover:text-gold-300' : 'text-white hover:text-gold-300'
  );

  const activeLinkClasses = clsx(
    'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5',
    isScrolled ? 'after:bg-gold-500' : 'after:bg-gold-400'
  );

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <GraduationCap className={clsx('h-10 w-10', isScrolled ? 'text-gold-500' : 'text-gold-400')} />
              <span className={clsx('text-2xl font-bold gold-gradient')}>
                Elite Concursos
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-8"
            >
              <Link
                to="/"
                className={clsx(linkClasses, location.pathname === '/' && activeLinkClasses)}
              >
                Home
              </Link>
              <Link
                to="/prof-paula"
                className={clsx(linkClasses, location.pathname === '/prof-paula' && activeLinkClasses)}
              >
                Química - Profa. Paula
              </Link>
              <Link
                to="/prof-yan"
                className={clsx(linkClasses, location.pathname === '/prof-yan' && activeLinkClasses)}
              >
                Matemática - Prof. Yan
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  'px-8 py-3 rounded-full font-semibold transition-all duration-300',
                  isScrolled
                    ? 'bg-gold-500 text-luxury-900 hover:bg-gold-400'
                    : 'bg-gold-400 text-luxury-900 hover:bg-gold-500'
                )}
              >
                Matricule-se
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx('p-2 rounded-lg transition-colors', 
                isScrolled ? 'text-gold-400 hover:text-gold-300' : 'text-white hover:text-gold-300'
              )}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className={clsx(
                'space-y-4 pb-6',
                isScrolled ? 'text-gold-400' : 'text-white'
              )}>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gold-500/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/prof-paula"
                  className="block px-4 py-2 hover:bg-gold-500/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Química - Profa. Paula
                </Link>
                <Link
                  to="/prof-yan"
                  className="block px-4 py-2 hover:bg-gold-500/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Matemática - Prof. Yan
                </Link>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-3 bg-gold-500 text-luxury-900 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
                >
                  Matricule-se
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar