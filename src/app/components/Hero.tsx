"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import CountUp from "react-countup";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Typical from "react-typical";

export default function Hero() {
  useEffect(() => {
    // Animação GSAP para as linhas girando e se movendo ao redor da foto
    gsap.to(".circle-border", {
      rotate: () => Math.random() * 360 - 180,
      x: () => Math.random() * 30 - 15,
      y: () => Math.random() * 30 - 15,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-white text-black dark:text-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-all flex flex-col items-center justify-center relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* SEO: Título principal */}
      <h1 id="hero-heading" className="sr-only">
        Rychard Ryan - Desenvolvedor de Software
      </h1>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-between px-6 sm:px-10 py-5 absolute top-0"
      >
        <h1 className="text-xl sm:text-2xl font-bold">
          Rychard<span className="text-green-500">.</span>
        </h1>
        <div className="space-x-4 sm:space-x-6">
          {["Início", "Serviços", "Experiência", "Projetos", "Contato"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-500 transition text-sm sm:text-base"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 px-3 sm:px-4 py-2 rounded-md shadow-lg text-sm sm:text-base"
          >
            Contrate-me
          </motion.button>
        </div>
      </motion.nav>

      {/* Container principal */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-6 sm:px-10 max-w-5xl mx-auto">
        {/* Texto da esquerda */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">Olá, eu sou</h1>
          <h1 className="text-4xl sm:text-5xl font-bold text-green-500">Rychard Ryan</h1>
          <h2 className="text-base sm:text-lg text-black dark:text-white mt-4">
            <Typical
              steps={[
                "Desenvolvedor de Software",
                8000,
                "",
                2000,
              ]}
              loop={Infinity}
            />
          </h2>
          <p className="mt-4 text-black dark:text-white max-w-md mx-auto md:mx-0">
            Apaixonado por tecnologia, crio soluções digitais inovadoras que impulsionam negócios e otimizam experiências. Especializado em desenvolvimento web e engenharia de software.
          </p>

          {/* Ícones sociais estilizados */}
          <motion.div
            className="mt-6 flex justify-center md:justify-start space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="https://github.com/Rychard6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-gray-800 p-4 rounded-full text-2xl text-white hover:bg-green-500 transition"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/rychard-ryan-9130931a6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-gray-800 p-4 rounded-full text-2xl text-white hover:bg-green-500 transition"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/rychaardryaan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-gray-800 p-4 rounded-full text-2xl text-white hover:bg-green-500 transition"
              whileHover={{ scale: 1.2 }}
            >
              <FaInstagram />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Imagem com animação */}
        <motion.div
          className="relative mt-10 md:mt-0"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <motion.div
              className="absolute inset-0 border-4 border-green-500 rounded-full animate-spin-slow border-dashed circle-border"
            ></motion.div>
            <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/FotoPerfil.jpeg" alt="Rychard Ryan" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Estatísticas com animação de contagem */}
      <motion.div
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-black dark:text-white text-center max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {[
          { number: 4, text: "Anos de Experiência" },
          { number: 6, text: "Projetos Concluídos" },
          { number: 8, text: "Tecnologias Dominadas" },
          { number: 250, text: "Commits de Código" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="transition transform"
          >
            <span className="text-black dark:text-white text-2xl sm:text-3xl font-bold">
              <CountUp end={item.number} duration={3} />
            </span>
            <br />
            {item.text}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}