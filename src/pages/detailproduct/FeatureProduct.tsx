import { NexasitesProps } from "../../types/Nexasite.type";

interface DetailProductProps {
  nexasites: NexasitesProps;
}
export const FeatureProduct = ({ nexasites }: DetailProductProps) => {
  return (
    <>
      <div className="grid gap-2 mt-4">
        <div className="text-2xl font-bold">Keunggulan</div>
        <div className="text-base space-y-2">
          {nexasites.features.map((feature, index) => (
            <li key={index} className="text-slate-800 dark:text-white">
              <span className="font-bold">{feature.boldText}</span>
              {feature.normalText}
            </li>
          ))}
        </div>
      </div>
    </>
  );
};
