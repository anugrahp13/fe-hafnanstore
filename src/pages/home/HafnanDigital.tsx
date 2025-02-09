import { Button } from "../../components/elements/Button";
import { RiGlobalLine } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { HafnanDigitalsProps } from "./types/HafnanDigital.type";

interface HafnanDigitalsType {
  hafnandigitals: HafnanDigitalsProps[];
}

export const HafnanDigitals: React.FC<HafnanDigitalsType> = ({
  hafnandigitals,
}) => {
  return (
    <>
      {hafnandigitals.map((hafnandigital) => (
        <div
          className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1 grid gap-1 video-card"
          key={hafnandigital.id}
        >
          <div className="relative mb-3 w-full overflow-hidden aspect-w-9 aspect-h-16">
            <iframe
              src={`https://drive.google.com/file/d/${hafnandigital.videoUrl}/preview`}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="text-lg lg:text-base text-center font-bold tracking-tight line-clamp-2 mb-3 min-h-[3rem]">
            <span>{hafnandigital.name}</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center text-sm gap-2">
            <Button
              href={hafnandigital.landingPage}
              variant="secondary"
              text="LP"
              className="w-full lg:w-fit px-6 py-2"
              icon={RiGlobalLine}
              iconClassName="w-[1.10rem] h-[1.10rem]"
            />
            <Button
              href={hafnandigital.landingPage}
              variant="tertiary"
              text="Checkout"
              className="w-full lg:w-fit px-6 py-2"
              icon={IoBagCheckOutline}
              iconClassName="w-[1.10rem] h-[1.10rem]"
            />
          </div>
        </div>
      ))}
    </>
  );
};
