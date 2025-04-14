import { NexasitesProps } from "../../types/Nexasite.type";

interface DetailProductProps {
  nexasites: NexasitesProps;
}
export const ChooseProduct = ({ nexasites }: DetailProductProps) => {
  return (
    <>
      <div className="grid gap-2 mt-4">
        <div className="text-2xl font-bold">Mengapa Memilih Template Ini?</div>
        <div className="text-base space-y-2">
          {nexasites.chooses.map((choose, index) => (
            <li key={index} className="text-slate-800 dark:text-white">
              <span className="font-bold">{choose.boldText}</span>
              {choose.normalText}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
