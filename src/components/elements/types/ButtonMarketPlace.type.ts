import { IconType } from "react-icons";

export interface ButtonMarketPlaceProps {
  href?: string;
  to?: string;
  icon?: IconType; // Menggunakan IconType untuk ikon dari react-icons
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
  iconClassName?: string;
}
