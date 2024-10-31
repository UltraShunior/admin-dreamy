import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSidebar } from '../context/SidebarContext';

export function useResponsiveSidebar() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isOpen, toggleSidebar } = useSidebar();

  useEffect(() => {
    if (isMobile && isOpen) {
      toggleSidebar();
    }
    if (!isMobile && !isOpen) {
      toggleSidebar();
    }
  }, [isMobile]);

  return {
    isMobile,
    isOpen,
    toggleSidebar,
  };
} 