import Header from "./components/Header";
import {
  Sidebar,
  SidebarItem,
  CollapsibleSidebarItem,
} from "./components/SidebarMenu";
import {
  Home,
  LayoutPanelTop,
  Folder,
  GalleryVerticalEnd,
  Package,
} from "lucide-react";
import { useSidebar } from "./context/SidebarContext";
import { memo } from "react";
import { SparklesCore } from "./ui/sparkles";
import { useMediaQuery } from "react-responsive";

// Define the menu items array
const menuItems = [
  { icon: <Home />, text: "Home", to: "/" },
  { icon: <LayoutPanelTop />, text: "Billboard", to: "/billboard" },
  { icon: <GalleryVerticalEnd />, text: "Categories", to: "/categories" },
  { icon: <Package />, text: "Products", to: "/products" },
];

// Add type for active route
type ActiveRoute = "Home" | "Billboard" | "Categories" | "Products";

// Create a single memoized MenuItem component
const MenuItem = memo(
  ({
    icon,
    text,
    to,
    active,
  }: {
    icon: React.ReactNode;
    text: string;
    to: string;
    active: boolean;
  }) => <SidebarItem icon={icon} text={text} active={active} to={to} />
);

MenuItem.displayName = "MenuItem";

const NestedContent = memo(() => (
  <SidebarItem icon={<Home />} text="No home" active={false} to="/" />
));

const FolderSection = memo(() => (
  <CollapsibleSidebarItem icon={<Folder />} text="Open">
    <NestedContent />
  </CollapsibleSidebarItem>
));

// Update Layout props type
interface LayoutProps {
  children: React.ReactNode;
  activeRoute: ActiveRoute;
}

// Memoize the main Layout component
export const Layout = memo(({ children, activeRoute }: LayoutProps) => {
  const { isOpen } = useSidebar();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <Header />
      <Sidebar>
        {menuItems.map((item) => (
          <MenuItem
            key={item.to}
            {...item}
            active={item.text.toLowerCase() === activeRoute.toLowerCase()}
          />
        ))}
        <FolderSection />
      </Sidebar>
      <main
        className={`mt-[4rem] z-10 ${
          isOpen && !isMobile ? "ml-[15rem]" : "ml-[4.4rem]"
        } transition-margin duration-300`}
      >
        <div className="w-full absolute inset-0 h-screen z-0">
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
        {children}
      </main>
      <div className="hidden fixed top-screen right-[30%] -z-5 h-[31rem] w-[44rem] rounded-full blur-[18rem] dark:block dark:bg-[#8176f2] max-sm:h-[20rem] max-sm:right-[4rem] max-sm:top-[12rem] sm:w-[44rem] sm:h-[20rem] "></div>
    </>
  );
});

Layout.displayName = "Layout";
