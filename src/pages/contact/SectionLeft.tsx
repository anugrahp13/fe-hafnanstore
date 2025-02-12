import { ContactsProps } from "./types/Contact.type";
import { Button } from "../../components/elements/Button";
import { TiLocation } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

interface ContactsType {
  contacts: ContactsProps[];
}

export const SectionLeft: React.FC<ContactsType> = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="w-60 lg:w-1/4 flex flex-col items-center gap-2"
        >
          {contact.whatsapps.map((whatsapp) => (
            <div key={whatsapp.name} className="w-full grid gap-2">
              <span className="font-bold">{whatsapp.name}</span>
              <Button
                href={whatsapp.url}
                variant="tertiary"
                text="Hubungi"
                icon={FaWhatsapp}
                iconClassName="w-[1.30rem] h-[1.30rem]"
              />
            </div>
          ))}

          {contact.address.map((addres) => (
            <div key={addres.name} className="w-full grid gap-2 mt-4">
              <span className="font-bold">{addres.name}</span>
              <Button
                href={addres.location}
                variant="primary"
                text="Lihat Peta"
                icon={TiLocation}
                iconClassName="w-[1.30rem] h-[1.30rem]"
              />
            </div>
          ))}

          {contact.operasionals.map((operasional) => (
            <div key={operasional.day} className="w-full mt-4">
              <div className="font-bold">{operasional.day}</div>
              <div className="font-semibold">{operasional.time}</div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
