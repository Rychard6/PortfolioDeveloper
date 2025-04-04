"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Theme from "../Theme";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-all">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Nome estilizado */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-serif">
          Rychard Ryan
        </h1>

        {/* Navegação */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          {["Início", "Sobre", "Habilidades", "Projetos", "Contato"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-600 dark:hover:text-green-500 transition"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Área de Download e Dark Mode */}
        <div className="flex items-center space-x-4">
          {/* Botão de Download do CV */}
          <a
            href="/curriculo.pdf"
            download
            className="px-5 py-2 rounded-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
            hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-400 hover:text-white transition-all duration-300"
          >
            Download CV
          </a>

          {/* Botão Dark Mode */}
          <Theme/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
