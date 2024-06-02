import { useEffect, useState } from "react";

export interface UseDarkMode {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

/**
 *
 * Customised hook to manage dark mode
 * @return {*}  {UseDarkMode}
 */
const useDarkMode = (): UseDarkMode => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    updateDarkModeClass();
  }, [isDarkMode]);

  /**
   * Internal function to include or remove the ‘dark’ class from the body element based on the state of the dark mode.
   */
  const updateDarkModeClass = () => {
    const bodyElement = document.body;
    if (isDarkMode) {
      bodyElement.classList.add("dark");
    } else {
      bodyElement.classList.remove("dark");
    }
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
