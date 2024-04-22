import { FC } from "react";
import Navbar from "@/components/shared/Navbar";

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Hello there!</h1>
      </main>
    </>
  );
};

export default HomePage;
