import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useMotionValue, AnimatePresence, MotionValue } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Calendar, Clock, CheckCircle2, BarChart3, BookOpen, Star, Mail, Phone, Trophy, Users, ShieldCheck, Play, Quote, Newspaper, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { Link } from 'react-router-dom';

import { NewsSection } from '../components/sections/NewsSection';

import { CTASection } from '../components/sections/CTASection';
import yan from '../images/Yan.jpg';
import paula from '../images/prof-paula.jpeg';
import Valbert from '../images/Valbert.png';
import jessica from '../images/Jéssica.jpg';
import Nicassio from '../images/Nicássio.jpg';
import Henrique from '../images/Henrique-Landim-Perfil.png';
import Anna from '../images/Anna-Alves-Perfil.png';
import Andreia from '../images/Andreia-Torres-Perfil.png';
import Paula1 from '../images/yure.png';
import stella from '../images/stella.png';
import Yure from '../images/equipe3.png';

// ----------------------------------------------------------------
// Bloco de notícias recentes (exemplo de componente mais simples)
// ----------------------------------------------------------------
const CurrentNewsBlock = () => {
  // Array com os dados das notícias
  const newsItems = [
    {
      id: 1,
      title: "EMURC autoriza abertura de concurso público em Vitória da Conquista",
      excerpt: "Empresa Municipal de Urbanização de Vitória da Conquista já escolheu a banca organizadora para o novo concurso público.",
      source: "pmvc.ba.gov.br",
      date: "30 Mar 2025",
      link: "/blog/emurc-autoriza-concurso-vitoria-conquista"
    },
    {
      id: 2,
      title: "Concurso PM-BA: Tudo sobre o próximo certame",
      excerpt: "Informações sobre o novo concurso da Polícia Militar da Bahia, com previsão de edital ainda em 2025.",
      source: "Gran Cursos Online",
      date: "28 Mar 2025",
      link: "/blog/concurso-pm-ba-proximo-certame"
    },
    {
      id: 3,
      title: "Concursos 2025: Os certames mais esperados do ano",
      excerpt: "Confira a lista completa dos concursos com previsão de edital para 2025 e organize seus estudos.",
      source: "Estratégia Concursos",
      date: "25 Mar 2025",
      link: "/blog/concursos-mais-esperados-2025"
    },
    {
      id: 4,
      title: "Concurso PC-BA: Novidades sobre o próximo edital",
      excerpt: "Atualizações sobre o novo concurso da Polícia Civil da Bahia que deve ser lançado em breve.",
      source: "Estratégia Concursos",
      date: "22 Mar 2025",
      link: "/blog/concurso-pc-ba-novidades"
    },
    {
      id: 5,
      title: "Atualidades para concursos: Resumo de Março 2025",
      excerpt: "Os temas mais importantes de atualidades que podem cair em provas de concursos neste período.",
      source: "QConcursos",
      date: "18 Mar 2025",
      link: "/blog/atualidades-para-concursos-marco-2025"
    },
    {
      id: 6,
      title: "Concurso Correios: Como adaptar estudos de carteiro para atendente comercial",
      excerpt: "Dicas para candidatos que desejam mudar o foco de estudos para diferentes cargos do concurso.",
      source: "QConcursos",
      date: "15 Mar 2025",
      link: "/blog/concurso-correios-adaptar-estudos-carteiro-atendente"
    }
  ];

  return (
    <section id="current-news" className="py-32 bg-[#0A090C] relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0">
        {/* Orbes de gradiente */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-[#D4AF37]/3 rounded-full blur-[120px] pointer-events-none"
          animate={{
            opacity: [0.2, 0.3, 0.2],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Padrão sutil */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Rótulo da seção */}
          <div className="flex items-center justify-center mb-4">
            <motion.div
              className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            <div className="px-4 relative">
              <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em]">Concursos</span>
              <motion.div
                className="absolute -bottom-1 left-4 right-4 h-px bg-[#D4AF37]/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
            <motion.div
              className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mt-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Notícias de <span className="text-[#D4AF37] relative inline-block ml-2">
              Concursos
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37]/80 to-[#D4AF37]/20"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fique por dentro das últimas notícias sobre concursos públicos
            e mantenha-se atualizado com as informações mais relevantes.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {newsItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                to={item.link}
                className="block h-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl overflow-hidden transition-all duration-300 group relative"
              >
                {/* Efeito de brilho suave no hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <div className="text-sm text-[#D4AF37] mb-2 flex items-center justify-between">
                    <span>Notícia</span>
                    <span className="text-white/50 text-xs">{item.date}</span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-white/50">{item.source}</span>

                    <motion.div
                      className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"
                      whileHover={{ scale: 1.2, backgroundColor: "rgba(212,175,55,0.2)" }}
                    >
                      <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white hover:bg-[#D4AF37]/10 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open('https://folha.qconcursos.com', '_blank')}
          >
            Ver todas as notícias de concursos
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------
// Função auxiliar de rolagem
// ----------------------------------------------------------------
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // Ajuste conforme necessário para evitar que o header cubra o conteúdo
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
};

// ----------------------------------------------------------------
// Seção de cursos finalizados (Aprovados)
// ----------------------------------------------------------------
const PastExamsSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-[#0A090C] to-[#120F19] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-[#D4AF37]/5 to-transparent opacity-50" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5" />

      {/* Animated orbs/lights */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/5 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-[#D4AF37]/3 blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-3">
              <motion.div
                className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] mx-4 notranslate">
                cursos
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
              <motion.div
                className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 mb-8 leading-tight">
              Cursos <span className="text-[#D4AF37] notranslate">finalizados</span>
            </h2>

            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Preparamos candidatos para diversos concursos com excelentes resultados.
              Conheça alguns dos certames onde nossos alunos foram aprovados:
            </motion.p>
          </motion.div>

          {/* Exams grid/showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Concurso de Vitória da Conquista",
                icon: "building",
                color: "#D4AF37",
                details: "Alunos aprovados em múltiplas áreas da administração municipal",
                year: "2023",
                stats: "",
              },
              {
                title: "Processo Seletivo",
                subtitle: "Vitória da Conquista e Barra do Choça",
                icon: "users",
                color: "#D4AF37",
                details: "Preparação completa para todas as fases do processo seletivo",
                year: "2023/2024",
                stats: "",
              },
              {
                title: "Prefeitura de Caraíbas",
                icon: "landmark",
                color: "#D4AF37",
                details: "Excelentes resultados em diversos cargos no município",
                year: "2023",
                stats: "",
              },
              {
                title: "SESAB",
                subtitle: "Secretaria de Saúde da Bahia",
                icon: "stethoscope",
                color: "#D4AF37",
                details: "Preparação específica para área de saúde com alto índice de aprovação",
                year: "2022",
                stats: "",
              },
              {
                title: "Correios",
                icon: "mail",
                color: "#D4AF37",
                details: "Curso direcionado para as especificidades do concurso nacional",
                year: "2023",
                stats: "",
              },
              {
                title: "Outros Concursos",
                icon: "award",
                color: "#D4AF37",
                details: "Diversos outros concursos federais, estaduais e municipais",
                year: "2022-2024",
                stats: "s",
              },
            ].map((exam, index) => (
              <motion.div
                key={index}
                className="bg-[#13121A] border border-[#D4AF37]/10 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-[#D4AF37]/5 transition-all duration-300 group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Brilho de borda ao hover */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 rounded-xl opacity-0 group-hover:opacity-30 group-hover:blur-lg transition-all duration-300"
                />
                <div className="px-6 py-8">
                  {/* Icon */}
                  <div className="mb-5 w-14 h-14 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-[#D4AF37]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {exam.icon === "building" && <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                      {exam.icon === "users" && <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                      {exam.icon === "landmark" && <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />}
                      {exam.icon === "mail" && <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                      {exam.icon === "stethoscope" && <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />}
                      {exam.icon === "award" && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />}
                    </motion.svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-1 notranslate">{exam.title}</h3>
                  {exam.subtitle && (
                    <p className="text-[#D4AF37] text-sm mb-3 notranslate">{exam.subtitle}</p>
                  )}

                  {/* Details */}
                  <p className="text-white/60 mb-6 h-12 line-clamp-2">{exam.details}</p>

                  {/* Stats */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="flex items-center">
                      <span className="text-xs text-white/40">Edição:</span>
                      <span className="ml-2 text-sm font-medium text-white">{exam.year}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#D4AF37]">{exam.stats}</span>
                    </div>
                  </div>
                </div>

                {/* Hover effect gradient line */}
                <motion.div
                  className="h-1 w-0 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] group-hover:w-full transition-all duration-500"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="https://api.whatsapp.com/send/?phone=557774009165&text=Ol%C3%A1%21+Quero+saber+mais+sobre+os+concursos+com+aprovados.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F9E077] rounded-lg text-[#080608] font-medium relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Seja o próximo aprovado</span>
              <ArrowRight className="w-5 h-5" />

              <motion.div
                className="absolute -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-white opacity-40 group-hover:animate-shine"
                transition={{ duration: 0.3 }}
              />
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

// ----------------------------------------------------------------
// Banner de destaques (logo abaixo do Hero)
// ----------------------------------------------------------------
const StatsHighlightBanner = () => {
  return (
    <div className="relative z-10 -mt-20 mb-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-r from-[#13121A] to-[#0F0E13] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2 }}
        >
          {/* Elementos de fundo */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Padrão subtil */}
            <div className="absolute inset-0 opacity-[0.03]">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="h-px my-6 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                />
              ))}
            </div>
            {/* Gradiente animado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-30"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: '200% 200%' }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              { value: "98%", label: "Taxa de Aprovação", icon: <Trophy className="w-5 h-5" /> },
              { value: "5.000+", label: "Alunos Aprovados", icon: <Users className="w-5 h-5" /> },
              { value: "15+", label: "Anos de Experiência", icon: <Star className="w-5 h-5" /> },
              { value: "#1", label: "Em Aprovações", icon: <ShieldCheck className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="p-6 md:p-8 text-center relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 + (i * 0.1) }}
                whileHover={{
                  backgroundColor: "rgba(212,175,55,0.03)",
                  transition: { duration: 0.2 }
                }}
              >
                {/* Ícone de fundo grande */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0.05 }}
                  whileHover={{
                    opacity: 0.12,
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {stat.icon && React.cloneElement(stat.icon, { className: "w-28 h-28 text-[#D4AF37]" })}
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    className="text-3xl md:text-4xl font-bold relative inline-block"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, delay: i * 0.2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <motion.div
                      className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#D4AF37]/10 to-transparent blur-md opacity-0"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                    />
                    <span className="bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent"
                      style={{ backgroundSize: '200% 100%' }}
                    >
                      {stat.value}
                    </span>
                  </motion.div>

                  <div className="text-xs uppercase tracking-wider text-white/60 font-medium mt-2">
                    {stat.label}
                  </div>

                  <motion.div
                    className="h-px w-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-2"
                    initial={{ width: 0 }}
                    whileHover={{ width: '50%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------
// Hero principal (UltraHero) - Design cinematográfico
// ----------------------------------------------------------------
export const UltraHero = () => {
  // Refs para container e título
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Valores para parallax avançado
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Transforma o movimento do mouse para deslocamento dos elementos de fundo
  const backgroundX = useTransform(mouseX, [-1, 1], ["-30px", "30px"]);
  const backgroundY = useTransform(mouseY, [-1, 1], ["-30px", "30px"]);

  // Função de movimento do mouse para atualizar os valores do parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    if (titleRef.current) {
      // Quebrando o título em caracteres para animação com SplitType
      const split = new SplitType(titleRef.current, { types: "chars,words" });
      gsap.fromTo(
        split.chars,
        {
          y: 150,
          opacity: 0,
          rotateX: -80,
          filter: "blur(4px)"
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          filter: "blur(0px)",
          stagger: 0.02,
          duration: 1.5,
          delay: 0.3,
          ease: "power3.out"
        }
      );
    }

    // Criação de feixes de luz com GSAP (aumentamos a quantidade e variamos mais parâmetros)
    const container = containerRef.current;
    if (container) {
      for (let i = 0; i < 7; i++) {
        const beam = document.createElement("div");
        beam.className = "ultra-beam";
        beam.style.left = `${Math.random() * 100}%`;
        beam.style.transform = `rotate(${-10 + Math.random() * 20}deg)`;
        container.appendChild(beam);
        gsap.to(beam, {
          opacity: Math.random() * 0.5 + 0.2,
          duration: 2 + Math.random(),
          yoyo: true,
          repeat: -1,
          repeatDelay: Math.random() * 4,
          ease: "sine.inOut"
        });
      }
    }
  }, []);

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      lang="pt-BR"
      className="ultra-hero relative w-full min-h-screen overflow-hidden"
      style={{
        background: "radial-gradient(circle at 10% 90%, #1f1c2c, #07000f)",
        perspective: 2500
      }}
    >
      {/* CAMADA 1: PARTICULAS DINÂMICAS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(120)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${posY}%`,
                left: `${posX}%`
              }}
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.5, 1] }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          );
        })}
      </div>

      {/* CAMADA 2: OVERLAY SHIMMER */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
          backgroundSize: "200% 100%"
        }}
        animate={{ backgroundPosition: ["-200% 0%", "200% 0%"] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      />

      {/* CAMADA 3: ORBES LUMINOSOS */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: backgroundX, y: backgroundY }}
      >
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "30rem",
            height: "30rem",
            top: "-10%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(212,175,55,0.6), transparent 70%)"
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "25rem",
            height: "25rem",
            bottom: "-10%",
            right: "-10%",
            background:
              "radial-gradient(circle, rgba(249,224,119,0.6), transparent 70%)"
          }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>

      {/* CAMADA 4: CONTEÚDO PRINCIPAL CENTRALIZADO */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center min-h-screen px-4">
        <div className="max-w-3xl mx-auto">
          {/* Tag de destaque */}
          <motion.div
            className="mb-6 inline-flex items-center px-6 py-2 rounded-full bg-black/50 backdrop-blur-md border border-[#D4AF37]/40"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-sm tracking-widest uppercase font-bold bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-clip-text text-transparent">
              RB Cursos
            </span>
          </motion.div>

          {/* Título com efeito 3D */}
          <motion.h1
            ref={titleRef}
            className="font-extrabold leading-tight text-white notranslate drop-shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Excelência em
            </span>
            <span className="block my-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#D4AF37]">
              aprovações
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              para concursos
            </span>
          </motion.h1>

          {/* Descrição com tipografia refinada */}
          <motion.p
            className="mt-6 text-lg leading-relaxed text-white/80 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            Garanta sua aprovação com nossa metodologia exclusiva e os melhores professores.
            Transforme sua vida hoje mesmo!
          </motion.p>
        </div>
      </div>

      {/* Estilos customizados para feixes de luz */}
      <style>{`
        .ultra-hero {
          overflow: hidden;
        }
        .ultra-beam {
          position: absolute;
          height: 100vh;
          width: 10rem;
          transform-origin: bottom;
          background: linear-gradient(
            to top,
            rgba(212,175,55,0.2),
            rgba(249,224,119,0.1),
            transparent
          );
          filter: blur(10px);
          opacity: 0;
        }
      `}</style>
    </motion.section>
  );
};
// ----------------------------------------------------------------
// Seção “Quem Somos?” (AboutSection)
// ----------------------------------------------------------------
const AboutSection = () => {
  return (
    <section className="py-32 bg-[#0A090C] relative overflow-hidden">
      {/* Fundo aprimorado */}
      <div className="absolute inset-0">
        {/* Orbes dinâmicos */}
        <motion.div
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[25rem] h-[25rem] bg-[#D4AF37]/3 rounded-full blur-[120px] pointer-events-none"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>

        {/* Feixes de luz adicionais */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              className="absolute w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent blur-[3px]"
              style={{
                top: `${30 + i * 20}%`,
                left: '-25%',
                transform: `rotate(${-2 + i * 2}deg)`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                left: ['-25%', '100%'],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                delay: i * 7,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <div className="relative px-4">
                <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.25em]">Quem somos nós</span>
                <motion.div
                  className="absolute -bottom-1 left-4 right-4 h-[1px] bg-[#D4AF37]/30"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
              <motion.div
                className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Referência em <span className="text-[#D4AF37] relative inline-block">
                aprovações
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-transparent"
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </span> há mais de 15 anos
            </motion.h2>

            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Não fique mais preocupado pensando na sua aprovação! Para todas as dúvidas,
              você terá onde encontrar a resposta. Nossa metodologia exclusiva já
              transformou a vida de mais de <span className="text-white font-medium">5.000 alunos</span>.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-6 h-6 text-[#D4AF37]" />,
                title: "Email",
                description: "Tire suas dúvidas diretamente com nossos professores especialistas",
                cta: "ribeiroebarretocursos@gmail.com"
              },
              {
                icon: <Phone className="w-6 h-6 text-[#D4AF37]" />,
                title: "WhatsApp",
                description: "Atendimento rápido e personalizado para seu sucesso",
                cta: "(77) 7400-9165"
              },
              {
                icon: <BookOpen className="w-6 h-6 text-[#D4AF37]" />,
                title: "Conteúdos",
                description: "Acesse materiais exclusivos desenvolvidos para sua aprovação",
                cta: "Acessar agora"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.7 }}
              >
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/5 to-[#D4AF37]/20 rounded-2xl opacity-0 blur-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 0.5, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 1 }}
                  whileHover={{
                    opacity: 0.8,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />

                <div className="bg-gradient-to-b from-white/8 to-white/4 backdrop-blur-md border border-white/10 rounded-2xl p-8 relative h-full">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-xl transform translate-x-1/4 -translate-y-1/4 opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#D4AF37]/5 rounded-full blur-lg transform -translate-x-1/3 translate-y-1/3"></div>

                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center mb-6 relative"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 border border-[#D4AF37]/40"
                      initial={{ opacity: 0 }}
                      whileHover={{
                        opacity: 1,
                        boxShadow: "0 0 20px rgba(212,175,55,0.3)"
                      }}
                    />
                    {item.icon}
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 mb-8">{item.description}</p>

                  <div className="inline-flex items-center text-[#D4AF37] font-medium group">
                    <span className="group-hover:mr-1 transition-all">{item.cta}</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
                    >
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorações adicionais */}
          <motion.div
            className="absolute -right-16 top-1/4 w-40 h-40 border border-[#D4AF37]/20 rounded-full opacity-20"
            animate={{
              rotate: 360,
              scale: [1, 1.03, 1]
            }}
            transition={{
              rotate: { duration: 40, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute -left-24 bottom-1/3 w-56 h-56 border border-[#D4AF37]/10 rounded-full opacity-10"
            animate={{
              rotate: -360,
              scale: [1, 1.05, 1]
            }}
            transition={{
              rotate: { duration: 50, repeat: Infinity, ease: "linear" },
              scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>
      </div>
    </section>
  );
};

// ----------------------------------------------------------------
// Seção de Professores (ProfessorsSection)
// ----------------------------------------------------------------
const ProfessorsSection = () => {
  const professors = [
    {
      name: "Profª Paula Barreto",
      role: "Língua Portuguesa e Redação",
      image: paula,
      specialization: "Doutora em Linguística Aplicada",
      approvalRate: "97%"
    },
    {
      name: "Profº Yan Ribeiro",
      role: "Matemática",
      image: yan,
      specialization: "Mestre em Matemática Aplicada",
      approvalRate: "95%"
    },
    {
      name: "Profº Nicássio Couto",
      role: "Informática",
      image: Nicassio,
      specialization: "Especialista em Segurança de Dados",
      approvalRate: "98%"
    },
    {
      name: "Profª Jessica Fontes",
      role: "Geografia",
      image: jessica,
      specialization: "Mestre em Geografia Humana",
      approvalRate: "96%"
    },
    {
      name: "Profº Valbert Laert",
      role: "Adm. Legislação",
      image: Valbert,
      specialization: "Especialista em Direito Administrativo",
      approvalRate: "94%"
    },
    {
      name: "Yure Oliveira",
      role: "Professor de Conhecimentos Pedagógicos",
      image: Paula1,
      specialization: "Especialista em Didática",
      achievement: "Desenvolvimento de materiais exclusivos",
      approvalRate: "94%"

    },
    {
      name: "Stella Renathe",
      role: "Professora de Políticas Públicas de Saúde",
      image: stella,
      specialization: "Especialista em Saúde Pública",
      achievement: "Consultora em concursos da área",
      approvalRate: "94%"

    },
  ];

  // Membros da equipe interna
  const internalTeam = [
    {
      name: "Paula Portugal",
      role: "Gerente Administrativa",
      image: Yure,
      specialization: "Suporte ao Aluno",
    },
    {
      name: "Profª Paula Barreto",
      role: "Língua Portuguesa e Redação",
      image: paula,
      specialization: "Professora",
      approvalRate: "97%"
    },
    {
      name: "Profº Yan Ribeiro",
      role: "Matemática",
      image: yan,
      specialization: "Professor",
      approvalRate: "95%"
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#0A090C] to-[#12101A] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-[80px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/2 left-3/4 w-64 h-64 rounded-full bg-[#8A2BE2]/5 blur-[80px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] bg-repeat opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho Professores Especialistas */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <div className="relative px-6">
                <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] relative z-10">Professores Especialistas</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 blur-sm"></div>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mt-6 mb-8 leading-tight">
              Conheça os <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent ml-2">professores</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] rounded-full opacity-50"></span>
              </span>
            </h2>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Nossa equipe é formada por professores com histórico comprovado de excelência,
              especializados em suas respectivas áreas e com metodologias exclusivas para
              maximizar suas chances de aprovação.
            </p>

            <motion.div
              className="flex items-center justify-center mt-10 gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.a
                href='https://api.whatsapp.com/send/?phone=557774009165&text=Ol%C3%A1%21+Tenho+interesse+nos+cursos.&type=phone_number&app_absent=0'
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] text-[#080608] font-medium flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                onClick={() => scrollToSection('methodology-section')}
              >
                Conhecer metodologia
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.button
                className="px-8 py-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-white font-medium flex items-center gap-2 group"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(212,175,55,0.1)' }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                onClick={() => scrollToSection('testimonials-section')}
              >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <Play className="w-3 h-3 text-[#080608] ml-0.5" />
                </div>
                Ver depoimentos
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Grade de professores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {professors.map((professor, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/20 to-[#D4AF37]/5 rounded-2xl transform rotate-1 scale-[0.97] blur-sm group-hover:rotate-2 group-hover:scale-[0.98] transition-all duration-300"></div>

                <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden relative z-10 h-full">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={professor.image}
                      alt={professor.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 image-enhanced"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A090C] via-[#0A090C]/70 to-transparent"></div>
                    <div className="absolute inset-0 mix-blend-soft-light bg-gradient-to-br from-[#D4AF37]/10 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[#D4AF37] text-sm font-medium mb-1">{professor.role}</p>
                          <h3 className="text-xl font-bold text-white">{professor.name}</h3>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-white/60 text-xs mb-1">Taxa de aprovação</p>
                          <p className="text-[#D4AF37] font-bold text-lg">{professor.approvalRate}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-4">
                    <p className="text-white/70 text-sm mb-4">{professor.specialization}</p>

                    <div className="flex items-center justify-between">
                      <motion.button
                        className="text-[#D4AF37] text-sm flex items-center gap-1 group/btn hover:text-[#F5D76E] transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        Ver perfil
                        <ArrowRight className="w-3.5 h-3.5 transition-all group-hover/btn:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Separador */}
          <motion.div
            className="my-24 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
          </motion.div>

          {/* Equipe Interna */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
              <div className="relative px-6">
                <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] relative z-10">Equipe Interna</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/10 to-[#D4AF37]/0 blur-sm"></div>
              </div>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 mb-8 leading-tight">
              Quem <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] bg-clip-text text-transparent ml-2 mr-2 notranslate">
                  transforma
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] rounded-full opacity-50"></span>
              </span> sua jornada
            </h2>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Conheça nossa equipe de profissionais dedicados que trabalham nos bastidores
              para garantir a melhor experiência de aprendizado possível.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10">
            {internalTeam.map((member, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/15 to-[#D4AF37]/5 rounded-2xl transform rotate-1 scale-[0.97] blur-sm group-hover:rotate-2 group-hover:scale-[0.98] transition-all duration-300"></div>

                <div className="bg-gradient-to-b from-white/8 to-white/3 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden relative z-10 h-full">
                  <div className="relative p-6">
                    <div className="flex flex-col items-center mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-2 border-[#D4AF37]/20">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white text-center">{member.name}</h3>
                      <p className="text-[#D4AF37] text-sm font-medium mt-1 text-center">{member.role}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                        </div>
                        <p className="text-white/80 text-sm">{member.specialization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      <style>{`
        .image-enhanced {
          filter: contrast(1.05) brightness(1.02) saturate(1.1);
          object-position: center 20%;
        }
      `}</style>
    </section>
  );
};

// ----------------------------------------------------------------
// Seção de Depoimentos (TestimonialsSection)
// ----------------------------------------------------------------
const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [category, setCategory] = useState("all");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const testimonials = [
    {
      content: "A metodologia focada em resolução de questões foi fundamental para minha aprovação. O direcionamento dos professores fez toda a diferença!",
      name: "Henrique Landim",
      role: "Aprovado em 1º lugar • Banco do Brasil",
      image: Henrique,
      category: "bancário",
      highlight: "Aprovado em 1º Lugar",
      year: "2024",
      score: "9.8/10",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/video1"
    },
    {
      content: "Estudei apenas 4 meses com o método RB e consegui minha aprovação. Os materiais são excelentes e os professores realmente se importam!",
      name: "Anna Alves",
      role: "Aprovada",
      image: Anna,
      category: "policial",
      highlight: "4 Meses de Estudo",
      year: "2023",
      score: "9.6/10",
      hasVideo: false,
      videoUrl: ""
    },
    {
      content: "Já tinha tentado outros cursos antes, mas só depois que conheci o RB consegui finalmente ser aprovada. A abordagem é completamente diferente!",
      name: "Andreia Torres",
      role: "Aprovada • Tribunal Regional do Trabalho",
      image: Andreia,
      category: "judiciário",
      highlight: "Após várias tentativas",
      year: "2024",
      score: "9.7/10",
      hasVideo: true,
      videoUrl: "https://www.youtube.com/embed/video3"
    }
  ];

  const filteredTestimonials = category === "all"
    ? testimonials
    : testimonials.filter(t => t.category === category);

  // Ajusta o índice ativo caso o array filtrado mude
  useEffect(() => {
    if (activeTestimonial >= filteredTestimonials.length) {
      setActiveTestimonial(0);
    }
  }, [category, filteredTestimonials.length, activeTestimonial]);

  // Controle de autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (autoplay && filteredTestimonials.length > 0) {
      interval = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % filteredTestimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [autoplay, filteredTestimonials.length]);

  // Abre o modal de vídeo
  const openVideoModal = (url: string) => {
    setCurrentVideo(url);
    setIsVideoModalOpen(true);
    setAutoplay(false);
  };

  return (
    <section id="testimonials-section" className="py-32 bg-[#080608] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* “Estrelas” parallax */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            return (
              <motion.div
                key={`star-${i}`}
                className="absolute rounded-full"
                style={{
                  width: size + 'px',
                  height: size + 'px',
                  backgroundColor: Math.random() > 0.9 ? '#D4AF37' : '#ffffff',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.1
                }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  scale: [1, i % 3 === 0 ? 1.5 : 1, 1]
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            );
          })}
        </div>

        {/* Orbes de gradiente */}
        <motion.div
          className="absolute top-0 left-1/3 w-[50vw] h-[50vh] rounded-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent blur-[120px]"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[40vw] h-[40vh] rounded-full bg-gradient-to-tr from-[#D4AF37]/3 to-transparent blur-[100px]"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-3">
              <motion.div
                className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-[0.2em] mx-4 relative">
                Depoimentos
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
              <motion.div
                className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>

            <div className="relative" style={{ perspective: '1000px' }}>
              <motion.h2
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-4 mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.span
                  className="inline-block"
                  animate={{ rotateX: [0, 5, 0], rotateY: [0, -3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Histórias de
                </motion.span>{' '}
                <motion.span
                  className="text-[#D4AF37] relative inline-block"
                  animate={{ rotateX: [0, -5, 0], rotateY: [0, 3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  sucesso
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37]/80 to-[#D4AF37]/10"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </motion.span>
              </motion.h2>
            </div>

            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Conheça relatos reais de alunos que transformaram suas vidas através de nossa metodologia exclusiva
              e conquistaram suas aprovações em concursos de alta competitividade.
            </motion.p>
          </motion.div>

          {/* Filtros de categoria */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {["all", "bancário", "policial", "judiciário"].map((cat) => (
              <motion.button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm transition-all ${category === cat
                  ? "bg-[#D4AF37] text-black font-medium"
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory(cat)}
              >
                {cat === "all" ? "Todos os depoimentos" : `Concurso ${cat}`}
              </motion.button>
            ))}
          </motion.div>

          {/* Pequenos indicadores estatísticos */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { value: "98%", label: "Taxa de Satisfação", icon: <Star className="w-5 h-5" /> },
              { value: "5,240+", label: "Aprovados", icon: <Trophy className="w-5 h-5" /> },
              { value: "4.8/5", label: "Avaliação Média", icon: <Star className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl relative group overflow-hidden"
                style={{ perspective: '1000px' }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5,
                  backgroundColor: "rgba(212,175,55,0.05)",
                  borderColor: "rgba(212,175,55,0.3)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.2 + (i * 0.1),
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(212,175,55,0.1)",
                        "0 0 15px rgba(212,175,55,0.3)",
                        "0 0 0 rgba(212,175,55,0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div>
                    <div className="overflow-hidden">
                      <motion.p
                        className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F9E077] bg-clip-text text-transparent"
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                      >
                        {stat.value}
                      </motion.p>
                    </div>
                    <p className="text-xs text-white/60">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Carrossel principal */}
          <div className="relative">
            <div className="flex justify-center items-center gap-3 mb-10">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`relative h-3 overflow-hidden rounded-full transition-all ${index === activeTestimonial
                    ? "w-16 bg-[#D4AF37]/20"
                    : "w-3 bg-white/20 hover:bg-white/40"
                    }`}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setAutoplay(false);
                  }}
                  aria-label={`Ver depoimento ${index + 1}`}
                >
                  {index === activeTestimonial && (
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-[#D4AF37]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 6,
                        repeat: autoplay ? Infinity : 0,
                        repeatType: "loop"
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="relative overflow-visible" style={{ perspective: '2000px' }}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Card principal */}
                <motion.div
                  className="lg:col-span-2 bg-gradient-to-b from-white/8 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20, rotateY: -5 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)", scale: 1.01 }}
                >
                  <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px]">
                    <motion.div
                      className="w-full h-full rounded-full bg-gradient-to-b from-[#D4AF37]/10 to-transparent blur-[100px]"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>

                  <div className="absolute top-6 left-6 text-9xl text-[#D4AF37]/5 font-serif leading-none">"</div>
                  <div className="absolute bottom-6 right-6 text-9xl text-[#D4AF37]/5 font-serif leading-none transform rotate-180">"</div>

                  <div className="absolute top-8 right-8 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-[#D4AF37]"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs text-white/70">Depoimento Verificado</span>
                  </div>

                  <div className="mb-8 relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTestimonial}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="relative pl-6 pr-6"
                      >
                        <motion.div
                          className="absolute -top-1 -left-1"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, rotate: [0, 10, 0] }}
                          transition={{ duration: 0.6 }}
                        >
                          <Quote className="w-10 h-10 text-[#D4AF37]/30" />
                        </motion.div>

                        {filteredTestimonials[activeTestimonial]?.highlight && (
                          <motion.div
                            className="inline-block mb-4 px-3 py-1 bg-[#D4AF37]/10 rounded-full border border-[#D4AF37]/20"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <p className="text-sm font-medium text-[#D4AF37]">
                              {filteredTestimonials[activeTestimonial].highlight}
                            </p>
                          </motion.div>
                        )}

                        <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic mb-6">
                          {filteredTestimonials[activeTestimonial]?.content.split(' ').map((word, i) => (
                            <motion.span
                              key={i}
                              className="inline-block mr-1.5"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 + (i * 0.01), duration: 0.4 }}
                            >
                              {word}
                            </motion.span>
                          ))}
                        </p>

                        <motion.div
                          className="absolute -bottom-1 right-0 transform rotate-180"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1, rotate: [180, 190, 180] }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <Quote className="w-10 h-10 text-[#D4AF37]/30" />
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6 mt-6">
                    <div className="flex items-center">
                      <div className="relative mr-4 group">
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/30 to-[#D4AF37]/10 blur-md opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                        <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37]/30 p-0.5 relative">
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <AnimatePresence mode="wait">
                              <motion.img
                                key={activeTestimonial}
                                src={filteredTestimonials[activeTestimonial]?.image}
                                alt={filteredTestimonials[activeTestimonial]?.name}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                              />
                            </AnimatePresence>
                          </div>

                          {filteredTestimonials[activeTestimonial]?.hasVideo && (
                            <motion.button
                              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => openVideoModal(filteredTestimonials[activeTestimonial].videoUrl ?? '')}
                            >
                              <Play fill="#000" className="w-3.5 h-3.5 text-black ml-0.5" />
                            </motion.button>
                          )}
                        </div>

                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/50 border-t-transparent border-l-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        />
                      </div>

                      <div>
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeTestimonial}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            transition={{ duration: 0.4 }}
                          >
                            <h3 className="text-xl font-bold text-white">{filteredTestimonials[activeTestimonial]?.name}</h3>
                            <p className="text-sm text-[#D4AF37]">{filteredTestimonials[activeTestimonial]?.role}</p>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                          >
                            <Star className="w-4 h-4 text-[#D4AF37]" fill="#D4AF37" />
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-xs text-white/60">Avaliação do curso:</p>
                        <p className="text-sm font-bold text-white">{filteredTestimonials[activeTestimonial]?.score}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                    </div>
                    <span className="text-xs text-white/60">Aprovado em {filteredTestimonials[activeTestimonial]?.year}</span>
                  </div>
                </motion.div>

                {/* Thumbnails laterais */}
                <div className="lg:col-span-1">
                  <div className="grid grid-cols-1 gap-4 h-full">
                    {filteredTestimonials.map((testimonial, i) => (
                      <motion.div
                        key={i}
                        className={`p-4 bg-white/5 backdrop-blur-sm border rounded-xl cursor-pointer transition-all relative overflow-hidden ${activeTestimonial === i
                          ? "border-[#D4AF37]/50 bg-[#D4AF37]/5"
                          : "border-white/10 hover:border-white/20"
                          }`}
                        whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)" }}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        onClick={() => {
                          setActiveTestimonial(i);
                          setAutoplay(false);
                        }}
                      >
                        {activeTestimonial !== i && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                            whileHover={{ translateX: '100%' }}
                            transition={{ duration: 0.7 }}
                          />
                        )}

                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-full overflow-hidden relative ${activeTestimonial === i ? "ring-2 ring-[#D4AF37]/50" : "border border-white/20"
                            }`}>
                            {testimonial.hasVideo && (
                              <div className="absolute -right-1 -bottom-1 w-4 h-4 rounded-full bg-[#D4AF37] flex items-center justify-center">
                                <Play fill="#000" className="w-2 h-2 text-black ml-px" />
                              </div>
                            )}
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-white">{testimonial.name}</h4>
                            <p className="text-xs text-white/50">{testimonial.role.split('•')[0]}</p>
                          </div>
                        </div>
                        <p className="text-xs text-white/70 line-clamp-2">
                          {testimonial.content.substring(0, 80)}...
                        </p>

                        {activeTestimonial === i && (
                          <motion.div
                            className="w-full h-0.5 mt-3 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto]"
                            layoutId="activeIndicator"
                            animate={{ backgroundPosition: ['0%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Controles de navegação */}
            <div className="flex justify-center mt-10 gap-4">
              <motion.button
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:border-[#D4AF37]/30 bg-black/20 backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(212,175,55,0.05)",
                  boxShadow: "0 0 20px rgba(212, 175, 55, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTestimonial(prev => {
                    if (prev === 0) return filteredTestimonials.length - 1;
                    return prev - 1;
                  });
                  setAutoplay(false);
                }}
                aria-label="Depoimento anterior"
              >
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-[#D4AF37] rotate-180" />
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#D4AF37]/30 scale-125 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className={`px-4 py-2 rounded-full flex items-center gap-2 ${autoplay
                  ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30"
                  : "bg-white/5 text-white/70 border border-white/10"
                  }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAutoplay(prev => !prev)}
              >
                <AnimatePresence mode="wait">
                  {autoplay ? (
                    <motion.div
                      key="pause"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-2 h-4 bg-[#D4AF37]" />
                      <span className="text-xs">Pausar</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="play"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Play className="w-4 h-4" />
                      <span className="text-xs">Reproduzir</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.button
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group hover:border-[#D4AF37]/30 bg-black/20 backdrop-blur-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(212,175,55,0.05)",
                  boxShadow: "0 0 20px rgba(212,175,55,0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTestimonial(prev => (prev + 1) % filteredTestimonials.length);
                  setAutoplay(false);
                }}
                aria-label="Próximo depoimento"
              >
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-[#D4AF37]" />
                <motion.div
                  className="absolute inset-0 rounded-full border border-[#D4AF37]/30 scale-125 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>

          {/* Botão CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() => scrollToSection('matricula')}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] via-[#F9E077] to-[#D4AF37] bg-[length:200%_auto] animate-shimmer px-8 py-4 rounded-full overflow-hidden"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.3)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-black font-bold tracking-wide relative z-10">Quero transformar minha vida também</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
              >
                <ArrowRight className="h-5 w-5 text-black" />
              </motion.span>

              <div className="absolute -inset-full h-full w-1/4 z-5 block transform -skew-x-12 bg-white opacity-40 group-hover:animate-shine" />

              <motion.div
                className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 blur-md bg-gradient-to-r from-[#D4AF37]/30 to-[#F5CC4D]/30 -z-10"
                animate={{
                  boxShadow: ["0 0 20px 10px rgba(212,175,55,0.2)", "0 0 30px 15px rgba(212,175,55,0.4)", "0 0 20px 10px rgba(212,175,55,0.2)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            <div className="flex justify-center mt-8">
              <motion.a
                href="#"
                className="text-[#D4AF37]/80 text-sm flex items-center gap-1.5 hover:text-[#F9E077] transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                Ver todos os depoimentos
                <ArrowUpRight className="w-3.5 h-3.5" />
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF37]/50"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-3xl bg-[#0A090C] rounded-2xl overflow-hidden border border-[#D4AF37]/20"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 flex justify-between items-center border-b border-white/10">
                <h3 className="text-white font-medium">Depoimento em vídeo</h3>
                <button
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center"
                  onClick={() => setIsVideoModalOpen(false)}
                >
                  <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={currentVideo}
                  title="Video testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes shine {
          from { transform: translateX(-100%) skewX(-15deg); }
          to { transform: translateX(150%) skewX(-15deg); }
        }
        .group:hover .group-hover\\:animate-shine {
          animation: shine 2s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
        .heading-container h1 div {
          margin-bottom: 1.5rem;
        }
        .heading-container h1 div:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </section>
  );
};

// ----------------------------------------------------------------
// Componente principal da página Home
// ----------------------------------------------------------------
const HomePage = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="bg-[#08070A] overflow-hidden">
      <section id="inicio">
        <UltraHero />
      </section>
      <section id="metodologia">
        <StatsHighlightBanner />
      </section>
      <section id="cursos">
        <AboutSection />
      </section>
      <section id="aprovados">
        <PastExamsSection />
      </section>
      <section id="professores">
        <ProfessorsSection />
      </section>
      <section id="depoimentos">
        <TestimonialsSection />
      </section>
      {/* Seu componente de notícias atuais */}
      <NewsSection />
      <div id="matricula">
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;
