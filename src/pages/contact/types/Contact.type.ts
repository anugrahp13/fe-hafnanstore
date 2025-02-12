export interface ContactsProps {
    id: number,
    address: {
        name: string,
        location: string,
    }[],
    whatsapps: {
        name: string,
        url: string,
    }[];
    operasionals: {
        day: string,
        time: string,
    }[];
  }
  