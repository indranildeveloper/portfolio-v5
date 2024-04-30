import { FC } from "react";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
      </main>
    </>
  );
};

export default HomePage;
