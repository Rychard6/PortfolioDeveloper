"use client";

import React, { useState } from "react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:rychardryan6@gmail.com?subject=Contato de ${formData.name}&body=${encodeURIComponent(
            `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
    };

    const handleWhatsApp = () => {
        const whatsappLink = `https://wa.me/5561982727934?text=${encodeURIComponent(
            "Olá, gostaria de entrar em contato!"
        )}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <section className="bg-gray-100 dark:bg-black min-h-screen py-12">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
                    Entre em Contato
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Formulário de Contato */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            Envie uma mensagem
                        </h2>
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-800 dark:text-gray-300 font-medium mb-2"
                            >
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-800 dark:text-gray-300 font-medium mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-gray-800 dark:text-gray-300 font-medium mb-2"
                            >
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                        >
                            Enviar
                        </button>
                    </form>

                    {/* Botão do WhatsApp */}
                    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                            Fale pelo WhatsApp
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                            Entre em contato diretamente pelo WhatsApp para uma resposta mais rápida.
                        </p>
                        <button
                            onClick={handleWhatsApp}
                            className="px-6 py-3 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 mr-2"
                            >
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.193 1.6 6.033L0 24l6.188-1.576C8.007 23.447 10.007 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.422 17.422c-.253.705-1.482 1.365-2.04 1.452-.518.08-1.18.114-1.9-.12-.44-.14-1.01-.33-1.74-.65-3.06-1.33-5.06-4.6-5.22-4.82-.16-.22-1.24-1.65-1.24-3.15 0-1.5.78-2.24 1.06-2.54.28-.3.62-.38.82-.38.2 0 .41.002.59.01.19.01.44-.07.69.53.25.6.87 2.08.95 2.23.08.15.13.33.03.53-.1.2-.15.33-.3.51-.15.18-.31.4-.45.54-.15.15-.3.31-.13.6.16.3.72 1.19 1.55 1.93 1.07.96 1.97 1.26 2.27 1.4.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.65-.15.25.1 1.6.75 1.87.89.27.15.45.22.52.34.08.12.08.7-.18 1.4z" />
                            </svg>
                            WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;