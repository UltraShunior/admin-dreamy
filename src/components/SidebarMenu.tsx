import { ReactNode, memo } from "react";
import { useSidebar } from "../context/SidebarContext";
import logoBlack from "../../public/DreamyLogoBlack.png";
import logoWhite from "../../public/DreamyLogoWhite.png";
import { useTheme } from "../context/ThemeContext";
import { SparklesCore } from "../ui/sparkles";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  to: string;
}

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowLeftToLine,
  ArrowRightFromLine,
} from "lucide-react";

interface CollapsibleSidebarItemProps {
  icon: ReactNode;
  text: string;
  children: ReactNode;
}

// Extract static styles
const SIDEBAR_ITEM_BASE_STYLES = `
  relative flex items-center py-2 px-3 my-1
  font-medium dark:text-gray-200 rounded-md cursor-pointer
   group
`;

// Memoize the SidebarItem component
export const SidebarItem = memo(
  ({ icon, text, active, to }: SidebarItemProps) => {
    const { isOpen } = useSidebar();
    return (
      <Link
        to={to}
        className={`
        ${SIDEBAR_ITEM_BASE_STYLES}
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 dark:bg-indigo-900/70 dark:text-indigo-200 dark:from-indigo-900 dark:to-indigo-900 dark:hover:text-indigo-200"
            : "hover:bg-indigo-50 text-gray-600 dark:hover:bg-indigo-900/70"
        }
    `}
      >
        <div className="min-w-[1.5rem]">{icon}</div>
        {isOpen && <span className="overflow-hidden w-52 ml-3">{text}</span>}
      </Link>
    );
  }
);

// Memoize the CollapsibleSidebarItem component
export const CollapsibleSidebarItem = memo(
  ({ icon, text, children }: CollapsibleSidebarItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const { isOpen: isOpenSidebar } = useSidebar();
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <li className="relative">
        <div
          onClick={toggleOpen}
          className={`
          flex items-center py-2 px-3 my-1
          font-medium dark:text-gray-200 rounded-md cursor-pointer
          transition-colors duration-200 ease-in-out
          group
          ${
            isOpen
              ? "bg-indigo-100 dark:bg-indigo-900/70"
              : "hover:bg-indigo-50 dark:hover:bg-indigo-900/70"
          }
        `}
        >
          <div className="min-w-[1.5rem]">{icon}</div>
          {isOpenSidebar && (
            <span className="overflow-hidden transition-transform duration-300 w-52 ml-3">
              {text}
            </span>
          )}
          {isOpenSidebar && isOpen && <ChevronUp className="w-4 h-4 ml-auto" />}
          {isOpenSidebar && !isOpen && (
            <ChevronDown className="w-4 h-4 ml-auto" />
          )}
        </div>
        <ul
          className={`
          pl-6 overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          {children}
        </ul>
      </li>
    );
  }
);

interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  const { isOpen, toggleSidebar } = useSidebar();
  const [theme] = useTheme();

  return (
    <aside
      className={`
        fixed top-0 left-0 z-40
        h-screen transition-width duration-300
        ${isOpen ? "w-[15rem]" : "w-[4.4rem]"}
        bg-white/60 dark:bg-black
        border-r border-gray-500/20
      `}
    >
      <div className="h-[4.4rem] px-4 pb-2 flex justify-between items-center z-20">
        <img
          src={theme === "dark" ? logoWhite : logoBlack}
          className={`overflow-hidden  ${isOpen ? "w-32" : "w-0"}`}
          alt="Dreamy Isotipo"
        />
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 z-20"
        >
          {isOpen ? (
            <ArrowLeftToLine className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          ) : (
            <ArrowRightFromLine className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>
      <nav className="h-full flex flex-col">
        <ul className="flex-1 px-3">{children}</ul>
      </nav>
    </aside>
  );
}

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
    </div>
  );
}
