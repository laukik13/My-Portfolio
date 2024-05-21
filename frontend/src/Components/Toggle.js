import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeHook } from "../Context/ThemeContext";

const Toggle = () => {
  //  const[mode,setMode]= useState("day");

  const { theme, setTheme } = ThemeHook();

//   console.log(theme);

   const toggleTheme = () =>{

      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme); 

    }


  return (
    <>
      <div className="header-switch px-3">
        <FaSun className="icon-switch" />
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            onClick={toggleTheme}
            type="checkbox"
            checked={theme === "dark"}
          />
        </div>
        <FaMoon className="icon-switch" />
      </div>
    </>
  );
};

export default Toggle;
