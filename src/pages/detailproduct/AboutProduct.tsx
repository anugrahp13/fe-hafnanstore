import { NexasitesProps } from "../../types/Nexasite.type";

interface DetailProductProps {
  nexasites: NexasitesProps;
}
export const AboutProduct = ({ nexasites }: DetailProductProps) => {
  return (
    <>
      <div className="text-2xl font-bold">Tentang</div>
      <div className="text-base space-y-2">
        <span className="font-bold">{nexasites.category}</span>{" "}
        <span className="text-slate-800 dark:text-white">
          {nexasites.description[0]}
        </span>
        {nexasites.description.slice(1).map((description, index) => (
          <p key={index} className="text-slate-800 dark:text-white">
            {description}
          </p>
        ))}
      </div>
    </>
  );
};
