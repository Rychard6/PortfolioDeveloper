'use client';

import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <section
      id="profile"
      className="py-20 bg-gray-100 dark:bg-gray-800"
      aria-labelledby="profile-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Título da seção */}
        <motion.h2
          id="profile-heading"
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-500">Minha</span> Jornada
        </motion.h2>
        <motion.p
          className="mt-4 text-sm sm:text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Acompanhe minha trajetória profissional e acadêmica, desde o início até os dias atuais.
        </motion.p>

        {/* Linha do tempo */}
        <div className="relative mt-16">
          {/* Linha vertical */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500"
            aria-hidden="true"
          ></div>

          {/* Itens da linha do tempo */}
          <div className="space-y-16">
            {/* Item 1 */}
            <motion.div
              className="relative flex flex-col items-center md:items-start md:flex-row"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Bolinha */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                aria-hidden="true"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-gray-100 dark:border-black"></div>
              </div>

              {/* Data */}
              <span className="absolute left-[calc(50%+0rem)] transform translate-x-full text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-400">
                2022
              </span>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 border border-green-500 rounded-lg p-4 sm:p-6 shadow-lg w-full md:w-[45%] ml-0 md:ml-12 mt-8 md:mt-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                  Desenvolvedor Full Stack -{' '}
                  <span className="text-green-500">Empresa Junior de Computação - CJR</span>
                </h3>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">2022 - Atualmente</span>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Desenvolvimento de aplicações web utilizando React e Node.js. Colaboração em projetos internos e externos para clientes, com foco em boas práticas de desenvolvimento.
                </p>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              className="relative flex flex-col items-center md:items-end md:flex-row-reverse"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Bolinha */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                aria-hidden="true"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-gray-100 dark:border-black"></div>
              </div>

              {/* Data */}
              <span className="absolute left-[calc(50%-2rem)] transform -translate-x-full text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-400">
                2024
              </span>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 border border-green-500 rounded-lg p-4 sm:p-6 shadow-lg w-full md:w-[45%] mr-0 md:mr-12 mt-8 md:mt-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                  Estagiário de Desenvolvimento -{' '}
                  <span className="text-green-500">Central IT</span>
                </h3>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Jan 2024 - Jan 2025</span>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Manutenção e desenvolvimento de sistemas internos, integração de APIs e otimização de performance. Participação em reuniões de planejamento e definição de requisitos.
                </p>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              className="relative flex flex-col items-center md:items-start md:flex-row"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Bolinha */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                aria-hidden="true"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-gray-100 dark:border-black"></div>
              </div>

              {/* Data */}
              <span className="absolute left-[calc(50%+0rem)] transform translate-x-full text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-400">
                2025
              </span>

              {/* Card */}
              <div className="bg-white dark:bg-gray-800 border border-green-500 rounded-lg p-4 sm:p-6 shadow-lg w-full md:w-[45%] ml-0 md:ml-12 mt-8 md:mt-0">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                  Desenvolvedor Júnior -{' '}
                  <span className="text-green-500">Holding Canuto</span>
                </h3>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Jan 2025 - Atualmente</span>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  Desenvolvimento de novas funcionalidades em sistemas corporativos, colaboração com equipes multidisciplinares e utilização de tecnologias modernas como TypeScript e GraphQL.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}