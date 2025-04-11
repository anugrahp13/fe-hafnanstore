import { LucideIcon } from "lucide-react";

export interface ButtonProps {
  href?: string;
  to?: string;
  text: string;
  icon?: LucideIcon; // Menggunakan LucideIcon sebagai tipe
  variant: "primary" | "secondary" | "tertiary";
  className?: string;
  iconClassName?: string;
}