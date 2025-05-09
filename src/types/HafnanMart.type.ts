import { IconType } from "react-icons";

export interface HafnanMartsProps {
  id: number;
  name: string;
  category: string;
  image: string;
  marketplaces: {
    name: string;
    icon?: IconType;
    url: string;
  }[];
}
