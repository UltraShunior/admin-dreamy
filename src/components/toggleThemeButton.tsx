import useTheme from "../hooks/useTheme";
import { MoonStars } from "../assets/moonstars";
import { Sun } from "../assets/sun";

export const ToggleThemeButton = () => {
  const [theme, setTheme] = useTheme();
  return (
    <button
      className="bg-white no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 dark:bg-slate-950 text-black inline-block border border-gray-950 dark:border-white/30 transition-all duration-300 z-50"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full ">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(185,56,248,0.4)_0%,rgba(185,56,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="w-[2rem] h-[2rem] flex items-center justify-center">
        <span className="dark:text-white">
          {theme === "dark" ? <Sun /> : <MoonStars />}
        </span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default ToggleThemeButton;
