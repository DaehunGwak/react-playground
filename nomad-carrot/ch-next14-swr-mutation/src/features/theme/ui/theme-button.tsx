'use client';

import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {FaMoon, FaSun} from "react-icons/fa6";

const LIGHT = "light";
const DARK = "dark";

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const {setTheme, resolvedTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>loading...</div>;
  }

  if (resolvedTheme === LIGHT) {
    return (
      <button
        onClick={() => setTheme(DARK)}
        className="w-5 h-5"
      >
        <FaMoon className="w-5 h-5"/>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(LIGHT)}
      className="w-5 h-5"
    >
      <FaSun className="w-5 h-5"/>
    </button>
  );
}
