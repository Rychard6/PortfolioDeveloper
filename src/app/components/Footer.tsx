"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Redes sociais */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
          <a
            href="https://github.com/Rychard6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500 transition"
          >
            <FaGithub size={20} className="sm:size-24" />
          </a>
          <a
            href="https://www.linkedin.com/in/rychard-ryan-9130931a6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500 transition"
          >
            <FaLinkedin size={20} className="sm:size-24" />
          </a>
          <a
            href="https://www.instagram.com/rychaardryaan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-500 transition"
          >
            <FaInstagram size={20} className="sm:size-24" />
          </a>
        </div>

        {/* Texto de copyright */}
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} Rychard Ryan. Todos os direitos reservados.
        </p>

        {/* Links adicionais para SEO */}
        <nav className="mt-4">
          <ul className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
            <li>
              <a
                href="#hero"
                className="hover:text-green-500 dark:hover:text-green-500 transition"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#profile"
                className="hover:text-green-500 dark:hover:text-green-500 transition"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#stack"
                className="hover:text-green-500 dark:hover:text-green-500 transition"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-green-500 dark:hover:text-green-500 transition"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-500 dark:hover:text-green-500 transition"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;