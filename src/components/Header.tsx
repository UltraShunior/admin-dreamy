import { UserButton } from "@clerk/clerk-react";
import { Search } from "./Search";
import { Link } from "react-router-dom";
import { ToggleThemeButton } from "./toggleThemeButton";

export function Header() {
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center z-50 h-[4em] bg-white/50 border-b border-gray-800/35 backdrop-blur-[3px] dark:border-gray-200/10 dark:bg-black/30 transition-all duration-300`}
      >
        <nav className="w-[70%] mx-auto max-lg:w-[90%] flex justify-between items-center space-x-4 max-lg:space-x-0">
          <Link
            to="/"
            className="text-slate-950 text-2xl font-bold dark:text-white transition-all duration-300"
            replace
          >
            Dreamy
          </Link>
          <Search />
          <div className="h-full flex items-center space-x-4">
            <ToggleThemeButton />
            <UserButton />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
