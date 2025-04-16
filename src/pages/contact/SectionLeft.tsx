// components/SectionLeft.tsx
import { MailOpen, MapPinCheckInside, Send } from "lucide-react";
import { useContactStore } from "../../stores/useContactStore";
import { Button } from "../../components/elements/Button";

export const SectionLeft = () => {
  const { contacts } = useContactStore();

  return (
    <>
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="w-60 lg:w-1/4 flex flex-col items-center gap-2 order-2 md:order-1"
        >
          {contact.whatsapps.map((whatsapp) => (
            <div key={whatsapp.name} className="w-full grid gap-2">
              <span className="font-bold">{whatsapp.name}</span>
              <Button
                href={whatsapp.url}
                variant="tertiary"
                text="Hubungi"
                icon={Send}
                iconClassName="w-5 h-5"
              />
            </div>
          ))}

          {contact.address.map((addres) => (
            <div key={addres.name} className="w-full grid gap-2 mt-2">
              <span className="font-bold">{addres.name}</span>
              <Button
                href={addres.location}
                variant="primary"
                text="Lihat Peta"
                icon={MapPinCheckInside}
                iconClassName="w-5 h-5"
              />
            </div>
          ))}

          {contact.emails.map((email) => (
            <div key={email.name} className="w-full grid gap-2 mt-2">
              <span className="font-bold">{email.name}</span>
              <Button
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email.url}`}
                variant="secondary"
                text="Email"
                icon={MailOpen}
                iconClassName="w-5 h-5"
              />
            </div>
          ))}
          <div className="grid gap-4">
            <div className="font-bold mt-4 text-primary">Toko Offline</div>
            {contact.operasionals.map((operasional) => (
              <div key={operasional.day} className="w-full">
                <div className="font-semibold">{operasional.day}</div>
                <div className="font-normal">{operasional.time}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
