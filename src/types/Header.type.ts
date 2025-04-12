import { RefObject } from "react";

export interface SidebarProps {
  isSidebarMenuOpen: boolean;
  sidebarRef: RefObject<HTMLDivElement>;
  handleMenuClick: () => void;
  setIsSidebarMenuOpen: (isOpen: boolean) => void;
}

export interface HeaderState {
  isSidebarMenuOpen: boolean;
  isScrolled: boolean;
  showScrollButton: boolean;
}
