"use client";

import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "BubbleBox",
    description: "Uma plataforma inovadora para gestão de tags e rastreamento de dados.",
    image: "/bubblebox.jpeg",
    link: "https://bubbleboxtag.com.br/",
    tools: [
      { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
      { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    ],
  },
  {
    title: "CJR",
    description: "Site oficial da Empresa Júnior de Computação da UnB, com foco em inovação e tecnologia.",
    image: "/cjr.jpeg",
    link: "http://cjr.org.br/",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
      { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    ],
  },
  {
    title: "Uni Odonto",
    description: "Sistema para uma clínica odontológica. Confira as imagens abaixo.",
    image: "/Uniodonto1.jpeg",
    images: [
      "/Uniodonto1.jpeg",
      "/Uniodonto2.jpeg",
      "/Uniodonto3.jpeg",
      "/Uniodonto4.jpeg",
      "/Uniodonto5.jpeg",
      "/Uniodonto6.jpeg",
      "/Uniodonto7.jpeg",
      "/Uniodonto8.jpeg",
    ],
    link: "#",
    tools: [
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "NestJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    ],
  },
];

const Projects: React.FC = () => {
  const [modalData, setModalData] = useState<null | typeof projects[0]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenModal = (project: typeof projects[0]) => {
    setModalData(project);
    setCurrentImageIndex(0); // Reset to the first image
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const handleNextImage = () => {
    if (modalData && modalData.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % modalData.images.length);
    }
  };

  const handlePrevImage = () => {
    if (modalData && modalData.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? modalData.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-800 min-h-screen py-12 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Título da seção */}
        <h1
          id="projects-heading"
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white text-center mb-2"
        >
          Meus Projetos
        </h1>
        <div className="w-32 h-1 bg-green-500 mx-auto mb-8"></div>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Aqui estão alguns dos projetos que desenvolvi, utilizando tecnologias modernas e práticas de desenvolvimento eficientes.
        </p>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-700"
            >
              {/* Card */}
              <Image
                src={project.image}
                alt={`Imagem do projeto ${project.title}`}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleOpenModal(project)}
                  className="px-4 py-2 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-200 transition text-sm sm:text-base"
                  aria-label={`Saber mais sobre o projeto ${project.title}`}
                >
                  Saber mais
                </button>
                {project.link === "#" ? (
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition text-sm sm:text-base"
                    aria-label={`Abrir modal do projeto ${project.title}`}
                  >
                    Visitar
                  </button>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition text-sm sm:text-base"
                    aria-label={`Visitar o site do projeto ${project.title}`}
                  >
                    Visitar
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData && modalData.link === "#" && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-black rounded-lg shadow-lg w-full max-w-4xl h-[90vh] flex items-center justify-center">
            {/* Imagem principal */}
            {modalData.images && modalData.images.length > 0 && (
              <div className="relative w-full h-full flex items-center justify-center">
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
                  aria-label="Imagem anterior"
                >
                  &#8592;
                </button>
                <Image
                  src={modalData.images[currentImageIndex]}
                  alt={`Imagem ${currentImageIndex + 1} do projeto ${modalData.title}`}
                  width={1200}
                  height={800}
                  className="w-auto h-full object-contain"
                />
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
                  aria-label="Próxima imagem"
                >
                  &#8594;
                </button>
              </div>
            )}
            {/* Botão de fechar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 shadow hover:bg-red-600"
              aria-label="Fechar modal"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;