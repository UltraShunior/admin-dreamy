import { MoonStars } from "../assets/moonstars";
import { Sun } from "../assets/sun";
import useTheme from "../context/ThemeContext";

export const ToggleThemeButton = () => {
  const [theme, setTheme] = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border border-gray-500/20 rounded-full p-[0.4rem]"
    >
      {theme === "dark" ? <Sun /> : <MoonStars />}
    </button>
  );
};

export default ToggleThemeButton;
