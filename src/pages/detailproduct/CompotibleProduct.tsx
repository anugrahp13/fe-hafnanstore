import { NexasitesProps } from "../../types/Nexasite.type";

interface DetailProductProps {
  nexasites: NexasitesProps;
}
export const CompotibleProduct = ({ nexasites }: DetailProductProps) => {
  return (
    <>
      <div className="grid gap-2 mt-4">
        <div className="text-2xl font-bold">Template Cocok Untuk Siapa?</div>
        <div className="text-base space-y-2">
          {nexasites.compatibles.map((compatible, index) => (
            <li key={index} className="text-slate-800 dark:text-white">
              <span className="font-bold">{compatible.boldText}</span>
              {compatible.normalText}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
