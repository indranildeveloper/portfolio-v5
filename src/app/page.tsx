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
import Socials from "@/components/shared/layout/Socials";
import Email from "@/components/shared/layout/Email";

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <Socials />
      <Email />
      <main className="container px-20 lg:px-10">
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
