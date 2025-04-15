"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Theme from "../Theme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para o menu mobile

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Fecha o menu mobile ao clicar
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-all"
      aria-label="Navegação principal"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
        {/* Nome estilizado com chaves piscando */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-serif cursor-pointer">
          <a href="#hero" aria-label="Voltar ao início" className="flex items-center">
            <motion.span
              className="text-green-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {"{"}
            </motion.span>
            <span className="mx-2">Rychard Ryan</span>
            <motion.span
              className="text-green-500"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {"}"}
            </motion.span>
          </a>
        </h1>

        {/* Navegação Desktop */}
        <ul className="hidden md:flex space-x-4 sm:space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          {[
            { name: "Início", id: "hero" },
            { name: "Sobre", id: "profile" },
            { name: "Habilidades", id: "stack" },
            { name: "Projetos", id: "projects" },
            { name: "Contato", id: "contact" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="hover:text-green-600 dark:hover:text-green-500 transition"
                aria-label={`Ir para a seção ${item.name}`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Botões de Download e Dark Mode */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Botão de Download do CV */}
          <a
            href="/curriculoRychard.pdf"
            download
            className="px-4 py-2 rounded-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
            hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-400 hover:text-white transition-all duration-300 text-sm sm:text-base"
            aria-label="Baixar currículo"
          >
            Download CV
          </a>

          {/* Botão Dark Mode */}
          <Theme />
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Botão do Menu */}
          <button
            className="text-gray-900 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Botão Dark Mode no Mobile */}
          <Theme />
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800"
        >
          <ul className="flex flex-col space-y-4 py-4 px-6 text-gray-700 dark:text-gray-300 font-medium">
            {[
              { name: "Início", id: "hero" },
              { name: "Sobre", id: "profile" },
              { name: "Habilidades", id: "stack" },
              { name: "Projetos", id: "projects" },
              { name: "Contato", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="block hover:text-green-600 dark:hover:text-green-500 transition"
                  aria-label={`Ir para a seção ${item.name}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/curriculo.pdf"
                download
                className="block px-5 py-2 rounded-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-400 hover:text-white transition-all duration-300 text-sm"
                aria-label="Baixar currículo"
              >
                Download CV
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;