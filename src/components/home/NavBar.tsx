import { useState, useEffect } from "react";

import { IconSun, IconMoon } from "@tabler/icons-react";

const NavBar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="h-11 fixed top-2 right-0 left-0 bottom-0 flex justify-between items-center px-6">
      <div></div>
      <div className="text-light dark:text-dark flex items-center gap-6">
        <button className="cursor-pointer" onClick={() => setDark(!dark)}>
          {dark ? <IconSun /> : <IconMoon />}
        </button>
        <button className="text-dark bg-button-primary dark:bg-button-primary px-6 py-2 rounded dark:text-dark cursor-pointer">
          Contact
        </button>
      </div>
    </div>
  );
};

export default NavBar;
