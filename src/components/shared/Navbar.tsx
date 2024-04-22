import { FC } from "react";
import ToggleTheme from "./ToggleTheme";

const Navbar: FC = () => {
  return (
    <nav className="border px-10 py-6">
      <header className="flex justify-between">
        <h4>Indranil Halder</h4>
        <ToggleTheme />
      </header>
    </nav>
  );
};

export default Navbar;
