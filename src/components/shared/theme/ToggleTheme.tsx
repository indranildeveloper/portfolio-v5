"use client";

import { FC, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../../ui/Button";

const ToggleTheme: FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <div>
        <Button
          variant="outline"
          size="icon"
          className="p-2"
          onClick={() => handleThemeChange()}
        >
          {theme === "light" ? (
            <Sun className="duration-300 animate-in fade-in-5" />
          ) : (
            <Moon className="duration-300 animate-in fade-in-5" />
          )}
        </Button>
      </div>
    )
  );
};

export default ToggleTheme;
