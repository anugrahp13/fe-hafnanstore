import { IconType } from "react-icons";

export interface ButtonProps {
  href?: string;
  to?: string;
  text: string;
  icon?: IconType; // Menggunakan IconType untuk ikon dari react-icons
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
  iconClassName?: string;
}
