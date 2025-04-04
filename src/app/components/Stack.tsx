'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker, FaPython, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiPostgresql, SiMongodb, SiExpress, SiGraphql, SiFirebase } from 'react-icons/si';

// Lista de tecnologias com nome, ícone, descrição, porcentagem e tempo de experiência
const technologies = [
    { name: 'React', icon: <FaReact size={50} className="text-blue-400" />, percentage: 90, experience: '3 anos' },
    { name: 'Next.js', icon: <SiNextdotjs size={50} className="text-black dark:text-white" />, percentage: 85, experience: '2 anos' },
    { name: 'TypeScript', icon: <SiTypescript size={50} className="text-blue-500" />, percentage: 80, experience: '2 anos' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} className="text-blue-400" />, percentage: 75, experience: '1 ano' },
    { name: 'Node.js', icon: <FaNodeJs size={50} className="text-green-500" />, percentage: 85, experience: '3 anos' },
    { name: 'Express.js', icon: <SiExpress size={50} className="text-gray-500" />, percentage: 80, experience: '3 anos' },
    { name: 'GraphQL', icon: <SiGraphql size={50} className="text-pink-500" />, percentage: 70, experience: '1 ano' },
    { name: 'Prisma ORM', icon: <SiPrisma size={50} className="text-gray-500" />, percentage: 75, experience: '1 ano' },
    { name: 'PostgreSQL', icon: <SiPostgresql size={50} className="text-blue-600" />, percentage: 85, experience: '2 anos' },
    { name: 'MongoDB', icon: <SiMongodb size={50} className="text-green-600" />, percentage: 80, experience: '2 anos' },
    { name: 'Git', icon: <FaGitAlt size={50} className="text-red-500" />, percentage: 90, experience: '4 anos' },
    { name: 'GitHub', icon: <FaGithub size={50} className="text-black dark:text-white" />, percentage: 90, experience: '4 anos' },
    { name: 'Docker', icon: <FaDocker size={50} className="text-blue-500" />, percentage: 70, experience: '1 ano' },
    { name: 'Python', icon: <FaPython size={50} className="text-yellow-500" />, percentage: 75, experience: '2 anos' },
    { name: 'Firebase', icon: <SiFirebase size={50} className="text-yellow-400" />, percentage: 65, experience: '1 ano' },
    { name: 'AWS', icon: <FaAws size={50} className="text-orange-500" />, percentage: 60, experience: '1 ano' },
    { name: 'HTML5', icon: <FaHtml5 size={50} className="text-orange-500" />, percentage: 95, experience: '5 anos' },
    { name: 'CSS3', icon: <FaCss3Alt size={50} className="text-blue-500" />, percentage: 90, experience: '5 anos' },
];

export default function TechStack() {
    return (
        <section id="techstack" className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide">
                    <span className="text-green-500">Minhas</span> Habilidades
                </h2>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Aqui estão as tecnologias e ferramentas que utilizo para criar soluções inovadoras e eficientes.
                    Cada uma delas reflete minha experiência e dedicação ao desenvolvimento de software.
                </p>
                {/* Grid de Tecnologias */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            className="relative flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg cursor-pointer w-48 h-36"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Frente do card */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                {tech.icon}
                                <span className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    {tech.name}
                                </span>
                            </div>

                            {/* Verso do card */}
                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg p-4 opacity-0 hover:opacity-100"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                                    <div
                                        className="bg-green-500 h-2 rounded-full"
                                        style={{ width: `${tech.percentage}%` }}
                                    ></div>
                                </div>
                                <span className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    {tech.percentage}% de conhecimento
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {tech.experience} de experiência
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}