"use client";

import React, { useState } from "react";

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
        <section className="bg-gray-100 dark:bg-black min-h-screen py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
                    Meus Projetos
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Card */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-30"
                            />
                            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={() => handleOpenModal(project)}
                                    className="px-4 py-2 bg-white text-gray-800 rounded-lg shadow hover:bg-gray-200 transition w-32 text-center"
                                >
                                    Saber mais
                                </button>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition w-32 text-center"
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-11/12 max-w-md text-center">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                            {modalData.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {modalData.description}
                        </p>
                        {modalData.tools.length > 0 && (
                            <div className="flex justify-center space-x-4 mb-4">
                                {modalData.tools.map((tool, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                        <img
                                            src={tool.logo}
                                            alt={tool.name}
                                            className="w-10 h-10"
                                        />
                                        <span className="text-xs mt-2 text-gray-800 dark:text-gray-300">
                                            {tool.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                        <button
                            onClick={handleCloseModal}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
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