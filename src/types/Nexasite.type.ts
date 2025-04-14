export interface InstructionItem {
  title: string;
  commands: string; // Bisa juga dibuat string | string[] jika ingin fleksibel
}

export interface NexasitesProps {
  id: number;
  name: string;
  author: string;
  category: string;
  image: string;
  description: string[];
  role: string;
  url: string;
  price: number;
  sale: number;
  nameTechStack: string[];
  imageTechStack: string[];
  linkTechStack: string[];
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
