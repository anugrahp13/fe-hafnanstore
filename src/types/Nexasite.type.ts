import { LucideIcon } from "lucide-react";

export interface InstructionItem {
  title: string;
  commands: string; // Bisa juga dibuat string | string[] jika ingin fleksibel
}

export interface CreatorProps {
  id: number;
  name: string;
  username: string;
  position: string;
  image: string;
  description: string;
  socialMedia: string[];
  iconMedia: LucideIcon[];
}

export interface ReviewProps {
  id: number;
  productId: number; // Tambahkan ini untuk relasi dengan produk
  name: string;
  image: string;
  rating: number;
  review: string;
}

export interface NexasitesProps {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string[];
  role: string;
  url: string;
  price: number;
  paymentLink: string;
  downloadUrl: string;
  sale: number;
  author: string;
  creator?: CreatorProps;
  review?: ReviewProps;
  nameTechStack: string[];
  imageTechStack: string[];
  linkTechStack: string[];
  information: {
    lastUpdate: string;
    published: string;
    resolution: string;
    browser: string[];
    fileIncluded: string[];
    layout: string;
  }[];
  nameTool: string[];
  imageTool: string[];
  linkTool: string[];
  instructions: InstructionItem[];
  features: {
    boldText: string;
    normalText: string;
  }[];
  compatibles: {
    boldText: string;
    normalText: string;
  }[];
  chooses: {
    boldText: string;
    normalText: string;
  }[];
}
