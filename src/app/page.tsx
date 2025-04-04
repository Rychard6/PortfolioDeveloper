import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Profile />
      <Stack />
      <Projects />
      <Contact />
    </>
  );
}
