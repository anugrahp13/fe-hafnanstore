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
