import { FC } from "react";
import Navbar from "@/components/shared/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/shared/layout/Footer";

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
