import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook,  Instagram, Youtube, Mail, Phone,  ArrowRight, ChevronRight } from 'lucide-react';
import logo from '../../images/p.png';
export const Footer = () => {
  return (
    <footer className="bg-[#0A090C] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Receba Materiais Exclusivos
            </h3>
            <p className="text-white/70 mb-6">
              Inscreva-se para receber novidades, dicas de estudos e materiais gratuitos para sua preparação
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 focus:border-[#D4AF37]/50 transition-all duration-200"
                required
              />
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-[#D4AF37] to-[#F9E077] text-[#0A090C] font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Inscrever-se</span>
                <ArrowRight className="h-4 w-4" />
                
                {/* Shine effect */}
                <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
              </motion.button>
            </form>

            {/* Added privacy notice */}
            <p className="text-xs text-white/40 mt-3">
              Ao se inscrever, você concorda com nossa <Link to="/privacy" className="text-[#D4AF37]/80 hover:text-[#D4AF37] underline-offset-2 hover:underline">Política de Privacidade</Link>
            </p>
          </motion.div>
        </div>

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pt-12 border-t border-white/5">
          {/* Column 1: About */}
          <div>
            <div className="mb-5 flex items-center gap-4 w-max"> 
            <img src={logo} alt="RB Cursos" className="h-20" />            </div>
            
            <p className="text-white/70 text-sm mb-6">
              Excelência em aprovações para concursos através de metodologia exclusiva e materiais de estudo de alta qualidade.
            </p>
            
            <div className="flex gap-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={16} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:text-[#D4AF37] hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={16} />
              </motion.a>
            </div>
          </div>
          
          {/* Column 2: Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Quem somos", path: "/about" },
                { label: "Nossos cursos", path: "/courses" },
                { label: "Metodologia", path: "/methodology" },
                { label: "Professores", path: "/professors" },
                { label: "Materiais", path: "/materials" },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item.path} 
                    className="text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Cursos */}
          <div>
            <h4 className="text-white font-semibold mb-5">Cursos Finalizados</h4>
            <ul className="space-y-3">
              {[
                { label: "Concurso de Vitória da Conquista", path: "/courses/magistratura-federal" },
                { label: "Vitória da Conquista e Barra do Choça", path: "/courses/ministerio-publico" },
                { label: "Prefeitura de Caraíbas", path: "/courses/defensoria-publica" },
                { label: "SESAB", path: "/courses/procuradorias" },
                { label: "Correios", path: "/courses/carreiras-policiais" },
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item.path} 
                    className="text-white/70 hover:text-[#D4AF37] transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contato</h4>
            <ul className="space-y-4">
              
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-[#D4AF37] shrink-0" />
                <span className="text-white/70">(77)  7400-9165</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-[#D4AF37] shrink-0" />
                <span className="text-white/70">ribeiroebarretocursos@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/50 text-sm">
            © {new Date().getFullYear()} RB Cursos. Todos os direitos reservados.
          </div>
          
          <div className="flex gap-5">
            <Link to="/terms" className="text-white/50 text-sm hover:text-white/80">
              Termos de Uso
            </Link>
            <Link to="/privacy" className="text-white/50 text-sm hover:text-white/80">
              Política de Privacidade
            </Link>
            <Link to="/cookies" className="text-white/50 text-sm hover:text-white/80">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};