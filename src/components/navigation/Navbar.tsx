import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, User, Book, FileText, Newspaper, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  subItems?: {label: string; href: string}[];
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLinkProps[] = [
    { 
      href: "/sobre", 
      label: "Quem somos nós",
      icon: <Info className="h-4 w-4" />,
      subItems: [
        { label: "Prof. Paula Barreto", href: "/professores/paula" },
        { label: "Prof. Yan Ribeiro", href: "/professores/yan" }
      ]
    },
    { 
      href: "/noticias", 
      label: "Notícias",
      icon: <Newspaper className="h-4 w-4" /> 
    },
    { 
      href: "/cursos", 
      label: "Cursos",
      icon: <Book className="h-4 w-4" />,
      subItems: [
        { label: "Português e Redação", href: "/cursos/portugues" },
        { label: "Matemática e RLM", href: "/cursos/matematica" }
      ]
    },
    { 
      href: "/materiais", 
      label: "Materiais de estudo",
      icon: <FileText className="h-4 w-4" /> 
    },
  ];
  
  return (
    <>
      <motion.header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#08070A]/90 backdrop-blur-lg shadow-md shadow-black/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/" className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center text-[#08070A] font-bold text-xl mr-2">
                  RB
                </div>
                <span className="text-white font-bold text-xl hidden sm:block">
                  RB <span className="text-[#D4AF37]">Cursos</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, i) => (
                <div key={link.label} className="relative" onMouseLeave={() => setActiveDropdown(null)}>
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    {link.subItems ? (
                      <button 
                        className="flex items-center px-4 py-2 text-white hover:text-[#D4AF37] transition-colors"
                        onMouseEnter={() => setActiveDropdown(link.label)}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>
                    ) : (
                      <Link 
                        to={link.href} 
                        className="flex items-center px-4 py-2 text-white hover:text-[#D4AF37] transition-colors"
                      >
                        <span>{link.label}</span>
                      </Link>
                    )}
                  </motion.div>

                  {/* Dropdown Menu */}
                  {link.subItems && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div 
                          className="absolute left-0 mt-1 w-56 rounded-md bg-[#0F0E13] shadow-lg shadow-black/40 border border-white/10 overflow-hidden z-20"
                          initial={{ opacity: 0, y: -5, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, y: -5, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="py-1">
                            {link.subItems.map(item => (
                              <Link 
                                key={item.label} 
                                to={item.href} 
                                className="block px-4 py-2.5 text-sm text-white hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Auth buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                className="text-white hover:text-[#D4AF37] font-medium flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
              </motion.button>
              
              <motion.button 
                className="px-4 py-2 rounded-lg bg-[#D4AF37] text-[#08070A] font-medium text-sm hover:bg-[#F9E077] transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                Começar Agora
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div 
              className="fixed top-0 right-0 bottom-0 w-64 bg-[#0A090C] shadow-xl z-50 border-l border-white/10"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="p-5 space-y-8">
                <div className="flex justify-between items-center">
                  <div className="font-bold text-white text-lg">Menu</div>
                  <button 
                    className="p-2 rounded-lg hover:bg-white/10 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <nav className="space-y-6">
                  {navLinks.map((link, i) => (
                    <div key={link.label} className="space-y-1">
                      {link.subItems ? (
                        <>
                          <div className="flex items-center text-[#D4AF37] mb-2">
                            {link.icon}
                            <span className="ml-2 text-sm font-medium uppercase tracking-wider">{link.label}</span>
                          </div>
                          <div className="space-y-1 pl-6">
                            {link.subItems.map(item => (
                              <Link 
                                key={item.label} 
                                to={item.href} 
                                className="block py-2 text-white hover:text-[#D4AF37] text-sm"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link 
                          to={link.href} 
                          className="flex items-center py-2 text-white hover:text-[#D4AF37]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.icon}
                          <span className="ml-2">{link.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
                
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <button className="w-full py-3 text-white hover:text-[#D4AF37] font-medium flex items-center justify-center gap-2">
                    <User className="h-5 w-5" />
                    <span>Entrar</span>
                  </button>
                  
                  <button className="w-full py-3 rounded-lg bg-[#D4AF37] text-[#08070A] font-medium hover:bg-[#F9E077] transition-colors">
                    Começar Agora
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};