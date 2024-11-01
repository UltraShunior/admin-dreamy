import Header from "@components/Header";
import {
  Sidebar,
  SidebarItem,
  CollapsibleSidebarItem,
} from "@components/SidebarMenu";
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
        className={`py-[4rem] z-10 ${
          isOpen && !isMobile ? "ml-[15rem]" : "ml-[4.4rem]"
        } transition-margin duration-300`}
      >
        <div className="w-full absolute inset-0 h-screen z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.2}
            maxSize={1.8}
            particleDensity={5}
            className="w-full h-full"
            particleColor={"#8176f2"}
          />
        </div>
        {children}
      </main>
    </>
  );
});

Layout.displayName = "Layout";
