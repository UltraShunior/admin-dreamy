import { UserButton } from "@clerk/clerk-react";
import { Search } from "./Search";
import { ToggleThemeButton } from "./toggleThemeButton";
import { useSidebar } from "../context/SidebarContext";

export function Header() {
  const { isOpen } = useSidebar();

  return (
    <>
      <header
        className={`fixed top-0 left-0 flex justify-between items-center z-50 h-[4em] bg-white/60 border-b border-gray-500/20 backdrop-blur-[3px] dark:bg-black/60 header-transition duration-300  ${
          isOpen
            ? "w-[calc(100%-15rem)] ml-[15rem]"
            : "w-[calc(100%-4.4rem)] ml-[4.4rem]"
        }`}
      >
        <nav
          className={`mx-auto max-lg:w-[90%] flex justify-between items-center space-x-4 max-lg:space-x-0  ${
            isOpen ? "w-[calc(80%-4.4rem)]" : "w-[calc(80%-15rem)]"
          }`}
        >
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
