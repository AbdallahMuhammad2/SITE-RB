import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Check, Sparkles, Award, GraduationCap, } from 'lucide-react';

export const CTASection = () => {


  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-[#0F0E13] to-[#080608]">
      {/* Premium background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>

        {/* Animated gold particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#D4AF37]"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4
              }}
              animate={{
                y: [0, -(20 + Math.random() * 30)],
                opacity: [0, Math.random() * 0.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Luxury diagonal lines */}
        <div className="absolute top-0 right-0 left-0 h-full overflow-hidden opacity-[0.04]">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] w-[200%] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
              style={{
                top: `${i * 20}%`,
                left: '-50%',
                transform: 'rotate(35deg)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 * i }}
            />
          ))}
        </div>

        {/* Premium glow effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full opacity-[0.07] blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.7) 0%, rgba(212,175,55,0.1) 70%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.07, 0.1, 0.07],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="rounded-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium card background with animated border */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#151318] to-[#0A090C] rounded-2xl"></div>

              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-40"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.3)",
                }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-[80px]" />

            {/* Decorative circles */}
            <motion.div
              className="absolute top-12 right-12 w-32 h-32 rounded-full border border-[#D4AF37]/10 opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute bottom-12 left-12 w-20 h-20 rounded-full border border-[#D4AF37]/10 opacity-30"
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, -10, 0],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Ultra-Premium Content */}
            <div className="relative z-10 p-12 md:p-16">
              {/* Premium header badge */}
              <motion.div
                className="flex items-center justify-center mb-10"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="px-5 py-2 bg-[#D4AF37]/10 backdrop-blur-sm rounded-full border border-[#D4AF37]/20 inline-flex items-center">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F9E077] flex items-center justify-center mr-3"
                    animate={{ scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <GraduationCap className="w-4 h-4 text-[#080608]" />
                  </motion.div>
                  <span className="text-sm font-medium bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                    TRANSFORME SUA VIDA
                  </span>
                </div>
              </motion.div>

              {/* Premium headline */}
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Comece sua jornada para{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
                    aprovação
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-[6px] bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/30 to-[#D4AF37]/0 blur-sm"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </span>
              </motion.h2>

              {/* Enhanced description */}
              <motion.p
                className="text-xl text-white/70 text-center max-w-2xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Junte-se a <span className="text-white font-medium">milhares de alunos</span> que
                transformaram suas vidas através da nossa metodologia exclusiva de estudos.
              </motion.p>

              {/* Premium features highlight */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {["Aulas ao vivo", "Materiais exclusivos", "Suporte individualizado"].map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/5 backdrop-blur-sm border border-[#D4AF37]/10 rounded-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + (i * 0.1) }}
                  >
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#D4AF37]" />
                    </div>
                    <span className="text-sm text-white">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* NOVA SEÇÃO: Cases de Sucesso */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {/* Cases Header */}
                <div className="flex items-center justify-center mb-6 gap-2">
                  <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/70"></div>
                  <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider">Conquiste sua aprovação</span>
                  <div className="h-[1px] w-10 bg-gradient-to-r from-[#D4AF37]/70 to-transparent"></div>
                </div>



              </motion.div>

              {/* Premium CTA buttons */}
              {/* Premium CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {/* Primary CTA - Agora como link para WhatsApp */}
                <motion.a
                  href="https://api.whatsapp.com/send/?phone=557774009165&text=Ol%C3%A1%21+Tenho+interesse+nos+cursos.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden px-10 py-5 rounded-xl cursor-pointer block text-center"
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 80px -10px rgba(212,175,55,0.5)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_100%]"
                    animate={{ backgroundPosition: ["0% center", "100% center"] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                  />

                  <div className="relative flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Sparkles className="w-5 h-5 text-[#080608]" />
                    </motion.div>
                    <span className="text-[#080608] font-medium text-lg">Matricule-se agora</span>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-0 group-hover:animate-shine"
                  />
                </motion.a>

                {/* Secondary CTA */}
                <motion.button
                  className="px-10 py-5 rounded-xl bg-[#151318]/80 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] font-medium flex items-center justify-center gap-3 relative overflow-hidden group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-lg">Saiba mais</span>
                  <motion.div
                    className="relative"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>

                  {/* Border glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.2 }}
                    style={{ boxShadow: "inset 0 0 0 1px rgba(212,175,55,0.5)" }}
                  />
                </motion.button>
              </motion.div>
            </div>

            {/* Premium bottom ribbon */}
            <motion.div
              className="relative h-[2px] w-full overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, transparent, #D4AF37, #F9E077, #D4AF37, transparent)",
                  backgroundSize: "200% 100%"
                }}
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Premium advisor badge */}
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#151318]/50 backdrop-blur-sm rounded-full text-white/50 hover:text-white/70 transition-colors text-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>Dúvidas? Fale com um de nossos consultores</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes shine {
          from { transform: translateX(-100%) skewX(-15deg); }
          to { transform: translateX(150%) skewX(-15deg); }
        }
        .group:hover .group-hover\\:animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </section>
  );
};