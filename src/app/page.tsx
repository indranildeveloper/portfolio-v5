import { FC } from "react";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  );
};

export default HomePage;
