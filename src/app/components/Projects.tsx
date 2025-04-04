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
        title: "Em breve",
        description: "Um novo projeto está a caminho! Fique atento para mais novidades.",
        image: "/breve.png",
        link: "#",
        tools: [],
    },
];

const Projects: React.FC = () => {
    const [modalData, setModalData] = useState<null | typeof projects[0]>(null);

    const handleOpenModal = (project: typeof projects[0]) => {
        setModalData(project);
    };

    const handleCloseModal = () => {
        setModalData(null);
    };

    return (
        <section
            id="projects"
            className="bg-gray-100 dark:bg-black min-h-screen py-12"
            aria-labelledby="projects-heading"
        >
            <div className="container mx-auto px-6">
                {/* Título da seção */}
                <h1
                    id="projects-heading"
                    className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-12"
                >
                    Meus Projetos
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                    Aqui estão alguns dos projetos que desenvolvi, utilizando tecnologias modernas e práticas de desenvolvimento eficientes.
                </p>

                {/* Grid de projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer rounded-lg shadow-lg overflow-hidden dark:bg-gradient-to-r from-emerald-100 to-teal-100"
                        >
                            {/* Card */}
                            <Image
                                src={project.image}
                                alt={`Imagem do projeto ${project.title}`}
                                width={400} // Largura da imagem
                                height={300} // Altura da imagem
                                className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-30"
                            />
                            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={() => handleOpenModal(project)}
                                    className="px-4 py-2 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-200 transition w-32 text-center"
                                    aria-label={`Saber mais sobre o projeto ${project.title}`}
                                >
                                    Saber mais
                                </button>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition w-32 text-center"
                                    aria-label={`Visitar o site do projeto ${project.title}`}
                                >
                                    Visitar
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modalData && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-11/12 max-w-md text-center">
                        <h2
                            id="modal-title"
                            className="text-2xl font-bold text-gray-800 dark:text-white mb-4"
                        >
                            {modalData.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {modalData.description}
                        </p>
                        {modalData.tools.length > 0 && (
                            <div className="flex justify-center space-x-4 mb-4">
                                {modalData.tools.map((tool, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <Image
                                            src={tool.logo}
                                            alt={`Logo da tecnologia ${tool.name}`}
                                            width={40} // Largura do logo
                                            height={40} // Altura do logo
                                            className="w-10 h-10"
                                        />
                                        <span className="text-xs mt-2 text-gray-800 dark:text-gray-300 rounded-lg px-2 py-1">
                                            {tool.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button
                            onClick={handleCloseModal}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                            aria-label="Fechar modal"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;