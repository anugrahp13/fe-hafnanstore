export interface HafnanMartsProps {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  marketplaces: {
    name: string;
    logo: string;
    url: string;
  }[];
  detail: {
    condition: string;
    minOrder: string;
    storefront: string;
    description: string;
  }[];
  specification: {
    storage: string;
    timeStorage: string;
  }[];
}
