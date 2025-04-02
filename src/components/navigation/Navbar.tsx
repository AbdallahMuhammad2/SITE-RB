import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, User, Book, BookOpen, FileText, 
  Newspaper, Info, Home, Trophy, GraduationCap, MessageSquare 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  subItems?: {label: string; href: string}[];
  action?: () => void;
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

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks: NavLinkProps[] = [
    { 
      href: "/#inicio", 
      label: "Início",
      icon: <Home className="h-4 w-4" />,
      action: () => scrollToSection("inicio")
    },
    { 
      href: "/#cursos", 
      label: "Quem somos",
      icon: <Info className="h-4 w-4" />,
      action: () => scrollToSection("cursos"),
      subItems: [
        { label: "Prof. Paula Barreto", href: "/prof-paula" },
        { label: "Prof. Yan Ribeiro", href: "/prof-yan" }
      ]
    },
    { 
      href: "/#metodologia", 
      label: "Metodologia",
      icon: <BookOpen className="h-4 w-4" />,
      action: () => scrollToSection("metodologia")
    },
    { 
      href: "/#cursos", 
      label: "Cursos",
      icon: <Book className="h-4 w-4" />,
      action: () => scrollToSection("cursos")
    },
    { 
      href: "/#professores", 
      label: "Professores",
      icon: <GraduationCap className="h-4 w-4" />,
      action: () => scrollToSection("professores")
    },
    { 
      href: "/#aprovados", 
      label: "Aprovados",
      icon: <Trophy className="h-4 w-4" />,
      action: () => scrollToSection("aprovados")
    },
    { 
      href: "/#depoimentos", 
      label: "Depoimentos",
      icon: <MessageSquare className="h-4 w-4" />,
      action: () => scrollToSection("depoimentos")
    },
    { 
      href: "/blog", 
      label: <span className="notranslate">Blog</span>,
      icon: <Newspaper className="h-4 w-4" /> 
    }
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

            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, i) => (
                <div key={link.href} className="relative" onMouseLeave={() => setActiveDropdown(null)}>
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                  >
                    {link.subItems ? (
                      <button 
                        className="flex items-center px-4 py-2 text-white hover:text-[#D4AF37] transition-colors text-lg font-medium"
                        onMouseEnter={() => setActiveDropdown(typeof link.label === 'string' ? link.label : 'submenu')}
                        onClick={link.action}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="h-4 w-4 ml-1" />
                      </button>
                    ) : (
                      link.href.startsWith('/') && !link.href.includes('#') ? (
                        <Link 
                          to={link.href} 
                          className="flex items-center px-4 py-2 text-white hover:text-[#D4AF37] transition-colors text-lg font-medium"
                        >
                          <span>{link.label}</span>
                        </Link>
                      ) : (
                        <button
                          onClick={link.action}
                          className="flex items-center px-4 py-2 text-white hover:text-[#D4AF37] transition-colors text-lg font-medium"
                        >
                          <span>{link.label}</span>
                        </button>
                      )
                    )}
                  </motion.div>

                  {link.subItems && (
                    <AnimatePresence>
                      {activeDropdown === (typeof link.label === 'string' ? link.label : 'submenu') && (
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
                                className="block px-4 py-2.5 text-base text-white hover:bg-[#D4AF37]/10 hover:text-[#D4AF37] transition-colors"
                                onClick={() => setActiveDropdown(null)}
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

            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="https://api.whatsapp.com/send/?phone=557774009165&text=Ol%C3%A1%21+Tenho+interesse+nos+cursos.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer" 
                className="px-5 py-2.5 rounded-lg bg-[#D4AF37] text-[#08070A] font-medium text-base hover:bg-[#F9E077] transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                Começar Agora
              </motion.a>
            </div>

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
                  <div className="font-bold text-white text-xl">Menu</div>
                  <button 
                    className="p-2 rounded-lg hover:bg-white/10 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <nav className="space-y-6">
                  {navLinks.map((link, i) => (
                    <div key={link.href} className="space-y-1">
                      {link.subItems ? (
                        <>
                          <div className="flex items-center text-[#D4AF37] mb-2">
                            {link.icon}
                            <button
                              onClick={link.action}
                              className="ml-2 text-base font-medium uppercase tracking-wider"
                            >
                              {link.label}
                            </button>
                          </div>
                          <div className="space-y-1 pl-6">
                            {link.subItems.map(item => (
                              <Link 
                                key={item.label} 
                                to={item.href} 
                                className="block py-2.5 text-white hover:text-[#D4AF37] text-base"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        link.href.startsWith('/') && !link.href.includes('#') ? (
                          <Link 
                            to={link.href} 
                            className="flex items-center py-2.5 text-white hover:text-[#D4AF37] text-base"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.icon}
                            <span className="ml-2">{link.label}</span>
                          </Link>
                        ) : (
                          <button 
                            className="flex items-center py-2.5 text-white hover:text-[#D4AF37] text-base w-full text-left"
                            onClick={link.action}
                          >
                            {link.icon}
                            <span className="ml-2">{link.label}</span>
                          </button>
                        )
                      )}
                    </div>
                  ))}
                </nav>
                
                <div className="pt-4 border-t border-white/10 space-y-4">
                  <a 
                    href="https://api.whatsapp.com/send/?phone=557774009165&text=Ol%C3%A1%21+Tenho+interesse+nos+cursos.&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 rounded-lg bg-[#D4AF37] text-[#08070A] font-medium hover:bg-[#F9E077] transition-colors text-base"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Começar Agora
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};