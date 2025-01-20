import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </>
  );
};
