export interface ContactsProps {
  id: number;
  emails: {
    name: string;
    url: string;
  }[];
  address: {
    name: string;
    location: string;
  }[];
  whatsapps: {
    name: string;
    url: string;
  }[];
  operasionals: {
    day: string;
    time: string;
  }[];
}
