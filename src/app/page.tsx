
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Meta Tags para SEO */}
      <head>
        <title>Rychard Ryan - Desenvolvedor de Software</title>
        <meta
          name="description"
          content="Portfólio de Rychard Ryan, desenvolvedor de software especializado em React, Next.js, Node.js e outras tecnologias modernas. Confira meus projetos e habilidades."
        />
        <meta
          name="keywords"
          content="Rychard Ryan, desenvolvedor de software, React, Next.js, Node.js, portfólio, desenvolvimento web, Tailwind CSS, TypeScript"
        />
        <meta name="author" content="Rychard Ryan" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://rychardryan.com.br" />
      </head>

      {/* Estrutura principal */}
      <Navbar />
      <Hero />
      <Profile />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}